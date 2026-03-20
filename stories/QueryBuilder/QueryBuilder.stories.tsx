import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { QueryBuilder, type QueryField, type QueryGroup } from "../../src/components/QueryBuilder/QueryBuilder";
import { useTranslation } from "react-i18next";

const fields: QueryField[] = [
  { name: "firstName", label: "query_builder.field_first_name", type: "string" },
  { name: "lastName", label: "query_builder.field_last_name", type: "string" },
  { name: "age", label: "query_builder.field_age", type: "number" },
  { name: "birthday", label: "query_builder.field_birthday", type: "date" },
  { name: "isActive", label: "query_builder.field_is_active", type: "boolean" },
];

const meta: Meta<typeof QueryBuilder> = {
  title: "Components/Data Structures/QueryBuilder",
  component: QueryBuilder,
  tags: [],
  args: {
    fields,
  },
};

export default meta;
type Story = StoryObj<typeof QueryBuilder>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation("components");
    const [query, setQuery] = useState<QueryGroup | undefined>(args.query);
    return (
      <div style={{ padding: "20px" }}>
        <QueryBuilder {...args} query={query} onChange={setQuery} />
        <div style={{ marginTop: "20px" }}>
          <h4>{t("query_builder.generated_json")}:</h4>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "4px", overflow: "auto" }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const Predefined: Story = {
  args: {
    fields,
    defaultQuery: {
      id: "root",
      combinator: "and",
      not: false,
      rules: [
        {
          id: "rule1",
          field: "firstName",
          operator: "=",
          value: "John",
        },
        {
          id: "group1",
          combinator: "or",
          not: false,
          rules: [
            {
              id: "rule2",
              field: "age",
              operator: ">",
              value: 18,
            },
            {
              id: "rule3",
              field: "isActive",
              operator: "=",
              value: true,
            },
          ],
        },
      ],
    },
  },
  render: (args) => {
    const { t } = useTranslation("components");
    const [query, setQuery] = useState<QueryGroup | undefined>(args.defaultQuery as any);
    return (
      <div style={{ padding: "20px" }}>
        <QueryBuilder {...args} query={query} onChange={setQuery} />
        <div style={{ marginTop: "20px" }}>
          <h4>{t("query_builder.generated_json")}:</h4>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "4px", overflow: "auto" }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
