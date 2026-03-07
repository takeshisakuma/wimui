import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-8vWRHjs9.js";import{c as de}from"./index-BgvlPezX.js";import{T as le,a as ce,b as H,c as X,d as ue,e as F}from"./Table-BS5Hyn4A.js";import{C as Y}from"./Checkbox-DORT8vG2.js";import{P as me}from"./Pagination-DeD11K-b.js";import{S as pe}from"./Spinner-BG0oUJe-.js";import{E as ge}from"./EmptyState-DTlzd8jw.js";import{u as ae}from"./useTranslation-oYtfLuBR.js";import{B as J}from"./Badge-DXEfA-HD.js";import{B as ee}from"./Button-B2l21hRP.js";import{I as te}from"./Icon-DDic_iot.js";function u({columns:t,rows:a,loading:s=!1,selection:r=!1,selectedRowKeys:o=[],onSelectionChange:l,rowKey:m="id",sortConfig:c,onSort:f,pagination:g,striped:w=!1,bordered:y=!1,hoverable:S=!0,stickyHeader:b=!1,height:D,maxHeight:x,className:B,emptyMessage:k="No data available"}){const{t:$}=ae(),v=n=>typeof m=="function"?m(n):n[m],N=n=>{l&&l(n?a.map(i=>v(i)):[])},ne=(n,i)=>{l&&l(i?[...o,n]:o.filter(C=>C!==n))},re=n=>{if(!f)return;let i="asc";c?.key===n&&(c.direction==="asc"?i="desc":c.direction==="desc"&&(i="none")),f(n,i)},se=a.length>0&&o.length===a.length,oe=o.length>0&&o.length<a.length,L={},U=y?1:0;let O=r?48+U:0,ie=20;return t.forEach(n=>{if(n.fixed){L[n.key]={offset:O===0?0:`${O}px`,zIndex:ie--};let i=0;typeof n.width=="number"?i=n.width:typeof n.width=="string"&&n.width.endsWith("px")&&(i=parseInt(n.width,10)),O+=i+U}}),e.jsxs("div",{className:de("wim-datagrid",s&&"wim-datagrid--loading",B),children:[e.jsxs("div",{className:"wim-datagrid__container",children:[e.jsxs(le,{striped:w,bordered:y,hoverable:S,stickyHeader:b,fullWidth:!0,height:D,maxHeight:x,children:[e.jsx(ce,{children:e.jsxs(H,{children:[r&&e.jsx(X,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:b?121:21,children:e.jsx(Y,{checked:se,indeterminate:oe,onChange:n=>N(n.target.checked),"aria-label":$("a11y_select_all_rows")})}),t.map(n=>{const i=n.fixed?L[n.key]:void 0;return e.jsx(X,{style:{width:n.width,minWidth:n.width,maxWidth:n.width,textAlign:n.align},sortable:n.sortable,sortDirection:c?.key===n.key?c.direction:"none",onSort:()=>re(n.key),stickyLeft:n.fixed,leftOffset:i?.offset,stickyZIndex:i?b?i.zIndex+100:i.zIndex:void 0,children:n.header},n.key)})]})}),e.jsx(ue,{children:a.length===0&&!s?e.jsx(H,{children:e.jsx(F,{colSpan:t.length+(r?1:0),children:e.jsx("div",{className:"wim-datagrid__empty",children:typeof k=="string"?e.jsx(ge,{title:"No Data",description:k}):k})})}):a.map((n,i)=>{const C=v(n),Z=o.includes(C);return e.jsxs(H,{selected:Z,children:[r&&e.jsx(F,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,children:e.jsx(Y,{checked:Z,onChange:d=>ne(C,d.target.checked),"aria-label":`Select row ${i+1}`})}),t.map(d=>{const M=d.dataIndex?n[d.dataIndex]:n[d.key],Q=d.fixed?L[d.key]:void 0;return e.jsx(F,{style:{minWidth:d.width,maxWidth:d.width,textAlign:d.align},label:typeof d.header=="string"?d.header:void 0,stickyLeft:d.fixed,leftOffset:Q?.offset,stickyZIndex:Q?.zIndex,children:d.render?d.render(M,n,i):M},d.key)})]},C)})})]}),s&&e.jsx("div",{className:"wim-datagrid__loading-overlay",children:e.jsx(pe,{size:"lg"})})]}),g&&e.jsx("div",{className:"wim-datagrid__footer",children:e.jsx(me,{total:g.total,pageSize:g.pageSize,current:g.current,onChange:g.onPageChange})})]})}u.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty",defaultValue:{value:'"No data available"',computed:!1}}}};const ye={title:"Components/Data Structures/DataGrid",component:u,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},K=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],E=Array.from({length:50}).map((t,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Editor":"User",status:a%3===0?"Active":a%2===0?"Inactive":"Pending",joinDate:`2024-${String(a%12+1).padStart(2,"0")}-${String(a%28+1).padStart(2,"0")}`})),he=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:t=>e.jsx(J,{content:t,size:"small",color:t==="Active"?"primary":t==="Inactive"?"neutral":"secondary"})}],p=()=>{const{t}=ae(["docs","common","components"]),a=he.map(r=>({...r,header:typeof r.header=="string"?t(`story_datagrid_col_${r.key}`):r.header,render:r.key==="status"?o=>{const l=t(o==="Active"?"story_datagrid_status_active":o==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return e.jsx(J,{content:l,size:"small",color:o==="Active"?"primary":o==="Inactive"?"neutral":"secondary"})}:r.render}));return{t,tColumns:a,tSampleData:K}},j={render:t=>{const{tColumns:a,tSampleData:s}=p(),r=s;return e.jsx(u,{...t,columns:a,rows:r})},args:{bordered:!0}},R={render:()=>{const{t,tColumns:a,tSampleData:s}=p(),[r,o]=h.useState([]);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"16px"},children:[t("story_datagrid_selected"),r.join(", ")]}),e.jsx(u,{columns:a,rows:s,selection:!0,selectedRowKeys:r,onSelectionChange:o,bordered:!0})]})}},T={render:()=>{const{tColumns:t}=p(),[a,s]=h.useState({key:"id",direction:"none"}),[r,o]=h.useState(K),l=(m,c)=>{if(s({key:m,direction:c}),c==="none")o(K);else{const f=[...r].sort((g,w)=>{const y=g[m],S=w[m];return y<S?c==="asc"?-1:1:y>S?c==="asc"?1:-1:0});o(f)}};return e.jsx(u,{columns:t,rows:r,sortConfig:a,onSort:l,bordered:!0})}},I={render:()=>{const{tColumns:t}=p(),[a,s]=h.useState(1),r=10,o=(a-1)*r,l=o+r,m=E.slice(o,l);return e.jsx(u,{columns:t,rows:m,pagination:{total:E.length,pageSize:r,current:a,onPageChange:s},bordered:!0})}},_={args:{columns:[{key:"id",header:"ID",width:55,fixed:!0},{key:"name",header:"Name",width:150,fixed:!1},{key:"email",header:"Email",width:200},{key:"actions",header:"Actions",width:100,render:(t,a)=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(ee,{size:"small",priority:"tertiary",onClick:()=>alert(`Edit ${a.name}`),children:e.jsx(te,{name:"EditIcon",size:"small"})}),e.jsx(ee,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(`Delete ${a.name}`),children:e.jsx(te,{name:"TrashIcon",size:"small"})})]})}],rows:K,bordered:!0}},z={render:t=>{const{tColumns:a,tSampleData:s}=p(),r=s;return e.jsx(u,{...t,columns:a,rows:r})},args:{loading:!0,bordered:!0}},P={render:t=>{const{t:a,tColumns:s,tSampleData:r}=p(),o=r;return e.jsx(u,{...t,columns:s,rows:o,emptyMessage:a("story_datagrid_empty")})},args:{bordered:!0}},A={render:t=>{const{tColumns:a,tSampleData:s}=p(),r=s;return e.jsx(u,{...t,columns:a,rows:r})},args:{striped:!0,bordered:!0}},G={render:t=>{const{tColumns:a,tSampleData:s}=p(),r=s;return e.jsx(u,{...t,columns:a,rows:r})},args:{bordered:!0}},V={render:t=>{const{tColumns:a}=p(),s=E;return e.jsx(u,{...t,columns:a,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},W={render:()=>{const{tColumns:t}=p(),[a,s]=h.useState([]),[r,o]=h.useState(1),[l,m]=h.useState({key:"id",direction:"none"}),[c,f]=h.useState(E),g=(D,x)=>{if(m({key:D,direction:x}),x==="none")f(E);else{const B=[...c].sort((k,$)=>{const v=k[D],N=$[D];return v<N?x==="asc"?-1:1:v>N?x==="asc"?1:-1:0});f(B)}},w=10,y=(r-1)*w,S=y+w,b=c.slice(y,S);return e.jsx("div",{children:e.jsx(u,{columns:t,rows:b,selection:!0,selectedRowKeys:a,onSelectionChange:s,sortConfig:l,onSort:g,pagination:{total:c.length,pageSize:w,current:r,onPageChange:o},striped:!0,hoverable:!0,bordered:!0})})}},q={args:{columns:[{key:"id",header:"ID",width:55,fixed:!0},{key:"name",header:"Name",width:150,fixed:!1},{key:"email",header:"Email",width:200},{key:"role",header:"Role",width:100},{key:"joinDate",header:"Join Date",width:150},{key:"status",header:"Status",width:100,render:t=>e.jsx(J,{content:t,size:"small",color:t==="Active"?"primary":t==="Inactive"?"neutral":"secondary"})}],rows:K,selection:!0,bordered:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"100vw"},children:e.jsx(t,{})})]};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return <div>\r
        <p style={{
        marginBottom: "16px"
      }}>\r
          {t('story_datagrid_selected')}{selectedRowKeys.join(", ")}\r
        </p>\r
        <DataGrid columns={tColumns} rows={tSampleData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} bordered />\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns,
      tSampleData
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
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    return <DataGrid columns={tColumns} rows={data} sortConfig={sortConfig} onSort={handleSort} bordered />;
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns
    } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);
    return <DataGrid columns={tColumns} rows={currentData} pagination={{
      total: manyRows.length,
      pageSize,
      current: currentPage,
      onPageChange: setCurrentPage
    }} bordered />;
  }
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: "Name",
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: "Email",
      width: 200
    }, {
      key: "actions",
      header: "Actions",
      width: 100,
      render: (_: any, row: Record<string, any>) => <div style={{
        display: "flex",
        gap: "8px"
      }}>\r
            <Button size="small" priority="tertiary" onClick={() => alert(\`Edit \${row.name}\`)}>\r
              <Icon name="EditIcon" size="small" />\r
            </Button>\r
            <Button size="small" priority="tertiary" role="destructive" onClick={() => alert(\`Delete \${row.name}\`)}>\r
              <Icon name="TrashIcon" size="small" />\r
            </Button>\r
          </div>
    }],
    rows: sampleData,
    bordered: true
  }
}`,..._.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    loading: true,
    bordered: true
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} emptyMessage={t('story_datagrid_empty')} />;
  },
  args: {
    bordered: true
  }
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    striped: true,
    bordered: true
  }
}`,...A.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = manyRows;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true
  }
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
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
    return <div>\r
        <DataGrid columns={tColumns} rows={currentData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onPageChange: setCurrentPage
      }} striped hoverable bordered />\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: "Name",
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: "Email",
      width: 200
    }, {
      key: "role",
      header: "Role",
      width: 100
    }, {
      key: "joinDate",
      header: "Join Date",
      width: 150
    }, {
      key: "status",
      header: "Status",
      width: 100,
      render: (value: any) => <Badge content={value} size="small" color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"} />
    }],
    rows: sampleData,
    selection: true,
    bordered: true
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>\r
        <Story />\r
      </div>]
}`,...q.parameters?.docs?.source}}};const fe=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn"],_e=Object.freeze(Object.defineProperty({__proto__:null,Bordered:G,Default:j,Empty:P,FullFeatured:W,Loading:z,StickyHeader:V,Striped:A,WithActions:_,WithFixedColumn:q,WithPagination:I,WithSelection:R,WithSorting:T,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{G as B,_e as D,P as E,W as F,z as L,A as S,R as W,T as a,I as b,_ as c,V as d,q as e};
