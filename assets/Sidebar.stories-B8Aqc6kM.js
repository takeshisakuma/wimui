import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-BCl9oQRY.js";import{P as r}from"./index-3RpI5cnp.js";import{I as l}from"./Icon-CoHAHasW.js";const b=p.forwardRef(({className:a,children:s,fixed:n,collapsed:i,width:t=260,bordered:u=!0,...h},g)=>{const S={"--wim-sidebar-width":typeof t=="number"?`${t}px`:t};return e.jsx("aside",{ref:g,style:S,className:["wim-sidebar",n&&"wim-sidebar--fixed",i&&"wim-sidebar--collapsed",u&&"wim-sidebar--bordered",a].filter(Boolean).join(" "),...h,children:e.jsx("div",{className:"wim-sidebar__container",children:s})})});b.displayName="Sidebar";b.propTypes={fixed:r.bool,collapsed:r.bool,width:r.oneOfType([r.number,r.string]),bordered:r.bool,className:r.string,children:r.node};const x=p.forwardRef(({className:a,children:s,...n},i)=>e.jsx("div",{ref:i,className:["wim-sidebar__header",a].filter(Boolean).join(" "),...n,children:s}));x.displayName="Sidebar.Header";const y=p.forwardRef(({className:a,children:s,...n},i)=>e.jsx("div",{ref:i,className:["wim-sidebar__content",a].filter(Boolean).join(" "),...n,children:s}));y.displayName="Sidebar.Content";const j=p.forwardRef(({className:a,children:s,...n},i)=>e.jsx("div",{ref:i,className:["wim-sidebar__footer",a].filter(Boolean).join(" "),...n,children:s}));j.displayName="Sidebar.Footer";const f=p.forwardRef(({className:a,children:s,active:n,disabled:i,icon:t,...u},h)=>e.jsxs("div",{ref:h,className:["wim-sidebar__item",n&&"wim-sidebar__item--active",i&&"wim-sidebar__item--disabled",a].filter(Boolean).join(" "),...u,children:[t&&e.jsx("span",{className:"wim-sidebar__item-icon",children:t}),e.jsx("span",{className:"wim-sidebar__item-text",children:s})]}));f.displayName="Sidebar.Item";f.propTypes={active:r.bool,disabled:r.bool,icon:r.node,className:r.string,children:r.node};const o=Object.assign(b,{Header:x,Content:y,Footer:j,Item:f});b.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position",type:{name:"bool"}},collapsed:{required:!1,tsType:{name:"boolean"},description:"Collapsed state",type:{name:"bool"}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width when expanded",defaultValue:{value:"260",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]}},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the right",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Header"};y.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Content"};j.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Footer"};f.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const _={title:"Layout/Sidebar",component:o,parameters:{layout:"fullscreen"},tags:[]},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(o.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(l,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})]})}),e.jsxs(o.Content,{children:[e.jsx(o.Item,{active:!0,icon:e.jsx(l,{name:"HomeIcon"}),children:"Dashboard"}),e.jsx(o.Item,{icon:e.jsx(l,{name:"ProjectIcon"}),children:"Projects"}),e.jsx(o.Item,{icon:e.jsx(l,{name:"ChartIcon"}),children:"Analytics"}),e.jsx(o.Item,{icon:e.jsx(l,{name:"SettingsIcon"}),children:"Settings"})]}),e.jsx(o.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:"john@example.com"})]})]})})]}),d={render:a=>e.jsxs("div",{style:{height:"400px",display:"flex",background:"#f4f4f5"},children:[e.jsx(o,{...a,children:e.jsx(w,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px"},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Select a menu item from the sidebar."})]})]}),args:{bordered:!0}},c={render:d.render,args:{collapsed:!0,bordered:!0}},m={render:d.render,args:{width:200,bordered:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => <div style={{
    height: "400px",
    display: "flex",
    background: "#f4f4f5"
  }}>\r
            <Sidebar {...args}>\r
                <SidebarContent />\r
            </Sidebar>\r
            <main style={{
      flexGrow: 1,
      padding: "20px"
    }}>\r
                <h1>Content Area</h1>\r
                <p>Select a menu item from the sidebar.</p>\r
            </main>\r
        </div>,
  args: {
    bordered: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 200,
    bordered: true
  }
}`,...m.parameters?.docs?.source}}};const N=["Default","Collapsed","CustomWidth"],T=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:c,CustomWidth:m,Default:d,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{c as C,d as D,T as S,m as a};
