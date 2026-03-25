import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as H,R as w,A as te}from"./iframe-DwNzUyVS.js";import{c as Re}from"./index-C0gClSVi.js";import{T as je,a as Ie,b as Q,c as ge,d as Te,e as X}from"./Table-C9HRc6xC.js";import{C as ye}from"./Checkbox-BYt6NpDY.js";import{P as Ae}from"./Pagination-BMPwHVyZ.js";import{S as pe}from"./Spinner-CoOw1b4L.js";import{E as ze}from"./EmptyState-CxhZzWp0.js";import{u as O}from"./useTranslation-IUowf2zp.js";import{B as ae}from"./Badge-BY03fhRL.js";import{B as Y}from"./Button-DwPZjd0Q.js";import{I as ee}from"./Icon-CgIsuysw.js";function Ge(e,t){return!t||e==="none"?"asc":e==="asc"?"desc":"none"}function Pe(e,t,a){const[r,o]=H.useState({row:-1,col:a?-1:0}),l=H.useRef(null);return{focusedCell:r,setFocusedCell:o,containerRef:l,handleKeyDown:d=>{const{row:i,col:p}=r;let u=i,y=p;const x=a?-1:0,R=e.length-1,f=-1,S=t.length-1;switch(d.key){case"ArrowRight":p<R&&y++;break;case"ArrowLeft":p>x&&y--;break;case"ArrowDown":i<S&&u++;break;case"ArrowUp":i>f&&u--;break;case"Home":d.ctrlKey&&(u=f),y=x;break;case"End":d.ctrlKey&&(u=S),y=R;break;case"Enter":case" ":{const k=document.activeElement;if(k?.getAttribute("role")==="columnheader")return;if(k?.classList.contains("wim-table__cell")){const j=k.querySelector('input, button, [role="button"]');j&&(j.click(),d.preventDefault())}return}default:return}(u!==i||y!==p)&&(d.preventDefault(),o({row:u,col:y}),setTimeout(()=>{l.current?.querySelector(`[data-row="${u}"][data-col="${y}"]`)?.focus()},0))}}}function he(e){return typeof e=="number"?e:typeof e=="string"&&e.endsWith("px")?parseInt(e,10):0}function Le(e,t){return H.useMemo(()=>{const a={};let r=t?48:0,o=20;e.forEach(i=>{(i.fixed===!0||i.fixed==="left")&&(a[i.key]={offset:r===0?0:`${r}px`,zIndex:o--},r+=he(i.width))});const l={};let m=0,d=20;return[...e].reverse().forEach(i=>{i.fixed==="right"&&(l[i.key]={offset:m===0?0:`${m}px`,zIndex:d--},m+=he(i.width))}),{fixedLeftOffsets:a,fixedRightOffsets:l}},[e,t])}function qe(e){const t=H.useRef(null);return H.useEffect(()=>{if(!e||!e.hasMore||e.loading)return;const a=new IntersectionObserver(r=>{r[0].isIntersecting&&e.onLoadMore()},{threshold:e.threshold||.1});return t.current&&a.observe(t.current),()=>a.disconnect()},[e]),{loaderRef:t}}function h({columns:e,rows:t,loading:a=!1,selection:r=!1,selectedRowKeys:o=[],onSelectionChange:l,rowKey:m="id",sortConfig:d,onSort:i,pagination:p,loadMore:u,striped:y=!1,bordered:x=!1,hoverable:R=!0,stickyHeader:f=!1,height:S,maxHeight:k,mobileCard:j=!1,className:ne,emptyMessage:$,a11y_select_all_rows:U}){const{t:Z}=O(["components","common"]),re=$??Z("datagrid_empty"),fe=U??Z("a11y_select_all_rows"),{focusedCell:b,setFocusedCell:J,containerRef:we,handleKeyDown:_e}=Pe(e,t,r),{fixedLeftOffsets:se,fixedRightOffsets:oe}=Le(e,r),{loaderRef:xe}=qe(u),ie=s=>typeof m=="function"?m(s):s[m],Se=s=>{l&&l(s?t.map(g=>ie(g)):[])},ke=(s,g)=>{l&&l(g?[...o,s]:o.filter(D=>D!==s))},be=s=>{if(!i)return;const g=Ge(d?.direction||"none",d?.key===s);i(s,g)},De=t.length>0&&o.length===t.length,ve=o.length>0&&o.length<t.length,Ce=e.length+(r?1:0);return n.jsxs("div",{ref:we,className:Re("wim-datagrid",a&&"wim-datagrid--loading",ne),role:"grid","aria-rowcount":t.length+1,"aria-colcount":Ce,tabIndex:0,onKeyDown:_e,children:[n.jsxs("div",{className:"wim-datagrid__container",children:[n.jsxs(je,{striped:y,bordered:x,hoverable:R,stickyHeader:f,fullWidth:!0,height:S,maxHeight:k,mobileCard:j,children:[n.jsx(Ie,{children:n.jsxs(Q,{children:[r&&n.jsx(ge,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:f?121:21,"data-row":-1,"data-col":-1,tabIndex:b.row===-1&&b.col===-1?0:-1,onFocus:()=>J({row:-1,col:-1}),children:n.jsx(ye,{checked:De,indeterminate:ve,onChange:s=>Se(s.target.checked),"aria-label":fe,tabIndex:-1})}),e.map((s,g)=>{const D=s.fixed===!0||s.fixed==="left",T=s.fixed==="right",c=D?se[s.key]:void 0,v=T?oe[s.key]:void 0;return n.jsx(ge,{style:{width:s.width,minWidth:s.width,maxWidth:s.width,textAlign:s.align},sortable:s.sortable,sortDirection:d?.key===s.key?d.direction:"none",onSort:()=>be(s.key),stickyLeft:D,leftOffset:c?.offset,stickyRight:T,rightOffset:v?.offset,stickyZIndex:c?f?c.zIndex+100:c.zIndex:v?f?v.zIndex+100:v.zIndex:void 0,"data-row":-1,"data-col":g,tabIndex:b.row===-1&&b.col===g?0:-1,onFocus:()=>J({row:-1,col:g}),children:s.header},s.key)})]})}),n.jsxs(Te,{children:[t.length===0&&!a?n.jsx(Q,{children:n.jsx(X,{colSpan:e.length+(r?1:0),children:n.jsx("div",{className:"wim-datagrid__empty",role:"status","aria-live":"polite",children:typeof re=="string"?n.jsx(ze,{title:"No Data",description:re}):re})})}):t.map((s,g)=>{const D=ie(s),T=o.includes(D);return n.jsxs(Q,{selected:T,children:[r&&n.jsx(X,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,"data-row":g,"data-col":-1,tabIndex:b.row===g&&b.col===-1?0:-1,onFocus:()=>J({row:g,col:-1}),children:n.jsx(ye,{checked:T,onChange:c=>ke(D,c.target.checked),"aria-label":Z("datagrid_select_row",{index:g+1}),tabIndex:-1})}),e.map((c,v)=>{const de=c.dataIndex?s[c.dataIndex]:s[c.key],ce=c.fixed===!0||c.fixed==="left",le=c.fixed==="right",ue=ce?se[c.key]:void 0,me=le?oe[c.key]:void 0;return n.jsx(X,{style:{minWidth:c.width,maxWidth:c.width,textAlign:c.align},label:typeof c.header=="string"?c.header:void 0,stickyLeft:ce,leftOffset:ue?.offset,stickyRight:le,rightOffset:me?.offset,stickyZIndex:ue?.zIndex||me?.zIndex,"data-row":g,"data-col":v,tabIndex:b.row===g&&b.col===v?0:-1,onFocus:()=>J({row:g,col:v}),children:c.render?c.render(de,s,g):de},c.key)})]},D)}),u&&u.hasMore&&n.jsx(Q,{children:n.jsx(X,{colSpan:e.length+(r?1:0),children:n.jsx("div",{ref:xe,className:"wim-datagrid__loader","aria-live":"polite","aria-label":u.loading?Z("datagrid_loading_more","Loading more rows"):void 0,children:u.loading&&n.jsx(pe,{size:"small"})})})})]})]}),a&&n.jsx("div",{className:"wim-datagrid__loading-overlay",children:n.jsx(pe,{size:"large"})})]}),p&&n.jsx("div",{className:"wim-datagrid__footer",children:n.jsx(Ae,{total:p.total,pageSize:p.pageSize,current:p.current,onChange:p.onPageChange})})]})}h.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  total: number;
  pageSize: number;
  current: number;
  onPageChange: (page: number) => void;
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
  threshold?: number;
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const Ee={title:"Components/Data Structures/DataGrid",component:h,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],C=Array.from({length:50}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:t%3===0?"Admin":t%2===0?"Editor":"User",status:t%3===0?"Active":t%2===0?"Inactive":"Pending",joinDate:`2024-${String(t%12+1).padStart(2,"0")}-${String(t%28+1).padStart(2,"0")}`})),Ke=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>n.jsx(ae,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],_=()=>{const{t:e}=O(te),t=Ke.map(r=>({...r,header:typeof r.header=="string"?e(`story_datagrid_col_${r.key}`):r.header,render:r.key==="status"?o=>{const l=e(o==="Active"?"story_datagrid_status_active":o==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return n.jsx(ae,{content:l,size:"small",color:o==="Active"?"primary":o==="Inactive"?"neutral":"secondary"})}:r.render}));return{t:e,tColumns:t,tSampleData:I}},A={render:e=>{const{tColumns:t,tSampleData:a}=_(),r=a;return n.jsx(h,{...e,columns:t,rows:r})},args:{bordered:!0}},z={render:()=>{const{t:e,tColumns:t,tSampleData:a}=_(),[r,o]=w.useState([]);return n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),r.join(", ")]}),n.jsx(h,{columns:t,rows:a,selection:!0,selectedRowKeys:r,onSelectionChange:o,bordered:!0})]})}},G={render:()=>{const{tColumns:e}=_(),[t,a]=w.useState({key:"id",direction:"none"}),[r,o]=w.useState(I),l=(m,d)=>{if(a({key:m,direction:d}),d==="none")o(I);else{const i=[...r].sort((p,u)=>{const y=p[m],x=u[m];return String(y)<String(x)?d==="asc"?-1:1:String(y)>String(x)?d==="asc"?1:-1:0});o(i)}};return n.jsx(h,{columns:e,rows:r,sortConfig:t,onSort:l,bordered:!0})}},P={render:()=>{const{tColumns:e}=_(),[t,a]=w.useState(1),r=10,o=(t-1)*r,l=o+r,m=C.slice(o,l);return n.jsx(h,{columns:e,rows:m,pagination:{total:C.length,pageSize:r,current:t,onPageChange:a},bordered:!0})}},L={render:()=>{const{t:e}=O(te),t=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(a,r)=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(Y,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:r.name})),children:n.jsx(ee,{name:"EditIcon",size:"small"})}),n.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:r.name})),children:n.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return n.jsx(h,{columns:t,rows:I,bordered:!0})}},q={render:e=>{const{tColumns:t,tSampleData:a}=_(),r=a;return n.jsx(h,{...e,columns:t,rows:r})},args:{loading:!0,bordered:!0}},E={render:e=>{const{t,tColumns:a,tSampleData:r}=_(),o=r;return n.jsx(h,{...e,columns:a,rows:o,emptyMessage:t("story_datagrid_empty")})},args:{bordered:!0}},K={render:e=>{const{tColumns:t,tSampleData:a}=_(),r=a;return n.jsx(h,{...e,columns:t,rows:r})},args:{striped:!0,bordered:!0}},W={render:e=>{const{tColumns:t,tSampleData:a}=_(),r=a;return n.jsx(h,{...e,columns:t,rows:r})},args:{bordered:!0}},V={render:e=>{const{tColumns:t}=_(),a=C;return n.jsx(h,{...e,columns:t,rows:a})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},M={render:()=>{const{tColumns:e}=_(),[t,a]=w.useState([]),[r,o]=w.useState(1),[l,m]=w.useState({key:"id",direction:"none"}),[d,i]=w.useState(C),p=(f,S)=>{if(m({key:f,direction:S}),S==="none")i(C);else{const k=[...d].sort((j,ne)=>{const $=j[f],U=ne[f];return String($)<String(U)?S==="asc"?-1:1:String($)>String(U)?S==="asc"?1:-1:0});i(k)}},u=10,y=(r-1)*u,x=y+u,R=d.slice(y,x);return n.jsx("div",{children:n.jsx(h,{columns:e,rows:R,selection:!0,selectedRowKeys:t,onSelectionChange:a,sortConfig:l,onSort:p,pagination:{total:d.length,pageSize:u,current:r,onPageChange:o},striped:!0,hoverable:!0,bordered:!0})})}},B={render:()=>{const{t:e}=O(te),t=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:a=>{const r=e(a==="Active"?"story_datagrid_status_active":a==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return n.jsx(ae,{content:r,size:"small",color:a==="Active"?"primary":a==="Inactive"?"neutral":"secondary"})}}];return n.jsx(h,{columns:t,rows:I,selection:!0,bordered:!0})},decorators:[e=>n.jsx("div",{style:{maxWidth:"100vw"},children:n.jsx(e,{})})]},N={render:()=>{const{t:e}=O(te),t=[{key:"id",header:e("story_datagrid_col_id"),width:55},{key:"name",header:e("story_datagrid_col_name"),width:150},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"actions",header:e("story_datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(a,r)=>n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[n.jsx(Y,{size:"small",priority:"tertiary",children:n.jsx(ee,{name:"EditIcon",size:"small"})}),n.jsx(Y,{size:"small",priority:"tertiary",role:"destructive",children:n.jsx(ee,{name:"TrashIcon",size:"small"})})]})}];return n.jsx(h,{columns:t,rows:I,selection:!0,bordered:!0})},decorators:[e=>n.jsx("div",{style:{maxWidth:"100vw"},children:n.jsx(e,{})})]},F={render:()=>{const{tColumns:e}=_(),[t,a]=w.useState(C.slice(0,15)),[r,o]=w.useState(!1),[l,m]=w.useState(!0),d=()=>{r||(o(!0),setTimeout(()=>{const i=C.slice(t.length,t.length+15);a(p=>[...p,...i]),t.length+i.length>=C.length&&m(!1),o(!1)},1e3))};return n.jsx(h,{columns:e,rows:t,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:d,hasMore:l,loading:r}})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      tColumns,
      tSampleData
    } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return <div>
        <p style={{
        marginBottom: "16px"
      }}>
          {t('story_datagrid_selected')}{selectedRowKeys.join(", ")}
        </p>
        <DataGrid columns={tColumns} rows={tSampleData} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} bordered />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
      }}>
            <Button size="small" priority="tertiary" onClick={() => alert(t("story_datagrid_action_edit", {
          name: row.name
        }))}>
              <Icon name="EditIcon" size="small" />
            </Button>
            {}
            <Button size="small" priority="tertiary"
        // eslint-disable-next-line jsx-a11y/aria-role
        role="destructive" onClick={() => alert(t("story_datagrid_action_delete", {
          name: row.name
        }))}>
              <Icon name="TrashIcon" size="small" />
            </Button>
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} bordered />;
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
    return <div>
        <DataGrid columns={tColumns} rows={currentData as unknown as Record<string, unknown>[]} selection selectedRowKeys={selectedRowKeys} onSelectionChange={setSelectedRowKeys} sortConfig={sortConfig} onSort={handleSort} pagination={{
        total: data.length,
        pageSize,
        current: currentPage,
        onPageChange: setCurrentPage
      }} striped hoverable bordered />
      </div>;
  }
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
  }}>
        <Story />
      </div>]
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
      }}>
            <Button size="small" priority="tertiary">
              <Icon name="EditIcon" size="small" />
            </Button>
            {/* eslint-disable-next-line jsx-a11y/aria-role */}
            <Button size="small" priority="tertiary" role="destructive">
              <Icon name="TrashIcon" size="small" />
            </Button>
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} selection bordered />;
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>
        <Story />
      </div>]
}`,...N.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const We=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Bordered:W,Default:A,Empty:E,FullFeatured:M,InfiniteScroll:F,Loading:q,StickyHeader:V,Striped:K,WithActions:L,WithFixedColumn:B,WithPagination:P,WithRightFixedColumn:N,WithSelection:z,WithSorting:G,__namedExportsOrder:We,default:Ee},Symbol.toStringTag,{value:"Module"}));export{W as B,Xe as D,E,M as F,F as I,q as L,K as S,z as W,G as a,P as b,L as c,V as d,B as e,N as f};
