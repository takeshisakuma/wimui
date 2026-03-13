import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as v}from"./iframe-DtwnyzFc.js";import{c as j}from"./index-DWTvJvSx.js";import{B as S}from"./BaseListItem-kmmASkV3.js";import{T as O}from"./Transition-DKhb8UaF.js";import{B as R}from"./Button-CE01zq8d.js";import{I as C}from"./Icon-CPLASYuL.js";import{u as N}from"./useTranslation-BJQcmf5i.js";const k=v.createContext({isOpen:!1,toggle:()=>{},close:()=>{},menuId:"",triggerId:"",focusedIndex:-1,setFocusedIndex:()=>{},registerItem:()=>0,containerRef:{current:null}}),y=({children:d,className:n})=>{const[e,a]=p.useState(!1),[i,r]=p.useState(-1),t=p.useRef(null),_=p.useRef(0);p.useEffect(()=>{_.current=0});const D=()=>{const s=_.current;return _.current+=1,s},I=p.useId(),x=`wim-dropdown-menu-${I}`,m=`wim-dropdown-trigger-${I}`,E=()=>{const s=!e;a(s),r(s?0:-1)},h=()=>{a(!1),r(-1)};p.useEffect(()=>{const s=l=>{t.current&&!t.current.contains(l.target)&&h()},u=l=>{l.key==="Escape"&&h()};return e&&(document.addEventListener("mousedown",s),document.addEventListener("keydown",u)),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",u)}},[e]);const q=s=>{if(!e)return;const u=Array.from(t.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]);switch(s.key){case"ArrowDown":s.preventDefault(),r(l=>l<u.length-1?l+1:0);break;case"ArrowUp":s.preventDefault(),r(l=>l>0?l-1:u.length-1);break;case"Home":s.preventDefault(),r(0);break;case"End":s.preventDefault(),r(u.length-1);break;case"Tab":h();break}};return p.useEffect(()=>{e&&i>=0&&Array.from(t.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[])[i]?.focus()},[i,e]),o.jsx(k.Provider,{value:{isOpen:e,toggle:E,close:h,menuId:x,triggerId:m,focusedIndex:i,setFocusedIndex:r,registerItem:D,containerRef:t},children:o.jsx("div",{className:j("wim-dropdown",n),ref:t,onKeyDown:q,children:d})})},T=({children:d,className:n})=>{const{toggle:e,isOpen:a,menuId:i,triggerId:r}=v.useContext(k);return o.jsx("div",{id:r,className:j("wim-dropdown-trigger",n),onClick:e,"aria-haspopup":"menu","aria-expanded":a,"aria-controls":a?i:void 0,role:"button",tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),e())},children:d})},b=({children:d,className:n,align:e="left"})=>{const{isOpen:a,menuId:i,triggerId:r}=v.useContext(k);return o.jsx(O,{show:a,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",id:i,className:j("wim-dropdown-menu",`wim-dropdown-menu--align-${e}`,n),role:"menu","aria-labelledby":r,children:d})},c=({children:d,onClick:n,disabled:e=!1,className:a})=>{const{close:i,focusedIndex:r,setFocusedIndex:t,registerItem:_}=v.useContext(k),[D]=p.useState(()=>_()),I=r===D,x=m=>{e||(n&&n(),i())};return o.jsx(S,{className:j("wim-dropdown-item",a),onClick:x,onFocus:()=>t(D),disabled:e,role:"menuitem",tabIndex:I?0:-1,onKeyDown:m=>{!e&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),x())},children:d})};y.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"DropdownTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/Overlays/Dropdown",component:y,parameters:{layout:"centered"}},g={render:function(n){const{t:e}=N(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(y,{...n,children:[o.jsx(T,{children:o.jsx(R,{label:e("story_dropdown_open")})}),o.jsxs(b,{children:[o.jsx(c,{onClick:()=>console.log("Profile clicked"),children:e("story_dropdown_profile")}),o.jsx(c,{onClick:()=>console.log("Settings clicked"),children:e("story_dropdown_settings")}),o.jsx(c,{onClick:()=>console.log("Logout clicked"),children:e("story_dropdown_logout")})]})]})}},w={render:function(n){const{t:e}=N(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsxs(y,{...n,children:[o.jsx(T,{children:o.jsx(R,{priority:"secondary",label:e("story_dropdown_options")})}),o.jsxs(b,{children:[o.jsxs(c,{children:[o.jsx(C,{name:"CheckIcon",size:"small"})," ",e("story_dropdown_edit")]}),o.jsxs(c,{children:[o.jsx(C,{name:"CopyIcon",size:"small"})," ",e("story_dropdown_duplicate")]}),o.jsxs(c,{disabled:!0,children:[o.jsx(C,{name:"CloseIcon",size:"small"})," ",e("story_dropdown_delete")]})]})]})}},f={render:function(n){const{t:e}=N(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx("div",{style:{paddingLeft:"200px"},children:o.jsxs(y,{...n,children:[o.jsx(T,{children:o.jsx(R,{label:e("story_dropdown_right_aligned")})}),o.jsxs(b,{align:"right",children:[o.jsxs(c,{children:[e("story_dropdown_item")," 1"]}),o.jsxs(c,{children:[e("story_dropdown_item")," 2"]}),o.jsxs(c,{children:[e("story_dropdown_item")," 3"]})]})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...f.parameters?.docs?.source}}};const B=["Basic","WithIcons","AlignmentRight"],V=Object.freeze(Object.defineProperty({__proto__:null,AlignmentRight:f,Basic:g,WithIcons:w,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{f as A,V as D,w as W};
