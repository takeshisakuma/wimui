import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as N,R as v}from"./iframe-_LIyV8nm.js";import{c as p}from"./index-6t_9KPq4.js";import{T as w}from"./Transition-OXw_eKRt.js";import{I as a}from"./Icon-BfV3doRA.js";const _=v.createContext({expandedItems:new Set,toggleItem:()=>{}}),m=({children:r,className:o,mode:s="vertical",defaultOpenKeys:l=[]})=>{const[u,d]=N.useState(new Set(l)),i=c=>{d(y=>{const t=new Set(y);return t.has(c)?t.delete(c):t.add(c),t})};return e.jsx(_.Provider,{value:{expandedItems:u,toggleItem:i},children:e.jsx("ul",{className:p("wim-menu",`wim-menu--${s}`,o),role:"menu",children:r})})},n=({children:r,onClick:o,disabled:s=!1,className:l,icon:u})=>{const d=i=>{i.stopPropagation(),!s&&o&&o()};return e.jsxs("li",{className:p("wim-menu-item",s&&"wim-menu-item--disabled",l),onClick:d,role:"menuitem",tabIndex:s?-1:0,"aria-disabled":s,onKeyDown:i=>{!s&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),d(i))},children:[u&&e.jsx("span",{className:"wim-menu-item__icon",children:u}),e.jsx("span",{className:"wim-menu-item__content",children:r})]})},S=({children:r,title:o,className:s})=>e.jsxs("li",{className:p("wim-menu-item-group",s),children:[o&&e.jsx("div",{className:"wim-menu-item-group__title",children:o}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:r})]}),b=({children:r,title:o,className:s,icon:l,itemKey:u})=>{const{expandedItems:d,toggleItem:i}=v.useContext(_),c=d.has(u),y=t=>{t.stopPropagation(),i(u)};return e.jsxs("li",{className:p("wim-menu-submenu",c&&"wim-menu-submenu--open",s),children:[e.jsxs("div",{className:"wim-menu-submenu__title",onClick:y,role:"menuitem","aria-haspopup":"true","aria-expanded":c,tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),y(t))},children:[l&&e.jsx("span",{className:"wim-menu-item__icon",children:l}),e.jsx("span",{className:"wim-menu-item__content",children:o}),e.jsx("span",{className:p("wim-menu-submenu__arrow",c&&"wim-menu-submenu__arrow--open"),children:e.jsx(a,{name:"ChevronRightIcon",size:"small"})})]}),e.jsx(w,{show:c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-menu-submenu__list",role:"menu",children:e.jsx("ul",{className:"wim-menu-submenu__list",children:r})})]})},C=({className:r})=>e.jsx("li",{className:p("wim-menu-divider",r),role:"separator"});m.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};S.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};C.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Component/Overlays/Menu",component:m,parameters:{layout:"centered"}},I={render:r=>e.jsxs(m,{...r,children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Services"}),e.jsx(n,{children:"Contact"})]})},M={render:r=>e.jsxs(m,{...r,children:[e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsx(n,{icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:"Projects"}),e.jsx(n,{icon:e.jsx(a,{name:"CloseIcon",size:"small"}),children:"Settings"})]})},h={render:r=>e.jsxs(m,{...r,defaultOpenKeys:["sub1"],children:[e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsxs(b,{itemKey:"sub1",title:"Products",icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:[e.jsx(n,{children:"Product 1"}),e.jsx(n,{children:"Product 2"}),e.jsx(n,{children:"Product 3"})]}),e.jsxs(b,{itemKey:"sub2",title:"Services",icon:e.jsx(a,{name:"CloseIcon",size:"small"}),children:[e.jsx(n,{children:"Service A"}),e.jsx(n,{children:"Service B"})]}),e.jsx(n,{children:"Contact"})]})},x={render:r=>e.jsxs(m,{...r,children:[e.jsxs(S,{title:"Main Pages",children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Contact"})]}),e.jsx(C,{}),e.jsxs(S,{title:"User Actions",children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Logout"})]})]})},j={render:r=>e.jsxs(m,{...r,mode:"horizontal",children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Services"}),e.jsx(n,{children:"Contact"})]})},g={render:r=>e.jsxs(m,{...r,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(n,{icon:e.jsx(a,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsxs(b,{itemKey:"sub1",title:"Settings",icon:e.jsx(a,{name:"CopyIcon",size:"small"}),children:[e.jsx(n,{children:"Profile Settings"}),e.jsx(n,{children:"Account Settings"}),e.jsx(n,{children:"Privacy Settings"})]}),e.jsx(n,{icon:e.jsx(a,{name:"CloseIcon",size:"small"}),children:"Logout"})]})},f={render:r=>e.jsxs(m,{...r,children:[e.jsx(n,{children:"Active Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Active Item"})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItem>Home</MenuItem>\r
            <MenuItem>About</MenuItem>\r
            <MenuItem>Services</MenuItem>\r
            <MenuItem>Contact</MenuItem>\r
        </Menu>
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
                Dashboard\r
            </MenuItem>\r
            <MenuItem icon={<Icon name="CopyIcon" size="small" />}>\r
                Projects\r
            </MenuItem>\r
            <MenuItem icon={<Icon name="CloseIcon" size="small" />}>\r
                Settings\r
            </MenuItem>\r
        </Menu>
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} defaultOpenKeys={["sub1"]}>\r
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
                Dashboard\r
            </MenuItem>\r
            <SubMenu itemKey="sub1" title="Products" icon={<Icon name="CopyIcon" size="small" />}>\r
                <MenuItem>Product 1</MenuItem>\r
                <MenuItem>Product 2</MenuItem>\r
                <MenuItem>Product 3</MenuItem>\r
            </SubMenu>\r
            <SubMenu itemKey="sub2" title="Services" icon={<Icon name="CloseIcon" size="small" />}>\r
                <MenuItem>Service A</MenuItem>\r
                <MenuItem>Service B</MenuItem>\r
            </SubMenu>\r
            <MenuItem>Contact</MenuItem>\r
        </Menu>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItemGroup title="Main Pages">\r
                <MenuItem>Home</MenuItem>\r
                <MenuItem>About</MenuItem>\r
                <MenuItem>Contact</MenuItem>\r
            </MenuItemGroup>\r
            <MenuDivider />\r
            <MenuItemGroup title="User Actions">\r
                <MenuItem>Profile</MenuItem>\r
                <MenuItem>Settings</MenuItem>\r
                <MenuItem>Logout</MenuItem>\r
            </MenuItemGroup>\r
        </Menu>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} mode="horizontal">\r
            <MenuItem>Home</MenuItem>\r
            <MenuItem>About</MenuItem>\r
            <MenuItem>Services</MenuItem>\r
            <MenuItem>Contact</MenuItem>\r
        </Menu>
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>\r
            <MenuItem icon={<Icon name="CheckIcon" size="small" />}>\r
                Dashboard\r
            </MenuItem>\r
            <SubMenu itemKey="sub1" title="Settings" icon={<Icon name="CopyIcon" size="small" />}>\r
                <MenuItem>Profile Settings</MenuItem>\r
                <MenuItem>Account Settings</MenuItem>\r
                <MenuItem>Privacy Settings</MenuItem>\r
            </SubMenu>\r
            <MenuItem icon={<Icon name="CloseIcon" size="small" />}>\r
                Logout\r
            </MenuItem>\r
        </Menu>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItem>Active Item</MenuItem>\r
            <MenuItem disabled>Disabled Item</MenuItem>\r
            <MenuItem>Another Active Item</MenuItem>\r
        </Menu>
}`,...f.parameters?.docs?.source}}};const T=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:I,Horizontal:j,Inline:g,WithDisabledItems:f,WithGroups:x,WithIcons:M,WithSubMenu:h,__namedExportsOrder:T,default:z},Symbol.toStringTag,{value:"Module"}));export{j as H,g as I,K as M,M as W,h as a,x as b};
