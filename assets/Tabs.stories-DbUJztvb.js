import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _,R as j}from"./iframe-SL2HqV3D.js";import{c as w}from"./index-30w8ikAG.js";import{u as z}from"./useIndicator-Dmr9Yy3B.js";import{u as k}from"./useTranslation-ZF4WB21B.js";const M=_.createContext(null),N=()=>{const n=_.useContext(M);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},$=({defaultValue:n,value:s,onValueChange:d,orientation:a="horizontal",className:c,children:r,...p})=>{const[g,T]=_.useState(n),[v,b]=_.useState([]),V=_.useId(),y=s!==void 0,u=y?s:g,L=_.useCallback(i=>{y||T(i),d?.(i)},[y,d]),S=_.useCallback(i=>{b(m=>m.includes(i)?m:[...m,i])},[]),I=_.useCallback(i=>{b(m=>m.filter(R=>R!==i))},[]);return e.jsx(M.Provider,{value:{value:u,onValueChange:L,orientation:a,id:V,items:v,registerItem:S,unregisterItem:I},children:e.jsx("div",{className:w("wim-tabs",`wim-tabs--${a}`,c),...p,children:r})})},q=({className:n,children:s,...d})=>{const{orientation:a,value:c,items:r,onValueChange:p}=N(),[g,T]=j.useState(!1),[v,b]=j.useState(0),[V,y]=j.useState(0),{containerRef:u,sliderStyle:L,isReady:S}=z({activeSelector:".wim-tabs__trigger--active",orientation:a,dependence:c}),I=o=>{a!=="vertical"&&(T(!0),b(o.pageX-(u.current?.offsetLeft||0)),y(u.current?.scrollLeft||0))},i=()=>{T(!1)},m=o=>{if(!g||a==="vertical")return;o.preventDefault();const l=(o.pageX-(u.current?.offsetLeft||0)-v)*1.5;u.current&&(u.current.scrollLeft=V-l)},R=o=>{const h=c?r.indexOf(c):-1;let l=-1;if(a==="horizontal"?(o.key==="ArrowRight"&&(l=(h+1)%r.length),o.key==="ArrowLeft"&&(l=(h-1+r.length)%r.length)):(o.key==="ArrowDown"&&(l=(h+1)%r.length),o.key==="ArrowUp"&&(l=(h-1+r.length)%r.length)),o.key==="Home"&&(l=0),o.key==="End"&&(l=r.length-1),l!==-1){o.preventDefault();const D=r[l];D&&(p(D),u.current?.querySelector(`[data-value="${D}"]`)?.focus())}};return e.jsxs("div",{ref:u,role:"tablist","aria-orientation":a,className:w("wim-tabs__list",g&&"wim-tabs__list--dragging",S&&"wim-tabs__list--ready",n),onMouseDown:I,onMouseUp:i,onMouseLeave:i,onMouseMove:m,onKeyDown:R,...d,children:[e.jsx("div",{className:"wim-tabs__slider",style:L,"aria-hidden":"true"}),s]})},A=({value:n,disabled:s=!1,className:d,children:a,...c})=>{const{value:r,onValueChange:p,id:g,registerItem:T,unregisterItem:v}=N(),b=r===n;return j.useEffect(()=>(T(n),()=>v(n)),[n,T,v]),e.jsx("button",{type:"button",role:"tab","aria-selected":b,"aria-controls":`wim-tabs-${g}-panel-${n}`,id:`wim-tabs-${g}-tab-${n}`,"data-value":n,disabled:s,tabIndex:b?0:-1,className:w("wim-tabs__trigger",b&&"wim-tabs__trigger--active",d),onClick:()=>p(n),...c,children:a})},E=({value:n,className:s,children:d,...a})=>{const{value:c,id:r}=N();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${r}-panel-${n}`,"aria-labelledby":`wim-tabs-${r}-tab-${n}`,tabIndex:0,className:w("wim-tabs__content",s),...a,children:d}):null},t=$;t.List=q;t.Trigger=A;t.Content=E;q.__docgenInfo={description:"",methods:[],displayName:"TabsList"};A.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};$.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};const O={title:"Components/Navigation Elements/Tabs",component:t},f={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_gen_settings")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_user_profile")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_notif_center")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_sec_privacy")}),e.jsx(t.Trigger,{value:"5",children:s("story_tabs_app_integ")})]}),e.jsx(t.Content,{value:"1",children:s("story_tabs_gen_desc")}),e.jsx(t.Content,{value:"2",children:s("story_tabs_user_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_notif_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_sec_desc")}),e.jsx(t.Content,{value:"5",children:s("story_tabs_app_desc")})]})}},C={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story_tabs_dash_v")}),e.jsx(t.Trigger,{value:"2",children:s("story_tabs_ana_v")}),e.jsx(t.Trigger,{value:"3",children:s("story_tabs_sys_logs")}),e.jsx(t.Trigger,{value:"4",children:s("story_tabs_help_doc")})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:s("story_tabs_dash_title")}),e.jsx("p",{children:s("story_tabs_dash_desc")})]}),e.jsx(t.Content,{value:"2",children:s("story_tabs_ana_desc")}),e.jsx(t.Content,{value:"3",children:s("story_tabs_sys_desc")}),e.jsx(t.Content,{value:"4",children:s("story_tabs_help_desc")})]})}},x={render:function(){const{t:s}=k(["docs","common","components"]);return e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsxs(t.Trigger,{value:"1",children:[s("story_tabs_long_tab")," 1"]}),e.jsxs(t.Trigger,{value:"2",children:[s("story_tabs_long_tab")," 2"]}),e.jsxs(t.Trigger,{value:"3",children:[s("story_tabs_long_tab")," 3"]}),e.jsxs(t.Trigger,{value:"4",children:[s("story_tabs_long_tab")," 4"]}),e.jsxs(t.Trigger,{value:"5",children:[s("story_tabs_long_tab")," 5"]})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const X=["Default","Vertical","Scrolling"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Scrolling:x,Vertical:C,__namedExportsOrder:X,default:O},Symbol.toStringTag,{value:"Module"}));export{f as D,x as S,G as T,C as V};
