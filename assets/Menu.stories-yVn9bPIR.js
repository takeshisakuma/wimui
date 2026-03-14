import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as R,R as T}from"./iframe-CauSMpP2.js";import{c as h}from"./index-DG63t_hX.js";import{B as D}from"./BaseListItem-D5WUioOq.js";import{T as P}from"./Transition-Borg5LWj.js";import{I as c}from"./Icon-BHqUNIEq.js";import{A as y}from"./i18nConstants-BpHxieg5.js";import{u as I}from"./useTranslation-DWvjPTrY.js";const q=T.createContext({expandedItems:new Set,toggleItem:()=>{},containerRef:{current:null},mode:"vertical",focusedIndex:0,setFocusedIndex:()=>{},registerItem:()=>0}),L=()=>{const u=T.useContext(q);if(!u)throw new Error("Menu sub-components must be used within a Menu");return u},d=({children:u,className:o,mode:n="vertical",defaultOpenKeys:M=[]})=>{const[f,x]=R.useState(new Set(M)),[g,p]=R.useState(0),_=T.useRef(0);T.useEffect(()=>{_.current=0});const j=()=>{const r=_.current;return _.current+=1,r},l=r=>{x(s=>{const a=new Set(s);return a.has(r)?a.delete(r):a.add(r),a})},i=T.useRef(null),z=r=>{const s=Array.from(i.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')||[]),a=s.indexOf(document.activeElement);if(a!==-1){if(n==="vertical"||n==="inline"){if(r.key==="ArrowDown")r.preventDefault(),s[(a+1)%s.length]?.focus();else if(r.key==="ArrowUp")r.preventDefault(),s[(a-1+s.length)%s.length]?.focus();else if(r.key==="ArrowRight"){const m=s[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="false"&&(r.preventDefault(),m.click())}else if(r.key==="ArrowLeft"){const m=s[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="true"&&(r.preventDefault(),m.click())}}else if(n==="horizontal"){if(r.key==="ArrowRight")r.preventDefault(),s[(a+1)%s.length]?.focus();else if(r.key==="ArrowLeft")r.preventDefault(),s[(a-1+s.length)%s.length]?.focus();else if(r.key==="ArrowDown"){const m=s[a];m.getAttribute("aria-haspopup")==="true"&&m.getAttribute("aria-expanded")==="false"&&(r.preventDefault(),m.click())}}r.key==="Home"?(r.preventDefault(),p(0),s[0]?.focus()):r.key==="End"&&(r.preventDefault(),p(s.length-1),s[s.length-1]?.focus())}};return e.jsx(q.Provider,{value:{expandedItems:f,toggleItem:l,containerRef:i,mode:n,focusedIndex:g,setFocusedIndex:p,registerItem:j},children:e.jsx("ul",{ref:i,className:h("wim-menu",`wim-menu--${n}`,o),role:"menu",onKeyDown:z,children:u})})},t=({children:u,onClick:o,disabled:n=!1,className:M,icon:f})=>{const{focusedIndex:x,setFocusedIndex:g,registerItem:p}=L(),[_]=R.useState(()=>p()),j=x===_,l=i=>{i.stopPropagation(),!n&&o&&o()};return e.jsx(D,{as:"li",className:h("wim-menu-item",M),onClick:l,onFocus:()=>g(_),disabled:n,icon:f,role:"menuitem",tabIndex:j?0:-1,onKeyDown:i=>{!n&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),l(i))},children:u})},E=({children:u,title:o,className:n})=>e.jsxs("li",{className:h("wim-menu-item-group",n),children:[o&&e.jsx("div",{className:"wim-menu-item-group__title",children:o}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:u})]}),k=({children:u,title:o,className:n,icon:M,itemKey:f})=>{const{expandedItems:x,toggleItem:g,registerItem:p,focusedIndex:_,setFocusedIndex:j}=L(),l=x.has(f),[i]=R.useState(()=>p()),z=_===i,r=s=>{s.stopPropagation(),g(f)};return e.jsxs("li",{className:h("wim-menu-submenu",l&&"wim-menu-submenu--open",n),children:[e.jsx(D,{className:"wim-menu-submenu__title",onClick:r,onFocus:()=>j(i),icon:M,rightSection:e.jsx("span",{className:h("wim-menu-submenu__arrow",l&&"wim-menu-submenu__arrow--open"),children:e.jsx(c,{name:"ChevronRightIcon",size:"small"})}),role:"menuitem","aria-haspopup":"true","aria-expanded":l,tabIndex:z?0:-1,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r(s))},children:o}),e.jsx(P,{show:l,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-menu-submenu__list",role:"menu",children:e.jsx("ul",{className:"wim-menu-submenu__list",children:u})})]})},K=({className:u})=>e.jsx("li",{className:h("wim-menu-divider",u),role:"separator"});d.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};E.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};K.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Overlays/Menu",component:d,parameters:{layout:"centered"}},b={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_services")}),e.jsx(t,{children:n("story_menu_contact")})]})}},v={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsx(t,{icon:e.jsx(c,{name:"CopyIcon",size:"small"}),children:n("story_menu_projects")}),e.jsx(t,{icon:e.jsx(c,{name:"CloseIcon",size:"small"}),children:n("story_menu_settings")})]})}},A={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(k,{itemKey:"sub1",title:n("story_menu_products"),icon:e.jsx(c,{name:"CopyIcon",size:"small"}),children:[e.jsxs(t,{children:[n("story_menu_product")," 1"]}),e.jsxs(t,{children:[n("story_menu_product")," 2"]}),e.jsxs(t,{children:[n("story_menu_product")," 3"]})]}),e.jsxs(k,{itemKey:"sub2",title:n("story_menu_services"),icon:e.jsx(c,{name:"CloseIcon",size:"small"}),children:[e.jsxs(t,{children:[n("story_menu_service")," A"]}),e.jsxs(t,{children:[n("story_menu_service")," B"]})]}),e.jsx(t,{children:n("story_menu_contact")})]})}},S={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,children:[e.jsxs(E,{title:n("story_menu_main_pages"),children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_contact")})]}),e.jsx(K,{}),e.jsxs(E,{title:n("story_menu_user_actions"),children:[e.jsx(t,{children:n("story_menu_profile")}),e.jsx(t,{children:n("story_menu_settings")}),e.jsx(t,{children:n("story_menu_logout")})]})]})}},w={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,mode:"horizontal",children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_services")}),e.jsx(t,{children:n("story_menu_contact")})]})}},N={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(c,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(k,{itemKey:"sub1",title:n("story_menu_settings"),icon:e.jsx(c,{name:"CopyIcon",size:"small"}),children:[e.jsx(t,{children:n("story_menu_profile_settings")}),e.jsx(t,{children:n("story_menu_account_settings")}),e.jsx(t,{children:n("story_menu_privacy_settings")})]}),e.jsx(t,{icon:e.jsx(c,{name:"CloseIcon",size:"small"}),children:n("story_menu_logout")})]})}},C={render:function(o){const{t:n}=I(y);return e.jsxs(d,{...o,children:[e.jsx(t,{children:n("story_menu_active_item")}),e.jsx(t,{disabled:!0,children:n("story_menu_disabled_item")}),e.jsx(t,{children:n("story_menu_another_active_item")||"Another Active Item"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args} mode="horizontal">\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_active_item")}</MenuItem>\r
        <MenuItem disabled>{t("story_menu_disabled_item")}</MenuItem>\r
        <MenuItem>{t("story_menu_another_active_item") || "Another Active Item"}</MenuItem>\r
      </Menu>;
  }
}`,...C.parameters?.docs?.source}}};const F=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],Q=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Horizontal:w,Inline:N,WithDisabledItems:C,WithGroups:S,WithIcons:v,WithSubMenu:A,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{w as H,N as I,Q as M,v as W,A as a,S as b};
