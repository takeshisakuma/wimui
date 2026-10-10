"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./useWimTranslation-DkW6YDva.js";import{n as f,t as p}from"./common-BvPUqJnw.js";import{r as m,t as h}from"./DemoCell-9PKAo_JV.js";var g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{g=`_root_1bywe_3`,_=`_horizontal_1bywe_9`,v=`_vertical_1bywe_12`,y=`_resizing_1bywe_15`,b=`_panel_1bywe_22`,x=`_handle_1bywe_28`,S=`_active_1bywe_41`,C={root:g,horizontal:_,vertical:v,resizing:y,panel:b,handle:x,active:S}})))()}var T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{T=e(r(),1),d(),f(),E=e(l(),1),w(),D=c(),O=(0,T.createContext)(null),k=()=>{let e=(0,T.useContext)(O);if(!e)throw Error(`Splitter components must be used within Splitter`);return e},A=({orientation:e=`horizontal`,className:t,children:n,...r})=>{let i=(0,T.useRef)(null),a=(0,T.useMemo)(()=>T.Children.toArray(n),[n]),o=(0,T.useMemo)(()=>a.filter(e=>e.type===j),[a]),[s,c]=(0,T.useState)([]),[l,u]=(0,T.useState)(0);if(o.length!==l){u(o.length);let e=o.map(e=>e.props.defaultSize??100/(o.length||1)),t=e.reduce((e,t)=>e+t,0)||1;c(e.map(e=>e/t*100))}let[d,f]=(0,T.useState)(null),p=(0,T.useCallback)((e,t)=>{f(e),t.preventDefault()},[]),m=(0,T.useCallback)(t=>{if(d===null||!i.current)return;let n=i.current.getBoundingClientRect(),r=e===`horizontal`?n.width:n.height,a=e===`horizontal`?n.left:n.top,s=((`touches`in t?e===`horizontal`?t.touches[0].clientX:t.touches[0].clientY:e===`horizontal`?t.clientX:t.clientY)-a)/r*100;c(e=>{let t=[...e],n=0;for(let t=0;t<d;t++)n+=e[t];let r=e[d]+e[d+1],i=s-n,a=o[d],c=o[d+1],l=a.props.minSize??0,u=a.props.maxSize??100,f=c.props.minSize??0,p=c.props.maxSize??100;i=Math.max(l,Math.min(i,u));let m=r-i;return m<f?(m=f,i=r-m):m>p&&(m=p,i=r-m),t[d]=i,t[d+1]=m,t})},[d,e,o]),h=(0,T.useCallback)(()=>{f(null)},[]);(0,T.useEffect)(()=>{if(d!==null)return window.addEventListener(`mousemove`,m),window.addEventListener(`mouseup`,h),window.addEventListener(`touchmove`,m,{passive:!1}),window.addEventListener(`touchend`,h),()=>{window.removeEventListener(`mousemove`,m),window.removeEventListener(`mouseup`,h),window.removeEventListener(`touchmove`,m),window.removeEventListener(`touchend`,h)}},[d,m,h]);let g=0,_=0,v=a.map(e=>{if(e.type===j){let t=g++;return T.cloneElement(e,{size:s[t]})}if(e.type===M){let t=_++,n=Math.round(s.slice(0,t+1).reduce((e,t)=>e+t,0));return T.cloneElement(e,{index:t,active:d===t,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100})}return e});return(0,D.jsx)(O.Provider,{value:{orientation:e,onResizeStart:p},children:(0,D.jsx)(`div`,{ref:i,className:(0,E.default)(`wim-splitter`,C.root,C[e],d!==null&&C.resizing,t),"data-testid":`splitter-root`,...r,children:v})})},j=({defaultSize:e,minSize:t,maxSize:n,size:r,style:i,className:a,children:o,...s})=>(0,D.jsx)(`div`,{className:(0,E.default)(C.panel,a),"data-testid":`splitter-panel`,style:{...i,flex:r===void 0?`1 1 0%`:`0 0 ${r}%`},tabIndex:0,...s,children:o}),j.displayName=`Splitter.Panel`,M=({index:e,active:t,className:n,ariaLabel:r,...i})=>{let{t:a}=u(p),o=r??a(`a11y.resize_panel`),{onResizeStart:s,orientation:c}=k();return(0,D.jsx)(`div`,{role:`separator`,"aria-orientation":c,"aria-label":o,tabIndex:0,className:(0,E.default)(C.handle,t&&C.active,n),"data-testid":`splitter-handle`,onMouseDown:t=>e!==void 0&&s(e,t),onTouchStart:t=>e!==void 0&&s(e,t),onKeyDown:e=>{(e.key===`ArrowLeft`||e.key===`ArrowUp`||e.key===`ArrowRight`||e.key===`ArrowDown`)&&e.preventDefault()},...i})},M.displayName=`Splitter.Handle`,A.displayName=`Splitter`,N=A,N.Panel=j,N.Handle=M,A.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:`Splitter`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`The orientation of the splitter.`,defaultValue:{value:`"horizontal"`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}}})))()}var F=n({Constraints:()=>U,Horizontal:()=>z,MultiplePanels:()=>V,Nested:()=>H,Vertical:()=>B,__namedExportsOrder:()=>W,default:()=>L}),I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{r(),a(),o(),P(),m(),I=c(),L={title:`Components/Layout/Splitter`,component:N,parameters:{layout:`fullscreen`}},R=({children:e,intent:t=`primary`})=>(0,I.jsx)(h,{intent:t,h:`100%`,radius:0,style:{fontSize:`var(--wim-font-size-2xl)`},children:e}),z={render:function(){let{t:e}=i(s);return(0,I.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,I.jsxs)(N,{orientation:`horizontal`,children:[(0,I.jsx)(N.Panel,{defaultSize:30,children:(0,I.jsx)(R,{intent:`primary`,children:e(`story.splitter_left`,`Left Panel`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:70,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_right`,`Right Panel`)})})]})})}},B={render:function(){let{t:e}=i(s);return(0,I.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,I.jsxs)(N,{orientation:`vertical`,children:[(0,I.jsx)(N.Panel,{defaultSize:40,children:(0,I.jsx)(R,{intent:`primary`,children:e(`story.splitter_top`,`Top Panel`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:60,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_bottom`,`Bottom Panel`)})})]})})}},V={render:function(){let{t:e}=i(s);return(0,I.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,I.jsxs)(N,{orientation:`horizontal`,children:[(0,I.jsx)(N.Panel,{defaultSize:20,children:(0,I.jsx)(R,{intent:`primary`,children:e(`story.splitter_panel_1`,`Files`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:60,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_panel_2`,`Editor`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:20,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_panel_3`,`Preview`)})})]})})}},H={render:function(){let{t:e}=i(s);return(0,I.jsx)(`div`,{style:{height:`600px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,I.jsxs)(N,{orientation:`horizontal`,children:[(0,I.jsx)(N.Panel,{defaultSize:25,children:(0,I.jsx)(R,{intent:`primary`,children:e(`story.splitter_sidebar`,`Sidebar`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:75,children:(0,I.jsxs)(N,{orientation:`vertical`,children:[(0,I.jsx)(N.Panel,{defaultSize:70,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_main`,`Main Content`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{defaultSize:30,children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_logs`,`Console / Logs`)})})]})})]})})}},U={render:function(){let{t:e}=i(s);return(0,I.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,I.jsxs)(N,{orientation:`horizontal`,children:[(0,I.jsx)(N.Panel,{minSize:20,maxSize:50,defaultSize:30,children:(0,I.jsx)(R,{intent:`primary`,children:e(`story.splitter_minmax`,`Min: 20%, Max: 50%`)})}),(0,I.jsx)(N.Handle,{}),(0,I.jsx)(N.Panel,{children:(0,I.jsx)(R,{intent:`neutral`,children:e(`story.splitter_flexible`,`Flexible Panel`)})})]})})}},W=[`Horizontal`,`Vertical`,`MultiplePanels`,`Nested`,`Constraints`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}})))()}export{F as a,H as i,z as n,B as o,V as r,G as s,U as t};