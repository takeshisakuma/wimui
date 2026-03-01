import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-CxGJGCEe.js";import{c as oe}from"./index-kCw4ylN7.js";import{T as ie,a as de,b as $,c as M,d as ce,e as H}from"./Table-DT_kh2OH.js";import{C as Q}from"./Checkbox-LvZiQKws.js";import{P as le}from"./Pagination-Bb8GIWyx.js";import{S as ue}from"./Spinner-CNNjQ2-a.js";import{E as me}from"./EmptyState-CuUpd12e.js";import{B as ee}from"./Badge-D7x7Rn5D.js";import{B as X}from"./Button-CfeXE7EA.js";import{I as Y}from"./Icon-CBegJE_x.js";function S({columns:r,rows:a,loading:i=!1,selection:d=!1,selectedRowKeys:c=[],onSelectionChange:o,rowKey:l="id",sortConfig:m,onSort:x,pagination:u,striped:y=!1,bordered:f=!1,hoverable:_=!0,stickyHeader:w=!1,height:b,maxHeight:B,className:G,emptyMessage:k="No data available"}){const v=e=>typeof l=="function"?l(e):e[l],E=e=>{o&&o(e?a.map(n=>v(n)):[])},te=(e,n)=>{o&&o(n?[...c,e]:c.filter(D=>D!==e))},ae=e=>{if(!x)return;let n="asc";m?.key===e&&(m.direction==="asc"?n="desc":m.direction==="desc"&&(n="none")),x(e,n)},re=a.length>0&&c.length===a.length,ne=c.length>0&&c.length<a.length,L={},F=f?1:0;let O=d?48+F:0,se=20;return r.forEach(e=>{if(e.fixed){L[e.key]={offset:O===0?0:`${O}px`,zIndex:se--};let n=0;typeof e.width=="number"?n=e.width:typeof e.width=="string"&&e.width.endsWith("px")&&(n=parseInt(e.width,10)),O+=n+F}}),t.jsxs("div",{className:oe("wim-datagrid",i&&"wim-datagrid--loading",G),children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(ie,{striped:y,bordered:f,hoverable:_,stickyHeader:w,fullWidth:!0,height:b,maxHeight:B,children:[t.jsx(de,{children:t.jsxs($,{children:[d&&t.jsx(M,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:w?121:21,children:t.jsx(Q,{checked:re,indeterminate:ne,onChange:e=>E(e.target.checked),"aria-label":"Select all rows"})}),r.map(e=>{const n=e.fixed?L[e.key]:void 0;return t.jsx(M,{style:{width:e.width,minWidth:e.width,maxWidth:e.width,textAlign:e.align},sortable:e.sortable,sortDirection:m?.key===e.key?m.direction:"none",onSort:()=>ae(e.key),stickyLeft:e.fixed,leftOffset:n?.offset,stickyZIndex:n?w?n.zIndex+100:n.zIndex:void 0,children:e.header},e.key)})]})}),t.jsx(ce,{children:a.length===0&&!i?t.jsx($,{children:t.jsx(H,{colSpan:r.length+(d?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof k=="string"?t.jsx(me,{title:"No Data",description:k}):k})})}):a.map((e,n)=>{const D=v(e),J=c.includes(D);return t.jsxs($,{selected:J,children:[d&&t.jsx(H,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,children:t.jsx(Q,{checked:J,onChange:s=>te(D,s.target.checked),"aria-label":`Select row ${n+1}`})}),r.map(s=>{const U=s.dataIndex?e[s.dataIndex]:e[s.key],Z=s.fixed?L[s.key]:void 0;return t.jsx(H,{style:{minWidth:s.width,maxWidth:s.width,textAlign:s.align},label:typeof s.header=="string"?s.header:void 0,stickyLeft:s.fixed,leftOffset:Z?.offset,stickyZIndex:Z?.zIndex,children:s.render?s.render(U,e,n):U},s.key)})]},D)})})]}),i&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(ue,{size:"lg"})})]}),u&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(le,{total:u.total,pageSize:u.pageSize,current:u.current,onChange:u.onPageChange})})]})}S.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty",defaultValue:{value:'"No data available"',computed:!1}}}};const pe={title:"Components/Data Structures/DataGrid",component:S,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},h=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],N=Array.from({length:50}).map((r,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Editor":"User",status:a%3===0?"Active":a%2===0?"Inactive":"Pending",joinDate:`2024-${String(a%12+1).padStart(2,"0")}-${String(a%28+1).padStart(2,"0")}`})),p=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:r=>t.jsx(ee,{content:r,size:"small",color:r==="Active"?"primary":r==="Inactive"?"neutral":"secondary"})}],C={args:{columns:p,rows:h,bordered:!0}},j={render:()=>{const[r,a]=g.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:["Selected: ",r.join(", ")]}),t.jsx(S,{columns:p,rows:h,selection:!0,selectedRowKeys:r,onSelectionChange:a,bordered:!0})]})}},R={render:()=>{const[r,a]=g.useState({key:"id",direction:"none"}),[i,d]=g.useState(h),c=(o,l)=>{if(a({key:o,direction:l}),l==="none")d(h);else{const m=[...i].sort((x,u)=>{const y=x[o],f=u[o];return y<f?l==="asc"?-1:1:y>f?l==="asc"?1:-1:0});d(m)}};return t.jsx(S,{columns:p,rows:i,sortConfig:r,onSort:c,bordered:!0})}},I={render:()=>{const[r,a]=g.useState(1),i=10,d=(r-1)*i,c=d+i,o=N.slice(d,c);return t.jsx(S,{columns:p,rows:o,pagination:{total:N.length,pageSize:i,current:r,onPageChange:a},bordered:!0})}},T={args:{columns:[{key:"id",header:"ID",width:55,fixed:!0},{key:"name",header:"Name",width:150,fixed:!1},{key:"email",header:"Email",width:200},{key:"actions",header:"Actions",width:100,render:(r,a)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(X,{size:"small",priority:"tertiary",onClick:()=>alert(`Edit ${a.name}`),children:t.jsx(Y,{name:"EditIcon",size:"small"})}),t.jsx(X,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(`Delete ${a.name}`),children:t.jsx(Y,{name:"TrashIcon",size:"small"})})]})}],rows:h,bordered:!0}},z={args:{columns:p,rows:h,loading:!0,bordered:!0}},P={args:{columns:p,rows:[],emptyMessage:"No users found",bordered:!0}},A={args:{columns:p,rows:h,striped:!0,bordered:!0}},W={args:{columns:p,rows:h,bordered:!0}},q={args:{columns:p,rows:N,stickyHeader:!0,maxHeight:"400px",bordered:!0}},V={render:()=>{const[r,a]=g.useState([]),[i,d]=g.useState(1),[c,o]=g.useState({key:"id",direction:"none"}),[l,m]=g.useState(N),x=(w,b)=>{if(o({key:w,direction:b}),b==="none")m(N);else{const B=[...l].sort((G,k)=>{const v=G[w],E=k[w];return v<E?b==="asc"?-1:1:v>E?b==="asc"?1:-1:0});m(B)}},u=10,y=(i-1)*u,f=y+u,_=l.slice(y,f);return t.jsx("div",{children:t.jsx(S,{columns:p,rows:_,selection:!0,selectedRowKeys:r,onSelectionChange:a,sortConfig:c,onSort:x,pagination:{total:l.length,pageSize:u,current:i,onPageChange:d},striped:!0,hoverable:!0,bordered:!0})})}},K={args:{columns:[{key:"id",header:"ID",width:55,fixed:!0},{key:"name",header:"Name",width:150,fixed:!1},{key:"email",header:"Email",width:200},{key:"role",header:"Role",width:100},{key:"joinDate",header:"Join Date",width:150},{key:"status",header:"Status",width:100,render:r=>t.jsx(ee,{content:r,size:"small",color:r==="Active"?"primary":r==="Inactive"?"neutral":"secondary"})}],rows:h,selection:!0,bordered:!0},decorators:[r=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(r,{})})]};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    bordered: true
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return <div>\r
        <p style={{
        marginBottom: "16px"
      }}>\r
          Selected: {selectedRowKeys.join(", ")}\r
        </p>\r
        <DataGrid columns={basicColumns} rows={sampleData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} bordered />\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
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
    return <DataGrid columns={basicColumns} rows={data} sortConfig={sortConfig} onSort={handleSort} bordered />;
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);
    return <DataGrid columns={basicColumns} rows={currentData} pagination={{
      total: manyRows.length,
      pageSize,
      current: currentPage,
      onPageChange: setCurrentPage
    }} bordered />;
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    loading: true,
    bordered: true
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: [],
    emptyMessage: "No users found",
    bordered: true
  }
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    striped: true,
    bordered: true
  }
}`,...A.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    bordered: true
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: manyRows,
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true
  }
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        <DataGrid columns={basicColumns} rows={currentData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onPageChange: setCurrentPage
      }} striped hoverable bordered />\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const he=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn"],je=Object.freeze(Object.defineProperty({__proto__:null,Bordered:W,Default:C,Empty:P,FullFeatured:V,Loading:z,StickyHeader:q,Striped:A,WithActions:T,WithFixedColumn:K,WithPagination:I,WithSelection:j,WithSorting:R,__namedExportsOrder:he,default:pe},Symbol.toStringTag,{value:"Module"}));export{W as B,je as D,P as E,V as F,z as L,A as S,j as W,R as a,I as b,T as c,q as d,K as e};
