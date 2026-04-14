# wimui

## 髢狗匱

### Storybook 襍ｷ蜍・

```
npm run storybook
```

### 繝代ャ繧ｱ繝ｼ繧ｸ繝舌・繧ｸ繝ｧ繝ｳ遒ｺ隱・

```
npm outdated
```

## 蜩∬ｳｪ繝√ぉ繝・け

### SCSS

```
npm run stylelint       # src繝ｻstories繝輔か繝ｫ繝蜀・・CSS/SCSS縺ｮ蜩∬ｳｪ遒ｺ隱・
npm run stylelint:fix   # src繝ｻstories繝輔か繝ｫ繝蜀・・CSS/SCSS繧定・蜍穂ｿｮ豁｣
```

### JavaScript / TypeScript

```
npm run lint            # src繝ｻstories繝輔か繝ｫ繝蜀・・JS/TS縺ｮ蜩∬ｳｪ遒ｺ隱搾ｼ・mdx繧帝勁縺上∬ｭｦ蜻翫ぞ繝ｭ縺悟ｿ・茨ｼ・
npm run lint:fix        # src繝ｻstories繝輔か繝ｫ繝蜀・・JS/TS繧定・蜍穂ｿｮ豁｣
```

### 蜊倅ｽ薙ユ繧ｹ繝・

```
npm run test            # 繧ｳ繝ｳ繝昴・繝阪Φ繝亥腰菴薙ユ繧ｹ繝・(*.test.tsx) 繧貞ｮ溯｡・
```

### 繝・せ繝医き繝舌Ξ繝・ず

```
npm run test:coverage   # coverage/ 縺ｫ繝悶Λ繧ｦ繧ｶ縺ｧ遒ｺ隱榊庄閭ｽ縺ｪHTML繝ｬ繝昴・繝医ｒ逕滓・
```

### 譛ｪ繝・せ繝医さ繝ｳ繝昴・繝阪Φ繝・

```
npm run test:check      # 譛ｪ繝・せ繝医さ繝ｳ繝昴・繝阪Φ繝医・繝ｪ繧ｹ繝・(stories/missing_tests.txt) 繧呈峩譁ｰ
npm run test:report     # 繧ｫ繝舌Ξ繝・ず貂ｬ螳壹→譛ｪ繝・せ繝医メ繧ｧ繝・け繧貞酔譎ゅ↓螳溯｡・
```

### VRT (Visual Regression Testing)

```
npm run test:vrt                                        # 繧ｹ繝翫ャ繝励す繝ｧ繝・ヨ縺ｨ豈碑ｼ・
npm run test:vrt:update                                 # 繧ｹ繝翫ャ繝励す繝ｧ繝・ヨ繧呈峩譁ｰ
npm run test:vrt:report                                 # 蟾ｮ蛻・ｒ繧ｹ繝ｩ繧､繝繝ｼ蠖｢蠑上〒遒ｺ隱・
$env:FILTER='Calendar'; npm run test:vrt:update         # Calendar縺ｮ繧ｹ繝翫ャ繝励す繝ｧ繝・ヨ縺ｮ縺ｿ譖ｴ譁ｰ
```

#### 迺ｰ蠅・､画焚

```
$env:THEME='light'                               # 繝ｩ繧､繝医Δ繝ｼ繝峨・縺ｿ螳溯｡・
$env:THEME='dark'                                # 繝繝ｼ繧ｯ繝｢繝ｼ繝峨・縺ｿ螳溯｡・
$env:FILTER='Button'                             # Button繧ｳ繝ｳ繝昴・繝阪Φ繝医・縺ｿ螳溯｡・
$env:THEME='light'; $env:FILTER='Button'         # Button縺ｮ繝ｩ繧､繝医Δ繝ｼ繝峨・縺ｿVRT
$env:THEME='dark'; $env:FILTER='Calendar'        # Calendar縺ｮ繝繝ｼ繧ｯ繝｢繝ｼ繝峨・縺ｿVRT
$env:THEME=$null; $env:FILTER=$null              # 迺ｰ蠅・､画焚繧偵Μ繧ｻ繝・ヨ
```

### a11y

