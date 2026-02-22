import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as w}from"./iframe-B26gg4xa.js";import{c as I}from"./index-B4VeCX-Y.js";const U=typeof window<"u"?u.useLayoutEffect:u.useEffect,A=u.createContext(null),k=()=>{const n=u.useContext(A);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},E=({defaultValue:n,value:b,onValueChange:T,orientation:i="horizontal",className:c,children:a,...y})=>{const[o,f]=u.useState(n),[h,p]=u.useState([]),D=u.useId(),C=b!==void 0,R=C?b:o,N=u.useCallback(d=>{C||f(d),T?.(d)},[C,T]),S=u.useCallback(d=>{p(v=>v.includes(d)?v:[...v,d])},[]),$=u.useCallback(d=>{p(v=>v.filter(_=>_!==d))},[]);return e.jsx(A.Provider,{value:{value:R,onValueChange:N,orientation:i,id:D,items:h,registerItem:S,unregisterItem:$},children:e.jsx("div",{className:I("wim-tabs",`wim-tabs--${i}`,c),...y,children:a})})},q=({className:n,children:b,...T})=>{const{orientation:i,value:c,items:a,onValueChange:y}=k(),o=w.useRef(null),[f,h]=w.useState(!1),[p,D]=w.useState(0),[C,R]=w.useState(0),N=r=>{i!=="vertical"&&(h(!0),D(r.pageX-(o.current?.offsetLeft||0)),R(o.current?.scrollLeft||0))},S=()=>{h(!1)},$=r=>{if(!f||i==="vertical")return;r.preventDefault();const l=(r.pageX-(o.current?.offsetLeft||0)-p)*1.5;o.current&&(o.current.scrollLeft=C-l)},d=r=>{const g=c?a.indexOf(c):-1;let l=-1;if(i==="horizontal"?(r.key==="ArrowRight"&&(l=(g+1)%a.length),r.key==="ArrowLeft"&&(l=(g-1+a.length)%a.length)):(r.key==="ArrowDown"&&(l=(g+1)%a.length),r.key==="ArrowUp"&&(l=(g-1+a.length)%a.length)),r.key==="Home"&&(l=0),r.key==="End"&&(l=a.length-1),l!==-1){r.preventDefault();const x=a[l];x&&(y(x),o.current?.querySelector(`[data-value="${x}"]`)?.focus())}},[v,_]=u.useState({opacity:0}),[H,P]=u.useState(!1),M=u.useRef(!1);return U(()=>{const r=o.current;if(!r)return;const g=()=>{const m=r.querySelector(".wim-tabs__trigger--active");if(m){const s={opacity:1};i==="horizontal"?(s.width=`${m.offsetWidth}px`,s.height="2px",s.transform=`translateX(${m.offsetLeft}px)`,s.bottom="0px",s.left="0px"):(s.height=`${m.offsetHeight}px`,s.width="2px",s.transform=`translateY(${m.offsetTop}px)`,s.right="0px",s.top="0px"),_(s),M.current||requestAnimationFrame(()=>{M.current=!0,P(!0)})}else _({opacity:0})};g();const l=new ResizeObserver(()=>g());l.observe(r);const x=new MutationObserver(m=>{for(const s of m)(s.type==="childList"||s.type==="attributes"&&s.attributeName==="class")&&g()});return x.observe(r,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{l.disconnect(),x.disconnect()}},[c,i]),e.jsxs("div",{ref:o,role:"tablist","aria-orientation":i,className:I("wim-tabs__list",f&&"wim-tabs__list--dragging",H&&"wim-tabs__list--ready",n),onMouseDown:N,onMouseUp:S,onMouseLeave:S,onMouseMove:$,onKeyDown:d,...T,children:[e.jsx("div",{className:"wim-tabs__slider",style:v,"aria-hidden":"true"}),b]})},O=({value:n,disabled:b=!1,className:T,children:i,...c})=>{const{value:a,onValueChange:y,id:o,registerItem:f,unregisterItem:h}=k(),p=a===n;return w.useEffect(()=>(f(n),()=>h(n)),[n,f,h]),e.jsx("button",{type:"button",role:"tab","aria-selected":p,"aria-controls":`wim-tabs-${o}-panel-${n}`,id:`wim-tabs-${o}-tab-${n}`,"data-value":n,disabled:b,tabIndex:p?0:-1,className:I("wim-tabs__trigger",p&&"wim-tabs__trigger--active",T),onClick:()=>y(n),...c,children:i})},z=({value:n,className:b,children:T,...i})=>{const{value:c,id:a}=k();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${a}-panel-${n}`,"aria-labelledby":`wim-tabs-${a}-tab-${n}`,tabIndex:0,className:I("wim-tabs__content",b),...i,children:T}):null},t=E;t.List=q;t.Trigger=O;t.Content=z;q.__docgenInfo={description:"",methods:[],displayName:"TabsList"};O.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};z.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const X={title:"Component/Navigation Elements/Tabs",component:t},j={render:()=>e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"General Settings"}),e.jsx(t.Trigger,{value:"2",children:"User Profile"}),e.jsx(t.Trigger,{value:"3",children:"Notification Center"}),e.jsx(t.Trigger,{value:"4",children:"Security & Privacy"}),e.jsx(t.Trigger,{value:"5",children:"App Integrations"})]}),e.jsx(t.Content,{value:"1",children:"Manage your general application preferences and theme settings."}),e.jsx(t.Content,{value:"2",children:"View and update your personal information and public profile details."}),e.jsx(t.Content,{value:"3",children:"Configure how and when you receive alerts from the application."}),e.jsx(t.Content,{value:"4",children:"Set up two-factor authentication and manage your data privacy settings."}),e.jsx(t.Content,{value:"5",children:"Connect and manage third-party tools and services with your account."})]})},L={render:()=>e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Dashboard Overview"}),e.jsx(t.Trigger,{value:"2",children:"Analytics Reports"}),e.jsx(t.Trigger,{value:"3",children:"System Logs"}),e.jsx(t.Trigger,{value:"4",children:"Help & Documentation"})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:"Dashboard"}),e.jsx("p",{children:"Welcome to your central management hub. Here you can see a summary of all active tasks."})]}),e.jsx(t.Content,{value:"2",children:"Detailed insights and performance metrics for your latest projects."}),e.jsx(t.Content,{value:"3",children:"Real-time audit trail and developer debug information."}),e.jsx(t.Content,{value:"4",children:"Need help? Browse our documentation or contact support."})]})},V={render:()=>e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Very Long Label Tab 1"}),e.jsx(t.Trigger,{value:"2",children:"Very Long Label Tab 2"}),e.jsx(t.Trigger,{value:"3",children:"Very Long Label Tab 3"}),e.jsx(t.Trigger,{value:"4",children:"Very Long Label Tab 4"}),e.jsx(t.Trigger,{value:"5",children:"Very Long Label Tab 5"})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const W=["Default","Vertical","Scrolling"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:j,Scrolling:V,Vertical:L,__namedExportsOrder:W,default:X},Symbol.toStringTag,{value:"Module"}));export{j as D,V as S,K as T,L as V};
