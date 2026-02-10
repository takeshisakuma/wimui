import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as m}from"./iframe-DBYVvlF0.js";import{P as c}from"./index-BDt_y6sF.js";const j=h.createContext(null),x=()=>{const t=h.useContext(j);if(!t)throw new Error("Tabs components must be used within a Tabs");return t},L=({defaultValue:t,value:s,onValueChange:o,orientation:r="horizontal",className:a,children:i,...l})=>{const[u,f]=h.useState(t),g=s!==void 0,C=g?s:u,y=h.useCallback(d=>{g||f(d),o?.(d)},[g,o]);return e.jsx(j.Provider,{value:{value:C,onValueChange:y,orientation:r},children:e.jsx("div",{className:["wim-tabs",`wim-tabs--${r}`,a].filter(Boolean).join(" "),...l,children:i})})},V=({className:t,children:s,...o})=>{const{orientation:r}=x(),a=m.useRef(null),[i,l]=m.useState(!1),[u,f]=m.useState(0),[g,C]=m.useState(0),y=v=>{r!=="vertical"&&(l(!0),f(v.pageX-(a.current?.offsetLeft||0)),C(a.current?.scrollLeft||0))},d=()=>{l(!1)},S=v=>{if(!i||r==="vertical")return;v.preventDefault();const D=(v.pageX-(a.current?.offsetLeft||0)-u)*1.5;a.current&&(a.current.scrollLeft=g-D)};return e.jsx("div",{ref:a,role:"tablist","aria-orientation":r,className:["wim-tabs__list",i?"wim-tabs__list--dragging":"",t].filter(Boolean).join(" "),onMouseDown:y,onMouseUp:d,onMouseLeave:d,onMouseMove:S,...o,children:s})},w=({value:t,disabled:s=!1,className:o,children:r,...a})=>{const{value:i,onValueChange:l}=x(),u=i===t;return e.jsx("button",{type:"button",role:"tab","aria-selected":u,"aria-controls":`panel-${t}`,id:`tab-${t}`,disabled:s,className:["wim-tabs__trigger",u?"wim-tabs__trigger--active":"",o].filter(Boolean).join(" "),onClick:()=>l(t),...a,children:r})},_=({value:t,className:s,children:o,...r})=>{const{value:a}=x();return a===t?e.jsx("div",{role:"tabpanel",id:`panel-${t}`,"aria-labelledby":`tab-${t}`,tabIndex:0,className:["wim-tabs__content",s].filter(Boolean).join(" "),...r,children:o}):null},n=L;n.List=V;n.Trigger=w;n.Content=_;n.propTypes={defaultValue:c.string,value:c.string,onValueChange:c.func,orientation:c.oneOf(["horizontal","vertical"]),className:c.string,children:c.node};L.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};V.__docgenInfo={description:"",methods:[],displayName:"TabsList"};w.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};const N={title:"Component/Navigation/Tabs",component:n},T={render:()=>e.jsxs(n,{defaultValue:"1",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"General Settings"}),e.jsx(n.Trigger,{value:"2",children:"User Profile"}),e.jsx(n.Trigger,{value:"3",children:"Notification Center"}),e.jsx(n.Trigger,{value:"4",children:"Security & Privacy"}),e.jsx(n.Trigger,{value:"5",children:"App Integrations"})]}),e.jsx(n.Content,{value:"1",children:"Manage your general application preferences and theme settings."}),e.jsx(n.Content,{value:"2",children:"View and update your personal information and public profile details."}),e.jsx(n.Content,{value:"3",children:"Configure how and when you receive alerts from the application."}),e.jsx(n.Content,{value:"4",children:"Set up two-factor authentication and manage your data privacy settings."}),e.jsx(n.Content,{value:"5",children:"Connect and manage third-party tools and services with your account."})]})},b={render:()=>e.jsxs(n,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"Dashboard Overview"}),e.jsx(n.Trigger,{value:"2",children:"Analytics Reports"}),e.jsx(n.Trigger,{value:"3",children:"System Logs"}),e.jsx(n.Trigger,{value:"4",children:"Help & Documentation"})]}),e.jsxs(n.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:"Dashboard"}),e.jsx("p",{children:"Welcome to your central management hub. Here you can see a summary of all active tasks."})]}),e.jsx(n.Content,{value:"2",children:"Detailed insights and performance metrics for your latest projects."}),e.jsx(n.Content,{value:"3",children:"Real-time audit trail and developer debug information."}),e.jsx(n.Content,{value:"4",children:"Need help? Browse our documentation or contact support."})]})},p={render:()=>e.jsxs(n,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"Very Long Label Tab 1"}),e.jsx(n.Trigger,{value:"2",children:"Very Long Label Tab 2"}),e.jsx(n.Trigger,{value:"3",children:"Very Long Label Tab 3"}),e.jsx(n.Trigger,{value:"4",children:"Very Long Label Tab 4"}),e.jsx(n.Trigger,{value:"5",children:"Very Long Label Tab 5"})]}),e.jsx(n.Content,{value:"1",children:"Content 1"}),e.jsx(n.Content,{value:"2",children:"Content 2"}),e.jsx(n.Content,{value:"3",children:"Content 3"}),e.jsx(n.Content,{value:"4",children:"Content 4"}),e.jsx(n.Content,{value:"5",children:"Content 5"})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tabs defaultValue="1">\r
                <Tabs.List>\r
                    <Tabs.Trigger value="1">General Settings</Tabs.Trigger>\r
                    <Tabs.Trigger value="2">User Profile</Tabs.Trigger>\r
                    <Tabs.Trigger value="3">Notification Center</Tabs.Trigger>\r
                    <Tabs.Trigger value="4">Security & Privacy</Tabs.Trigger>\r
                    <Tabs.Trigger value="5">App Integrations</Tabs.Trigger>\r
                </Tabs.List>\r
                <Tabs.Content value="1">Manage your general application preferences and theme settings.</Tabs.Content>\r
                <Tabs.Content value="2">View and update your personal information and public profile details.</Tabs.Content>\r
                <Tabs.Content value="3">Configure how and when you receive alerts from the application.</Tabs.Content>\r
                <Tabs.Content value="4">Set up two-factor authentication and manage your data privacy settings.</Tabs.Content>\r
                <Tabs.Content value="5">Connect and manage third-party tools and services with your account.</Tabs.Content>\r
            </Tabs>;
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tabs defaultValue="1" orientation="vertical" style={{
      minHeight: "200px"
    }}>\r
                <Tabs.List>\r
                    <Tabs.Trigger value="1">Dashboard Overview</Tabs.Trigger>\r
                    <Tabs.Trigger value="2">Analytics Reports</Tabs.Trigger>\r
                    <Tabs.Trigger value="3">System Logs</Tabs.Trigger>\r
                    <Tabs.Trigger value="4">Help & Documentation</Tabs.Trigger>\r
                </Tabs.List>\r
                <Tabs.Content value="1">\r
                    <h3 style={{
          marginTop: 0
        }}>Dashboard</h3>\r
                    <p>Welcome to your central management hub. Here you can see a summary of all active tasks.</p>\r
                </Tabs.Content>\r
                <Tabs.Content value="2">Detailed insights and performance metrics for your latest projects.</Tabs.Content>\r
                <Tabs.Content value="3">Real-time audit trail and developer debug information.</Tabs.Content>\r
                <Tabs.Content value="4">Need help? Browse our documentation or contact support.</Tabs.Content>\r
            </Tabs>;
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tabs defaultValue="1" style={{
      width: "800px"
    }}>\r
                <Tabs.List>\r
                    <Tabs.Trigger value="1">Very Long Label Tab 1</Tabs.Trigger>\r
                    <Tabs.Trigger value="2">Very Long Label Tab 2</Tabs.Trigger>\r
                    <Tabs.Trigger value="3">Very Long Label Tab 3</Tabs.Trigger>\r
                    <Tabs.Trigger value="4">Very Long Label Tab 4</Tabs.Trigger>\r
                    <Tabs.Trigger value="5">Very Long Label Tab 5</Tabs.Trigger>\r
                </Tabs.List>\r
                <Tabs.Content value="1">Content 1</Tabs.Content>\r
                <Tabs.Content value="2">Content 2</Tabs.Content>\r
                <Tabs.Content value="3">Content 3</Tabs.Content>\r
                <Tabs.Content value="4">Content 4</Tabs.Content>\r
                <Tabs.Content value="5">Content 5</Tabs.Content>\r
            </Tabs>;
  }
}`,...p.parameters?.docs?.source}}};const M=["Default","Vertical","Scrolling"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:T,Scrolling:p,Vertical:b,__namedExportsOrder:M,default:N},Symbol.toStringTag,{value:"Module"}));export{T as D,p as S,P as T,b as V};
