import React, { useState, useLayoutEffect } from "react";
import classNames from "classnames";
import { Portal } from "../../overlay/Portal/Portal";
import { Button } from "../../form/Button/Button";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import styles from "./tour.module.scss";

type TourStep = {
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
};

type TourProps = {
  /**
   * Steps of the tour. Each step targets an element via a CSS selector.
   */
  steps: TourStep[];
  /**
   * Whether the tour is shown.
   */
  open: boolean;
  /**
   * Called when the tour is dismissed before completion.
   */
  onClose: () => void;
  /**
   * Called when the last step is completed.
   */
  onFinish?: () => void;
};

const VIEW_MARGIN = 16;

function fontSpec(element: Element) {
  const cs = getComputedStyle(element);
  return `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
}

async function waitForTargetFonts(element: Element) {
  const fonts = document.fonts;
  if (!fonts || typeof fonts.load !== "function") return;
  try {
    await fonts.load(fontSpec(element));
  } catch {
    // jsdom / 不正な spec。測る側でフォールバック字形になる。
  }
  // `.ready` はページ先頭の 1 回しか解決しない。未要求の面が後から
  // loading に入っても待たない（Treemap と同じ。T44 / T197）。
  while (fonts.status === "loading") {
    await new Promise<void>((resolve) => {
      fonts.addEventListener("loadingdone", () => resolve(), { once: true });
    });
  }
}

function shouldWaitForTargetFonts(element: Element) {
  const fonts = document.fonts;
  if (!fonts || typeof fonts.load !== "function") return false;
  if (fonts.status === "loading") return true;
  return typeof fonts.check === "function" && !fonts.check(fontSpec(element));
}

function rectsEqual(a: DOMRect, b: DOMRect) {
  return (
    Math.round(a.top) === Math.round(b.top) &&
    Math.round(a.left) === Math.round(b.left) &&
    Math.round(a.width) === Math.round(b.width) &&
    Math.round(a.height) === Math.round(b.height)
  );
}

function isFullyVisible(rect: DOMRect) {
  return (
    rect.top >= VIEW_MARGIN &&
    rect.bottom <= window.innerHeight - VIEW_MARGIN &&
    rect.left >= VIEW_MARGIN &&
    rect.right <= window.innerWidth - VIEW_MARGIN
  );
}

export const Tour = ({ steps, open, onClose, onFinish }: TourProps) => {
  const { t } = useWimTranslation("common");
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const step = steps[currentStep];
  const target = step?.target;

  useLayoutEffect(() => {
    if (!open || !target) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTargetRect(null);
      return;
    }

    let cancelled = false;
    const apply = (next: DOMRect | null) => {
      if (cancelled) return;
      setTargetRect((prev) => {
        if (!next) return null;
        if (prev && rectsEqual(prev, next)) return prev;
        return next;
      });
    };

    const place = () => {
      const element = document.querySelector(target);
      if (!element) {
        apply(null);
        return;
      }
      // 画面内なら動かさない。center へ寄せると fixed のバブルが置いたあとに追従して見える。
      if (!isFullyVisible(element.getBoundingClientRect())) {
        element.scrollIntoView({
          block: "center",
          inline: "nearest",
        });
      }
      apply(element.getBoundingClientRect());
    };

    const measure = () => {
      const element = document.querySelector(target);
      apply(element ? element.getBoundingClientRect() : null);
    };

    const bind = () => {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure, true);
    };

    const start = async () => {
      const element = document.querySelector(target);
      if (element) {
        await waitForTargetFonts(element);
      }
      if (cancelled) return;
      place();
      bind();
    };

    const element = document.querySelector(target);
    if (element && shouldWaitForTargetFonts(element)) {
      void start();
    } else {
      place();
      bind();
    }

    return () => {
      cancelled = true;
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [open, currentStep, target]);

  if (!open || !step) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (onFinish) {
        onFinish();
      } else {
        onClose();
      }
      setCurrentStep(0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // マスクは先に出す。測ってからマスクを出すと、穴がオーバーレイ前の座標のまま固まる。
  const bubbleStyle: React.CSSProperties = {};
  let effectivePlacement: NonNullable<TourStep["placement"]> = step.placement || "bottom";
  if (targetRect) {
    const margin = 16;
    const gap = 12;
    const screenWidth = window.innerWidth;
    const actualBubbleWidth = Math.min(300, screenWidth - margin * 2);

    let placement = effectivePlacement;

    // Fallback for small screens or limited space
    if (screenWidth < 640 && (placement === "left" || placement === "right")) {
      placement = "bottom";
    }
    effectivePlacement = placement;

    if (placement === "top" || placement === "bottom") {
      let left = targetRect.left + targetRect.width / 2;
      const minLeft = actualBubbleWidth / 2 + margin;
      const maxLeft = screenWidth - actualBubbleWidth / 2 - margin;

      // Adjust left if bubble is wider than min/max allows (very small screens)
      if (minLeft > maxLeft) {
        left = screenWidth / 2;
      } else {
        left = Math.max(minLeft, Math.min(maxLeft, left));
      }

      bubbleStyle.left = left;
      if (placement === "top") {
        bubbleStyle.top = targetRect.top - gap;
        bubbleStyle.transform = "translate(-50%, -100%)";
      } else {
        bubbleStyle.top = targetRect.bottom + gap;
        bubbleStyle.transform = "translateX(-50%)";
      }
    } else if (placement === "left") {
      bubbleStyle.left = targetRect.left - gap;
      bubbleStyle.top = targetRect.top + targetRect.height / 2;
      bubbleStyle.transform = "translate(-100%, -50%)";
    } else if (placement === "right") {
      bubbleStyle.left = targetRect.right + gap;
      bubbleStyle.top = targetRect.top + targetRect.height / 2;
      bubbleStyle.transform = "translateY(-50%)";
    }
  }

  return (
    <Portal>
      <div
        className={styles.mask}
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label={t("a11y.close_tour")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      />
      {targetRect && (
        <>
          <div
            className={styles.highlight}
            style={{
              top: targetRect.top - 4,
              left: targetRect.left - 4,
              width: targetRect.width + 8,
              height: targetRect.height + 8,
            }}
          />
          <div
            className={classNames("wim-tour", styles.bubble)}
            // 向きはここでしか観測できない。クラスは一つも持たない（位置は inline style）。
            data-placement={effectivePlacement}
            style={bubbleStyle}
          >
            <div className={styles.inner}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <div className={styles.footer}>
                <span className={styles.progress}>
                  {currentStep + 1} / {steps.length}
                </span>
                <div className={styles.buttons}>
                  {currentStep > 0 && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleBack}
                    >{t("action.back")}</Button>
                  )}
                  <Button
                    size="sm"
                    variant="solid"
                    onClick={handleNext}
                  >{currentStep === steps.length - 1 ? t("action.finish") : t("action.next")}</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
};

