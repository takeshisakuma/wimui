const fs = require('fs');

const jpPath = 'public/locales/ja/docs.json';
const enPath = 'public/locales/en/docs.json';

const jpData = JSON.parse(fs.readFileSync(jpPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const keys = {
  'story_datagrid_col_id': { en: 'ID', ja: 'ID' },
  'story_datagrid_col_name': { en: 'Name', ja: '名前' },
  'story_datagrid_col_email': { en: 'Email', ja: 'メールアドレス' },
  'story_datagrid_col_role': { en: 'Role', ja: '権限' },
  'story_datagrid_col_status': { en: 'Status', ja: 'ステータス' },
  'story_datagrid_col_actions': { en: 'Actions', ja: 'アクション' },
  'story_datagrid_col_join_date': { en: 'Join Date', ja: '登録日' },
  'story_datagrid_empty': { en: 'No users found', ja: 'ユーザーが見つかりません' },
  'story_datagrid_selected': { en: 'Selected: ', ja: '選択済み: ' },
  'story_datagrid_status_active': { en: 'Active', ja: '有効' },
  'story_datagrid_status_inactive': { en: 'Inactive', ja: '無効' },
  'story_datagrid_status_pending': { en: 'Pending', ja: '保留' }
};

for (const [key, value] of Object.entries(keys)) {
  jpData[key] = value.ja;
  enData[key] = value.en;
}

fs.writeFileSync(jpPath, JSON.stringify(jpData, null, 2) + '\n');
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');

// We will update DataGrid.stories.tsx heavily to support translation hooks.
let content = fs.readFileSync('stories/DataGrid/DataGrid.stories.tsx', 'utf8');

if (!content.includes('useTranslation')) {
    content = content.replace(
        'import { Icon } from "@/components/Icon/Icon";',
        'import { Icon } from "@/components/Icon/Icon";\nimport { useTranslation } from "react-i18next";'
    );
}

// Convert sampleData to getSampleData()
if (!content.includes('getSampleData = (t:')) {
    content = content.replace(
        /const sampleData: User\[\] = \[([\s\S]*?)\];/,
        `const getSampleData = (t: any): User[] => [\n$1\n].map(user => ({\n  ...user,\n  status: user.status === "Active" ? t('story_datagrid_status_active') : user.status === "Inactive" ? t('story_datagrid_status_inactive') : t('story_datagrid_status_pending')\n})) as any[];`
    );
}

if (!content.includes('getManyRows = (t:')) {
    content = content.replace(
        /const manyRows: User\[\] = Array\.from\(\{ length: 50 \}\)\.map\(\(_, i\) => \(\{([\s\S]*?)\}\)\);/,
        `const getManyRows = (t: any): User[] => Array.from({ length: 50 }).map((_, i) => ({\n$1\n})).map(user => ({\n  ...user,\n  status: user.status === "Active" ? t('story_datagrid_status_active') : user.status === "Inactive" ? t('story_datagrid_status_inactive') : t('story_datagrid_status_pending')\n})) as any[];`
    );
}

if (!content.includes('getBasicColumns = (t:')) {
    content = content.replace(
        /const basicColumns = \[([\s\S]*?)\];/,
        `const getBasicColumns = (t: any) => [\n$1\n].map(col => ({\n  ...col,\n  header: typeof col.header === "string" ? \n    (col.key === "id" ? t('story_datagrid_col_id') : \n     col.key === "name" ? t('story_datagrid_col_name') : \n     col.key === "email" ? t('story_datagrid_col_email') : \n     col.key === "role" ? t('story_datagrid_col_role') : \n     col.key === "status" ? t('story_datagrid_col_status') : \n     col.key === "actions" ? t('story_datagrid_col_actions') : \n     col.header) : col.header\n}));`
    );
    // basicColumns badge render needs update
    content = content.replace(
        /value === "Active"[\s\S]*?\? "neutral"[\s\S]*?: "secondary"/,
        `value === t('story_datagrid_status_active') ? "primary" : value === t('story_datagrid_status_inactive') ? "neutral" : "secondary"`
    );
}

// Ensure all basicColumns replace works
// Render functions:
const renderWrapper = (storyName, argsStr = '', innerCode) => {
    return `export const ${storyName}: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const basicColumns = getBasicColumns(t);
    const sampleData = getSampleData(t);
    const manyRows = getManyRows(t);
    return ${innerCode};
  },
  args: { ${argsStr} }
};`;
};

// Default
content = content.replace(/export const Default: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('Default', 'bordered: true', '<DataGrid {...args} columns={basicColumns} rows={sampleData} />'));

// WithSelection
content = content.replace(/export const WithSelection: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)\},?\s*\};/, (match, innerProps) => {
  let inner = innerProps.replace('Selected: ', '{t("story_datagrid_selected")}');
  return `export const WithSelection: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const basicColumns = getBasicColumns(t);
    const sampleData = getSampleData(t);
    ${inner}
  }
};`;
});

