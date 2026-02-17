import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as _}from"./iframe-CVYkroJl.js";import{c as m}from"./index-BrgqE5mE.js";import{I as M}from"./Icon-BeKR45dx.js";import{B as k}from"./Badge-o-gDPHHy.js";import{C as N}from"./Checkbox-BH0U2kak.js";const E=({striped:l=!1,bordered:r=!1,hoverable:n=!1,fullWidth:o=!1,stickyHeader:i=!1,scrollbar:d="default",mobileCard:t=!1,height:s,maxHeight:u,className:v,children:D,...w})=>{const R={height:s,maxHeight:u,overflow:s||u?"auto":void 0};return e.jsx("div",{className:m("wim-table-container",i&&"wim-table-container--sticky",d==="subtle"&&"subtle-scrollbar",d==="hidden"&&"no-scrollbar"),style:R,children:e.jsx("table",{className:m("wim-table",l&&"wim-table--striped",r&&"wim-table--bordered",n&&"wim-table--hoverable",o&&"wim-table--full-width",i&&"wim-table--sticky-header",t&&"wim-table--mobile-card",v),...w,children:D})})},B=({className:l,children:r,...n})=>e.jsx("thead",{className:m("wim-table__header",l),...n,children:r}),V=({className:l,children:r,...n})=>e.jsx("tbody",{className:m("wim-table__body",l),...n,children:r}),A=({className:l,children:r,...n})=>e.jsx("tfoot",{className:m("wim-table__footer",l),...n,children:r}),W=({selected:l=!1,className:r,children:n,...o})=>e.jsx("tr",{className:m("wim-table__row",l&&"wim-table__row--selected",r),...o,children:n}),q=({sortable:l=!1,sortDirection:r="none",onSort:n,className:o,children:i,...d})=>e.jsx("th",{className:m("wim-table__head",l&&"wim-table__head--sortable",d.selection&&"wim-table__head--selection",o),...d,onClick:l?n:d.onClick,tabIndex:l?0:void 0,"aria-sort":l?r==="asc"?"ascending":r==="desc"?"descending":"none":void 0,onKeyDown:t=>{l&&n&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n(t)),d.onKeyDown?.(t)},children:e.jsxs("div",{className:"wim-table__head-content",children:[i,l&&e.jsx("span",{className:m("wim-table__sort-icon",`wim-table__sort-icon--${r}`),children:e.jsx(M,{name:"ChevronDownIcon",size:"small"})})]})}),F=({selection:l=!1,label:r,className:n,children:o,...i})=>e.jsx("td",{className:m("wim-table__cell",l&&"wim-table__cell--selection",n),"data-label":r,...i,children:o}),a=E;a.Header=B;a.Body=V;a.Footer=A;a.Row=W;a.Head=q;a.Cell=F;B.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};V.__docgenInfo={description:"",methods:[],displayName:"TableBody"};A.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};W.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},selection:{required:!1,tsType:{name:"boolean"},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{selection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"Table",props:{striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},scrollbar:{required:!1,tsType:{name:"union",raw:'"default" | "subtle" | "hidden"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"hidden"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},mobileCard:{required:!1,tsType:{name:"boolean"},description:"Mobile view: Switch to card layout",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z={title:"Component/Data Display/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User"}],S=Array.from({length:30}).map((l,r)=>({id:r+1,name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":"Member",status:r%2===0?"Active":"Inactive"})),J=e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Status"})]})}),e.jsx(a.Body,{children:I.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:"Name",children:l.name}),e.jsx(a.Cell,{label:"Email",children:l.email}),e.jsx(a.Cell,{label:"Role",children:l.role}),e.jsx(a.Cell,{label:"Status",children:e.jsx(k,{content:l.status,size:"small",color:l.status==="Active"?"primary":"neutral"})})]},l.id))})]}),c={args:{children:J}},p={args:{...c.args,striped:!0}},h={args:{...c.args,bordered:!0}},T={args:{...c.args,hoverable:!0}},f={args:{...c.args,fullWidth:!0}},x={args:{fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:I.slice(0,2).map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:"Name",children:l.name}),e.jsx(a.Cell,{label:"Email",children:l.email}),e.jsx(a.Cell,{label:"Actions",children:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer",color:"red"},children:"Delete"})]})})]},l.id))})]})}},g={render:l=>{const[r,n]=_.useState({key:"id",direction:"asc"}),[o,i]=_.useState(S),d=t=>{let s="asc";if(r.key===t&&(r.direction==="asc"?s="desc":r.direction==="desc"&&(s="none")),n({key:t,direction:s}),s==="none")i(S);else{const u=[...o].sort((v,D)=>{const w=v[t],R=D[t];return w<R?s==="asc"?-1:1:w>R?s==="asc"?1:-1:0});i(u)}};return e.jsxs(a,{...l,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="id"?r.direction:"none",onSort:()=>d("id"),children:"ID"}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="name"?r.direction:"none",onSort:()=>d("name"),children:"Name"}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="email"?r.direction:"none",onSort:()=>d("email"),children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:o.slice(0,10).map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:"ID",children:t.id}),e.jsx(a.Cell,{label:"Name",children:t.name}),e.jsx(a.Cell,{label:"Email",children:t.email}),e.jsx(a.Cell,{label:"Role",children:t.role})]},t.id))})]})}},y={render:l=>{const[r,n]=_.useState([]),o=r.length===5,i=r.length>0&&r.length<5,d=()=>{n(o?[]:[1,2,3,4,5])},t=s=>{r.includes(s)?n(r.filter(u=>u!==s)):n([...r,s])};return e.jsxs(a,{...l,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(N,{checked:o,indeterminate:i,onChange:d})}),e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"})]})}),e.jsx(a.Body,{children:S.slice(0,5).map(s=>e.jsxs(a.Row,{selected:r.includes(s.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(N,{checked:r.includes(s.id),onChange:()=>t(s.id)})}),e.jsx(a.Cell,{label:"ID",children:s.id}),e.jsx(a.Cell,{label:"Name",children:s.name}),e.jsx(a.Cell,{label:"Email",children:s.email})]},s.id))})]})}},b={args:{stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:S.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:"ID",children:l.id}),e.jsx(a.Cell,{label:"Name",children:l.name}),e.jsx(a.Cell,{label:"Email",children:l.email}),e.jsx(a.Cell,{label:"Role",children:l.role})]},l.id))})]})}},j={args:{...b.args,scrollbar:"subtle"}},C={args:{...b.args,scrollbar:"hidden"}},H={args:{mobileCard:!0,fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Status"})]})}),e.jsx(a.Body,{children:I.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:"ID",children:l.id}),e.jsx(a.Cell,{label:"Name",children:l.name}),e.jsx(a.Cell,{label:"Email",children:l.email}),e.jsx(a.Cell,{label:"Role",children:l.role}),e.jsx(a.Cell,{label:"Status",children:e.jsx(k,{content:l.status,size:"small",color:l.status==="Active"?"primary":"neutral"})})]},l.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: DefaultTableChildren
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hoverable: true
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: <>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head>Name</Table.Head>\r
                        <Table.Head>Email</Table.Head>\r
                        <Table.Head>Actions</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {sampleData.slice(0, 2).map(row => <Table.Row key={row.id}>\r
                            <Table.Cell label="Name">{row.name}</Table.Cell>\r
                            <Table.Cell label="Email">{row.email}</Table.Cell>\r
                            <Table.Cell label="Actions">\r
                                <div style={{
              display: "flex",
              gap: "8px",
              justifyContent: "flex-end"
            }}>\r
                                    <button style={{
                padding: "4px 8px",
                cursor: "pointer"
              }}>Edit</button>\r
                                    <button style={{
                padding: "4px 8px",
                cursor: "pointer",
                color: "red"
              }}>Delete</button>\r
                                </div>\r
                            </Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "asc"
    });
    const [data, setData] = React.useState(manyRows);
    const handleSort = (key: string) => {
      let direction: "asc" | "desc" | "none" = "asc";
      if (sortConfig.key === key) {
        if (sortConfig.direction === "asc") direction = "desc";else if (sortConfig.direction === "desc") direction = "none";
      }
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
    return <Table {...args} fullWidth>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head sortable sortDirection={sortConfig.key === "id" ? sortConfig.direction : "none"} onSort={() => handleSort("id")}>\r
                            ID\r
                        </Table.Head>\r
                        <Table.Head sortable sortDirection={sortConfig.key === "name" ? sortConfig.direction : "none"} onSort={() => handleSort("name")}>\r
                            Name\r
                        </Table.Head>\r
                        <Table.Head sortable sortDirection={sortConfig.key === "email" ? sortConfig.direction : "none"} onSort={() => handleSort("email")}>\r
                            Email\r
                        </Table.Head>\r
                        <Table.Head>Role</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {data.slice(0, 10).map(row => <Table.Row key={row.id}>\r
                            <Table.Cell label="ID">{row.id}</Table.Cell>\r
                            <Table.Cell label="Name">{row.name}</Table.Cell>\r
                            <Table.Cell label="Email">{row.email}</Table.Cell>\r
                            <Table.Cell label="Role">{row.role}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </Table>;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const allSelected = selectedIds.length === 5;
    const indeterminate = selectedIds.length > 0 && selectedIds.length < 5;
    const toggleAll = () => {
      if (allSelected) {
        setSelectedIds([]);
      } else {
        setSelectedIds([1, 2, 3, 4, 5]);
      }
    };
    const toggleRow = (id: number) => {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter(sid => sid !== id));
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    };
    return <Table {...args} fullWidth>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head selection>\r
                            <Checkbox checked={allSelected} indeterminate={indeterminate} onChange={toggleAll} />\r
                        </Table.Head>\r
                        <Table.Head>ID</Table.Head>\r
                        <Table.Head>Name</Table.Head>\r
                        <Table.Head>Email</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {manyRows.slice(0, 5).map(row => <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>\r
                            <Table.Cell selection>\r
                                <Checkbox checked={selectedIds.includes(row.id)} onChange={() => toggleRow(row.id)} />\r
                            </Table.Cell>\r
                            <Table.Cell label="ID">{row.id}</Table.Cell>\r
                            <Table.Cell label="Name">{row.name}</Table.Cell>\r
                            <Table.Cell label="Email">{row.email}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </Table>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    fullWidth: true,
    maxHeight: "300px",
    children: <>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head>ID</Table.Head>\r
                        <Table.Head>Name</Table.Head>\r
                        <Table.Head>Email</Table.Head>\r
                        <Table.Head>Role</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {manyRows.map(row => <Table.Row key={row.id}>\r
                            <Table.Cell label="ID">{row.id}</Table.Cell>\r
                            <Table.Cell label="Name">{row.name}</Table.Cell>\r
                            <Table.Cell label="Email">{row.email}</Table.Cell>\r
                            <Table.Cell label="Role">{row.role}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "subtle"
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "hidden"
  }
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    mobileCard: true,
    fullWidth: true,
    children: <>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head>ID</Table.Head>\r
                        <Table.Head>Name</Table.Head>\r
                        <Table.Head>Email</Table.Head>\r
                        <Table.Head>Role</Table.Head>\r
                        <Table.Head>Status</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {sampleData.map(row => <Table.Row key={row.id}>\r
                            <Table.Cell label="ID">{row.id}</Table.Cell>\r
                            <Table.Cell label="Name">{row.name}</Table.Cell>\r
                            <Table.Cell label="Email">{row.email}</Table.Cell>\r
                            <Table.Cell label="Role">{row.role}</Table.Cell>\r
                            <Table.Cell label="Status">\r
                                <Badge content={row.status} size="small" color={row.status === "Active" ? "primary" : "neutral"} />\r
                            </Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...H.parameters?.docs?.source}}};const O=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],Q=Object.freeze(Object.defineProperty({__proto__:null,Bordered:h,Default:c,FullWidth:f,HiddenScrollbar:C,Hoverable:T,MobileCard:H,RowSelection:y,Sortable:g,StickyHeader:b,Striped:p,SubtleScrollbar:j,WithActions:x,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{h as B,f as F,T as H,y as R,p as S,Q as T,x as W,b as a,j as b,g as c};
