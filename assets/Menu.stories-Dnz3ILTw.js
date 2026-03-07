import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as z,R as T}from"./iframe-BLtjAiBw.js";import{c as _}from"./index-DlDwX616.js";import{B as N}from"./BaseListItem-CYGWL0Kx.js";import{T as C}from"./Transition-BJRi8YQB.js";import{I as u}from"./Icon-DCQu28KW.js";import{u as c}from"./useTranslation-CIS57IFk.js";const w=T.createContext({expandedItems:new Set,toggleItem:()=>{}}),i=({children:r,className:s,mode:n="vertical",defaultOpenKeys:p=[]})=>{const[l,d]=z.useState(new Set(p)),m=a=>{d(j=>{const o=new Set(j);return o.has(a)?o.delete(a):o.add(a),o})};return e.jsx(w.Provider,{value:{expandedItems:l,toggleItem:m},children:e.jsx("ul",{className:_("wim-menu",`wim-menu--${n}`,s),role:"menu",children:r})})},t=({children:r,onClick:s,disabled:n=!1,className:p,icon:l})=>{const d=m=>{m.stopPropagation(),!n&&s&&s()};return e.jsx(N,{as:"li",className:_("wim-menu-item",p),onClick:d,disabled:n,icon:l,role:"menuitem",tabIndex:n?-1:0,onKeyDown:m=>{!n&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),d(m))},children:r})},v=({children:r,title:s,className:n})=>e.jsxs("li",{className:_("wim-menu-item-group",n),children:[s&&e.jsx("div",{className:"wim-menu-item-group__title",children:s}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:r})]}),b=({children:r,title:s,className:n,icon:p,itemKey:l})=>{const{expandedItems:d,toggleItem:m}=T.useContext(w),a=d.has(l),j=o=>{o.stopPropagation(),m(l)};return e.jsxs("li",{className:_("wim-menu-submenu",a&&"wim-menu-submenu--open",n),children:[e.jsx(N,{className:"wim-menu-submenu__title",onClick:j,icon:p,rightSection:e.jsx("span",{className:_("wim-menu-submenu__arrow",a&&"wim-menu-submenu__arrow--open"),children:e.jsx(u,{name:"ChevronRightIcon",size:"small"})}),role:"menuitem","aria-haspopup":"true","aria-expanded":a,tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),j(o))},children:s}),e.jsx(C,{show:a,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-menu-submenu__list",role:"menu",children:e.jsx("ul",{className:"wim-menu-submenu__list",children:r})})]})},S=({className:r})=>e.jsx("li",{className:_("wim-menu-divider",r),role:"separator"});i.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};v.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};S.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Overlays/Menu",component:i,parameters:{layout:"centered"}},y={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_services")}),e.jsx(t,{children:n("story_menu_contact")})]})}},I={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,children:[e.jsx(t,{icon:e.jsx(u,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsx(t,{icon:e.jsx(u,{name:"CopyIcon",size:"small"}),children:n("story_menu_projects")}),e.jsx(t,{icon:e.jsx(u,{name:"CloseIcon",size:"small"}),children:n("story_menu_settings")})]})}},M={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(u,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(b,{itemKey:"sub1",title:n("story_menu_products"),icon:e.jsx(u,{name:"CopyIcon",size:"small"}),children:[e.jsxs(t,{children:[n("story_menu_product")," 1"]}),e.jsxs(t,{children:[n("story_menu_product")," 2"]}),e.jsxs(t,{children:[n("story_menu_product")," 3"]})]}),e.jsxs(b,{itemKey:"sub2",title:n("story_menu_services"),icon:e.jsx(u,{name:"CloseIcon",size:"small"}),children:[e.jsxs(t,{children:[n("story_menu_service")," A"]}),e.jsxs(t,{children:[n("story_menu_service")," B"]})]}),e.jsx(t,{children:n("story_menu_contact")})]})}},h={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,children:[e.jsxs(v,{title:n("story_menu_main_pages"),children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_contact")})]}),e.jsx(S,{}),e.jsxs(v,{title:n("story_menu_user_actions"),children:[e.jsx(t,{children:n("story_menu_profile")}),e.jsx(t,{children:n("story_menu_settings")}),e.jsx(t,{children:n("story_menu_logout")})]})]})}},f={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,mode:"horizontal",children:[e.jsx(t,{children:n("story_menu_home")}),e.jsx(t,{children:n("story_menu_about")}),e.jsx(t,{children:n("story_menu_services")}),e.jsx(t,{children:n("story_menu_contact")})]})}},x={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(t,{icon:e.jsx(u,{name:"CheckIcon",size:"small"}),children:n("story_menu_dashboard")}),e.jsxs(b,{itemKey:"sub1",title:n("story_menu_settings"),icon:e.jsx(u,{name:"CopyIcon",size:"small"}),children:[e.jsx(t,{children:n("story_menu_profile_settings")}),e.jsx(t,{children:n("story_menu_account_settings")}),e.jsx(t,{children:n("story_menu_privacy_settings")})]}),e.jsx(t,{icon:e.jsx(u,{name:"CloseIcon",size:"small"}),children:n("story_menu_logout")})]})}},g={render:function(s){const{t:n}=c(["docs","common","components"]);return e.jsxs(i,{...s,children:[e.jsx(t,{children:n("story_menu_active_item")}),e.jsx(t,{disabled:!0,children:n("story_menu_disabled_item")}),e.jsx(t,{children:n("story_menu_another_active_item")||"Another Active Item"})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Menu {...args} mode="horizontal">\r
        <MenuItem>{t("story_menu_home")}</MenuItem>\r
        <MenuItem>{t("story_menu_about")}</MenuItem>\r
        <MenuItem>{t("story_menu_services")}</MenuItem>\r
        <MenuItem>{t("story_menu_contact")}</MenuItem>\r
      </Menu>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Menu {...args}>\r
        <MenuItem>{t("story_menu_active_item")}</MenuItem>\r
        <MenuItem disabled>{t("story_menu_disabled_item")}</MenuItem>\r
        <MenuItem>{t("story_menu_another_active_item") || "Another Active Item"}</MenuItem>\r
      </Menu>;
  }
}`,...g.parameters?.docs?.source}}};const q=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],B=Object.freeze(Object.defineProperty({__proto__:null,Basic:y,Horizontal:f,Inline:x,WithDisabledItems:g,WithGroups:h,WithIcons:I,WithSubMenu:M,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{f as H,x as I,B as M,I as W,M as a,h as b};