// WithSorting
content = content.replace(/export const WithSorting: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)\},?\s*\};/, (match, innerProps) => {
  return `export const WithSorting: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const basicColumns = getBasicColumns(t);
    const sampleData = getSampleData(t);
    ${innerProps}
  }
};`;
});

// WithPagination
content = content.replace(/export const WithPagination: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)\},?\s*\};/, (match, innerProps) => {
  return `export const WithPagination: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const basicColumns = getBasicColumns(t);
    const manyRows = getManyRows(t);
    ${innerProps}
  }
};`;
});

// WithActions
content = content.replace(/export const WithActions: Story = \{[\s\S]*?args: \{([\s\S]*?)\} \};/, (match, argsContent) => {
    return `export const WithActions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const sampleData = getSampleData(t);
    const columns = [
      { key: "id", header: t("story_datagrid_col_id"), width: 55, fixed: true },
      { key: "name", header: t("story_datagrid_col_name"), width: 150, fixed: false },
      { key: "email", header: t("story_datagrid_col_email"), width: 200 },
      {
        key: "actions",
        header: t("story_datagrid_col_actions"),
        width: 100,
        render: (_: any, row: Record<string, any>) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              size="small"
              priority="tertiary"
              onClick={() => alert(\`Edit \${row.name}\`)}
            >
              <Icon name="EditIcon" size="small" />
            </Button>
            <Button
              size="small"
              priority="tertiary"
              role="destructive"
              onClick={() => alert(\`Delete \${row.name}\`)}
            >
              <Icon name="TrashIcon" size="small" />
            </Button>
          </div>
        ),
      },
    ];
    return <DataGrid {...args} columns={columns} rows={sampleData} />;
  },
  args: { bordered: true }
};`;
});

// Loading
content = content.replace(/export const Loading: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('Loading', 'loading: true, bordered: true', '<DataGrid {...args} columns={basicColumns} rows={sampleData} />'));

// Empty
content = content.replace(/export const Empty: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('Empty', 'bordered: true', '<DataGrid {...args} columns={basicColumns} rows={[]} emptyMessage={t("story_datagrid_empty")} />'));

// Striped
content = content.replace(/export const Striped: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('Striped', 'striped: true, bordered: true', '<DataGrid {...args} columns={basicColumns} rows={sampleData} />'));

// Bordered
content = content.replace(/export const Bordered: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('Bordered', 'bordered: true', '<DataGrid {...args} columns={basicColumns} rows={sampleData} />'));

// StickyHeader
content = content.replace(/export const StickyHeader: Story = \{[\s\S]*?args: \{[\s\S]*?\}[\s\S]*,?\};/, renderWrapper('StickyHeader', 'stickyHeader: true, bordered: true, maxHeight: "400px"', '<DataGrid {...args} columns={basicColumns} rows={manyRows} />'));

// FullFeatured
content = content.replace(/export const FullFeatured: Story = \{[\s\S]*?render: \(\) => \{([\s\S]*?)\},?\s*\};/, (match, innerProps) => {
  return `export const FullFeatured: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const basicColumns = getBasicColumns(t);
    const manyRows = getManyRows(t);
    ${innerProps}
  }
};`;
});

// WithFixedColumn
content = content.replace(/export const WithFixedColumn: Story = \{[\s\S]*?args: \{([\s\S]*?)\},[\s\S]*?decorators: \[([\s\S]*?)\][\s\S]*,?\};/, (match, argsContent, decorators) => {
    return `export const WithFixedColumn: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    const sampleData = getSampleData(t);
    const columns = [
      { key: "id", header: t("story_datagrid_col_id"), width: 55, fixed: true },
      { key: "name", header: t("story_datagrid_col_name"), width: 150, fixed: false },
      { key: "email", header: t("story_datagrid_col_email"), width: 200 },
      { key: "role", header: t("story_datagrid_col_role"), width: 100 },
      { key: "joinDate", header: t("story_datagrid_col_join_date"), width: 150 },
      {
        key: "status",
        header: t("story_datagrid_col_status"),
        width: 100,
        render: (value: any) => (
          <Badge
            content={value}
            size="small"
            color={
              value === t("story_datagrid_status_active")
                ? "primary"
                : value === t("story_datagrid_status_inactive")
                  ? "neutral"
                  : "secondary"
            }
          />
        ),
      },
    ];
    return <DataGrid {...args} columns={columns} rows={sampleData} />;
  },
  args: { selection: true, bordered: true },
  decorators: [ ${decorators} ]
};`;
});

fs.writeFileSync('stories/DataGrid/DataGrid.stories.tsx', content);

console.log('DataGrid Done');
