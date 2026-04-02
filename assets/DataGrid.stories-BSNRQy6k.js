import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as H,R as w,A as ee}from"./iframe-GzHoau5L.js";import{c as Re}from"./index-DP26yAW4.js";import{T as Ce,a as je,b as J,c as ge,d as Ie,e as Q}from"./Table-9UmAAMt7.js";import{C as he}from"./Checkbox-BQivmCIm.js";import{P as Te}from"./Pagination-CTfqGPX-.js";import{S as pe}from"./Spinner-CDLmlA05.js";import{E as Ae}from"./EmptyState-BA7gjEFz.js";import{B as re}from"./Badge-er48_M4L.js";import{B as X}from"./Button-DZW7ODAc.js";import{I as Y}from"./Icon-BdgCn_Xq.js";import{u as te}from"./useTranslation-Ckw9ivsw.js";function ze(e,t){return!t||e==="none"?"asc":e==="asc"?"desc":"none"}function Ge(e,t,r){const[a,o]=H.useState({row:-1,col:r?-1:0}),l=H.useRef(null);return{focusedCell:a,setFocusedCell:o,containerRef:l,handleKeyDown:d=>{const{row:i,col:p}=a;let u=i,h=p;const S=r?-1:0,C=e.length-1,y=-1,k=t.length-1;switch(d.key){case"ArrowRight":p<C&&h++;break;case"ArrowLeft":p>S&&h--;break;case"ArrowDown":i<k&&u++;break;case"ArrowUp":i>y&&u--;break;case"Home":d.ctrlKey&&(u=y),h=S;break;case"End":d.ctrlKey&&(u=k),h=C;break;case"Enter":case" ":{const b=document.activeElement;if(b?.getAttribute("role")==="columnheader")return;if(b?.classList.contains("wim-table__cell")){const j=b.querySelector('input, button, [role="button"]');j&&(j.click(),d.preventDefault())}return}default:return}(u!==i||h!==p)&&(d.preventDefault(),o({row:u,col:h}),setTimeout(()=>{l.current?.querySelector(`[data-row="${u}"][data-col="${h}"]`)?.focus()},0))}}}function fe(e){return typeof e=="number"?e:typeof e=="string"&&e.endsWith("px")?parseInt(e,10):0}function Le(e,t){return H.useMemo(()=>{const r={};let a=t?48:0,o=20;e.forEach(i=>{(i.fixed===!0||i.fixed==="left")&&(r[i.key]={offset:a===0?0:`${a}px`,zIndex:o--},a+=fe(i.width))});const l={};let m=0,d=20;return[...e].reverse().forEach(i=>{i.fixed==="right"&&(l[i.key]={offset:m===0?0:`${m}px`,zIndex:d--},m+=fe(i.width))}),{fixedLeftOffsets:r,fixedRightOffsets:l}},[e,t])}function Pe(e){const t=H.useRef(null);return H.useEffect(()=>{if(!e||!e.hasMore||e.loading)return;const r=new IntersectionObserver(a=>{a[0].isIntersecting&&e.onLoadMore()},{threshold:e.threshold||.1});return t.current&&r.observe(t.current),()=>r.disconnect()},[e]),{loaderRef:t}}const qe={empty:"No data available",selectAllRows:"Select all rows",selectRow:e=>`Select row ${e}`,loadingMore:"Loading more rows"};function f({columns:e,rows:t,loading:r=!1,selection:a=!1,selectedRowKeys:o=[],onSelectionChange:l,rowKey:m="id",sortConfig:d,onSort:i,pagination:p,loadMore:u,striped:h=!1,bordered:S=!1,hoverable:C=!0,stickyHeader:y=!1,height:k,maxHeight:b,mobileCard:j=!1,className:ne,emptyMessage:O,labels:$}){const U={...qe,...$},ae=O??U.empty,{focusedCell:v,setFocusedCell:Z,containerRef:ye,handleKeyDown:we}=Ge(e,t,a),{fixedLeftOffsets:se,fixedRightOffsets:oe}=Le(e,a),{loaderRef:xe}=Pe(u),ie=s=>typeof m=="function"?m(s):s[m],Se=s=>{l&&l(s?t.map(g=>ie(g)):[])},ke=(s,g)=>{l&&l(g?[...o,s]:o.filter(_=>_!==s))},be=s=>{if(!i)return;const g=ze(d?.direction||"none",d?.key===s);i(s,g)},ve=t.length>0&&o.length===t.length,_e=o.length>0&&o.length<t.length,De=e.length+(a?1:0);return n.jsxs("div",{ref:ye,className:Re("wim-datagrid",r&&"wim-datagrid--loading",ne),role:"grid","aria-rowcount":t.length+1,"aria-colcount":De,tabIndex:0,onKeyDown:we,children:[n.jsxs("div",{className:"wim-datagrid__container",children:[n.jsxs(Ce,{striped:h,bordered:S,hoverable:C,stickyHeader:y,fullWidth:!0,height:k,maxHeight:b,mobileCard:j,children:[n.jsx(je,{children:n.jsxs(J,{children:[a&&n.jsx(ge,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:y?121:21,"data-row":-1,"data-col":-1,tabIndex:v.row===-1&&v.col===-1?0:-1,onFocus:()=>Z({row:-1,col:-1}),children:n.jsx(he,{checked:ve,indeterminate:_e,onChange:s=>Se(s.target.checked),"aria-label":U.selectAllRows,tabIndex:-1})}),e.map((s,g)=>{const _=s.fixed===!0||s.fixed==="left",T=s.fixed==="right",c=_?se[s.key]:void 0,D=T?oe[s.key]:void 0;return n.jsx(ge,{style:{width:s.width,minWidth:s.width,maxWidth:s.width,textAlign:s.align},sortable:s.sortable,sortDirection:d?.key===s.key?d.direction:"none",onSort:()=>be(s.key),stickyLeft:_,leftOffset:c?.offset,stickyRight:T,rightOffset:D?.offset,stickyZIndex:c?y?c.zIndex+100:c.zIndex:D?y?D.zIndex+100:D.zIndex:void 0,"data-row":-1,"data-col":g,tabIndex:v.row===-1&&v.col===g?0:-1,onFocus:()=>Z({row:-1,col:g}),children:s.header},s.key)})]})}),n.jsxs(Ie,{children:[t.length===0&&!r?n.jsx(J,{children:n.jsx(Q,{colSpan:e.length+(a?1:0),children:n.jsx("div",{className:"wim-datagrid__empty",role:"status","aria-live":"polite",children:typeof ae=="string"?n.jsx(Ae,{title:"No Data",description:ae}):ae})})}):t.map((s,g)=>{const _=ie(s),T=o.includes(_);return n.jsxs(J,{selected:T,children:[a&&n.jsx(Q,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,"data-row":g,"data-col":-1,tabIndex:v.row===g&&v.col===-1?0:-1,onFocus:()=>Z({row:g,col:-1}),children:n.jsx(he,{checked:T,onChange:c=>ke(_,c.target.checked),"aria-label":U.selectRow(g+1),tabIndex:-1})}),e.map((c,D)=>{const de=c.dataIndex?s[c.dataIndex]:s[c.key],ce=c.fixed===!0||c.fixed==="left",le=c.fixed==="right",ue=ce?se[c.key]:void 0,me=le?oe[c.key]:void 0;return n.jsx(Q,{style:{minWidth:c.width,maxWidth:c.width,textAlign:c.align},label:typeof c.header=="string"?c.header:void 0,stickyLeft:ce,leftOffset:ue?.offset,stickyRight:le,rightOffset:me?.offset,stickyZIndex:ue?.zIndex||me?.zIndex,"data-row":g,"data-col":D,tabIndex:v.row===g&&v.col===D?0:-1,onFocus:()=>Z({row:g,col:D}),children:c.render?c.render(de,s,g):de},c.key)})]},_)}),u&&u.hasMore&&n.jsx(J,{children:n.jsx(Q,{colSpan:e.length+(a?1:0),children:n.jsx("div",{ref:xe,className:"wim-datagrid__loader","aria-live":"polite","aria-label":u.loading?U.loadingMore:void 0,children:u.loading&&n.jsx(pe,{size:"sm"})})})})]})]}),r&&n.jsx("div",{className:"wim-datagrid__loading-overlay",children:n.jsx(pe,{size:"lg"})})]}),p&&n.jsx("div",{className:"wim-datagrid__footer",children:n.jsx(Te,{total:p.total,pageSize:p.pageSize,current:p.current,onChange:p.onPageChange})})]})}f.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  total: number;
  pageSize: number;
  current: number;
  onPageChange: (page: number) => void;
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
  threshold?: number;
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  empty?: React.ReactNode;
  selectAllRows?: string;
  selectRow?: (index: number) => string;
  loadingMore?: string;
}`,signature:{properties:[{key:"empty",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"selectAllRows",value:{name:"string",required:!1}},{key:"selectRow",value:{name:"signature",type:"function",raw:"(index: number) => string",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"string"}},required:!1}},{key:"loadingMore",value:{name:"string",required:!1}}]}},description:"手動翻訳用のラベル"}}};const Ee={title:"Components/Data Structures/DataGrid",component:f,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},I=[{id:1,name:"John Doe",email:"john@example.com",intent:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",intent:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",intent:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",intent:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",intent:"Active",role:"Admin",joinDate:"2024-05-12"}],R=Array.from({length:50}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:t%3===0?"Admin":t%2===0?"Editor":"User",intent:t%3===0?"Active":t%2===0?"Inactive":"Pending",joinDate:`2024-${String(t%12+1).padStart(2,"0")}-${String(t%28+1).padStart(2,"0")}`})),Ke=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>n.jsx(re,{content:e,size:"sm",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],x=()=>{const{t:e}=te(ee),t=Ke.map(a=>({...a,header:typeof a.header=="string"?e(`story_datagrid_col_${a.key}`):a.header,render:a.key==="status"?o=>{const l=e(o==="Active"?"story.datagrid_status_active":o==="Inactive"?"story.datagrid_status_inactive":"story.datagrid_status_pending");return n.jsx(re,{content:l,size:"sm",color:o==="Active"?"primary":o==="Inactive"?"neutral":"secondary"})}:a.render}));return{t:e,tColumns:t,tSampleData:I}},A={render:e=>{const{tColumns:t,tSampleData:r}=x(),a=r;return n.jsx(f,{...e,columns:t,rows:a})},args:{bordered:!0}},z={render:()=>{const{t:e,tColumns:t,tSampleData:r}=x(),[a,o]=w.useState([]);return n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:"16px"},children:[e("story.datagrid_selected"),a.join(", ")]}),n.jsx(f,{columns:t,rows:r,selection:!0,selectedRowKeys:a,onSelectionChange:o,bordered:!0})]})}},G={render:()=>{const{tColumns:e}=x(),[t,r]=w.useState({key:"id",direction:"none"}),[a,o]=w.useState(I),l=(m,d)=>{if(r({key:m,direction:d}),d==="none")o(I);else{const i=[...a].sort((p,u)=>{const h=p[m],S=u[m];return String(h)<String(S)?d==="asc"?-1:1:String(h)>String(S)?d==="asc"?1:-1:0});o(i)}};return n.jsx(f,{columns:e,rows:a,sortConfig:t,onSort:l,bordered:!0})}},L={render:()=>{const{tColumns:e}=x(),[t,r]=w.useState(1),a=10,o=(t-1)*a,l=o+a,m=R.slice(o,l);return n.jsx(f,{columns:e,rows:m,pagination:{total:R.length,pageSize:a,current:t,onPageChange:r},bordered:!0})}},P={render:()=>{const{t:e}=te(ee),t=[{key:"id",header:e("story.datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story.datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story.datagrid_col_email"),width:200},{key:"actions",header:e("story.datagrid_col_actions"),width:100,render:(r,a)=>n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(X,{size:"sm",variant:"ghost",onClick:()=>alert(e("story.datagrid_action_edit",{name:a.name})),children:n.jsx(Y,{name:"EditIcon",size:"sm"})}),n.jsx(X,{size:"sm",variant:"ghost",intent:"destructive",onClick:()=>alert(e("story.datagrid_action_delete",{name:a.name})),children:n.jsx(Y,{name:"TrashIcon",size:"sm"})})]})}];return n.jsx(f,{columns:t,rows:I,bordered:!0})}},q={render:e=>{const{tColumns:t,tSampleData:r}=x(),a=r;return n.jsx(f,{...e,columns:t,rows:a})},args:{loading:!0,bordered:!0}},E={render:e=>{const{t,tColumns:r,tSampleData:a}=x(),o=a;return n.jsx(f,{...e,columns:r,rows:o,emptyMessage:t("story.datagrid_empty")})},args:{bordered:!0}},K={render:e=>{const{tColumns:t,tSampleData:r}=x(),a=r;return n.jsx(f,{...e,columns:t,rows:a})},args:{striped:!0,bordered:!0}},W={render:e=>{const{tColumns:t,tSampleData:r}=x(),a=r;return n.jsx(f,{...e,columns:t,rows:a})},args:{bordered:!0}},M={render:e=>{const{tColumns:t}=x(),r=R;return n.jsx(f,{...e,columns:t,rows:r})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},V={render:()=>{const{tColumns:e}=x(),[t,r]=w.useState([]),[a,o]=w.useState(1),[l,m]=w.useState({key:"id",direction:"none"}),[d,i]=w.useState(R),p=(y,k)=>{if(m({key:y,direction:k}),k==="none")i(R);else{const b=[...d].sort((j,ne)=>{const O=j[y],$=ne[y];return String(O)<String($)?k==="asc"?-1:1:String(O)>String($)?k==="asc"?1:-1:0});i(b)}},u=10,h=(a-1)*u,S=h+u,C=d.slice(h,S);return n.jsx("div",{children:n.jsx(f,{columns:e,rows:C,selection:!0,selectedRowKeys:t,onSelectionChange:r,sortConfig:l,onSort:p,pagination:{total:d.length,pageSize:u,current:a,onPageChange:o},striped:!0,hoverable:!0,bordered:!0})})}},B={render:()=>{const{t:e}=te(ee),t=[{key:"id",header:e("story.datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story.datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story.datagrid_col_email"),width:200},{key:"role",header:e("story.datagrid_col_role"),width:100},{key:"joinDate",header:e("story.datagrid_col_joinDate"),width:150},{key:"status",header:e("story.datagrid_col_status"),width:100,render:r=>{const a=e(r==="Active"?"story.datagrid_status_active":r==="Inactive"?"story.datagrid_status_inactive":"story.datagrid_status_pending");return n.jsx(re,{content:a,size:"sm",color:r==="Active"?"primary":r==="Inactive"?"neutral":"secondary"})}}];return n.jsx(f,{columns:t,rows:I,selection:!0,bordered:!0})},decorators:[e=>n.jsx("div",{style:{maxWidth:"100vw"},children:n.jsx(e,{})})]},N={render:()=>{const{t:e}=te(ee),t=[{key:"id",header:e("story.datagrid_col_id"),width:55},{key:"name",header:e("story.datagrid_col_name"),width:150},{key:"email",header:e("story.datagrid_col_email"),width:200},{key:"role",header:e("story.datagrid_col_role"),width:100},{key:"joinDate",header:e("story.datagrid_col_joinDate"),width:150},{key:"actions",header:e("story.datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(r,a)=>n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[n.jsx(X,{size:"sm",variant:"ghost",children:n.jsx(Y,{name:"EditIcon",size:"sm"})}),n.jsx(X,{size:"sm",variant:"ghost",intent:"destructive",children:n.jsx(Y,{name:"TrashIcon",size:"sm"})})]})}];return n.jsx(f,{columns:t,rows:I,selection:!0,bordered:!0})},decorators:[e=>n.jsx("div",{style:{maxWidth:"100vw"},children:n.jsx(e,{})})]},F={render:()=>{const{tColumns:e}=x(),[t,r]=w.useState(R.slice(0,15)),[a,o]=w.useState(!1),[l,m]=w.useState(!0),d=()=>{a||(o(!0),setTimeout(()=>{const i=R.slice(t.length,t.length+15);r(p=>[...p,...i]),t.length+i.length>=R.length&&m(!1),o(!1)},1e3))};return n.jsx(f,{columns:e,rows:t,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:d,hasMore:l,loading:a}})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
          {t('story.datagrid_selected')}{selectedRowKeys.join(", ")}
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
}`,...G.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const columns = [{
      key: "id",
      header: t("story.datagrid_col_id"),
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: t("story.datagrid_col_name"),
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: t("story.datagrid_col_email"),
      width: 200
    }, {
      key: "actions",
      header: t("story.datagrid_col_actions"),
      width: 100,
      render: (_: unknown, row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px"
      }}>
            <Button size="sm" variant="ghost" onClick={() => alert(t("story.datagrid_action_edit", {
          name: row.name
        }))}>
              <Icon name="EditIcon" size="sm" />
            </Button>
            {}
            <Button size="sm" variant="ghost" intent="destructive" onClick={() => alert(t("story.datagrid_action_delete", {
          name: row.name
        }))}>
              <Icon name="TrashIcon" size="sm" />
            </Button>
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData as unknown as Record<string, unknown>[]} bordered />;
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    return <DataGrid {...args as DataGridProps<Record<string, unknown>>} columns={tColumns} rows={rows} emptyMessage={t('story.datagrid_empty')} />;
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
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const columns = [{
      key: "id",
      header: t("story.datagrid_col_id"),
      width: 55,
      fixed: true
    }, {
      key: "name",
      header: t("story.datagrid_col_name"),
      width: 150,
      fixed: false
    }, {
      key: "email",
      header: t("story.datagrid_col_email"),
      width: 200
    }, {
      key: "role",
      header: t("story.datagrid_col_role"),
      width: 100
    }, {
      key: "joinDate",
      header: t("story.datagrid_col_joinDate"),
      width: 150
    }, {
      key: "status",
      header: t("story.datagrid_col_status"),
      width: 100,
      render: (value: unknown) => {
        const translatedValue = value === "Active" ? t("story.datagrid_status_active") : value === "Inactive" ? t("story.datagrid_status_inactive") : t("story.datagrid_status_pending");
        return <Badge content={translatedValue} size="sm" color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"} />;
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
      header: t("story.datagrid_col_id"),
      width: 55
    }, {
      key: "name",
      header: t("story.datagrid_col_name"),
      width: 150
    }, {
      key: "email",
      header: t("story.datagrid_col_email"),
      width: 200
    }, {
      key: "role",
      header: t("story.datagrid_col_role"),
      width: 100
    }, {
      key: "joinDate",
      header: t("story.datagrid_col_joinDate"),
      width: 150
    }, {
      key: "actions",
      header: t("story.datagrid_col_actions"),
      width: 120,
      fixed: "right" as const,
      align: "center" as const,
      render: (_: unknown, _row: Record<string, unknown>) => <div style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center"
      }}>
            <Button size="sm" variant="ghost">
              <Icon name="EditIcon" size="sm" />
            </Button>
            <Button size="sm" variant="ghost" intent="destructive">
              <Icon name="TrashIcon" size="sm" />
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
}`,...F.parameters?.docs?.source}}};const We=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Bordered:W,Default:A,Empty:E,FullFeatured:V,InfiniteScroll:F,Loading:q,StickyHeader:M,Striped:K,WithActions:P,WithFixedColumn:B,WithPagination:L,WithRightFixedColumn:N,WithSelection:z,WithSorting:G,__namedExportsOrder:We,default:Ee},Symbol.toStringTag,{value:"Module"}));export{W as B,Xe as D,E,V as F,F as I,q as L,K as S,z as W,G as a,L as b,P as c,M as d,B as e,N as f};
