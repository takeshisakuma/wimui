import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as T,R as f}from"./iframe-BypDdRGc.js";import{c as w}from"./index-BviBMDxs.js";const N=T.createContext(null),I=()=>{const n=T.useContext(N);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},k=({defaultValue:n,value:u,onValueChange:c,orientation:o="horizontal",className:g,children:r,...v})=>{const[s,b]=T.useState(n),[p,d]=T.useState([]),L=T.useId(),h=u!==void 0,V=h?u:s,S=T.useCallback(l=>{h||b(l),c?.(l)},[h,c]),j=T.useCallback(l=>{d(a=>a.includes(l)?a:[...a,l])},[]),_=T.useCallback(l=>{d(a=>a.filter(m=>m!==l))},[]);return e.jsx(N.Provider,{value:{value:V,onValueChange:S,orientation:o,id:L,items:p,registerItem:j,unregisterItem:_},children:e.jsx("div",{className:w("wim-tabs",`wim-tabs--${o}`,g),...v,children:r})})},M=({className:n,children:u,...c})=>{const{orientation:o,value:g,items:r,onValueChange:v}=I(),s=f.useRef(null),[b,p]=f.useState(!1),[d,L]=f.useState(0),[h,V]=f.useState(0),S=a=>{o!=="vertical"&&(p(!0),L(a.pageX-(s.current?.offsetLeft||0)),V(s.current?.scrollLeft||0))},j=()=>{p(!1)},_=a=>{if(!b||o==="vertical")return;a.preventDefault();const i=(a.pageX-(s.current?.offsetLeft||0)-d)*1.5;s.current&&(s.current.scrollLeft=h-i)},l=a=>{const m=g?r.indexOf(g):-1;let i=-1;if(o==="horizontal"?(a.key==="ArrowRight"&&(i=(m+1)%r.length),a.key==="ArrowLeft"&&(i=(m-1+r.length)%r.length)):(a.key==="ArrowDown"&&(i=(m+1)%r.length),a.key==="ArrowUp"&&(i=(m-1+r.length)%r.length)),a.key==="Home"&&(i=0),a.key==="End"&&(i=r.length-1),i!==-1){a.preventDefault();const D=r[i];D&&(v(D),s.current?.querySelector(`[data-value="${D}"]`)?.focus())}};return e.jsx("div",{ref:s,role:"tablist","aria-orientation":o,className:w("wim-tabs__list",b&&"wim-tabs__list--dragging",n),onMouseDown:S,onMouseUp:j,onMouseLeave:j,onMouseMove:_,onKeyDown:l,...c,children:u})},A=({value:n,disabled:u=!1,className:c,children:o,...g})=>{const{value:r,onValueChange:v,id:s,registerItem:b,unregisterItem:p}=I(),d=r===n;return f.useEffect(()=>(b(n),()=>p(n)),[n,b,p]),e.jsx("button",{type:"button",role:"tab","aria-selected":d,"aria-controls":`wim-tabs-${s}-panel-${n}`,id:`wim-tabs-${s}-tab-${n}`,"data-value":n,disabled:u,tabIndex:d?0:-1,className:w("wim-tabs__trigger",d&&"wim-tabs__trigger--active",c),onClick:()=>v(n),...g,children:o})},R=({value:n,className:u,children:c,...o})=>{const{value:g,id:r}=I();return g===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${r}-panel-${n}`,"aria-labelledby":`wim-tabs-${r}-tab-${n}`,tabIndex:0,className:w("wim-tabs__content",u),...o,children:c}):null},t=k;t.List=M;t.Trigger=A;t.Content=R;M.__docgenInfo={description:"",methods:[],displayName:"TabsList"};A.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};R.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const $={title:"Component/Navigation Elements/Tabs",component:t},C={render:()=>e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"General Settings"}),e.jsx(t.Trigger,{value:"2",children:"User Profile"}),e.jsx(t.Trigger,{value:"3",children:"Notification Center"}),e.jsx(t.Trigger,{value:"4",children:"Security & Privacy"}),e.jsx(t.Trigger,{value:"5",children:"App Integrations"})]}),e.jsx(t.Content,{value:"1",children:"Manage your general application preferences and theme settings."}),e.jsx(t.Content,{value:"2",children:"View and update your personal information and public profile details."}),e.jsx(t.Content,{value:"3",children:"Configure how and when you receive alerts from the application."}),e.jsx(t.Content,{value:"4",children:"Set up two-factor authentication and manage your data privacy settings."}),e.jsx(t.Content,{value:"5",children:"Connect and manage third-party tools and services with your account."})]})},y={render:()=>e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Dashboard Overview"}),e.jsx(t.Trigger,{value:"2",children:"Analytics Reports"}),e.jsx(t.Trigger,{value:"3",children:"System Logs"}),e.jsx(t.Trigger,{value:"4",children:"Help & Documentation"})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:"Dashboard"}),e.jsx("p",{children:"Welcome to your central management hub. Here you can see a summary of all active tasks."})]}),e.jsx(t.Content,{value:"2",children:"Detailed insights and performance metrics for your latest projects."}),e.jsx(t.Content,{value:"3",children:"Real-time audit trail and developer debug information."}),e.jsx(t.Content,{value:"4",children:"Need help? Browse our documentation or contact support."})]})},x={render:()=>e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Very Long Label Tab 1"}),e.jsx(t.Trigger,{value:"2",children:"Very Long Label Tab 2"}),e.jsx(t.Trigger,{value:"3",children:"Very Long Label Tab 3"}),e.jsx(t.Trigger,{value:"4",children:"Very Long Label Tab 4"}),e.jsx(t.Trigger,{value:"5",children:"Very Long Label Tab 5"})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const q=["Default","Vertical","Scrolling"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:C,Scrolling:x,Vertical:y,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{C as D,x as S,P as T,y as V};
