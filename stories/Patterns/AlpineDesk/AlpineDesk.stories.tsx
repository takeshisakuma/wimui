import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  AppShell,
  Audio,
  Box,
  Button,
  Carousel,
  Container,
  Flex,
  Gallery,
  Grid,
  Header,
  Image,
  ImageCompare,
  Lightbox,
  LightboxContent,
  LightboxGallery,
  Stack,
  Text,
  Title,
  Video,
  type GalleryItem,
} from "wimui";
import galleryMountain from "@/media/gallery_mountain.svg";
import galleryMountainFaded from "@/media/gallery_mountain_faded.svg";
import galleryOcean from "@/media/gallery_ocean.svg";
import galleryForest from "@/media/gallery_forest.svg";
import galleryCity from "@/media/gallery_city.svg";
import gallerySnow from "@/media/gallery_snow.svg";
import galleryDesert from "@/media/gallery_desert.svg";
import sceneWide from "@/media/scene_wide.svg";
import sceneLandscape from "@/media/scene_landscape.svg";
import sampleVideo from "@/media/videosample.mp4";
import videoPoster from "@/media/video_poster.webp";
import audioSample from "@/media/audiosample.mp3";

/**
 * 11 枚目の合成画面。**狙いは media 族**（公開カタログ 7 件中、合成済みは
 * `Image` だけ＝`Patterns/Page`）。残り 6 件を作業ごとに載せる:
 * `Gallery` / `Lightbox` / `ImageCompare` / `Video` / `Audio` / `Carousel`。
 *
 * `Carousel` は実装が `data-display` 配下でも、`components.json` の media に
 * 載っているので、ここの母数に含める。
 *
 * **題材は Kiyosumi とも `DeployAssistant` とも被らせない。** 盛岡市立図書館の
 * 書庫で、写真同好会が預けた箱を土曜日の展示用に開いている席。風景 SVG は
 * 「箱の中のプリント」そのものとして使う（山をヴァイオリンに見せかける、はしない）。
 *
 * **1 画面に 6 件は載せない。** スキャンの選別 / 退色の直し / 8mm とカセット /
 * ロビーのループ、と仕事が違うのでストーリーを分ける。主役はそれぞれ
 * Gallery / ImageCompare / Video / Carousel。
 *
 * **VRT を決める指定**: Video / Audio は止めている（`autoPlay` なし、
 * `loading="eager"`）。Carousel は `autoPlay` も `loop` も切る（クローンスライドと
 * 自動送りが位相をずらす）。Lightbox は閉じたまま撮る。
 *
 * **書いて分かった穴**:
 * ① **T171（済）** チェックで選び、クリックは `onItemClick`。
 * ② **T172（済・③）** `Lightbox.Gallery` はサムネイル帯。`Gallery` は中に入れず、登録と描画を分ける。
 */
