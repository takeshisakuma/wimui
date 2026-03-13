import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g,R as j}from"./iframe-OlV4UgK7.js";import{c as w}from"./index-Dj-MT3vJ.js";import{u as z}from"./useIndicator-BHCZ3OVl.js";import{u as k}from"./useTranslation-CLFZhCB5.js";const M=g.createContext(null),N=()=>{const n=g.useContext(M);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},$=({defaultValue:n,value:s,onValueChange:_,orientation:r="horizontal",className:c,children:a,...v})=>{const[b,T]=g.useState(n),[y,u]=g.useState([]),V=g.useId(),m=s!==void 0,d=m?s:b,L=g.useCallback(i=>{m||T(i),_?.(i)},[m,_]),S=g.useCallback(i=>{u(p=>p.includes(i)?p:[...p,i])},[]),I=g.useCallback(i=>{u(p=>p.filter(R=>R!==i))},[]);return e.jsx(M.Provider,{value:{value:d,onValueChange:L,orientation:r,id:V,items:y,registerItem:S,unregisterItem:I},children:e.jsx("div",{className:w("wim-tabs",`wim-tabs--${r}`,c),...v,children:a})})},q=({className:n,children:s,..._})=>{const{orientation:r,value:c,items:a,onValueChange:v}=N(),[b,T]=j.useState(!1),[y,u]=j.useState(0),[V,m]=j.useState(0),{containerRef:d,sliderStyle:L,isReady:S}=z({activeSelector:".wim-tabs__trigger--active",orientation:r,dependence:c}),I=o=>{r!=="vertical"&&(T(!0),u(o.pageX-(d.current?.offsetLeft||0)),m(d.current?.scrollLeft||0))},i=()=>{T(!1)},p=o=>{if(!b||r==="vertical")return;o.preventDefault();const l=(o.pageX-(d.current?.offsetLeft||0)-y)*1.5;d.current&&(d.current.scrollLeft=V-l)},R=o=>{const h=c?a.indexOf(c):-1;let l=-1;if(r==="horizontal"?(o.key==="ArrowRight"&&(l=(h+1)%a.length),o.key==="ArrowLeft"&&(l=(h-1+a.length)%a.length)):(o.key==="ArrowDown"&&(l=(h+1)%a.length),o.key==="ArrowUp"&&(l=(h-1+a.length)%a.length)),o.key==="Home"&&(l=0),o.key==="End"&&(l=a.length-1),l!==-1){o.preventDefault();const D=a[l];D&&(v(D),d.current?.querySelector(`[data-value="${D}"]`)?.focus())}};return e.jsxs("div",{ref:d,role:"tablist","aria-orientation":r,tabIndex:0,className:w("wim-tabs__list",b&&"wim-tabs__list--dragging",S&&"wim-tabs__list--ready",n),onMouseDown:I,onMouseUp:i,onMouseLeave:i,onMouseMove:p,onKeyDown:R,..._,children:[e.jsx("div",{className:"wim-tabs__slider",style:L,"aria-hidden":"true"}),s]})},A=({value:n,disabled:s=!1,className:_,children:r,...c})=>{const{value:a,onValueChange:v,id:b,registerItem:T,unregisterItem:y}=N(),u=a===n;return j.useEffect(()=>(T(n),()=>y(n)),[n,T,y]),e.jsx("button",{type:"button",role:"tab","aria-selected":u,"aria-controls":`wim-tabs-${b}-panel-${n}`,id:`wim-tabs-${b}-tab-${n}`,"data-value":n,disabled:s,tabIndex:u?0:-1,className:w("wim-tabs__trigger",u&&"wim-tabs__trigger--active",_),onClick:()=>v(n),...c,children:r})},E=({value:n,className:s,children:_,...r})=>{const{value:c,id:a}=N();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${a}-panel-${n}`,"aria-labelledby":`wim-tabs-${a}-tab-${n}`,tabIndex:0,className:w("wim-tabs__content",s),...r,children:_}):null},t=$;t.List=q;t.Trigger=A;t.Content=E;q.__docgenInfo={description:"",methods:[],displayName:"TabsList"};A.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};$.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const O={title:"Components/Navigation Elements/Tabs",component:t},f={render:function(){const{t:s}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_gen_settings")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_user_profile")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_notif_center")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_sec_privacy")}),e.jsx(t.Trigger,{value:"5",children:s("story_tabs_app_integ")})]}),e.jsx(t.Content,{value:"1",children:s("story_tabs_gen_desc")}),e.jsx(t.Content,{value:"2",children:s("story_tabs_user_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_notif_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_sec_desc")}),e.jsx(t.Content,{value:"5",children:s("story_tabs_app_desc")})]})}},C={render:function(){const{t:s}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_dash_v")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_ana_v")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_sys_logs")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_help_doc")})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:s("story_tabs_dash_title")}),e.jsx("p",{children:s("story_tabs_dash_desc")})]}),e.jsx(t.Content,{value:"2",children:s("story_tabs_ana_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_sys_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_help_desc")})]})}},x={render:function(){const{t:s}=k(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsxs(t.Trigger,{value:"1",children:[s("story_tabs_long_tab")," 1"]}),e.jsxs(t.Trigger,{value:"2",children:[s("story_tabs_long_tab")," 2"]}),e.jsxs(t.Trigger,{value:"3",children:[s("story_tabs_long_tab")," 3"]}),e.jsxs(t.Trigger,{value:"4",children:[s("story_tabs_long_tab")," 4"]}),e.jsxs(t.Trigger,{value:"5",children:[s("story_tabs_long_tab")," 5"]})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};const X=["Default","Vertical","Scrolling"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Scrolling:x,Vertical:C,__namedExportsOrder:X,default:O},Symbol.toStringTag,{value:"Module"}));export{f as D,x as S,G as T,C as V};
