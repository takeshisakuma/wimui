import React from "react";
import classNames from "classnames";
import { useMediaLoader } from "@/hooks/useMediaLoader";
import type { ComponentSize, WimRadiusKey } from "../../../types/tokens";
import "./image.scss";

/**
 * フィルタの強さを定義する型
 */
export type ImageFilterIntensity = ComponentSize | "none";

/**
 * 画像に適用するフィルタオプション
 */
export interface ImageFilterOptions {
  /** ぼかし */
  blur?: ImageFilterIntensity;
  /** グレースケール（白黒） */
  grayscale?: ImageFilterIntensity | boolean;
  /** 明るさ */
  brightness?: ImageFilterIntensity;
  /** コントラスト */
  contrast?: ImageFilterIntensity;
  /** セピア */
  sepia?: ImageFilterIntensity;
  /** 彩度 */
  saturate?: ImageFilterIntensity;
  /** 色相回転（角度） */
  hueRotate?: "none" | "90" | "180" | "270";
  /** 反転 */
  invert?: ImageFilterIntensity;
  /** 不透明度 */
  opacity?: ImageFilterIntensity;
}

/**
 * オーバーレイのオプション
 */
export interface ImageOverlayOptions {
  /** カラーまたはグラデーション（CSS） */
  color?: string;
  /** 強度（不透明度） */
  intensity?: number | "sm" | "md" | "lg";
  /** ホバー時のみ表示するか */
  showOnHover?: boolean;
  /** ブレンドモード */
  blendMode?: React.CSSProperties["mixBlendMode"];
}

/**
 * デュオトーン（2色塗り）のオプション
 */
export interface ImageDuotoneOptions {
  /** ハイライト（明るい部分）の色 */
  light: string;
  /** シャドウ（暗い部分）の色 */
  dark: string;
}

export type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  /** 角丸のサイズ */
  radius?: WimRadiusKey | "none";
  /** シャドウ（影）を表示するか */
  shadow?: boolean;
  /** 枠線を表示するか */
  border?: boolean;
  /** 画像のフィット感 */
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /** 遅延読み込み設定 */
  loading?: "eager" | "lazy";
  /** 画像の下に表示する説明文 */
  caption?: string;
  /** 画像自体に適用するフィルタ */
  filter?: ImageFilterOptions;
  /** ホバー時に適用するフィルタ（指定がない場合はfilterが維持されます） */
  hoverFilter?: ImageFilterOptions;
  /** 背景に適用するフィルタ（透過画像などで効果的） */
  backdropFilter?: ImageFilterOptions;
  /** ホバー時に背景に適用するフィルタ */
  hoverBackdropFilter?: ImageFilterOptions;
  /** フィルタ切り替え時のアニメーション速度 */
  transition?: "none" | "fast" | "normal" | "slow";
  /** フィルムグレイン（ノイズ）の強度 */
  noise?: ImageFilterIntensity;
  /** デュオトーン設定 */
  duotone?: ImageDuotoneOptions;
  /** オーバーレイ設定 */
  overlay?: ImageOverlayOptions;
  /** ホバー時の拡大倍率 (例: 1.1) または true (デフォルト1.05) */
  zoom?: boolean | number;
  /** マウスに追従するチルト（傾き）エフェクト */
  tilt?: boolean;
  /** 読み込み完了時にフェードインさせるか */
  fadeIn?: boolean;
  /** 画像自体のブレンドモード */
  blendMode?: React.CSSProperties["mixBlendMode"];
  /** ブレンド用の背景色 */
  bgColor?: string;
  /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
  demoDelay?: number;
  /** LCP候補など、読み込み優先度を上げるかどうか（fetchpriority="high"） */
  priority?: boolean;
};

/**
 * 強度プリセットをCSSの値に変換するヘルパー
 */
