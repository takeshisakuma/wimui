import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as x}from"./iframe-n4D-bytZ.js";import{P as l}from"./index-C-1jl7UE.js";import{I as s}from"./Icon-MCh7-02j.js";const _=u.createContext(null),D=()=>{const r=u.useContext(_);if(!r)throw new Error("TreeView components must be used within a TreeView");return r},a=({children:r,className:y,multiSelect:m=!1,defaultExpandedValues:v=[],defaultSelectedValues:g=[],width:d})=>{const[j,h]=u.useState(v),[p,I]=u.useState(g),n=u.useCallback(o=>{h(t=>t.includes(o)?t.filter(w=>w!==o):[...t,o])},[]),b=u.useCallback(o=>{I(m?t=>t.includes(o)?t.filter(w=>w!==o):[...t,o]:[o])},[m]),c=u.useMemo(()=>({expandedValues:j,selectedValues:p,toggleExpand:n,select:b,multiSelect:m}),[j,p,n,b,m]);return e.jsx(_.Provider,{value:c,children:e.jsx("div",{className:["wim-tree-view",y].filter(Boolean).join(" "),role:"tree",style:{width:d},children:r})})},N=({value:r,label:y,icon:m,children:v,className:g,disabled:d=!1})=>{const{expandedValues:j,selectedValues:h,toggleExpand:p,select:I}=D(),n=j.includes(r),b=h.includes(r),c=!!x.Children.count(v),[o,t]=x.useState(!1),[w,S]=x.useState(n),[R,q]=x.useState(n);x.useEffect(()=>{if(n){S(!0);const i=setTimeout(()=>{q(!0)},10);return()=>clearTimeout(i)}else q(!1),t(!0)},[n]);const z=i=>{i.propertyName==="grid-template-rows"&&!n&&(S(!1),t(!1))},E=i=>{i.stopPropagation(),!d&&c&&p(r)},C=i=>{i.stopPropagation(),!d&&I(r)},k=i=>{if(!d)switch(i.key){case"Enter":case" ":i.preventDefault(),I(r);break;case"ArrowRight":c&&!n&&p(r);break;case"ArrowLeft":c&&n&&p(r);break}};return e.jsxs("div",{className:["wim-tree-item",R?"wim-tree-item--expanded":"",b?"wim-tree-item--selected":"",d?"wim-tree-item--disabled":"",g].filter(Boolean).join(" "),role:"treeitem","aria-expanded":c?n:void 0,"aria-selected":b,tabIndex:d?-1:0,onKeyDown:k,children:[e.jsxs("div",{className:"wim-tree-item__content",onClick:C,children:[e.jsx("span",{className:"wim-tree-item__toggle",onClick:E,children:c&&e.jsx(s,{name:"ChevronRightIcon",size:"small",className:["wim-tree-item__chevron",R?"wim-tree-item__chevron--open":""].join(" ")})}),m&&e.jsx("span",{className:"wim-tree-item__icon",children:m}),e.jsx("span",{className:"wim-tree-item__label",children:y})]}),c&&w&&e.jsx("div",{className:["wim-tree-item__children-wrapper",R?"wim-tree-item__children-wrapper--open":""].join(" "),onTransitionEnd:z,children:e.jsx("div",{className:"wim-tree-item__children",role:"group",children:v})})]})};a.Item=N;a.propTypes={children:l.node.isRequired,className:l.string,multiSelect:l.bool,defaultExpandedValues:l.arrayOf(l.string),defaultSelectedValues:l.arrayOf(l.string)};N.propTypes={value:l.string.isRequired,label:l.node.isRequired,icon:l.node,children:l.node,className:l.string,disabled:l.bool};a.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{\r
    value,\r
    label,\r
    icon,\r
    children,\r
    className,\r
    disabled = false,\r
}: TreeViewItemProps`,optional:!1,type:{name:"signature",type:"object",raw:`{\r
    value: string;\r
    label: React.ReactNode;\r
    icon?: React.ReactNode;\r
    children?: React.ReactNode;\r
    className?: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]},alias:"TreeViewItemProps"}}],returns:null}],displayName:"TreeView",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},multiSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},defaultExpandedValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"string"}}},defaultSelectedValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"string"}}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"TreeViewItem",props:{value:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const P={title:"Component/Data Display/TreeView",component:a,parameters:{layout:"centered"}},f={args:{width:"400px"},render:r=>e.jsxs(a,{...r,defaultExpandedValues:["1","2"],children:[e.jsxs(a.Item,{value:"1",label:"Documents",icon:e.jsx(s,{name:"CircleIcon",size:"small"}),children:[e.jsxs(a.Item,{value:"1-1",label:"Work",icon:e.jsx(s,{name:"SquareIcon",size:"small"}),children:[e.jsx(a.Item,{value:"1-1-1",label:"Project A.docx",icon:e.jsx(s,{name:"CopyIcon",size:"small"})}),e.jsx(a.Item,{value:"1-1-2",label:"Project B.docx",icon:e.jsx(s,{name:"CopyIcon",size:"small"})})]}),e.jsx(a.Item,{value:"1-2",label:"Personal",icon:e.jsx(s,{name:"SquareIcon",size:"small"}),children:e.jsx(a.Item,{value:"1-2-1",label:"Photos",icon:e.jsx(s,{name:"CircleIcon",size:"small"})})})]}),e.jsxs(a.Item,{value:"2",label:"Music",icon:e.jsx(s,{name:"CircleIcon",size:"small"}),children:[e.jsx(a.Item,{value:"2-1",label:"Rock",icon:e.jsx(s,{name:"SquareIcon",size:"small"})}),e.jsx(a.Item,{value:"2-2",label:"Jazz",icon:e.jsx(s,{name:"SquareIcon",size:"small"})})]}),e.jsx(a.Item,{value:"3",label:"Videos",icon:e.jsx(s,{name:"CircleIcon",size:"small"})})]})},V={render:()=>e.jsxs(a,{multiSelect:!0,defaultExpandedValues:["1"],children:[e.jsxs(a.Item,{value:"1",label:"System",children:[e.jsx(a.Item,{value:"1-1",label:"Logs"}),e.jsx(a.Item,{value:"1-2",label:"Config"})]}),e.jsxs(a.Item,{value:"2",label:"Users",children:[e.jsx(a.Item,{value:"2-1",label:"Admin"}),e.jsx(a.Item,{value:"2-2",label:"Guest"})]})]})},T={render:()=>e.jsxs(a,{defaultExpandedValues:["1"],children:[e.jsxs(a.Item,{value:"1",label:"Root (Enabled)",children:[e.jsx(a.Item,{value:"1-1",label:"Disabled Item",disabled:!0}),e.jsx(a.Item,{value:"1-2",label:"Enabled Item"})]}),e.jsx(a.Item,{value:"2",label:"Disabled Root",disabled:!0,children:e.jsx(a.Item,{value:"2-1",label:"Should not be reachable"})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    width: "400px"
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
}`,...f.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TreeView defaultExpandedValues={["1"]}>\r
            <TreeView.Item value="1" label="Root (Enabled)">\r
                <TreeView.Item value="1-1" label="Disabled Item" disabled />\r
                <TreeView.Item value="1-2" label="Enabled Item" />\r
            </TreeView.Item>\r
            <TreeView.Item value="2" label="Disabled Root" disabled>\r
                <TreeView.Item value="2-1" label="Should not be reachable" />\r
            </TreeView.Item>\r
        </TreeView>
}`,...T.parameters?.docs?.source}}};const A=["Default","MultiSelect","DisabledItems"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:f,DisabledItems:T,MultiSelect:V,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{f as D,G as T};
