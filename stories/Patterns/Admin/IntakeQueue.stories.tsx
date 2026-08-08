import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Badge,
  Box,
  Breadcrumb,
  Button,
  Code,
  Container,
  CopyButton,
  DataGrid,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  EmptyState,
  Group,
  Icon,
  IconButton,
  InlineEdit,
  MultiSelect,
  Popconfirm,
  RelativeTime,
  SearchInput,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  Tag,
  Text,
  Title,
  Toolbar,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "wimui";
import type { DataGridColumn, IndicatorIntent } from "wimui";

const meta: Meta = {
  title: "Patterns/Admin",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

/**
 * 焙煎所の入荷ロット検品キュー。
 *
 * `RelativeTime` の基準時刻を固定して live 更新を止める（VRT を決定的にするため）。
 */
const BASE_DATE = "2026-07-27T09:00:00+09:00";

/** 全ロット件数。この画面はサーバ側ページングを前提に 1 ページ分だけ受け取る。 */
const TOTAL_LOTS = 34;
const PAGE_SIZE = 8;

type LotStatus = "unchecked" | "passed" | "hold" | "rejected";
type OriginKey = "et" | "br" | "co" | "gt" | "rw";

type Lot = {
  id: string;
  farm: string;
  origin: OriginKey;
  weightKg: number;
  arrivedAt: string;
  status: LotStatus;
  /** 空文字は棚位置が未割当。 */
  slot: string;
  /** 保留・差戻しの理由（あるロットだけ）。 */
  reasonKey?: string;
};

// 生産者名・ロット番号は固有名詞のため翻訳しない（表示は record 経由で、生の JSX テキストにはしない）。
const LOTS: Lot[] = [
  {
    id: "ET-2607-A3",
    farm: "Kochere Konga Washing Station, Block 2",
    origin: "et",
    weightKg: 1140,
    arrivedAt: "2026-07-25T14:20:00+09:00",
    status: "unchecked",
    slot: "A-14",
  },
  {
    id: "BR-2606-D2",
    farm: "Fazenda Rio Verde",
    origin: "br",
    weightKg: 22500,
    arrivedAt: "2026-07-20T09:05:00+09:00",
    status: "passed",
    slot: "C-02",
  },
  {
    id: "CO-2607-K11",
    farm: "Finca La Esperanza",
    origin: "co",
    weightKg: 68,
    arrivedAt: "2026-07-26T16:40:00+09:00",
    status: "hold",
    slot: "",
    reasonKey: "intake.reason_sample",
  },
  {
    id: "GT-2605-B7",
    farm: "Beneficio El Injerto",
    origin: "gt",
    weightKg: 840,
    arrivedAt: "2026-07-06T11:00:00+09:00",
    status: "rejected",
    slot: "B-31",
    reasonKey: "intake.reason_moisture",
  },
  {
    id: "RW-2607-F1",
    farm: "Nyamasheke Cooperative",
    origin: "rw",
    weightKg: 1320,
    arrivedAt: "2026-07-23T13:15:00+09:00",
    status: "passed",
    slot: "A-07",
  },
  {
    id: "ET-2606-A9",
    farm: "Hambela Alaka",
    origin: "et",
    weightKg: 2760,
    arrivedAt: "2026-07-14T10:30:00+09:00",
    status: "hold",
    slot: "D-19",
    reasonKey: "intake.reason_cupping",
  },
  {
    id: "CO-2607-K12",
    farm: "Finca La Esperanza",
    origin: "co",
    weightKg: 415,
    arrivedAt: "2026-07-26T16:40:00+09:00",
    status: "unchecked",
    slot: "C-05",
  },
  {
    id: "BR-2607-D8",
    farm: "Sítio Bela Vista",
    origin: "br",
    weightKg: 5940,
    arrivedAt: "2026-07-21T08:50:00+09:00",
    status: "passed",
    slot: "C-08",
  },
];

const STATUS_INTENT: Record<LotStatus, IndicatorIntent> = {
  unchecked: "neutral",
  passed: "success",
  hold: "warning",
  rejected: "danger",
};

const STATUS_LABEL: Record<LotStatus, string> = {
  unchecked: "intake.status_unchecked",
  passed: "intake.status_passed",
  hold: "intake.status_hold",
  rejected: "intake.status_rejected",
};

const ORIGIN_LABEL: Record<OriginKey, string> = {
  et: "intake.origin_et",
  br: "intake.origin_br",
  co: "intake.origin_co",
  gt: "intake.origin_gt",
  rw: "intake.origin_rw",
};

type IntakeQueueProps = {
  /** 初期の選択行（一括操作バーの状態を見せるため）。 */
  initialSelected?: string[];
  /** 初期の検索語。 */
  initialQuery?: string;
  /** 再取得中の表示。行は読める・触れるまま更新中であることだけ伝える。 */
  loading?: boolean;
};

function IntakeQueue({
  initialSelected = [],
  initialQuery = "",
  loading = false,
}: IntakeQueueProps) {
  const { t, i18n } = useTranslation(ALL_NAMESPACES);
  const [query, setQuery] = useState(initialQuery);
  const [origins, setOrigins] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [slots, setSlots] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" | "none" }>({
    key: "arrivedAt",
    direction: "desc",
  });
  const [rejected, setRejected] = useState(0);

  const numberFormat = useMemo(
    () => new Intl.NumberFormat(i18n.language),
    [i18n.language],
  );

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = LOTS.filter((lot) => {
      const matchesQuery =
        needle === "" ||
        lot.id.toLowerCase().includes(needle) ||
        lot.farm.toLowerCase().includes(needle);
      const matchesOrigin = origins.length === 0 || origins.includes(lot.origin);
      const matchesStatus = status === "" || lot.status === status;
      return matchesQuery && matchesOrigin && matchesStatus;
    });
    if (sort.direction === "none") return filtered;
    const factor = sort.direction === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      if (sort.key === "weightKg") return (a.weightKg - b.weightKg) * factor;
      if (sort.key === "arrivedAt") return a.arrivedAt.localeCompare(b.arrivedAt) * factor;
      return String(a[sort.key as keyof Lot] ?? "").localeCompare(
        String(b[sort.key as keyof Lot] ?? ""),
      ) * factor;
    });
  }, [query, origins, status, sort]);

  const isFiltered = query.trim() !== "" || origins.length > 0 || status !== "";
  const holdCount = LOTS.filter((lot) => lot.status === "hold").length;

  const clearFilters = () => {
    setQuery("");
    setOrigins([]);
    setStatus("");
  };

  const columns: DataGridColumn<Lot>[] = [
    {
      key: "id",
      title: t("intake.col_lot"),
      sortable: true,
      render: (_value, lot) => (
        <Group gap="2xs" align="center" wrap="nowrap">
          <Code>{lot.id}</Code>
          <CopyButton
            value={lot.id}
            size="sm"
            copyLabel={t("intake.copy_lot")}
            copiedLabel={t("intake.copied_lot")}
          />
        </Group>
      ),
    },
    {
      key: "farm",
      title: t("intake.col_farm"),
      sortable: true,
      render: (_value, lot) => <Text size="sm">{lot.farm}</Text>,
    },
    {
      key: "origin",
      title: t("intake.col_origin"),
      render: (_value, lot) => (
        <Tag intent="neutral" variant="subtle" size="sm">
          {t(ORIGIN_LABEL[lot.origin])}
        </Tag>
      ),
    },
    {
      key: "weightKg",
      title: t("intake.col_weight"),
      sortable: true,
      render: (_value, lot) => (
        <Group gap="2xs" align="baseline" justify="end" wrap="nowrap">
          <Text size="sm">{numberFormat.format(lot.weightKg)}</Text>
          <Text size="xs" color="text-tertiary">
            {t("intake.weight_unit")}
          </Text>
        </Group>
      ),
    },
    {
      key: "arrivedAt",
      title: t("intake.col_arrived"),
      sortable: true,
      render: (_value, lot) => (
        <Text size="sm" color="text-secondary" asChild>
          <RelativeTime date={lot.arrivedAt} baseDate={BASE_DATE} locale={i18n.language} />
        </Text>
      ),
    },
    {
      key: "status",
      title: t("intake.col_status"),
      render: (_value, lot) => {
        const badge = (
          <Badge intent={STATUS_INTENT[lot.status]} variant="subtle">
            {t(STATUS_LABEL[lot.status])}
          </Badge>
        );
        if (!lot.reasonKey) return badge;
        return (
          <Tooltip>
            <TooltipTrigger asChild>{badge}</TooltipTrigger>
            <TooltipContent>{t(lot.reasonKey)}</TooltipContent>
          </Tooltip>
        );
      },
    },
    {
      key: "slot",
      title: t("intake.col_slot"),
      render: (_value, lot) => (
        <InlineEdit
          value={slots[lot.id] ?? lot.slot}
          placeholder={t("intake.slot_unset")}
          aria-label={t("intake.slot_edit", { lot: lot.id })}
          onChange={(value) => setSlots((prev) => ({ ...prev, [lot.id]: value }))}
        />
      ),
    },
    {
      key: "actions",
      title: t("intake.col_actions"),
      render: (_value, lot) => (
        <Dropdown>
          <DropdownTrigger asChild>
            <IconButton
              iconName="MoreVerticalIcon"
              variant="ghost"
              size="sm"
              aria-label={t("intake.row_menu", { lot: lot.id })}
            />
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>{t("intake.menu_detail")}</DropdownItem>
            <DropdownItem>{t("intake.menu_assign")}</DropdownItem>
            <Popconfirm
              title={t("intake.cancel_confirm_title")}
              description={t("intake.cancel_confirm_desc")}
              okText={t("intake.cancel_confirm_ok")}
              cancelText={t("intake.confirm_cancel")}
              okType="danger"
              onConfirm={() => undefined}
            >
              <DropdownItem>{t("intake.menu_cancel")}</DropdownItem>
            </Popconfirm>
          </DropdownMenu>
        </Dropdown>
      ),
    },
  ];

  return (
    <Box bg="surface-app" py="4xl">
      <Container size="xl">
        <Stack gap="2xl">
          <Stack gap="sm">
            <Breadcrumb
              size="sm"
              items={[
                { label: t("intake.breadcrumb_intake"), href: "#" },
                { label: t("intake.breadcrumb_queue") },
              ]}
            />
            <Group justify="between" align="end" gap="lg" wrap="wrap">
              <Stack gap="2xs">
                <Title tag="h1" size="lg">
                  {t("intake.title")}
                </Title>
                {loading ? (
                  <Skeleton variant="text" width="18rem" />
                ) : (
                  <Text size="sm" color="text-secondary">
                    {t("intake.summary", { total: TOTAL_LOTS, hold: holdCount })}
                  </Text>
                )}
              </Stack>
              <Button icon="PlusIcon">{t("intake.action_register")}</Button>
            </Group>
          </Stack>

          <Stack gap="md">
            <Toolbar>
              {selected.length > 0 ? (
                <>
                  <Toolbar.Group>
                    <Text size="sm" weight="medium">
                      {t("intake.bulk_selected", { count: selected.length })}
                    </Text>
                  </Toolbar.Group>
                  <Toolbar.Separator />
                  <Toolbar.Group>
                    <Button variant="outline" size="sm">
                      {t("intake.bulk_assign")}
                    </Button>
                  </Toolbar.Group>
                  <Toolbar.Group>
                    <Popconfirm
                      title={t("intake.reject_confirm_title", { count: selected.length })}
                      description={t("intake.reject_confirm_desc")}
                      okText={t("intake.reject_confirm_ok")}
                      cancelText={t("intake.confirm_cancel")}
                      okType="danger"
                      onConfirm={() => {
                        setRejected(selected.length);
                        setSelected([]);
                      }}
                    >
                      <Button variant="outline" size="sm" intent="danger">
                        {t("intake.bulk_reject")}
                      </Button>
                    </Popconfirm>
                  </Toolbar.Group>
                  <Toolbar.Group>
                    <Button variant="ghost" size="sm" onClick={() => setSelected([])}>
                      {t("intake.bulk_clear")}
                    </Button>
                  </Toolbar.Group>
                </>
              ) : (
                <>
                  <Toolbar.Group>
                    <SearchInput
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={t("intake.search_placeholder")}
                      aria-label={t("intake.search_label")}
                      width="md"
                    />
                  </Toolbar.Group>
                  <Toolbar.Group>
                    <MultiSelect
                      value={origins}
                      onChange={setOrigins}
                      placeholder={t("intake.filter_origin")}
                      aria-label={t("intake.filter_origin")}
                      options={(Object.keys(ORIGIN_LABEL) as OriginKey[]).map((key) => ({
                        value: key,
                        label: t(ORIGIN_LABEL[key]),
                      }))}
                      width="sm"
                      allowClear
                    />
                    <Select
                      value={status}
                      onChange={setStatus}
                      placeholder={t("intake.filter_status")}
                      aria-label={t("intake.filter_status")}
                      options={(Object.keys(STATUS_LABEL) as LotStatus[]).map((key) => ({
                        value: key,
                        label: t(STATUS_LABEL[key]),
                      }))}
                      width="sm"
                      allowClear
                    />
                  </Toolbar.Group>
                  <Toolbar.Group>
                    <IconButton
                      iconName="RefreshIcon"
                      variant="ghost"
                      size="sm"
                      aria-label={t("intake.refresh")}
                    />
                  </Toolbar.Group>
                </>
              )}
            </Toolbar>

            <div data-density="compact">
              {/* Wide lot grid still overflows at tablet with the default
                  sm (576) card break — md keeps cards through 768. */}
              <DataGrid<Lot>
                columns={columns}
                data={rows}
                rowKey="id"
                loading={loading ? "refresh" : false}
                mobileCard="md"
                ariaLabel={t("intake.grid_label")}
                selection
                selectedRowKeys={selected}
                onSelectionChange={(keys) => setSelected(keys)}
                sortConfig={sort}
                onSortChange={(key, direction) => setSort({ key, direction })}
                pagination={
                  rows.length === 0
                    ? false
                    : {
                        current: 1,
                        pageSize: PAGE_SIZE,
                        total: isFiltered ? rows.length : TOTAL_LOTS,
                        onChange: () => undefined,
                      }
                }
                emptyMessage={
                  <EmptyState
                    title={t("intake.empty_title")}
                    description={t("intake.empty_desc")}
                    icon={<Icon name="SearchIcon" size="lg" />}
                    extra={
                      <Button variant="outline" onClick={clearFilters}>
                        {t("intake.empty_action")}
                      </Button>
                    }
                  />
                }
              />
            </div>
          </Stack>
        </Stack>
      </Container>

      <Snackbar
        open={rejected > 0}
        message={t("intake.snackbar_rejected", { count: rejected })}
        actionLabel={t("intake.snackbar_undo")}
        onAction={() => setRejected(0)}
        onClose={() => setRejected(0)}
        autoHideDuration={0}
        showCloseButton
      />
    </Box>
  );
}

export const IntakeQueueDefault: StoryObj = {
  name: "Intake queue",
  render: () => <IntakeQueue />,
};

export const IntakeQueueSelected: StoryObj = {
  name: "Intake queue / bulk selection",
  render: () => <IntakeQueue initialSelected={["ET-2607-A3", "CO-2607-K11", "ET-2606-A9"]} />,
};

export const IntakeQueueEmpty: StoryObj = {
  name: "Intake queue / no matches",
  render: () => <IntakeQueue initialQuery="yirgacheffe" />,
};

export const IntakeQueueLoading: StoryObj = {
  name: "Intake queue / refetching",
  render: () => <IntakeQueue loading />,
};
