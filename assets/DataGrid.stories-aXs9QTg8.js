import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-DtwnyzFc.js";import{c as Re}from"./index-DWTvJvSx.js";import{T as Ie,a as Te,b as Q,c as he,d as ze,e as X}from"./Table-Dg-If7eJ.js";import{C as fe}from"./Checkbox-DgcV6oOE.js";import{P as Ae}from"./Pagination-C3PyUXQD.js";import{S as _e}from"./Spinner-tl5G0n53.js";import{E as qe}from"./EmptyState-BhLrCDmP.js";import{u as U}from"./useTranslation-BJQcmf5i.js";import{B as ye}from"./Badge-CAHEyuou.js";import{B as Y}from"./Button-CE01zq8d.js";import{I as ee}from"./Icon-CPLASYuL.js";function Ge(e,n){return!n||e==="none"?"asc":e==="asc"?"desc":"none"}function l({columns:e,rows:n,loading:s=!1,selection:r=!1,selectedRowKeys:d=[],onSelectionChange:c,rowKey:g="id",sortConfig:u,onSort:x,pagination:_,loadMore:m,striped:D=!1,bordered:k=!1,hoverable:te=!0,stickyHeader:S=!1,height:j,maxHeight:ae,mobileCard:ne=!1,className:re,emptyMessage:Z,a11y_select_all_rows:J}){const{t:se}=U(["components","common"]),oe=Z??se("datagrid_empty"),we=J??se("a11y_select_all_rows"),[b,T]=y.useState({row:-1,col:r?-1:0}),ge=y.useRef(null),ie=y.useRef(null);y.useEffect(()=>{if(!m||!m.hasMore||m.loading)return;const a=new IntersectionObserver(o=>{o[0].isIntersecting&&m.onLoadMore()},{threshold:m.threshold||.1});return ie.current&&a.observe(ie.current),()=>a.disconnect()},[m]);const pe=a=>typeof g=="function"?g(a):a[g],xe=a=>{c&&c(a?n.map(o=>pe(o)):[])},be=(a,o)=>{c&&c(o?[...d,a]:d.filter(p=>p!==a))},Se=a=>{if(!x)return;const o=Ge(u?.direction||"none",u?.key===a);x(a,o)},ve=n.length>0&&d.length===n.length,De=d.length>0&&d.length<n.length,de=k?1:0,ce={};let le=r?48+de:0,ke=20;e.forEach(a=>{if(a.fixed===!0||a.fixed==="left"){ce[a.key]={offset:le===0?0:`${le}px`,zIndex:ke--};let o=0;typeof a.width=="number"?o=a.width:typeof a.width=="string"&&a.width.endsWith("px")&&(o=parseInt(a.width,10)),le+=o+de}});const ue={};let me=0,Ce=20;[...e].reverse().forEach(a=>{if(a.fixed==="right"){ue[a.key]={offset:me===0?0:`${me}px`,zIndex:Ce--};let o=0;typeof a.width=="number"?o=a.width:typeof a.width=="string"&&a.width.endsWith("px")&&(o=parseInt(a.width,10)),me+=o+de}});const je=a=>{const{row:o,col:p}=b;let h=o,i=p;const f=r?-1:0,R=e.length-1,z=-1,A=n.length-1;switch(a.key){case"ArrowRight":p<R&&i++;break;case"ArrowLeft":p>f&&i--;break;case"ArrowDown":o<A&&h++;break;case"ArrowUp":o>z&&h--;break;case"Home":a.ctrlKey&&(h=z),i=f;break;case"End":a.ctrlKey&&(h=A),i=R;break;case"Enter":case" ":{const C=document.activeElement;if(C?.getAttribute("role")==="columnheader")return;if(C?.classList.contains("wim-table__cell")){const q=C.querySelector('input, button, [role="button"]');q&&(q.click(),a.preventDefault())}return}default:return}(h!==o||i!==p)&&(a.preventDefault(),T({row:h,col:i}),setTimeout(()=>{ge.current?.querySelector(`[data-row="${h}"][data-col="${i}"]`)?.focus()},0))};return t.jsxs("div",{ref:ge,className:Re("wim-datagrid",s&&"wim-datagrid--loading",re),role:"grid",tabIndex:0,onKeyDown:je,children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(Ie,{striped:D,bordered:k,hoverable:te,stickyHeader:S,fullWidth:!0,height:j,maxHeight:ae,mobileCard:ne,children:[t.jsx(Te,{children:t.jsxs(Q,{children:[r&&t.jsx(he,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:S?121:21,"data-row":-1,"data-col":-1,tabIndex:b.row===-1&&b.col===-1?0:-1,onFocus:()=>T({row:-1,col:-1}),children:t.jsx(fe,{checked:ve,indeterminate:De,onChange:a=>xe(a.target.checked),"aria-label":we,tabIndex:-1})}),e.map((a,o)=>{const p=a.fixed===!0||a.fixed==="left",h=a.fixed==="right",i=p?ce[a.key]:void 0,f=h?ue[a.key]:void 0;return t.jsx(he,{style:{width:a.width,minWidth:a.width,maxWidth:a.width,textAlign:a.align},sortable:a.sortable,sortDirection:u?.key===a.key?u.direction:"none",onSort:()=>Se(a.key),stickyLeft:p,leftOffset:i?.offset,stickyRight:h,rightOffset:f?.offset,stickyZIndex:i?S?i.zIndex+100:i.zIndex:f?S?f.zIndex+100:f.zIndex:void 0,"data-row":-1,"data-col":o,tabIndex:b.row===-1&&b.col===o?0:-1,onFocus:()=>T({row:-1,col:o}),children:a.header},a.key)})]})}),t.jsxs(ze,{children:[n.length===0&&!s?t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(r?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof oe=="string"?t.jsx(qe,{title:"No Data",description:oe}):oe})})}):n.map((a,o)=>{const p=pe(a),h=d.includes(p);return t.jsxs(Q,{selected:h,children:[r&&t.jsx(X,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,"data-row":o,"data-col":-1,tabIndex:b.row===o&&b.col===-1?0:-1,onFocus:()=>T({row:o,col:-1}),children:t.jsx(fe,{checked:h,onChange:i=>be(p,i.target.checked),"aria-label":se("datagrid_select_row",{index:o+1}),tabIndex:-1})}),e.map((i,f)=>{const R=i.dataIndex?a[i.dataIndex]:a[i.key],z=i.fixed===!0||i.fixed==="left",A=i.fixed==="right",C=z?ce[i.key]:void 0,q=A?ue[i.key]:void 0;return t.jsx(X,{style:{minWidth:i.width,maxWidth:i.width,textAlign:i.align},label:typeof i.header=="string"?i.header:void 0,stickyLeft:z,leftOffset:C?.offset,stickyRight:A,rightOffset:q?.offset,stickyZIndex:C?.zIndex||q?.zIndex,"data-row":o,"data-col":f,tabIndex:b.row===o&&b.col===f?0:-1,onFocus:()=>T({row:o,col:f}),children:i.render?i.render(R,a,o):R},i.key)})]},p)}),m&&m.hasMore&&t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(r?1:0),children:t.jsx("div",{ref:ie,className:"wim-datagrid__loader",children:m.loading&&t.jsx(_e,{size:"small"})})})})]})]}),s&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(_e,{size:"large"})})]}),_&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(Ae,{total:_.total,pageSize:_.pageSize,current:_.current,onChange:_.onPageChange})})]})}l.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  onLoadMore: () => void;\r
  hasMore: boolean;\r
  loading: boolean;\r
  threshold?: number;\r
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const We={title:"Components/Data Structures/DataGrid",component:l,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],v=Array.from({length:50}).map((e,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:n%3===0?"Admin":n%2===0?"Editor":"User",status:n%3===0?"Active":n%2===0?"Inactive":"Pending",joinDate:`2024-${String(n%12+1).padStart(2,"0")}-${String(n%28+1).padStart(2,"0")}`})),Pe=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>t.jsx(ye,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],w=()=>{const{t:e}=U(["docs","common","components"]),n=Pe.map(r=>({...r,header:typeof r.header=="string"?e(`story_datagrid_col_${r.key}`):r.header,render:r.key==="status"?d=>{const c=e(d==="Active"?"story_datagrid_status_active":d==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ye,{content:c,size:"small",color:d==="Active"?"primary":d==="Inactive"?"neutral":"secondary"})}:r.render}));return{t:e,tColumns:n,tSampleData:I}},G={render:e=>{const{tColumns:n,tSampleData:s}=w(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{bordered:!0}},W={render:()=>{const{t:e,tColumns:n,tSampleData:s}=w(),[r,d]=y.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),r.join(", ")]}),t.jsx(l,{columns:n,rows:s,selection:!0,selectedRowKeys:r,onSelectionChange:d,bordered:!0})]})}},P={render:()=>{const{tColumns:e}=w(),[n,s]=y.useState({key:"id",direction:"none"}),[r,d]=y.useState(I),c=(g,u)=>{if(s({key:g,direction:u}),u==="none")d(I);else{const x=[...r].sort((_,m)=>{const D=_[g],k=m[g];return D<k?u==="asc"?-1:1:D>k?u==="asc"?1:-1:0});d(x)}};return t.jsx(l,{columns:e,rows:r,sortConfig:n,onSort:c,bordered:!0})}},V={render:()=>{const{tColumns:e}=w(),[n,s]=y.useState(1),r=10,d=(n-1)*r,c=d+r,g=v.slice(d,c);return t.jsx(l,{columns:e,rows:g,pagination:{total:v.length,pageSize:r,current:n,onPageChange:s},bordered:!0})}},K={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(s,r)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(Y,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:r.name})),children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:r.name})),children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:n,rows:I,bordered:!0})}},L={render:e=>{const{tColumns:n,tSampleData:s}=w(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{loading:!0,bordered:!0}},E={render:e=>{const{t:n,tColumns:s,tSampleData:r}=w(),d=r;return t.jsx(l,{...e,columns:s,rows:d,emptyMessage:n("story_datagrid_empty")})},args:{bordered:!0}},B={render:e=>{const{tColumns:n,tSampleData:s}=w(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{striped:!0,bordered:!0}},M={render:e=>{const{tColumns:n,tSampleData:s}=w(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{bordered:!0}},H={render:e=>{const{tColumns:n}=w(),s=v;return t.jsx(l,{...e,columns:n,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},F={render:()=>{const{tColumns:e}=w(),[n,s]=y.useState([]),[r,d]=y.useState(1),[c,g]=y.useState({key:"id",direction:"none"}),[u,x]=y.useState(v),_=(S,j)=>{if(g({key:S,direction:j}),j==="none")x(v);else{const ae=[...u].sort((ne,re)=>{const Z=ne[S],J=re[S];return Z<J?j==="asc"?-1:1:Z>J?j==="asc"?1:-1:0});x(ae)}},m=10,D=(r-1)*m,k=D+m,te=u.slice(D,k);return t.jsx("div",{children:t.jsx(l,{columns:e,rows:te,selection:!0,selectedRowKeys:n,onSelectionChange:s,sortConfig:c,onSort:_,pagination:{total:u.length,pageSize:m,current:r,onPageChange:d},striped:!0,hoverable:!0,bordered:!0})})}},O={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:s=>{const r=e(s==="Active"?"story_datagrid_status_active":s==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ye,{content:r,size:"small",color:s==="Active"?"primary":s==="Inactive"?"neutral":"secondary"})}}];return t.jsx(l,{columns:n,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},N={render:()=>{const{t:e}=U(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55},{key:"name",header:e("story_datagrid_col_name"),width:150},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"actions",header:e("story_datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(s,r)=>t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[t.jsx(Y,{size:"small",priority:"tertiary",children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:n,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},$={render:()=>{const{tColumns:e}=w(),[n,s]=y.useState(v.slice(0,15)),[r,d]=y.useState(!1),[c,g]=y.useState(!0),u=()=>{r||(d(!0),setTimeout(()=>{const x=v.slice(n.length,n.length+15);s(_=>[..._,...x]),n.length+x.length>=v.length&&g(!1),d(!1)},1e3))};return t.jsx(l,{columns:e,rows:n,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:u,hasMore:c,loading:r}})}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...G.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
        <DataGrid columns={tColumns} rows={tSampleData as any} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} bordered />\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    return <DataGrid columns={tColumns} rows={data as any} sortConfig={sortConfig} onSort={handleSort} bordered />;
  }
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      tColumns
    } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);
    return <DataGrid columns={tColumns} rows={currentData as any} pagination={{
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
      render: (_: any, row: Record<string, any>) => <div style={{
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
    return <DataGrid columns={columns} rows={sampleData} bordered />;
  }
}`,...K.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
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
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
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
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true
  }
}`,...M.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      tColumns
    } = useDataGridTranslations();
    const rows = manyRows;
    return <DataGrid {...args as any} columns={tColumns} rows={rows} />;
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
        <DataGrid columns={tColumns} rows={currentData as any} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
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
      render: (value: any) => {
        const translatedValue = value === "Active" ? t("story_datagrid_status_active") : value === "Inactive" ? t("story_datagrid_status_inactive") : t("story_datagrid_status_pending");
        return <Badge content={translatedValue} size="small" color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"} />;
      }
    }];
    return <DataGrid columns={columns} rows={sampleData as any} selection bordered />;
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
      render: (_: any, _row: Record<string, any>) => <div style={{
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
    return <DataGrid columns={columns} rows={sampleData as any} selection bordered />;
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
    return <DataGrid columns={tColumns} rows={data as any} bordered stickyHeader maxHeight="400px" loadMore={{
      onLoadMore: loadMoreData,
      hasMore,
      loading
    }} />;
  }
}`,...$.parameters?.docs?.source}}};const Ve=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Je=Object.freeze(Object.defineProperty({__proto__:null,Bordered:M,Default:G,Empty:E,FullFeatured:F,InfiniteScroll:$,Loading:L,StickyHeader:H,Striped:B,WithActions:K,WithFixedColumn:O,WithPagination:V,WithRightFixedColumn:N,WithSelection:W,WithSorting:P,__namedExportsOrder:Ve,default:We},Symbol.toStringTag,{value:"Module"}));export{M as B,Je as D,E,F,L,B as S,W,P as a,V as b,K as c,H as d,O as e};
