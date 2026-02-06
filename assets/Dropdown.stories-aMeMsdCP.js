import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I,R as m}from"./iframe-Czpj2aeR.js";import{B as x}from"./Button-BOXTLGob.js";import{I as h}from"./Icon-0euTEQQF.js";const u=m.createContext({isOpen:!1,toggle:()=>{},close:()=>{}}),c=({children:s,className:r=""})=>{const[n,t]=I.useState(!1),d=I.useRef(null),f=()=>t(!n),p=()=>t(!1);return I.useEffect(()=>{const j=D=>{d.current&&!d.current.contains(D.target)&&p()},y=D=>{D.key==="Escape"&&p()};return n&&(document.addEventListener("mousedown",j),document.addEventListener("keydown",y)),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("keydown",y)}},[n]),e.jsx(u.Provider,{value:{isOpen:n,toggle:f,close:p},children:e.jsx("div",{className:`wim-dropdown ${r}`,ref:d,children:s})})},g=({children:s,className:r=""})=>{const{toggle:n,isOpen:t}=m.useContext(u);return e.jsx("div",{className:`wim-dropdown-trigger ${r}`,onClick:n,"aria-haspopup":"true","aria-expanded":t,children:s})},w=({children:s,className:r="",align:n="left"})=>{const{isOpen:t}=m.useContext(u);return t?e.jsx("div",{className:`wim-dropdown-menu wim-dropdown-menu--align-${n} ${r}`,role:"menu",children:s}):null},o=({children:s,onClick:r,disabled:n=!1,className:t=""})=>{const{close:d}=m.useContext(u),f=p=>{n||(r&&r(),d())};return e.jsx("div",{className:`wim-dropdown-item ${n?"wim-dropdown-item--disabled":""} ${t}`,onClick:f,role:"menuitem",tabIndex:n?-1:0,"aria-disabled":n,children:s})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const v={title:"Component/Forms/Dropdown",component:c,parameters:{layout:"centered"}},i={render:()=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(x,{label:"Open Menu"})}),e.jsxs(w,{children:[e.jsx(o,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(o,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(o,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},a={render:()=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(x,{priority:"secondary",label:"Options"})}),e.jsxs(w,{children:[e.jsxs(o,{children:[e.jsx(h,{name:"CheckIcon",size:"small"})," Edit"]}),e.jsxs(o,{children:[e.jsx(h,{name:"CopyIcon",size:"small"})," Duplicate"]}),e.jsxs(o,{disabled:!0,children:[e.jsx(h,{name:"CloseIcon",size:"small"})," Delete"]})]})]})},l={render:()=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(x,{label:"Right Aligned"})}),e.jsxs(w,{align:"right",children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown>\r
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
  render: () => <Dropdown>\r
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
  render: () => <div style={{
    paddingLeft: "200px"
  }}>\r
            <Dropdown>\r
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
