import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s,R as M}from"./iframe-83F82oTe.js";import{c as N}from"./index-zfnUGBBN.js";import{u as x}from"./useTranslation-CgRV5_0i.js";import{A as w}from"./i18nConstants-BpHxieg5.js";const F=s.createContext(null),Z=()=>{const r=s.useContext(F);if(!r)throw new Error("Splitter components must be used within Splitter");return r},U=({orientation:r="horizontal",className:l,children:C,...u})=>{const c=s.useRef(null),[S,m]=s.useState([]),[n,T]=s.useState(null),k=M.Children.toArray(C),h=k.filter(o=>o.type&&o.type===E);s.useEffect(()=>{const o=h.map(d=>d.props.defaultSize??100/h.length),i=o.reduce((d,R)=>d+R,0);m(o.map(d=>d/i*100))},[h.length]);const X=s.useCallback((o,i)=>{T(o),i.preventDefault()},[]),Y=o=>"touches"in o?r==="horizontal"?o.touches[0].clientX:o.touches[0].clientY:r==="horizontal"?o.clientX:o.clientY,f=s.useCallback(o=>{if(n===null||!c.current)return;const i=c.current.getBoundingClientRect(),d=r==="horizontal"?i.width:i.height,R=r==="horizontal"?i.left:i.top,G=(Y(o)-R)/d*100;m(g=>{const L=[...g];let D=0;for(let H=0;H<n;H++)D+=g[H];const A=g[n]+g[n+1];let P=G-D;const O=h[n],V=h[n+1],J=O.props.minSize??0,Q=O.props.maxSize??100,B=V.props.minSize??0,q=V.props.maxSize??100;P=Math.max(J,Math.min(P,Q));let p=A-P;return p<B?(p=B,P=A-p):p>q&&(p=q,P=A-p),L[n]=P,L[n+1]=p,L})},[n,r,h]),z=s.useCallback(()=>{T(null)},[]);s.useEffect(()=>{if(n!==null)return window.addEventListener("mousemove",f),window.addEventListener("mouseup",z),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",z),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",z),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",z)}},[n,f,z]);let $=0,K=0;const W=k.map(o=>{if(o.type===E){const i=$++;return M.cloneElement(o,{size:S[i]})}if(o.type===I){const i=K++;return M.cloneElement(o,{index:i,active:n===i})}return o});return e.jsx(F.Provider,{value:{orientation:r,onResizeStart:X},children:e.jsx("div",{ref:c,className:N("wim-splitter",`wim-splitter--${r}`,n!==null&&"wim-splitter--resizing",l),...u,children:W})})},E=({defaultSize:r,minSize:l,maxSize:C,size:u,style:c,className:S,children:m,...n})=>e.jsx("div",{className:N("wim-splitter-panel",S),style:{...c,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...n,children:m});E.displayName="SplitterPanel";const I=({index:r,active:l,className:C,...u})=>{const{t:c}=x(),{onResizeStart:S,orientation:m}=Z();return e.jsx("div",{role:"separator","aria-orientation":m,"aria-label":c("a11y_resize_panel"),tabIndex:0,className:N("wim-splitter-handle",l&&"wim-splitter-handle--active",C),onMouseDown:n=>r!==void 0&&S(r,n),onTouchStart:n=>r!==void 0&&S(r,n),onKeyDown:n=>{(n.key==="ArrowLeft"||n.key==="ArrowUp"||n.key==="ArrowRight"||n.key==="ArrowDown")&&n.preventDefault()},...u})};I.displayName="SplitterHandle";const t=U;t.Panel=E;t.Handle=I;U.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const ee={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},a=({children:r,color:l})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:l,fontSize:"24px",fontWeight:"bold",color:"white"},children:r}),_={render:function(){const{t:l}=x(w);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(a,{color:"#3b82f6",children:l("story_splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(a,{color:"#10b981",children:l("story_splitter_right","Right Panel")})})]})})}},b={render:function(){const{t:l}=x(w);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(a,{color:"#ef4444",children:l("story_splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(a,{color:"#f59e0b",children:l("story_splitter_bottom","Bottom Panel")})})]})})}},v={render:function(){const{t:l}=x(w);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(a,{color:"#6366f1",children:l("story_splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(a,{color:"#8b5cf6",children:l("story_splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(a,{color:"#ec4899",children:l("story_splitter_panel_3","Panel 3")})})]})})}},y={render:function(){const{t:l}=x(w);return e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(a,{color:"#374151",children:l("story_splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(a,{color:"#1f2937",children:l("story_splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(a,{color:"#4b5563",children:l("story_splitter_logs","Console / Logs")})})]})})]})})}},j={render:function(){const{t:l}=x(w);return e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(a,{color:"#14b8a6",children:l("story_splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(a,{color:"#06b6d4",children:l("story_splitter_flexible","Flexible Panel")})})]})})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
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
}`,...j.parameters?.docs?.source}}};const te=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],se=Object.freeze(Object.defineProperty({__proto__:null,Constraints:j,Horizontal:_,MultiplePanels:v,Nested:y,Vertical:b,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{j as C,_ as H,v as M,y as N,se as S,b as V};
