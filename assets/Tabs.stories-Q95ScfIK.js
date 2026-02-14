import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as v}from"./iframe-CLXnzuMj.js";import{c as h}from"./index-DIcffr0b.js";const j=m.createContext(null),x=()=>{const t=m.useContext(j);if(!t)throw new Error("Tabs components must be used within a Tabs");return t},L=({defaultValue:t,value:s,onValueChange:o,orientation:r="horizontal",className:a,children:i,...l})=>{const[u,f]=m.useState(t),c=s!==void 0,C=c?s:u,y=m.useCallback(g=>{c||f(g),o?.(g)},[c,o]);return e.jsx(j.Provider,{value:{value:C,onValueChange:y,orientation:r},children:e.jsx("div",{className:h("wim-tabs",`wim-tabs--${r}`,a),...l,children:i})})},V=({className:t,children:s,...o})=>{const{orientation:r}=x(),a=v.useRef(null),[i,l]=v.useState(!1),[u,f]=v.useState(0),[c,C]=v.useState(0),y=p=>{r!=="vertical"&&(l(!0),f(p.pageX-(a.current?.offsetLeft||0)),C(a.current?.scrollLeft||0))},g=()=>{l(!1)},S=p=>{if(!i||r==="vertical")return;p.preventDefault();const D=(p.pageX-(a.current?.offsetLeft||0)-u)*1.5;a.current&&(a.current.scrollLeft=c-D)};return e.jsx("div",{ref:a,role:"tablist",tabIndex:-1,"aria-orientation":r,className:h("wim-tabs__list",i&&"wim-tabs__list--dragging",t),onMouseDown:y,onMouseUp:g,onMouseLeave:g,onMouseMove:S,...o,children:s})},w=({value:t,disabled:s=!1,className:o,children:r,...a})=>{const{value:i,onValueChange:l}=x(),u=i===t;return e.jsx("button",{type:"button",role:"tab","aria-selected":u,"aria-controls":`panel-${t}`,id:`tab-${t}`,disabled:s,className:h("wim-tabs__trigger",u&&"wim-tabs__trigger--active",o),onClick:()=>l(t),...a,children:r})},_=({value:t,className:s,children:o,...r})=>{const{value:a}=x();return a===t?e.jsx("div",{role:"tabpanel",id:`panel-${t}`,"aria-labelledby":`tab-${t}`,tabIndex:0,className:h("wim-tabs__content",s),...r,children:o}):null},n=L;n.List=V;n.Trigger=w;n.Content=_;V.__docgenInfo={description:"",methods:[],displayName:"TabsList"};w.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const N={title:"Component/Navigation/Tabs",component:n},d={render:()=>e.jsxs(n,{defaultValue:"1",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"General Settings"}),e.jsx(n.Trigger,{value:"2",children:"User Profile"}),e.jsx(n.Trigger,{value:"3",children:"Notification Center"}),e.jsx(n.Trigger,{value:"4",children:"Security & Privacy"}),e.jsx(n.Trigger,{value:"5",children:"App Integrations"})]}),e.jsx(n.Content,{value:"1",children:"Manage your general application preferences and theme settings."}),e.jsx(n.Content,{value:"2",children:"View and update your personal information and public profile details."}),e.jsx(n.Content,{value:"3",children:"Configure how and when you receive alerts from the application."}),e.jsx(n.Content,{value:"4",children:"Set up two-factor authentication and manage your data privacy settings."}),e.jsx(n.Content,{value:"5",children:"Connect and manage third-party tools and services with your account."})]})},T={render:()=>e.jsxs(n,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"Dashboard Overview"}),e.jsx(n.Trigger,{value:"2",children:"Analytics Reports"}),e.jsx(n.Trigger,{value:"3",children:"System Logs"}),e.jsx(n.Trigger,{value:"4",children:"Help & Documentation"})]}),e.jsxs(n.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:"Dashboard"}),e.jsx("p",{children:"Welcome to your central management hub. Here you can see a summary of all active tasks."})]}),e.jsx(n.Content,{value:"2",children:"Detailed insights and performance metrics for your latest projects."}),e.jsx(n.Content,{value:"3",children:"Real-time audit trail and developer debug information."}),e.jsx(n.Content,{value:"4",children:"Need help? Browse our documentation or contact support."})]})},b={render:()=>e.jsxs(n,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"1",children:"Very Long Label Tab 1"}),e.jsx(n.Trigger,{value:"2",children:"Very Long Label Tab 2"}),e.jsx(n.Trigger,{value:"3",children:"Very Long Label Tab 3"}),e.jsx(n.Trigger,{value:"4",children:"Very Long Label Tab 4"}),e.jsx(n.Trigger,{value:"5",children:"Very Long Label Tab 5"})]}),e.jsx(n.Content,{value:"1",children:"Content 1"}),e.jsx(n.Content,{value:"2",children:"Content 2"}),e.jsx(n.Content,{value:"3",children:"Content 3"}),e.jsx(n.Content,{value:"4",children:"Content 4"}),e.jsx(n.Content,{value:"5",children:"Content 5"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const M=["Default","Vertical","Scrolling"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Scrolling:b,Vertical:T,__namedExportsOrder:M,default:N},Symbol.toStringTag,{value:"Module"}));export{d as D,b as S,H as T,T as V};
