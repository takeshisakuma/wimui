import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-BisTGuVC.js";import{c as De}from"./index-Ckw0h7AD.js";import{T as ve,a as ke,b as H,c as me,d as Ce,e as O}from"./Table-DIjs0zur.js";import{C as ge}from"./Checkbox-_x0Gvank.js";import{P as je}from"./Pagination-rryjlecF.js";import{S as ye}from"./Spinner-DOEwTXgX.js";import{E as Re}from"./EmptyState-r2wqD5Ms.js";import{u as B}from"./useTranslation-BH3LN071.js";import{B as se}from"./Badge-C8x5xURE.js";import{B as N}from"./Button-DcecViuG.js";import{I as F}from"./Icon-mnVo4eg5.js";function Ie(e,n){return!n||e==="none"?"asc":e==="asc"?"desc":"none"}function l({columns:e,rows:n,loading:s=!1,selection:r=!1,selectedRowKeys:o=[],onSelectionChange:c,rowKey:g="id",sortConfig:u,onSort:f,pagination:p,loadMore:m,striped:S=!1,bordered:b=!1,hoverable:$=!0,stickyHeader:_=!1,height:v,maxHeight:Z,mobileCard:U=!1,className:J,emptyMessage:M,a11y_select_all_rows:E}){const{t:Q}=B(["components","common"]),X=M??Q("datagrid_empty"),pe=E??Q("a11y_select_all_rows"),Y=y.useRef(null);y.useEffect(()=>{if(!m||!m.hasMore||m.loading)return;const a=new IntersectionObserver(d=>{d[0].isIntersecting&&m.onLoadMore()},{threshold:m.threshold||.1});return Y.current&&a.observe(Y.current),()=>a.disconnect()},[m]);const oe=a=>typeof g=="function"?g(a):a[g],he=a=>{c&&c(a?n.map(d=>oe(d)):[])},fe=(a,d)=>{c&&c(d?[...o,a]:o.filter(x=>x!==a))},_e=a=>{if(!f)return;const d=Ie(u?.direction||"none",u?.key===a);f(a,d)},xe=n.length>0&&o.length===n.length,we=o.length>0&&o.length<n.length,ee=b?1:0,te={};let ne=r?48+ee:0,Se=20;e.forEach(a=>{if(a.fixed===!0||a.fixed==="left"){te[a.key]={offset:ne===0?0:`${ne}px`,zIndex:Se--};let d=0;typeof a.width=="number"?d=a.width:typeof a.width=="string"&&a.width.endsWith("px")&&(d=parseInt(a.width,10)),ne+=d+ee}});const ae={};let re=0,be=20;return[...e].reverse().forEach(a=>{if(a.fixed==="right"){ae[a.key]={offset:re===0?0:`${re}px`,zIndex:be--};let d=0;typeof a.width=="number"?d=a.width:typeof a.width=="string"&&a.width.endsWith("px")&&(d=parseInt(a.width,10)),re+=d+ee}}),t.jsxs("div",{className:De("wim-datagrid",s&&"wim-datagrid--loading",J),children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(ve,{striped:S,bordered:b,hoverable:$,stickyHeader:_,fullWidth:!0,height:v,maxHeight:Z,mobileCard:U,children:[t.jsx(ke,{children:t.jsxs(H,{children:[r&&t.jsx(me,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:_?121:21,children:t.jsx(ge,{checked:xe,indeterminate:we,onChange:a=>he(a.target.checked),"aria-label":pe})}),e.map(a=>{const d=a.fixed===!0||a.fixed==="left",x=a.fixed==="right",D=d?te[a.key]:void 0,i=x?ae[a.key]:void 0;return t.jsx(me,{style:{width:a.width,minWidth:a.width,maxWidth:a.width,textAlign:a.align},sortable:a.sortable,sortDirection:u?.key===a.key?u.direction:"none",onSort:()=>_e(a.key),stickyLeft:d,leftOffset:D?.offset,stickyRight:x,rightOffset:i?.offset,stickyZIndex:D?_?D.zIndex+100:D.zIndex:i?_?i.zIndex+100:i.zIndex:void 0,children:a.header},a.key)})]})}),t.jsxs(Ce,{children:[n.length===0&&!s?t.jsx(H,{children:t.jsx(O,{colSpan:e.length+(r?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof X=="string"?t.jsx(Re,{title:"No Data",description:X}):X})})}):n.map((a,d)=>{const x=oe(a),D=o.includes(x);return t.jsxs(H,{selected:D,children:[r&&t.jsx(O,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,children:t.jsx(ge,{checked:D,onChange:i=>fe(x,i.target.checked),"aria-label":Q("datagrid_select_row",{index:d+1})})}),e.map(i=>{const ie=i.dataIndex?a[i.dataIndex]:a[i.key],de=i.fixed===!0||i.fixed==="left",ce=i.fixed==="right",le=de?te[i.key]:void 0,ue=ce?ae[i.key]:void 0;return t.jsx(O,{style:{minWidth:i.width,maxWidth:i.width,textAlign:i.align},label:typeof i.header=="string"?i.header:void 0,stickyLeft:de,leftOffset:le?.offset,stickyRight:ce,rightOffset:ue?.offset,stickyZIndex:le?.zIndex||ue?.zIndex,children:i.render?i.render(ie,a,d):ie},i.key)})]},x)}),m&&m.hasMore&&t.jsx(H,{children:t.jsx(O,{colSpan:e.length+(r?1:0),children:t.jsx("div",{ref:Y,className:"wim-datagrid__loader",children:m.loading&&t.jsx(ye,{size:"small"})})})})]})]}),s&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(ye,{size:"large"})})]}),p&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(je,{total:p.total,pageSize:p.pageSize,current:p.current,onChange:p.onPageChange})})]})}l.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},loadMore:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  onLoadMore: () => void;\r
  hasMore: boolean;\r
  loading: boolean;\r
  threshold?: number;\r
}`,signature:{properties:[{key:"onLoadMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"hasMore",value:{name:"boolean",required:!0}},{key:"loading",value:{name:"boolean",required:!0}},{key:"threshold",value:{name:"number",required:!1}}]}},description:"Infinite scroll / load more configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const Te={title:"Components/Data Structures/DataGrid",component:l,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},k=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],w=Array.from({length:50}).map((e,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:n%3===0?"Admin":n%2===0?"Editor":"User",status:n%3===0?"Active":n%2===0?"Inactive":"Pending",joinDate:`2024-${String(n%12+1).padStart(2,"0")}-${String(n%28+1).padStart(2,"0")}`})),ze=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>t.jsx(se,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],h=()=>{const{t:e}=B(["docs","common","components"]),n=ze.map(r=>({...r,header:typeof r.header=="string"?e(`story_datagrid_col_${r.key}`):r.header,render:r.key==="status"?o=>{const c=e(o==="Active"?"story_datagrid_status_active":o==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(se,{content:c,size:"small",color:o==="Active"?"primary":o==="Inactive"?"neutral":"secondary"})}:r.render}));return{t:e,tColumns:n,tSampleData:k}},C={render:e=>{const{tColumns:n,tSampleData:s}=h(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{bordered:!0}},j={render:()=>{const{t:e,tColumns:n,tSampleData:s}=h(),[r,o]=y.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),r.join(", ")]}),t.jsx(l,{columns:n,rows:s,selection:!0,selectedRowKeys:r,onSelectionChange:o,bordered:!0})]})}},R={render:()=>{const{tColumns:e}=h(),[n,s]=y.useState({key:"id",direction:"none"}),[r,o]=y.useState(k),c=(g,u)=>{if(s({key:g,direction:u}),u==="none")o(k);else{const f=[...r].sort((p,m)=>{const S=p[g],b=m[g];return S<b?u==="asc"?-1:1:S>b?u==="asc"?1:-1:0});o(f)}};return t.jsx(l,{columns:e,rows:r,sortConfig:n,onSort:c,bordered:!0})}},I={render:()=>{const{tColumns:e}=h(),[n,s]=y.useState(1),r=10,o=(n-1)*r,c=o+r,g=w.slice(o,c);return t.jsx(l,{columns:e,rows:g,pagination:{total:w.length,pageSize:r,current:n,onPageChange:s},bordered:!0})}},T={render:()=>{const{t:e}=B(["docs","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(s,r)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(N,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:r.name})),children:t.jsx(F,{name:"EditIcon",size:"small"})}),t.jsx(N,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:r.name})),children:t.jsx(F,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:n,rows:k,bordered:!0})}},z={render:e=>{const{tColumns:n,tSampleData:s}=h(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{loading:!0,bordered:!0}},q={render:e=>{const{t:n,tColumns:s,tSampleData:r}=h(),o=r;return t.jsx(l,{...e,columns:s,rows:o,emptyMessage:n("story_datagrid_empty")})},args:{bordered:!0}},G={render:e=>{const{tColumns:n,tSampleData:s}=h(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{striped:!0,bordered:!0}},W={render:e=>{const{tColumns:n,tSampleData:s}=h(),r=s;return t.jsx(l,{...e,columns:n,rows:r})},args:{bordered:!0}},A={render:e=>{const{tColumns:n}=h(),s=w;return t.jsx(l,{...e,columns:n,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},P={render:()=>{const{tColumns:e}=h(),[n,s]=y.useState([]),[r,o]=y.useState(1),[c,g]=y.useState({key:"id",direction:"none"}),[u,f]=y.useState(w),p=(_,v)=>{if(g({key:_,direction:v}),v==="none")f(w);else{const Z=[...u].sort((U,J)=>{const M=U[_],E=J[_];return M<E?v==="asc"?-1:1:M>E?v==="asc"?1:-1:0});f(Z)}},m=10,S=(r-1)*m,b=S+m,$=u.slice(S,b);return t.jsx("div",{children:t.jsx(l,{columns:e,rows:$,selection:!0,selectedRowKeys:n,onSelectionChange:s,sortConfig:c,onSort:p,pagination:{total:u.length,pageSize:m,current:r,onPageChange:o},striped:!0,hoverable:!0,bordered:!0})})}},V={render:()=>{const{t:e}=B(["docs","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:s=>{const r=e(s==="Active"?"story_datagrid_status_active":s==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(se,{content:r,size:"small",color:s==="Active"?"primary":s==="Inactive"?"neutral":"secondary"})}}];return t.jsx(l,{columns:n,rows:k,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},L={render:()=>{const{t:e}=B(["docs","common","components"]),n=[{key:"id",header:e("story_datagrid_col_id"),width:55},{key:"name",header:e("story_datagrid_col_name"),width:150},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"actions",header:e("story_datagrid_col_actions"),width:120,fixed:"right",align:"center",render:(s,r)=>t.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[t.jsx(N,{size:"small",priority:"tertiary",children:t.jsx(F,{name:"EditIcon",size:"small"})}),t.jsx(N,{size:"small",priority:"tertiary",role:"destructive",children:t.jsx(F,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:n,rows:k,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]},K={render:()=>{const{tColumns:e}=h(),[n,s]=y.useState(w.slice(0,15)),[r,o]=y.useState(!1),[c,g]=y.useState(!0),u=()=>{r||(o(!0),setTimeout(()=>{const f=w.slice(n.length,n.length+15);s(p=>[...p,...f]),n.length+f.length>=w.length&&g(!1),o(!1)},1e3))};return t.jsx(l,{columns:e,rows:n,bordered:!0,stickyHeader:!0,maxHeight:"400px",loadMore:{onLoadMore:u,hasMore:c,loading:r}})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
            <Button size="small" priority="tertiary" role="destructive" onClick={() => alert(t("story_datagrid_action_delete", {
          name: row.name
        }))}>\r
              <Icon name="TrashIcon" size="small" />\r
            </Button>\r
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData} bordered />;
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    return <DataGrid columns={columns} rows={sampleData} selection bordered />;
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>\r
        <Story />\r
      </div>]
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
      fixed: "right" as "right",
      align: "center" as "center",
      render: (_: any, row: Record<string, any>) => <div style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center"
      }}>\r
            <Button size="small" priority="tertiary">\r
              <Icon name="EditIcon" size="small" />\r
            </Button>\r
            <Button size="small" priority="tertiary" role="destructive">\r
              <Icon name="TrashIcon" size="small" />\r
            </Button>\r
          </div>
    }];
    return <DataGrid columns={columns} rows={sampleData} selection bordered />;
  },
  decorators: [Story => <div style={{
    maxWidth: "100vw"
  }}>\r
        <Story />\r
      </div>]
}`,...L.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
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
    return <DataGrid columns={tColumns} rows={data} bordered stickyHeader maxHeight="400px" loadMore={{
      onLoadMore: loadMoreData,
      hasMore,
      loading
    }} />;
  }
}`,...K.parameters?.docs?.source}}};const qe=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn","WithRightFixedColumn","InfiniteScroll"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Bordered:W,Default:C,Empty:q,FullFeatured:P,InfiniteScroll:K,Loading:z,StickyHeader:A,Striped:G,WithActions:T,WithFixedColumn:V,WithPagination:I,WithRightFixedColumn:L,WithSelection:j,WithSorting:R,__namedExportsOrder:qe,default:Te},Symbol.toStringTag,{value:"Module"}));export{W as B,Ne as D,q as E,P as F,z as L,G as S,j as W,R as a,I as b,T as c,A as d,V as e};
