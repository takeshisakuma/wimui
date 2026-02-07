import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as n}from"./index-DfOXKc1O.js";import{B as b}from"./Button-C0p6jbG4.js";import{B as M}from"./Badge-B9T0oOOE.js";const a=({striped:l=!1,bordered:r=!1,hoverable:t=!1,fullWidth:R=!1,className:j,children:x,...g})=>{const w=["wim-table",l?"wim-table--striped":"",r?"wim-table--bordered":"",t?"wim-table--hoverable":"",R?"wim-table--full-width":"",j].filter(Boolean).join(" ");return e.jsx("div",{className:"wim-table-container",children:e.jsx("table",{className:w,...g,children:x})})},p=({className:l,children:r,...t})=>e.jsx("thead",{className:["wim-table__header",l].filter(Boolean).join(" "),...t,children:r}),T=({className:l,children:r,...t})=>e.jsx("tbody",{className:["wim-table__body",l].filter(Boolean).join(" "),...t,children:r}),u=({className:l,children:r,...t})=>e.jsx("tfoot",{className:["wim-table__footer",l].filter(Boolean).join(" "),...t,children:r}),H=({className:l,children:r,...t})=>e.jsx("tr",{className:["wim-table__row",l].filter(Boolean).join(" "),...t,children:r}),h=({className:l,children:r,...t})=>e.jsx("th",{className:["wim-table__head",l].filter(Boolean).join(" "),...t,children:r}),f=({className:l,children:r,...t})=>e.jsx("td",{className:["wim-table__cell",l].filter(Boolean).join(" "),...t,children:r});a.Header=p;a.Body=T;a.Footer=u;a.Row=H;a.Head=h;a.Cell=f;a.propTypes={striped:n.bool,bordered:n.bool,hoverable:n.bool,fullWidth:n.bool,className:n.string,children:n.node.isRequired};a.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{\r
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
    className,\r
    children,\r
    ...props\r
}: React.HTMLAttributes<HTMLTableRowElement>`,optional:!1,type:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}],alias:"React.HTMLAttributes"}}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.ThHTMLAttributes<HTMLTableCellElement>`,optional:!1,type:{name:"ReactThHTMLAttributes",raw:"React.ThHTMLAttributes<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}],alias:"React.ThHTMLAttributes"}}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{\r
    className,\r
    children,\r
    ...props\r
}: React.TdHTMLAttributes<HTMLTableCellElement>`,optional:!1,type:{name:"ReactTdHTMLAttributes",raw:"React.TdHTMLAttributes<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}],alias:"React.TdHTMLAttributes"}}],returns:null}],displayName:"Table",props:{striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}}}};p.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};u.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};H.__docgenInfo={description:"",methods:[],displayName:"TableRow"};h.__docgenInfo={description:"",methods:[],displayName:"TableHead"};f.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const L={title:"Component/Data Display/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"}}},y=[{id:1,name:"John Doe",email:"john@example.com",status:"Active",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",status:"Inactive",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",status:"Active",role:"Editor"},{id:4,name:"Alice Brown",email:"alice@example.com",status:"Pending",role:"User"}],s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Status"})]})}),e.jsx(a.Body,{children:y.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{children:e.jsx(M,{content:l.status,size:"small",color:l.status==="Active"?"primary":l.status==="Inactive"?"neutral":"secondary"})})]},l.id))})]})}},o={args:{...s.args,striped:!0}},i={args:{...s.args,bordered:!0}},d={args:{...s.args,hoverable:!0}},c={args:{...s.args,fullWidth:!0}},m={args:{fullWidth:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:y.slice(0,2).map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(b,{size:"small",label:"Edit",priority:"secondary"}),e.jsx(b,{size:"small",label:"Delete",priority:"tertiary",role:"destructive"})]})})]},l.id))})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Table.Header>\r
                    <Table.Row>\r
                        <Table.Head>Name</Table.Head>\r
                        <Table.Head>Email</Table.Head>\r
                        <Table.Head>Role</Table.Head>\r
                        <Table.Head>Status</Table.Head>\r
                    </Table.Row>\r
                </Table.Header>\r
                <Table.Body>\r
                    {sampleData.map(row => <Table.Row key={row.id}>\r
                            <Table.Cell>{row.name}</Table.Cell>\r
                            <Table.Cell>{row.email}</Table.Cell>\r
                            <Table.Cell>{row.role}</Table.Cell>\r
                            <Table.Cell>\r
                                <Badge content={row.status} size="small" color={row.status === "Active" ? "primary" : row.status === "Inactive" ? "neutral" : "secondary"} />\r
                            </Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    striped: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hoverable: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                                    <Button size="small" label="Edit" priority="secondary" />\r
                                    <Button size="small" label="Delete" priority="tertiary" role="destructive" />\r
                                </div>\r
                            </Table.Cell>\r
                        </Table.Row>)}\r
                </Table.Body>\r
            </>
  }
}`,...m.parameters?.docs?.source}}};const A=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions"],E=Object.freeze(Object.defineProperty({__proto__:null,Bordered:i,Default:s,FullWidth:c,Hoverable:d,Striped:o,WithActions:m,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{i as B,c as F,d as H,o as S,E as T,m as W};
