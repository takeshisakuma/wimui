import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as M}from"./iframe-DEBOWsqM.js";import{c as T}from"./index-x98TZOX1.js";import{u as P}from"./useTranslation-C_sUcuQ0.js";const D=a.createContext(null),Q=()=>{const n=a.useContext(D);if(!n)throw new Error("Splitter components must be used within Splitter");return n},F=({orientation:n="horizontal",className:r,children:w,...u})=>{const c=a.useRef(null),[m,S]=a.useState([]),[l,N]=a.useState(null),k=M.Children.toArray(w),h=k.filter(o=>o.type&&o.type===g);a.useEffect(()=>{const o=h.map(d=>d.props.defaultSize??100/h.length),i=o.reduce((d,R)=>d+R,0);S(o.map(d=>d/i*100))},[h.length]);const X=a.useCallback((o,i)=>{N(o),i.preventDefault()},[]),Y=o=>"touches"in o?n==="horizontal"?o.touches[0].clientX:o.touches[0].clientY:n==="horizontal"?o.clientX:o.clientY,f=a.useCallback(o=>{if(l===null||!c.current)return;const i=c.current.getBoundingClientRect(),d=n==="horizontal"?i.width:i.height,R=n==="horizontal"?i.left:i.top,G=(Y(o)-R)/d*100;S(C=>{const H=[...C];let O=0;for(let I=0;I<l;I++)O+=C[I];const E=C[l]+C[l+1];let x=G-O;const V=h[l],B=h[l+1],J=V.props.minSize??0,K=V.props.maxSize??100,q=B.props.minSize??0,A=B.props.maxSize??100;x=Math.max(J,Math.min(x,K));let p=E-x;return p<q?(p=q,x=E-p):p>A&&(p=A,x=E-p),H[l]=x,H[l+1]=p,H})},[l,n,h]),z=a.useCallback(()=>{N(null)},[]);a.useEffect(()=>{if(l!==null)return window.addEventListener("mousemove",f),window.addEventListener("mouseup",z),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",z),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",z),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",z)}},[l,f,z]);let $=0,U=0;const W=k.map(o=>{if(o.type===g){const i=$++;return M.cloneElement(o,{size:m[i]})}if(o.type===L){const i=U++;return M.cloneElement(o,{index:i,active:l===i})}return o});return e.jsx(D.Provider,{value:{orientation:n,onResizeStart:X},children:e.jsx("div",{ref:c,className:T("wim-splitter",`wim-splitter--${n}`,l!==null&&"wim-splitter--resizing",r),...u,children:W})})},g=({defaultSize:n,minSize:r,maxSize:w,size:u,style:c,className:m,children:S,...l})=>e.jsx("div",{className:T("wim-splitter-panel",m),style:{...c,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...l,children:S});g.displayName="SplitterPanel";const L=({index:n,active:r,className:w,...u})=>{const{t:c}=P(),{onResizeStart:m,orientation:S}=Q();return e.jsx("div",{role:"separator","aria-orientation":S,"aria-label":c("a11y_resize_panel"),tabIndex:0,className:T("wim-splitter-handle",r&&"wim-splitter-handle--active",w),onMouseDown:l=>n!==void 0&&m(n,l),onTouchStart:l=>n!==void 0&&m(n,l),...u})};L.displayName="SplitterHandle";const t=F;t.Panel=g;t.Handle=L;F.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const Z={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},s=({children:n,color:r})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:r,fontSize:"24px",fontWeight:"bold",color:"white"},children:n}),b={render:function(){const{t:r}=P(["docs","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(s,{color:"#3b82f6",children:r("story_splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(s,{color:"#10b981",children:r("story_splitter_right","Right Panel")})})]})})}},_={render:function(){const{t:r}=P(["docs","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(s,{color:"#ef4444",children:r("story_splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(s,{color:"#f59e0b",children:r("story_splitter_bottom","Bottom Panel")})})]})})}},v={render:function(){const{t:r}=P(["docs","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(s,{color:"#6366f1",children:r("story_splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(s,{color:"#8b5cf6",children:r("story_splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(s,{color:"#ec4899",children:r("story_splitter_panel_3","Panel 3")})})]})})}},y={render:function(){const{t:r}=P(["docs","common","components"]);return e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(s,{color:"#374151",children:r("story_splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(s,{color:"#1f2937",children:r("story_splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(s,{color:"#4b5563",children:r("story_splitter_logs","Console / Logs")})})]})})]})})}},j={render:function(){const{t:r}=P(["docs","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(s,{color:"#14b8a6",children:r("story_splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(s,{color:"#06b6d4",children:r("story_splitter_flexible","Flexible Panel")})})]})})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "400px",
      border: "1px solid var(--wim-color-border-subtle)"
    }}>\r
        <Splitter orientation="horizontal">\r
          <Splitter.Panel defaultSize={30}>\r
            <PanelContent color="#3b82f6">{t("story_splitter_left", "Left Panel")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel defaultSize={70}>\r
            <PanelContent color="#10b981">{t("story_splitter_right", "Right Panel")}</PanelContent>\r
          </Splitter.Panel>\r
        </Splitter>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "400px",
      border: "1px solid var(--wim-color-border-subtle)"
    }}>\r
        <Splitter orientation="vertical">\r
          <Splitter.Panel defaultSize={40}>\r
            <PanelContent color="#ef4444">{t("story_splitter_top", "Top Panel")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel defaultSize={60}>\r
            <PanelContent color="#f59e0b">{t("story_splitter_bottom", "Bottom Panel")}</PanelContent>\r
          </Splitter.Panel>\r
        </Splitter>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "400px",
      border: "1px solid var(--wim-color-border-subtle)"
    }}>\r
        <Splitter orientation="horizontal">\r
          <Splitter.Panel defaultSize={20}>\r
            <PanelContent color="#6366f1">{t("story_splitter_panel_1", "Panel 1")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel defaultSize={60}>\r
            <PanelContent color="#8b5cf6">{t("story_splitter_panel_2", "Panel 2")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel defaultSize={20}>\r
            <PanelContent color="#ec4899">{t("story_splitter_panel_3", "Panel 3")}</PanelContent>\r
          </Splitter.Panel>\r
        </Splitter>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "600px",
      border: "1px solid var(--wim-color-border-subtle)"
    }}>\r
        <Splitter orientation="horizontal">\r
          <Splitter.Panel defaultSize={25}>\r
            <PanelContent color="#374151">{t("story_splitter_sidebar", "Sidebar")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel defaultSize={75}>\r
            <Splitter orientation="vertical">\r
              <Splitter.Panel defaultSize={70}>\r
                <PanelContent color="#1f2937">{t("story_splitter_main", "Main Content")}</PanelContent>\r
              </Splitter.Panel>\r
              <Splitter.Handle />\r
              <Splitter.Panel defaultSize={30}>\r
                <PanelContent color="#4b5563">{t("story_splitter_logs", "Console / Logs")}</PanelContent>\r
              </Splitter.Panel>\r
            </Splitter>\r
          </Splitter.Panel>\r
        </Splitter>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      height: "400px",
      border: "1px solid var(--wim-color-border-subtle)"
    }}>\r
        <Splitter orientation="horizontal">\r
          <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>\r
            <PanelContent color="#14b8a6">{t("story_splitter_minmax", "Min: 20%, Max: 50%")}</PanelContent>\r
          </Splitter.Panel>\r
          <Splitter.Handle />\r
          <Splitter.Panel>\r
            <PanelContent color="#06b6d4">{t("story_splitter_flexible", "Flexible Panel")}</PanelContent>\r
          </Splitter.Panel>\r
        </Splitter>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const ee=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],ie=Object.freeze(Object.defineProperty({__proto__:null,Constraints:j,Horizontal:b,MultiplePanels:v,Nested:y,Vertical:_,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{j as C,b as H,v as M,y as N,ie as S,_ as V};
