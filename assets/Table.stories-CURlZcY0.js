import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as k}from"./iframe-CqpHVO8i.js";import{P as o}from"./index-8SIbFkC-.js";import{I as q}from"./Icon-Ce_1uR2t.js";import{B as V}from"./Badge-yrlrYC9A.js";import{C as M}from"./Checkbox-DNlMrI8R.js";const a=({striped:n=!1,bordered:l=!1,hoverable:t=!1,fullWidth:i=!1,stickyHeader:c=!1,scrollbar:d="default",height:s,maxHeight:r,className:b,children:S,...v})=>{const j=["wim-table",n?"wim-table--striped":"",l?"wim-table--bordered":"",t?"wim-table--hoverable":"",i?"wim-table--full-width":"",c?"wim-table--sticky-header":"",b].filter(Boolean).join(" "),R=["wim-table-container",c?"wim-table-container--sticky":"",d==="subtle"?"subtle-scrollbar":"",d==="hidden"?"no-scrollbar":""].filter(Boolean).join(" "),B={height:s,maxHeight:r,overflow:s||r?"auto":void 0};return e.jsx("div",{className:R,style:B,children:e.jsx("table",{className:j,...v,children:S})})},_=({className:n,children:l,...t})=>e.jsx("thead",{className:["wim-table__header",n].filter(Boolean).join(" "),...t,children:l}),D=({className:n,children:l,...t})=>e.jsx("tbody",{className:["wim-table__body",n].filter(Boolean).join(" "),...t,children:l}),E=({className:n,children:l,...t})=>e.jsx("tfoot",{className:["wim-table__footer",n].filter(Boolean).join(" "),...t,children:l}),L=({selected:n=!1,className:l,children:t,...i})=>e.jsx("tr",{className:["wim-table__row",n?"wim-table__row--selected":"",l].filter(Boolean).join(" "),...i,children:t}),A=({sortable:n=!1,sortDirection:l="none",onSort:t,className:i,children:c,...d})=>{const s=["wim-table__head",n?"wim-table__head--sortable":"",d.selection?"wim-table__head--selection":"",i].filter(Boolean).join(" ");return e.jsx("th",{className:s,...d,onClick:n?t:d.onClick,tabIndex:n?0:void 0,"aria-sort":n?l==="asc"?"ascending":l==="desc"?"descending":"none":void 0,onKeyDown:r=>{n&&t&&(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),t(r)),d.onKeyDown?.(r)},children:e.jsxs("div",{className:"wim-table__head-content",children:[c,n&&e.jsx("span",{className:["wim-table__sort-icon",`wim-table__sort-icon--${l}`].join(" "),children:e.jsx(q,{name:"ChevronDownIcon",size:"small"})})]})})},N=({selection:n=!1,className:l,children:t,...i})=>e.jsx("td",{className:["wim-table__cell",n?"wim-table__cell--selection":"",l].filter(Boolean).join(" "),...i,children:t});a.Header=_;a.Body=D;a.Footer=E;a.Row=L;a.Head=A;a.Cell=N;a.propTypes={striped:o.bool,bordered:o.bool,hoverable:o.bool,fullWidth:o.bool,stickyHeader:o.bool,scrollbar:o.oneOf(["default","subtle","hidden"]),height:o.oneOfType([o.string,o.number]),maxHeight:o.oneOfType([o.string,o.number]),className:o.string,children:o.node.isRequired};a.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.HTMLAttributes<HTMLTableSectionElement>`,optional:!1,type:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLTableSectionElement>",elements:[{name:"HTMLTableSectionElement"}],alias:"React.HTMLAttributes"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.HTMLAttributes<HTMLTableSectionElement>`,optional:!1,type:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLTableSectionElement>",elements:[{name:"HTMLTableSectionElement"}],alias:"React.HTMLAttributes"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.HTMLAttributes<HTMLTableSectionElement>`,optional:!1,type:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLTableSectionElement>",elements:[{name:"HTMLTableSectionElement"}],alias:"React.HTMLAttributes"}}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{\r
    selected = false,\r
    className,\r
    children,\r
    ...props\r
}: TableRowProps`,optional:!1,type:{name:"intersection",raw:`React.HTMLAttributes<HTMLTableRowElement> & {\r
    selected?: boolean;\r
}`,elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},{name:"signature",type:"object",raw:`{\r
    selected?: boolean;\r
}`,signature:{properties:[{key:"selected",value:{name:"boolean",required:!1}}]}}],alias:"TableRowProps"}}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{\r
    sortable = false,\r
    sortDirection = "none",\r
    onSort,\r
    className,\r
    children,\r
    ...props\r
}: TableHeadProps`,optional:!1,type:{name:"intersection",raw:`React.ThHTMLAttributes<HTMLTableCellElement> & {\r
    sortable?: boolean;\r
    sortDirection?: "asc" | "desc" | "none";\r
    onSort?: (e: React.MouseEvent) => void;\r
    selection?: boolean;\r
}`,elements:[{name:"ReactThHTMLAttributes",raw:"React.ThHTMLAttributes<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},{name:"signature",type:"object",raw:`{\r
    sortable?: boolean;\r
    sortDirection?: "asc" | "desc" | "none";\r
    onSort?: (e: React.MouseEvent) => void;\r
    selection?: boolean;\r
}`,signature:{properties:[{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortDirection",value:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}],required:!1}},{key:"onSort",value:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}},required:!1}},{key:"selection",value:{name:"boolean",required:!1}}]}}],alias:"TableHeadProps"}}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{\r
    selection = false,\r
    className,\r
    children,\r
    ...props\r
}: TableCellProps`,optional:!1,type:{name:"intersection",raw:`React.TdHTMLAttributes<HTMLTableCellElement> & {\r
    selection?: boolean;\r
}`,elements:[{name:"ReactTdHTMLAttributes",raw:"React.TdHTMLAttributes<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},{name:"signature",type:"object",raw:`{\r
    selection?: boolean;\r
}`,signature:{properties:[{key:"selection",value:{name:"boolean",required:!1}}]}}],alias:"TableCellProps"}}],returns:null}],displayName:"Table",props:{striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},scrollbar:{required:!1,tsType:{name:"union",raw:'"default" | "subtle" | "hidden"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"subtle"'},{name:"literal",value:'"hidden"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"subtle"',computed:!1},{value:'"hidden"',computed:!1}]}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}}}};_.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};D.__docgenInfo={description:"",methods:[],displayName:"TableBody"};E.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};L.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc" | "none"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},selection:{required:!1,tsType:{name:"boolean"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{selection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const W={title:"Component/Data Display/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},I=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User"}],C=Array.from({length:30}).map((n,l)=>({id:l+1,name:`User ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?"Admin":"Member",status:l%2===0?"Active":"Inactive"})),F=e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Status"})]})}),e.jsx(a.Body,{children:I.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:n.name}),e.jsx(a.Cell,{children:n.email}),e.jsx(a.Cell,{children:n.role}),e.jsx(a.Cell,{children:e.jsx(V,{content:n.status,size:"small",color:n.status==="Active"?"primary":"neutral"})})]},n.id))})]}),m={args:{children:F}},p={args:{...m.args,striped:!0}},T={args:{...m.args,bordered:!0}},f={args:{...m.args,hoverable:!0}},h={args:{...m.args,fullWidth:!0}},g={args:{fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:I.slice(0,2).map(n=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:n.name}),e.jsx(a.Cell,{children:n.email}),e.jsx(a.Cell,{children:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"4px 8px",cursor:"pointer",color:"red"},children:"Delete"})]})})]},n.id))})]})}},y={render:n=>{const[l,t]=k.useState({key:"id",direction:"asc"}),[i,c]=k.useState(C),d=s=>{let r="asc";if(l.key===s&&(l.direction==="asc"?r="desc":l.direction==="desc"&&(r="none")),t({key:s,direction:r}),r==="none")c(C);else{const b=[...i].sort((S,v)=>{const j=S[s],R=v[s];return j<R?r==="asc"?-1:1:j>R?r==="asc"?1:-1:0});c(b)}};return e.jsxs(a,{...n,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:l.key==="id"?l.direction:"none",onSort:()=>d("id"),children:"ID"}),e.jsx(a.Head,{sortable:!0,sortDirection:l.key==="name"?l.direction:"none",onSort:()=>d("name"),children:"Name"}),e.jsx(a.Head,{sortable:!0,sortDirection:l.key==="email"?l.direction:"none",onSort:()=>d("email"),children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:i.slice(0,10).map(s=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:s.id}),e.jsx(a.Cell,{children:s.name}),e.jsx(a.Cell,{children:s.email}),e.jsx(a.Cell,{children:s.role})]},s.id))})]})}},H={render:n=>{const[l,t]=k.useState([]),i=l.length===5,c=l.length>0&&l.length<5,d=()=>{t(i?[]:[1,2,3,4,5])},s=r=>{l.includes(r)?t(l.filter(b=>b!==r)):t([...l,r])};return e.jsxs(a,{...n,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(M,{checked:i,indeterminate:c,onChange:d})}),e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"})]})}),e.jsx(a.Body,{children:C.slice(0,5).map(r=>e.jsxs(a.Row,{selected:l.includes(r.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(M,{checked:l.includes(r.id),onChange:()=>s(r.id)})}),e.jsx(a.Cell,{children:r.id}),e.jsx(a.Cell,{children:r.name}),e.jsx(a.Cell,{children:r.email})]},r.id))})]})}},u={args:{stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"})]})}),e.jsx(a.Body,{children:C.map(n=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:n.id}),e.jsx(a.Cell,{children:n.name}),e.jsx(a.Cell,{children:n.email}),e.jsx(a.Cell,{children:n.role})]},n.id))})]})}},x={args:{...u.args,scrollbar:"subtle"}},w={args:{...u.args,scrollbar:"hidden"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: DefaultTableChildren
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hoverable: true
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "subtle"
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...StickyHeader.args,
    scrollbar: "hidden"
  }
}`,...w.parameters?.docs?.source}}};const P=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar"],G=Object.freeze(Object.defineProperty({__proto__:null,Bordered:T,Default:m,FullWidth:h,HiddenScrollbar:w,Hoverable:f,RowSelection:H,Sortable:y,StickyHeader:u,Striped:p,SubtleScrollbar:x,WithActions:g,__namedExportsOrder:P,default:W},Symbol.toStringTag,{value:"Module"}));export{T as B,h as F,f as H,H as R,p as S,G as T,g as W,u as a,x as b,y as c};
