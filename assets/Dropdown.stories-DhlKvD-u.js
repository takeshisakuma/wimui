import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as m}from"./iframe-BRQWL27F.js";import{c as u}from"./index-DWoaxWMs.js";import{B as j}from"./Button-CRTzFfQx.js";import{I as x}from"./Icon-CpAaWSX6.js";const g=m.createContext({isOpen:!1,toggle:()=>{},close:()=>{}}),c=({children:n,className:s})=>{const[r,t]=h.useState(!1),i=h.useRef(null),f=()=>t(!r),p=()=>t(!1);return h.useEffect(()=>{const y=I=>{i.current&&!i.current.contains(I.target)&&p()},C=I=>{I.key==="Escape"&&p()};return r&&(document.addEventListener("mousedown",y),document.addEventListener("keydown",C)),()=>{document.removeEventListener("mousedown",y),document.removeEventListener("keydown",C)}},[r]),e.jsx(g.Provider,{value:{isOpen:r,toggle:f,close:p},children:e.jsx("div",{className:u("wim-dropdown",s),ref:i,children:n})})},w=({children:n,className:s})=>{const{toggle:r,isOpen:t}=m.useContext(g);return e.jsx("div",{className:u("wim-dropdown-trigger",s),onClick:r,"aria-haspopup":"true","aria-expanded":t,children:n})},D=({children:n,className:s,align:r="left"})=>{const{isOpen:t}=m.useContext(g);return t?e.jsx("div",{className:u("wim-dropdown-menu",`wim-dropdown-menu--align-${r}`,s),role:"menu",children:n}):null},o=({children:n,onClick:s,disabled:r=!1,className:t})=>{const{close:i}=m.useContext(g),f=p=>{r||(s&&s(),i())};return e.jsx("div",{className:u("wim-dropdown-item",r&&"wim-dropdown-item--disabled",t),onClick:f,role:"menuitem",tabIndex:r?-1:0,"aria-disabled":r,children:n})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Component/Selection Controls/Dropdown",component:c,parameters:{layout:"centered"}},d={render:n=>e.jsxs(c,{...n,children:[e.jsx(w,{children:e.jsx(j,{label:"Open Menu"})}),e.jsxs(D,{children:[e.jsx(o,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(o,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(o,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},a={render:n=>e.jsxs(c,{...n,children:[e.jsx(w,{children:e.jsx(j,{priority:"secondary",label:"Options"})}),e.jsxs(D,{children:[e.jsxs(o,{children:[e.jsx(x,{name:"CheckIcon",size:"small"})," Edit"]}),e.jsxs(o,{children:[e.jsx(x,{name:"CopyIcon",size:"small"})," Duplicate"]}),e.jsxs(o,{disabled:!0,children:[e.jsx(x,{name:"CloseIcon",size:"small"})," Delete"]})]})]})},l={render:n=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(c,{...n,children:[e.jsx(w,{children:e.jsx(j,{label:"Right Aligned"})}),e.jsxs(D,{align:"right",children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const k=["Basic","WithIcons","AlignmentRight"],R=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:l,Basic:d,WithIcons:a,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{l as A,R as D,a as W};
