import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Stack,
  Text,
  Box,
  Button,
  Dialog,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Menu,
  Popconfirm,
  HoverCard,
  Dropdown,
  Drawer,
  BottomSheet,
  ContextMenu,
} from "../../src";

const meta: Meta = {
  title: "Audit/OverlayFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:overlay_family_title")}>
        {/* 1. Elevation & Shadow Audit (Standardized Floating Elements) */}
        <ComparisonGrid title={t("audit:shadow_radius_check")}>
          <Text size="sm">
            {t("audit:sample_overlay_check")}
          </Text>

          {/* Level 1: Low Elevation */}
          <ComponentGroup label={t("audit:label_level_n", { level: 1 })}>
            <Stack direction="row" gap="md" style={{ flexWrap: "wrap" }} align="center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_tooltip")}</Button>
                </TooltipTrigger>
                <TooltipContent>
                  {t("audit:overlay_tooltip_l1")}
                </TooltipContent>
              </Tooltip>
            </Stack>
          </ComponentGroup>

          {/* Level 2: Mid Elevation */}
          <ComponentGroup label={t("audit:label_level_n", { level: 2 })}>
            <Stack direction="row" gap="md" style={{ flexWrap: "wrap" }} align="center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_popover")}</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Box p="md">
                    <Text weight="bold">{t("audit:overlay_popover_header")}</Text>
                    <Text size="sm">Standardized Level 2: shadow-md, radius-lg.</Text>
                  </Box>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_menu")}</Button>
                </PopoverTrigger>
                <PopoverContent style={{ padding: 0 }}>
                  <Menu>
                    <Menu.Item>{t("audit:label_option_1")}</Menu.Item>
                    <Menu.Item>{t("audit:label_option_2")}</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item danger>{t("audit:label_intent_error")}</Menu.Item>
                  </Menu>
                </PopoverContent>
              </Popover>

              <Dropdown>
                <Dropdown.Trigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_dropdown")}</Button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>{t("audit:label_option_1")}</Dropdown.Item>
                  <Dropdown.Item>{t("audit:label_option_2")}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Popconfirm
                title={t("audit:overlay_confirm_title")}
                description="This action cannot be undone."
              >
                <Button variant="outline" size="sm">{t("audit:label_popconfirm")}</Button>
              </Popconfirm>

              <HoverCard openDelay={100}>
                <HoverCard.Trigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_hovercard")}</Button>
                </HoverCard.Trigger>
                <HoverCard.Content>
                  <Box p="xs">
                    <Text weight="bold">HoverCard</Text>
                    <Text size="xs">{t("audit:overlay_elevation_desc")}</Text>
                  </Box>
                </HoverCard.Content>
              </HoverCard>

              <ContextMenu
                menu={
                  <>
                    <ContextMenu.Item>{t("audit:label_option_1")}</ContextMenu.Item>
                    <ContextMenu.Item>{t("audit:label_option_2")}</ContextMenu.Item>
                    <ContextMenu.Divider />
                    <ContextMenu.Item danger>{t("audit:label_intent_error")}</ContextMenu.Item>
                  </>
                }
              >
                <Button variant="outline" size="sm">{t("audit:label_context_menu")}</Button>
              </ContextMenu>
            </Stack>
          </ComponentGroup>

          {/* Level 3: High Elevation */}
          <ComponentGroup label={t("audit:label_level_n", { level: 3 })}>
            <Stack direction="row" gap="md" style={{ flexWrap: "wrap" }} align="center">
              <Dialog>
                <Dialog.Trigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_dialog")}</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{t("audit:overlay_std_dialog")}</Dialog.Title>
                    <Dialog.Description>
                      {t("audit:overlay_l3_blur")}
                    </Dialog.Description>
                  </Dialog.Header>
                  <Box py="md">
                    {t("audit:overlay_standard_content")}
                  </Box>
                  <Dialog.Footer>
                    <Dialog.Close asChild>
                      <Button variant="ghost">{t("action.cancel")}</Button>
                    </Dialog.Close>
                    <Button>{t("action.confirm")}</Button>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog>

              <Drawer>
                <Drawer.Trigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_drawer")}</Button>
                </Drawer.Trigger>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>{t("audit:overlay_std_drawer")}</Drawer.Title>
                  </Drawer.Header>
                  <Box p="lg">
                    {t("audit:overlay_l3")}
                  </Box>
                </Drawer.Content>
              </Drawer>

              <BottomSheet>
                <BottomSheet.Trigger asChild>
                  <Button variant="outline" size="sm">{t("audit:label_bottom_sheet")}</Button>
                </BottomSheet.Trigger>
                <BottomSheet.Content>
                  <BottomSheet.Header>
                    <BottomSheet.Title>{t("audit:overlay_std_bottomsheet")}</BottomSheet.Title>
                  </BottomSheet.Header>
                  <BottomSheet.Body>
                    {t("audit:overlay_l3_radius")}
                  </BottomSheet.Body>
                </BottomSheet.Content>
              </BottomSheet>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};


