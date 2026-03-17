import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as j}from"./iframe-GBSzVr-0.js";import{c as v}from"./index-C5jsSjcp.js";import{B as L}from"./BaseListItem-tMLjBkSA.js";import{T as q}from"./Transition-Crp0O6ny.js";import{B as A}from"./Button-CnfPWFk8.js";import{I as b}from"./Icon-Bc5Bx58p.js";import{A as E}from"./i18nConstants-BpHxieg5.js";import{u as N}from"./useTranslation-1pCDZai4.js";const k=j.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:"",focusedIndex:-1,setFocusedIndex:()=>{},registerItem:()=>0,containerRef:{current:null}}),_=({children:d,className:r})=>{const[e,c]=p.useState(!1),[i,o]=p.useState(-1),s=p.useRef(null),w=p.useRef(0);p.useEffect(()=>{w.current=0});const D=()=>{const t=w.current;return w.current+=1,t},I=p.useId(),x=`wim-dropdown-menu-${I}`,m=`wim-dropdown-trigger-${I}`,S=()=>{const t=!e;c(t),o(t?0:-1)},h=()=>{c(!1),o(-1)};p.useEffect(()=>{const t=l=>{s.current&&!s.current.contains(l.target)&&h()},u=l=>{l.key==="Escape"&&h()};return e&&(document.addEventListener("mousedown",t),document.addEventListener("keydown",u)),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",u)}},[e]);const R=t=>{if(!e)return;const u=Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]);switch(t.key){case"ArrowDown":t.preventDefault(),o(l=>l<u.length-1?l+1:0);break;case"ArrowUp":t.preventDefault(),o(l=>l>0?l-1:u.length-1);break;case"Home":t.preventDefault(),o(0);break;case"End":t.preventDefault(),o(u.length-1);break;case"Tab":h();break}};return p.useEffect(()=>{e&&i>=0&&Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[])[i]?.focus()},[i,e]),n.jsx(k.Provider,{value:{isOpen:e,toggle:S,close:h,menuId:x,triggerId:m,focusedIndex:i,setFocusedIndex:o,registerItem:D,containerRef:s},children:n.jsx("div",{className:v("wim-dropdown",r),ref:s,onKeyDown:R,children:d})})},T=({children:d,className:r})=>{const{toggle:e,isOpen:c,menuId:i,triggerId:o}=j.useContext(k);return n.jsx("div",{id:o,className:v("wim-dropdown-trigger",r),onClick:e,"aria-haspopup":"menu","aria-expanded":c,"aria-controls":c?i:void 0,role:"button",tabIndex:0,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e())},children:d})},C=({children:d,className:r,align:e="left"})=>{const{isOpen:c,menuId:i,triggerId:o}=j.useContext(k);return n.jsx(q,{show:c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:i,className:v("wim-dropdown-menu",`wim-dropdown-menu--align-${e}`,r),role:"menu","aria-labelledby":o,children:d})},a=({children:d,onClick:r,disabled:e=!1,className:c})=>{const{close:i,focusedIndex:o,setFocusedIndex:s,registerItem:w}=j.useContext(k),[D]=p.useState(()=>w()),I=o===D,x=m=>{e||(r&&r(),i())};return n.jsx(L,{className:v("wim-dropdown-item",c),onClick:x,onFocus:()=>s(D),disabled:e,role:"menuitem",tabIndex:I?0:-1,onKeyDown:m=>{!e&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),x())},children:d})};_.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Components/Overlays/Dropdown",component:_,parameters:{layout:"centered"}},g={render:function(r){const{t:e}=N(E);return n.jsxs(_,{...r,children:[n.jsx(T,{children:n.jsx(A,{label:e("story_dropdown_open")})}),n.jsxs(C,{children:[n.jsx(a,{onClick:()=>console.log("Profile clicked"),children:e("story_dropdown_profile")}),n.jsx(a,{onClick:()=>console.log("Settings clicked"),children:e("story_dropdown_settings")}),n.jsx(a,{onClick:()=>console.log("Logout clicked"),children:e("story_dropdown_logout")})]})]})}},f={render:function(r){const{t:e}=N(E);return n.jsxs(_,{...r,children:[n.jsx(T,{children:n.jsx(A,{priority:"secondary",label:e("story_dropdown_options")})}),n.jsxs(C,{children:[n.jsxs(a,{children:[n.jsx(b,{name:"CheckIcon",size:"small"})," ",e("story_dropdown_edit")]}),n.jsxs(a,{children:[n.jsx(b,{name:"CopyIcon",size:"small"})," ",e("story_dropdown_duplicate")]}),n.jsxs(a,{disabled:!0,children:[n.jsx(b,{name:"CloseIcon",size:"small"})," ",e("story_dropdown_delete")]})]})]})}},y={render:function(r){const{t:e}=N(E);return n.jsx("div",{style:{paddingLeft:"200px"},children:n.jsxs(_,{...r,children:[n.jsx(T,{children:n.jsx(A,{label:e("story_dropdown_right_aligned")})}),n.jsxs(C,{align:"right",children:[n.jsxs(a,{children:[e("story_dropdown_item")," 1"]}),n.jsxs(a,{children:[e("story_dropdown_item")," 2"]}),n.jsxs(a,{children:[e("story_dropdown_item")," 3"]})]})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...y.parameters?.docs?.source}}};const O=["Basic","WithIcons","AlignmentRight"],U=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:y,Basic:g,WithIcons:f,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{y as A,U as D,f as W};
