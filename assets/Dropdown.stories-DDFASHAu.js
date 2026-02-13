import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x,R as u}from"./iframe-Dkx9lEgu.js";import{c as g}from"./index-BzKEtpRa.js";import{B as y}from"./Button-CobhlWiK.js";import{I as h}from"./Icon-Djms2A0i.js";const w=u.createContext({isOpen:!1,toggle:()=>{},close:()=>{}}),p=({children:r,className:s})=>{const[n,i]=x.useState(!1),t=x.useRef(null),m=()=>i(!n),d=()=>i(!1);return x.useEffect(()=>{const j=I=>{t.current&&!t.current.contains(I.target)&&d()},k=I=>{I.key==="Escape"&&d()};return n&&(document.addEventListener("mousedown",j),document.addEventListener("keydown",k)),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("keydown",k)}},[n]),e.jsx(w.Provider,{value:{isOpen:n,toggle:m,close:d},children:e.jsx("div",{className:g("wim-dropdown",s),ref:t,children:r})})},D=({children:r,className:s})=>{const{toggle:n,isOpen:i}=u.useContext(w);return e.jsx("div",{className:g("wim-dropdown-trigger",s),onClick:n,"aria-haspopup":"true","aria-expanded":i,role:"button",tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n())},children:r})},f=({children:r,className:s,align:n="left"})=>{const{isOpen:i}=u.useContext(w);return i?e.jsx("div",{className:g("wim-dropdown-menu",`wim-dropdown-menu--align-${n}`,s),role:"menu",children:r}):null},o=({children:r,onClick:s,disabled:n=!1,className:i})=>{const{close:t}=u.useContext(w),m=d=>{n||(s&&s(),t())};return e.jsx("div",{className:g("wim-dropdown-item",n&&"wim-dropdown-item--disabled",i),onClick:m,role:"menuitem",tabIndex:n?-1:0,"aria-disabled":n,onKeyDown:d=>{!n&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),m())},children:r})};p.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Component/Selection Controls/Dropdown",component:p,parameters:{layout:"centered"}},a={render:r=>e.jsxs(p,{...r,children:[e.jsx(D,{children:e.jsx(y,{label:"Open Menu"})}),e.jsxs(f,{children:[e.jsx(o,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(o,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(o,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},l={render:r=>e.jsxs(p,{...r,children:[e.jsx(D,{children:e.jsx(y,{priority:"secondary",label:"Options"})}),e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(h,{name:"CheckIcon",size:"small"})," Edit"]}),e.jsxs(o,{children:[e.jsx(h,{name:"CopyIcon",size:"small"})," Duplicate"]}),e.jsxs(o,{disabled:!0,children:[e.jsx(h,{name:"CloseIcon",size:"small"})," Delete"]})]})]})},c={render:r=>e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(p,{...r,children:[e.jsx(D,{children:e.jsx(y,{label:"Right Aligned"})}),e.jsxs(f,{align:"right",children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const C=["Basic","WithIcons","AlignmentRight"],O=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:c,Basic:a,WithIcons:l,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{c as A,O as D,l as W};
