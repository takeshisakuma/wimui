import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  AspectRatio,
  Button,
  Calendar,
  ImageIcon,
  InteractiveArea,
  Loader,
  Masonry,
  Reaction,
  SimpleGrid,
  Span,
  Splitter,
  StarIcon,
  Text,
  ThumbUpIcon,
  Title,
  Watermark,
  type ReactionItem,
} from "wimui";
import styles from "./probe.module.scss";

/**
 * T180 のプローブ。沼袋写友会の今月の掲示。
 * Wall = `Masonry` / `AspectRatio` / `Watermark` / `Reaction`。
 * Book = `Calendar` / `SimpleGrid` / `Loader` / `Span`。
 * Hang = `Splitter` / `InteractiveArea`。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/NumabukuroWall",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:numa.${k}`;

const DAY = new Date(2026, 7, 16);

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

type PrintId = "endo" | "gill" | "noguchi" | "kinoshita" | "sasaki";

const PRINTS: { id: PrintId; ratio: number; lab?: boolean }[] = [
  { id: "endo", ratio: 3 / 2 },
  { id: "gill", ratio: 2 / 3 },
  { id: "noguchi", ratio: 1 },
  { id: "kinoshita", ratio: 4 / 5 },
  { id: "sasaki", ratio: 3 / 2, lab: true },
];

export const Wall: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [starOn, setStarOn] = React.useState(true);
    const [upOn, setUpOn] = React.useState(false);

    const reactions: ReactionItem[] = [
      {
        id: "star",
        icon: <StarIcon />,
        label: t(ns("react_star")),
        count: starOn ? 7 : 6,
        active: starOn,
      },
      {
        id: "up",
        icon: <ThumbUpIcon />,
        label: t(ns("react_up")),
        count: upOn ? 3 : 2,
        active: upOn,
      },
    ];

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Title tag="h1" size="lg">
              {t(ns("wall_title"))}
            </Title>
            <Text size="sm" color="secondary">
              {t(ns("wall_line"))}
            </Text>
          </div>
          <Masonry
            columns={2}
            spacing="var(--wim-spacing-md)"
            aria-label={t(ns("wall"))}
          >
            {PRINTS.map((print) => (
              <div key={print.id} className={styles.tile}>
                <AspectRatio ratio={print.ratio}>
                  <Watermark content={t(ns("club"))}>
                    <div className={styles.sheet}>
                      <div
                        className={
                          print.lab
                            ? `${styles.emulsion} ${styles.emulsionLab}`
                            : styles.emulsion
                        }
                      />
                      <div className={styles.matte}>
                        <Text
                          size="sm"
                          truncate={print.id === "kinoshita"}
                        >
                          {t(ns(`p_${print.id}`))}
                        </Text>
                        <Text size="xs" color="secondary">
                          {t(ns(`who_${print.id}`))}
                        </Text>
                      </div>
                    </div>
                  </Watermark>
                </AspectRatio>
                {print.id === "endo" && (
                  <>
                    <Text size="sm" color="secondary">
                      {t(ns("wall_vote"))}
                    </Text>
                    <Reaction
                      reactions={reactions}
                      onReact={(id, active) => {
                        if (id === "star") setStarOn(active);
                        if (id === "up") setUpOn(active);
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    );
  },
};

export const Book: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [day, setDay] = React.useState(DAY);
    const isBooked = isSameDay(day, DAY);

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("club"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("book_line"))}
            </Text>
          </div>
          <div className={styles.book}>
            <Calendar
              value={day}
              onChange={setDay}
              minDate={DAY}
              weekStartsOn={1}
              isDateDisabled={(d) => d.getDay() === 1}
            />
            <div className={styles.slots}>
              <Text size="sm" color="secondary">
                {t(ns("pegs"))}
              </Text>
              <div className={styles.paperRow}>
                <Text size="sm" color="secondary">
                  {t(ns("paper_out"))}
                </Text>
                <Span size="sm" decoration="line-through">
                  {t(ns("size_2l"))}
                </Span>
              </div>
              {isBooked ? (
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                  <div className={styles.slot}>
                    <Text>{t(ns("p_endo"))}</Text>
                    <Text size="sm" color="secondary">
                      {t(ns("who_endo"))}
                    </Text>
                    <Span size="sm">{t(ns("size_6"))}</Span>
                  </div>
                  <div className={styles.slot}>
                    <Text truncate>{t(ns("p_kinoshita"))}</Text>
                    <Text size="sm" color="secondary">
                      {t(ns("who_kinoshita"))}
                    </Text>
                    <Span size="sm">{t(ns("size_4"))}</Span>
                  </div>
                  <div className={styles.slot}>
                    <div className={styles.slotWait}>
                      <Loader
                        variant="dots"
                        size="sm"
                        color="neutral"
                        aria-label={t(ns("writing"))}
                      />
                      <Text size="sm" color="secondary">
                        {t(ns("writing"))}
                      </Text>
                    </div>
                    <Span size="sm">{t(ns("size_a4"))}</Span>
                  </div>
                </SimpleGrid>
              ) : (
                <Text size="sm" color="secondary">
                  {t(ns("empty"))}
                </Text>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

type WaitingId = "gill" | "sasaki";

export const Hang: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [picked, setPicked] = React.useState<WaitingId | null>(null);
    const [hung, setHung] = React.useState<WaitingId | null>(null);

    const ready = picked !== null && hung !== picked;

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("club"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("hang_line"))}
            </Text>
          </div>
          <div className={styles.hang}>
            <Splitter orientation="horizontal">
              <Splitter.Panel defaultSize={38} minSize={28}>
                <div className={styles.queue} role="group" aria-label={t(ns("queue"))}>
                  <Text size="sm" color="secondary">
                    {t(ns("queue"))}
                  </Text>
                  <Button
                    size="sm"
                    variant={picked === "gill" ? "solid" : "outline"}
                    aria-pressed={picked === "gill"}
                    disabled={hung === "gill"}
                    onClick={() => setPicked("gill")}
                  >
                    {hung === "gill"
                      ? `${t(ns("who_gill"))} · ${t(ns("hung"))}`
                      : t(ns("who_gill"))}
                  </Button>
                  <Text size="sm" color="secondary">
                    {t(ns("p_gill"))}
                  </Text>
                  <Button
                    size="sm"
                    variant={picked === "sasaki" ? "solid" : "outline"}
                    aria-pressed={picked === "sasaki"}
                    disabled={hung === "sasaki"}
                    onClick={() => setPicked("sasaki")}
                  >
                    {hung === "sasaki"
                      ? `${t(ns("who_sasaki"))} · ${t(ns("hung"))}`
                      : t(ns("who_sasaki"))}
                  </Button>
                  <Text size="sm" color="secondary">
                    {t(ns("reprint"))}
                  </Text>
                </div>
              </Splitter.Panel>
              <Splitter.Handle />
              <Splitter.Panel defaultSize={62} minSize={40}>
                <div className={styles.drop}>
                  <InteractiveArea
                    className={styles.dropFill}
                    variant="dashed"
                    bgVariant="muted"
                    icon={<ImageIcon />}
                    title={hung ? t(ns("drop_done")) : t(ns("drop_title"))}
                    description={
                      hung
                        ? undefined
                        : ready
                          ? t(ns("drop_ready"))
                          : t(ns("drop_body"))
                    }
                    isClickable={ready}
                    onClick={() => {
                      if (picked && hung !== picked) setHung(picked);
                    }}
                  />
                </div>
              </Splitter.Panel>
            </Splitter>
          </div>
        </div>
      </div>
    );
  },
};