const getFilterValue = (type: keyof ImageFilterOptions, intensity?: string | boolean): string | undefined => {
  if (intensity === undefined || intensity === "none" || intensity === false) return undefined;

  const presets: Record<string, Record<string, string>> = {
    blur: { sm: "4px", md: "8px", lg: "16px" },
    grayscale: { sm: "33%", md: "66%", lg: "100%", true: "100%" },
    brightness: { sm: "0.8", md: "0.5", lg: "0.3" }, // 暗くする方向をデフォルト
    contrast: { sm: "1.2", md: "1.5", lg: "2" },
    sepia: { sm: "33%", md: "66%", lg: "100%" },
    saturate: { sm: "1.5", md: "2", lg: "3" },
    invert: { sm: "33%", md: "66%", lg: "100%" },
    opacity: { sm: "0.8", md: "0.5", lg: "0.2" },
  };

  if (type === "hueRotate") {
    return `${intensity}deg`;
  }

  const val = typeof intensity === "boolean" ? "true" : (intensity as string);
  return presets[type]?.[val];
};

/**
 * カラーコードをSVG ColorMatrix用に正規化する (rgb値に変換)
 */
const hexToRgbValues = (hex: string) => {
  // 簡易版: hexから数値を抽出（実際はもっと堅牢な変換が必要だが、wimuiの基準に合わせて調整）
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 };
};

/**
 * フィルタオブジェクトをCSSのfilter文字列に変換するヘルパー
 */
const buildFilterString = (options?: ImageFilterOptions): string | undefined => {
  if (!options) return undefined;

  const filters: string[] = [];
  const blur = getFilterValue("blur", options.blur);
  if (blur) filters.push(`blur(${blur})`);

  const grayscale = getFilterValue("grayscale", options.grayscale);
  if (grayscale) filters.push(`grayscale(${grayscale})`);

  const brightness = getFilterValue("brightness", options.brightness);
  if (brightness) filters.push(`brightness(${brightness})`);

  const contrast = getFilterValue("contrast", options.contrast);
  if (contrast) filters.push(`contrast(${contrast})`);

  const sepia = getFilterValue("sepia", options.sepia);
  if (sepia) filters.push(`sepia(${sepia})`);

  const saturate = getFilterValue("saturate", options.saturate);
  if (saturate) filters.push(`saturate(${saturate})`);

  const hueRotate = getFilterValue("hueRotate", options.hueRotate);
  if (hueRotate) filters.push(`hue-rotate(${hueRotate})`);

  const invert = getFilterValue("invert", options.invert);
  if (invert) filters.push(`invert(${invert})`);

  const opacity = getFilterValue("opacity", options.opacity);
  if (opacity) filters.push(`opacity(${opacity})`);

  return filters.length > 0 ? filters.join(" ") : "none";
};

