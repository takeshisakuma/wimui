import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s,R as M,A as g}from"./iframe-CIIG-mzz.js";import{c as N}from"./index-QbjQN0Z0.js";import{u as P}from"./useTranslation-BlkCzwGH.js";const U=s.createContext(null),ee=()=>{const r=s.useContext(U);if(!r)throw new Error("Splitter components must be used within Splitter");return r},X=({orientation:r="horizontal",className:l,children:S,...m})=>{const c=s.useRef(null),[p,f]=s.useState([]),[n,T]=s.useState(null),k=M.Children.toArray(S),h=k.filter(o=>o.type&&o.type===R);s.useEffect(()=>{const o=h.map(d=>d.props.defaultSize??100/h.length),i=o.reduce((d,_)=>d+_,0);f(o.map(d=>d/i*100))},[h.length]);const Y=s.useCallback((o,i)=>{T(o),i.preventDefault()},[]),$=o=>"touches"in o?r==="horizontal"?o.touches[0].clientX:o.touches[0].clientY:r==="horizontal"?o.clientX:o.clientY,b=s.useCallback(o=>{if(n===null||!c.current)return;const i=c.current.getBoundingClientRect(),d=r==="horizontal"?i.width:i.height,_=r==="horizontal"?i.left:i.top,J=($(o)-_)/d*100;f(E=>{const L=[...E];let O=0;for(let H=0;H<n;H++)O+=E[H];const A=E[n]+E[n+1];let x=J-O;const V=h[n],B=h[n+1],Q=V.props.minSize??0,Z=V.props.maxSize??100,q=B.props.minSize??0,F=B.props.maxSize??100;x=Math.max(Q,Math.min(x,Z));let u=A-x;return u<q?(u=q,x=A-u):u>F&&(u=F,x=A-u),L[n]=x,L[n+1]=u,L})},[n,r,h]),z=s.useCallback(()=>{T(null)},[]);s.useEffect(()=>{if(n!==null)return window.addEventListener("mousemove",b),window.addEventListener("mouseup",z),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",z),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",z),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",z)}},[n,b,z]);let K=0,W=0;const G=k.map(o=>{if(o.type===R){const i=K++;return M.cloneElement(o,{size:p[i]})}if(o.type===I){const i=W++,d=Math.round(p.slice(0,i+1).reduce((_,D)=>_+D,0));return M.cloneElement(o,{index:i,active:n===i,"aria-valuenow":d,"aria-valuemin":0,"aria-valuemax":100})}return o});return e.jsx(U.Provider,{value:{orientation:r,onResizeStart:Y},children:e.jsx("div",{ref:c,className:N("wim-splitter",`wim-splitter--${r}`,n!==null&&"wim-splitter--resizing",l),...m,children:G})})},R=({defaultSize:r,minSize:l,maxSize:S,size:m,style:c,className:p,children:f,...n})=>e.jsx("div",{className:N("wim-splitter-panel",p),style:{...c,flex:m!==void 0?`0 0 ${m}%`:"1 1 0%"},tabIndex:0,...n,children:f});R.displayName="SplitterPanel";const I=({index:r,active:l,className:S,...m})=>{const{t:c}=P(),{onResizeStart:p,orientation:f}=ee();return e.jsx("div",{role:"separator","aria-orientation":f,"aria-label":c("a11y_resize_panel"),tabIndex:0,className:N("wim-splitter-handle",l&&"wim-splitter-handle--active",S),onMouseDown:n=>r!==void 0&&p(r,n),onTouchStart:n=>r!==void 0&&p(r,n),onKeyDown:n=>{(n.key==="ArrowLeft"||n.key==="ArrowUp"||n.key==="ArrowRight"||n.key==="ArrowDown")&&n.preventDefault()},...m})};I.displayName="SplitterHandle";const t=X;t.Panel=R;t.Handle=I;X.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const te={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},a=({children:r,color:l,textColor:S="#000"})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:l,fontSize:"24px",fontWeight:"bold",color:S},children:r}),v={render:function(){const{t:l}=P(g);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(a,{color:"#3b82f6",children:l("story_splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(a,{color:"#10b981",children:l("story_splitter_right","Right Panel")})})]})})}},C={render:function(){const{t:l}=P(g);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(a,{color:"#ef4444",children:l("story_splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(a,{color:"#f59e0b",children:l("story_splitter_bottom","Bottom Panel")})})]})})}},y={render:function(){const{t:l}=P(g);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(a,{color:"#6366f1",children:l("story_splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(a,{color:"#8b5cf6",children:l("story_splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(a,{color:"#ec4899",children:l("story_splitter_panel_3","Panel 3")})})]})})}},j={render:function(){const{t:l}=P(g);return e.jsx("div",{style:{height:"600px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(a,{color:"#374151",textColor:"#fff",children:l("story_splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(a,{color:"#1f2937",textColor:"#fff",children:l("story_splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(a,{color:"#4b5563",textColor:"#fff",children:l("story_splitter_logs","Console / Logs")})})]})})]})})}},w={render:function(){const{t:l}=P(g);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(a,{color:"#14b8a6",children:l("story_splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(a,{color:"#06b6d4",children:l("story_splitter_flexible","Flexible Panel")})})]})})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={30}>
            <PanelContent color="#3b82f6">{t("story_splitter_left", "Left Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={70}>
            <PanelContent color="#10b981">{t("story_splitter_right", "Right Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="vertical">
          <Splitter.Panel defaultSize={40}>
            <PanelContent color="#ef4444">{t("story_splitter_top", "Top Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent color="#f59e0b">{t("story_splitter_bottom", "Bottom Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={20}>
            <PanelContent color="#6366f1">{t("story_splitter_panel_1", "Panel 1")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent color="#8b5cf6">{t("story_splitter_panel_2", "Panel 2")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={20}>
            <PanelContent color="#ec4899">{t("story_splitter_panel_3", "Panel 3")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "600px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="horizontal">
          <Splitter.Panel defaultSize={25}>
            <PanelContent color="#374151" textColor="#fff">{t("story_splitter_sidebar", "Sidebar")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={75}>
            <Splitter orientation="vertical">
              <Splitter.Panel defaultSize={70}>
                <PanelContent color="#1f2937" textColor="#fff">{t("story_splitter_main", "Main Content")}</PanelContent>
              </Splitter.Panel>
              <Splitter.Handle />
              <Splitter.Panel defaultSize={30}>
                <PanelContent color="#4b5563" textColor="#fff">{t("story_splitter_logs", "Console / Logs")}</PanelContent>
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="horizontal">
          <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>
            <PanelContent color="#14b8a6">{t("story_splitter_minmax", "Min: 20%, Max: 50%")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel>
            <PanelContent color="#06b6d4">{t("story_splitter_flexible", "Flexible Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};const ne=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],ae=Object.freeze(Object.defineProperty({__proto__:null,Constraints:w,Horizontal:v,MultiplePanels:y,Nested:j,Vertical:C,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{w as C,v as H,y as M,j as N,ae as S,C as V};
