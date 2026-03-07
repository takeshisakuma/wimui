const fs = require('fs');

let content = fs.readFileSync('stories/DataGrid/DataGrid.stories.tsx', 'utf8');

if (!content.includes('useTranslation')) {
    content = content.replace(
        'import { Icon } from "@/components/Icon/Icon";',
        'import { Icon } from "@/components/Icon/Icon";\nimport { useTranslation } from "react-i18next";'
    );
}

const helperCode = `
const useDataGridTranslations = () => {
  const { t } = useTranslation(['docs', 'common', 'components']);
  const tColumns = basicColumns.map(c => ({
    ...c,
    header: typeof c.header === 'string' ? t(\`story_datagrid_col_\${c.key}\`) : c.header,
    render: c.key === 'status' ? ((value: any) => {
      const translatedValue = value === "Active" ? t('story_datagrid_status_active') : value === "Inactive" ? t('story_datagrid_status_inactive') : t('story_datagrid_status_pending');
      return (
        <Badge
          content={translatedValue}
          size="small"
          color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"}
        />
      );
    }) : c.render
  }));
  const tSampleData = sampleData; // data stays as is
  return { t, tColumns, tSampleData };
};
`;

if (!content.includes('useDataGridTranslations')) {
    content = content.replace(
        /\];\r?\n\r?\nexport const Default: Story = \{/,
        (match) => '];\n' + helperCode + '\nexport const Default: Story = {'
    );
}


function convertArgsToRender(name, argsContent) {
  let props = argsContent;
  let emptyMsg = "";
  if (props.includes('emptyMessage: "No users found",')) {
     props = props.replace('emptyMessage: "No users found",', '');
     emptyMsg = ` emptyMessage={t('story_datagrid_empty')}`;
  }
  
  if (name === "WithActions" || name === "WithFixedColumn") {
    return null; // Handle manually
  }

  // extract specific props if needed or just use {...args}
  const isMany = props.includes('rows: manyRows');
  return `export const ${name}: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = ${isMany ? 'manyRows' : 'tSampleData'};
    return <DataGrid {...args} columns={tColumns} rows={rows}${emptyMsg} />;
  },
  args: {
${props.split('\\n').filter(l => !l.includes('columns:') && !l.includes('rows:')).join('\\n')}
  },
};`;
}

// Simple export const XYZ = { args: { ... } };
const simpleStoryRegex = /export const ([A-Z][a-zA-Z0-9_]+): Story = \{\s*args:\s*\{([^}]*)\},\s*\};/g;

content = content.replace(simpleStoryRegex, (match, name, argsContent) => {
    const replacement = convertArgsToRender(name, argsContent);
    return replacement ? replacement : match;
});

// Render stories
content = content.replace(/export const WithSelection: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)return \([\s\S]*?<DataGrid([\s\S]*?)\/>([\s\S]*?)\},?\s*\};/, (match, setup, dgProps, end) => {
  return `export const WithSelection: Story = {
  render: () => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return (
      <div>
        <p style={{ marginBottom: "16px" }}>
          {t('story_datagrid_selected')}{selectedRowKeys.join(", ")}
        </p>
        <DataGrid
          columns={tColumns}
          rows={tSampleData}
          selection
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={setSelectedRowKeys}
          bordered
        />
      </div>
    );
  },
};`;
});

content = content.replace(/export const WithSorting: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)return \([\s\S]*?<DataGrid([\s\S]*?)\/>([\s\S]*?)\},?\s*\};/, (match, setup, dgProps, end) => {
  return `export const WithSorting: Story = {
  render: () => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none",
    });
    const [data, setData] = React.useState(sampleData);

    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({ key, direction });

      if (direction === "none") {
        setData(sampleData);
      } else {
        const sortedData = [...data].sort((a, b) => {
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };

    return (
      <DataGrid
        columns={tColumns}
        rows={data}
        sortConfig={sortConfig}
        onSort={handleSort}
        bordered
      />
    );
  },
};`;
});

content = content.replace(/export const WithPagination: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)return \([\s\S]*?<DataGrid([\s\S]*?)\/>([\s\S]*?)\},?\s*\};/, (match, setup, dgProps, end) => {
  return `export const WithPagination: Story = {
  render: () => {
    const { t, tColumns } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);

    return (
      <DataGrid
        columns={tColumns}
        rows={currentData}
        pagination={{
          total: manyRows.length,
          pageSize,
          current: currentPage,
          onPageChange: setCurrentPage,
        }}
        bordered
      />
    );
  },
};`;
});

content = content.replace(/export const FullFeatured: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)return \([\s\S]*?<DataGrid([\s\S]*?)\/>([\s\S]*?)\},?\s*\};/, (match, setup, dgProps, end) => {
  return `export const FullFeatured: Story = {
  render: () => {
    const { t, tColumns } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none",
    });
    const [data, setData] = React.useState(manyRows);

    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({ key, direction });

      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...data].sort((a, b) => {
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };

    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <DataGrid
          columns={tColumns}
          rows={currentData}
          selection
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={setSelectedRowKeys}
          sortConfig={sortConfig}
          onSort={handleSort}
          pagination={{
            total: data.length,
            pageSize,
            current: currentPage,
            onPageChange: setCurrentPage,
          }}
          striped
          hoverable
          bordered
        />
      </div>
    );
  },
};`;
});

fs.writeFileSync('stories/DataGrid/DataGrid.stories.tsx', content);
