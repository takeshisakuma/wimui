import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I,R as m}from"./iframe-BIFQF2Gn.js";import{B as x}from"./Button-zHq4TcVs.js";import{I as h}from"./Icon-C6GK9aG-.js";const u=m.createContext({isOpen:!1,toggle:()=>{},close:()=>{}}),c=({children:n,className:t=""})=>{const[r,s]=I.useState(!1),d=I.useRef(null),f=()=>s(!r),p=()=>s(!1);return I.useEffect(()=>{const j=D=>{d.current&&!d.current.contains(D.target)&&p()},y=D=>{D.key==="Escape"&&p()};return r&&(document.addEventListener("mousedown",j),document.addEventListener("keydown",y)),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("keydown",y)}},[r]),e.jsx(u.Provider,{value:{isOpen:r,toggle:f,close:p},children:e.jsx("div",{className:`wim-dropdown ${t}`,ref:d,children:n})})},g=({children:n,className:t=""})=>{const{toggle:r,isOpen:s}=m.useContext(u);return e.jsx("div",{className:`wim-dropdown-trigger ${t}`,onClick:r,"aria-haspopup":"true","aria-expanded":s,children:n})},w=({children:n,className:t="",align:r="left"})=>{const{isOpen:s}=m.useContext(u);return s?e.jsx("div",{className:`wim-dropdown-menu wim-dropdown-menu--align-${r} ${t}`,role:"menu",children:n}):null},o=({children:n,onClick:t,disabled:r=!1,className:s=""})=>{const{close:d}=m.useContext(u),f=p=>{r||(t&&t(),d())};return e.jsx("div",{className:`wim-dropdown-item ${r?"wim-dropdown-item--disabled":""} ${s}`,onClick:f,role:"menuitem",tabIndex:r?-1:0,"aria-disabled":r,children:n})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const v={title:"Component/Selection Controls/Dropdown",component:c,parameters:{layout:"centered"}},i={render:n=>e.jsxs(c,{...n,children:[e.jsx(g,{children:e.jsx(x,{label:"Open Menu"})}),e.jsxs(w,{children:[e.jsx(o,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(o,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(o,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},a={render:n=>e.jsxs(c,{...n,children:[e.jsx(g,{children:e.jsx(x,{priority:"secondary",label:"Options"})}),e.jsxs(w,{children:[e.jsxs(o,{children:[e.jsx(h,{name:"CheckIcon",size:"small"})," Edit"]}),e.jsxs(o,{children:[e.jsx(h,{name:"CopyIcon",size:"small"})," Duplicate"]}),e.jsxs(o,{disabled:!0,children:[e.jsx(h,{name:"CloseIcon",size:"small"})," Delete"]})]})]})},l={render:n=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(c,{...n,children:[e.jsx(g,{children:e.jsx(x,{label:"Right Aligned"})}),e.jsxs(w,{align:"right",children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>\r
            <DropdownTrigger>\r
                <Button label="Open Menu" />\r
            </DropdownTrigger>\r
            <DropdownMenu>\r
                <DropdownItem onClick={() => console.log("Profile clicked")}>Profile</DropdownItem>\r
                <DropdownItem onClick={() => console.log("Settings clicked")}>Settings</DropdownItem>\r
                <DropdownItem onClick={() => console.log("Logout clicked")}>Logout</DropdownItem>\r
            </DropdownMenu>\r
        </Dropdown>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>\r
            <DropdownTrigger>\r
                <Button priority="secondary" label="Options" />\r
            </DropdownTrigger>\r
            <DropdownMenu>\r
                <DropdownItem>\r
                    <Icon name="CheckIcon" size="small" /> Edit\r
                </DropdownItem>\r
                <DropdownItem>\r
                    <Icon name="CopyIcon" size="small" /> Duplicate\r
                </DropdownItem>\r
                <DropdownItem disabled>\r
                    <Icon name="CloseIcon" size="small" /> Delete\r
                </DropdownItem>\r
            </DropdownMenu>\r
        </Dropdown>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    paddingLeft: "200px"
  }}>\r
            <Dropdown {...args}>\r
                <DropdownTrigger>\r
                    <Button label="Right Aligned" />\r
                </DropdownTrigger>\r
                <DropdownMenu align="right">\r
                    <DropdownItem>Item 1</DropdownItem>\r
                    <DropdownItem>Item 2</DropdownItem>\r
                    <DropdownItem>Item 3</DropdownItem>\r
                </DropdownMenu>\r
            </Dropdown>\r
        </div>
}`,...l.parameters?.docs?.source}}};const C=["Basic","WithIcons","AlignmentRight"],b=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:l,Basic:i,WithIcons:a,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{l as A,b as D,a as W};
