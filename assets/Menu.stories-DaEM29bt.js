import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as k,R as N}from"./iframe-BFeRKT7x.js";import{c as f}from"./index-CP8jozY9.js";import{B as q}from"./BaseListItem-C4NJpUpf.js";import{T as E}from"./Transition-CgZytj2V.js";import{I as d}from"./Icon-D4ZM1Mba.js";import{u as y}from"./useTranslation-DVQ5refS.js";const A=N.createContext({expandedItems:new Set,toggleItem:()=>{},containerRef:{current:null},mode:"vertical",focusedIndex:0,setFocusedIndex:()=>{},registerItem:()=>0}),K=()=>{const c=N.useContext(A);if(!c)throw new Error("Menu sub-components must be used within a Menu");return c},l=({children:c,className:r,mode:n="vertical",defaultOpenKeys:g=[]})=>{const[I,h]=k.useState(new Set(g)),[M,p]=k.useState(0),_=N.useRef(0);N.useEffect(()=>{_.current=0});const x=()=>{const t=_.current;return _.current+=1,t},m=t=>{h(o=>{const u=new Set(o);return u.has(t)?u.delete(t):u.add(t),u})},i=N.useRef(null),C=t=>{const o=Array.from(i.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]),u=o.indexOf(document.activeElement);if(u!==-1){if(n==="vertical"||n==="inline"){if(t.key==="ArrowDown")t.preventDefault(),o[(u+1)%o.length]?.focus();else if(t.key==="ArrowUp")t.preventDefault(),o[(u-1+o.length)%o.length]?.focus();else if(t.key==="ArrowRight"){const a=o[u];a.getAttribute("aria-haspopup")==="true"&&a.getAttribute("aria-expanded")==="false"&&(t.preventDefault(),a.click())}else if(t.key==="ArrowLeft"){const a=o[u];a.getAttribute("aria-haspopup")==="true"&&a.getAttribute("aria-expanded")==="true"&&(t.preventDefault(),a.click())}}else if(n==="horizontal"){if(t.key==="ArrowRight")t.preventDefault(),o[(u+1)%o.length]?.focus();else if(t.key==="ArrowLeft")t.preventDefault(),o[(u-1+o.length)%o.length]?.focus();else if(t.key==="ArrowDown"){const a=o[u];a.getAttribute("aria-haspopup")==="true"&&a.getAttribute("aria-expanded")==="false"&&(t.preventDefault(),a.click())}}t.key==="Home"?(t.preventDefault(),p(0),o[0]?.focus()):t.key==="End"&&(t.preventDefault(),p(o.length-1),o[o.length-1]?.focus())}};return e.jsx(A.Provider,{value:{expandedItems:I,toggleItem:m,containerRef:i,mode:n,focusedIndex:M,setFocusedIndex:p,registerItem:x},children:e.jsx("ul",{ref:i,className:f("wim-menu",`wim-menu--${n}`,r),role:"menu",onKeyDown:C,children:c})})},s=({children:c,onClick:r,disabled:n=!1,className:g,icon:I})=>{const{focusedIndex:h,setFocusedIndex:M,registerItem:p}=K(),[_]=k.useState(()=>p()),x=h===_,m=i=>{i.stopPropagation(),!n&&r&&r()};return e.jsx(q,{as:"li",className:f("wim-menu-item",g),onClick:m,onFocus:()=>M(_),disabled:n,icon:I,role:"menuitem",tabIndex:x?0:-1,onKeyDown:i=>{!n&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),m(i))},children:c})},D=({children:c,title:r,className:n})=>e.jsxs("li",{className:f("wim-menu-item-group",n),children:[r&&e.jsx("div",{className:"wim-menu-item-group__title",children:r}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:c})]}),z=({children:c,title:r,className:n,icon:g,itemKey:I})=>{const{expandedItems:h,toggleItem:M,registerItem:p,focusedIndex:_,setFocusedIndex:x}=K(),m=h.has(I),[i]=k.useState(()=>p()),C=_===i,t=o=>{o.stopPropagation(),M(I)};return e.jsxs("li",{className:f("wim-menu-submenu",m&&"wim-menu-submenu--open",n),children:[e.jsx(q,{className:"wim-menu-submenu__title",onClick:t,onFocus:()=>x(i),icon:g,rightSection:e.jsx("span",{className:f("wim-menu-submenu__arrow",m&&"wim-menu-submenu__arrow--open"),children:e.jsx(d,{name:"ChevronRightIcon",size:"small"})}),role:"menuitem","aria-haspopup":"true","aria-expanded":m,tabIndex:C?0:-1,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),t(o))},children:r}),e.jsx(E,{show:m,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-menu-submenu__list",role:"menu",children:e.jsx("ul",{className:"wim-menu-submenu__list",children:c})})]})},O=({className:c})=>e.jsx("li",{className:f("wim-menu-divider",c),role:"separator"});l.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};s.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};D.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};O.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/Overlays/Menu",component:l,parameters:{layout:"centered"}},v={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,children:[e.jsx(s,{children:n("story_menu_home")}),e.jsx(s,{children:n("story_menu_about")}),e.jsx(s,{children:n("story_menu_services")}),e.jsx(s,{children:n("story_menu_contact")})]})}},j={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,children:[e.jsx(s,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsx(s,{icon:e.jsx(d,{name:"CopyIcon",size:"small"}),children:n("story_menu_projects")}),e.jsx(s,{icon:e.jsx(d,{name:"CloseIcon",size:"small"}),children:n("story_menu_settings")})]})}},b={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,defaultOpenKeys:["sub1"],children:[e.jsx(s,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(z,{itemKey:"sub1",title:n("story_menu_products"),icon:e.jsx(d,{name:"CopyIcon",size:"small"}),children:[e.jsxs(s,{children:[n("story_menu_product")," 1"]}),e.jsxs(s,{children:[n("story_menu_product")," 2"]}),e.jsxs(s,{children:[n("story_menu_product")," 3"]})]}),e.jsxs(z,{itemKey:"sub2",title:n("story_menu_services"),icon:e.jsx(d,{name:"CloseIcon",size:"small"}),children:[e.jsxs(s,{children:[n("story_menu_service")," A"]}),e.jsxs(s,{children:[n("story_menu_service")," B"]})]}),e.jsx(s,{children:n("story_menu_contact")})]})}},w={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,children:[e.jsxs(D,{title:n("story_menu_main_pages"),children:[e.jsx(s,{children:n("story_menu_home")}),e.jsx(s,{children:n("story_menu_about")}),e.jsx(s,{children:n("story_menu_contact")})]}),e.jsx(O,{}),e.jsxs(D,{title:n("story_menu_user_actions"),children:[e.jsx(s,{children:n("story_menu_profile")}),e.jsx(s,{children:n("story_menu_settings")}),e.jsx(s,{children:n("story_menu_logout")})]})]})}},T={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,mode:"horizontal",children:[e.jsx(s,{children:n("story_menu_home")}),e.jsx(s,{children:n("story_menu_about")}),e.jsx(s,{children:n("story_menu_services")}),e.jsx(s,{children:n("story_menu_contact")})]})}},R={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(s,{icon:e.jsx(d,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(z,{itemKey:"sub1",title:n("story_menu_settings"),icon:e.jsx(d,{name:"CopyIcon",size:"small"}),children:[e.jsx(s,{children:n("story_menu_profile_settings")}),e.jsx(s,{children:n("story_menu_account_settings")}),e.jsx(s,{children:n("story_menu_privacy_settings")})]}),e.jsx(s,{icon:e.jsx(d,{name:"CloseIcon",size:"small"}),children:n("story_menu_logout")})]})}},S={render:function(r){const{t:n}=y(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(l,{...r,children:[e.jsx(s,{children:n("story_menu_active_item")}),e.jsx(s,{disabled:!0,children:n("story_menu_disabled_item")}),e.jsx(s,{children:n("story_menu_another_active_item")||"Another Active Item"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
          {t("story_menu_dashboard")}\r
        </MenuItem>\r
        <MenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
          {t("story_menu_projects")}\r
        </MenuItem>\r
        <MenuItem icon={<Icon name="CloseIcon" size="small" />}>\r
          {t("story_menu_settings")}\r
        </MenuItem>\r
      </Menu>;
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args} defaultOpenKeys={["sub1"]}>\r
        <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
          {t("story_menu_dashboard")}\r
        </MenuItem>\r
        <SubMenu itemKey="sub1" title={t("story_menu_products")} icon={<Icon name="CopyIcon" size="small" />}>\r
          <MenuItem>{t("story_menu_product")} 1</MenuItem>\r
          <MenuItem>{t("story_menu_product")} 2</MenuItem>\r
          <MenuItem>{t("story_menu_product")} 3</MenuItem>\r
        </SubMenu>\r
        <SubMenu itemKey="sub2" title={t("story_menu_services")} icon={<Icon name="CloseIcon" size="small" />}>\r
          <MenuItem>{t("story_menu_service")} A</MenuItem>\r
          <MenuItem>{t("story_menu_service")} B</MenuItem>\r
        </SubMenu>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItemGroup title={t("story_menu_main_pages")}>\r
          <MenuItem>{t("story_menu_home")}</MenuItem>\r
          <MenuItem>{t("story_menu_about")}</MenuItem>\r
          <MenuItem>{t("story_menu_contact")}</MenuItem>\r
        </MenuItemGroup>\r
        <MenuDivider />\r
        <MenuItemGroup title={t("story_menu_user_actions")}>\r
          <MenuItem>{t("story_menu_profile")}</MenuItem>\r
          <MenuItem>{t("story_menu_settings")}</MenuItem>\r
          <MenuItem>{t("story_menu_logout")}</MenuItem>\r
        </MenuItemGroup>\r
      </Menu>;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args} mode="horizontal">\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>\r
        <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
          {t("story_menu_dashboard")}\r
        </MenuItem>\r
        <SubMenu itemKey="sub1" title={t("story_menu_settings")} icon={<Icon name="CopyIcon" size="small" />}>\r
          <MenuItem>{t("story_menu_profile_settings")}</MenuItem>\r
          <MenuItem>{t("story_menu_account_settings")}</MenuItem>\r
          <MenuItem>{t("story_menu_privacy_settings")}</MenuItem>\r
        </SubMenu>\r
        <MenuItem icon={<Icon name="CloseIcon" size="small" />}>\r
          {t("story_menu_logout")}\r
        </MenuItem>\r
      </Menu>;
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_active_item")}</MenuItem>\r
        <MenuItem disabled>{t("story_menu_disabled_item")}</MenuItem>\r
        <MenuItem>{t("story_menu_another_active_item") || "Another Active Item"}</MenuItem>\r
      </Menu>;
  }
}`,...S.parameters?.docs?.source}}};const W=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:v,Horizontal:T,Inline:R,WithDisabledItems:S,WithGroups:w,WithIcons:j,WithSubMenu:b,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{T as H,R as I,$ as M,j as W,b as a,w as b};
