"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Badge-B1Em0jvH.js";import{n as d,t as f}from"./Checkbox-B9BICLMX.js";import{n as p,t as m}from"./IconButton-G7XB35FZ.js";import{n as h,t as g}from"./Table-C4bNyU3e.js";var _=n({Bordered:()=>T,Default:()=>C,FullWidth:()=>D,HiddenScrollbar:()=>N,Hoverable:()=>E,MobileCard:()=>P,RowSelection:()=>A,Sortable:()=>k,StickyHeader:()=>j,Striped:()=>w,SubtleScrollbar:()=>M,WithActions:()=>O,__namedExportsOrder:()=>F,default:()=>b}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{v=e(r(),1),a(),o(),l(),d(),p(),h(),y=c(),b={title:`Components/Data Structures/Table`,component:g,tags:[],argTypes:{striped:{control:`boolean`},bordered:{control:`boolean`},hoverable:{control:`boolean`},fullWidth:{control:`boolean`},stickyHeader:{control:`boolean`},scrollbar:{control:`select`,options:[`default`,`subtle`,`hidden`]},height:{control:`text`},maxHeight:{control:`text`}}},x=()=>{let{t:e}=i(s);return[{id:1,name:`Priya Nair`,email:`priya@example.com`,intent:e(`story.table_active`),role:e(`story.table_admin`)},{id:2,name:`Marcus Bell`,email:`marcus@example.com`,intent:e(`story.table_inactive`),role:e(`story.table_user`)},{id:3,name:`Yuki Tanaka`,email:`yuki@example.com`,intent:e(`story.table_active`),role:e(`story.table_editor`)},{id:4,name:`Sofia Rossi`,email:`sofia@example.com`,intent:e(`story.table_pending`),role:e(`story.table_user`)}]},S=()=>{let{t:e}=i(s);return Array.from({length:30}).map((t,n)=>({id:n+1,name:`${e(`story.table_user`)} ${n+1}`,email:`user${n+1}@example.com`,role:n%3==0?e(`story.table_admin`):e(`story.table_member`),intent:n%2==0?e(`story.table_active`):e(`story.table_inactive`)}))},C={render:function(e){let{t}=i(s),n=x();return(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{children:t(`story.table_email`)}),(0,y.jsx)(g.Head,{children:t(`story.table_role`)}),(0,y.jsx)(g.Head,{children:t(`story.table_status`)})]})}),(0,y.jsx)(g.Body,{children:n.map(e=>(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email}),(0,y.jsx)(g.Cell,{label:t(`story.table_role`),children:e.role}),(0,y.jsx)(g.Cell,{label:t(`story.table_status`),children:(0,y.jsx)(u,{content:e.intent,size:`sm`,color:e.intent===t(`story.table_active`)?`primary`:`neutral`})})]},e.id))})]})}},w={...C,args:{striped:!0}},T={...C,args:{bordered:!0}},E={...C,args:{hoverable:!0}},D={...C,args:{fullWidth:!0}},O={render:function(e){let{t}=i(s),n=x();return(0,y.jsxs)(g,{...e,fullWidth:!0,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{children:t(`story.table_email`)}),(0,y.jsx)(g.Head,{style:{width:`1%`,whiteSpace:`nowrap`},children:t(`story.table_actions`)})]})}),(0,y.jsx)(g.Body,{children:n.slice(0,2).map(e=>(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email}),(0,y.jsx)(g.Cell,{label:t(`story.table_actions`),children:(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`4px`,justifyContent:`flex-start`},children:[(0,y.jsx)(m,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),size:`sm`,variant:`ghost`}),(0,y.jsx)(m,{iconName:`TrashIcon`,"aria-label":t(`story.dropdown_delete`),size:`sm`,variant:`ghost`,intent:`danger`})]})})]},e.id))})]})}},k={render:function(e){let{t}=i(s),n=S(),[r,a]=v.useState({key:`id`,direction:`asc`}),[o,c]=v.useState(n),l=e=>{let t=`asc`;if(r.key===e&&(r.direction===`asc`?t=`desc`:r.direction===`desc`&&(t=`none`)),a({key:e,direction:t}),t===`none`)c(n);else{let r=[...n].sort((n,r)=>{let i=n[e],a=r[e];return String(i)<String(a)?t===`asc`?-1:1:String(i)>String(a)?t===`asc`?1:-1:0});c(r)}};return(0,y.jsxs)(g,{...e,fullWidth:!0,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{sortable:!0,sortDirection:r.key===`id`?r.direction:`none`,onSort:()=>l(`id`),children:t(`story.table_id`)}),(0,y.jsx)(g.Head,{sortable:!0,sortDirection:r.key===`name`?r.direction:`none`,onSort:()=>l(`name`),children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{sortable:!0,sortDirection:r.key===`email`?r.direction:`none`,onSort:()=>l(`email`),children:t(`story.table_email`)}),(0,y.jsx)(g.Head,{children:t(`story.table_role`)})]})}),(0,y.jsx)(g.Body,{children:o.slice(0,10).map(e=>(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Cell,{label:t(`story.table_id`),children:e.id}),(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email}),(0,y.jsx)(g.Cell,{label:t(`story.table_role`),children:e.role})]},e.id))})]})}},A={render:function(e){let{t}=i(s),n=S(),[r,a]=v.useState([]),o=r.length===5,c=r.length>0&&r.length<5,l=()=>{a(o?[]:[1,2,3,4,5])},u=e=>{r.includes(e)?a(r.filter(t=>t!==e)):a([...r,e])};return(0,y.jsxs)(g,{...e,fullWidth:!0,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{selection:!0,"aria-label":t(`story.table_select_all`),children:(0,y.jsx)(f,{checked:o,indeterminate:c,onChange:l,"aria-label":t(`story.table_select_all`)})}),(0,y.jsx)(g.Head,{children:t(`story.table_id`)}),(0,y.jsx)(g.Head,{children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{children:t(`story.table_email`)})]})}),(0,y.jsx)(g.Body,{children:n.slice(0,5).map(e=>(0,y.jsxs)(g.Row,{selected:r.includes(e.id),children:[(0,y.jsx)(g.Cell,{selection:!0,children:(0,y.jsx)(f,{checked:r.includes(e.id),onChange:()=>u(e.id),"aria-label":t(`story.table_select_row`)})}),(0,y.jsx)(g.Cell,{label:t(`story.table_id`),children:e.id}),(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email})]},e.id))})]})}},j={render:function(e){let{t}=i(s),n=S();return(0,y.jsxs)(g,{...e,stickyHeader:!0,fullWidth:!0,maxHeight:`300px`,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{children:t(`story.table_id`)}),(0,y.jsx)(g.Head,{children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{children:t(`story.table_email`)}),(0,y.jsx)(g.Head,{children:t(`story.table_role`)})]})}),(0,y.jsx)(g.Body,{children:n.map(e=>(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Cell,{label:t(`story.table_id`),children:e.id}),(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email}),(0,y.jsx)(g.Cell,{label:t(`story.table_role`),children:e.role})]},e.id))})]})}},M={...j,args:{scrollbar:`subtle`}},N={...j,args:{scrollbar:`hidden`}},P={render:function(e){let{t}=i(s),n=x();return(0,y.jsxs)(g,{...e,mobileCard:!0,fullWidth:!0,children:[(0,y.jsx)(g.Header,{children:(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Head,{children:t(`story.table_id`)}),(0,y.jsx)(g.Head,{children:t(`story.table_name`)}),(0,y.jsx)(g.Head,{children:t(`story.table_email`)}),(0,y.jsx)(g.Head,{children:t(`story.table_role`)}),(0,y.jsx)(g.Head,{children:t(`story.table_status`)})]})}),(0,y.jsx)(g.Body,{children:n.map(e=>(0,y.jsxs)(g.Row,{children:[(0,y.jsx)(g.Cell,{label:t(`story.table_id`),children:e.id}),(0,y.jsx)(g.Cell,{label:t(`story.table_name`),children:e.name}),(0,y.jsx)(g.Cell,{label:t(`story.table_email`),children:e.email}),(0,y.jsx)(g.Cell,{label:t(`story.table_role`),children:e.role}),(0,y.jsx)(g.Cell,{label:t(`story.table_status`),children:(0,y.jsx)(u,{content:e.intent,size:`sm`,color:e.intent===t(`story.table_active`)?`primary`:`neutral`})})]},e.id))})]})},parameters:{viewport:{defaultViewport:`mobile1`}}},F=[`Default`,`Striped`,`Bordered`,`Hoverable`,`FullWidth`,`WithActions`,`Sortable`,`RowSelection`,`StickyHeader`,`SubtleScrollbar`,`HiddenScrollbar`,`MobileCard`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge content={row.intent} size="sm" color={row.intent === t("story.table_active") ? "primary" : "neutral"} />
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head style={{
            width: "1%",
            whiteSpace: "nowrap"
          }}>
              {t("story.table_actions")}
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.slice(0, 2).map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_actions")}>
                <div style={{
              display: "flex",
              gap: "4px",
              justifyContent: "flex-start"
            }}>
                  <IconButton iconName="EditIcon" aria-label={t("story.dropdown_edit")} size="sm" variant="ghost" />
                  <IconButton iconName="TrashIcon" aria-label={t("story.dropdown_delete")} size="sm" variant="ghost" intent="danger" />
                </div>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "asc"
    });
    const [data, setData] = React.useState(manyRows);
    const handleSort = (key: string) => {
      let direction: "asc" | "desc" | "none" = "asc";
      if (sortConfig.key === key) {
        if (sortConfig.direction === "asc") direction = "desc";else if (sortConfig.direction === "desc") direction = "none";
      }
      setSortConfig({
        key,
        direction
      });
      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...manyRows].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    return <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable sortDirection={sortConfig.key === "id" ? sortConfig.direction : "none"} onSort={() => handleSort("id")}>
              {t("story.table_id")}
            </Table.Head>
            <Table.Head sortable sortDirection={sortConfig.key === "name" ? sortConfig.direction : "none"} onSort={() => handleSort("name")}>
              {t("story.table_name")}
            </Table.Head>
            <Table.Head sortable sortDirection={sortConfig.key === "email" ? sortConfig.direction : "none"} onSort={() => handleSort("email")}>
              {t("story.table_email")}
            </Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.slice(0, 10).map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const allSelected = selectedIds.length === 5;
    const indeterminate = selectedIds.length > 0 && selectedIds.length < 5;
    const toggleAll = () => {
      if (allSelected) {
        setSelectedIds([]);
      } else {
        setSelectedIds([1, 2, 3, 4, 5]);
      }
    };
    const toggleRow = (id: number) => {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter(sid => sid !== id));
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    };
    return <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head selection aria-label={t("story.table_select_all")}>
              <Checkbox checked={allSelected} indeterminate={indeterminate} onChange={toggleAll} aria-label={t("story.table_select_all")} />
            </Table.Head>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.slice(0, 5).map(row => <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>
              <Table.Cell selection>
                <Checkbox checked={selectedIds.includes(row.id)} onChange={() => toggleRow(row.id)} aria-label={t("story.table_select_row")} />
              </Table.Cell>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    return <Table {...args} stickyHeader={true} fullWidth={true} maxHeight="300px">
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "subtle"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "hidden"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args} mobileCard={true} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge content={row.intent} size="sm" color={row.intent === t("story.table_active") ? "primary" : "neutral"} />
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}export{A as a,w as c,O as d,I as f,E as i,M as l,C as n,k as o,D as r,j as s,T as t,_ as u};