```
npx playwright test vrt/a11y.spec.ts                                        # 蜈ｨ繧ｹ繝医・繝ｪ繝ｼ縺ｮa11y繝√ぉ繝・け
$env:FILTER='Button'; npx playwright test vrt/a11y.spec.ts                  # Button縺ｮ縺ｿ
```

### 繝舌Φ繝峨Ν繧ｵ繧､繧ｺ

```
npm run size   # ES繝｢繧ｸ繝･繝ｼ繝ｫ蜈ｨ繝√Ε繝ｳ繧ｯ(gzip)縺ｨUMD繝舌Φ繝峨Ν(gzip)縺碁明蛟､蜀・°繝√ぉ繝・け
```

### MDX / 讒矩

```bash
npm run audit-mdx                # MDX縺ｮ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ貍上ｌ縺後↑縺・°
node scripts/check-aschild.js    # asChild 縺ｮ螳溯｣・ｒ蠢倥ｌ縺ｦ縺・↑縺・°
```

髢ｾ蛟､縺ｯCI・・bundle-size.yml`・峨〒繧り・蜍慕｢ｺ隱阪＆繧後∪縺吶・

### Storybook docs 繧ｨ繝ｩ繝ｼ讀懃衍

MDX 繝輔ぃ繧､繝ｫ縺ｧ蜿ら・縺励※縺・ｋ繧ｹ繝医・繝ｪ繝ｼ蜷阪′螳滄圀縺ｮ繧ｨ繧ｯ繧ｹ繝昴・繝医→荳閾ｴ縺励↑縺・ｴ蜷医ヾtorybook 縺ｮ繝薙Ν繝画凾縺ｫ繧ｨ繝ｩ繝ｼ縺悟・蜉帙＆繧後∪縺吶・

```
npm run build-storybook   # 繝薙Ν繝峨お繝ｩ繝ｼ縺ｨ縺励※繧ｨ繝ｩ繝ｼ縺ｮ縺ゅｋ繝壹・繧ｸ繧呈､懃衍
```

繧ｨ繝ｩ繝ｼ縺悟・縺溷ｴ蜷医・讓呎ｺ悶お繝ｩ繝ｼ蜃ｺ蜉帙↓ `error` 縺悟性縺ｾ繧後ｋ陦後→縺励※陦ｨ遉ｺ縺輔ｌ縺ｾ縺吶・

繧医￥縺ゅｋ蜴溷屏・・

- MDX 縺ｮ `<Canvas of={Stories.ExportName} />` 縺ｧ `ExportName` 縺後せ繝医・繝ｪ繝ｼ繝輔ぃ繧､繝ｫ縺ｫ蟄伜惠縺励↑縺・
- MDX 縺ｮ `<Controls of={Stories.ExportName} />` 縺ｧ蜷御ｸ・
- `<Markdown>` 繧ｳ繝ｳ繝昴・繝阪Φ繝医↓譁・ｭ怜・縺ｧ縺ｯ縺ｪ縺・JSX 繧呈ｸ｡縺励※縺・ｋ

## 繧ｳ繝ｼ繝画紛蠖｢

```
npm run format   # 繝励Ο繧ｸ繧ｧ繧ｯ繝亥・菴薙ｒPrettier縺ｧ謨ｴ蠖｢
```

## 蝗ｽ髫帛喧 (i18n)

```
npm run i18n:check              # 3險隱槭☆縺ｹ縺ｦ縺ｫ鄙ｻ險ｳ繧ｭ繝ｼ縺悟ｭ伜惠縺吶ｋ縺具ｼ医Ο繧ｱ繝ｼ繝ｫ髢薙・谺關ｽ繝√ぉ繝・け・・
npm run i18n:check:components   # 繧ｳ繝ｳ繝昴・繝阪Φ繝医た繝ｼ繧ｹ縺ｧ菴ｿ繧上ｌ縺ｦ縺・ｋ繧ｭ繝ｼ縺檎ｿｻ險ｳ繝輔ぃ繧､繝ｫ縺ｫ蟄伜惠縺吶ｋ縺九メ繧ｧ繝・け
npm run i18n:sync               # en繧貞渕貅悶↓ja/pt縺ｸGoogle AI縺ｧ閾ｪ蜍慕ｿｻ險ｳ繝ｻ霑ｽ險假ｼ郁ｦ・ GOOGLE_GENERATIVE_AI_API_KEY・・
```

### 2縺､縺ｮ繝√ぉ繝・け繧ｹ繧ｯ繝ｪ繝励ヨ縺ｮ菴ｿ縺・・縺・

| 繧ｹ繧ｯ繝ｪ繝励ヨ | 讀懷・縺ｧ縺阪ｋ繧ｱ繝ｼ繧ｹ |
|---|---|
| `i18n:check` | 繝ｭ繧ｱ繝ｼ繝ｫ髢薙・谺關ｽ・・n 縺ｫ鄙ｻ險ｳ縺後≠繧九′ ja/pt 縺ｫ譛ｪ霑ｽ蜉・・|
| `i18n:check:components` | 繧ｳ繝ｼ繝峨〒 `t("key")` 繧剃ｽｿ縺・ｧ九ａ縺溘′縺ｩ縺ｮ繝ｭ繧ｱ繝ｼ繝ｫ縺ｫ繧よ悴逋ｻ骭ｲ |

**Namespace 縺ｮ閾ｪ蜍慕匳骭ｲ・・*
`public/locales/en/` 縺ｫ 譁ｰ縺励＞ JSON 繝輔ぃ繧､繝ｫ繧定ｿｽ蜉縺吶ｋ縺ｨ縲〃ite 縺ｮ繝薙Ν繝画凾縺ｫ `stories/i18nConstants.ts` 縺ｸ閾ｪ蜍慕噪縺ｫ逋ｻ骭ｲ縺輔ｌ縺ｾ縺吶よ焔蜍輔〒縺ｮ譖ｴ譁ｰ縺ｯ荳崎ｦ√〒縺吶・

**謗ｨ螂ｨ繝輔Ο繝ｼ・・*
1. `npm run i18n:check:components` 縺ｧ繧ｳ繝ｼ繝我ｸ翫・譛ｪ逋ｻ骭ｲ繧ｭ繝ｼ繧呈､懷・
2. EN 縺ｮ鄙ｻ險ｳ繝輔ぃ繧､繝ｫ縺ｫ繧ｭ繝ｼ繧定ｿｽ蜉
3. `npm run i18n:sync` 縺ｧ ja/pt 縺ｸ閾ｪ蜍慕ｿｻ險ｳ
4. `npm run i18n:check` 縺ｧ繝ｭ繧ｱ繝ｼ繝ｫ髢薙・謨ｴ蜷域ｧ繧堤｢ｺ隱・

## 繝ｦ繝ｼ繝・ぅ繝ｪ繝・ぅ

### 謨ｴ蜷域ｧ繝√ぉ繝・け

```
npm run check:consistency   # src繝ｻcomponents.json繝ｻstories繝ｻmdx縺ｮ荳肴紛蜷医ｒ遒ｺ隱・
```

### 繧ｳ繝ｳ繝昴・繝阪Φ繝磯嚴螻､遒ｺ隱・

```
npm run check:hierarchy     # 繧ｳ繝ｳ繝昴・繝阪Φ繝医・髫主ｱ､繧定｡ｨ遉ｺ
```

### 鄙ｻ險ｳ繧ｭ繝ｼ縺ｮ遒ｺ隱・

```
npm run check:stories       # 鄙ｻ險ｳ繧ｭ繝ｼ縺ｮ貍上ｌ・育函繧ｭ繝ｼ陦ｨ遉ｺ・峨ｒ遒ｺ隱・
npm run i18n:missing        # en縺ｫ縺ゅ▲縺ｦ莉冶ｨ隱槭↓譛ｪ鄙ｻ險ｳ縺ｮ繧ｭ繝ｼ繧堤｢ｺ隱・
```

## 繝・・繝ｭ繧､

```
npm run deploy   # GitHub Pages縺ｸ繝・・繝ｭ繧､
```

## Git

### Husky縺ｮ繧ｹ繧ｭ繝・・

繧・・繧貞ｾ励★繧ｳ繝溘ャ繝域凾縺ｮHusky繧偵せ繧ｭ繝・・縺吶ｋ蝣ｴ蜷茨ｼ・

```
git commit -m "commit message" --no-verify
```

## 繧ｳ繝ｼ繝・ぅ繝ｳ繧ｰ繝ｫ繝ｼ繝ｫ

- 繧ｹ繧ｿ繧､繝ｪ繝ｳ繧ｰ・壽眠隕上さ繝ｳ繝昴・繝阪Φ繝医・ **CSS Modules**・・*.module.scss`・峨ｒ謗ｨ螂ｨ
- CSS繧ｯ繝ｩ繧ｹ蜷搾ｼ壼ｾ捺擂縺ｮ繧ｰ繝ｭ繝ｼ繝舌Ν繧ｯ繝ｩ繧ｹ縺ｯ `wim-` 繝励Ξ繝輔ぅ繝・け繧ｹ繧剃ｽｿ逕ｨ・郁ｩｳ邏ｰ縺ｯ `RULES.md` 繧貞盾辣ｧ・・


