"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Box-BNJo1pMu.js";import{n as u,t as d}from"./Stack-CrCPoxQ1.js";import{n as f,t as p}from"./Text-1X1ZsZfu.js";import{n as m,t as h}from"./VirtualList-DY9Vj3FY.js";import{a as g,i as _,n as v,r as y,t as b}from"./DescriptionList-Q5nLooV9.js";import{n as x,r as S,t as C}from"./List-AJNL96pU.js";import{n as w,t as T}from"./SortableList-BFFKYFRf.js";import{i as E,n as D,r as O,t as k}from"./SwipeAction-D20KTVhr.js";import{n as A,t as j}from"./Comment-CTg2EZZu.js";import{i as M,n as N,r as P,t as F}from"./AuditUtils-DQd41XyN.js";var I,L,R,z,B;function V(){return(V=t((()=>{I=e(n(),1),i(),a(),A(),S(),m(),w(),D(),E(),g(),u(),f(),c(),L=s(),M(),R={title:`Audit/ListFamily`,parameters:{layout:`fullscreen`}},z={render:()=>{let{t:e}=r([...o,`audit`]),[t,n]=I.useState([{id:`1`,content:e(`audit:list_item_n`,{n:1})},{id:`2`,content:e(`audit:list_item_n`,{n:2})},{id:`3`,content:e(`audit:list_item_n`,{n:3})}]),i=(e,r)=>{let i=[...t],[a]=i.splice(e,1);i.splice(r,0,a),n(i)},[a,s]=I.useState(`2`),c=[`sm`,`md`,`lg`],u=Array.from({length:1e3},(e,t)=>({id:`${t}`,content:`Item ${t}`}));return(0,L.jsxs)(F,{title:e(`audit:list_family_title`),children:[(0,L.jsx)(N,{title:e(`audit:size_comparison`),children:c.map(t=>(0,L.jsx)(P,{label:e(`audit:label_size_n`,{size:t}),children:(0,L.jsxs)(C,{size:t,children:[(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 1`]}),(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 2`]}),(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 3`]})]})},t))}),(0,L.jsxs)(N,{title:e(`audit:label_list_standard`),children:[(0,L.jsx)(P,{label:e(`audit:label_list_with_icons`),children:(0,L.jsxs)(C,{children:[(0,L.jsxs)(x,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 1`]}),(0,L.jsxs)(x,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 2`]}),(0,L.jsxs)(x,{iconName:`CheckIcon`,children:[e(`audit:label_list`),` 3`]})]})}),(0,L.jsx)(P,{label:e(`audit:label_list_interactive`),children:(0,L.jsxs)(C,{hoverable:!0,children:[(0,L.jsxs)(x,{selected:a===`1`,onClick:()=>s(`1`),children:[e(`audit:label_list`),` 1 (Click to Select)`]}),(0,L.jsxs)(x,{selected:a===`2`,onClick:()=>s(`2`),children:[e(`audit:label_list`),` 2 (Click to Select)`]}),(0,L.jsxs)(x,{selected:a===`3`,onClick:()=>s(`3`),children:[e(`audit:label_list`),` 3 (Click to Select)`]})]})}),(0,L.jsx)(P,{label:e(`audit:list_bordered`),children:(0,L.jsxs)(C,{bordered:!0,children:[(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 1`]}),(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 2`]}),(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 3`]})]})})]}),(0,L.jsxs)(N,{title:e(`audit:specialized_lists`),children:[(0,L.jsx)(P,{label:e(`audit:label_sortable_list`),children:(0,L.jsx)(l,{style:{width:`100%`,maxWidth:`400px`},children:(0,L.jsx)(T,{onSortEnd:i,children:t.map((e,t)=>(0,L.jsx)(T.Item,{index:t,children:(0,L.jsxs)(d,{direction:`row`,align:`center`,gap:`sm`,children:[(0,L.jsx)(T.DragHandle,{}),(0,L.jsx)(p,{children:e.content})]})},e.id))})})}),(0,L.jsx)(P,{label:e(`audit:label_virtual_list`),children:(0,L.jsx)(l,{style:{height:`200px`,width:`100%`,maxWidth:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`},children:(0,L.jsx)(h,{items:u,itemHeight:40,height:200,renderItem:e=>(0,L.jsx)(l,{px:`md`,style:{display:`flex`,alignItems:`center`,height:`100%`,borderBottom:`1px solid var(--wim-color-border-secondary)`},children:(0,L.jsx)(p,{size:`sm`,children:e.content})})})})}),(0,L.jsx)(P,{label:e(`audit:label_swipeable_list`),children:(0,L.jsx)(l,{style:{width:`100%`,maxWidth:`400px`},children:(0,L.jsx)(O,{children:t.map(t=>(0,L.jsx)(k,{leftActions:[{icon:`CheckIcon`,label:e(`common.done`),onClick:()=>{},intent:`success`}],rightActions:[{icon:`TrashIcon`,label:e(`action.delete`),onClick:()=>{},intent:`danger`}],children:(0,L.jsx)(l,{px:`md`,py:`md`,children:(0,L.jsx)(p,{children:t.content})})},t.id))})})})]}),(0,L.jsxs)(N,{title:e(`audit:label_description_list`),children:[(0,L.jsx)(P,{label:e(`audit:list_horizontal_default`),children:(0,L.jsxs)(b,{layout:`horizontal`,bordered:!0,children:[(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{children:`Label 1`}),(0,L.jsx)(v,{children:`Value 1`})]}),(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{children:`Label 2`}),(0,L.jsx)(v,{children:`Value 2`})]})]})}),(0,L.jsx)(P,{label:e(`common.vertical`),children:(0,L.jsxs)(b,{layout:`vertical`,children:[(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{children:`Label 1`}),(0,L.jsx)(v,{children:`Value 1`})]}),(0,L.jsxs)(y,{children:[(0,L.jsx)(_,{children:`Label 2`}),(0,L.jsx)(v,{children:`Value 2`})]})]})})]}),(0,L.jsx)(N,{title:e(`audit:label_comment`),children:(0,L.jsx)(P,{label:e(`audit:label_comment_thread`),align:`stretch`,children:(0,L.jsxs)(j,{id:`a1`,author:{name:`Ngozi Okonkwo-Whitfield`,initials:`NO`},timestamp:`5h`,onReply:()=>{},replies:[(0,L.jsxs)(j,{id:`a2`,author:{name:`Bruno Salgado`,initials:`BS`},timestamp:`4h`,onReply:()=>{},replies:[(0,L.jsxs)(j,{id:`a3`,author:{name:`Mei Tanaka`,initials:`MT`},timestamp:`2h`,edited:!0,children:[e(`audit:label_comment`),` 3`]},`a3`)],children:[e(`audit:label_comment`),` 2`]},`a2`)],children:[e(`audit:label_comment`),` 1`]})})}),(0,L.jsx)(N,{title:e(`audit:fluid_width_check`),children:(0,L.jsx)(P,{label:e(`audit:list_full_width`),children:(0,L.jsxs)(C,{fullWidth:!0,bordered:!0,children:[(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 1`]}),(0,L.jsxs)(x,{children:[e(`audit:label_list`),` 2`]})]})})})]})}},B=[`Overview`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
          <ComponentGroup label={t("audit:label_swipeable_list")}>
            {/* 開いている行は常に 1 つ。キーボードで操作にフォーカスしても開く（T275） */}
            <Box style={{
            width: "100%",
            maxWidth: "400px"
          }}>
              <SwipeableList>
                {sortableItems.map(item => <SwipeAction key={item.id} leftActions={[{
                icon: "CheckIcon",
                label: t("common.done"),
                onClick: () => {},
                intent: "success"
              }]} rightActions={[{
                icon: "TrashIcon",
                label: t("action.delete"),
                onClick: () => {},
                intent: "danger"
              }]}>
                    <Box px="md" py="md">
                      <Text>{item.content}</Text>
                    </Box>
                  </SwipeAction>)}
              </SwipeableList>
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Overview,B as __namedExportsOrder,R as default};