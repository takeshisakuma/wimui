import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Barcode, Card, Stack, Text } from "wimui";
import type { BarcodeProps } from "wimui";

const meta: Meta<typeof Barcode> = {
  title: "Components/Data Indicators/Barcode",
  component: Barcode,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    format: {
      control: "radio",
      options: ["code128", "ean13"],
    },
    showValue: { control: "boolean" },
    height: { control: { type: "range", min: 32, max: 128, step: 8 } },
    moduleWidth: { control: { type: "range", min: 1, max: 4, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof Barcode>;

export const Default: Story = {
  args: {
    value: "WIM-4829-KT",
    format: "code128",
  },
};

/**
 * どちらを使うかは**読む側の道具**で決まる。Code 128 は ASCII をそのまま載せられ、
 * EAN-13 は 13 桁の商品コード専用（12 桁を渡せばチェックディジットは計算される）。
 */
export const Formats: Story = {
  render: function Render(args: BarcodeProps) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="xl">
        <Stack gap="2xs">
          <Text size="xs" color="text-secondary">
            {t("story.barcode_caption_code128")}
          </Text>
          <Barcode {...args} value="1Z999AA10123456784" format="code128" />
        </Stack>
        <Stack gap="2xs">
          <Text size="xs" color="text-secondary">
            {t("story.barcode_caption_ean13")}
          </Text>
          <Barcode {...args} value="490177701868" format="ean13" />
        </Stack>
      </Stack>
    );
  },
};

/**
 * 表の行や棚札のように、数字を別の列で持っている場所では印字を落とす。
 * 見た目から消えてもアクセシブル名は値を持ったままなので、読み上げは変わらない。
 */
export const WithoutPrintedValue: Story = {
  render: function Render(args: BarcodeProps) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="2xs">
        <Text size="xs" color="text-secondary">
          {t("story.barcode_caption_bare")}
        </Text>
        <Barcode {...args} value="SKU-77120" showValue={false} height={40} />
      </Stack>
    );
  },
};

/**
 * 表現できない値は描かない。ここでは EAN-13 の 13 桁目が合っていない
 * （`490177701868` の正しいチェックディジットは 6）。近い形で描くと、
 * **読めるのに別の商品を指すバーコード**になる。
 */
export const Unencodable: Story = {
  render: function Render(args: BarcodeProps) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="2xs" w="20rem">
        <Text size="xs" color="text-secondary">
          {t("story.barcode_caption_invalid")}
        </Text>
        <Barcode {...args} value="4901777018680" format="ean13" />
      </Stack>
    );
  },
};

/**
 * コンビニで受け付けた宅配便の控え。**主役は追跡番号のシンボル 1 つ**で、
 * 宛先も受付時刻もその周りの小さな文字に落としてある。住所は 1 行に収まらず
 * 切れる ── 控えは幅が決まっていて、住所は決まっていない。
 */
export const Realistic: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Card variant="outline">
        <Stack gap="lg" w="21rem">
          <Stack gap="3xs">
            <Text size="xs" color="text-secondary">
              {t("story.barcode_receipt_service")}
            </Text>
            <Stack direction="row" gap="xs" align="baseline">
              <Text size="xs" color="text-tertiary">
                {t("story.barcode_receipt_to")}
              </Text>
              <Text size="sm" weight="medium" truncate>
                {t("story.barcode_receipt_recipient")}
              </Text>
            </Stack>
            <Text size="xs" color="text-secondary" truncate>
              {t("story.barcode_receipt_address")}
            </Text>
          </Stack>

          <Stack gap="2xs">
            <Text size="xs" color="text-tertiary">
              {t("story.barcode_receipt_tracking")}
            </Text>
            <Barcode value="464927180355" format="code128" height={72} />
          </Stack>

          <Text size="xs" color="text-tertiary">
            {t("story.barcode_receipt_dropped")}
          </Text>
        </Stack>
      </Card>
    );
  },
};