## 繝峨く繝･繝｡繝ｳ繝医・閾ｪ蜍墓歓蜃ｺ (Docgen)

WIM UI 縺ｧ縺ｯ縲√さ繝ｳ繝昴・繝阪Φ繝医・莉墓ｧ假ｼ・rops縲√ョ繧ｶ繧､繝ｳ繝医・繧ｯ繝ｳ縲∵ｧ区・隕∫ｴ・峨ｒ閾ｪ蜍墓歓蜃ｺ縺励｀DX 縺ｫ蝓九ａ霎ｼ繧莉慕ｵ・∩繧呈ｧ狗ｯ峨＠縺ｦ縺・∪縺吶・
Vite 縺ｮ髢狗匱繧ｵ繝ｼ繝舌・襍ｷ蜍墓凾繧・ヵ繧｡繧､繝ｫ菫晏ｭ俶凾縺ｫ `src/data/docgen.json` 縺瑚・蜍墓峩譁ｰ縺輔ｌ繧九◆繧√∵焔蜍輔〒繧ｹ繧ｯ繝ｪ繝励ヨ繧貞ｮ溯｡後☆繧句ｿ・ｦ√・縺ゅｊ縺ｾ縺帙ｓ縲・
MDX 縺ｮ險倩ｿｰ譁ｹ豕輔・隧ｳ邏ｰ縺ｯ `SKILLS.md` 繧貞盾辣ｧ縺励※縺上□縺輔＞縲・

