import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as L}from"./iframe-CxkJglxX.js";import{c as M}from"./index-DuEzwbhC.js";import{u as x}from"./useTranslation-0fSK9VPD.js";const q=a.createContext(null),Q=()=>{const o=a.useContext(q);if(!o)throw new Error("Splitter components must be used within Splitter");return o},F=({orientation:o="horizontal",className:r,children:j,...u})=>{const c=a.useRef(null),[m,_]=a.useState([]),[n,N]=a.useState(null),k=L.Children.toArray(j),S=k.filter(s=>s.type&&s.type===C);a.useEffect(()=>{const s=S.map(d=>d.props.defaultSize??100/S.length),l=s.reduce((d,R)=>d+R,0);_(s.map(d=>d/l*100))},[S.length]);const U=a.useCallback((s,l)=>{N(s),l.preventDefault()},[]),X=s=>"touches"in s?o==="horizontal"?s.touches[0].clientX:s.touches[0].clientY:o==="horizontal"?s.clientX:s.clientY,f=a.useCallback(s=>{if(n===null||!c.current)return;const l=c.current.getBoundingClientRect(),d=o==="horizontal"?l.width:l.height,R=o==="horizontal"?l.left:l.top,W=(X(s)-R)/d*100;_(w=>{const H=[...w];let A=0;for(let I=0;I<n;I++)A+=w[I];const E=w[n]+w[n+1];let h=W-A;const D=S[n],O=S[n+1],G=D.props.minSize??0,J=D.props.maxSize??100,V=O.props.minSize??0,B=O.props.maxSize??100;h=Math.max(G,Math.min(h,J));let p=E-h;return p<V?(p=V,h=E-p):p>B&&(p=B,h=E-p),H[n]=h,H[n+1]=p,H})},[n,o,S]),P=a.useCallback(()=>{N(null)},[]);a.useEffect(()=>{if(n!==null)return window.addEventListener("mousemove",f),window.addEventListener("mouseup",P),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",P),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",P),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",P)}},[n,f,P]);let Y=0,$=0;const K=k.map(s=>{if(s.type===C){const l=Y++;return L.cloneElement(s,{size:m[l]})}if(s.type===T){const l=$++;return L.cloneElement(s,{index:l,active:n===l})}return s});return e.jsx(q.Provider,{value:{orientation:o,onResizeStart:U},children:e.jsx("div",{ref:c,className:M("wim-splitter",`wim-splitter--${o}`,n!==null&&"wim-splitter--resizing",r),...u,children:K})})},C=({defaultSize:o,minSize:r,maxSize:j,size:u,style:c,className:m,children:_,...n})=>e.jsx("div",{className:M("wim-splitter-panel",m),style:{...c,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...n,children:_});C.displayName="SplitterPanel";const T=({index:o,active:r,className:j,...u})=>{const{t:c}=x(),{onResizeStart:m,orientation:_}=Q();return e.jsx("div",{role:"separator","aria-orientation":_,"aria-label":c("a11y_resize_panel"),tabIndex:0,className:M("wim-splitter-handle",r&&"wim-splitter-handle--active",j),onMouseDown:n=>o!==void 0&&m(o,n),onTouchStart:n=>o!==void 0&&m(o,n),onKeyDown:n=>{(n.key==="ArrowLeft"||n.key==="ArrowUp"||n.key==="ArrowRight"||n.key==="ArrowDown")&&n.preventDefault()},...u})};T.displayName="SplitterHandle";const t=F;t.Panel=C;t.Handle=T;F.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const Z={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},i=({children:o,color:r})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:r,fontSize:"24px",fontWeight:"bold",color:"white"},children:o}),y={render:function(){const{t:r}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#3b82f6",children:r("story_splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#10b981",children:r("story_splitter_right","Right Panel")})})]})})}},v={render:function(){const{t:r}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(i,{color:"#ef4444",children:r("story_splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#f59e0b",children:r("story_splitter_bottom","Bottom Panel")})})]})})}},z={render:function(){const{t:r}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#6366f1",children:r("story_splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#8b5cf6",children:r("story_splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#ec4899",children:r("story_splitter_panel_3","Panel 3")})})]})})}},b={render:function(){const{t:r}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(i,{color:"#374151",children:r("story_splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#1f2937",children:r("story_splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#4b5563",children:r("story_splitter_logs","Console / Logs")})})]})})]})})}},g={render:function(){const{t:r}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(i,{color:"#14b8a6",children:r("story_splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(i,{color:"#06b6d4",children:r("story_splitter_flexible","Flexible Panel")})})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...z.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};const ee=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],le=Object.freeze(Object.defineProperty({__proto__:null,Constraints:g,Horizontal:y,MultiplePanels:z,Nested:b,Vertical:v,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as C,y as H,z as M,b as N,le as S,v as V};
