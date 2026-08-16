import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Anchor,
  Button,
  Footer,
  HoverCard,
  Kbd,
  KeyboardShortcuts,
  Menu,
  Navbar,
  Text,
  Title,
  ToastProvider,
  Tour,
  useToast,
} from "wimui";
import styles from "./probe.module.scss";

/**
 * T180 のバッチ 1。鷺宮プールの今日。
 * Hours = `Navbar` / `Footer` / `Anchor`。
 * Desk = `Menu` / `HoverCard` / `Toast`。
 * FirstShift = `Tour` / `KeyboardShortcuts` / `Kbd`。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/SaginomiyaPool",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:sagi.${k}`;

export const Hours: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    return (
      <div className={styles.page}>
        <Navbar bordered>
          <Navbar.Brand>{t(ns("pool"))}</Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#sagi-hours" active>
              {t(ns("nav_today"))}
            </Navbar.Link>
            <Navbar.Link href="#sagi-fees">{t(ns("nav_fees"))}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem active>{t(ns("nav_today"))}</Navbar.MenuItem>
            <Navbar.MenuItem>{t(ns("nav_fees"))}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("hours_line"))}
            </Text>
          </div>
          <div className={styles.status}>
            <Title tag="h1" size="xl">
              {t(ns("closed"))}
            </Title>
            <Text size="sm" color="secondary">
              {t(ns("open_hours"))}
            </Text>
          </div>
          <div className={styles.toc}>
            <Text size="sm" color="secondary">
              {t(ns("toc"))}
            </Text>
            <Anchor
              direction="horizontal"
              items={[
                { key: "hours", href: "#sagi-hours", title: t(ns("hours_title")) },
                { key: "fees", href: "#sagi-fees", title: t(ns("fees_title")) },
                { key: "access", href: "#sagi-access", title: t(ns("access_title")) },
              ]}
            />
          </div>
          <section id="sagi-hours" className={styles.section}>
            <Title tag="h2" size="sm">
              {t(ns("hours_title"))}
            </Title>
            <Text>{t(ns("hours_body"))}</Text>
          </section>
          <section id="sagi-fees" className={styles.section}>
            <Title tag="h2" size="sm">
              {t(ns("fees_title"))}
            </Title>
            <Text>{t(ns("fees_body"))}</Text>
            <Text size="sm" color="secondary">
              {t(ns("fees_caps"))}
            </Text>
          </section>
          <section id="sagi-access" className={styles.section}>
            <Title tag="h2" size="sm">
              {t(ns("access_title"))}
            </Title>
            <div className={styles.access}>
              <Text>{t(ns("access_walk"))}</Text>
              <Text>{t(ns("access_bus"))}</Text>
              <Text>{t(ns("access_park"))}</Text>
              <Text>{t(ns("access_bike"))}</Text>
            </div>
          </section>
        </div>
        <Footer bordered>
          <Footer.Section title={t(ns("footer_visit"))}>
            <div className={styles.footerBits}>
              <Text size="sm">{t(ns("footer_address"))}</Text>
              <Text size="sm" color="secondary">
                {t(ns("footer_gate"))}
              </Text>
            </div>
          </Footer.Section>
          <Footer.Bottom>{t(ns("footer_note"))}</Footer.Bottom>
        </Footer>
      </div>
    );
  },
};

type Swimmer = "takahashi" | "mori" | "woodin";

function DeskBody({
  showTour,
  showKeys,
}: {
  showTour?: boolean;
  showKeys?: boolean;
}) {
  const { t } = useTranslation(ALL_NAMESPACES);
  const { show } = useToast();
  const [waiting, setWaiting] = React.useState<Swimmer | null>("mori");
  const [tourOpen, setTourOpen] = React.useState(Boolean(showTour));

  const checkInMori = React.useCallback(() => {
    if (waiting !== "mori") return;
    setWaiting(null);
    show({
      title: t(ns("toast_mori_title")),
      description: t(ns("toast_mori_body")),
      intent: "success",
      duration: 0,
    });
  }, [show, t, waiting]);

  const didShowIn = React.useRef(false);
  React.useEffect(() => {
    if (didShowIn.current) return;
    didShowIn.current = true;
    show({
      title: t(ns("toast_title")),
      description: t(ns("toast_body")),
      intent: "success",
      duration: 0,
    });
  }, [show, t]);

  React.useEffect(() => {
    if (!showKeys) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F2") {
        e.preventDefault();
        checkInMori();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [checkInMori, showKeys]);

  return (
    <div className={styles.page}>
      <div className={styles.work}>
        <div className={styles.chrome}>
          <Text size="sm" color="secondary">
            {t(showTour ? ns("shift_line") : ns("desk_line"))}
          </Text>
        </div>
        <div className={styles.desk}>
          <nav className={styles.rail} aria-label={t(ns("menu"))}>
            <Menu mode="vertical" defaultSelectedKeys={["lanes"]}>
              <Menu.Item itemKey="lanes">{t(ns("menu_lanes"))}</Menu.Item>
              <Menu.Item
                itemKey="close"
                danger
                onClick={() =>
                  show({
                    title: t(ns("toast_closed_title")),
                    description: t(ns("toast_closed_body")),
                    intent: "warning",
                    duration: 0,
                  })
                }
              >
                {t(ns("menu_close"))}
              </Menu.Item>
            </Menu>
          </nav>
          <div className={styles.sheet}>
            <Text size="sm" color="secondary" id="sagi-closed">
              {t(ns("lane_closed"))}
            </Text>
            <div className={styles.row}>
              <HoverCard>
                <HoverCard.Trigger>
                  <div className={styles.who}>
                    <Text weight="medium">{t(ns("takahashi"))}</Text>
                    <Text size="sm" color="secondary">
                      {t(ns("takahashi_note"))}
                    </Text>
                  </div>
                </HoverCard.Trigger>
                <HoverCard.Content side="bottom" align="left">
                  <Text size="sm">{t(ns("hover_body"))}</Text>
                </HoverCard.Content>
              </HoverCard>
            </div>
            <div className={styles.row}>
              <div className={styles.who}>
                <Text weight="medium">{t(ns("mori"))}</Text>
                <Text size="sm" color="secondary">
                  {waiting === "mori" ? t(ns("mori_note")) : t(ns("mori_in"))}
                </Text>
              </div>
              {waiting === "mori" && (
                <div className={styles.checkin} id="sagi-checkin">
                  <Button size="md" variant="solid" onClick={checkInMori}>
                    {t(ns("checkin"))}
                  </Button>
                  {showKeys && <Kbd>{t(ns("f2"))}</Kbd>}
                </div>
              )}
            </div>
            <div className={styles.row}>
              <div className={styles.who}>
                <Text weight="medium">{t(ns("woodin"))}</Text>
                <Text size="sm" color="secondary">
                  {t(ns("woodin_note"))}
                </Text>
              </div>
            </div>
            {showKeys && (
              <div className={styles.keys}>
                <KeyboardShortcuts
                  title={t(ns("keys_title"))}
                  shortcuts={[
                    { label: t(ns("key_checkin")), keys: [t(ns("f2"))] },
                    { label: t(ns("key_escape")), keys: ["Esc"] },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {showTour && (
        <Tour
          open={tourOpen}
          onClose={() => setTourOpen(false)}
          steps={[
            {
              target: "#sagi-checkin",
              title: t(ns("tour_checkin_title")),
              description: t(ns("tour_checkin_body")),
              placement: "bottom",
            },
            {
              target: "#sagi-closed",
              title: t(ns("tour_closed_title")),
              description: t(ns("tour_closed_body")),
              placement: "bottom",
            },
          ]}
        />
      )}
    </div>
  );
}

function DeskStory({
  showTour,
  showKeys,
}: {
  showTour?: boolean;
  showKeys?: boolean;
}) {
  return (
    <ToastProvider>
      <DeskBody showTour={showTour} showKeys={showKeys} />
    </ToastProvider>
  );
}

export const Desk: Story = {
  render: () => <DeskStory />,
};

export const FirstShift: Story = {
  render: () => <DeskStory showTour showKeys />,
};
