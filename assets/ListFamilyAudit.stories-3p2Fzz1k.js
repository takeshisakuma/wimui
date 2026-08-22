"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{_t as c,gt as l,ht as u,t as d,vt as f}from"./src-Ssuy8lr7.js";import{t as p}from"./Box--bAE-pUN.js";import{t as m}from"./Stack-CC3QEopK.js";import{t as h}from"./Text-DzblcqZm.js";import{t as g}from"./VirtualList-0rAen6f1.js";import{n as _,t as v}from"./List-CxW5MlWe.js";import{t as y}from"./SortableList-C5RtT_eE.js";import{i as b,n as x,r as S,t as C}from"./AuditUtils-Cal9MsZq.js";var w,T,E,D,O;e((()=>{w=t(n(),1),o(),i(),d(),T=a(),b(),E={title:`Audit/ListFamily`,parameters:{layout:`fullscreen`}},D={render:()=>{let{t:e}=r([...s,`audit`]),[t,n]=w.useState([{id:`1`,content:e(`audit:list_item_n`,{n:1})},{id:`2`,content:e(`audit:list_item_n`,{n:2})},{id:`3`,content:e(`audit:list_item_n`,{n:3})}]),i=(e,r)=>{let i=[...t],[a]=i.splice(e,1);i.splice(r,0,a),n(i)},[a,o]=w.useState(`2`),d=[`sm`,`md`,`lg`],b=Array.from({length:1e3},(e,t)=>({id:`${t}`,content:`Item ${t}`}));return(0,T.jsxs)(C,{title:e(`audit:list_family_title`),children:[(0,T.jsx)(x,{title:e(`audit:size_comparison`),children:d.map(t=>(0,T.jsx)(S,{label:e(`audit:label_size_n`,{size:t}),children:(0,T.jsxs)(v,{size:t,children:[(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 1`]}),(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 2`]}),(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 3`]})]})},t))}),(0,T.jsxs)(x,{title:e(`audit:label_list_standard`),children:[(0,T.jsx)(S,{label:e(`audit:label_list_with_icons`),children:(0,T.jsxs)(v,{children:[(0,T.jsxs)(_,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 1`]}),(0,T.jsxs)(_,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 2`]}),(0,T.jsxs)(_,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 3`]})]})}),(0,T.jsx)(S,{label:e(`audit:label_list_interactive`),children:(0,T.jsxs)(v,{hoverable:!0,children:[(0,T.jsxs)(_,{selected:a===`1`,onClick:()=>o(`1`),children:[e(`audit:label_list`),` 1 (Click to Select)`]}),(0,T.jsxs)(_,{selected:a===`2`,onClick:()=>o(`2`),children:[e(`audit:label_list`),` 2 (Click to Select)`]}),(0,T.jsxs)(_,{selected:a===`3`,onClick:()=>o(`3`),children:[e(`audit:label_list`),` 3 (Click to Select)`]})]})}),(0,T.jsx)(S,{label:e(`audit:list_bordered`),children:(0,T.jsxs)(v,{bordered:!0,children:[(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 1`]}),(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 2`]}),(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 3`]})]})})]}),(0,T.jsxs)(x,{title:e(`audit:specialized_lists`),children:[(0,T.jsx)(S,{label:e(`audit:label_sortable_list`),children:(0,T.jsx)(p,{style:{width:`100%`,maxWidth:`400px`},children:(0,T.jsx)(y,{onSortEnd:i,children:t.map((e,t)=>(0,T.jsx)(y.Item,{index:t,children:(0,T.jsxs)(m,{direction:`row`,align:`center`,gap:`sm`,children:[(0,T.jsx)(y.DragHandle,{}),(0,T.jsx)(h,{children:e.content})]})},e.id))})})}),(0,T.jsx)(S,{label:e(`audit:label_virtual_list`),children:(0,T.jsx)(p,{style:{height:`200px`,width:`100%`,maxWidth:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:(0,T.jsx)(g,{items:b,itemHeight:40,height:200,renderItem:e=>(0,T.jsx)(p,{px:`md`,style:{display:`flex`,alignItems:`center`,height:`100%`,borderBottom:`1px solid var(--wim-color-border-secondary)`},children:(0,T.jsx)(h,{size:`sm`,children:e.content})})})})})]}),(0,T.jsxs)(x,{title:e(`audit:label_description_list`),children:[(0,T.jsx)(S,{label:e(`audit:list_horizontal_default`),children:(0,T.jsxs)(u,{layout:`horizontal`,bordered:!0,children:[(0,T.jsxs)(c,{children:[(0,T.jsx)(f,{children:`Label 1`}),(0,T.jsx)(l,{children:`Value 1`})]}),(0,T.jsxs)(c,{children:[(0,T.jsx)(f,{children:`Label 2`}),(0,T.jsx)(l,{children:`Value 2`})]})]})}),(0,T.jsx)(S,{label:e(`common.vertical`),children:(0,T.jsxs)(u,{layout:`vertical`,children:[(0,T.jsxs)(c,{children:[(0,T.jsx)(f,{children:`Label 1`}),(0,T.jsx)(l,{children:`Value 1`})]}),(0,T.jsxs)(c,{children:[(0,T.jsx)(f,{children:`Label 2`}),(0,T.jsx)(l,{children:`Value 2`})]})]})})]}),(0,T.jsx)(x,{title:e(`audit:fluid_width_check`),children:(0,T.jsx)(S,{label:e(`audit:list_full_width`),children:(0,T.jsxs)(v,{fullWidth:!0,bordered:!0,children:[(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 1`]}),(0,T.jsxs)(_,{children:[e(`audit:label_list`),` 2`]})]})})})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const [sortableItems, setSortableItems] = React.useState([{
      id: "1",
      content: t("audit:list_item_n", {
        n: 1
      })
    }, {
      id: "2",
      content: t("audit:list_item_n", {
        n: 2
      })
    }, {
      id: "3",
      content: t("audit:list_item_n", {
        n: 3
      })
    }]);
    const handleSortEnd = (oldIndex: number, newIndex: number) => {
      const newItems = [...sortableItems];
      const [removed] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, removed);
      setSortableItems(newItems);
    };
    const [selectedId, setSelectedId] = React.useState<string | null>("2");
    const sizes = ["sm", "md", "lg"] as const;
    const virtualItems = Array.from({
      length: 1000
    }, (_, i) => ({
      id: \`\${i}\`,
      content: \`Item \${i}\`
    }));
    return <AuditPage title={t("audit:list_family_title")}>
        {/* Size Comparison */}
        <ComparisonGrid title={t("audit:size_comparison")}>
          {sizes.map(size => <ComponentGroup key={size} label={t("audit:label_size_n", {
          size
        })}>
              <List size={size}>
                <ListItem>{t("audit:label_list")} 1</ListItem>
                <ListItem>{t("audit:label_list")} 2</ListItem>
                <ListItem>{t("audit:label_list")} 3</ListItem>
              </List>
            </ComponentGroup>)}
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
              <ListItem selected={selectedId === "1"} onClick={() => setSelectedId("1")}>
                {t("audit:label_list")} 1 (Click to Select)
              </ListItem>
              <ListItem selected={selectedId === "2"} onClick={() => setSelectedId("2")}>
                {t("audit:label_list")} 2 (Click to Select)
              </ListItem>
              <ListItem selected={selectedId === "3"} onClick={() => setSelectedId("3")}>
                {t("audit:label_list")} 3 (Click to Select)
              </ListItem>
            </List>
          </ComponentGroup>
          <ComponentGroup label={t("audit:list_bordered")}>
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
            <Box style={{
            width: "100%",
            maxWidth: "400px"
          }}>
              <SortableList onSortEnd={handleSortEnd}>
                {sortableItems.map((item, index) => <SortableList.Item key={item.id} index={index}>
                    <Stack direction="row" align="center" gap="sm">
                      <SortableList.DragHandle />
                      <Text>{item.content}</Text>
                    </Stack>
                  </SortableList.Item>)}
              </SortableList>
            </Box>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_virtual_list")}>
            <Box style={{
            height: "200px",
            width: "100%",
            maxWidth: "400px",
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden"
          }}>
              <VirtualList items={virtualItems} itemHeight={40} height={200} renderItem={item => <Box px="md" style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              borderBottom: "1px solid var(--wim-color-border-secondary)"
            }}>
                    <Text size="sm">{item.content}</Text>
                  </Box>} />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Description List */}
        <ComparisonGrid title={t("audit:label_description_list")}>
          <ComponentGroup label={t("audit:list_horizontal_default")}>
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
          <ComponentGroup label={t("common.vertical")}>
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
          <ComponentGroup label={t("audit:list_full_width")}>
            <List fullWidth bordered>
              <ListItem>{t("audit:label_list")} 1</ListItem>
              <ListItem>{t("audit:label_list")} 2</ListItem>
            </List>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Overview`]}))();export{D as Overview,O as __namedExportsOrder,E as default};