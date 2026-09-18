#!/usr/bin/env node
/**
 * prove:slop — `check:slop` が「鳴るべき経路で鳴り、鳴ってはいけない経路で鳴らない」
 * ことを、**故意の違反をファイルへ差し込んで**実証する。差し込みは必ず元に戻す。
 *
 * なぜスクリプトとして残すか: CLAUDE.md の約束「未実証のガード、および『0 件』という
 * 結果は信用しない」を、PR 本文の主張ではなく**再実行できる形**で置くため。ガードの
 * 正規表現やスキャン対象を触ったら、まずこれを走らせる。
 *
 * **鳴らないことの確認が半分を占める**のが要点。2026-07-26 の 4 件（lint-staged 経由で
 * 常に素通りするラチェット、Windows でだけ落ちる `check:llms`、自己検証できなかった
 * T33、リリース PR を構造的に止める `check:llms`）は、いずれも「通る経路のどれか 1 つを
 * 試していなかった」ために出た。
 *
 * Usage: npm run prove:slop
 */
import fs from 'fs';
import { execFileSync } from 'node:child_process';

const run = () => {
  try {
    return { code: 0, out: execFileSync('node', ['scripts/check-slop.js'], { encoding: 'utf8' }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? '') + (e.stderr ?? '') };
  }
};

const CASES = [
  {
    name: 'A. 斜めグラデを部品 SCSS に差し込む（to top left）',
    file: 'src/components/layout/BentoGrid/bento-grid.module.scss',
    find: '      background-color: var(--wim-color-surface-subtle);',
    put: '      background: linear-gradient(to top left, var(--wim-color-primary-muted), transparent);',
    expect: true,
    match: /to top left/,
  },
  {
    name: 'B. 45deg を部品 SCSS に差し込む',
    file: 'src/components/layout/BentoGrid/bento-grid.module.scss',
    find: '      background-color: var(--wim-color-surface-subtle);',
    put: '      background: linear-gradient(45deg, var(--wim-color-primary-muted), transparent);',
    expect: true,
    match: /45deg/,
  },
  {
    name: 'C. 軸に平行な 180deg は鳴らない',
    file: 'src/components/layout/BentoGrid/bento-grid.module.scss',
    find: '      background-color: var(--wim-color-surface-subtle);',
    put: '      background: linear-gradient(180deg, var(--wim-color-primary-muted), transparent);',
    expect: false,
  },
  {
    name: 'C2. 145deg は鳴らない（45deg が数字の途中で刺さらないこと）',
    file: 'src/components/layout/BentoGrid/bento-grid.module.scss',
    find: '      background-color: var(--wim-color-surface-subtle);',
    put: '      background: linear-gradient(145deg, var(--wim-color-primary-muted), transparent);',
    expect: false,
  },
  {
    name: 'C3. 90deg の shimmer（既存 4 件）は鳴らない',
    file: 'src/components/feedback/Skeleton/skeleton.module.scss',
    find: '        90deg,',
    put: '        90deg, /* ローディングの横流し。装飾ではない */',
    expect: false,
  },
  {
    name: 'D. 定型名 Alice をストーリーコピーへ差し込む',
    file: 'public/locales/en/docs_stories_display.json',
    find: '    "list_step1": "Soak the beans overnight",',
    put: '    "list_step1": "Alice soaks the beans overnight",',
    expect: true,
    match: /Alice/,
  },
  {
    name: 'E. 空コピーを stories TSX へ直書きする',
    file: 'stories/data-display/List/List.stories.tsx',
    find: '          <ListItem>{t("story.list_step1")}</ListItem>',
    put: '          <ListItem>This is a description</ListItem>',
    expect: true,
    match: /This is a description/,
  },
  {
    name: 'F. 同じ空コピーを**コメント**に書いても鳴らない（規則を実装の隣に書ける）',
    file: 'stories/data-display/List/List.stories.tsx',
    find: '          <ListItem>{t("story.list_step1")}</ListItem>',
    put: '          {/* 禁止例: This is a description */}\n          <ListItem>{t("story.list_step1")}</ListItem>',
    expect: false,
  },
  {
    name: 'G. 入力欄 placeholder の氏名例（John Doe）は鳴らない',
    file: 'public/locales/en/docs_stories_display.json',
    find: '    "list_step1": "Soak the beans overnight",',
    put: '    "list_step1_placeholder": "John Doe",\n    "list_step1": "Soak the beans overnight",',
    expect: false,
  },
  {
    name: 'H. px 直書きを合成画面に 1 件足すとラチェットが鳴る',
    file: 'stories/Patterns/Form/Form.stories.tsx',
    find: '          padding: "var(--wim-spacing-2xl)",',
    put: '          padding: "var(--wim-spacing-2xl)",\n          marginTop: "13px",',
    expect: true,
    match: /baseline 超過|ベースライン超過/,
  },
];

let allOk = true;
for (const c of CASES) {
  const before = fs.readFileSync(c.file, 'utf8');
  if (!before.includes(c.find)) {
    console.log(`?? ${c.name}: アンカーが見つからない（${c.file}）`);
    allOk = false;
    continue;
  }
  fs.writeFileSync(c.file, before.replace(c.find, c.put));
  const { code, out } = run();
  fs.writeFileSync(c.file, before);

  const rang = code !== 0;
  const matched = c.match ? c.match.test(out) : true;
  const ok = rang === c.expect && (!c.expect || matched);
  allOk = allOk && ok;
  console.log(
    `${ok ? 'OK ' : 'NG '} ${c.name} → ${rang ? '鳴った' : '鳴らない'}（期待: ${c.expect ? '鳴る' : '鳴らない'}）`,
  );
  if (!ok && c.expect) console.log(out.split('\n').slice(0, 14).join('\n'));
}

// 差し込みを戻せているかを git で確認する。
const dirty = execFileSync('git', ['status', '--porcelain', ...CASES.map((c) => c.file)], {
  encoding: 'utf8',
});
console.log('\n差し込み後の状態（元ファイルに戻っているか）:');
console.log(dirty.trim() || '  (このスクリプトが触ったファイルに未コミット差分なし)');
process.exit(allOk ? 0 : 1);
