import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as _}from"./iframe-DMgQDpBx.js";import{c as m}from"./index-MafWY-Pw.js";import{I as A}from"./Icon-WCf84-EP.js";import{B as F}from"./Badge-kFk-BdXD.js";import{C as k}from"./Checkbox-CAUuRqDS.js";const D=({striped:l=!1,bordered:r=!1,hoverable:n=!1,fullWidth:o=!1,stickyHeader:i=!1,scrollbar:d="default",height:s,maxHeight:t,className:b,children:S,...R})=>{const C={height:s,maxHeight:t,overflow:s||t?"auto":void 0};return e.jsx("div",{className:m("wim-table-container",i&&"wim-table-container--sticky",d==="subtle"&&"subtle-scrollbar",d==="hidden"&&"no-scrollbar"),style:C,children:e.jsx("table",{className:m("wim-table",l&&"wim-table--striped",r&&"wim-table--bordered",n&&"wim-table--hoverable",o&&"wim-table--full-width",i&&"wim-table--sticky-header",b),...R,children:S})})},I=({className:l,children:r,...n})=>e.jsx("thead",{className:m("wim-table__header",l),...n,children:r}),N=({className:l,children:r,...n})=>e.jsx("tbody",{className:m("wim-table__body",l),...n,children:r}),B=({className:l,children:r,...n})=>e.jsx("tfoot",{className:m("wim-table__footer",l),...n,children:r}),E=({selected:l=!1,className:r,children:n,...o})=>e.jsx("tr",{className:m("wim-table__row",l&&"wim-table__row--selected",r),...o,children:n}),V=({sortable:l=!1,sortDirection:r="none",onSort:n,className:o,children:i,...d})=>e.jsx("th",{className:m("wim-table__head",l&&"wim-table__head--sortable",d.selection&&"wim-table__head--selection",o),...d,onClick:l?n:d.onClick,tabIndex:l?0:void 0,"aria-sort":l?r==="asc"?"ascending":r==="desc"?"descending":"none":void 0,onKeyDown:s=>{l&&n&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n(s)),d.onKeyDown?.(s)},children:e.jsxs("div",{className:"wim-table__head-content",children:[i,l&&e.jsx("span",{className:m("wim-table__sort-icon",`wim-table__sort-icon--${r}`),children:e.jsx(A,{name:"ChevronDownIcon",size:"small"})})]})}),W=({selection:l=!1,className:r,children:n,...o})=>e.jsx("td",{className:m("wim-table__cell",l&&"wim-table__cell--selection",r),...o,children:n}),a=D;a.Header=I;a.Body=N;a.Footer=B;a.Row=E;a.Head=V;a.Cell=W;I.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};N.__docgenInfo={description:"",methods:[],displayName:"TableBody"};B.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};E.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};V.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},selection:{required:!1,tsType:{name:"boolean"},description:""}}};W.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{selection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"Table",props:{striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},scrollbar:{required:!1,tsType:{name:"union",raw:'"default" | "subtle" | "hidden"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"hidden"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M={title:"Component/Data Display/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},q=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User"}],w=Array.from({length:30}).map((l,r)=>({id:r+1,name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":"Member",status:r%2===0?"Active":"Inactive"})),z=e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Status"})]})}),e.jsx(a.Body,{children:q.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{children:e.jsx(F,{content:l.status,size:"small",color:l.status==="Active"?"primary":"neutral"})})]},l.id))})]}),c={args:{children:z}},p={args:{...c.args,striped:!0}},h={args:{...c.args,bordered:!0}},f={args:{...c.args,hoverable:!0}},T={args:{...c.args,fullWidth:!0}},g={args:{fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:q.slice(0,2).map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer",color:"red"},children:"Delete"})]})})]},l.id))})]})}},x={render:l=>{const[r,n]=_.useState({key:"id",direction:"asc"}),[o,i]=_.useState(w),d=s=>{let t="asc";if(r.key===s&&(r.direction==="asc"?t="desc":r.direction==="desc"&&(t="none")),n({key:s,direction:t}),t==="none")i(w);else{const b=[...o].sort((S,R)=>{const C=S[s],v=R[s];return C<v?t==="asc"?-1:1:C>v?t==="asc"?1:-1:0});i(b)}};return e.jsxs(a,{...l,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="id"?r.direction:"none",onSort:()=>d("id"),children:"ID"}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="name"?r.direction:"none",onSort:()=>d("name"),children:"Name"}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="email"?r.direction:"none",onSort:()=>d("email"),children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:o.slice(0,10).map(s=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:s.id}),e.jsx(a.Cell,{children:s.name}),e.jsx(a.Cell,{children:s.email}),e.jsx(a.Cell,{children:s.role})]},s.id))})]})}},y={render:l=>{const[r,n]=_.useState([]),o=r.length===5,i=r.length>0&&r.length<5,d=()=>{n(o?[]:[1,2,3,4,5])},s=t=>{r.includes(t)?n(r.filter(b=>b!==t)):n([...r,t])};return e.jsxs(a,{...l,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(k,{checked:o,indeterminate:i,onChange:d})}),e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"})]})}),e.jsx(a.Body,{children:w.slice(0,5).map(t=>e.jsxs(a.Row,{selected:r.includes(t.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(k,{checked:r.includes(t.id),onChange:()=>s(t.id)})}),e.jsx(a.Cell,{children:t.id}),e.jsx(a.Cell,{children:t.name}),e.jsx(a.Cell,{children:t.email})]},t.id))})]})}},u={args:{stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:w.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.id}),e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role})]},l.id))})]})}},j={args:{...u.args,scrollbar:"subtle"}},H={args:{...u.args,scrollbar:"hidden"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hoverable: true
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                            <Table.Cell>{row.name}</Table.Cell>\r
                            <Table.Cell>{row.email}</Table.Cell>\r
                            <Table.Cell>\r
                                <div style={{
              display: "flex",
              gap: "8px"
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
                            <Table.Cell>{row.id}</Table.Cell>\r
                            <Table.Cell>{row.name}</Table.Cell>\r
                            <Table.Cell>{row.email}</Table.Cell>\r
                            <Table.Cell>{row.role}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </Table>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                            <Table.Cell>{row.id}</Table.Cell>\r
                            <Table.Cell>{row.name}</Table.Cell>\r
                            <Table.Cell>{row.email}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </Table>;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                            <Table.Cell>{row.id}</Table.Cell>\r
                            <Table.Cell>{row.name}</Table.Cell>\r
                            <Table.Cell>{row.email}</Table.Cell>\r
                            <Table.Cell>{row.role}</Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  }
}`,...u.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "subtle"
  }
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "hidden"
  }
}`,...H.parameters?.docs?.source}}};const J=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar"],L=Object.freeze(Object.defineProperty({__proto__:null,Bordered:h,Default:c,FullWidth:T,HiddenScrollbar:H,Hoverable:f,RowSelection:y,Sortable:x,StickyHeader:u,Striped:p,SubtleScrollbar:j,WithActions:g,__namedExportsOrder:J,default:M},Symbol.toStringTag,{value:"Module"}));export{h as B,T as F,f as H,y as R,p as S,L as T,g as W,u as a,j as b,x as c};
