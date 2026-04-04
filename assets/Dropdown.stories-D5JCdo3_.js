import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as j,A as E}from"./iframe-By123agS.js";import{c as v}from"./index-DhHn5T7W.js";import{T as L}from"./Transition-Dh9PgyOR.js";import{B as q}from"./BaseListItem-DO2fi1oj.js";import{B as N}from"./Button-B1KcXOJr.js";import{I as A}from"./Icon-jzV_n-kg.js";import{u as S}from"./useTranslation-svuQDxOH.js";const k=j.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:"",focusedIndex:-1,setFocusedIndex:()=>{},registerItem:()=>0,containerRef:{current:null}}),D=({children:d,className:o})=>{const[e,c]=p.useState(!1),[i,r]=p.useState(-1),s=p.useRef(null),w=p.useRef(0);p.useEffect(()=>{w.current=0});const I=()=>{const t=w.current;return w.current+=1,t},x=p.useId(),h=`wim-dropdown-menu-${x}`,u=`wim-dropdown-trigger-${x}`,R=()=>{const t=!e;c(t),r(t?0:-1)},_=()=>{c(!1),r(-1)};p.useEffect(()=>{const t=l=>{s.current&&!s.current.contains(l.target)&&_()},m=l=>{l.key==="Escape"&&_()};return e&&(document.addEventListener("mousedown",t),document.addEventListener("keydown",m)),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",m)}},[e]);const b=t=>{if(!e)return;const m=Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]);switch(t.key){case"ArrowDown":t.preventDefault(),r(l=>l<m.length-1?l+1:0);break;case"ArrowUp":t.preventDefault(),r(l=>l>0?l-1:m.length-1);break;case"Home":t.preventDefault(),r(0);break;case"End":t.preventDefault(),r(m.length-1);break;case"Tab":_();break}};return p.useEffect(()=>{e&&i>=0&&Array.from(s.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[])[i]?.focus()},[i,e]),n.jsx(k.Provider,{value:{isOpen:e,toggle:R,close:_,menuId:h,triggerId:u,focusedIndex:i,setFocusedIndex:r,registerItem:I,containerRef:s},children:n.jsx("div",{role:"none",className:v("wim-dropdown",o),ref:s,onKeyDown:b,children:d})})},T=({children:d,className:o})=>{const{toggle:e,isOpen:c,menuId:i,triggerId:r}=j.useContext(k);return n.jsx("div",{id:r,className:v("wim-dropdown-trigger",o),onClick:e,"aria-haspopup":"menu","aria-expanded":c,"aria-controls":c?i:void 0,role:"button",tabIndex:0,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e())},children:d})},C=({children:d,className:o,align:e="left"})=>{const{isOpen:c,menuId:i,triggerId:r}=j.useContext(k);return n.jsx(L,{show:c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:i,className:v("wim-dropdown-menu",`wim-dropdown-menu--align-${e}`,o),role:"menu","aria-labelledby":r,children:d})},a=({children:d,onClick:o,disabled:e=!1,className:c})=>{const{close:i,focusedIndex:r,setFocusedIndex:s,registerItem:w}=j.useContext(k),[I]=p.useState(()=>w()),x=r===I,h=u=>{e||(o&&o(),i())};return n.jsx(q,{className:v("wim-dropdown-item",c),onClick:h,onFocus:()=>s(I),disabled:e,role:"menuitem",tabIndex:x?0:-1,onKeyDown:u=>{!e&&(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),h())},children:d})};D.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Components/Overlays/Dropdown",component:D,parameters:{layout:"centered"}},g={render:function(o){const{t:e}=S(E);return n.jsxs(D,{...o,children:[n.jsx(T,{children:n.jsx(N,{children:e("story.dropdown_open")})}),n.jsxs(C,{children:[n.jsx(a,{onClick:()=>console.log("Profile clicked"),children:e("story.dropdown_profile")}),n.jsx(a,{onClick:()=>console.log("Settings clicked"),children:e("story.dropdown_settings")}),n.jsx(a,{onClick:()=>console.log("Logout clicked"),children:e("story.dropdown_logout")})]})]})}},f={render:function(o){const{t:e}=S(E);return n.jsxs(D,{...o,children:[n.jsx(T,{children:n.jsx(N,{variant:"outline",children:e("story.dropdown_options")})}),n.jsxs(C,{children:[n.jsxs(a,{children:[n.jsx(A,{name:"CheckIcon",size:"sm"})," ",e("story.dropdown_edit")]}),n.jsxs(a,{children:[n.jsx(A,{name:"CopyIcon",size:"sm"})," ",e("story.dropdown_duplicate")]}),n.jsxs(a,{disabled:!0,children:[n.jsx(A,{name:"CloseIcon",size:"sm"})," ",e("story.dropdown_delete")]})]})]})}},y={render:function(o){const{t:e}=S(E);return n.jsx("div",{style:{paddingLeft:"200px"},children:n.jsxs(D,{...o,children:[n.jsx(T,{children:n.jsx(N,{children:e("story.dropdown_right_aligned")})}),n.jsxs(C,{align:"right",children:[n.jsxs(a,{children:[e("story.dropdown_item")," 1"]}),n.jsxs(a,{children:[e("story.dropdown_item")," 2"]}),n.jsxs(a,{children:[e("story.dropdown_item")," 3"]})]})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropdown {...args}>
        <DropdownTrigger>
          <Button>{t("story.dropdown_open")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            {t("story.dropdown_profile")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Settings clicked")}>
            {t("story.dropdown_settings")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Logout clicked")}>
            {t("story.dropdown_logout")}
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
          <Button variant="outline">{t("story.dropdown_options")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            <Icon name="CheckIcon" size="sm" /> {t("story.dropdown_edit")}
          </DropdownItem>
          <DropdownItem>
            <Icon name="CopyIcon" size="sm" /> {t("story.dropdown_duplicate")}
          </DropdownItem>
          <DropdownItem disabled>
            <Icon name="CloseIcon" size="sm" /> {t("story.dropdown_delete")}
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
            <Button>{t("story.dropdown_right_aligned")}</Button>
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>
              {t("story.dropdown_item")} 1
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 2
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const M=["Basic","WithIcons","AlignmentRight"],H=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:y,Basic:g,WithIcons:f,__namedExportsOrder:M,default:B},Symbol.toStringTag,{value:"Module"}));export{y as A,g as B,H as D,f as W};
