import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-SL2HqV3D.js";import{c as me}from"./index-30w8ikAG.js";import{T as pe,a as ge,b as $,c as te,d as ye,e as U}from"./Table-BuWO0Fgu.js";import{C as ae}from"./Checkbox-CBVOBX8G.js";import{P as he}from"./Pagination-CKIecQ5t.js";import{S as fe}from"./Spinner-CQeHSSyd.js";import{E as _e}from"./EmptyState-ClqMkrgu.js";import{u as E}from"./useTranslation-ZF4WB21B.js";import{B as Z}from"./Badge-Cf-tC3vR.js";import{B as ne}from"./Button-DhroN8PM.js";import{I as re}from"./Icon-LsAuz8T1.js";function we(e,a){return!a||e==="none"?"asc":e==="asc"?"desc":"none"}function l({columns:e,rows:a,loading:s=!1,selection:n=!1,selectedRowKeys:o=[],onSelectionChange:c,rowKey:m="id",sortConfig:u,onSort:f,pagination:g,striped:_=!1,bordered:y=!1,hoverable:w=!0,stickyHeader:b=!1,height:D,maxHeight:x,mobileCard:N=!1,className:L,emptyMessage:O,a11y_select_all_rows:B}){const{t:S}=E(["components","common"]),H=O??S("datagrid_empty"),se=B??S("a11y_select_all_rows"),J=r=>typeof m=="function"?m(r):r[m],oe=r=>{c&&c(r?a.map(i=>J(i)):[])},ie=(r,i)=>{c&&c(i?[...o,r]:o.filter(k=>k!==r))},de=r=>{if(!f)return;const i=we(u?.direction||"none",u?.key===r);f(r,i)},ce=a.length>0&&o.length===a.length,le=o.length>0&&o.length<a.length,F={},Q=y?1:0;let M=n?48+Q:0,ue=20;return e.forEach(r=>{if(r.fixed){F[r.key]={offset:M===0?0:`${M}px`,zIndex:ue--};let i=0;typeof r.width=="number"?i=r.width:typeof r.width=="string"&&r.width.endsWith("px")&&(i=parseInt(r.width,10)),M+=i+Q}}),t.jsxs("div",{className:me("wim-datagrid",s&&"wim-datagrid--loading",L),children:[t.jsxs("div",{className:"wim-datagrid__container",children:[t.jsxs(pe,{striped:_,bordered:y,hoverable:w,stickyHeader:b,fullWidth:!0,height:D,maxHeight:x,mobileCard:N,children:[t.jsx(ge,{children:t.jsxs($,{children:[n&&t.jsx(te,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:b?121:21,children:t.jsx(ae,{checked:ce,indeterminate:le,onChange:r=>oe(r.target.checked),"aria-label":se})}),e.map(r=>{const i=r.fixed?F[r.key]:void 0;return t.jsx(te,{style:{width:r.width,minWidth:r.width,maxWidth:r.width,textAlign:r.align},sortable:r.sortable,sortDirection:u?.key===r.key?u.direction:"none",onSort:()=>de(r.key),stickyLeft:r.fixed,leftOffset:i?.offset,stickyZIndex:i?b?i.zIndex+100:i.zIndex:void 0,children:r.header},r.key)})]})}),t.jsx(ye,{children:a.length===0&&!s?t.jsx($,{children:t.jsx(U,{colSpan:e.length+(n?1:0),children:t.jsx("div",{className:"wim-datagrid__empty",children:typeof H=="string"?t.jsx(_e,{title:"No Data",description:H}):H})})}):a.map((r,i)=>{const k=J(r),X=o.includes(k);return t.jsxs($,{selected:X,children:[n&&t.jsx(U,{selection:!0,stickyLeft:!0,leftOffset:0,stickyZIndex:21,children:t.jsx(ae,{checked:X,onChange:d=>ie(k,d.target.checked),"aria-label":S("datagrid_select_row",{index:i+1})})}),e.map(d=>{const Y=d.dataIndex?r[d.dataIndex]:r[d.key],ee=d.fixed?F[d.key]:void 0;return t.jsx(U,{style:{minWidth:d.width,maxWidth:d.width,textAlign:d.align},label:typeof d.header=="string"?d.header:void 0,stickyLeft:d.fixed,leftOffset:ee?.offset,stickyZIndex:ee?.zIndex,children:d.render?d.render(Y,r,i):Y},d.key)})]},k)})})]}),s&&t.jsx("div",{className:"wim-datagrid__loading-overlay",children:t.jsx(fe,{size:"lg"})})]}),g&&t.jsx("div",{className:"wim-datagrid__footer",children:t.jsx(he,{total:g.total,pageSize:g.pageSize,current:g.current,onChange:g.onPageChange})})]})}l.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:"Column definitions"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data rows"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},selection:{required:!1,tsType:{name:"boolean"},description:"Whether to show selection checkboxes",defaultValue:{value:"false",computed:!1}},selectedRowKeys:{required:!1,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:"Array of selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRowKeys: React.Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},name:"selectedRowKeys"}],return:{name:"void"}}},description:"Callback when selection changes"},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => React.Key)",elements:[{name:"T"},{name:"unknown"}]},description:"Unique key for each row",defaultValue:{value:'"id"',computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:'{ key: string; direction: "asc" | "desc" | "none" }',signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!0}}]}},description:"Current sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: string, direction: "asc" | "desc" | "none") => void',signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sorting changes"},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  total: number;\r
  pageSize: number;\r
  current: number;\r
  onPageChange: (page: number) => void;\r
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"current",value:{name:"number",required:!0}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0}}]}},description:"Pagination configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether to show striped rows",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight rows on hover",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Whether the header is sticky",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height for the grid"},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height for the grid"},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message to show when data is empty"},a11y_select_all_rows:{required:!1,tsType:{name:"string"},description:"Accessibility label for selecting all rows"}}};const xe={title:"Components/Data Structures/DataGrid",component:l,tags:[],argTypes:{loading:{control:"boolean"},selection:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},stickyHeader:{control:"boolean"}}},W=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin",joinDate:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User",joinDate:"2024-02-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor",joinDate:"2024-03-10"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User",joinDate:"2024-04-05"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",status:"Active",role:"Admin",joinDate:"2024-05-12"}],K=Array.from({length:50}).map((e,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Editor":"User",status:a%3===0?"Active":a%2===0?"Inactive":"Pending",joinDate:`2024-${String(a%12+1).padStart(2,"0")}-${String(a%28+1).padStart(2,"0")}`})),Se=[{key:"id",header:"ID",width:80,sortable:!0,fixed:!0},{key:"name",header:"Name",width:150,sortable:!0,fixed:!1},{key:"email",header:"Email",sortable:!0,width:200},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:100,render:e=>t.jsx(Z,{content:e,size:"small",color:e==="Active"?"primary":e==="Inactive"?"neutral":"secondary"})}],p=()=>{const{t:e}=E(["docs","common","components"]),a=Se.map(n=>({...n,header:typeof n.header=="string"?e(`story_datagrid_col_${n.key}`):n.header,render:n.key==="status"?o=>{const c=e(o==="Active"?"story_datagrid_status_active":o==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(Z,{content:c,size:"small",color:o==="Active"?"primary":o==="Inactive"?"neutral":"secondary"})}:n.render}));return{t:e,tColumns:a,tSampleData:W}},v={render:e=>{const{tColumns:a,tSampleData:s}=p(),n=s;return t.jsx(l,{...e,columns:a,rows:n})},args:{bordered:!0}},C={render:()=>{const{t:e,tColumns:a,tSampleData:s}=p(),[n,o]=h.useState([]);return t.jsxs("div",{children:[t.jsxs("p",{style:{marginBottom:"16px"},children:[e("story_datagrid_selected"),n.join(", ")]}),t.jsx(l,{columns:a,rows:s,selection:!0,selectedRowKeys:n,onSelectionChange:o,bordered:!0})]})}},j={render:()=>{const{tColumns:e}=p(),[a,s]=h.useState({key:"id",direction:"none"}),[n,o]=h.useState(W),c=(m,u)=>{if(s({key:m,direction:u}),u==="none")o(W);else{const f=[...n].sort((g,_)=>{const y=g[m],w=_[m];return y<w?u==="asc"?-1:1:y>w?u==="asc"?1:-1:0});o(f)}};return t.jsx(l,{columns:e,rows:n,sortConfig:a,onSort:c,bordered:!0})}},T={render:()=>{const{tColumns:e}=p(),[a,s]=h.useState(1),n=10,o=(a-1)*n,c=o+n,m=K.slice(o,c);return t.jsx(l,{columns:e,rows:m,pagination:{total:K.length,pageSize:n,current:a,onPageChange:s},bordered:!0})}},R={render:()=>{const{t:e}=E(["docs","common","components"]),a=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"actions",header:e("story_datagrid_col_actions"),width:100,render:(s,n)=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(ne,{size:"small",priority:"tertiary",onClick:()=>alert(e("story_datagrid_action_edit",{name:n.name})),children:t.jsx(re,{name:"EditIcon",size:"small"})}),t.jsx(ne,{size:"small",priority:"tertiary",role:"destructive",onClick:()=>alert(e("story_datagrid_action_delete",{name:n.name})),children:t.jsx(re,{name:"TrashIcon",size:"small"})})]})}];return t.jsx(l,{columns:a,rows:W,bordered:!0})}},I={render:e=>{const{tColumns:a,tSampleData:s}=p(),n=s;return t.jsx(l,{...e,columns:a,rows:n})},args:{loading:!0,bordered:!0}},z={render:e=>{const{t:a,tColumns:s,tSampleData:n}=p(),o=n;return t.jsx(l,{...e,columns:s,rows:o,emptyMessage:a("story_datagrid_empty")})},args:{bordered:!0}},A={render:e=>{const{tColumns:a,tSampleData:s}=p(),n=s;return t.jsx(l,{...e,columns:a,rows:n})},args:{striped:!0,bordered:!0}},G={render:e=>{const{tColumns:a,tSampleData:s}=p(),n=s;return t.jsx(l,{...e,columns:a,rows:n})},args:{bordered:!0}},P={render:e=>{const{tColumns:a}=p(),s=K;return t.jsx(l,{...e,columns:a,rows:s})},args:{stickyHeader:!0,maxHeight:"400px",bordered:!0}},V={render:()=>{const{tColumns:e}=p(),[a,s]=h.useState([]),[n,o]=h.useState(1),[c,m]=h.useState({key:"id",direction:"none"}),[u,f]=h.useState(K),g=(D,x)=>{if(m({key:D,direction:x}),x==="none")f(K);else{const N=[...u].sort((L,O)=>{const B=L[D],S=O[D];return B<S?x==="asc"?-1:1:B>S?x==="asc"?1:-1:0});f(N)}},_=10,y=(n-1)*_,w=y+_,b=u.slice(y,w);return t.jsx("div",{children:t.jsx(l,{columns:e,rows:b,selection:!0,selectedRowKeys:a,onSelectionChange:s,sortConfig:c,onSort:g,pagination:{total:u.length,pageSize:_,current:n,onPageChange:o},striped:!0,hoverable:!0,bordered:!0})})}},q={render:()=>{const{t:e}=E(["docs","common","components"]),a=[{key:"id",header:e("story_datagrid_col_id"),width:55,fixed:!0},{key:"name",header:e("story_datagrid_col_name"),width:150,fixed:!1},{key:"email",header:e("story_datagrid_col_email"),width:200},{key:"role",header:e("story_datagrid_col_role"),width:100},{key:"joinDate",header:e("story_datagrid_col_joinDate"),width:150},{key:"status",header:e("story_datagrid_col_status"),width:100,render:s=>{const n=e(s==="Active"?"story_datagrid_status_active":s==="Inactive"?"story_datagrid_status_inactive":"story_datagrid_status_pending");return t.jsx(Z,{content:n,size:"small",color:s==="Active"?"primary":s==="Inactive"?"neutral":"secondary"})}}];return t.jsx(l,{columns:a,rows:W,selection:!0,bordered:!0})},decorators:[e=>t.jsx("div",{style:{maxWidth:"100vw"},children:t.jsx(e,{})})]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};const be=["Default","WithSelection","WithSorting","WithPagination","WithActions","Loading","Empty","Striped","Bordered","StickyHeader","FullFeatured","WithFixedColumn"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Bordered:G,Default:v,Empty:z,FullFeatured:V,Loading:I,StickyHeader:P,Striped:A,WithActions:R,WithFixedColumn:q,WithPagination:T,WithSelection:C,WithSorting:j,__namedExportsOrder:be,default:xe},Symbol.toStringTag,{value:"Module"}));export{G as B,Ve as D,z as E,V as F,I as L,A as S,C as W,j as a,T as b,R as c,P as d,q as e};