## 繝・じ繧､繝ｳ繝医・繧ｯ繝ｳ

WIM UI 縺ｯ縲・*Style Dictionary** 繧剃ｽｿ逕ｨ縺励※繝・じ繧､繝ｳ繝医・繧ｯ繝ｳ繧剃ｸ蜈・ｮ｡逅・ｼ・ingle Source of Truth・峨＠縺ｦ縺・∪縺吶・

### 蝓ｺ譛ｬ讒区・

- **繧ｽ繝ｼ繧ｹ**: `tokens/**/*.json`
- **逕滓・迚ｩ・郁・蜍慕函謌撰ｼ・*:
    - `src/tokens/generated/` (SCSS螟画焚, CSS繧ｫ繧ｹ繧ｿ繝繝励Ο繝代ユ繧｣)
    - `src/types/generated-tokens.ts` (TypeScript 蝙句ｮ夂ｾｩ)

### 繝薙Ν繝峨さ繝槭Φ繝・

繝医・繧ｯ繝ｳ・・SON・峨ｒ邱ｨ髮・＠縺溷ｾ後・縲∝ｿ・★莉･荳九・繧ｳ繝槭Φ繝峨ｒ螳溯｡後＠縺ｦ繧ｳ繝ｼ繝峨↓蜿肴丐縺輔○縺ｦ縺上□縺輔＞縲・

```bash
npm run tokens:build   # JSON縺九ｉSCSS/TypeScript螳夂ｾｩ繧定・蜍慕函謌・
```

縺薙・繧ｳ繝槭Φ繝峨↓繧医ｊ縲√さ繝ｳ繝昴・繝阪Φ繝磯幕逋ｺ譎ゅ↓譛譁ｰ縺ｮ繝医・繧ｯ繝ｳ縺悟梛陬懷ｮ後→縺励※蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｫ縺ｪ繧翫∪縺吶