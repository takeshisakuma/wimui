"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-MNZnjzfn.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./useWimTranslation-D32hBdyX.js";import{n as f,t as p}from"./common-C-I7BklL.js";import{n as m,t as h}from"./composeEventHandlers-Cs3Pg43H.js";import{r as g,t as _}from"./DemoCell-DgaHUUzy.js";var v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{v=`_root_1bywe_3`,y=`_horizontal_1bywe_9`,b=`_vertical_1bywe_12`,x=`_resizing_1bywe_15`,S=`_panel_1bywe_22`,C=`_handle_1bywe_28`,w=`_active_1bywe_41`,T={root:v,horizontal:y,vertical:b,resizing:x,panel:S,handle:C,active:w}})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{D=e(r(),1),d(),f(),O=e(l(),1),E(),m(),k=c(),A=(0,D.createContext)(null),j=()=>{let e=(0,D.useContext)(A);if(!e)throw Error(`Splitter components must be used within Splitter`);return e},M=({orientation:e=`horizontal`,className:t,children:n,...r})=>{let i=(0,D.useRef)(null),a=(0,D.useMemo)(()=>D.Children.toArray(n),[n]),o=(0,D.useMemo)(()=>a.filter(e=>e.type===N),[a]),[s,c]=(0,D.useState)([]),[l,u]=(0,D.useState)(0);if(o.length!==l){u(o.length);let e=o.map(e=>e.props.defaultSize??100/(o.length||1)),t=e.reduce((e,t)=>e+t,0)||1;c(e.map(e=>e/t*100))}let[d,f]=(0,D.useState)(null),p=(0,D.useCallback)((e,t)=>{f(e),t.preventDefault()},[]),m=(0,D.useCallback)(t=>{if(d===null||!i.current)return;let n=i.current.getBoundingClientRect(),r=e===`horizontal`?n.width:n.height,a=e===`horizontal`?n.left:n.top,s=((`touches`in t?e===`horizontal`?t.touches[0].clientX:t.touches[0].clientY:e===`horizontal`?t.clientX:t.clientY)-a)/r*100;c(e=>{let t=[...e],n=0;for(let t=0;t<d;t++)n+=e[t];let r=e[d]+e[d+1],i=s-n,a=o[d],c=o[d+1],l=a.props.minSize??0,u=a.props.maxSize??100,f=c.props.minSize??0,p=c.props.maxSize??100;i=Math.max(l,Math.min(i,u));let m=r-i;return m<f?(m=f,i=r-m):m>p&&(m=p,i=r-m),t[d]=i,t[d+1]=m,t})},[d,e,o]),h=(0,D.useCallback)(()=>{f(null)},[]);(0,D.useEffect)(()=>{if(d!==null)return window.addEventListener(`mousemove`,m),window.addEventListener(`mouseup`,h),window.addEventListener(`touchmove`,m,{passive:!1}),window.addEventListener(`touchend`,h),()=>{window.removeEventListener(`mousemove`,m),window.removeEventListener(`mouseup`,h),window.removeEventListener(`touchmove`,m),window.removeEventListener(`touchend`,h)}},[d,m,h]);let g=0,_=0,v=a.map(e=>{if(e.type===N){let t=g++;return D.cloneElement(e,{size:s[t]})}if(e.type===P){let t=_++,n=Math.round(s.slice(0,t+1).reduce((e,t)=>e+t,0));return D.cloneElement(e,{index:t,active:d===t,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100})}return e});return(0,k.jsx)(A.Provider,{value:{orientation:e,onResizeStart:p},children:(0,k.jsx)(`div`,{ref:i,className:(0,O.default)(`wim-splitter`,T.root,T[e],d!==null&&T.resizing,t),"data-testid":`splitter-root`,...r,children:v})})},N=({defaultSize:e,minSize:t,maxSize:n,size:r,style:i,className:a,children:o,...s})=>(0,k.jsx)(`div`,{className:(0,O.default)(T.panel,a),"data-testid":`splitter-panel`,style:{...i,flex:r===void 0?`1 1 0%`:`0 0 ${r}%`},tabIndex:0,...s,children:o}),N.displayName=`Splitter.Panel`,P=({index:e,active:t,className:n,ariaLabel:r,...i})=>{let{t:a}=u(p),o=r??a(`a11y.resize_panel`),{onResizeStart:s,orientation:c}=j();return(0,k.jsx)(`div`,{role:`separator`,"aria-orientation":c,"aria-label":o,tabIndex:0,className:(0,O.default)(T.handle,t&&T.active,n),"data-testid":`splitter-handle`,...i,onMouseDown:h(i.onMouseDown,t=>e!==void 0&&s(e,t)),onTouchStart:h(i.onTouchStart,t=>e!==void 0&&s(e,t)),onKeyDown:h(i.onKeyDown,e=>{(e.key===`ArrowLeft`||e.key===`ArrowUp`||e.key===`ArrowRight`||e.key===`ArrowDown`)&&e.preventDefault()})})},P.displayName=`Splitter.Handle`,M.displayName=`Splitter`,F=M,F.Panel=N,F.Handle=P,M.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:`Splitter`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`The orientation of the splitter.`,defaultValue:{value:`"horizontal"`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}}})))()}var L=n({Constraints:()=>G,Horizontal:()=>V,MultiplePanels:()=>U,Nested:()=>W,Vertical:()=>H,__namedExportsOrder:()=>K,default:()=>z}),R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{r(),a(),o(),I(),g(),R=c(),z={title:`Components/Layout/Splitter`,component:F,parameters:{layout:`fullscreen`}},B=({children:e,intent:t=`primary`})=>(0,R.jsx)(_,{intent:t,h:`100%`,radius:0,style:{fontSize:`var(--wim-font-size-2xl)`},children:e}),V={render:function(){let{t:e}=i(s);return(0,R.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,R.jsxs)(F,{orientation:`horizontal`,children:[(0,R.jsx)(F.Panel,{defaultSize:30,children:(0,R.jsx)(B,{intent:`primary`,children:e(`story.splitter_left`,`Left Panel`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:70,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_right`,`Right Panel`)})})]})})}},H={render:function(){let{t:e}=i(s);return(0,R.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,R.jsxs)(F,{orientation:`vertical`,children:[(0,R.jsx)(F.Panel,{defaultSize:40,children:(0,R.jsx)(B,{intent:`primary`,children:e(`story.splitter_top`,`Top Panel`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:60,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_bottom`,`Bottom Panel`)})})]})})}},U={render:function(){let{t:e}=i(s);return(0,R.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,R.jsxs)(F,{orientation:`horizontal`,children:[(0,R.jsx)(F.Panel,{defaultSize:20,children:(0,R.jsx)(B,{intent:`primary`,children:e(`story.splitter_panel_1`,`Files`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:60,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_panel_2`,`Editor`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:20,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_panel_3`,`Preview`)})})]})})}},W={render:function(){let{t:e}=i(s);return(0,R.jsx)(`div`,{style:{height:`600px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,R.jsxs)(F,{orientation:`horizontal`,children:[(0,R.jsx)(F.Panel,{defaultSize:25,children:(0,R.jsx)(B,{intent:`primary`,children:e(`story.splitter_sidebar`,`Sidebar`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:75,children:(0,R.jsxs)(F,{orientation:`vertical`,children:[(0,R.jsx)(F.Panel,{defaultSize:70,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_main`,`Main Content`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{defaultSize:30,children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_logs`,`Console / Logs`)})})]})})]})})}},G={render:function(){let{t:e}=i(s);return(0,R.jsx)(`div`,{style:{height:`400px`,border:`1px solid`,borderColor:`var(--wim-color-border)`,"--wim-splitter-handle-color":`var(--wim-color-border)`,"--wim-splitter-handle-width":`1px`},children:(0,R.jsxs)(F,{orientation:`horizontal`,children:[(0,R.jsx)(F.Panel,{minSize:20,maxSize:50,defaultSize:30,children:(0,R.jsx)(B,{intent:`primary`,children:e(`story.splitter_minmax`,`Min: 20%, Max: 50%`)})}),(0,R.jsx)(F.Handle,{}),(0,R.jsx)(F.Panel,{children:(0,R.jsx)(B,{intent:`neutral`,children:e(`story.splitter_flexible`,`Flexible Panel`)})})]})})}},K=[`Horizontal`,`Vertical`,`MultiplePanels`,`Nested`,`Constraints`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}}})))()}export{L as a,W as i,V as n,H as o,U as r,q as s,G as t};