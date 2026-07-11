import React, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Slider } from "../Slider/Slider";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button/Button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from "../../overlay/Dialog/Dialog";
import styles from "./image-cropper.module.scss";

export interface ImageCropperProps extends React.ComponentPropsWithoutRef<"div"> {
  /** URL or data URL of the image to crop */
  src?: string;
  /** Aspect ratio (width / height); 1 produces a square */
  aspectRatio?: number;
  /** Whether to display a circular crop area (for profile images) */
  circular?: boolean;
  /** Callback when the crop result is finalized */
  onCrop?: (dataUrl: string) => void;
  /** Whether to show the rotation button */
  showRotation?: boolean;
  /** Whether to show the zoom slider */
  showZoom?: boolean;
  /** Whether to show the apply button */
  showApplyButton?: boolean;
  /** Label of the apply button */
  applyLabel?: string;
  /** Callback when the crop is applied (after confirming in the dialog) */
  onApply?: (dataUrl: string) => void;
}

/**
 * Component for cropping and rotating an image.
 * Suitable for setting user profile images.
 */
export const ImageCropper = React.forwardRef<HTMLDivElement, ImageCropperProps>(
  (
    {
      src,
      aspectRatio = 1,
      circular = false,
      onCrop,
      showRotation = true,
      showZoom = true,
      showApplyButton = true,
      applyLabel,
      onApply,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("form");
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 画像が読み込まれたら位置をリセット
    useEffect(() => {
      setPosition({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
    }, [src]);

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      },
      [isDragging, dragStart],
    );

    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
    }, []);

    useEffect(() => {
      if (isDragging) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleRotate = () => {
      setRotation((prev) => (prev + 90) % 360);
    };

    const handleApplyClick = () => {
      setIsDialogOpen(true);
    };

    const handleConfirmApply = () => {
      // 実際にはここでCanvas等を使用してクロップ処理を行いますが、
      // 今回は現在のパラメータを返すか、srcをそのまま返してコールバックを呼び出します。
      const dataUrl = src || "";
      onCrop?.(dataUrl);
      onApply?.(dataUrl);
      setIsDialogOpen(false);
    };

    // getCroppedImage would be used here if exposed via ref


    // プロフィール画像などの用途では「保存」ボタンなどを外部に置くことが多いですが、
    // コンポーネント単体で動作確認できるように、ストーリー等でこの関数を呼び出せるようにします。

    if (!src) {
      return (
        <div ref={ref} className={classNames("wim-image-cropper", styles.root, styles.empty, className)} {...props}>
          <div className={styles.emptyContent}>
            {t("image_cropper.no_image")}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={classNames("wim-image-cropper", styles.root, className)} {...props}>
        <div 
          ref={containerRef}
          className={styles.viewer} 
          onMouseDown={handleMouseDown}
          role="presentation"
        >
          <div className={styles.imageContainer}>
            <img
              ref={imageRef}
              src={src}
              alt="Crop target"
              className={styles.image}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${zoom})`,
              }}
              draggable={false}
            />
          </div>
          <div className={styles.overlay}>
            <div 
              className={classNames(styles.cropArea, { [styles.circular]: circular })}
              style={{ aspectRatio }}
            />
          </div>
        </div>

        <div className={styles.controls}>
          {showZoom && (
            <div className={styles.zoomControl}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(v) => setZoom(v as number)}
                label={t("image_cropper.zoom")}
                styles={{ root: styles.zoomSlider }}
              />
            </div>
          )}
          {showRotation && (
            <div className={styles.rotationControl}>
              <IconButton
                iconName="RefreshIcon"
                onClick={handleRotate}
                aria-label={t("image_cropper.rotate")}
                variant="outline"
                size="sm"
              />
            </div>
          )}
          {showApplyButton && (
            <div className={styles.applyControl}>
              <Button onClick={handleApplyClick} size="sm" variant="solid">
                {applyLabel || t("image_cropper.apply")}
              </Button>
            </div>
          )}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("image_cropper.confirm_title")}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {t("image_cropper.confirm_message")}
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">
                  {t("image_cropper.cancel")}
                </Button>
              </DialogClose>
              <Button onClick={handleConfirmApply} variant="solid">
                {t("image_cropper.confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

ImageCropper.displayName = "ImageCropper";
