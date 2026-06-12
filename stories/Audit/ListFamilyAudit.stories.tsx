import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  List,
  ListItem,
  VirtualList,
  SortableList,
  DescriptionList,
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetails,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/ListFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const [sortableItems, setSortableItems] = React.useState([
      { id: "1", content: "Item 1" },
      { id: "2", content: "Item 2" },
      { id: "3", content: "Item 3" },
    ]);

    const handleSortEnd = (oldIndex: number, newIndex: number) => {
      const newItems = [...sortableItems];
      const [removed] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, removed);
      setSortableItems(newItems);
    };

    const [selectedId, setSelectedId] = React.useState<string | null>("2");

    const sizes = ["sm", "md", "lg"] as const;
    const virtualItems = Array.from({ length: 1000 }, (_, i) => ({
      id: `${i}`,
      content: `Item ${i}`,
    }));

    return (
      <AuditPage title={t("audit:list_family_title")}>
        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map((size) => (
            <ComponentGroup key={size} label={t("audit:label_size_n", { size })}>
              <List size={size}>
                <ListItem>{t("audit:label_list")} 1</ListItem>
                <ListItem>{t("audit:label_list")} 2</ListItem>
                <ListItem>{t("audit:label_list")} 3</ListItem>
              </List>
            </ComponentGroup>
          ))}
        </ComparisonGrid>

        {/* List Variations */}
        <ComparisonGrid title={t("audit:label_list_standard")}>
          <ComponentGroup label={t("audit:label_list_with_icons")}>
            <List>
              <ListItem iconName="CheckIcon">{t("audit:label_list")} 1</ListItem>
              <ListItem iconName="CheckIcon">{t("audit:label_list")} 2</ListItem>
              <ListItem iconName="CheckIcon">{t("audit:label_list")} 3</ListItem>
            </List>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_list_interactive")}>
            <List hoverable>
              <ListItem 
                selected={selectedId === "1"} 
                onClick={() => setSelectedId("1")}
              >
                {t("audit:label_list")} 1 (Click to Select)
              </ListItem>
              <ListItem 
                selected={selectedId === "2"} 
                onClick={() => setSelectedId("2")}
              >
                {t("audit:label_list")} 2 (Click to Select)
              </ListItem>
              <ListItem 
                selected={selectedId === "3"} 
                onClick={() => setSelectedId("3")}
              >
                {t("audit:label_list")} 3 (Click to Select)
              </ListItem>
            </List>
          </ComponentGroup>
          <ComponentGroup label="Bordered List">
            <List bordered>
              <ListItem>{t("audit:label_list")} 1</ListItem>
              <ListItem>{t("audit:label_list")} 2</ListItem>
              <ListItem>{t("audit:label_list")} 3</ListItem>
            </List>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Specialized Lists */}
        <ComparisonGrid title={t("audit:specialized_lists")}>
          <ComponentGroup label={t("audit:label_sortable_list")}>
            <Box style={{ width: "100%", maxWidth: "400px" }}>
              <SortableList onSortEnd={handleSortEnd}>
                {sortableItems.map((item, index) => (
                  <SortableList.Item key={item.id} index={index}>
                    <Stack direction="row" align="center" gap="sm">
                      <SortableList.DragHandle />
                      <Text>{item.content}</Text>
                    </Stack>
                  </SortableList.Item>
                ))}
              </SortableList>
            </Box>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_virtual_list")}>
            <Box style={{ height: "200px", width: "100%", maxWidth: "400px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)", overflow: "hidden" }}>
              <VirtualList
                items={virtualItems}
                itemHeight={40}
                height={200}
                renderItem={(item) => (
                  <Box px="md" style={{ display: "flex", alignItems: "center", height: "100%", borderBottom: "1px solid var(--wim-color-border-subtle)" }}>
                    <Text size="sm">{item.content}</Text>
                  </Box>
                )}
              />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Description List */}
        <ComparisonGrid title={t("audit:label_description_list")}>
          <ComponentGroup label="Horizontal (Default)">
            <DescriptionList layout="horizontal" bordered>
              <DescriptionListItem>
                <DescriptionListTerm>Label 1</DescriptionListTerm>
                <DescriptionListDetails>Value 1</DescriptionListDetails>
              </DescriptionListItem>
              <DescriptionListItem>
                <DescriptionListTerm>Label 2</DescriptionListTerm>
                <DescriptionListDetails>Value 2</DescriptionListDetails>
              </DescriptionListItem>
            </DescriptionList>
          </ComponentGroup>
          <ComponentGroup label="Vertical">
            <DescriptionList layout="vertical">
              <DescriptionListItem>
                <DescriptionListTerm>Label 1</DescriptionListTerm>
                <DescriptionListDetails>Value 1</DescriptionListDetails>
              </DescriptionListItem>
              <DescriptionListItem>
                <DescriptionListTerm>Label 2</DescriptionListTerm>
                <DescriptionListDetails>Value 2</DescriptionListDetails>
              </DescriptionListItem>
            </DescriptionList>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <ComponentGroup label="List (Full Width)">
            <List fullWidth bordered>
              <ListItem>{t("audit:label_list")} 1</ListItem>
              <ListItem>{t("audit:label_list")} 2</ListItem>
            </List>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
