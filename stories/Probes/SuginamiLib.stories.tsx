import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import { Highlight, Pagination, TabNavigation, Text } from "wimui";
import styles from "./probe.module.scss";

/**
 * T180 の 7 本目のプローブ。区立図書館の検索席。
 * `TabNavigation`（所蔵 / 予約できる）/ `Highlight`（検索語）/
 * `Pagination`（所蔵は 2 ページ）。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/SuginamiLib",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:suginami.${k}`;

const PAGE_SIZE = 8;

type Hit = { title: string; shelf?: string; clamp?: boolean };

const HOLDINGS: Hit[] = [
  { title: "h1" },
  { title: "h2", shelf: "s2" },
  { title: "h3", shelf: "s3", clamp: true },
  { title: "h4", shelf: "s4" },
  { title: "h5" },
  { title: "h6", shelf: "s6" },
  { title: "h7", shelf: "s7" },
  { title: "h8", shelf: "s8" },
  { title: "h9", shelf: "s9" },
  { title: "h10", shelf: "s10" },
  { title: "h11", shelf: "s11" },
];

const RESERVABLE: Hit[] = [
  { title: "r1", shelf: "rs1" },
  { title: "r2", shelf: "rs2" },
  { title: "r3" },
  { title: "r4", shelf: "rs4" },
];

export const Lockup: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [tab, setTab] = React.useState<"holdings" | "reservable">("holdings");
    const [page, setPage] = React.useState(1);
    const query = t(ns("query"));
    const catalog = tab === "holdings" ? HOLDINGS : RESERVABLE;
    const hits =
      tab === "holdings"
        ? catalog.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
        : catalog;

    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.chrome}>
            <Text size="sm" color="secondary">
              {t(ns("library"))}
            </Text>
            <Text size="sm" color="secondary">
              {t(ns("query_line"), { query })}
            </Text>
          </div>
          <TabNavigation aria-label={t(ns("tabs_label"))}>
            <TabNavigation.Item
              active={tab === "holdings"}
              onClick={() => {
                setTab("holdings");
                setPage(1);
              }}
            >
              {t(ns("tab_holdings"), { count: HOLDINGS.length })}
            </TabNavigation.Item>
            <TabNavigation.Item
              active={tab === "reservable"}
              onClick={() => {
                setTab("reservable");
                setPage(1);
              }}
            >
              {t(ns("tab_reservable"), { count: RESERVABLE.length })}
            </TabNavigation.Item>
          </TabNavigation>
          <div className={styles.results}>
            <ul className={styles.hits}>
              {hits.map((hit) => (
                <li key={hit.title} className={styles.hit}>
                  <Text
                    size="lg"
                    weight="medium"
                    lineClamp={hit.clamp ? 2 : undefined}
                  >
                    <Highlight highlight={query}>{t(ns(hit.title))}</Highlight>
                  </Text>
                  {hit.shelf ? (
                    <Text size="sm" color="secondary">
                      {t(ns(hit.shelf))}
                    </Text>
                  ) : null}
                </li>
              ))}
            </ul>
            {tab === "holdings" ? (
              <Pagination
                total={HOLDINGS.length}
                pageSize={PAGE_SIZE}
                current={page}
                onChange={(next) => setPage(next)}
                hideOnSinglePage
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  },
};
