import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g,R as j,A as E}from"./iframe-Bn5mqC8Q.js";import{c as w}from"./index-K9UxIAwh.js";import{u as O}from"./useIndicator-D1fV3Zq1.js";import{u as M}from"./useTranslation-Cn4N2seM.js";const z=g.createContext(null),R=()=>{const n=g.useContext(z);if(!n)throw new Error("Tabs components must be used within a Tabs");return n},D=({defaultValue:n,value:s,onChange:d,orientation:r="horizontal",className:c,children:a,...p})=>{const[T,_]=g.useState(n),[m,b]=g.useState([]),L=g.useId(),y=s!==void 0,u=y?s:T,S=g.useCallback(i=>{y||_(i),d?.(i)},[y,d]),V=g.useCallback(i=>{b(v=>v.includes(i)?v:[...v,i])},[]),A=g.useCallback(i=>{b(v=>v.filter(N=>N!==i))},[]);return e.jsx(z.Provider,{value:{value:u,onValueChange:S,orientation:r,id:L,items:m,registerItem:V,unregisterItem:A},children:e.jsx("div",{className:"wim-tabs-container",children:e.jsx("div",{className:w("wim-tabs",`wim-tabs--${r}`,c),...p,children:a})})})},k=({className:n,children:s,...d})=>{const{orientation:r,value:c,items:a,onValueChange:p}=R(),[T,_]=j.useState(!1),[m,b]=j.useState(0),[L,y]=j.useState(0),{containerRef:u,sliderStyle:S,isReady:V}=O({activeSelector:".wim-tabs__trigger--active",orientation:r,dependence:c}),A=o=>{r!=="vertical"&&(_(!0),b(o.pageX-(u.current?.offsetLeft||0)),y(u.current?.scrollLeft||0))},i=()=>{_(!1)},v=o=>{if(!T||r==="vertical")return;o.preventDefault();const l=(o.pageX-(u.current?.offsetLeft||0)-m)*1.5;u.current&&(u.current.scrollLeft=L-l)},N=o=>{const h=c?a.indexOf(c):-1;let l=-1;if(r==="horizontal"?(o.key==="ArrowRight"&&(l=(h+1)%a.length),o.key==="ArrowLeft"&&(l=(h-1+a.length)%a.length)):(o.key==="ArrowDown"&&(l=(h+1)%a.length),o.key==="ArrowUp"&&(l=(h-1+a.length)%a.length)),o.key==="Home"&&(l=0),o.key==="End"&&(l=a.length-1),l!==-1){o.preventDefault();const I=a[l];I&&(p(I),u.current?.querySelector(`[data-value="${I}"]`)?.focus())}};return e.jsxs("div",{ref:u,role:"tablist","aria-orientation":r,tabIndex:0,className:w("wim-tabs__list",T&&"wim-tabs__list--dragging",V&&"wim-tabs__list--ready",n),onMouseDown:A,onMouseUp:i,onMouseLeave:i,onMouseMove:v,onKeyDown:N,...d,children:[e.jsx("div",{className:"wim-tabs__slider",style:S,"aria-hidden":"true"}),s]})},$=({value:n,disabled:s=!1,className:d,children:r,...c})=>{const{value:a,onValueChange:p,id:T,registerItem:_,unregisterItem:m}=R(),b=a===n;return j.useEffect(()=>(_(n),()=>m(n)),[n,_,m]),e.jsx("button",{type:"button",role:"tab","aria-selected":b,"aria-controls":`wim-tabs-${T}-panel-${n}`,id:`wim-tabs-${T}-tab-${n}`,"data-value":n,disabled:s,tabIndex:b?0:-1,className:w("wim-tabs__trigger",b&&"wim-tabs__trigger--active",d),onClick:()=>p(n),...c,children:r})},q=({value:n,className:s,children:d,...r})=>{const{value:c,id:a}=R();return c===n?e.jsx("div",{role:"tabpanel",id:`wim-tabs-${a}-panel-${n}`,"aria-labelledby":`wim-tabs-${a}-tab-${n}`,tabIndex:0,className:w("wim-tabs__content",s),...r,children:d}):null};D.displayName="Tabs";k.displayName="Tabs.List";$.displayName="Tabs.Trigger";q.displayName="Tabs.Content";const t=D;t.List=k;t.Trigger=$;t.Content=q;k.__docgenInfo={description:"",methods:[],displayName:"Tabs.List"};$.__docgenInfo={description:"",methods:[],displayName:"Tabs.Trigger",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};q.__docgenInfo={description:"",methods:[],displayName:"Tabs.Content",props:{value:{required:!0,tsType:{name:"string"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}},composes:["Omit"]};const P={title:"Components/Navigation Elements/Tabs",component:t},f={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story.tabs_gen_settings")}),e.jsx(t.Trigger,{value:"2",children:s("story.tabs_user_profile")}),e.jsx(t.Trigger,{value:"3",children:s("story.tabs_notif_center")}),e.jsx(t.Trigger,{value:"4",children:s("story.tabs_sec_privacy")}),e.jsx(t.Trigger,{value:"5",children:s("story.tabs_app_integ")})]}),e.jsx(t.Content,{value:"1",children:s("story.tabs_gen_desc")}),e.jsx(t.Content,{value:"2",children:s("story.tabs_user_desc")}),e.jsx(t.Content,{value:"3",children:s("story.tabs_notif_desc")}),e.jsx(t.Content,{value:"4",children:s("story.tabs_sec_desc")}),e.jsx(t.Content,{value:"5",children:s("story.tabs_app_desc")})]})}},C={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",orientation:"vertical",style:{minHeight:"200px"},children:[e.jsxs(t.List,{children:[e.jsx(t.Trigger,{value:"1",children:s("story.tabs_dash_v")}),e.jsx(t.Trigger,{value:"2",children:s("story.tabs_ana_v")}),e.jsx(t.Trigger,{value:"3",children:s("story.tabs_sys_logs")}),e.jsx(t.Trigger,{value:"4",children:s("story.tabs_help_doc")})]}),e.jsxs(t.Content,{value:"1",children:[e.jsx("h3",{style:{marginTop:0},children:s("story.tabs_dash_title")}),e.jsx("p",{children:s("story.tabs_dash_desc")})]}),e.jsx(t.Content,{value:"2",children:s("story.tabs_ana_desc")}),e.jsx(t.Content,{value:"3",children:s("story.tabs_sys_desc")}),e.jsx(t.Content,{value:"4",children:s("story.tabs_help_desc")})]})}},x={render:function(){const{t:s}=M(E);return e.jsxs(t,{defaultValue:"1",style:{width:"800px"},children:[e.jsxs(t.List,{children:[e.jsxs(t.Trigger,{value:"1",children:[s("story.tabs_long_tab")," 1"]}),e.jsxs(t.Trigger,{value:"2",children:[s("story.tabs_long_tab")," 2"]}),e.jsxs(t.Trigger,{value:"3",children:[s("story.tabs_long_tab")," 3"]}),e.jsxs(t.Trigger,{value:"4",children:[s("story.tabs_long_tab")," 4"]}),e.jsxs(t.Trigger,{value:"5",children:[s("story.tabs_long_tab")," 5"]})]}),e.jsx(t.Content,{value:"1",children:"Content 1"}),e.jsx(t.Content,{value:"2",children:"Content 2"}),e.jsx(t.Content,{value:"3",children:"Content 3"}),e.jsx(t.Content,{value:"4",children:"Content 4"}),e.jsx(t.Content,{value:"5",children:"Content 5"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">{t("story.tabs_gen_settings")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_user_profile")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_notif_center")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_sec_privacy")}</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story.tabs_app_integ")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">{t("story.tabs_gen_desc")}</Tabs.Content>
        <Tabs.Content value="2">{t("story.tabs_user_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story.tabs_notif_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story.tabs_sec_desc")}</Tabs.Content>
        <Tabs.Content value="5">{t("story.tabs_app_desc")}</Tabs.Content>
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
          <Tabs.Trigger value="1">{t("story.tabs_dash_v")}</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_ana_v")}</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_sys_logs")}</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_help_doc")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">
          <h3 style={{
          marginTop: 0
        }}>{t("story.tabs_dash_title")}</h3>
          <p>{t("story.tabs_dash_desc")}</p>
        </Tabs.Content>
        <Tabs.Content value="2">{t("story.tabs_ana_desc")}</Tabs.Content>
        <Tabs.Content value="3">{t("story.tabs_sys_desc")}</Tabs.Content>
        <Tabs.Content value="4">{t("story.tabs_help_desc")}</Tabs.Content>
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
          <Tabs.Trigger value="1">{t("story.tabs_long_tab")} 1</Tabs.Trigger>
          <Tabs.Trigger value="2">{t("story.tabs_long_tab")} 2</Tabs.Trigger>
          <Tabs.Trigger value="3">{t("story.tabs_long_tab")} 3</Tabs.Trigger>
          <Tabs.Trigger value="4">{t("story.tabs_long_tab")} 4</Tabs.Trigger>
          <Tabs.Trigger value="5">{t("story.tabs_long_tab")} 5</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">Content 1</Tabs.Content>
        <Tabs.Content value="2">Content 2</Tabs.Content>
        <Tabs.Content value="3">Content 3</Tabs.Content>
        <Tabs.Content value="4">Content 4</Tabs.Content>
        <Tabs.Content value="5">Content 5</Tabs.Content>
      </Tabs>;
  }
}`,...x.parameters?.docs?.source}}};const X=["Default","Vertical","Scrolling"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Scrolling:x,Vertical:C,__namedExportsOrder:X,default:P},Symbol.toStringTag,{value:"Module"}));export{f as D,x as S,J as T,C as V};
