import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Gallery } from "@/components/media/Gallery/Gallery";
import type { GalleryItem } from "@/components/media/Gallery/Gallery";
import { Button } from "@/components/form/Button/Button";
import galleryMountain from "@/media/gallery_mountain.svg";
import galleryOcean from "@/media/gallery_ocean.svg";
import galleryForest from "@/media/gallery_forest.svg";
import galleryCity from "@/media/gallery_city.svg";
import galleryDesert from "@/media/gallery_desert.svg";
import gallerySnow from "@/media/gallery_snow.svg";

const meta: Meta<typeof Gallery> = {
  title: "Components/Media/Gallery",
  component: Gallery,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    columns: { control: "number" },
    gap: { control: "radio", options: ["xs", "sm", "md", "lg", "xl"] },
    aspect: { control: "radio", options: ["square", "landscape", "portrait", "auto"] },
    selectable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);

    const items: GalleryItem[] = [
      { id: "1", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain") },
      { id: "2", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean") },
      { id: "3", src: galleryForest, alt: t("story.gallery_alt_forest"), title: t("story.gallery_title_forest") },
      { id: "4", src: galleryCity, alt: t("story.gallery_alt_city"), title: t("story.gallery_title_city") },
      { id: "5", src: galleryDesert, alt: t("story.gallery_alt_desert"), title: t("story.gallery_title_desert") },
      { id: "6", src: gallerySnow, alt: t("story.gallery_alt_snow"), title: t("story.gallery_title_snow") },
    ];

    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "square",
  },
};

export const Selectable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [selected, setSelected] = useState<string[]>([]);

    const items: GalleryItem[] = [
      { id: "1", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain") },
      { id: "2", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean") },
      { id: "3", src: galleryForest, alt: t("story.gallery_alt_forest"), title: t("story.gallery_title_forest") },
      { id: "4", src: galleryCity, alt: t("story.gallery_alt_city"), title: t("story.gallery_title_city") },
      { id: "5", src: galleryDesert, alt: t("story.gallery_alt_desert"), title: t("story.gallery_title_desert") },
      { id: "6", src: gallerySnow, alt: t("story.gallery_alt_snow"), title: t("story.gallery_title_snow") },
    ];

    return (
      <Gallery
        {...args}
        items={items}
        selected={selected}
        onSelectionChange={setSelected}
        renderActions={({ selectedIds, clearSelection }) => (
          <Button
            size="sm"
            variant="outline"
            intent="danger"
            onClick={clearSelection}
          >
            {t("story.gallery_delete_btn")} ({selectedIds.length})
          </Button>
        )}
      />
    );
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "square",
    selectable: true,
  },
};

export const LandscapeAspect: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);

    const items: GalleryItem[] = [
      { id: "1", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain") },
      { id: "2", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean") },
      { id: "3", src: galleryForest, alt: t("story.gallery_alt_forest"), title: t("story.gallery_title_forest") },
      { id: "4", src: galleryCity, alt: t("story.gallery_alt_city"), title: t("story.gallery_title_city") },
      { id: "5", src: galleryDesert, alt: t("story.gallery_alt_desert"), title: t("story.gallery_title_desert") },
      { id: "6", src: gallerySnow, alt: t("story.gallery_alt_snow"), title: t("story.gallery_title_snow") },
    ];

    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 2,
    gap: "sm",
    aspect: "landscape",
  },
};

export const FourColumns: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);

    const items: GalleryItem[] = [
      { id: "1", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain") },
      { id: "2", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean") },
      { id: "3", src: galleryForest, alt: t("story.gallery_alt_forest"), title: t("story.gallery_title_forest") },
      { id: "4", src: galleryCity, alt: t("story.gallery_alt_city"), title: t("story.gallery_title_city") },
      { id: "5", src: galleryDesert, alt: t("story.gallery_alt_desert"), title: t("story.gallery_title_desert") },
      { id: "6", src: gallerySnow, alt: t("story.gallery_alt_snow"), title: t("story.gallery_title_snow") },
      { id: "7", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain") },
      { id: "8", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean") },
    ];

    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 4,
    gap: "xs",
    aspect: "square",
  },
};

export const WithCaptions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);

    const items: GalleryItem[] = [
      { id: "1", src: galleryMountain, alt: t("story.gallery_alt_mountain"), title: t("story.gallery_title_mountain"), caption: t("story.gallery_caption_year") },
      { id: "2", src: galleryOcean, alt: t("story.gallery_alt_ocean"), title: t("story.gallery_title_ocean"), caption: t("story.gallery_caption_year") },
      { id: "3", src: galleryForest, alt: t("story.gallery_alt_forest"), title: t("story.gallery_title_forest"), caption: t("story.gallery_caption_year") },
      { id: "4", src: galleryCity, alt: t("story.gallery_alt_city"), title: t("story.gallery_title_city"), caption: t("story.gallery_caption_year") },
      { id: "5", src: galleryDesert, alt: t("story.gallery_alt_desert"), title: t("story.gallery_title_desert"), caption: t("story.gallery_caption_year") },
      { id: "6", src: gallerySnow, alt: t("story.gallery_alt_snow"), title: t("story.gallery_title_snow"), caption: t("story.gallery_caption_year") },
    ];

    return <Gallery {...args} items={items} />;
  },
  args: {
    columns: 3,
    gap: "md",
    aspect: "landscape",
  },
};
