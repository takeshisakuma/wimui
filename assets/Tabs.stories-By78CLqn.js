import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _,R as j,A as E}from"./iframe-DaM7GZ_J.js";import{c as w}from"./index-CdlzmZVL.js";import{u as P}from"./useIndicator-DjMorJsj.js";import{u as M}from"./useTranslation-qwfpLTBA.js";const D=_.createContext(null),R=()=>{const n=_.useContext(D);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},k=({defaultValue:n,value:s,onValueChange:d,orientation:r="horizontal",className:c,children:a,...p})=>{const[g,T]=_.useState(n),[y,b]=_.useState([]),L=_.useId(),m=s!==void 0,u=m?s:g,S=_.useCallback(i=>{m||T(i),d?.(i)},[m,d]),V=_.useCallback(i=>{b(v=>v.includes(i)?v:[...v,i])},[]),A=_.useCallback(i=>{b(v=>v.filter(I=>I!==i))},[]);return e.jsx(D.Provider,{value:{value:u,onValueChange:S,orientation:r,id:L,items:y,registerItem:V,unregisterItem:A},children:e.jsx("div",{className:"wim-tabs-container",children:e.jsx("div",{className:w("wim-tabs",`wim-tabs--${r}`,c),...p,children:a})})})},$=({className:n,children:s,...d})=>{const{orientation:r,value:c,items:a,onValueChange:p}=R(),[g,T]=j.useState(!1),[y,b]=j.useState(0),[L,m]=j.useState(0),{containerRef:u,sliderStyle:S,isReady:V}=P({activeSelector:".wim-tabs__trigger--active",orientation:r,dependence:c}),A=o=>{r!=="vertical"&&(T(!0),b(o.pageX-(u.current?.offsetLeft||0)),m(u.current?.scrollLeft||0))},i=()=>{T(!1)},v=o=>{if(!g||r==="vertical")return;o.preventDefault();const l=(o.pageX-(u.current?.offsetLeft||0)-y)*1.5;u.current&&(u.current.scrollLeft=L-l)},I=o=>{const h=c?a.indexOf(c):-1;let l=-1;if(r==="horizontal"?(o.key==="ArrowRight"&&(l=(h+1)%a.length),o.key==="ArrowLeft"&&(l=(h-1+a.length)%a.length)):(o.key==="ArrowDown"&&(l=(h+1)%a.length),o.key==="ArrowUp"&&(l=(h-1+a.length)%a.length)),o.key==="Home"&&(l=0),o.key==="End"&&(l=a.length-1),l!==-1){o.preventDefault();const N=a[l];N&&(p(N),u.current?.querySelector(`[data-value="${N}"]`)?.focus())}};return e.jsxs("div",{ref:u,role:"tablist","aria-orientation":r,tabIndex:0,className:w("wim-tabs__list",g&&"wim-tabs__list--dragging",V&&"wim-tabs__list--ready",n),onMouseDown:A,onMouseUp:i,onMouseLeave:i,onMouseMove:v,onKeyDown:I,...d,children:[e.jsx("div",{className:"wim-tabs__slider",style:S,"aria-hidden":"true"}),s]})},q=({value:n,disabled:s=!1,className:d,children:r,...c})=>{const{value:a,onValueChange:p,id:g,registerItem:T,unregisterItem:y}=R(),b=a===n;return j.useEffect(()=>(T(n),()=>y(n)),[n,T,y]),e.jsx("button",{type:"button",role:"tab","aria-selected":b,"aria-controls":`wim-tabs-${g}-panel-${n}`,id:`wim-tabs-${g}-tab-${n}`,"data-value":n,disabled:s,tabIndex:b?0:-1,className:w("wim-tabs__trigger",b&&"wim-tabs__trigger--active",d),onClick:()=>p(n),...c,children:r})},z=({value:n,className:s,children:d,...r})=>{const{value:c,id:a}=R();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${a}-panel-${n}`,"aria-labelledby":`wim-tabs-${a}-tab-${n}`,tabIndex:0,className:w("wim-tabs__content",s),...r,children:d}):null},t=k;t.List=$;t.Trigger=q;t.Content=z;$.__docgenInfo={description:"",methods:[],displayName:"TabsList"};q.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};z.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const O={title:"Components/Navigation Elements/Tabs",component:t},f={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_gen_settings")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_user_profile")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_notif_center")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_sec_privacy")}),e.jsx(t.Trigger,{value:"5",children:s("story_tabs_app_integ")})]}),e.jsx(t.Content,{value:"1",children:s("story_tabs_gen_desc")}),e.jsx(t.Content,{value:"2",children:s("story_tabs_user_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_notif_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_sec_desc")}),e.jsx(t.Content,{value:"5",children:s("story_tabs_app_desc")})]})}},C={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_dash_v")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_ana_v")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_sys_logs")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_help_doc")})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:s("story_tabs_dash_title")}),e.jsx("p",{children:s("story_tabs_dash_desc")})]}),e.jsx(t.Content,{value:"2",children:s("story_tabs_ana_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_sys_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_help_desc")})]})}},x={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsxs(t.Trigger,{value:"1",children:[s("story_tabs_long_tab")," 1"]}),e.jsxs(t.Trigger,{value:"2",children:[s("story_tabs_long_tab")," 2"]}),e.jsxs(t.Trigger,{value:"3",children:[s("story_tabs_long_tab")," 3"]}),e.jsxs(t.Trigger,{value:"4",children:[s("story_tabs_long_tab")," 4"]}),e.jsxs(t.Trigger,{value:"5",children:[s("story_tabs_long_tab")," 5"]})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_gen_settings")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_user_profile")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_notif_center")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_sec_privacy")}</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story_tabs_app_integ")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">{t("story_tabs_gen_desc")}</Tabs.Content>
        <Tabs.Content value="2">{t("story_tabs_user_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story_tabs_notif_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story_tabs_sec_desc")}</Tabs.Content>
        <Tabs.Content value="5">{t("story_tabs_app_desc")}</Tabs.Content>
      </Tabs>;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1" orientation="vertical" style={{
      minHeight: "200px"
    }}>
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_dash_v")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_ana_v")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_sys_logs")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_help_doc")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">
          <h3 style={{
          marginTop: 0
        }}>{t("story_tabs_dash_title")}</h3>
          <p>{t("story_tabs_dash_desc")}</p>
        </Tabs.Content>
        <Tabs.Content value="2">{t("story_tabs_ana_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story_tabs_sys_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story_tabs_help_desc")}</Tabs.Content>
      </Tabs>;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1" style={{
      width: "800px"
    }}>
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story_tabs_long_tab")} 1</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story_tabs_long_tab")} 2</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story_tabs_long_tab")} 3</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story_tabs_long_tab")} 4</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story_tabs_long_tab")} 5</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">Content 1</Tabs.Content>
        <Tabs.Content value="2">Content 2</Tabs.Content>
        <Tabs.Content value="3">Content 3</Tabs.Content>
        <Tabs.Content value="4">Content 4</Tabs.Content>
        <Tabs.Content value="5">Content 5</Tabs.Content>
      </Tabs>;
  }
}`,...x.parameters?.docs?.source}}};const X=["Default","Vertical","Scrolling"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Scrolling:x,Vertical:C,__namedExportsOrder:X,default:O},Symbol.toStringTag,{value:"Module"}));export{f as D,x as S,J as T,C as V};