export const Image = ({
  src,
  alt,
  width,
  height,
  radius = "none",
  shadow = false,
  border = false,
  fit = "cover",
  loading,
  caption,
  filter,
  hoverFilter,
  backdropFilter,
  hoverBackdropFilter,
  transition = "normal",
  noise,
  duotone,
  overlay,
  zoom = false,
  tilt = false,
  fadeIn = false,
  blendMode,
  bgColor,
  demoDelay,
  priority = false,
  className,
  style,
  ...props
}: ImageProps) => {
  // 共通メディアローダーフックの使用
  const {
    containerRef,
    isLoaded,
    isIntersecting,
    notifyLoaded,
    shouldShowSkeleton
  } = useMediaLoader({
    loading,
    src,
    demoDelay,
  });

  // チルト状態
  const [tiltStyle, setTiltStyle] = React.useState<React.CSSProperties>({});
  
  // ユニークID（Duotoneフィルタ用）
  const filterId = React.useId().replace(/:/g, "");

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 傾きを計算（最大10度程度）
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
  };

  const filterStyles = React.useMemo(() => {
    const styles: Record<string, string> = {};

    // Zoom
    if (zoom) {
      const scale = typeof zoom === "number" ? zoom : 1.05;
      styles["--wim-image-zoom-scale"] = scale.toString();
    }
    // Base filters
    const baseFilter = buildFilterString(filter);
    if (baseFilter) styles["--wim-image-filter"] = baseFilter;

    // Duotone
    if (duotone) {
      styles["--wim-image-filter"] = `${styles["--wim-image-filter"] || ""} url(#${filterId})`.trim();
    }

    const baseBackdrop = buildFilterString(backdropFilter);
    if (baseBackdrop) styles["--wim-image-backdrop"] = baseBackdrop;

    // Hover filters
    const hFilter = buildFilterString(hoverFilter);
    if (hFilter) styles["--wim-image-hover-filter"] = hFilter;

    const hBackdrop = buildFilterString(hoverBackdropFilter);
    if (hBackdrop) styles["--wim-image-hover-backdrop"] = hBackdrop;

    // Noise
    if (noise && noise !== "none") {
      const opacity = { sm: "0.05", md: "0.1", lg: "0.2" }[noise];
      styles["--wim-image-noise-opacity"] = opacity || "0";
    }

    // Overlay
    if (overlay) {
      const opacityPresets: Record<string, string> = { sm: "0.3", md: "0.6", lg: "0.9" };
      const opacity = typeof overlay.intensity === "number" 
        ? overlay.intensity.toString() 
        : (opacityPresets[overlay.intensity as string] || "0.5");
      
      styles["--wim-image-overlay-color"] = overlay.color || "rgba(0,0,0,0.5)";
      styles["--wim-image-overlay-opacity"] = overlay.showOnHover ? "0" : opacity;
      styles["--wim-image-overlay-hover-opacity"] = opacity;
      if (overlay.blendMode) {
        styles["--wim-image-overlay-blend"] = overlay.blendMode;
      }
    }

    // Blend mode & BG color for image
    if (blendMode) styles["--wim-image-blend-mode"] = blendMode;
    if (bgColor) styles["--wim-image-bg-color"] = bgColor;

    // Transition duration
    const durations = { none: "0s", fast: "0.2s", normal: "0.3s", slow: "0.5s" };
    styles["--wim-image-transition-duration"] = durations[transition];

    return styles;
  }, [filter, hoverFilter, backdropFilter, hoverBackdropFilter, transition, noise, duotone, overlay, filterId, zoom, blendMode, bgColor]);

  const duotoneMatrix = React.useMemo(() => {
    if (!duotone) return null;
    const l = hexToRgbValues(duotone.light);
    const d = hexToRgbValues(duotone.dark);

    // grayscale values mapped to d -> l
    // R: d.r + v * (l.r - d.r)
    // G: d.g + v * (l.g - d.g)
    // B: d.b + v * (l.b - d.b)
    // Using luminance calculation: 0.2126*R + 0.7152*G + 0.0722*B
    return `
      ${l.r - d.r} 0 0 0 ${d.r}
      ${l.g - d.g} 0 0 0 ${d.g}
      ${l.b - d.b} 0 0 0 ${d.b}
      0 0 0 1 0
    `;
  }, [duotone]);

  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: height || "auto",
    objectFit: fit,
    ...style,
  };

  return (
    <figure
      ref={containerRef}
      className={classNames("wim-image-container", className)}
      style={{
        maxWidth: width || "100%",
        width: "100%",
        ...filterStyles,
        ...tiltStyle,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {duotone && (
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values={duotoneMatrix || ""} />
          </filter>
        </svg>
      )}
      <div
        className={classNames(
          "wim-image-inner",
          radius !== "none" && `wim-image--radius-${radius}`,
          shadow && "wim-image--shadow",
          border && "wim-image--border",
          (backdropFilter || hoverBackdropFilter) && "wim-image--has-backdrop",
          noise && noise !== "none" && "wim-image--has-noise",
          overlay && "wim-image--has-overlay",
          zoom && "wim-image--zoomable",
          fadeIn && "wim-image--fade-in",
          fadeIn && isLoaded && "wim-image--is-loaded",
          shouldShowSkeleton && fadeIn && "wim-image--loading",
        )}
      >
        {isIntersecting && (
          <img
            src={src}
            alt={alt}
            onLoad={notifyLoaded}
            className={classNames(
              "wim-image",
              (filter || hoverFilter || duotone) && "wim-image--has-filter",
            )}
            style={imageStyles}
            loading={loading}
            fetchPriority={priority ? "high" : undefined}
            {...props}
          />
        )}
      </div>
      {caption && (
        <figcaption className="wim-image__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
