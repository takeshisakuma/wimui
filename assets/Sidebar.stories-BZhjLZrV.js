import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-BbDYKtlj.js";import{c as p}from"./index-Bp4MVLTo.js";import{I as o}from"./Icon-WrtMB1dj.js";const u=m.forwardRef(({className:a,children:s,fixed:d,collapsed:i,width:t=260,bordered:b=!0,...f},y)=>{const S={"--wim-sidebar-width":typeof t=="number"?`${t}px`:t};return e.jsx("aside",{ref:y,style:S,className:p("wim-sidebar",d&&"wim-sidebar--fixed",i&&"wim-sidebar--collapsed",b&&"wim-sidebar--bordered",a),...f,children:e.jsx("div",{className:"wim-sidebar__container",children:s})})});u.displayName="Sidebar";const h=m.forwardRef(({className:a,children:s,...d},i)=>e.jsx("div",{ref:i,className:p("wim-sidebar__header",a),...d,children:s}));h.displayName="Sidebar.Header";const x=m.forwardRef(({className:a,children:s,...d},i)=>e.jsx("div",{ref:i,className:p("wim-sidebar__content",a),...d,children:s}));x.displayName="Sidebar.Content";const j=m.forwardRef(({className:a,children:s,...d},i)=>e.jsx("div",{ref:i,className:p("wim-sidebar__footer",a),...d,children:s}));j.displayName="Sidebar.Footer";const g=m.forwardRef(({className:a,children:s,active:d,disabled:i,icon:t,...b},f)=>e.jsxs("div",{ref:f,className:p("wim-sidebar__item",d&&"wim-sidebar__item--active",i&&"wim-sidebar__item--disabled",a),...b,children:[t&&e.jsx("span",{className:"wim-sidebar__item-icon",children:t}),e.jsx("span",{className:"wim-sidebar__item-text",children:s})]}));g.displayName="Sidebar.Item";const r=u;r.Header=h;r.Content=x;r.Footer=j;r.Item=g;h.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Header"};x.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Content"};j.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Footer"};g.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position"},collapsed:{required:!1,tsType:{name:"boolean"},description:"Collapsed state"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width when expanded",defaultValue:{value:"260",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the right",defaultValue:{value:"true",computed:!1}}}};const _={title:"Component/Layout/Sidebar",component:r,parameters:{layout:"fullscreen"},tags:[]},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(r.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(o,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})]})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{active:!0,icon:e.jsx(o,{name:"HomeIcon"}),children:"Dashboard"}),e.jsx(r.Item,{icon:e.jsx(o,{name:"ProjectIcon"}),children:"Projects"}),e.jsx(r.Item,{icon:e.jsx(o,{name:"ChartIcon"}),children:"Analytics"}),e.jsx(r.Item,{icon:e.jsx(o,{name:"SettingsIcon"}),children:"Settings"})]}),e.jsx(r.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:"john@example.com"})]})]})})]}),n={render:a=>e.jsxs("div",{style:{height:"400px",display:"flex",background:"#f4f4f5"},children:[e.jsx(r,{...a,children:e.jsx(w,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px"},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Select a menu item from the sidebar."})]})]}),args:{bordered:!0}},l={render:n.render,args:{collapsed:!0,bordered:!0}},c={render:n.render,args:{width:200,bordered:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 200,
    bordered: true
  }
}`,...c.parameters?.docs?.source}}};const I=["Default","Collapsed","CustomWidth"],T=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:l,CustomWidth:c,Default:n,__namedExportsOrder:I,default:_},Symbol.toStringTag,{value:"Module"}));export{l as C,n as D,T as S,c as a};
