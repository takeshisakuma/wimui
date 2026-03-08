import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c,R as C}from"./iframe-DQwmcauy.js";import{c as I}from"./index-Bk7p5LNu.js";import{u as k}from"./useTranslation-CZ9vchf1.js";const K=typeof window<"u"?c.useLayoutEffect:c.useEffect,z=c.createContext(null),E=()=>{const n=c.useContext(z);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},A=({defaultValue:n,value:s,onValueChange:_,orientation:u="horizontal",className:d,children:o,...v})=>{const[i,f]=c.useState(n),[p,T]=c.useState([]),R=c.useId(),x=s!==void 0,D=x?s:i,$=c.useCallback(b=>{x||f(b),_?.(b)},[x,_]),S=c.useCallback(b=>{T(y=>y.includes(b)?y:[...y,b])},[]),N=c.useCallback(b=>{T(y=>y.filter(V=>V!==b))},[]);return e.jsx(z.Provider,{value:{value:D,onValueChange:$,orientation:u,id:R,items:p,registerItem:S,unregisterItem:N},children:e.jsx("div",{className:I("wim-tabs",`wim-tabs--${u}`,d),...v,children:o})})},O=({className:n,children:s,..._})=>{const{orientation:u,value:d,items:o,onValueChange:v}=E(),i=C.useRef(null),[f,p]=C.useState(!1),[T,R]=C.useState(0),[x,D]=C.useState(0),$=a=>{u!=="vertical"&&(p(!0),R(a.pageX-(i.current?.offsetLeft||0)),D(i.current?.scrollLeft||0))},S=()=>{p(!1)},N=a=>{if(!f||u==="vertical")return;a.preventDefault();const l=(a.pageX-(i.current?.offsetLeft||0)-T)*1.5;i.current&&(i.current.scrollLeft=x-l)},b=a=>{const g=d?o.indexOf(d):-1;let l=-1;if(u==="horizontal"?(a.key==="ArrowRight"&&(l=(g+1)%o.length),a.key==="ArrowLeft"&&(l=(g-1+o.length)%o.length)):(a.key==="ArrowDown"&&(l=(g+1)%o.length),a.key==="ArrowUp"&&(l=(g-1+o.length)%o.length)),a.key==="Home"&&(l=0),a.key==="End"&&(l=o.length-1),l!==-1){a.preventDefault();const h=o[l];h&&(v(h),i.current?.querySelector(`[data-value="${h}"]`)?.focus())}},[y,V]=c.useState({opacity:0}),[U,F]=c.useState(!1),M=c.useRef(!1);return K(()=>{const a=i.current;if(!a)return;const g=()=>{const m=a.querySelector(".wim-tabs__trigger--active");if(m){const r={opacity:1},q=window.getComputedStyle(a);q.flexDirection==="column"||q.flexDirection==="column-reverse"?(r.height=`${m.offsetHeight}px`,r.width="2px",r.transform=`translateY(${m.offsetTop}px)`,r.right="0px",r.top="0px",r.left="auto",r.bottom="auto"):(r.width=`${m.offsetWidth}px`,r.height="2px",r.transform=`translateX(${m.offsetLeft}px)`,r.bottom="0px",r.left="0px",r.top="auto",r.right="auto"),V(r),M.current||requestAnimationFrame(()=>{M.current=!0,F(!0)})}else V({opacity:0})};g();const l=new ResizeObserver(()=>g());l.observe(a);const h=new MutationObserver(m=>{for(const r of m)(r.type==="childList"||r.type==="attributes"&&r.attributeName==="class")&&g()});return h.observe(a,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{l.disconnect(),h.disconnect()}},[d,u]),e.jsxs("div",{ref:i,role:"tablist","aria-orientation":u,className:I("wim-tabs__list",f&&"wim-tabs__list--dragging",U&&"wim-tabs__list--ready",n),onMouseDown:$,onMouseUp:S,onMouseLeave:S,onMouseMove:N,onKeyDown:b,..._,children:[e.jsx("div",{className:"wim-tabs__slider",style:y,"aria-hidden":"true"}),s]})},X=({value:n,disabled:s=!1,className:_,children:u,...d})=>{const{value:o,onValueChange:v,id:i,registerItem:f,unregisterItem:p}=E(),T=o===n;return C.useEffect(()=>(f(n),()=>p(n)),[n,f,p]),e.jsx("button",{type:"button",role:"tab","aria-selected":T,"aria-controls":`wim-tabs-${i}-panel-${n}`,id:`wim-tabs-${i}-tab-${n}`,"data-value":n,disabled:s,tabIndex:T?0:-1,className:I("wim-tabs__trigger",T&&"wim-tabs__trigger--active",_),onClick:()=>v(n),...d,children:u})},H=({value:n,className:s,children:_,...u})=>{const{value:d,id:o}=E();return d===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${o}-panel-${n}`,"aria-labelledby":`wim-tabs-${o}-tab-${n}`,tabIndex:0,className:I("wim-tabs__content",s),...u,children:_}):null},t=A;t.List=O;t.Trigger=X;t.Content=H;O.__docgenInfo={description:"",methods:[],displayName:"TabsList"};X.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};H.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const P={title:"Components/Navigation Elements/Tabs",component:t},j={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_gen_settings")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_user_profile")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_notif_center")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_sec_privacy")}),e.jsx(t.Trigger,{value:"5",children:s("story_tabs_app_integ")})]}),e.jsx(t.Content,{value:"1",children:s("story_tabs_gen_desc")}),e.jsx(t.Content,{value:"2",children:s("story_tabs_user_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_notif_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_sec_desc")}),e.jsx(t.Content,{value:"5",children:s("story_tabs_app_desc")})]})}},w={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_dash_v")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_ana_v")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_sys_logs")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_help_doc")})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:s("story_tabs_dash_title")}),e.jsx("p",{children:s("story_tabs_dash_desc")})]}),e.jsx(t.Content,{value:"2",children:s("story_tabs_ana_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_sys_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_help_desc")})]})}},L={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsxs(t.Trigger,{value:"1",children:[s("story_tabs_long_tab")," 1"]}),e.jsxs(t.Trigger,{value:"2",children:[s("story_tabs_long_tab")," 2"]}),e.jsxs(t.Trigger,{value:"3",children:[s("story_tabs_long_tab")," 3"]}),e.jsxs(t.Trigger,{value:"4",children:[s("story_tabs_long_tab")," 4"]}),e.jsxs(t.Trigger,{value:"5",children:[s("story_tabs_long_tab")," 5"]})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tabs defaultValue="1">\r
        <Tabs.List>\r
          <Tabs.Trigger value="1">{t("story_tabs_gen_settings")}</Tabs.Trigger>\r
          <Tabs.Trigger value="2">{t("story_tabs_user_profile")}</Tabs.Trigger>\r
          <Tabs.Trigger value="3">{t("story_tabs_notif_center")}</Tabs.Trigger>\r
          <Tabs.Trigger value="4">{t("story_tabs_sec_privacy")}</Tabs.Trigger>\r
          <Tabs.Trigger value="5">{t("story_tabs_app_integ")}</Tabs.Trigger>\r
        </Tabs.List>\r
        <Tabs.Content value="1">{t("story_tabs_gen_desc")}</Tabs.Content>\r
        <Tabs.Content value="2">{t("story_tabs_user_desc")}</Tabs.Content>\r
        <Tabs.Content value="3">{t("story_tabs_notif_desc")}</Tabs.Content>\r
        <Tabs.Content value="4">{t("story_tabs_sec_desc")}</Tabs.Content>\r
        <Tabs.Content value="5">{t("story_tabs_app_desc")}</Tabs.Content>\r
      </Tabs>;
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tabs defaultValue="1" orientation="vertical" style={{
      minHeight: "200px"
    }}>\r
        <Tabs.List>\r
          <Tabs.Trigger value="1">{t("story_tabs_dash_v")}</Tabs.Trigger>\r
          <Tabs.Trigger value="2">{t("story_tabs_ana_v")}</Tabs.Trigger>\r
          <Tabs.Trigger value="3">{t("story_tabs_sys_logs")}</Tabs.Trigger>\r
          <Tabs.Trigger value="4">{t("story_tabs_help_doc")}</Tabs.Trigger>\r
        </Tabs.List>\r
        <Tabs.Content value="1">\r
          <h3 style={{
          marginTop: 0
        }}>{t("story_tabs_dash_title")}</h3>\r
          <p>{t("story_tabs_dash_desc")}</p>\r
        </Tabs.Content>\r
        <Tabs.Content value="2">{t("story_tabs_ana_desc")}</Tabs.Content>\r
        <Tabs.Content value="3">{t("story_tabs_sys_desc")}</Tabs.Content>\r
        <Tabs.Content value="4">{t("story_tabs_help_desc")}</Tabs.Content>\r
      </Tabs>;
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Tabs defaultValue="1" style={{
      width: "800px"
    }}>\r
        <Tabs.List>\r
          <Tabs.Trigger value="1">{t("story_tabs_long_tab")} 1</Tabs.Trigger>\r
          <Tabs.Trigger value="2">{t("story_tabs_long_tab")} 2</Tabs.Trigger>\r
          <Tabs.Trigger value="3">{t("story_tabs_long_tab")} 3</Tabs.Trigger>\r
          <Tabs.Trigger value="4">{t("story_tabs_long_tab")} 4</Tabs.Trigger>\r
          <Tabs.Trigger value="5">{t("story_tabs_long_tab")} 5</Tabs.Trigger>\r
        </Tabs.List>\r
        <Tabs.Content value="1">Content 1</Tabs.Content>\r
        <Tabs.Content value="2">Content 2</Tabs.Content>\r
        <Tabs.Content value="3">Content 3</Tabs.Content>\r
        <Tabs.Content value="4">Content 4</Tabs.Content>\r
        <Tabs.Content value="5">Content 5</Tabs.Content>\r
      </Tabs>;
  }
}`,...L.parameters?.docs?.source}}};const W=["Default","Vertical","Scrolling"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:j,Scrolling:L,Vertical:w,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{j as D,L as S,Z as T,w as V};
