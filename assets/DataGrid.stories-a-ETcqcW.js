import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-D4gOfWnt.js";import{c as je}from"./index-Cl0yRb9X.js";import{T as Ie,a as Te,b as Q,c as he,d as ze,e as X}from"./Table-COL-PK3Z.js";import{C as fe}from"./Checkbox-BnfEca0h.js";import{P as Ge}from"./Pagination-DszfYxa0.js";import{S as _e}from"./Spinner-BsbG08Az.js";import{E as Ae}from"./EmptyState-B0BkQvJ3.js";import{u as U}from"./useTranslation-BONq47qB.js";import{B as ge}from"./Badge-BhZOzjNC.js";import{B as Y}from"./Button-D3SwmJug.js";import{I as ee}from"./Icon-FTO_0HBc.js";function qe(e,r){return!r||e==="none"?"asc":e==="asc"?"desc":"none"}function l({columns:e,rows:r,loading:s=!1,selection:a=!1,selectedRowKeys:d=[],onSelectionChange:c,rowKey:y="id",sortConfig:u,onSort:x,pagination:_,loadMore:m,striped:v=!1,bordered:D=!1,hoverable:te=!0,stickyHeader:k=!1,height:C,maxHeight:ne,mobileCard:re=!1,className:ae,emptyMessage:Z,a11y_select_all_rows:J}){const{t:se}=U(["components","common"]),oe=Z??se("datagrid_empty"),we=J??se("a11y_select_all_rows"),[S,T]=g.useState({row:-1,col:a?-1:0}),ye=g.useRef(null),ie=g.useRef(null);g.useEffect(()=>{if(!m||!m.hasMore||m.loading)return;const n=new IntersectionObserver(o=>{o[0].isIntersecting&&m.onLoadMore()},{threshold:m.threshold||.1});return ie.current&&n.observe(ie.current),()=>n.disconnect()},[m]);const pe=n=>typeof y=="function"?y(n):n[y],xe=n=>{c&&c(n?r.map(o=>pe(o)):[])},Se=(n,o)=>{c&&c(o?[...d,n]:d.filter(p=>p!==n))},ke=n=>{if(!x)return;const o=qe(u?.direction||"none",u?.key===n);x(n,o)},be=r.length>0&&d.length===r.length,ve=d.length>0&&d.length<r.length,de=D?1:0,ce={};let le=a?48+de:0,De=20;e.forEach(n=>{if(n.fixed===!0||n.fixed==="left"){ce[n.key]={offset:le===0?0:`${le}px`,zIndex:De--};let o=0;typeof n.width=="number"?o=n.width:typeof n.width=="string"&&n.width.endsWith("px")&&(o=parseInt(n.width,10)),le+=o+de}});const ue={};let me=0,Re=20;[...e].reverse().forEach(n=>{if(n.fixed==="right"){ue[n.key]={offset:me===0?0:`${me}px`,zIndex:Re--};let o=0;typeof n.width=="number"?o=n.width:typeof n.width=="string"&&n.width.endsWith("px")&&(o=parseInt(n.width,10)),me+=o+de}});const Ce=n=>{const{row:o,col:p}=S;let h=o,i=p;const f=a?-1:0,j=e.length-1,z=-1,G=r.length-1;switch(n.key){case"ArrowRight":p<j&&i++;break;case"ArrowLeft":p>f&&i--;break;case"ArrowDown":o<G&&h++;break;case"ArrowUp":o>z&&h--;break;case"Home":n.ctrlKey&&(h=z),i=f;break;case"End":n.ctrlKey&&(h=G),i=j;break;case"Enter":case" ":{const R=document.activeElement;if(R?.getAttribute("role")==="columnheader")return;if(R?.classList.contains("wim-table__cell")){const A=R.querySelector('input, button, [role="button"]');A&&(A.click(),n.preventDefault())}return}default:return}(h!==o||i!==p)&&(n.preventDefault(),T({row:h,col:i}),setTimeout(()=>{ye.current?.querySelector(`[data-row="${h}"][data-col="${i}"]`)?.focus()},0))};return t.jsxs("div",{ref:ye,className:je("wim-datagrid",s&&"wim-datagrid--loading",ae),role:"grid",tabIndex:0,onKeyDown:Ce,children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(Ie,{striped:v,bordered:D,hoverable:te,stickyHeader:k,fullWidth:!0,height:C,maxHeight:ne,mobileCard:re,children:[t.jsx(Te,{children:t.jsxs(Q,{children:[a&&t.jsx(he,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:k?121:21,"data-row":-1,"data-col":-1,tabIndex:S.row===-1&&S.col===-1?0:-1,onFocus:()=>T({row:-1,col:-1}),children:t.jsx(fe,{checked:be,indeterminate:ve,onChange:n=>xe(n.target.checked),"aria-label":we,tabIndex:-1})}),e.map((n,o)=>{const p=n.fixed===!0||n.fixed==="left",h=n.fixed==="right",i=p?ce[n.key]:void 0,f=h?ue[n.key]:void 0;return t.jsx(he,{style:{width:n.width,minWidth:n.width,maxWidth:n.width,textAlign:n.align},sortable:n.sortable,sortDirection:u?.key===n.key?u.direction:"none",onSort:()=>ke(n.key),stickyLeft:p,leftOffset:i?.offset,stickyRight:h,rightOffset:f?.offset,stickyZIndex:i?k?i.zIndex+100:i.zIndex:f?k?f.zIndex+100:f.zIndex:void 0,"data-row":-1,"data-col":o,tabIndex:S.row===-1&&S.col===o?0:-1,onFocus:()=>T({row:-1,col:o}),children:n.header},n.key)})]})}),t.jsxs(ze,{children:[r.length===0&&!s?t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(a?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof oe=="string"?t.jsx(Ae,{title:"No Data",description:oe}):oe})})}):r.map((n,o)=>{const p=pe(n),h=d.includes(p);return t.jsxs(Q,{selected:h,children:[a&&t.jsx(X,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,"data-row":o,"data-col":-1,tabIndex:S.row===o&&S.col===-1?0:-1,onFocus:()=>T({row:o,col:-1}),children:t.jsx(fe,{checked:h,onChange:i=>Se(p,i.target.checked),"aria-label":se("datagrid_select_row",{index:o+1}),tabIndex:-1})}),e.map((i,f)=>{const j=i.dataIndex?n[i.dataIndex]:n[i.key],z=i.fixed===!0||i.fixed==="left",G=i.fixed==="right",R=z?ce[i.key]:void 0,A=G?ue[i.key]:void 0;return t.jsx(X,{style:{minWidth:i.width,maxWidth:i.width,textAlign:i.align},label:typeof i.header=="string"?i.header:void 0,stickyLeft:z,leftOffset:R?.offset,stickyRight:G,rightOffset:A?.offset,stickyZIndex:R?.zIndex||A?.zIndex,"data-row":o,"data-col":f,tabIndex:S.row===o&&S.col===f?0:-1,onFocus:()=>T({row:o,col:f}),children:i.render?i.render(j,n,o):j},i.key)})]},p)}),m&&m.hasMore&&t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(a?1:0),children:t.jsx("div",{ref:ie,className:"wim-datagrid__loader",children:m.loading&&t.jsx(_e,{size:"small"})})})})]})]}),s&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(_e,{size:"large"})})]}),_&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(Ge,{total:_.total,pageSize:_.pageSize,current:_.current,onChange:_.onPageChange})})]})}l.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  onLoadMore: () => void;\r
  hasMore: boolean;\r
  loading: boolean;\r
  threshold?: number;\r
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const Pe={title:"Components/Data Structures/DataGrid",component:l,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],b=Array.from({length:50}).map((e,r)=>({id:r+1,name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":r%2===0?"Editor":"User",status:r%3===0?"Active":r%2===0?"Inactive":"Pending",joinDate:`2024-${String(r%12+1).padStart(2,"0")}-${String(r%28+1).padStart(2,"0")}`})),We=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>t.jsx(ge,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],w=()=>{const{t:e}=U(["docs","common","components"]),r=We.map(a=>({...a,header:typeof a.header=="string"?e(`story_datagrid_col_${a.key}`):a.header,render:a.key==="status"?d=>{const c=e(d==="Active"?"story_datagrid_status_active":d==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ge,{content:c,size:"small",color:d==="Active"?"primary":d==="Inactive"?"neutral":"secondary"})}:a.render}));return{t:e,tColumns:r,tSampleData:I}},q={render:e=>{const{tColumns:r,tSampleData:s}=w(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{bordered:!0}},P={render:()=>{const{t:e,tColumns:r,tSampleData:s}=w(),[a,d]=g.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),a.join(", ")]}),t.jsx(l,{columns:r,rows:s,selection:!0,selectedRowKeys:a,onSelectionChange:d,bordered:!0})]})}},W={render:()=>{const{tColumns:e}=w(),[r,s]=g.useState({key:"id",direction:"none"}),[a,d]=g.useState(I),c=(y,u)=>{if(s({key:y,direction:u}),u==="none")d(I);else{const x=[...a].sort((_,m)=>{const v=_[y],D=m[y];return String(v)<String(D)?u==="asc"?-1:1:String(v)>String(D)?u==="asc"?1:-1:0});d(x)}};return t.jsx(l,{columns:e,rows:a,sortConfig:r,onSort:c,bordered:!0})}},V={render:()=>{const{tColumns:e}=w(),[r,s]=g.useState(1),a=10,d=(r-1)*a,c=d+a,y=b.slice(d,c);return t.jsx(l,{columns:e,rows:y,pagination:{total:b.length,pageSize:a,current:r,onPageChange:s},bordered:!0})}},K={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),r=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(s,a)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(Y,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:a.name})),children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:a.name})),children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:r,rows:I,bordered:!0})}},L={render:e=>{const{tColumns:r,tSampleData:s}=w(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{loading:!0,bordered:!0}},E={render:e=>{const{t:r,tColumns:s,tSampleData:a}=w(),d=a;return t.jsx(l,{...e,columns:s,rows:d,emptyMessage:r("story_datagrid_empty")})},args:{bordered:!0}},B={render:e=>{const{tColumns:r,tSampleData:s}=w(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{striped:!0,bordered:!0}},M={render:e=>{const{tColumns:r,tSampleData:s}=w(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{bordered:!0}},H={render:e=>{const{tColumns:r}=w(),s=b;return t.jsx(l,{...e,columns:r,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},F={render:()=>{const{tColumns:e}=w(),[r,s]=g.useState([]),[a,d]=g.useState(1),[c,y]=g.useState({key:"id",direction:"none"}),[u,x]=g.useState(b),_=(k,C)=>{if(y({key:k,direction:C}),C==="none")x(b);else{const ne=[...u].sort((re,ae)=>{const Z=re[k],J=ae[k];return String(Z)<String(J)?C==="asc"?-1:1:String(Z)>String(J)?C==="asc"?1:-1:0});x(ne)}},m=10,v=(a-1)*m,D=v+m,te=u.slice(v,D);return t.jsx("div",{children:t.jsx(l,{columns:e,rows:te,selection:!0,selectedRowKeys:r,onSelectionChange:s,sortConfig:c,onSort:_,pagination:{total:u.length,pageSize:m,current:a,onPageChange:d},striped:!0,hoverable:!0,bordered:!0})})}},O={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),r=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:s=>{const a=e(s==="Active"?"story_datagrid_status_active":s==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ge,{content:a,size:"small",color:s==="Active"?"primary":s==="Inactive"?"neutral":"secondary"})}}];return t.jsx(l,{columns:r,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},N={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),r=[{key:"id",header:e("story_datagrid_col_id"),width:55},{key:"name",header:e("story_datagrid_col_name"),width:150},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"actions",header:e("story_datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(s,a)=>t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[t.jsx(Y,{size:"small",priority:"tertiary",children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:r,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},$={render:()=>{const{tColumns:e}=w(),[r,s]=g.useState(b.slice(0,15)),[a,d]=g.useState(!1),[c,y]=g.useState(!0),u=()=>{a||(d(!0),setTimeout(()=>{const x=b.slice(r.length,r.length+15);s(_=>[..._,...x]),r.length+x.length>=b.length&&y(!1),d(!1)},1e3))};return t.jsx(l,{columns:e,rows:r,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:u,hasMore:c,loading:a}})}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...q.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    return <DataGrid columns={tColumns} rows={data as unknown as Record<string, unknown>[]} sortConfig={sortConfig} onSort={handleSort} bordered />;
  }
}`,...W.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);
    return <DataGrid columns={tColumns} rows={currentData as unknown as Record<string, unknown>[]} pagination={{
      total: manyRows.length,
      pageSize,
      current: currentPage,
      onPageChange: setCurrentPage
    }} bordered />;
  }
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [{
      key: "id",
      header: t("story_datagrid_col_id"),
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: t("story_datagrid_col_name"),
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: t("story_datagrid_col_email"),
      width: 200
    }, {
      key: "actions",
      header: t("story_datagrid_col_actions"),
      width: 100,
      render: (_: unknown, row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px"
      }}>\r
            <Button size="small" priority="tertiary" onClick={() => alert(t("story_datagrid_action_edit", {
          name: row.name
        }))}>\r
              <Icon name="EditIcon" size="small" />\r
            </Button>\r
            {}\r
            <Button size="small" priority="tertiary"
        // eslint-disable-next-line jsx-a11y/aria-role
        role="destructive" onClick={() => alert(t("story_datagrid_action_delete", {
          name: row.name
        }))}>\r
              <Icon name="TrashIcon" size="small" />\r
            </Button>\r
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} bordered />;
  }
}`,...K.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} />;
  },
  args: {
    loading: true,
    bordered: true
  }
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} emptyMessage={t('story_datagrid_empty')} />;
  },
  args: {
    bordered: true
  }
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} />;
  },
  args: {
    striped: true,
    bordered: true
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...M.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns
    } = useDataGridTranslations();
    const rows = manyRows as unknown as Record<string, unknown>[];
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} />;
  },
  args: {
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true
  }
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
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
    return <div>\r
        <DataGrid columns={tColumns} rows={currentData as unknown as Record<string, unknown>[]} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onPageChange: setCurrentPage
      }} striped hoverable bordered />\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [{
      key: "id",
      header: t("story_datagrid_col_id"),
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: t("story_datagrid_col_name"),
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: t("story_datagrid_col_email"),
      width: 200
    }, {
      key: "role",
      header: t("story_datagrid_col_role"),
      width: 100
    }, {
      key: "joinDate",
      header: t("story_datagrid_col_joinDate"),
      width: 150
    }, {
      key: "status",
      header: t("story_datagrid_col_status"),
      width: 100,
      render: (value: unknown) => {
        const translatedValue = value === "Active" ? t("story_datagrid_status_active") : value === "Inactive" ? t("story_datagrid_status_inactive") : t("story_datagrid_status_pending");
        return <Badge content={translatedValue} size="small" color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"} />;
      }
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} selection bordered />;
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>\r
        <Story />\r
      </div>]
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [{
      key: "id",
      header: t("story_datagrid_col_id"),
      width: 55
    }, {
      key: "name",
      header: t("story_datagrid_col_name"),
      width: 150
    }, {
      key: "email",
      header: t("story_datagrid_col_email"),
      width: 200
    }, {
      key: "role",
      header: t("story_datagrid_col_role"),
      width: 100
    }, {
      key: "joinDate",
      header: t("story_datagrid_col_joinDate"),
      width: 150
    }, {
      key: "actions",
      header: t("story_datagrid_col_actions"),
      width: 120,
      fixed: "right" as const,
      align: "center" as const,
      render: (_: unknown, _row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center"
      }}>\r
            <Button size="small" priority="tertiary">\r
              <Icon name="EditIcon" size="small" />\r
            </Button>\r
            {/* eslint-disable-next-line jsx-a11y/aria-role */}\r
            <Button size="small" priority="tertiary" role="destructive">\r
              <Icon name="TrashIcon" size="small" />\r
            </Button>\r
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} selection bordered />;
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>\r
        <Story />\r
      </div>]
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    return <DataGrid columns={tColumns} rows={data as unknown as Record<string, unknown>[]} bordered stickyHeader maxHeight="400px" loadMore={{
      onLoadMore: loadMoreData,
      hasMore,
      loading
    }} />;
  }
}`,...$.parameters?.docs?.source}}};const Ve=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Je=Object.freeze(Object.defineProperty({__proto__:null,Bordered:M,Default:q,Empty:E,FullFeatured:F,InfiniteScroll:$,Loading:L,StickyHeader:H,Striped:B,WithActions:K,WithFixedColumn:O,WithPagination:V,WithRightFixedColumn:N,WithSelection:P,WithSorting:W,__namedExportsOrder:Ve,default:Pe},Symbol.toStringTag,{value:"Module"}));export{M as B,Je as D,E,F,L,B as S,P as W,W as a,V as b,K as c,H as d,O as e};
