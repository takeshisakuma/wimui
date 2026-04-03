import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as R,R as T,A as I}from"./iframe-B6UUHjqT.js";import{c as h}from"./index-CplnqdeP.js";import{T as P}from"./Transition-BZecfWFa.js";import{I as c}from"./Icon-C137SdlL.js";import{B as D}from"./BaseListItem-BzQMDggD.js";import{u as f}from"./useTranslation-CvEZa3qJ.js";const q=T.createContext({expandedItems:new Set,toggleItem:()=>{},containerRef:{current:null},mode:"vertical",focusedIndex:0,setFocusedIndex:()=>{},registerItem:()=>0}),L=()=>{const u=T.useContext(q);if(!u)throw new Error("Menu sub-components must be used within a Menu");return u},l=({children:u,className:o,mode:n="vertical",defaultOpenKeys:M=[]})=>{const[_,x]=R.useState(new Set(M)),[g,y]=R.useState(0),p=T.useRef(0);T.useEffect(()=>{p.current=0});const j=()=>{const s=p.current;return p.current+=1,s},d=s=>{x(r=>{const a=new Set(r);return a.has(s)?a.delete(s):a.add(s),a})},i=T.useRef(null),z=s=>{const r=Array.from(i.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]),a=r.indexOf(document.activeElement);if(a!==-1){if(n==="vertical"||n==="inline"){if(s.key==="ArrowDown")s.preventDefault(),r[(a+1)%r.length]?.focus();else if(s.key==="ArrowUp")s.preventDefault(),r[(a-1+r.length)%r.length]?.focus();else if(s.key==="ArrowRight"){const m=r[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="false"&&(s.preventDefault(),m.click())}else if(s.key==="ArrowLeft"){const m=r[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="true"&&(s.preventDefault(),m.click())}}else if(n==="horizontal"){if(s.key==="ArrowRight")s.preventDefault(),r[(a+1)%r.length]?.focus();else if(s.key==="ArrowLeft")s.preventDefault(),r[(a-1+r.length)%r.length]?.focus();else if(s.key==="ArrowDown"){const m=r[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="false"&&(s.preventDefault(),m.click())}}s.key==="Home"?(s.preventDefault(),y(0),r[0]?.focus()):s.key==="End"&&(s.preventDefault(),y(r.length-1),r[r.length-1]?.focus())}};return e.jsx(q.Provider,{value:{expandedItems:_,toggleItem:d,containerRef:i,mode:n,focusedIndex:g,setFocusedIndex:y,registerItem:j},children:e.jsx("ul",{ref:i,className:h("wim-menu",`wim-menu--${n}`,o),role:"menu",onKeyDown:z,children:u})})},t=({children:u,onClick:o,disabled:n=!1,className:M,icon:_})=>{const{focusedIndex:x,setFocusedIndex:g,registerItem:y}=L(),[p]=R.useState(()=>y()),j=x===p,d=i=>{i.stopPropagation(),!n&&o&&o()};return e.jsx(D,{as:"li",className:h("wim-menu-item",M),onClick:d,onFocus:()=>g(p),disabled:n,icon:_,role:"menuitem",tabIndex:j?0:-1,onKeyDown:i=>{!n&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),d(i))},children:u})},E=({children:u,title:o,className:n})=>e.jsxs("li",{className:h("wim-menu-item-group",n),children:[o&&e.jsx("div",{className:"wim-menu-item-group__title",children:o}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:u})]}),k=({children:u,title:o,className:n,icon:M,itemKey:_})=>{const{expandedItems:x,toggleItem:g,registerItem:y,focusedIndex:p,setFocusedIndex:j}=L(),d=x.has(_),[i]=R.useState(()=>y()),z=p===i,s=r=>{r.stopPropagation(),g(_)};return e.jsxs("li",{className:h("wim-menu-submenu",d&&"wim-menu-submenu--open",n),children:[e.jsx(D,{className:"wim-menu-submenu__title",onClick:s,onFocus:()=>j(i),icon:M,rightSection:e.jsx("span",{className:h("wim-menu-submenu__arrow",d&&"wim-menu-submenu__arrow--open"),children:e.jsx(c,{name:"ChevronRightIcon",size:"sm"})}),role:"menuitem","aria-haspopup":"true","aria-expanded":d,tabIndex:z?0:-1,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),s(r))},children:o}),e.jsx(P,{show:d,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-menu-submenu__list",role:"menu",children:e.jsx("ul",{className:"wim-menu-submenu__list",children:u})})]})},K=({className:u})=>e.jsx("li",{className:h("wim-menu-divider",u),role:"separator"});l.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};E.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};K.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Overlays/Menu",component:l,parameters:{layout:"centered"}},b={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,children:[e.jsx(t,{children:n("story.menu_home")}),e.jsx(t,{children:n("story.menu_about")}),e.jsx(t,{children:n("story.menu_services")}),e.jsx(t,{children:n("story.menu_contact")})]})}},v={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"sm"}),children:n("story.menu_dashboard")}),e.jsx(t,{icon:e.jsx(c,{name:"CopyIcon",size:"sm"}),children:n("story.menu_projects")}),e.jsx(t,{icon:e.jsx(c,{name:"CloseIcon",size:"sm"}),children:n("story.menu_settings")})]})}},A={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"sm"}),children:n("story.menu_dashboard")}),e.jsxs(k,{itemKey:"sub1",title:n("story.menu_products"),icon:e.jsx(c,{name:"CopyIcon",size:"sm"}),children:[e.jsxs(t,{children:[n("story.menu_product")," 1"]}),e.jsxs(t,{children:[n("story.menu_product")," 2"]}),e.jsxs(t,{children:[n("story.menu_product")," 3"]})]}),e.jsxs(k,{itemKey:"sub2",title:n("story.menu_services"),icon:e.jsx(c,{name:"CloseIcon",size:"sm"}),children:[e.jsxs(t,{children:[n("story.menu_service")," A"]}),e.jsxs(t,{children:[n("story.menu_service")," B"]})]}),e.jsx(t,{children:n("story.menu_contact")})]})}},S={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,children:[e.jsxs(E,{title:n("story.menu_main_pages"),children:[e.jsx(t,{children:n("story.menu_home")}),e.jsx(t,{children:n("story.menu_about")}),e.jsx(t,{children:n("story.menu_contact")})]}),e.jsx(K,{}),e.jsxs(E,{title:n("story.menu_user_actions"),children:[e.jsx(t,{children:n("story.menu_profile")}),e.jsx(t,{children:n("story.menu_settings")}),e.jsx(t,{children:n("story.menu_logout")})]})]})}},w={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,mode:"horizontal",children:[e.jsx(t,{children:n("story.menu_home")}),e.jsx(t,{children:n("story.menu_about")}),e.jsx(t,{children:n("story.menu_services")}),e.jsx(t,{children:n("story.menu_contact")})]})}},N={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"sm"}),children:n("story.menu_dashboard")}),e.jsxs(k,{itemKey:"sub1",title:n("story.menu_settings"),icon:e.jsx(c,{name:"CopyIcon",size:"sm"}),children:[e.jsx(t,{children:n("story.menu_profile_settings")}),e.jsx(t,{children:n("story.menu_account_settings")}),e.jsx(t,{children:n("story.menu_privacy_settings")})]}),e.jsx(t,{icon:e.jsx(c,{name:"CloseIcon",size:"sm"}),children:n("story.menu_logout")})]})}},C={render:function(o){const{t:n}=f(I);return e.jsxs(l,{...o,children:[e.jsx(t,{children:n("story.menu_active_item")}),e.jsx(t,{disabled:!0,children:n("story.menu_disabled_item")}),e.jsx(t,{children:n("story.menu_another_active_item")||"Another Active Item"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <MenuItem icon={<Icon name="CopyIcon" size="sm" />}>
          {t("story.menu_projects")}
        </MenuItem>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_settings")}
        </MenuItem>
      </Menu>;
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu itemKey="sub1" title={t("story.menu_products")} icon={<Icon name="CopyIcon" size="sm" />}>
          <MenuItem>{t("story.menu_product")} 1</MenuItem>
          <MenuItem>{t("story.menu_product")} 2</MenuItem>
          <MenuItem>{t("story.menu_product")} 3</MenuItem>
        </SubMenu>
        <SubMenu itemKey="sub2" title={t("story.menu_services")} icon={<Icon name="CloseIcon" size="sm" />}>
          <MenuItem>{t("story.menu_service")} A</MenuItem>
          <MenuItem>{t("story.menu_service")} B</MenuItem>
        </SubMenu>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItemGroup title={t("story.menu_main_pages")}>
          <MenuItem>{t("story.menu_home")}</MenuItem>
          <MenuItem>{t("story.menu_about")}</MenuItem>
          <MenuItem>{t("story.menu_contact")}</MenuItem>
        </MenuItemGroup>
        <MenuDivider />
        <MenuItemGroup title={t("story.menu_user_actions")}>
          <MenuItem>{t("story.menu_profile")}</MenuItem>
          <MenuItem>{t("story.menu_settings")}</MenuItem>
          <MenuItem>{t("story.menu_logout")}</MenuItem>
        </MenuItemGroup>
      </Menu>;
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} mode="horizontal">
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>;
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu itemKey="sub1" title={t("story.menu_settings")} icon={<Icon name="CopyIcon" size="sm" />}>
          <MenuItem>{t("story.menu_profile_settings")}</MenuItem>
          <MenuItem>{t("story.menu_account_settings")}</MenuItem>
          <MenuItem>{t("story.menu_privacy_settings")}</MenuItem>
        </SubMenu>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_logout")}
        </MenuItem>
      </Menu>;
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>
        <MenuItem>{t("story.menu_active_item")}</MenuItem>
        <MenuItem disabled>{t("story.menu_disabled_item")}</MenuItem>
        <MenuItem>{t("story.menu_another_active_item") || "Another Active Item"}</MenuItem>
      </Menu>;
  }
}`,...C.parameters?.docs?.source}}};const F=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],J=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Horizontal:w,Inline:N,WithDisabledItems:C,WithGroups:S,WithIcons:v,WithSubMenu:A,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{w as H,N as I,J as M,v as W,A as a,S as b};
