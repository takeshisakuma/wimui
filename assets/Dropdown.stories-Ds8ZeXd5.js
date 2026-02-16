import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as g}from"./iframe-4bM1vrrp.js";import{c as w}from"./index-wOw2goDe.js";import{B as j}from"./Button-CENL4XOW.js";import{I as y}from"./Icon-C-t3T6MZ.js";const D=g.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:""}),m=({children:r,className:a})=>{const[n,s]=u.useState(!1),i=u.useRef(null),d=u.useId(),o=`wim-dropdown-menu-${d}`,C=`wim-dropdown-trigger-${d}`,T=()=>s(!n),x=()=>s(!1);return u.useEffect(()=>{const v=h=>{i.current&&!i.current.contains(h.target)&&x()},k=h=>{h.key==="Escape"&&x()};return n&&(document.addEventListener("mousedown",v),document.addEventListener("keydown",k)),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",k)}},[n]),e.jsx(D.Provider,{value:{isOpen:n,toggle:T,close:x,menuId:o,triggerId:C},children:e.jsx("div",{className:w("wim-dropdown",a),ref:i,children:r})})},I=({children:r,className:a})=>{const{toggle:n,isOpen:s,menuId:i,triggerId:d}=g.useContext(D);return e.jsx("div",{id:d,className:w("wim-dropdown-trigger",a),onClick:n,"aria-haspopup":"menu","aria-expanded":s,"aria-controls":s?i:void 0,role:"button",tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n())},children:r})},f=({children:r,className:a,align:n="left"})=>{const{isOpen:s,menuId:i,triggerId:d}=g.useContext(D);return s?e.jsx("div",{id:i,className:w("wim-dropdown-menu",`wim-dropdown-menu--align-${n}`,a),role:"menu","aria-labelledby":d,children:r}):null},t=({children:r,onClick:a,disabled:n=!1,className:s})=>{const{close:i}=g.useContext(D),d=o=>{n||(a&&a(),i())};return e.jsx("div",{className:w("wim-dropdown-item",n&&"wim-dropdown-item--disabled",s),onClick:d,role:"menuitem",tabIndex:n?-1:0,"aria-disabled":n,onKeyDown:o=>{!n&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),d())},children:r})};m.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Component/Overlays/Dropdown",component:m,parameters:{layout:"centered"}},l={render:r=>e.jsxs(m,{...r,children:[e.jsx(I,{children:e.jsx(j,{label:"Open Menu"})}),e.jsxs(f,{children:[e.jsx(t,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(t,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(t,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},c={render:r=>e.jsxs(m,{...r,children:[e.jsx(I,{children:e.jsx(j,{priority:"secondary",label:"Options"})}),e.jsxs(f,{children:[e.jsxs(t,{children:[e.jsx(y,{name:"CheckIcon",size:"small"})," Edit"]}),e.jsxs(t,{children:[e.jsx(y,{name:"CopyIcon",size:"small"})," Duplicate"]}),e.jsxs(t,{disabled:!0,children:[e.jsx(y,{name:"CloseIcon",size:"small"})," Delete"]})]})]})},p={render:r=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(m,{...r,children:[e.jsx(I,{children:e.jsx(j,{label:"Right Aligned"})}),e.jsxs(f,{align:"right",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const b=["Basic","WithIcons","AlignmentRight"],M=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:p,Basic:l,WithIcons:c,__namedExportsOrder:b,default:N},Symbol.toStringTag,{value:"Module"}));export{p as A,M as D,c as W};
