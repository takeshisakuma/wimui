/**
 * VRT の除外リスト（SSOT）。
 *
 * **`vrt.spec.ts` と `scripts/check-vrt-orphans.js` の両方がここを読む。**
 * 撮影側だけが知っていると「除外されたストーリーのベースライン」を検出できない ──
 * ストーリーは index に居るので孤児ではなく、update は spec を走らせるので撮り直さず、
 * compare は読まない。**誰も検証していないベースラインが正解として凍結される**（T204）。
 *
 * `vrt/` は tsconfig の対象外で `allowJs: true` なので、素の JS で置いて双方から import する。
 * JSON にすると下に積まれた判断の記録を持てず、ソースを正規表現でパースする方式は
 * 壊れたときに「除外 0 件」と読めてしまい**静かに誤検出する**（検出器の失敗は緑に化ける）。
 */
/**
 * JS 駆動アニメーション・埋め込み・キャンバス描画などにより、同一コミット・
 * 同一環境の連続ランでもピクセルが一致しない非決定的ストーリー。
 * `animations: "disabled"` は CSS アニメーションしか止められないため除外する
 * （2026-07-16 の再建時、update 直後の compare で 3 回リトライしても不一致だったもの）。
 * 追加するときは「同一コミットで update → compare が落ちる」ことを確認してから。
 */
export const NONDETERMINISTIC_STORY_IDS = [
  "components-basic-inputs-textarea--form-pattern",
  "components-data-indicators-avatargroup--default",
  "components-data-indicators-avatargroup--max-displayed",
  "components-layout-aspectratio--embed",
  "components-alerts-notifications-toast--error-status",
  "components-alerts-notifications-toast--warning",
  "components-data-structures-querybuilder--default",
  "components-data-structures-sortablelist--disabled",
  "components-loading-states-loadingoverlay--blur-effects",
  "components-media-image--motion-effects",
  // demoDelay(2000ms) + fadeIn で、スクショが 2 秒のフェード/ロード周期の
  // どの時点で撮られるかにより poster/動画の描画状態が変わる（時間依存）。
  // baseline が update のたびに churn するため除外（image--motion-effects と同類）。
  "components-media-video--premium-features",
  // --premium-features と同じ動画の読み込み/フェード依存。2026-07-31 に dark で
  // 65 / 72 / 67 / 60px と**毎回ばらつく**ことを確認（値が動くのがジッタの定義で、
  // 通るか落ちるかは運）。前日 1 度 retry で通ったのを見て「除外基準を満たさない」
  // と判断したのは誤りだった＝「2 ラン目で通った」は安定の証拠にならない。
  "components-media-video--rounded",
  // 兄弟 2 件と同じ動画の読み込み/フェード依存。**除外を保留していた経緯がある**:
  // 2026-08-01 の朝、update のコミットバックを 3 回分測ったところ、非意図的に
  // `maxDiffPixels` を超えるのはこれだけだった（#189 で 98 画素・#192 で 96 画素、
  // maxYIQ 32,600 ＝ 動画フレームがまるごと違う）。しかし**落ちるところを一度も
  // 見ていなかった**ため（ローカルで update → compare を 2 回とも緑、main の
  // compare も 4 ラン連続緑）、この Set の追加基準「同一コミットで update →
  // compare が落ちる」を満たしていないと判断して見送った。
  // **同日夕方に基準を満たした**: #204 のブランチで update（run 30698540931）と
  // compare（run 30698542269）が**同じ head `01f4ed23a`** で走り、compare が
  // これ 1 件だけで落ちた。`--rounded` のコメントが記録している
  // 「1 度 retry で通ったのを見て除外基準を満たさないと判断したのは誤りだった」の
  // 逆側（落ちるのを見ずに除外する）を避けた結果、判断に半日かかった形。
  "components-media-video--default",
  // ChatMessage の isTyping アニメーションを含む
  "patterns-ai--artifacts-canvas",
];

/*
 * 2026-08-01（T43）に `tabnavigation--pills` と `--contained` をここから外した。
 * 揺れの正体は撮影側ではなく **`useIndicator` の実装バグ**だった: スライダーの寸法は
 * active item の `offsetWidth` から取るのに、ResizeObserver はコンテナしか見ていない。
 * 横並びのタブはコンテナが `width: 100%` なので、**Web フォントが差し替わって item が
 * 伸びてもコンテナは動かず、再計測が走らない**＝フォールバック字形で測った寸法のまま
 * 固定される。`--pills` はフォント到着がマウントに間に合うかどうかの境界にあり
 * 113px ⇄ 117px の二状態になっていた（「6 回すべて 137px」＝値がばらつかない＝
 * ジッタではなく状態差、という読みは当たっていた）。
 *
 * 重要なのは、この穴が **VRT に緑と報告させていた**こと: `Tabs - Default`（8.03px）
 * `Tabs - Scrolling`（6.78px）`TabNavigation - Default`（4.36px）`- Contained`（1.94px）
 * `- With Icons`（1.73px）は「ズレたまま安定」なので毎回同じ絵が撮れていた。
 * つまり除外を外す作業ではなく、出荷され続けていた描画バグを 1 つ直す作業だった。
 */

/**
 * コンポーネント丸ごと非決定的なもの（複数ストーリーが別ランで順繰りに
 * フレークした実績）。ChatUI=タイピング/ストリーミング表示、
 * PromptInput=キャレット・添付チップのアニメーション、
 * ScheduleView=FullCalendar の現在時刻インジケータ+行高 px 丸め
 * （default/month/day/interactive が順繰りにフレーク。個別除外を prefix に集約）、
 * NodeGraph=React Flow の `fitView` がノードを ResizeObserver で非同期計測してから
 * ビューポート transform を再計算するため、計測が確定するタイミング次第で
 * zoom/pan にサブピクセル差が乗り、キャンバス全体の AA ジッタが maxDiffPixels を
 * 超える（力学レイアウトではなくノード位置は固定。with-mini-map は minimap が
 * 全体を縮小再描画して増幅、read-only は #50 dark で自ベースラインに 1564px 差分＝
 * update→compare 不一致を確認。default は read-only と非可視フラグ違いのみの同一静的
 * 描画で同じ計測ジッタを共有＝個別除外を prefix に集約）。
 */
export const NONDETERMINISTIC_STORY_PREFIXES = [
  "components-ai-chatui--",
  "components-ai-promptinput--",
  "components-visualization-scheduleview--",
  "components-visualization-nodegraph--",
];
