import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C,R as S}from"./iframe-CqpHVO8i.js";import{I as t}from"./Icon-Ce_1uR2t.js";const v=S.createContext({expandedItems:new Set,toggleItem:()=>{}}),a=({children:s,className:i="",mode:r="vertical",defaultOpenKeys:m=[]})=>{const[u,l]=C.useState(new Set(m)),d=o=>{l(y=>{const c=new Set(y);return c.has(o)?c.delete(o):c.add(o),c})};return e.jsx(v.Provider,{value:{expandedItems:u,toggleItem:d},children:e.jsx("ul",{className:`wim-menu wim-menu--${r} ${i}`,role:"menu",children:s})})},n=({children:s,onClick:i,disabled:r=!1,className:m="",icon:u})=>{const l=d=>{d.stopPropagation(),!r&&i&&i()};return e.jsxs("li",{className:`wim-menu-item ${r?"wim-menu-item--disabled":""} ${m}`,onClick:l,role:"menuitem",tabIndex:r?-1:0,"aria-disabled":r,children:[u&&e.jsx("span",{className:"wim-menu-item__icon",children:u}),e.jsx("span",{className:"wim-menu-item__content",children:s})]})},b=({children:s,title:i,className:r=""})=>e.jsxs("li",{className:`wim-menu-item-group ${r}`,children:[i&&e.jsx("div",{className:"wim-menu-item-group__title",children:i}),e.jsx("ul",{className:"wim-menu-item-group__list",role:"group",children:s})]}),f=({children:s,title:i,className:r="",icon:m,itemKey:u})=>{const{expandedItems:l,toggleItem:d}=S.useContext(v),o=l.has(u),y=c=>{c.stopPropagation(),d(u)};return e.jsxs("li",{className:`wim-menu-submenu ${o?"wim-menu-submenu--open":""} ${r}`,children:[e.jsxs("div",{className:"wim-menu-submenu__title",onClick:y,role:"menuitem","aria-haspopup":"true","aria-expanded":o,tabIndex:0,children:[m&&e.jsx("span",{className:"wim-menu-item__icon",children:m}),e.jsx("span",{className:"wim-menu-item__content",children:i}),e.jsx("span",{className:`wim-menu-submenu__arrow ${o?"wim-menu-submenu__arrow--open":""}`,children:e.jsx(t,{name:"ChevronRightIcon",size:"small"})})]}),o&&e.jsx("ul",{className:"wim-menu-submenu__list",role:"menu",children:s})]})},_=({className:s=""})=>e.jsx("li",{className:`wim-menu-divider ${s}`,role:"separator"});a.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},mode:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "inline"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"inline"'}]},description:"Mode of the menu",defaultValue:{value:'"vertical"',computed:!1}},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected keys"},defaultOpenKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default opened submenu keys",defaultValue:{value:"[]",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!1,tsType:{name:"string"},description:"Unique key for this item"}}};b.__docgenInfo={description:"",methods:[],displayName:"MenuItemGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},itemKey:{required:!0,tsType:{name:"string"},description:"Unique key for this submenu"}}};_.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N={title:"Component/Navigation/Menu",component:a,parameters:{layout:"centered"}},p={render:s=>e.jsxs(a,{...s,children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Services"}),e.jsx(n,{children:"Contact"})]})},I={render:s=>e.jsxs(a,{...s,children:[e.jsx(n,{icon:e.jsx(t,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsx(n,{icon:e.jsx(t,{name:"CopyIcon",size:"small"}),children:"Projects"}),e.jsx(n,{icon:e.jsx(t,{name:"CloseIcon",size:"small"}),children:"Settings"})]})},M={render:s=>e.jsxs(a,{...s,defaultOpenKeys:["sub1"],children:[e.jsx(n,{icon:e.jsx(t,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsxs(f,{itemKey:"sub1",title:"Products",icon:e.jsx(t,{name:"CopyIcon",size:"small"}),children:[e.jsx(n,{children:"Product 1"}),e.jsx(n,{children:"Product 2"}),e.jsx(n,{children:"Product 3"})]}),e.jsxs(f,{itemKey:"sub2",title:"Services",icon:e.jsx(t,{name:"CloseIcon",size:"small"}),children:[e.jsx(n,{children:"Service A"}),e.jsx(n,{children:"Service B"})]}),e.jsx(n,{children:"Contact"})]})},h={render:s=>e.jsxs(a,{...s,children:[e.jsxs(b,{title:"Main Pages",children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Contact"})]}),e.jsx(_,{}),e.jsxs(b,{title:"User Actions",children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Logout"})]})]})},x={render:s=>e.jsxs(a,{...s,mode:"horizontal",children:[e.jsx(n,{children:"Home"}),e.jsx(n,{children:"About"}),e.jsx(n,{children:"Services"}),e.jsx(n,{children:"Contact"})]})},g={render:s=>e.jsxs(a,{...s,mode:"inline",defaultOpenKeys:["sub1"],children:[e.jsx(n,{icon:e.jsx(t,{name:"CheckIcon",size:"small"}),children:"Dashboard"}),e.jsxs(f,{itemKey:"sub1",title:"Settings",icon:e.jsx(t,{name:"CopyIcon",size:"small"}),children:[e.jsx(n,{children:"Profile Settings"}),e.jsx(n,{children:"Account Settings"}),e.jsx(n,{children:"Privacy Settings"})]}),e.jsx(n,{icon:e.jsx(t,{name:"CloseIcon",size:"small"}),children:"Logout"})]})},j={render:s=>e.jsxs(a,{...s,children:[e.jsx(n,{children:"Active Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Active Item"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItem>Home</MenuItem>\r
            <MenuItem>About</MenuItem>\r
            <MenuItem>Services</MenuItem>\r
            <MenuItem>Contact</MenuItem>\r
        </Menu>
}`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} mode="horizontal">\r
            <MenuItem>Home</MenuItem>\r
            <MenuItem>About</MenuItem>\r
            <MenuItem>Services</MenuItem>\r
            <MenuItem>Contact</MenuItem>\r
        </Menu>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>\r
            <MenuItem>Active Item</MenuItem>\r
            <MenuItem disabled>Disabled Item</MenuItem>\r
            <MenuItem>Another Active Item</MenuItem>\r
        </Menu>
}`,...j.parameters?.docs?.source}}};const w=["Basic","WithIcons","WithSubMenu","WithGroups","Horizontal","Inline","WithDisabledItems"],T=Object.freeze(Object.defineProperty({__proto__:null,Basic:p,Horizontal:x,Inline:g,WithDisabledItems:j,WithGroups:h,WithIcons:I,WithSubMenu:M,__namedExportsOrder:w,default:N},Symbol.toStringTag,{value:"Module"}));export{x as H,g as I,T as M,I as W,M as a,h as b};
