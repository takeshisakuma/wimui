import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-DrKELQ5F.js";import{c as Z}from"./index-B8yElmUT.js";import{T as ee,a as ae,b as G,c as U,d as te,e as H}from"./Table-D8SBdp2u.js";import{C as L}from"./Checkbox-CNMtKnFw.js";import{P as ne}from"./Pagination-CxXEPaEY.js";import{S as re}from"./Spinner-Dsg1xNNN.js";import{E as se}from"./EmptyState-pioVE8i0.js";import{B as oe}from"./Badge-MnEdEJIu.js";import{B as M}from"./Button-DmSY3IWZ.js";import{I as J}from"./Icon-_i_bMbWe.js";function w({columns:n,rows:a,loading:s=!1,selection:c=!1,selectedRowKeys:i=[],onSelectionChange:r,rowKey:o="id",sortConfig:u,onSort:f,pagination:l,striped:h=!1,bordered:S=!1,hoverable:N=!0,stickyHeader:x=!1,height:b,maxHeight:E,className:W,emptyMessage:k="No data available"}){const v=t=>typeof o=="function"?o(t):t[o],B=t=>{r&&r(t?a.map(m=>v(m)):[])},O=(t,m)=>{r&&r(m?[...i,t]:i.filter(D=>D!==t))},Q=t=>{if(!f)return;let m="asc";u?.key===t&&(u.direction==="asc"?m="desc":u.direction==="desc"&&(m="none")),f(t,m)},X=a.length>0&&i.length===a.length,Y=i.length>0&&i.length<a.length;return e.jsxs("div",{className:Z("wim-datagrid",s&&"wim-datagrid--loading",W),children:[e.jsxs("div",{className:"wim-datagrid__container",children:[e.jsxs(ee,{striped:h,bordered:S,hoverable:N,stickyHeader:x,fullWidth:!0,height:b,maxHeight:E,children:[e.jsx(ae,{children:e.jsxs(G,{children:[c&&e.jsx(U,{selection:!0,children:e.jsx(L,{checked:X,indeterminate:Y,onChange:t=>B(t.target.checked),"aria-label":"Select all rows"})}),n.map(t=>e.jsx(U,{style:{width:t.width,textAlign:t.align},sortable:t.sortable,sortDirection:u?.key===t.key?u.direction:"none",onSort:()=>Q(t.key),children:t.header},t.key))]})}),e.jsx(te,{children:a.length===0&&!s?e.jsx(G,{children:e.jsx(H,{colSpan:n.length+(c?1:0),children:e.jsx("div",{className:"wim-datagrid__empty",children:typeof k=="string"?e.jsx(se,{title:"No Data",description:k}):k})})}):a.map((t,m)=>{const D=v(t),$=i.includes(D);return e.jsxs(G,{selected:$,children:[c&&e.jsx(H,{selection:!0,children:e.jsx(L,{checked:$,onChange:d=>O(D,d.target.checked),"aria-label":`Select row ${m+1}`})}),n.map(d=>{const F=d.dataIndex?t[d.dataIndex]:t[d.key];return e.jsx(H,{style:{textAlign:d.align},label:typeof d.header=="string"?d.header:void 0,children:d.render?d.render(F,t,m):F},d.key)})]},D)})})]}),s&&e.jsx("div",{className:"wim-datagrid__loading-overlay",children:e.jsx(re,{size:"lg"})})]}),l&&e.jsx("div",{className:"wim-datagrid__footer",children:e.jsx(ne,{total:l.total,pageSize:l.pageSize,current:l.current,onChange:l.onPageChange})})]})}w.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    total: number;\r
    pageSize: number;\r
    current: number;\r
    onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty",defaultValue:{value:'"No data available"',computed:!1}}}};const ie={title:"Component/Data Structures/DataGrid",component:w,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},y=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],_=Array.from({length:50}).map((n,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Editor":"User",status:a%3===0?"Active":a%2===0?"Inactive":"Pending",joinDate:`2024-${String(a%12+1).padStart(2,"0")}-${String(a%28+1).padStart(2,"0")}`})),p=[{key:"id",header:"ID",width:80,sortable:!0},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role"},{key:"status",header:"Status",render:n=>e.jsx(oe,{content:n,size:"small",color:n==="Active"?"primary":n==="Inactive"?"neutral":"secondary"})}],C={args:{columns:p,rows:y}},j={render:()=>{const[n,a]=g.useState([]);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"16px"},children:["Selected: ",n.join(", ")]}),e.jsx(w,{columns:p,rows:y,selection:!0,selectedRowKeys:n,onSelectionChange:a})]})}},R={render:()=>{const[n,a]=g.useState({key:"id",direction:"none"}),[s,c]=g.useState(y),i=(r,o)=>{if(a({key:r,direction:o}),o==="none")c(y);else{const u=[...s].sort((f,l)=>{const h=f[r],S=l[r];return h<S?o==="asc"?-1:1:h>S?o==="asc"?1:-1:0});c(u)}};return e.jsx(w,{columns:p,rows:s,sortConfig:n,onSort:i})}},T={render:()=>{const[n,a]=g.useState(1),s=10,c=(n-1)*s,i=c+s,r=_.slice(c,i);return e.jsx(w,{columns:p,rows:r,pagination:{total:_.length,pageSize:s,current:n,onPageChange:a}})}},I={args:{columns:[{key:"id",header:"ID",width:80},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"actions",header:"Actions",align:"right",render:(n,a)=>e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(M,{size:"small",priority:"tertiary",onClick:()=>alert(`Edit ${a.name}`),children:e.jsx(J,{name:"EditIcon",size:"small"})}),e.jsx(M,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(`Delete ${a.name}`),children:e.jsx(J,{name:"TrashIcon",size:"small"})})]})}],rows:y}},P={args:{columns:p,rows:y,loading:!0}},q={args:{columns:p,rows:[],emptyMessage:"No users found"}},z={args:{columns:p,rows:y,striped:!0}},V={args:{columns:p,rows:y,bordered:!0}},A={args:{columns:p,rows:_,stickyHeader:!0,maxHeight:"400px"}},K={render:()=>{const[n,a]=g.useState([]),[s,c]=g.useState(1),[i,r]=g.useState({key:"id",direction:"none"}),[o,u]=g.useState(_),f=(x,b)=>{if(r({key:x,direction:b}),b==="none")u(_);else{const E=[...o].sort((W,k)=>{const v=W[x],B=k[x];return v<B?b==="asc"?-1:1:v>B?b==="asc"?1:-1:0});u(E)}},l=10,h=(s-1)*l,S=h+l,N=o.slice(h,S);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"16px"},children:["Selected ",n.length," of ",o.length," rows"]}),e.jsx(w,{columns:p,rows:N,selection:!0,selectedRowKeys:n,onSelectionChange:a,sortConfig:i,onSort:f,pagination:{total:o.length,pageSize:l,current:s,onPageChange:c},striped:!0,hoverable:!0,bordered:!0})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return <div>\r
                <p style={{
        marginBottom: "16px"
      }}>Selected: {selectedRowKeys.join(", ")}</p>\r
                <DataGrid columns={basicColumns} rows={sampleData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} />\r
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
    return <DataGrid columns={basicColumns} rows={data} sortConfig={sortConfig} onSort={handleSort} />;
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    }} />;
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 80
    }, {
      key: "name",
      header: "Name"
    }, {
      key: "email",
      header: "Email"
    }, {
      key: "actions",
      header: "Actions",
      align: "right" as const,
      render: (_: any, row: Record<string, any>) => <div style={{
        display: "flex",
        gap: "8px",
        justifyContent: "flex-end"
      }}>\r
                        <Button size="small" priority="tertiary" onClick={() => alert(\`Edit \${row.name}\`)}>\r
                            <Icon name="EditIcon" size="small" />\r
                        </Button>\r
                        <Button size="small" priority="tertiary" role="destructive" onClick={() => alert(\`Delete \${row.name}\`)}>\r
                            <Icon name="TrashIcon" size="small" />\r
                        </Button>\r
                    </div>
    }],
    rows: sampleData
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    loading: true
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: [],
    emptyMessage: "No users found"
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    striped: true
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: sampleData,
    bordered: true
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    rows: manyRows,
    stickyHeader: true,
    maxHeight: "400px"
  }
}`,...A.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
                <p style={{
        marginBottom: "16px"
      }}>\r
                    Selected {selectedRowKeys.length} of {data.length} rows\r
                </p>\r
                <DataGrid columns={basicColumns} rows={currentData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onPageChange: setCurrentPage
      }} striped hoverable bordered />\r
            </div>;
  }
}`,...K.parameters?.docs?.source}}};const ce=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured"],we=Object.freeze(Object.defineProperty({__proto__:null,Bordered:V,Default:C,Empty:q,FullFeatured:K,Loading:P,StickyHeader:A,Striped:z,WithActions:I,WithPagination:T,WithSelection:j,WithSorting:R,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{V as B,we as D,q as E,K as F,P as L,z as S,j as W,R as a,T as b,I as c,A as d};