const meta = {
  title: "Patterns/AlpineDesk",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:alpineDesk.${k}`;

const useBatchItems = (): GalleryItem[] => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return useMemo(
    () => [
      {
        id: "p-iwate",
        src: galleryMountain,
        alt: t(ns("alt_iwate")),
        title: t(ns("title_iwate")),
        caption: t(ns("cap_iwate")),
      },
      {
        id: "p-oga",
        src: galleryOcean,
        alt: t(ns("alt_oga")),
        title: t(ns("title_oga")),
        caption: t(ns("cap_oga")),
      },
      {
        id: "p-hayachine",
        src: galleryForest,
        alt: t(ns("alt_haya")),
        title: t(ns("title_haya")),
        caption: t(ns("cap_haya")),
      },
      {
        id: "p-station",
        src: galleryCity,
        alt: t(ns("alt_station")),
        title: t(ns("title_station")),
      },
      {
        id: "p-hachimantai",
        src: gallerySnow,
        alt: t(ns("alt_hachiman")),
        title: t(ns("title_hachiman")),
        caption: t(ns("cap_hachiman")),
      },
      {
        id: "p-lake",
        src: "./demo/lightbox_1.png",
        alt: t(ns("alt_lake")),
        title: t(ns("title_lake")),
        caption: t(ns("cap_lake")),
      },
      {
        id: "p-tottori",
        src: galleryDesert,
        alt: t(ns("alt_tottori")),
        title: t(ns("title_tottori")),
        caption: t(ns("cap_tottori")),
      },
    ],
    [t],
  );
};

/**
 * 今夜のスキャンを選ぶ。**主役はコンタクトシート**（`Gallery`）。
 * チェックで選び、写真クリックで `Lightbox`（T171）。
 */
export const Batch: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = useBatchItems();
    const [selected, setSelected] = useState<string[]>(["p-iwate", "p-hayachine"]);
    const [inspect, setInspect] = useState<number | null>(null);

    const lightboxItems = items.map((item) => ({
      src: item.src,
      alt: item.alt,
      title: item.title,
      caption: item.caption,
    }));

    return (
      <AppShell>
        <AppShell.Header>
          {/* 本体と同じ `surface` だとスクロール中に境が消える。影は
              AppShell では中身がヘッダーの下に潜らないので嘘になる。
              面の段（surface-variant）と下線で切る。 */}
          <Header bordered background="surface-variant">
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
            <Header.Section align="end">
              <Button size="sm" disabled={selected.length === 0}>
                {t(ns("mark"), { count: selected.length })}
              </Button>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack gap="xl">
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("batch_title"))}
                </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("batch_meta"))}
                </Text>
              </Stack>
              <Text size="sm">{t(ns("batch_lead"))}</Text>
              <Lightbox
                key={inspect ?? "closed"}
                defaultOpen={inspect !== null}
                defaultIndex={inspect ?? 0}
                onOpenChange={(open) => {
                  if (!open) setInspect(null);
                }}
              >
                {/*
                  `Lightbox.Gallery` はサムネイル帯（flex wrap + 中央揃え、sm で縦積み）
                  なので `Gallery` を中に入れるとシート全体が中央に寄る。
                  アイテムの登録だけこちらで行い、コンタクトシートは外に置く。
                */}
                <LightboxGallery items={lightboxItems}>{null}</LightboxGallery>
                <Gallery
                  items={items}
                  columns={3}
                  gap="lg"
                  aspect="square"
                  selectable
                  selected={selected}
                  onSelectionChange={setSelected}
                  onItemClick={(_item, index) => setInspect(index)}
                />
                <LightboxContent />
              </Lightbox>
            </Stack>
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>
    );
  },
};

/**
 * 退色した山のプリントを、スキャンの色に戻す途中。**主役は比較スライダー。**
 * 位置を 50 にしない（作業の途中）。左右の絵は同じ山で、退色版は別 SVG ──
 * 実行時に canvas で削ると VRT の初回描画が色のままになる。
 */
export const Restore: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("restore_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("restore_meta"))}
              </Text>
            </Stack>
            <ImageCompare
              before={galleryMountainFaded}
              after={galleryMountain}
              beforeAlt={t(ns("restore_before_alt"))}
              afterAlt={t(ns("restore_after_alt"))}
              beforeLabel={t(ns("restore_before"))}
              afterLabel={t(ns("restore_after"))}
              defaultPosition={37}
              width="100%"
              height="22rem"
              radius="md"
              labels={{ handleAriaLabel: t(ns("restore_handle")) }}
            />
            <Text size="sm" color="text-secondary">
              {t(ns("restore_note"))}
            </Text>
          </Stack>
        </Container>
      </Box>
    );
  },
};

/**
 * 8mm の転送を確認し、箱の解説カセットを横に置く。**主役は映像。**
 * Audio は参照用なので声量を下げ、Visualizer は回さない（VRT の位相が定まらない）。
 */
export const Listen: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <Box p="2xl">
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("listen_title"))}
              </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("listen_meta"))}
                </Text>
              </Stack>
              <Text size="sm">{t(ns("listen_note"))}</Text>
              <Grid
              cols={{ base: 1, md: "minmax(0, 1fr) auto" }}
              gap="xl"
            >
              <Stack gap="sm">
                <Video
                  src={sampleVideo}
                  poster={videoPoster}
                  loading="eager"
                  preload="metadata"
                  customControls
                  radius="md"
                  border
                  fit="contain"
                  caption={t(ns("video_caption"))}
                  labels={{ videoAriaLabel: t(ns("video_label")) }}
                />
              </Stack>
              {/* 列を 16rem にするとプレーヤー（min 300px）より先に文が折り返す。
                  inline Flex の幅はプレーヤー、文はそれに合わせて折り返す。 */}
              <Flex inline direction="column" gap="sm" align="stretch">
                <Box w={0} style={{ minWidth: "100%" }}>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("tape_note"))}
                  </Text>
                </Box>
                <Audio
                  src={{
                    src: audioSample,
                    title: t(ns("audio_title")),
                    artist: t(ns("audio_artist")),
                    coverArt: galleryMountain,
                  }}
                  loading="eager"
                  customControls
                  showMetadata
                  visualizer={false}
                  radius="md"
                  border
                  caption={t(ns("audio_caption"))}
                />
              </Flex>
            </Grid>
          </Stack>
        </Container>
      </Box>
    );
  },
};

/**
 * 土曜日のロビーで回す 4 枚。**主役はカルーセル。** 3 枚に揃えない。
 * 自動送りもループも切る（撮る位相を固定する）。
 */
export const Lobby: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const slides = [
      { src: galleryMountain, alt: t(ns("slide1_alt")) },
      { src: gallerySnow, alt: t(ns("slide2_alt")) },
      { src: sceneWide, alt: t(ns("slide3_alt")) },
      { src: sceneLandscape, alt: t(ns("slide4_alt")) },
    ];

    return (
      <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("lobby_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("lobby_meta"))}
              </Text>
            </Stack>
            <Carousel
              autoPlay={false}
              loop={false}
              aspectRatio="4/3"
              objectFit="cover"
              labels={{
                prevSlide: t(ns("slide_prev")),
                nextSlide: t(ns("slide_next")),
                slideLabel: (n) => t(ns("slide_n"), { number: n }),
                goToSlide: (n) => t(ns("slide_go"), { number: n }),
              }}
            >
              {slides.map((slide) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width="100%"
                  height="100%"
                  fit="cover"
                  loading="eager"
                  radius="none"
                />
              ))}
            </Carousel>
            <Text size="sm" color="text-secondary">
              {t(ns("lobby_note"))}
            </Text>
          </Stack>
        </Container>
      </Box>
    );
  },
};
