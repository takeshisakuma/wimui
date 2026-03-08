import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as w}from"./iframe-DQwmcauy.js";import{c as g}from"./index-Bk7p5LNu.js";import{B as N}from"./BaseListItem-CNXkdMhM.js";import{T as R}from"./Transition-lFCC-9-p.js";import{B as x}from"./Button-r7Kxqflo.js";import{I as h}from"./Icon-BSJg9_bB.js";import{u as j}from"./useTranslation-CZ9vchf1.js";const f=w.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:""}),m=({children:r,className:o})=>{const[n,d]=u.useState(!1),i=u.useRef(null),a=u.useId(),t=`wim-dropdown-menu-${a}`,k=`wim-dropdown-trigger-${a}`,C=()=>d(!n),D=()=>d(!1);return u.useEffect(()=>{const v=I=>{i.current&&!i.current.contains(I.target)&&D()},T=I=>{I.key==="Escape"&&D()};return n&&(document.addEventListener("mousedown",v),document.addEventListener("keydown",T)),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",T)}},[n]),e.jsx(f.Provider,{value:{isOpen:n,toggle:C,close:D,menuId:t,triggerId:k},children:e.jsx("div",{className:g("wim-dropdown",o),ref:i,children:r})})},_=({children:r,className:o})=>{const{toggle:n,isOpen:d,menuId:i,triggerId:a}=w.useContext(f);return e.jsx("div",{id:a,className:g("wim-dropdown-trigger",o),onClick:n,"aria-haspopup":"menu","aria-expanded":d,"aria-controls":d?i:void 0,role:"button",tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n())},children:r})},y=({children:r,className:o,align:n="left"})=>{const{isOpen:d,menuId:i,triggerId:a}=w.useContext(f);return e.jsx(R,{show:d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:i,className:g("wim-dropdown-menu",`wim-dropdown-menu--align-${n}`,o),role:"menu","aria-labelledby":a,children:r})},s=({children:r,onClick:o,disabled:n=!1,className:d})=>{const{close:i}=w.useContext(f),a=t=>{n||(o&&o(),i())};return e.jsx(N,{className:g("wim-dropdown-item",d),onClick:a,disabled:n,role:"menuitem",tabIndex:n?-1:0,onKeyDown:t=>{!n&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),a())},children:r})};m.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};s.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Overlays/Dropdown",component:m,parameters:{layout:"centered"}},c={render:function(o){const{t:n}=j(["docs","common","components"]);return e.jsxs(m,{...o,children:[e.jsx(_,{children:e.jsx(x,{label:n("story_dropdown_open")})}),e.jsxs(y,{children:[e.jsx(s,{onClick:()=>console.log("Profile clicked"),children:n("story_dropdown_profile")}),e.jsx(s,{onClick:()=>console.log("Settings clicked"),children:n("story_dropdown_settings")}),e.jsx(s,{onClick:()=>console.log("Logout clicked"),children:n("story_dropdown_logout")})]})]})}},l={render:function(o){const{t:n}=j(["docs","common","components"]);return e.jsxs(m,{...o,children:[e.jsx(_,{children:e.jsx(x,{priority:"secondary",label:n("story_dropdown_options")})}),e.jsxs(y,{children:[e.jsxs(s,{children:[e.jsx(h,{name:"CheckIcon",size:"small"})," ",n("story_dropdown_edit")]}),e.jsxs(s,{children:[e.jsx(h,{name:"CopyIcon",size:"small"})," ",n("story_dropdown_duplicate")]}),e.jsxs(s,{disabled:!0,children:[e.jsx(h,{name:"CloseIcon",size:"small"})," ",n("story_dropdown_delete")]})]})]})}},p={render:function(o){const{t:n}=j(["docs","common","components"]);return e.jsx("div",{style:{paddingLeft:"200px"},children:e.jsxs(m,{...o,children:[e.jsx(_,{children:e.jsx(x,{label:n("story_dropdown_right_aligned")})}),e.jsxs(y,{align:"right",children:[e.jsxs(s,{children:[n("story_dropdown_item")," 1"]}),e.jsxs(s,{children:[n("story_dropdown_item")," 2"]}),e.jsxs(s,{children:[n("story_dropdown_item")," 3"]})]})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropdown {...args}>\r
        <DropdownTrigger>\r
          <Button label={t("story_dropdown_open")} />\r
        </DropdownTrigger>\r
        <DropdownMenu>\r
          <DropdownItem onClick={() => console.log("Profile clicked")}>\r
            {t("story_dropdown_profile")}\r
          </DropdownItem>\r
          <DropdownItem onClick={() => console.log("Settings clicked")}>\r
            {t("story_dropdown_settings")}\r
          </DropdownItem>\r
          <DropdownItem onClick={() => console.log("Logout clicked")}>\r
            {t("story_dropdown_logout")}\r
          </DropdownItem>\r
        </DropdownMenu>\r
      </Dropdown>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Dropdown {...args}>\r
        <DropdownTrigger>\r
          <Button priority="secondary" label={t("story_dropdown_options")} />\r
        </DropdownTrigger>\r
        <DropdownMenu>\r
          <DropdownItem>\r
            <Icon name="CheckIcon" size="small" /> {t("story_dropdown_edit")}\r
          </DropdownItem>\r
          <DropdownItem>\r
            <Icon name="CopyIcon" size="small" /> {t("story_dropdown_duplicate")}\r
          </DropdownItem>\r
          <DropdownItem disabled>\r
            <Icon name="CloseIcon" size="small" /> {t("story_dropdown_delete")}\r
          </DropdownItem>\r
        </DropdownMenu>\r
      </Dropdown>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      paddingLeft: "200px"
    }}>\r
        <Dropdown {...args}>\r
          <DropdownTrigger>\r
            <Button label={t("story_dropdown_right_aligned")} />\r
          </DropdownTrigger>\r
          <DropdownMenu align="right">\r
            <DropdownItem>\r
              {t("story_dropdown_item")} 1\r
            </DropdownItem>\r
            <DropdownItem>\r
              {t("story_dropdown_item")} 2\r
            </DropdownItem>\r
            <DropdownItem>\r
              {t("story_dropdown_item")} 3\r
            </DropdownItem>\r
          </DropdownMenu>\r
        </Dropdown>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const q=["Basic","WithIcons","AlignmentRight"],A=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:p,Basic:c,WithIcons:l,__namedExportsOrder:q,default:b},Symbol.toStringTag,{value:"Module"}));export{p as A,A as D,l as W};
