"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Icon-BwqUHrwU.js";import{n as p,t as m}from"./Button-C-16RMzV.js";import{n as h,t as g}from"./Badge-CWMYBHho.js";import{n as _,t as v}from"./Text-D9yqbrao.js";import{n as y,t as b}from"./Input-DHbxaISk.js";import{n as x,t as S}from"./DataGrid-bxwQ8WeS.js";var C=n({Bordered:()=>z,Default:()=>j,Empty:()=>L,FilterToEmpty:()=>q,FullFeatured:()=>V,InfiniteScroll:()=>H,Loading:()=>I,MobileCard:()=>K,StickyHeader:()=>B,Striped:()=>R,TruncatedColumn:()=>W,WithActions:()=>F,WithFixedColumn:()=>U,WithPagination:()=>P,WithRightFixedColumn:()=>G,WithSelection:()=>M,WithSorting:()=>N,__namedExportsOrder:()=>J,default:()=>E}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{w=e(r(),1),a(),o(),h(),p(),x(),d(),y(),l(),_(),T=c(),E={title:`Components/Data Structures/DataGrid`,component:S,tags:[],argTypes:{loading:{control:`boolean`},selection:{control:`boolean`},striped:{control:`boolean`},bordered:{control:`boolean`},hoverable:{control:`boolean`},stickyHeader:{control:`boolean`}}},D=[{id:1,name:`Priya Nair`,email:`priya@example.com`,intent:`Active`,role:`Admin`,joinDate:`2024-01-15`},{id:2,name:`Marcus Bell`,email:`marcus@example.com`,intent:`Inactive`,role:`User`,joinDate:`2024-02-20`},{id:3,name:`Yuki Tanaka`,email:`yuki@example.com`,intent:`Active`,role:`Editor`,joinDate:`2024-03-10`},{id:4,name:`Sofia Rossi`,email:`sofia@example.com`,intent:`Pending`,role:`User`,joinDate:`2024-04-05`},{id:5,name:`Omar Haddad`,email:`omar@example.com`,intent:`Active`,role:`Admin`,joinDate:`2024-05-12`}],O=Array.from({length:50}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:t%3==0?`Admin`:t%2==0?`Editor`:`User`,intent:t%3==0?`Active`:t%2==0?`Inactive`:`Pending`,joinDate:`2024-${String(t%12+1).padStart(2,`0`)}-${String(t%28+1).padStart(2,`0`)}`})),k=[{key:`id`,title:`ID`,width:80,sortable:!0,fixed:`left`},{key:`name`,title:`Name`,width:150,sortable:!0},{key:`email`,title:`Email`,sortable:!0,width:200},{key:`role`,title:`Role`,width:100},{key:`status`,dataIndex:`intent`,title:`Status`,width:100,render:e=>(0,T.jsx)(g,{content:e,size:`sm`,intent:e===`Active`?`success`:e===`Inactive`?`neutral`:`warning`})}],A=()=>{let{t:e}=i(s);return{t:e,tColumns:k.map(t=>({...t,title:typeof t.title==`string`?e(`story.datagrid_col_${t.key}`):t.title,render:t.key===`status`?t=>{let n=e(t===`Active`?`story.datagrid_status_active`:t===`Inactive`?`story.datagrid_status_inactive`:`story.datagrid_status_pending`);return(0,T.jsx)(g,{content:n,size:`sm`,intent:t===`Active`?`success`:t===`Inactive`?`neutral`:`warning`})}:t.render})),tSampleData:D}},j={render:e=>{let{tColumns:t,tSampleData:n}=A();return(0,T.jsx)(S,{...e,columns:t,data:n})},args:{bordered:!0}},M={render:()=>{let{t:e,tColumns:t,tSampleData:n}=A(),[r,i]=w.useState([]);return(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`p`,{style:{marginBottom:`16px`},children:[e(`story.datagrid_selected`),r.join(`, `)]}),(0,T.jsx)(S,{columns:t,data:n,selection:{type:`checkbox`,selectedRowKeys:r,onChange:e=>i(e)},bordered:!0})]})}},N={render:()=>{let{tColumns:e}=A(),[t,n]=w.useState({key:`id`,direction:`none`}),[r,i]=w.useState(D);return(0,T.jsx)(S,{columns:e,data:r,sortConfig:t,onSortChange:(e,t)=>{if(n({key:e,direction:t}),t===`none`)i(D);else{let n=[...r].sort((n,r)=>{let i=n[e],a=r[e];return String(i)<String(a)?t===`asc`?-1:1:String(i)>String(a)?t===`asc`?1:-1:0});i(n)}},bordered:!0})}},P={render:()=>{let{tColumns:e}=A(),[t,n]=w.useState(1),r=(t-1)*10,i=r+10,a=O.slice(r,i);return(0,T.jsx)(S,{columns:e,data:a,pagination:{total:O.length,pageSize:10,current:t,onChange:e=>n(e)},bordered:!0})}},F={render:()=>{let{t:e}=i(s),t=[{key:`id`,title:e(`story.datagrid_col_id`),width:55,fixed:`left`},{key:`name`,title:e(`story.datagrid_col_name`),width:150},{key:`email`,title:e(`story.datagrid_col_email`),width:200},{key:`actions`,title:e(`story.datagrid_col_actions`),width:100,render:(t,n)=>(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`nowrap`},children:[(0,T.jsx)(m,{size:`sm`,variant:`ghost`,"aria-label":e(`story.datagrid_action_edit`,{name:n.name}),onClick:()=>alert(e(`story.datagrid_action_edit`,{name:n.name})),children:(0,T.jsx)(f,{name:`EditIcon`,size:`sm`})}),(0,T.jsx)(m,{size:`sm`,variant:`ghost`,intent:`danger`,"aria-label":e(`story.datagrid_action_delete`,{name:n.name}),onClick:()=>alert(e(`story.datagrid_action_delete`,{name:n.name})),children:(0,T.jsx)(f,{name:`TrashIcon`,size:`sm`})})]})}];return(0,T.jsx)(S,{columns:t,data:D,bordered:!0})}},I={render:e=>{let{tColumns:t,tSampleData:n}=A();return(0,T.jsx)(S,{...e,columns:t,data:n})},args:{loading:!0,bordered:!0}},L={render:e=>{let{tColumns:t}=A();return(0,T.jsx)(S,{...e,columns:t,data:[]})},args:{bordered:!0}},R={render:e=>{let{tColumns:t,tSampleData:n}=A();return(0,T.jsx)(S,{...e,columns:t,data:n})},args:{striped:!0,bordered:!0}},z={render:e=>{let{tColumns:t,tSampleData:n}=A();return(0,T.jsx)(S,{...e,columns:t,data:n})},args:{bordered:!0}},B={render:e=>{let{tColumns:t}=A(),n=O;return(0,T.jsx)(S,{...e,columns:t,data:n})},args:{stickyHeader:!0,maxHeight:`400px`,bordered:!0}},V={render:()=>{let{tColumns:e}=A(),[t,n]=w.useState([]),[r,i]=w.useState(1),[a,o]=w.useState({key:`id`,direction:`none`}),[s,c]=w.useState(O),l=(e,t)=>{if(o({key:e,direction:t}),t===`none`)c(O);else{let n=[...s].sort((n,r)=>{let i=n[e],a=r[e];return String(i)<String(a)?t===`asc`?-1:1:String(i)>String(a)?t===`asc`?1:-1:0});c(n)}},u=(r-1)*10,d=u+10,f=s.slice(u,d);return(0,T.jsx)(`div`,{children:(0,T.jsx)(S,{columns:e,data:f,selection:{type:`checkbox`,selectedRowKeys:t,onChange:e=>n(e)},sortConfig:a,onSortChange:l,pagination:{total:s.length,pageSize:10,current:r,onChange:e=>i(e)},striped:!0,hoverable:!0,bordered:!0})})}},H={render:()=>{let{tColumns:e}=A(),[t,n]=w.useState(O.slice(0,15)),[r,i]=w.useState(!1),[a,o]=w.useState(!0);return(0,T.jsx)(S,{columns:e,data:t,bordered:!0,stickyHeader:!0,maxHeight:`400px`,infiniteScroll:{onLoadMore:()=>{r||(i(!0),setTimeout(()=>{let e=O.slice(t.length,t.length+15);n(t=>[...t,...e]),t.length+e.length>=O.length&&o(!1),i(!1)},1e3))},hasMore:a}})}},U={render:()=>{let{tColumns:e,tSampleData:t}=A();return(0,T.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,T.jsx)(S,{columns:e,data:t,bordered:!0,stickyHeader:!0})})}},W={render:()=>{let{t:e}=i(s),t=[{key:`id`,title:e(`story.datagrid_col_id`),width:55},{key:`name`,title:e(`story.datagrid_col_name`),width:150},{key:`note`,title:e(`story.datagrid_col_note`),maxWidth:200,render:()=>(0,T.jsx)(v,{truncate:!0,children:e(`story.datagrid_truncate_note`)})},{key:`role`,title:e(`story.datagrid_col_role`),width:100}];return(0,T.jsx)(`div`,{style:{maxWidth:`560px`},children:(0,T.jsx)(S,{columns:t,data:D,bordered:!0})})}},G={render:()=>{let{t:e}=i(s),t=[{key:`id`,title:e(`story.datagrid_col_id`),width:55,fixed:`left`},{key:`name`,title:e(`story.datagrid_col_name`),width:150},{key:`email`,title:e(`story.datagrid_col_email`),width:250},{key:`role`,title:e(`story.datagrid_col_role`),width:100},{key:`actions`,title:e(`story.datagrid_col_actions`),width:100,fixed:`right`,render:(t,n)=>(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`nowrap`},children:[(0,T.jsx)(m,{size:`sm`,variant:`ghost`,"aria-label":e(`story.datagrid_action_edit`,{name:n.name}),onClick:()=>alert(e(`story.datagrid_action_edit`,{name:n.name})),children:(0,T.jsx)(f,{name:`EditIcon`,size:`sm`})}),(0,T.jsx)(m,{size:`sm`,variant:`ghost`,intent:`danger`,"aria-label":e(`story.datagrid_action_delete`,{name:n.name}),onClick:()=>alert(e(`story.datagrid_action_delete`,{name:n.name})),children:(0,T.jsx)(f,{name:`TrashIcon`,size:`sm`})})]})}];return(0,T.jsx)(`div`,{style:{maxWidth:`500px`},children:(0,T.jsx)(S,{columns:t,data:D,bordered:!0})})}},K={render:()=>{let{tColumns:e,tSampleData:t}=A(),[n,r]=w.useState([`2`]);return(0,T.jsx)(`div`,{style:{maxWidth:`380px`},children:(0,T.jsx)(S,{columns:e,data:t,mobileCard:!0,selection:{type:`checkbox`,selectedRowKeys:n,onChange:e=>r(e)},pagination:{current:1,pageSize:5,total:t.length,onChange:()=>void 0}})})}},q={render:function(e){let{t}=i(s),{tColumns:n,tSampleData:r}=A(),[a,o]=w.useState(``),c=r.filter(e=>String(e.name).toLowerCase().includes(a.toLowerCase()));return(0,T.jsxs)(u,{gap:`md`,children:[(0,T.jsx)(b,{label:t(`story.datagrid_filter_label`),value:a,onChange:e=>o(e.target.value)}),(0,T.jsx)(S,{...e,columns:n,data:c,emptyMessage:t(`story.datagrid_empty`)})]})},args:{bordered:!0}},J=[`Default`,`WithSelection`,`WithSorting`,`WithPagination`,`WithActions`,`Loading`,`Empty`,`Striped`,`Bordered`,`StickyHeader`,`FullFeatured`,`InfiniteScroll`,`WithFixedColumn`,`TruncatedColumn`,`WithRightFixedColumn`,`MobileCard`,`FilterToEmpty`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={tSampleData} />;
  },
  args: {
    bordered: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    return <div>
        <p style={{
        marginBottom: "16px"
      }}>
          {t('story.datagrid_selected')}{selectedRowKeys.join(", ")}
        </p>
        <DataGrid columns={tColumns} data={tSampleData} selection={{
        type: "checkbox",
        selectedRowKeys,
        onChange: keys => setSelectedRowKeys(keys)
      }} bordered />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none"
    });
    const [data, setData] = React.useState(sampleData);
    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({
        key,
        direction
      });
      if (direction === "none") {
        setData(sampleData);
      } else {
        const sortedData = [...data].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    return <DataGrid columns={tColumns} data={data as unknown as Record<string, unknown>[]} sortConfig={sortConfig} onSortChange={handleSort} bordered />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);
    return <DataGrid columns={tColumns} data={currentData as unknown as Record<string, unknown>[]} pagination={{
      total: manyRows.length,
      pageSize,
      current: currentPage,
      onChange: page => setCurrentPage(page)
    }} bordered />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const columns = [{
      key: "id",
      title: t("story.datagrid_col_id"),
      width: 55,
      fixed: "left" as const
    }, {
      key: "name",
      title: t("story.datagrid_col_name"),
      width: 150
    }, {
      key: "email",
      title: t("story.datagrid_col_email"),
      width: 200
    }, {
      key: "actions",
      title: t("story.datagrid_col_actions"),
      width: 100,
      render: (_: unknown, row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "nowrap"
      }}>
            <Button size="sm" variant="ghost" aria-label={t("story.datagrid_action_edit", {
          name: row.name
        })} onClick={() => alert(t("story.datagrid_action_edit", {
          name: row.name
        }))}>
              <Icon name="EditIcon" size="sm" />
            </Button>
            <Button size="sm" variant="ghost" intent="danger" aria-label={t("story.datagrid_action_delete", {
          name: row.name
        })} onClick={() => alert(t("story.datagrid_action_delete", {
          name: row.name
        }))}>
              <Icon name="TrashIcon" size="sm" />
            </Button>
          </div>
    }];
    return <DataGrid columns={columns} data={sampleData as unknown as Record<string, unknown>[]} bordered />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={tSampleData} />;
  },
  args: {
    loading: true,
    bordered: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns
    } = useDataGridTranslations();
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={[]} />;
  },
  args: {
    bordered: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={tSampleData} />;
  },
  args: {
    striped: true,
    bordered: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={tSampleData} />;
  },
  args: {
    bordered: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns
    } = useDataGridTranslations();
    const rows = manyRows as unknown as Record<string, unknown>[];
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={rows} />;
  },
  args: {
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none"
    });
    const [data, setData] = React.useState(manyRows);
    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({
        key,
        direction
      });
      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...data].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);
    return <div>
        <DataGrid columns={tColumns} data={currentData as unknown as Record<string, unknown>[]} selection={{
        type: "checkbox",
        selectedRowKeys,
        onChange: keys => setSelectedRowKeys(keys)
      }} sortConfig={sortConfig} onSortChange={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onChange: page => setCurrentPage(page)
      }} striped hoverable bordered />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [data, setData] = React.useState(manyRows.slice(0, 15));
    const [loading, setLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const loadMoreData = () => {
      if (loading) return;
      setLoading(true);

      // Simulate network request
      setTimeout(() => {
        const nextData = manyRows.slice(data.length, data.length + 15);
        setData(prev => [...prev, ...nextData]);
        if (data.length + nextData.length >= manyRows.length) {
          setHasMore(false);
        }
        setLoading(false);
      }, 1000);
    };
    return <DataGrid columns={tColumns} data={data as unknown as Record<string, unknown>[]} bordered stickyHeader maxHeight="400px" infiniteScroll={{
      onLoadMore: loadMoreData,
      hasMore
    }} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    return <div style={{
      maxWidth: "400px"
    }}>
        <DataGrid columns={tColumns} data={tSampleData} bordered stickyHeader />
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const columns = [{
      key: "id",
      title: t("story.datagrid_col_id"),
      width: 55
    }, {
      key: "name",
      title: t("story.datagrid_col_name"),
      width: 150
    }, {
      key: "note",
      title: t("story.datagrid_col_note"),
      maxWidth: 200,
      render: () => <Text truncate>{t("story.datagrid_truncate_note")}</Text>
    }, {
      key: "role",
      title: t("story.datagrid_col_role"),
      width: 100
    }];
    return <div style={{
      maxWidth: "560px"
    }}>
        <DataGrid columns={columns} data={sampleData as unknown as Record<string, unknown>[]} bordered />
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const columns = [{
      key: "id",
      title: t("story.datagrid_col_id"),
      width: 55,
      fixed: "left" as const
    }, {
      key: "name",
      title: t("story.datagrid_col_name"),
      width: 150
    }, {
      key: "email",
      title: t("story.datagrid_col_email"),
      width: 250
    }, {
      key: "role",
      title: t("story.datagrid_col_role"),
      width: 100
    }, {
      key: "actions",
      title: t("story.datagrid_col_actions"),
      width: 100,
      fixed: "right" as const,
      render: (_: unknown, row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px",
        flexWrap: "nowrap"
      }}>
            <Button size="sm" variant="ghost" aria-label={t("story.datagrid_action_edit", {
          name: row.name
        })} onClick={() => alert(t("story.datagrid_action_edit", {
          name: row.name
        }))}>
              <Icon name="EditIcon" size="sm" />
            </Button>
            <Button size="sm" variant="ghost" intent="danger" aria-label={t("story.datagrid_action_delete", {
          name: row.name
        })} onClick={() => alert(t("story.datagrid_action_delete", {
          name: row.name
        }))}>
              <Icon name="TrashIcon" size="sm" />
            </Button>
          </div>
    }];
    return <div style={{
      maxWidth: "500px"
    }}>
        <DataGrid columns={columns} data={sampleData as unknown as Record<string, unknown>[]} bordered />
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>(["2"]);
    return <div style={{
      maxWidth: "380px"
    }}>
        <DataGrid columns={tColumns} data={tSampleData} mobileCard selection={{
        type: "checkbox",
        selectedRowKeys,
        onChange: keys => setSelectedRowKeys(keys)
      }} pagination={{
        current: 1,
        pageSize: 5,
        total: tSampleData.length,
        onChange: () => undefined
      }} />
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`狭い幅ではカード表示に切り替わる（\`mobileCard\`）。切替は DataGrid 自身のコンテナ幅で
判定されるため、狭いラッパーに入れればビューポート幅によらず再現でき、VRT / axe の
対象にできる。この表示形態はストーリーが 1 つも無く、外枠の二重フレームと選択列の
レイアウト崩れが誰にも見えていなかった。`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const [query, setQuery] = React.useState("");
    const rows = tSampleData.filter(row => String(row.name).toLowerCase().includes(query.toLowerCase()));
    return <Stack gap="md">
        <Input label={t("story.datagrid_filter_label")} value={query} onChange={e => setQuery(e.target.value)} />
        <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} data={rows} emptyMessage={t("story.datagrid_empty")} />
      </Stack>;
  },
  args: {
    bordered: true
  }
}`,...q.parameters?.docs?.source}}}})))()}export{V as a,B as c,U as d,P as f,Y as g,N as h,L as i,R as l,M as m,C as n,H as o,G as p,j as r,I as s,z as t,F as u};