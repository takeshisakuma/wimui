"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Ot as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Badge-A6ygOnY-.js";import{t as f}from"./Checkbox-BoL3apv1.js";import{t as p}from"./IconButton-DyTVmXf0.js";var m=e({Bordered:()=>S,Default:()=>b,FullWidth:()=>w,HiddenScrollbar:()=>A,Hoverable:()=>C,MobileCard:()=>j,RowSelection:()=>D,Sortable:()=>E,StickyHeader:()=>O,Striped:()=>x,SubtleScrollbar:()=>k,WithActions:()=>T,__namedExportsOrder:()=>M,default:()=>_}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{h=n(r(),1),s(),a(),u(),g=o(),_={title:`Components/Data Structures/Table`,component:l,tags:[],argTypes:{striped:{control:`boolean`},bordered:{control:`boolean`},hoverable:{control:`boolean`},fullWidth:{control:`boolean`},stickyHeader:{control:`boolean`},scrollbar:{control:`select`,options:[`default`,`subtle`,`hidden`]},height:{control:`text`},maxHeight:{control:`text`}}},v=()=>{let{t:e}=i(c);return[{id:1,name:`Priya Nair`,email:`priya@example.com`,intent:e(`story.table_active`),role:e(`story.table_admin`)},{id:2,name:`Marcus Bell`,email:`marcus@example.com`,intent:e(`story.table_inactive`),role:e(`story.table_user`)},{id:3,name:`Yuki Tanaka`,email:`yuki@example.com`,intent:e(`story.table_active`),role:e(`story.table_editor`)},{id:4,name:`Sofia Rossi`,email:`sofia@example.com`,intent:e(`story.table_pending`),role:e(`story.table_user`)}]},y=()=>{let{t:e}=i(c);return Array.from({length:30}).map((t,n)=>({id:n+1,name:`${e(`story.table_user`)} ${n+1}`,email:`user${n+1}@example.com`,role:n%3==0?e(`story.table_admin`):e(`story.table_member`),intent:n%2==0?e(`story.table_active`):e(`story.table_inactive`)}))},b={render:function(e){let{t}=i(c),n=v();return(0,g.jsxs)(l,{...e,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{children:t(`story.table_email`)}),(0,g.jsx)(l.Head,{children:t(`story.table_role`)}),(0,g.jsx)(l.Head,{children:t(`story.table_status`)})]})}),(0,g.jsx)(l.Body,{children:n.map(e=>(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email}),(0,g.jsx)(l.Cell,{label:t(`story.table_role`),children:e.role}),(0,g.jsx)(l.Cell,{label:t(`story.table_status`),children:(0,g.jsx)(d,{content:e.intent,size:`sm`,color:e.intent===t(`story.table_active`)?`primary`:`neutral`})})]},e.id))})]})}},x={...b,args:{striped:!0}},S={...b,args:{bordered:!0}},C={...b,args:{hoverable:!0}},w={...b,args:{fullWidth:!0}},T={render:function(e){let{t}=i(c),n=v();return(0,g.jsxs)(l,{...e,fullWidth:!0,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{children:t(`story.table_email`)}),(0,g.jsx)(l.Head,{style:{width:`1%`,whiteSpace:`nowrap`},children:t(`story.table_actions`)})]})}),(0,g.jsx)(l.Body,{children:n.slice(0,2).map(e=>(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email}),(0,g.jsx)(l.Cell,{label:t(`story.table_actions`),children:(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`4px`,justifyContent:`flex-start`},children:[(0,g.jsx)(p,{iconName:`EditIcon`,"aria-label":t(`story.dropdown_edit`),size:`sm`,variant:`ghost`}),(0,g.jsx)(p,{iconName:`TrashIcon`,"aria-label":t(`story.dropdown_delete`),size:`sm`,variant:`ghost`,intent:`danger`})]})})]},e.id))})]})}},E={render:function(e){let{t}=i(c),n=y(),[r,a]=h.useState({key:`id`,direction:`asc`}),[o,s]=h.useState(n),u=e=>{let t=`asc`;if(r.key===e&&(r.direction===`asc`?t=`desc`:r.direction===`desc`&&(t=`none`)),a({key:e,direction:t}),t===`none`)s(n);else{let r=[...n].sort((n,r)=>{let i=n[e],a=r[e];return String(i)<String(a)?t===`asc`?-1:1:String(i)>String(a)?t===`asc`?1:-1:0});s(r)}};return(0,g.jsxs)(l,{...e,fullWidth:!0,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{sortable:!0,sortDirection:r.key===`id`?r.direction:`none`,onSort:()=>u(`id`),children:t(`story.table_id`)}),(0,g.jsx)(l.Head,{sortable:!0,sortDirection:r.key===`name`?r.direction:`none`,onSort:()=>u(`name`),children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{sortable:!0,sortDirection:r.key===`email`?r.direction:`none`,onSort:()=>u(`email`),children:t(`story.table_email`)}),(0,g.jsx)(l.Head,{children:t(`story.table_role`)})]})}),(0,g.jsx)(l.Body,{children:o.slice(0,10).map(e=>(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Cell,{label:t(`story.table_id`),children:e.id}),(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email}),(0,g.jsx)(l.Cell,{label:t(`story.table_role`),children:e.role})]},e.id))})]})}},D={render:function(e){let{t}=i(c),n=y(),[r,a]=h.useState([]),o=r.length===5,s=r.length>0&&r.length<5,u=()=>{a(o?[]:[1,2,3,4,5])},d=e=>{r.includes(e)?a(r.filter(t=>t!==e)):a([...r,e])};return(0,g.jsxs)(l,{...e,fullWidth:!0,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{selection:!0,"aria-label":t(`story.table_select_all`),children:(0,g.jsx)(f,{checked:o,indeterminate:s,onChange:u,"aria-label":t(`story.table_select_all`)})}),(0,g.jsx)(l.Head,{children:t(`story.table_id`)}),(0,g.jsx)(l.Head,{children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{children:t(`story.table_email`)})]})}),(0,g.jsx)(l.Body,{children:n.slice(0,5).map(e=>(0,g.jsxs)(l.Row,{selected:r.includes(e.id),children:[(0,g.jsx)(l.Cell,{selection:!0,children:(0,g.jsx)(f,{checked:r.includes(e.id),onChange:()=>d(e.id),"aria-label":t(`story.table_select_row`)})}),(0,g.jsx)(l.Cell,{label:t(`story.table_id`),children:e.id}),(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email})]},e.id))})]})}},O={render:function(e){let{t}=i(c),n=y();return(0,g.jsxs)(l,{...e,stickyHeader:!0,fullWidth:!0,maxHeight:`300px`,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{children:t(`story.table_id`)}),(0,g.jsx)(l.Head,{children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{children:t(`story.table_email`)}),(0,g.jsx)(l.Head,{children:t(`story.table_role`)})]})}),(0,g.jsx)(l.Body,{children:n.map(e=>(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Cell,{label:t(`story.table_id`),children:e.id}),(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email}),(0,g.jsx)(l.Cell,{label:t(`story.table_role`),children:e.role})]},e.id))})]})}},k={...O,args:{scrollbar:`subtle`}},A={...O,args:{scrollbar:`hidden`}},j={render:function(e){let{t}=i(c),n=v();return(0,g.jsxs)(l,{...e,mobileCard:!0,fullWidth:!0,children:[(0,g.jsx)(l.Header,{children:(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Head,{children:t(`story.table_id`)}),(0,g.jsx)(l.Head,{children:t(`story.table_name`)}),(0,g.jsx)(l.Head,{children:t(`story.table_email`)}),(0,g.jsx)(l.Head,{children:t(`story.table_role`)}),(0,g.jsx)(l.Head,{children:t(`story.table_status`)})]})}),(0,g.jsx)(l.Body,{children:n.map(e=>(0,g.jsxs)(l.Row,{children:[(0,g.jsx)(l.Cell,{label:t(`story.table_id`),children:e.id}),(0,g.jsx)(l.Cell,{label:t(`story.table_name`),children:e.name}),(0,g.jsx)(l.Cell,{label:t(`story.table_email`),children:e.email}),(0,g.jsx)(l.Cell,{label:t(`story.table_role`),children:e.role}),(0,g.jsx)(l.Cell,{label:t(`story.table_status`),children:(0,g.jsx)(d,{content:e.intent,size:`sm`,color:e.intent===t(`story.table_active`)?`primary`:`neutral`})})]},e.id))})]})},parameters:{viewport:{defaultViewport:`mobile1`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "subtle"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "hidden"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Striped`,`Bordered`,`Hoverable`,`FullWidth`,`WithActions`,`Sortable`,`RowSelection`,`StickyHeader`,`SubtleScrollbar`,`HiddenScrollbar`,`MobileCard`]}));N();export{S as Bordered,b as Default,w as FullWidth,A as HiddenScrollbar,C as Hoverable,j as MobileCard,D as RowSelection,E as Sortable,O as StickyHeader,x as Striped,k as SubtleScrollbar,T as WithActions,M as __namedExportsOrder,_ as default,N as n,m as t};