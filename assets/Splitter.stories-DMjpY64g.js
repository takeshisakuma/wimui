import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as M}from"./iframe-DYlShzji.js";import{c as T}from"./index-Cm_IZiCA.js";import{u as x}from"./useTranslation-DygSvNPf.js";const D=a.createContext(null),Q=()=>{const n=a.useContext(D);if(!n)throw new Error("Splitter components must be used within Splitter");return n},F=({orientation:n="horizontal",className:o,children:j,...u})=>{const c=a.useRef(null),[m,_]=a.useState([]),[s,N]=a.useState(null),k=M.Children.toArray(j),S=k.filter(r=>r.type&&r.type===C);a.useEffect(()=>{const r=S.map(d=>d.props.defaultSize??100/S.length),l=r.reduce((d,R)=>d+R,0);_(r.map(d=>d/l*100))},[S.length]);const X=a.useCallback((r,l)=>{N(r),l.preventDefault()},[]),Y=r=>"touches"in r?n==="horizontal"?r.touches[0].clientX:r.touches[0].clientY:n==="horizontal"?r.clientX:r.clientY,P=a.useCallback(r=>{if(s===null||!c.current)return;const l=c.current.getBoundingClientRect(),d=n==="horizontal"?l.width:l.height,R=n==="horizontal"?l.left:l.top,G=(Y(r)-R)/d*100;_(w=>{const H=[...w];let O=0;for(let I=0;I<s;I++)O+=w[I];const E=w[s]+w[s+1];let h=G-O;const V=S[s],B=S[s+1],J=V.props.minSize??0,K=V.props.maxSize??100,q=B.props.minSize??0,A=B.props.maxSize??100;h=Math.max(J,Math.min(h,K));let p=E-h;return p<q?(p=q,h=E-p):p>A&&(p=A,h=E-p),H[s]=h,H[s+1]=p,H})},[s,n,S]),f=a.useCallback(()=>{N(null)},[]);a.useEffect(()=>{if(s!==null)return window.addEventListener("mousemove",P),window.addEventListener("mouseup",f),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",f),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",f)}},[s,P,f]);let $=0,U=0;const W=k.map(r=>{if(r.type===C){const l=$++;return M.cloneElement(r,{size:m[l]})}if(r.type===L){const l=U++;return M.cloneElement(r,{index:l,active:s===l})}return r});return e.jsx(D.Provider,{value:{orientation:n,onResizeStart:X},children:e.jsx("div",{ref:c,className:T("wim-splitter",`wim-splitter--${n}`,s!==null&&"wim-splitter--resizing",o),...u,children:W})})},C=({defaultSize:n,minSize:o,maxSize:j,size:u,style:c,className:m,children:_,...s})=>e.jsx("div",{className:T("wim-splitter-panel",m),style:{...c,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...s,children:_});C.displayName="SplitterPanel";const L=({index:n,active:o,className:j,...u})=>{const{t:c}=x(),{onResizeStart:m,orientation:_}=Q();return e.jsx("div",{role:"separator","aria-orientation":_,"aria-label":c("a11y_resize_panel"),tabIndex:0,className:T("wim-splitter-handle",o&&"wim-splitter-handle--active",j),onMouseDown:s=>n!==void 0&&m(n,s),onTouchStart:s=>n!==void 0&&m(n,s),...u})};L.displayName="SplitterHandle";const t=F;t.Panel=C;t.Handle=L;F.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const Z={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},i=({children:n,color:o})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:o,fontSize:"24px",fontWeight:"bold",color:"white"},children:n}),y={render:function(){const{t:o}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#3b82f6",children:o("story_splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#10b981",children:o("story_splitter_right","Right Panel")})})]})})}},v={render:function(){const{t:o}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(i,{color:"#ef4444",children:o("story_splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#f59e0b",children:o("story_splitter_bottom","Bottom Panel")})})]})})}},z={render:function(){const{t:o}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#6366f1",children:o("story_splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#8b5cf6",children:o("story_splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#ec4899",children:o("story_splitter_panel_3","Panel 3")})})]})})}},b={render:function(){const{t:o}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(i,{color:"#374151",children:o("story_splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#1f2937",children:o("story_splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#4b5563",children:o("story_splitter_logs","Console / Logs")})})]})})]})})}},g={render:function(){const{t:o}=x(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(i,{color:"#14b8a6",children:o("story_splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(i,{color:"#06b6d4",children:o("story_splitter_flexible","Flexible Panel")})})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
