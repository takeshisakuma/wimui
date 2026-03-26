import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as j,A}from"./iframe-badbAK5Z.js";import{c as v}from"./index-BRitA1b6.js";import{B as L}from"./BaseListItem-DQIXqzdk.js";import{T as q}from"./Transition-C7dxdtIu.js";import{B as E}from"./Button-ocbzWxQj.js";import{I as b}from"./Icon-DnakkRe1.js";import{u as N}from"./useTranslation-uxHS973M.js";const k=j.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:"",focusedIndex:-1,setFocusedIndex:()=>{},registerItem:()=>0,containerRef:{current:null}}),_=({children:d,className:o})=>{const[e,c]=p.useState(!1),[i,r]=p.useState(-1),s=p.useRef(null),w=p.useRef(0);p.useEffect(()=>{w.current=0});const D=()=>{const t=w.current;return w.current+=1,t},I=p.useId(),x=`wim-dropdown-menu-${I}`,m=`wim-dropdown-trigger-${I}`,S=()=>{const t=!e;c(t),r(t?0:-1)},h=()=>{c(!1),r(-1)};p.useEffect(()=>{const t=l=>{s.current&&!s.current.contains(l.target)&&h()},u=l=>{l.key==="Escape"&&h()};return e&&(document.addEventListener("mousedown",t),document.addEventListener("keydown",u)),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",u)}},[e]);const R=t=>{if(!e)return;const u=Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]);switch(t.key){case"ArrowDown":t.preventDefault(),r(l=>l<u.length-1?l+1:0);break;case"ArrowUp":t.preventDefault(),r(l=>l>0?l-1:u.length-1);break;case"Home":t.preventDefault(),r(0);break;case"End":t.preventDefault(),r(u.length-1);break;case"Tab":h();break}};return p.useEffect(()=>{e&&i>=0&&Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[])[i]?.focus()},[i,e]),n.jsx(k.Provider,{value:{isOpen:e,toggle:S,close:h,menuId:x,triggerId:m,focusedIndex:i,setFocusedIndex:r,registerItem:D,containerRef:s},children:n.jsx("div",{className:v("wim-dropdown",o),ref:s,onKeyDown:R,children:d})})},T=({children:d,className:o})=>{const{toggle:e,isOpen:c,menuId:i,triggerId:r}=j.useContext(k);return n.jsx("div",{id:r,className:v("wim-dropdown-trigger",o),onClick:e,"aria-haspopup":"menu","aria-expanded":c,"aria-controls":c?i:void 0,role:"button",tabIndex:0,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e())},children:d})},C=({children:d,className:o,align:e="left"})=>{const{isOpen:c,menuId:i,triggerId:r}=j.useContext(k);return n.jsx(q,{show:c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:i,className:v("wim-dropdown-menu",`wim-dropdown-menu--align-${e}`,o),role:"menu","aria-labelledby":r,children:d})},a=({children:d,onClick:o,disabled:e=!1,className:c})=>{const{close:i,focusedIndex:r,setFocusedIndex:s,registerItem:w}=j.useContext(k),[D]=p.useState(()=>w()),I=r===D,x=m=>{e||(o&&o(),i())};return n.jsx(L,{className:v("wim-dropdown-item",c),onClick:x,onFocus:()=>s(D),disabled:e,role:"menuitem",tabIndex:I?0:-1,onKeyDown:m=>{!e&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),x())},children:d})};_.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Components/Overlays/Dropdown",component:_,parameters:{layout:"centered"}},g={render:function(o){const{t:e}=N(A);return n.jsxs(_,{...o,children:[n.jsx(T,{children:n.jsx(E,{label:e("story_dropdown_open")})}),n.jsxs(C,{children:[n.jsx(a,{onClick:()=>console.log("Profile clicked"),children:e("story_dropdown_profile")}),n.jsx(a,{onClick:()=>console.log("Settings clicked"),children:e("story_dropdown_settings")}),n.jsx(a,{onClick:()=>console.log("Logout clicked"),children:e("story_dropdown_logout")})]})]})}},f={render:function(o){const{t:e}=N(A);return n.jsxs(_,{...o,children:[n.jsx(T,{children:n.jsx(E,{priority:"secondary",label:e("story_dropdown_options")})}),n.jsxs(C,{children:[n.jsxs(a,{children:[n.jsx(b,{name:"CheckIcon",size:"small"})," ",e("story_dropdown_edit")]}),n.jsxs(a,{children:[n.jsx(b,{name:"CopyIcon",size:"small"})," ",e("story_dropdown_duplicate")]}),n.jsxs(a,{disabled:!0,children:[n.jsx(b,{name:"CloseIcon",size:"small"})," ",e("story_dropdown_delete")]})]})]})}},y={render:function(o){const{t:e}=N(A);return n.jsx("div",{style:{paddingLeft:"200px"},children:n.jsxs(_,{...o,children:[n.jsx(T,{children:n.jsx(E,{label:e("story_dropdown_right_aligned")})}),n.jsxs(C,{align:"right",children:[n.jsxs(a,{children:[e("story_dropdown_item")," 1"]}),n.jsxs(a,{children:[e("story_dropdown_item")," 2"]}),n.jsxs(a,{children:[e("story_dropdown_item")," 3"]})]})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropdown {...args}>
        <DropdownTrigger>
          <Button label={t("story_dropdown_open")} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            {t("story_dropdown_profile")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Settings clicked")}>
            {t("story_dropdown_settings")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Logout clicked")}>
            {t("story_dropdown_logout")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropdown {...args}>
        <DropdownTrigger>
          <Button priority="secondary" label={t("story_dropdown_options")} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            <Icon name="CheckIcon" size="small" /> {t("story_dropdown_edit")}
          </DropdownItem>
          <DropdownItem>
            <Icon name="CopyIcon" size="small" /> {t("story_dropdown_duplicate")}
          </DropdownItem>
          <DropdownItem disabled>
            <Icon name="CloseIcon" size="small" /> {t("story_dropdown_delete")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      paddingLeft: "200px"
    }}>
        <Dropdown {...args}>
          <DropdownTrigger>
            <Button label={t("story_dropdown_right_aligned")} />
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>
              {t("story_dropdown_item")} 1
            </DropdownItem>
            <DropdownItem>
              {t("story_dropdown_item")} 2
            </DropdownItem>
            <DropdownItem>
              {t("story_dropdown_item")} 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const O=["Basic","WithIcons","AlignmentRight"],H=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:y,Basic:g,WithIcons:f,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{y as A,g as B,H as D,f as W};
