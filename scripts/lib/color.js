// 色の解決と比較。check-contrast.js が使う。
//
// トークンは hex か oklch() で書かれており、subtle 変種は `oklch(from <base> l c h / 0.15)`
// のようにアルファ付きで導出される。判定にはサーフェスへ合成した後の実効色が要るので、
// ここで sRGB に落として合成・比較まで面倒を見る。

/** #rgb / #rrggbb / #rrggbbaa → {r,g,b,a}（0-255, a は 0-1） */
function parseHex(hex) {
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length === 6) h += 'ff';
  if (h.length !== 8) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
    a: parseInt(h.slice(6, 8), 16) / 255,
  };
}

// --- OKLCH → sRGB -----------------------------------------------------------
// CSS Color 4 の変換。トークンが oklch() リテラルで書かれている箇所があるため必要。

const clamp01 = (x) => Math.min(1, Math.max(0, x));

function oklabToLinearSrgb(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const linearToSrgb = (c) =>
  c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(clamp01(c), 1 / 2.4) - 0.055;

/** `oklch(L C H / A)` を {r,g,b,a} へ。L は 0-1 または %、H は deg。 */
function parseOklch(str) {
  const m = str.trim().match(/^oklch\(\s*([^)]+)\)$/i);
  if (!m) return null;
  const [coords, alphaPart] = m[1].split('/');
  const parts = coords.trim().split(/\s+/);
  if (parts.length < 3) return null;
  const num = (v) => (v.endsWith('%') ? parseFloat(v) / 100 : parseFloat(v));
  const L = num(parts[0]);
  const C = parseFloat(parts[1]);
  const H = parseFloat(parts[2]);
  const a = alphaPart === undefined ? 1 : num(alphaPart.trim());
  if ([L, C, H, a].some((v) => Number.isNaN(v))) return null;
  const rad = (H * Math.PI) / 180;
  const [lr, lg, lb] = oklabToLinearSrgb(L, C * Math.cos(rad), C * Math.sin(rad));
  return {
    r: clamp01(linearToSrgb(lr)) * 255,
    g: clamp01(linearToSrgb(lg)) * 255,
    b: clamp01(linearToSrgb(lb)) * 255,
    a,
  };
}

export function parseColor(str) {
  if (!str) return null;
  const s = String(str).trim();
  if (s === 'transparent') return { r: 0, g: 0, b: 0, a: 0 };
  if (s.startsWith('#')) return parseHex(s);
  if (s.toLowerCase().startsWith('oklch(')) return parseOklch(s);
  return null;
}

/** 前景（アルファ付き）を背景（不透明）へ合成する。 */
export function composite(fg, bg) {
  if (!fg) return bg;
  if (fg.a >= 1) return { ...fg, a: 1 };
  return {
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  };
}

// --- WCAG コントラスト比 ----------------------------------------------------

const channelLuminance = (v) => {
  const c = v / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

export function relativeLuminance({ r, g, b }) {
  return (
    0.2126 * channelLuminance(r) +
    0.7152 * channelLuminance(g) +
    0.0722 * channelLuminance(b)
  );
}

/** WCAG 2.x のコントラスト比（1〜21）。両方とも不透明であること。 */
export function contrastRatio(a, b) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// --- 知覚的な色差（塗りが見えるか） -----------------------------------------
// コントラスト比は「明度差」しか見ないため、明度が同じで色相だけ違う面を区別できない。
// 「その塗りが背景から見分けられるか」は OKLab 上の距離のほうが素直に測れる。

const srgbToLinear = (v) => {
  const c = v / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

function srgbToOklab({ r, g, b }) {
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  };
}

/** OKLab 上のユークリッド距離。0.02 前後が「かろうじて分かる」目安。 */
export function perceptualDistance(x, y) {
  const p = srgbToOklab(x);
  const q = srgbToOklab(y);
  return Math.hypot(p.L - q.L, p.a - q.a, p.b - q.b);
}

export const fmt = (n) => n.toFixed(2);
