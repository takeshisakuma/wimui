import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as y}from"./iframe-D7d7Avab.js";import{T as l}from"./Table-CO2LcdSI.js";import{B as k}from"./Badge-CCplGSTr.js";import{C as I}from"./Checkbox-BSyQyvwg.js";const N={title:"Component/Data Structures/Table",component:l,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},R=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User"}],f=Array.from({length:30}).map((a,r)=>({id:r+1,name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":"Member",status:r%2===0?"Active":"Inactive"})),v=e.jsxs(e.Fragment,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Role"}),e.jsx(l.Head,{children:"Status"})]})}),e.jsx(l.Body,{children:R.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{label:"Name",children:a.name}),e.jsx(l.Cell,{label:"Email",children:a.email}),e.jsx(l.Cell,{label:"Role",children:a.role}),e.jsx(l.Cell,{label:"Status",children:e.jsx(k,{content:a.status,size:"small",color:a.status==="Active"?"primary":"neutral"})})]},a.id))})]}),t={args:{children:v}},b={args:{...t.args,striped:!0}},m={args:{...t.args,bordered:!0}},u={args:{...t.args,hoverable:!0}},h={args:{...t.args,fullWidth:!0}},T={args:{fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Actions"})]})}),e.jsx(l.Body,{children:R.slice(0,2).map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{label:"Name",children:a.name}),e.jsx(l.Cell,{label:"Email",children:a.email}),e.jsx(l.Cell,{label:"Actions",children:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer",color:"red"},children:"Delete"})]})})]},a.id))})]})}},p={render:a=>{const[r,d]=y.useState({key:"id",direction:"asc"}),[i,j]=y.useState(f),c=s=>{let n="asc";if(r.key===s&&(r.direction==="asc"?n="desc":r.direction==="desc"&&(n="none")),d({key:s,direction:n}),n==="none")j(f);else{const S=[...i].sort((E,B)=>{const w=E[s],D=B[s];return w<D?n==="asc"?-1:1:w>D?n==="asc"?1:-1:0});j(S)}};return e.jsxs(l,{...a,fullWidth:!0,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{sortable:!0,sortDirection:r.key==="id"?r.direction:"none",onSort:()=>c("id"),children:"ID"}),e.jsx(l.Head,{sortable:!0,sortDirection:r.key==="name"?r.direction:"none",onSort:()=>c("name"),children:"Name"}),e.jsx(l.Head,{sortable:!0,sortDirection:r.key==="email"?r.direction:"none",onSort:()=>c("email"),children:"Email"}),e.jsx(l.Head,{children:"Role"})]})}),e.jsx(l.Body,{children:i.slice(0,10).map(s=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{label:"ID",children:s.id}),e.jsx(l.Cell,{label:"Name",children:s.name}),e.jsx(l.Cell,{label:"Email",children:s.email}),e.jsx(l.Cell,{label:"Role",children:s.role})]},s.id))})]})}},x={render:a=>{const[r,d]=y.useState([]),i=r.length===5,j=r.length>0&&r.length<5,c=()=>{d(i?[]:[1,2,3,4,5])},s=n=>{r.includes(n)?d(r.filter(S=>S!==n)):d([...r,n])};return e.jsxs(l,{...a,fullWidth:!0,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{selection:!0,children:e.jsx(I,{checked:i,indeterminate:j,onChange:c})}),e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"})]})}),e.jsx(l.Body,{children:f.slice(0,5).map(n=>e.jsxs(l.Row,{selected:r.includes(n.id),children:[e.jsx(l.Cell,{selection:!0,children:e.jsx(I,{checked:r.includes(n.id),onChange:()=>s(n.id)})}),e.jsx(l.Cell,{label:"ID",children:n.id}),e.jsx(l.Cell,{label:"Name",children:n.name}),e.jsx(l.Cell,{label:"Email",children:n.email})]},n.id))})]})}},o={args:{stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:e.jsxs(e.Fragment,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Role"})]})}),e.jsx(l.Body,{children:f.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{label:"ID",children:a.id}),e.jsx(l.Cell,{label:"Name",children:a.name}),e.jsx(l.Cell,{label:"Email",children:a.email}),e.jsx(l.Cell,{label:"Role",children:a.role})]},a.id))})]})}},g={args:{...o.args,scrollbar:"subtle"}},C={args:{...o.args,scrollbar:"hidden"}},H={args:{mobileCard:!0,fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Role"}),e.jsx(l.Head,{children:"Status"})]})}),e.jsx(l.Body,{children:R.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{label:"ID",children:a.id}),e.jsx(l.Cell,{label:"Name",children:a.name}),e.jsx(l.Cell,{label:"Email",children:a.email}),e.jsx(l.Cell,{label:"Role",children:a.role}),e.jsx(l.Cell,{label:"Status",children:e.jsx(k,{content:a.status,size:"small",color:a.status==="Active"?"primary":"neutral"})})]},a.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: DefaultTableChildren
  }
}`,...t.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hoverable: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "subtle"
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};const A=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],M=Object.freeze(Object.defineProperty({__proto__:null,Bordered:m,Default:t,FullWidth:h,HiddenScrollbar:C,Hoverable:u,MobileCard:H,RowSelection:x,Sortable:p,StickyHeader:o,Striped:b,SubtleScrollbar:g,WithActions:T,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{m as B,h as F,u as H,x as R,b as S,M as T,T as W,o as a,g as b,p as c};
