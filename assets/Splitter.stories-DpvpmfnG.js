"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./useWimTranslation-BHl5Vbg4.js";import{n as f,t as p}from"./common-iVfBC3tU.js";import{n as m,t as h}from"./composeEventHandlers-Cs3Pg43H.js";import{r as g,t as _}from"./DemoCell-DgaHUUzy.js";var v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{v=`_root_czftf_34`,y=`_horizontal_czftf_40`,b=`_vertical_czftf_43`,x=`_resizing_czftf_46`,S=`_panel_czftf_53`,C=`_handle_czftf_64`,w=`_active_czftf_77`,T={root:v,horizontal:y,vertical:b,resizing:x,panel:S,handle:C,active:w}})))()}var D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{D=e(r(),1),d(),f(),O=e(l(),1),E(),m(),k=c(),A=5,j=(0,D.createContext)(null),M=()=>{let e=(0,D.useContext)(j);if(!e)throw Error(`Splitter components must be used within Splitter`);return e},N=({orientation:e=`horizontal`,className:t,children:n,...r})=>{let i=(0,D.useRef)(null),a=(0,D.useMemo)(()=>D.Children.toArray(n),[n]),o=(0,D.useMemo)(()=>a.filter(e=>e.type===P),[a]),[s,c]=(0,D.useState)([]),[l,u]=(0,D.useState)(0);if(o.length!==l){u(o.length);let e=o.map(e=>e.props.defaultSize??100/(o.length||1)),t=e.reduce((e,t)=>e+t,0)||1;c(e.map(e=>e/t*100))}let[d,f]=(0,D.useState)(null),p=(0,D.useCallback)((e,t,n)=>{let r=[...e],i=e[t]+e[t+1],a=o[t],s=o[t+1],c=a.props.minSize??0,l=a.props.maxSize??100,u=s.props.minSize??0,d=s.props.maxSize??100,f=Math.max(c,Math.min(n,l,i)),p=i-f;return p<u?(p=u,f=i-p):p>d&&(p=d,f=i-p),r[t]=f,r[t+1]=p,r},[o]),m=(0,D.useCallback)((e,t)=>{f(e),t.preventDefault()},[]),h=(0,D.useCallback)(t=>{if(d===null||!i.current)return;let n=i.current.getBoundingClientRect(),r=e===`horizontal`?n.width:n.height,a=e===`horizontal`?n.left:n.top,o=((`touches`in t?e===`horizontal`?t.touches[0].clientX:t.touches[0].clientY:e===`horizontal`?t.clientX:t.clientY)-a)/r*100;c(e=>{let t=0;for(let n=0;n<d;n++)t+=e[n];return p(e,d,o-t)})},[d,e,p]),g=(0,D.useCallback)((e,t)=>{c(n=>{if(n[e]===void 0||n[e+1]===void 0)return n;let r=t===`min`?0:t===`max`?100:n[e]+t;return p(n,e,r)})},[p]),_=(0,D.useCallback)(()=>{f(null)},[]);(0,D.useEffect)(()=>{if(d!==null)return window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,_),window.addEventListener(`touchmove`,h,{passive:!1}),window.addEventListener(`touchend`,_),()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,_),window.removeEventListener(`touchmove`,h),window.removeEventListener(`touchend`,_)}},[d,h,_]);let v=0,y=0,b=a.map(e=>{if(e.type===P){let t=v++;return D.cloneElement(e,{size:s[t]})}if(e.type===F){let t=y++,n=Math.round(s.slice(0,t+1).reduce((e,t)=>e+t,0));return D.cloneElement(e,{index:t,active:d===t,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100})}return e});return(0,k.jsx)(j.Provider,{value:{orientation:e,onResizeStart:m,onResizeBy:g},children:(0,k.jsx)(`div`,{ref:i,className:(0,O.default)(`wim-splitter`,T.root,T[e],d!==null&&T.resizing,t),"data-testid":`splitter-root`,...r,children:b})})},P=({defaultSize:e,minSize:t,maxSize:n,size:r,style:i,className:a,children:o,...s})=>(0,k.jsx)(`div`,{className:(0,O.default)(T.panel,a),"data-testid":`splitter-panel`,style:{...i,flex:r===void 0?`1 1 0%`:`0 0 ${r}%`},tabIndex:0,...s,children:o}),P.displayName=`Splitter.Panel`,F=({index:e,active:t,className:n,ariaLabel:r,...i})=>{let{t:a}=u(p),o=r??a(`a11y.resize_panel`),{onResizeStart:s,onResizeBy:c,orientation:l}=M();return(0,k.jsx)(`div`,{role:`separator`,"aria-orientation":l,"aria-label":o,tabIndex:0,className:(0,O.default)(T.handle,t&&T.active,n),"data-testid":`splitter-handle`,...i,onMouseDown:h(i.onMouseDown,t=>e!==void 0&&s(e,t)),onTouchStart:h(i.onTouchStart,t=>e!==void 0&&s(e,t)),onKeyDown:h(i.onKeyDown,t=>{if(e===void 0)return;let[n,r]=l===`horizontal`?[`ArrowLeft`,`ArrowRight`]:[`ArrowUp`,`ArrowDown`],i=t.key===n?-5:t.key===r?A:t.key===`Home`?`min`:t.key===`End`?`max`:null;i!==null&&(t.preventDefault(),c(e,i))})})},F.displayName=`Splitter.Handle`,N.displayName=`Splitter`,I=N,I.Panel=P,I.Handle=F,N.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:`Splitter`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`The orientation of the splitter.`,defaultValue:{value:`"horizontal"`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}}})))()}var R=n({Constraints:()=>K,Horizontal:()=>H,MultiplePanels:()=>W,Nested:()=>G,Vertical:()=>U,__namedExportsOrder:()=>q,default:()=>B}),z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{r(),a(),o(),L(),g(),z=c(),B={title:`Components/Layout/Splitter`,component:I,parameters:{layout:`fullscreen`}},V=({children:e,intent:t=`primary`})=>(0,z.jsx)(_,{intent:t,h:`100%`,radius:0,style:{fontSize:`var(--wim-font-size-2xl)`},children:e}),H={render:function(){let{t:e}=i(s);return(0,z.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,z.jsxs)(I,{orientation:`horizontal`,children:[(0,z.jsx)(I.Panel,{defaultSize:30,children:(0,z.jsx)(V,{intent:`primary`,children:e(`story.splitter_left`,`Left Panel`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:70,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_right`,`Right Panel`)})})]})})}},U={render:function(){let{t:e}=i(s);return(0,z.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,z.jsxs)(I,{orientation:`vertical`,children:[(0,z.jsx)(I.Panel,{defaultSize:40,children:(0,z.jsx)(V,{intent:`primary`,children:e(`story.splitter_top`,`Top Panel`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:60,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_bottom`,`Bottom Panel`)})})]})})}},W={render:function(){let{t:e}=i(s);return(0,z.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,z.jsxs)(I,{orientation:`horizontal`,children:[(0,z.jsx)(I.Panel,{defaultSize:20,children:(0,z.jsx)(V,{intent:`primary`,children:e(`story.splitter_panel_1`,`Files`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:60,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_panel_2`,`Editor`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:20,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_panel_3`,`Preview`)})})]})})}},G={render:function(){let{t:e}=i(s);return(0,z.jsx)(`div`,{style:{height:`600px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,z.jsxs)(I,{orientation:`horizontal`,children:[(0,z.jsx)(I.Panel,{defaultSize:25,children:(0,z.jsx)(V,{intent:`primary`,children:e(`story.splitter_sidebar`,`Sidebar`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:75,children:(0,z.jsxs)(I,{orientation:`vertical`,children:[(0,z.jsx)(I.Panel,{defaultSize:70,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_main`,`Main Content`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{defaultSize:30,children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_logs`,`Console / Logs`)})})]})})]})})}},K={render:function(){let{t:e}=i(s);return(0,z.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,z.jsxs)(I,{orientation:`horizontal`,children:[(0,z.jsx)(I.Panel,{minSize:20,maxSize:50,defaultSize:30,children:(0,z.jsx)(V,{intent:`primary`,children:e(`story.splitter_minmax`,`Min: 20%, Max: 50%`)})}),(0,z.jsx)(I.Handle,{}),(0,z.jsx)(I.Panel,{children:(0,z.jsx)(V,{intent:`neutral`,children:e(`story.splitter_flexible`,`Flexible Panel`)})})]})})}},q=[`Horizontal`,`Vertical`,`MultiplePanels`,`Nested`,`Constraints`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={30}>
            <PanelContent intent="primary">{t("story.splitter_left", "Left Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={70}>
            <PanelContent intent="neutral">{t("story.splitter_right", "Right Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="vertical">
          <Splitter.Panel defaultSize={40}>
            <PanelContent intent="primary">{t("story.splitter_top", "Top Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent intent="neutral">{t("story.splitter_bottom", "Bottom Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={20}>
            <PanelContent intent="primary">{t("story.splitter_panel_1", "Files")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent intent="neutral">{t("story.splitter_panel_2", "Editor")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={20}>
            <PanelContent intent="neutral">{t("story.splitter_panel_3", "Preview")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "600px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={25}>
            <PanelContent intent="primary">{t("story.splitter_sidebar", "Sidebar")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={75}>
            <Splitter orientation="vertical">
              <Splitter.Panel defaultSize={70}>
                <PanelContent intent="neutral">{t("story.splitter_main", "Main Content")}</PanelContent>
              </Splitter.Panel>
              <Splitter.Handle />
              <Splitter.Panel defaultSize={30}>
                <PanelContent intent="neutral">{t("story.splitter_logs", "Console / Logs")}</PanelContent>
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border)",
      "--wim-splitter-handle-color": "var(--wim-color-border)",
      "--wim-splitter-handle-width": "1px"
    } as React.CSSProperties}>
        <Splitter orientation="horizontal">
          <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>
            <PanelContent intent="primary">{t("story.splitter_minmax", "Min: 20%, Max: 50%")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel>
            <PanelContent intent="neutral">{t("story.splitter_flexible", "Flexible Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...K.parameters?.docs?.source}}}})))()}export{R as a,G as i,H as n,U as o,W as r,J as s,K as t};