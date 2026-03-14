import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-DC3HBgeO.js";import{c as Ie}from"./index-Cpe1KNws.js";import{T as Te,a as Ae,b as Q,c as fe,d as ze,e as X}from"./Table-DZnFfX_o.js";import{C as we}from"./Checkbox-B7ZaJ21n.js";import{P as Ge}from"./Pagination-42Vx65e1.js";import{S as _e}from"./Spinner-BQKMCAUR.js";import{E as Pe}from"./EmptyState-aEGWeblp.js";import{u as U}from"./useTranslation-rn74mnfg.js";import{B as ye}from"./Badge-x83YaEUD.js";import{B as Y}from"./Button-B9p7lEzJ.js";import{I as ee}from"./Icon-Bl8N_3yh.js";import{A as te}from"./i18nConstants-BpHxieg5.js";function qe(e,r){return!r||e==="none"?"asc":e==="asc"?"desc":"none"}function l({columns:e,rows:r,loading:s=!1,selection:a=!1,selectedRowKeys:d=[],onSelectionChange:c,rowKey:y="id",sortConfig:u,onSort:x,pagination:w,loadMore:m,striped:D=!1,bordered:v=!1,hoverable:ne=!0,stickyHeader:k=!1,height:R,maxHeight:re,mobileCard:ae=!1,className:se,emptyMessage:Z,a11y_select_all_rows:J}){const{t:oe}=U(["components","common"]),ie=Z??oe("datagrid_empty"),xe=J??oe("a11y_select_all_rows"),[S,T]=g.useState({row:-1,col:a?-1:0}),he=g.useRef(null),de=g.useRef(null);g.useEffect(()=>{if(!m||!m.hasMore||m.loading)return;const n=new IntersectionObserver(o=>{o[0].isIntersecting&&m.onLoadMore()},{threshold:m.threshold||.1});return de.current&&n.observe(de.current),()=>n.disconnect()},[m]);const pe=n=>typeof y=="function"?y(n):n[y],Se=n=>{c&&c(n?r.map(o=>pe(o)):[])},ke=(n,o)=>{c&&c(o?[...d,n]:d.filter(h=>h!==n))},be=n=>{if(!x)return;const o=qe(u?.direction||"none",u?.key===n);x(n,o)},De=r.length>0&&d.length===r.length,ve=d.length>0&&d.length<r.length,ce=v?1:0,le={};let ue=a?48+ce:0,Ce=20;e.forEach(n=>{if(n.fixed===!0||n.fixed==="left"){le[n.key]={offset:ue===0?0:`${ue}px`,zIndex:Ce--};let o=0;typeof n.width=="number"?o=n.width:typeof n.width=="string"&&n.width.endsWith("px")&&(o=parseInt(n.width,10)),ue+=o+ce}});const me={};let ge=0,Re=20;[...e].reverse().forEach(n=>{if(n.fixed==="right"){me[n.key]={offset:ge===0?0:`${ge}px`,zIndex:Re--};let o=0;typeof n.width=="number"?o=n.width:typeof n.width=="string"&&n.width.endsWith("px")&&(o=parseInt(n.width,10)),ge+=o+ce}});const je=n=>{const{row:o,col:h}=S;let p=o,i=h;const f=a?-1:0,j=e.length-1,A=-1,z=r.length-1;switch(n.key){case"ArrowRight":h<j&&i++;break;case"ArrowLeft":h>f&&i--;break;case"ArrowDown":o<z&&p++;break;case"ArrowUp":o>A&&p--;break;case"Home":n.ctrlKey&&(p=A),i=f;break;case"End":n.ctrlKey&&(p=z),i=j;break;case"Enter":case" ":{const C=document.activeElement;if(C?.getAttribute("role")==="columnheader")return;if(C?.classList.contains("wim-table__cell")){const G=C.querySelector('input, button, [role="button"]');G&&(G.click(),n.preventDefault())}return}default:return}(p!==o||i!==h)&&(n.preventDefault(),T({row:p,col:i}),setTimeout(()=>{he.current?.querySelector(`[data-row="${p}"][data-col="${i}"]`)?.focus()},0))};return t.jsxs("div",{ref:he,className:Ie("wim-datagrid",s&&"wim-datagrid--loading",se),role:"grid",tabIndex:0,onKeyDown:je,children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(Te,{striped:D,bordered:v,hoverable:ne,stickyHeader:k,fullWidth:!0,height:R,maxHeight:re,mobileCard:ae,children:[t.jsx(Ae,{children:t.jsxs(Q,{children:[a&&t.jsx(fe,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:k?121:21,"data-row":-1,"data-col":-1,tabIndex:S.row===-1&&S.col===-1?0:-1,onFocus:()=>T({row:-1,col:-1}),children:t.jsx(we,{checked:De,indeterminate:ve,onChange:n=>Se(n.target.checked),"aria-label":xe,tabIndex:-1})}),e.map((n,o)=>{const h=n.fixed===!0||n.fixed==="left",p=n.fixed==="right",i=h?le[n.key]:void 0,f=p?me[n.key]:void 0;return t.jsx(fe,{style:{width:n.width,minWidth:n.width,maxWidth:n.width,textAlign:n.align},sortable:n.sortable,sortDirection:u?.key===n.key?u.direction:"none",onSort:()=>be(n.key),stickyLeft:h,leftOffset:i?.offset,stickyRight:p,rightOffset:f?.offset,stickyZIndex:i?k?i.zIndex+100:i.zIndex:f?k?f.zIndex+100:f.zIndex:void 0,"data-row":-1,"data-col":o,tabIndex:S.row===-1&&S.col===o?0:-1,onFocus:()=>T({row:-1,col:o}),children:n.header},n.key)})]})}),t.jsxs(ze,{children:[r.length===0&&!s?t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(a?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof ie=="string"?t.jsx(Pe,{title:"No Data",description:ie}):ie})})}):r.map((n,o)=>{const h=pe(n),p=d.includes(h);return t.jsxs(Q,{selected:p,children:[a&&t.jsx(X,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,"data-row":o,"data-col":-1,tabIndex:S.row===o&&S.col===-1?0:-1,onFocus:()=>T({row:o,col:-1}),children:t.jsx(we,{checked:p,onChange:i=>ke(h,i.target.checked),"aria-label":oe("datagrid_select_row",{index:o+1}),tabIndex:-1})}),e.map((i,f)=>{const j=i.dataIndex?n[i.dataIndex]:n[i.key],A=i.fixed===!0||i.fixed==="left",z=i.fixed==="right",C=A?le[i.key]:void 0,G=z?me[i.key]:void 0;return t.jsx(X,{style:{minWidth:i.width,maxWidth:i.width,textAlign:i.align},label:typeof i.header=="string"?i.header:void 0,stickyLeft:A,leftOffset:C?.offset,stickyRight:z,rightOffset:G?.offset,stickyZIndex:C?.zIndex||G?.zIndex,"data-row":o,"data-col":f,tabIndex:S.row===o&&S.col===f?0:-1,onFocus:()=>T({row:o,col:f}),children:i.render?i.render(j,n,o):j},i.key)})]},h)}),m&&m.hasMore&&t.jsx(Q,{children:t.jsx(X,{colSpan:e.length+(a?1:0),children:t.jsx("div",{ref:de,className:"wim-datagrid__loader",children:m.loading&&t.jsx(_e,{size:"small"})})})})]})]}),s&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(_e,{size:"large"})})]}),w&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(Ge,{total:w.total,pageSize:w.pageSize,current:w.current,onChange:w.onPageChange})})]})}l.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  onLoadMore: () => void;\r
  hasMore: boolean;\r
  loading: boolean;\r
  threshold?: number;\r
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const Le={title:"Components/Data Structures/DataGrid",component:l,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],b=Array.from({length:50}).map((e,r)=>({id:r+1,name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":r%2===0?"Editor":"User",status:r%3===0?"Active":r%2===0?"Inactive":"Pending",joinDate:`2024-${String(r%12+1).padStart(2,"0")}-${String(r%28+1).padStart(2,"0")}`})),We=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>t.jsx(ye,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],_=()=>{const{t:e}=U(te),r=We.map(a=>({...a,header:typeof a.header=="string"?e(`story_datagrid_col_${a.key}`):a.header,render:a.key==="status"?d=>{const c=e(d==="Active"?"story_datagrid_status_active":d==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ye,{content:c,size:"small",color:d==="Active"?"primary":d==="Inactive"?"neutral":"secondary"})}:a.render}));return{t:e,tColumns:r,tSampleData:I}},P={render:e=>{const{tColumns:r,tSampleData:s}=_(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{bordered:!0}},q={render:()=>{const{t:e,tColumns:r,tSampleData:s}=_(),[a,d]=g.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),a.join(", ")]}),t.jsx(l,{columns:r,rows:s,selection:!0,selectedRowKeys:a,onSelectionChange:d,bordered:!0})]})}},L={render:()=>{const{tColumns:e}=_(),[r,s]=g.useState({key:"id",direction:"none"}),[a,d]=g.useState(I),c=(y,u)=>{if(s({key:y,direction:u}),u==="none")d(I);else{const x=[...a].sort((w,m)=>{const D=w[y],v=m[y];return String(D)<String(v)?u==="asc"?-1:1:String(D)>String(v)?u==="asc"?1:-1:0});d(x)}};return t.jsx(l,{columns:e,rows:a,sortConfig:r,onSort:c,bordered:!0})}},W={render:()=>{const{tColumns:e}=_(),[r,s]=g.useState(1),a=10,d=(r-1)*a,c=d+a,y=b.slice(d,c);return t.jsx(l,{columns:e,rows:y,pagination:{total:b.length,pageSize:a,current:r,onPageChange:s},bordered:!0})}},E={render:()=>{const{t:e}=U(te),r=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(s,a)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(Y,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:a.name})),children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:a.name})),children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:r,rows:I,bordered:!0})}},V={render:e=>{const{tColumns:r,tSampleData:s}=_(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{loading:!0,bordered:!0}},K={render:e=>{const{t:r,tColumns:s,tSampleData:a}=_(),d=a;return t.jsx(l,{...e,columns:s,rows:d,emptyMessage:r("story_datagrid_empty")})},args:{bordered:!0}},M={render:e=>{const{tColumns:r,tSampleData:s}=_(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{striped:!0,bordered:!0}},B={render:e=>{const{tColumns:r,tSampleData:s}=_(),a=s;return t.jsx(l,{...e,columns:r,rows:a})},args:{bordered:!0}},N={render:e=>{const{tColumns:r}=_(),s=b;return t.jsx(l,{...e,columns:r,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},H={render:()=>{const{tColumns:e}=_(),[r,s]=g.useState([]),[a,d]=g.useState(1),[c,y]=g.useState({key:"id",direction:"none"}),[u,x]=g.useState(b),w=(k,R)=>{if(y({key:k,direction:R}),R==="none")x(b);else{const re=[...u].sort((ae,se)=>{const Z=ae[k],J=se[k];return String(Z)<String(J)?R==="asc"?-1:1:String(Z)>String(J)?R==="asc"?1:-1:0});x(re)}},m=10,D=(a-1)*m,v=D+m,ne=u.slice(D,v);return t.jsx("div",{children:t.jsx(l,{columns:e,rows:ne,selection:!0,selectedRowKeys:r,onSelectionChange:s,sortConfig:c,onSort:w,pagination:{total:u.length,pageSize:m,current:a,onPageChange:d},striped:!0,hoverable:!0,bordered:!0})})}},F={render:()=>{const{t:e}=U(te),r=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:s=>{const a=e(s==="Active"?"story_datagrid_status_active":s==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(ye,{content:a,size:"small",color:s==="Active"?"primary":s==="Inactive"?"neutral":"secondary"})}}];return t.jsx(l,{columns:r,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},O={render:()=>{const{t:e}=U(te),r=[{key:"id",header:e("story_datagrid_col_id"),width:55},{key:"name",header:e("story_datagrid_col_name"),width:150},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"actions",header:e("story_datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(s,a)=>t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[t.jsx(Y,{size:"small",priority:"tertiary",children:t.jsx(ee,{name:"EditIcon",size:"small"})}),t.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",children:t.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:r,rows:I,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},$={render:()=>{const{tColumns:e}=_(),[r,s]=g.useState(b.slice(0,15)),[a,d]=g.useState(!1),[c,y]=g.useState(!0),u=()=>{a||(d(!0),setTimeout(()=>{const x=b.slice(r.length,r.length+15);s(w=>[...w,...x]),r.length+x.length>=b.length&&y(!1),d(!1)},1e3))};return t.jsx(l,{columns:e,rows:r,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:u,hasMore:c,loading:a}})}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const Ee=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Bordered:B,Default:P,Empty:K,FullFeatured:H,InfiniteScroll:$,Loading:V,StickyHeader:N,Striped:M,WithActions:E,WithFixedColumn:F,WithPagination:W,WithRightFixedColumn:O,WithSelection:q,WithSorting:L,__namedExportsOrder:Ee,default:Le},Symbol.toStringTag,{value:"Module"}));export{B,Xe as D,K as E,H as F,V as L,M as S,q as W,L as a,W as b,E as c,N as d,F as e};
