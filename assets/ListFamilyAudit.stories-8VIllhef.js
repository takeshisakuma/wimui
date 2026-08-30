"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ct as c,St as l,nt as u,t as d,wt as f,xt as p}from"./src-CV0le6yM.js";import{t as m}from"./Box-BVB_9vOB.js";import{t as h}from"./Stack-z584y6QE.js";import{t as g}from"./Text-CLDfz7UT.js";import{t as _}from"./VirtualList-D47O7rfG.js";import{n as v,t as y}from"./List-h25x1z7b.js";import{t as b}from"./SortableList-DUR0Dlbs.js";import{i as x,n as S,r as C,t as w}from"./AuditUtils-CDbRpqsv.js";var T,E,D,O,k;e((()=>{T=t(n(),1),o(),i(),d(),E=a(),x(),D={title:`Audit/ListFamily`,parameters:{layout:`fullscreen`}},O={render:()=>{let{t:e}=r([...s,`audit`]),[t,n]=T.useState([{id:`1`,content:e(`audit:list_item_n`,{n:1})},{id:`2`,content:e(`audit:list_item_n`,{n:2})},{id:`3`,content:e(`audit:list_item_n`,{n:3})}]),i=(e,r)=>{let i=[...t],[a]=i.splice(e,1);i.splice(r,0,a),n(i)},[a,o]=T.useState(`2`),d=[`sm`,`md`,`lg`],x=Array.from({length:1e3},(e,t)=>({id:`${t}`,content:`Item ${t}`}));return(0,E.jsxs)(w,{title:e(`audit:list_family_title`),children:[(0,E.jsx)(S,{title:e(`audit:size_comparison`),children:d.map(t=>(0,E.jsx)(C,{label:e(`audit:label_size_n`,{size:t}),children:(0,E.jsxs)(y,{size:t,children:[(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 1`]}),(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 2`]}),(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 3`]})]})},t))}),(0,E.jsxs)(S,{title:e(`audit:label_list_standard`),children:[(0,E.jsx)(C,{label:e(`audit:label_list_with_icons`),children:(0,E.jsxs)(y,{children:[(0,E.jsxs)(v,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 1`]}),(0,E.jsxs)(v,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 2`]}),(0,E.jsxs)(v,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 3`]})]})}),(0,E.jsx)(C,{label:e(`audit:label_list_interactive`),children:(0,E.jsxs)(y,{hoverable:!0,children:[(0,E.jsxs)(v,{selected:a===`1`,onClick:()=>o(`1`),children:[e(`audit:label_list`),` 1 (Click to Select)`]}),(0,E.jsxs)(v,{selected:a===`2`,onClick:()=>o(`2`),children:[e(`audit:label_list`),` 2 (Click to Select)`]}),(0,E.jsxs)(v,{selected:a===`3`,onClick:()=>o(`3`),children:[e(`audit:label_list`),` 3 (Click to Select)`]})]})}),(0,E.jsx)(C,{label:e(`audit:list_bordered`),children:(0,E.jsxs)(y,{bordered:!0,children:[(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 1`]}),(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 2`]}),(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 3`]})]})})]}),(0,E.jsxs)(S,{title:e(`audit:specialized_lists`),children:[(0,E.jsx)(C,{label:e(`audit:label_sortable_list`),children:(0,E.jsx)(m,{style:{width:`100%`,maxWidth:`400px`},children:(0,E.jsx)(b,{onSortEnd:i,children:t.map((e,t)=>(0,E.jsx)(b.Item,{index:t,children:(0,E.jsxs)(h,{direction:`row`,align:`center`,gap:`sm`,children:[(0,E.jsx)(b.DragHandle,{}),(0,E.jsx)(g,{children:e.content})]})},e.id))})})}),(0,E.jsx)(C,{label:e(`audit:label_virtual_list`),children:(0,E.jsx)(m,{style:{height:`200px`,width:`100%`,maxWidth:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:(0,E.jsx)(_,{items:x,itemHeight:40,height:200,renderItem:e=>(0,E.jsx)(m,{px:`md`,style:{display:`flex`,alignItems:`center`,height:`100%`,borderBottom:`1px solid var(--wim-color-border-secondary)`},children:(0,E.jsx)(g,{size:`sm`,children:e.content})})})})})]}),(0,E.jsxs)(S,{title:e(`audit:label_description_list`),children:[(0,E.jsx)(C,{label:e(`audit:list_horizontal_default`),children:(0,E.jsxs)(p,{layout:`horizontal`,bordered:!0,children:[(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:`Label 1`}),(0,E.jsx)(l,{children:`Value 1`})]}),(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:`Label 2`}),(0,E.jsx)(l,{children:`Value 2`})]})]})}),(0,E.jsx)(C,{label:e(`common.vertical`),children:(0,E.jsxs)(p,{layout:`vertical`,children:[(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:`Label 1`}),(0,E.jsx)(l,{children:`Value 1`})]}),(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:`Label 2`}),(0,E.jsx)(l,{children:`Value 2`})]})]})})]}),(0,E.jsx)(S,{title:e(`audit:label_comment`),children:(0,E.jsx)(C,{label:e(`audit:label_comment_thread`),align:`stretch`,children:(0,E.jsxs)(u,{id:`a1`,author:{name:`Ngozi Okonkwo-Whitfield`,initials:`NO`},timestamp:`5h`,onReply:()=>{},replies:[(0,E.jsxs)(u,{id:`a2`,author:{name:`Bruno Salgado`,initials:`BS`},timestamp:`4h`,onReply:()=>{},replies:[(0,E.jsxs)(u,{id:`a3`,author:{name:`Mei Tanaka`,initials:`MT`},timestamp:`2h`,edited:!0,children:[e(`audit:label_comment`),` 3`]},`a3`)],children:[e(`audit:label_comment`),` 2`]},`a2`)],children:[e(`audit:label_comment`),` 1`]})})}),(0,E.jsx)(S,{title:e(`audit:fluid_width_check`),children:(0,E.jsx)(C,{label:e(`audit:list_full_width`),children:(0,E.jsxs)(y,{fullWidth:!0,bordered:!0,children:[(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 1`]}),(0,E.jsxs)(v,{children:[e(`audit:label_list`),` 2`]})]})})})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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

        {/* Comment: 入れ子の深さが字下げと縦線で読めるか */}
        <ComparisonGrid title={t("audit:label_comment")}>
          <ComponentGroup label={t("audit:label_comment_thread")} align="stretch">
            <Comment id="a1" author={{
            name: "Ngozi Okonkwo-Whitfield",
            initials: "NO"
          }} timestamp="5h" onReply={() => {}} replies={[<Comment key="a2" id="a2" author={{
            name: "Bruno Salgado",
            initials: "BS"
          }} timestamp="4h" onReply={() => {}} replies={[<Comment key="a3" id="a3" author={{
            name: "Mei Tanaka",
            initials: "MT"
          }} timestamp="2h" edited>
                      {t("audit:label_comment")} 3
                    </Comment>]}>
                  {t("audit:label_comment")} 2
                </Comment>]}>
              {t("audit:label_comment")} 1
            </Comment>
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
}`,...O.parameters?.docs?.source}}},k=[`Overview`]}))();export{O as Overview,k as __namedExportsOrder,D as default};