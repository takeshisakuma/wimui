import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { SelectionBar } from "@/components/data-display/SelectionBar/SelectionBar";
import { DataGrid } from "@/components/data-display/DataGrid/DataGrid";
import { Badge } from "@/components/data-display/Badge/Badge";
import { Button } from "@/components/form/Button/Button";
import { Popconfirm } from "@/components/overlay/Popconfirm/Popconfirm";
import { Stack } from "@/components/layout/Stack/Stack";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof SelectionBar> = {
  title: "Components/Data Structures/SelectionBar",
  component: SelectionBar,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    count: { control: { type: "number", min: 0 } },
  },
};

export default meta;
type Story = StoryObj<typeof SelectionBar>;

/** 通販の注文一覧で、選んだ注文にかける操作（発送の操作は日常の一操作、取り消しだけが危険側）。 */
const OrderActions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return (
    <>
      <Button variant="outline" size="sm">
        {t("story.selectionbar_action_labels")}
      </Button>
      <Button variant="outline" size="sm">
        {t("story.selectionbar_action_shipped")}
      </Button>
      <Button variant="ghost" size="sm" intent="danger">
        {t("story.selectionbar_action_cancel")}
      </Button>
    </>
  );
};

export const Default: Story = {
  args: {
    count: 3,
  },
  render: (args) => {
    const [count, setCount] = React.useState(args.count);
    React.useEffect(() => setCount(args.count), [args.count]);
    return (
      <SelectionBar {...args} count={count} onClear={() => setCount(0)}>
        <OrderActions />
      </SelectionBar>
    );
  },
};

type Order = {
  id: string;
  customer: string;
  items: number;
  total: string;
  status: "paid" | "packed" | "on_hold";
};

// 順不同の注文番号・名前・金額。保留の 1 件と、品数の多い 1 件を混ぜる
const ORDERS: Order[] = [
  { id: "A-20931", customer: "Mariana Okafor", items: 2, total: "¥8,640", status: "paid" },
  { id: "A-20927", customer: "佐々木 透", items: 1, total: "¥2,180", status: "packed" },
  { id: "A-20918", customer: "Lukas Brandt", items: 7, total: "¥31,905", status: "paid" },
  { id: "A-20916", customer: "Thanh Nguyen", items: 1, total: "¥1,320", status: "on_hold" },
  { id: "A-20902", customer: "Inês Carvalho", items: 3, total: "¥12,470", status: "paid" },
];

const STATUS_INTENT = { paid: "neutral", packed: "success", on_hold: "warning" } as const;

/** 表の上に置き、選んだ件数に応じて出る。閉じても status 領域は残り、解除を告知する。 */
export const WithDataGrid: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [selected, setSelected] = React.useState<string[]>(["A-20931", "A-20918"]);
    const [cancelled, setCancelled] = React.useState<string[]>([]);
    const rows = ORDERS.filter((order) => !cancelled.includes(order.id));
    const columns = [
      { key: "id", title: t("story.selectionbar_col_order"), width: 96 },
      { key: "customer", title: t("story.selectionbar_col_customer"), width: 160 },
      { key: "items", title: t("story.selectionbar_col_items"), width: 64 },
      { key: "total", title: t("story.selectionbar_col_total"), width: 96 },
      {
        key: "status",
        title: t("story.selectionbar_col_status"),
        width: 96,
        render: (value: unknown) => {
          const status = value as Order["status"];
          return (
            <Badge intent={STATUS_INTENT[status]} variant="subtle">
              {t(`story.selectionbar_status_${status}`)}
            </Badge>
          );
        },
      },
    ];
    return (
      <Stack gap="xs">
        <SelectionBar count={selected.length} onClear={() => setSelected([])}>
          <Button variant="outline" size="sm">
            {t("story.selectionbar_action_labels")}
          </Button>
          <Button variant="outline" size="sm">
            {t("story.selectionbar_action_shipped")}
          </Button>
          <Popconfirm
            title={t("story.selectionbar_cancel_confirm", { count: selected.length })}
            okText={t("story.selectionbar_action_cancel")}
            cancelText={t("story.selectionbar_cancel_keep")}
            okType="danger"
            onConfirm={() => {
              setCancelled((ids) => [...ids, ...selected]);
              setSelected([]);
            }}
          >
            <Button variant="ghost" size="sm" intent="danger">
              {t("story.selectionbar_action_cancel")}
            </Button>
          </Popconfirm>
        </SelectionBar>
        <DataGrid
          aria-label={t("story.selectionbar_grid_label")}
          columns={columns}
          data={rows as unknown as Record<string, unknown>[]}
          rowKey="id"
          selection
          selectedRowKeys={selected}
          onSelectionChange={(keys) => setSelected(keys)}
          bordered
          mobileCard
        />
      </Stack>
    );
  },
};
