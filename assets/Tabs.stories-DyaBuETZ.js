import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as w}from"./iframe-CtzyBWFe.js";import{c as D}from"./index-B7Z--H5j.js";const X=typeof window<"u"?l.useLayoutEffect:l.useEffect,E=l.createContext(null),k=()=>{const n=l.useContext(E);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},q=({defaultValue:n,value:b,onValueChange:T,orientation:u="horizontal",className:c,children:s,...y})=>{const[o,f]=l.useState(n),[v,p]=l.useState([]),I=l.useId(),C=b!==void 0,R=C?b:o,N=l.useCallback(d=>{C||f(d),T?.(d)},[C,T]),S=l.useCallback(d=>{p(h=>h.includes(d)?h:[...h,d])},[]),$=l.useCallback(d=>{p(h=>h.filter(_=>_!==d))},[]);return e.jsx(E.Provider,{value:{value:R,onValueChange:N,orientation:u,id:I,items:v,registerItem:S,unregisterItem:$},children:e.jsx("div",{className:D("wim-tabs",`wim-tabs--${u}`,c),...y,children:s})})},O=({className:n,children:b,...T})=>{const{orientation:u,value:c,items:s,onValueChange:y}=k(),o=w.useRef(null),[f,v]=w.useState(!1),[p,I]=w.useState(0),[C,R]=w.useState(0),N=a=>{u!=="vertical"&&(v(!0),I(a.pageX-(o.current?.offsetLeft||0)),R(o.current?.scrollLeft||0))},S=()=>{v(!1)},$=a=>{if(!f||u==="vertical")return;a.preventDefault();const i=(a.pageX-(o.current?.offsetLeft||0)-p)*1.5;o.current&&(o.current.scrollLeft=C-i)},d=a=>{const g=c?s.indexOf(c):-1;let i=-1;if(u==="horizontal"?(a.key==="ArrowRight"&&(i=(g+1)%s.length),a.key==="ArrowLeft"&&(i=(g-1+s.length)%s.length)):(a.key==="ArrowDown"&&(i=(g+1)%s.length),a.key==="ArrowUp"&&(i=(g-1+s.length)%s.length)),a.key==="Home"&&(i=0),a.key==="End"&&(i=s.length-1),i!==-1){a.preventDefault();const x=s[i];x&&(y(x),o.current?.querySelector(`[data-value="${x}"]`)?.focus())}},[h,_]=l.useState({opacity:0}),[P,U]=l.useState(!1),M=l.useRef(!1);return X(()=>{const a=o.current;if(!a)return;const g=()=>{const m=a.querySelector(".wim-tabs__trigger--active");if(m){const r={opacity:1},A=window.getComputedStyle(a);A.flexDirection==="column"||A.flexDirection==="column-reverse"?(r.height=`${m.offsetHeight}px`,r.width="2px",r.transform=`translateY(${m.offsetTop}px)`,r.right="0px",r.top="0px",r.left="auto",r.bottom="auto"):(r.width=`${m.offsetWidth}px`,r.height="2px",r.transform=`translateX(${m.offsetLeft}px)`,r.bottom="0px",r.left="0px",r.top="auto",r.right="auto"),_(r),M.current||requestAnimationFrame(()=>{M.current=!0,U(!0)})}else _({opacity:0})};g();const i=new ResizeObserver(()=>g());i.observe(a);const x=new MutationObserver(m=>{for(const r of m)(r.type==="childList"||r.type==="attributes"&&r.attributeName==="class")&&g()});return x.observe(a,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{i.disconnect(),x.disconnect()}},[c,u]),e.jsxs("div",{ref:o,role:"tablist","aria-orientation":u,className:D("wim-tabs__list",f&&"wim-tabs__list--dragging",P&&"wim-tabs__list--ready",n),onMouseDown:N,onMouseUp:S,onMouseLeave:S,onMouseMove:$,onKeyDown:d,...T,children:[e.jsx("div",{className:"wim-tabs__slider",style:h,"aria-hidden":"true"}),b]})},z=({value:n,disabled:b=!1,className:T,children:u,...c})=>{const{value:s,onValueChange:y,id:o,registerItem:f,unregisterItem:v}=k(),p=s===n;return w.useEffect(()=>(f(n),()=>v(n)),[n,f,v]),e.jsx("button",{type:"button",role:"tab","aria-selected":p,"aria-controls":`wim-tabs-${o}-panel-${n}`,id:`wim-tabs-${o}-tab-${n}`,"data-value":n,disabled:b,tabIndex:p?0:-1,className:D("wim-tabs__trigger",p&&"wim-tabs__trigger--active",T),onClick:()=>y(n),...c,children:u})},H=({value:n,className:b,children:T,...u})=>{const{value:c,id:s}=k();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${s}-panel-${n}`,"aria-labelledby":`wim-tabs-${s}-tab-${n}`,tabIndex:0,className:D("wim-tabs__content",b),...u,children:T}):null},t=q;t.List=O;t.Trigger=z;t.Content=H;O.__docgenInfo={description:"",methods:[],displayName:"TabsList"};z.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};H.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const W={title:"Components/Navigation Elements/Tabs",component:t},L={render:()=>e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"General Settings"}),e.jsx(t.Trigger,{value:"2",children:"User Profile"}),e.jsx(t.Trigger,{value:"3",children:"Notification Center"}),e.jsx(t.Trigger,{value:"4",children:"Security & Privacy"}),e.jsx(t.Trigger,{value:"5",children:"App Integrations"})]}),e.jsx(t.Content,{value:"1",children:"Manage your general application preferences and theme settings."}),e.jsx(t.Content,{value:"2",children:"View and update your personal information and public profile details."}),e.jsx(t.Content,{value:"3",children:"Configure how and when you receive alerts from the application."}),e.jsx(t.Content,{value:"4",children:"Set up two-factor authentication and manage your data privacy settings."}),e.jsx(t.Content,{value:"5",children:"Connect and manage third-party tools and services with your account."})]})},j={render:()=>e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Dashboard Overview"}),e.jsx(t.Trigger,{value:"2",children:"Analytics Reports"}),e.jsx(t.Trigger,{value:"3",children:"System Logs"}),e.jsx(t.Trigger,{value:"4",children:"Help & Documentation"})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:"Dashboard"}),e.jsx("p",{children:"Welcome to your central management hub. Here you can see a summary of all active tasks."})]}),e.jsx(t.Content,{value:"2",children:"Detailed insights and performance metrics for your latest projects."}),e.jsx(t.Content,{value:"3",children:"Real-time audit trail and developer debug information."}),e.jsx(t.Content,{value:"4",children:"Need help? Browse our documentation or contact support."})]})},V={render:()=>e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:"Very Long Label Tab 1"}),e.jsx(t.Trigger,{value:"2",children:"Very Long Label Tab 2"}),e.jsx(t.Trigger,{value:"3",children:"Very Long Label Tab 3"}),e.jsx(t.Trigger,{value:"4",children:"Very Long Label Tab 4"}),e.jsx(t.Trigger,{value:"5",children:"Very Long Label Tab 5"})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tabs defaultValue="1">\r
        <Tabs.List>\r
          <Tabs.Trigger value="1">General Settings</Tabs.Trigger>\r
          <Tabs.Trigger value="2">User Profile</Tabs.Trigger>\r
          <Tabs.Trigger value="3">Notification Center</Tabs.Trigger>\r
          <Tabs.Trigger value="4">Security & Privacy</Tabs.Trigger>\r
          <Tabs.Trigger value="5">App Integrations</Tabs.Trigger>\r
        </Tabs.List>\r
        <Tabs.Content value="1">\r
          Manage your general application preferences and theme settings.\r
        </Tabs.Content>\r
        <Tabs.Content value="2">\r
          View and update your personal information and public profile details.\r
        </Tabs.Content>\r
        <Tabs.Content value="3">\r
          Configure how and when you receive alerts from the application.\r
        </Tabs.Content>\r
        <Tabs.Content value="4">\r
          Set up two-factor authentication and manage your data privacy\r
          settings.\r
        </Tabs.Content>\r
        <Tabs.Content value="5">\r
          Connect and manage third-party tools and services with your account.\r
        </Tabs.Content>\r
      </Tabs>;
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
          <p>\r
            Welcome to your central management hub. Here you can see a summary\r
            of all active tasks.\r
          </p>\r
        </Tabs.Content>\r
        <Tabs.Content value="2">\r
          Detailed insights and performance metrics for your latest projects.\r
        </Tabs.Content>\r
        <Tabs.Content value="3">\r
          Real-time audit trail and developer debug information.\r
        </Tabs.Content>\r
        <Tabs.Content value="4">\r
          Need help? Browse our documentation or contact support.\r
        </Tabs.Content>\r
      </Tabs>;
  }
}`,...j.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const B=["Default","Vertical","Scrolling"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:L,Scrolling:V,Vertical:j,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{L as D,V as S,J as T,j as V};
