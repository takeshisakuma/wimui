import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as l}from"./TreeView-JSqbMNi0.js";import{I as a}from"./Icon-C7cklonI.js";const o={title:"Components/Data Structures/TreeView",component:l,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100dvh",padding:"20px",boxSizing:"border-box",width:"100%",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(t,{})})})]},r={args:{width:"100%"},render:t=>e.jsxs(l,{...t,defaultExpandedValues:["1","2"],children:[e.jsxs(l.Item,{value:"1",label:"Documents",icon:e.jsx(a,{name:"CircleIcon",size:"small"}),children:[e.jsxs(l.Item,{value:"1-1",label:"Work",icon:e.jsx(a,{name:"SquareIcon",size:"small"}),children:[e.jsx(l.Item,{value:"1-1-1",label:"Project A.docx",icon:e.jsx(a,{name:"CopyIcon",size:"small"})}),e.jsx(l.Item,{value:"1-1-2",label:"Project B.docx",icon:e.jsx(a,{name:"CopyIcon",size:"small"})})]}),e.jsx(l.Item,{value:"1-2",label:"Personal",icon:e.jsx(a,{name:"SquareIcon",size:"small"}),children:e.jsx(l.Item,{value:"1-2-1",label:"Photos",icon:e.jsx(a,{name:"CircleIcon",size:"small"})})})]}),e.jsxs(l.Item,{value:"2",label:"Music",icon:e.jsx(a,{name:"CircleIcon",size:"small"}),children:[e.jsx(l.Item,{value:"2-1",label:"Rock",icon:e.jsx(a,{name:"SquareIcon",size:"small"})}),e.jsx(l.Item,{value:"2-2",label:"Jazz",icon:e.jsx(a,{name:"SquareIcon",size:"small"})})]}),e.jsx(l.Item,{value:"3",label:"Videos",icon:e.jsx(a,{name:"CircleIcon",size:"small"})})]})},n={render:()=>e.jsxs(l,{multiSelect:!0,defaultExpandedValues:["1"],children:[e.jsxs(l.Item,{value:"1",label:"System",children:[e.jsx(l.Item,{value:"1-1",label:"Logs"}),e.jsx(l.Item,{value:"1-2",label:"Config"})]}),e.jsxs(l.Item,{value:"2",label:"Users",children:[e.jsx(l.Item,{value:"2-1",label:"Admin"}),e.jsx(l.Item,{value:"2-2",label:"Guest"})]})]})},s={render:()=>e.jsx(l,{defaultExpandedValues:["1"],children:e.jsxs(l.Item,{value:"1",label:"Root (Enabled)",children:[e.jsx(l.Item,{value:"1-1",label:"Disabled Item",disabled:!0}),e.jsx(l.Item,{value:"1-2",label:"Enabled Item"})]})})},i={render:()=>e.jsxs(l,{width:250,defaultExpandedValues:["1"],children:[e.jsx(l.Item,{value:"1",label:"Extremely Long Folder Name That Will Definitely Overflow and Trigger Ellipsis",icon:e.jsx(a,{name:"CircleIcon",size:"small"}),children:e.jsx(l.Item,{value:"1-1",label:"Very Long Sub-item Name That Should Also Show Truncation When the Parent Width is Constrained",icon:e.jsx(a,{name:"SquareIcon",size:"small"}),children:e.jsx(l.Item,{value:"1-1-1",label:"Even at deeper nesting levels, the text will be truncated appropriately to maintain the sidebar layout without breaking the container.",icon:e.jsx(a,{name:"CopyIcon",size:"small"})})})}),e.jsx(l.Item,{value:"2",label:"Regular Item",icon:e.jsx(a,{name:"CircleIcon",size:"small"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: args => <TreeView {...args} defaultExpandedValues={["1", "2"]}>\r
      <TreeView.Item value="1" label="Documents" icon={<Icon name="CircleIcon" size="small" />}>\r
        <TreeView.Item value="1-1" label="Work" icon={<Icon name="SquareIcon" size="small" />}>\r
          <TreeView.Item value="1-1-1" label="Project A.docx" icon={<Icon name="CopyIcon" size="small" />} />\r
          <TreeView.Item value="1-1-2" label="Project B.docx" icon={<Icon name="CopyIcon" size="small" />} />\r
        </TreeView.Item>\r
        <TreeView.Item value="1-2" label="Personal" icon={<Icon name="SquareIcon" size="small" />}>\r
          <TreeView.Item value="1-2-1" label="Photos" icon={<Icon name="CircleIcon" size="small" />} />\r
        </TreeView.Item>\r
      </TreeView.Item>\r
      <TreeView.Item value="2" label="Music" icon={<Icon name="CircleIcon" size="small" />}>\r
        <TreeView.Item value="2-1" label="Rock" icon={<Icon name="SquareIcon" size="small" />} />\r
        <TreeView.Item value="2-2" label="Jazz" icon={<Icon name="SquareIcon" size="small" />} />\r
      </TreeView.Item>\r
      <TreeView.Item value="3" label="Videos" icon={<Icon name="CircleIcon" size="small" />} />\r
    </TreeView>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TreeView multiSelect defaultExpandedValues={["1"]}>\r
      <TreeView.Item value="1" label="System">\r
        <TreeView.Item value="1-1" label="Logs" />\r
        <TreeView.Item value="1-2" label="Config" />\r
      </TreeView.Item>\r
      <TreeView.Item value="2" label="Users">\r
        <TreeView.Item value="2-1" label="Admin" />\r
        <TreeView.Item value="2-2" label="Guest" />\r
      </TreeView.Item>\r
    </TreeView>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TreeView defaultExpandedValues={["1"]}>\r
      <TreeView.Item value="1" label="Root (Enabled)">\r
        <TreeView.Item value="1-1" label="Disabled Item" disabled />\r
        <TreeView.Item value="1-2" label="Enabled Item" />\r
      </TreeView.Item>\r
    </TreeView>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TreeView width={250} defaultExpandedValues={["1"]}>\r
      <TreeView.Item value="1" label="Extremely Long Folder Name That Will Definitely Overflow and Trigger Ellipsis" icon={<Icon name="CircleIcon" size="small" />}>\r
        <TreeView.Item value="1-1" label="Very Long Sub-item Name That Should Also Show Truncation When the Parent Width is Constrained" icon={<Icon name="SquareIcon" size="small" />}>\r
          <TreeView.Item value="1-1-1" label="Even at deeper nesting levels, the text will be truncated appropriately to maintain the sidebar layout without breaking the container." icon={<Icon name="CopyIcon" size="small" />} />\r
        </TreeView.Item>\r
      </TreeView.Item>\r
      <TreeView.Item value="2" label="Regular Item" icon={<Icon name="CircleIcon" size="small" />} />\r
    </TreeView>
}`,...i.parameters?.docs?.source}}};const m=["Default","MultiSelect","DisabledItems","Overflow"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DisabledItems:s,MultiSelect:n,Overflow:i,__namedExportsOrder:m,default:o},Symbol.toStringTag,{value:"Module"}));export{r as D,i as O,I as T};
