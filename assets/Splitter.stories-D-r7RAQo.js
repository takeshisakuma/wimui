import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as I,A as E}from"./iframe-9NEVSgmA.js";import{c as T}from"./index-D0BZ6LJb.js";import{u as b}from"./useTranslation-7ChDnO1a.js";const X=d.createContext(null),Z=()=>{const n=d.useContext(X);if(!n)throw new Error("Splitter components must be used within Splitter");return n},k=({orientation:n="horizontal",className:r,children:S,...m})=>{const p=d.useRef(null),[f,h]=d.useState([]),[o,R]=d.useState(null),a=I.Children.toArray(S),x=a.filter(l=>l.type&&l.type===A);d.useEffect(()=>{const l=x.map(c=>c.props.defaultSize??100/x.length),i=l.reduce((c,C)=>c+C,0);h(l.map(c=>c/i*100))},[x.length]);const Y=d.useCallback((l,i)=>{R(l),i.preventDefault()},[]),z=d.useCallback(l=>{if(o===null||!p.current)return;const i=p.current.getBoundingClientRect(),c=n==="horizontal"?i.width:i.height,C=n==="horizontal"?i.left:i.top,G=(("touches"in l?n==="horizontal"?l.touches[0].clientX:l.touches[0].clientY:n==="horizontal"?l.clientX:l.clientY)-C)/c*100;h(L=>{const H=[...L];let V=0;for(let N=0;N<o;N++)V+=L[N];const M=L[o]+L[o+1];let P=G-V;const B=x[o],q=x[o+1],J=B.props.minSize??0,Q=B.props.maxSize??100,F=q.props.minSize??0,U=q.props.maxSize??100;P=Math.max(J,Math.min(P,Q));let u=M-P;return u<F?(u=F,P=M-u):u>U&&(u=U,P=M-u),H[o]=P,H[o+1]=u,H})},[o,n,x]),v=d.useCallback(()=>{R(null)},[]);d.useEffect(()=>{if(o!==null)return window.addEventListener("mousemove",z),window.addEventListener("mouseup",v),window.addEventListener("touchmove",z,{passive:!1}),window.addEventListener("touchend",v),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",v),window.removeEventListener("touchmove",z),window.removeEventListener("touchend",v)}},[o,z,v]);let $=0,K=0;const W=a.map(l=>{if(l.type===A){const i=$++;return I.cloneElement(l,{size:f[i]})}if(l.type===D){const i=K++,c=Math.round(f.slice(0,i+1).reduce((C,O)=>C+O,0));return I.cloneElement(l,{index:i,active:o===i,"aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100})}return l});return e.jsx(X.Provider,{value:{orientation:n,onResizeStart:Y},children:e.jsx("div",{ref:p,className:T("wim-splitter",`wim-splitter--${n}`,o!==null&&"wim-splitter--resizing",r),...m,children:W})})},A=({defaultSize:n,minSize:r,maxSize:S,size:m,style:p,className:f,children:h,...o})=>e.jsx("div",{className:T("wim-splitter-panel",f),style:{...p,flex:m!==void 0?`0 0 ${m}%`:"1 1 0%"},tabIndex:0,...o,children:h});A.displayName="Splitter.Panel";const D=({index:n,active:r,className:S,ariaLabel:m,...p})=>{const{t:f}=b("common"),h=m??f("a11y.resize_panel"),{onResizeStart:o,orientation:R}=Z();return e.jsx("div",{role:"separator","aria-orientation":R,"aria-label":h,tabIndex:0,className:T("wim-splitter-handle",r&&"wim-splitter-handle--active",S),onMouseDown:a=>n!==void 0&&o(n,a),onTouchStart:a=>n!==void 0&&o(n,a),onKeyDown:a=>{(a.key==="ArrowLeft"||a.key==="ArrowUp"||a.key==="ArrowRight"||a.key==="ArrowDown")&&a.preventDefault()},...p})};D.displayName="Splitter.Handle";k.displayName="Splitter";const t=k;t.Panel=A;t.Handle=D;k.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const ee={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},s=({children:n,color:r,textColor:S="#000"})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:r,fontSize:"24px",fontWeight:"bold",color:S},children:n}),y={render:function(){const{t:r}=b(E);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(s,{color:"#3b82f6",children:r("story.splitter_left","Left Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(s,{color:"#10b981",children:r("story.splitter_right","Right Panel")})})]})})}},j={render:function(){const{t:r}=b(E);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(s,{color:"#ef4444",children:r("story.splitter_top","Top Panel")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(s,{color:"#f59e0b",children:r("story.splitter_bottom","Bottom Panel")})})]})})}},w={render:function(){const{t:r}=b(E);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(s,{color:"#6366f1",children:r("story.splitter_panel_1","Panel 1")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(s,{color:"#8b5cf6",children:r("story.splitter_panel_2","Panel 2")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(s,{color:"#ec4899",children:r("story.splitter_panel_3","Panel 3")})})]})})}},_={render:function(){const{t:r}=b(E);return e.jsx("div",{style:{height:"600px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(s,{color:"#374151",textColor:"#fff",children:r("story.splitter_sidebar","Sidebar")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(s,{color:"#1f2937",textColor:"#fff",children:r("story.splitter_main","Main Content")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(s,{color:"#4b5563",textColor:"#fff",children:r("story.splitter_logs","Console / Logs")})})]})})]})})}},g={render:function(){const{t:r}=b(E);return e.jsx("div",{style:{height:"400px",border:"1px solid",borderColor:"var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(s,{color:"#14b8a6",children:r("story.splitter_minmax","Min: 20%, Max: 50%")})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(s,{color:"#06b6d4",children:r("story.splitter_flexible","Flexible Panel")})})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            <PanelContent color="#3b82f6">{t("story.splitter_left", "Left Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={70}>
            <PanelContent color="#10b981">{t("story.splitter_right", "Right Panel")}</PanelContent>
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
      height: "400px",
      border: "1px solid",
      borderColor: "var(--wim-color-border-subtle)"
    }}>
        <Splitter orientation="vertical">
          <Splitter.Panel defaultSize={40}>
            <PanelContent color="#ef4444">{t("story.splitter_top", "Top Panel")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent color="#f59e0b">{t("story.splitter_bottom", "Bottom Panel")}</PanelContent>
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
          <Splitter.Panel defaultSize={20}>
            <PanelContent color="#6366f1">{t("story.splitter_panel_1", "Panel 1")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={60}>
            <PanelContent color="#8b5cf6">{t("story.splitter_panel_2", "Panel 2")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={20}>
            <PanelContent color="#ec4899">{t("story.splitter_panel_3", "Panel 3")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
            <PanelContent color="#374151" textColor="#fff">{t("story.splitter_sidebar", "Sidebar")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel defaultSize={75}>
            <Splitter orientation="vertical">
              <Splitter.Panel defaultSize={70}>
                <PanelContent color="#1f2937" textColor="#fff">{t("story.splitter_main", "Main Content")}</PanelContent>
              </Splitter.Panel>
              <Splitter.Handle />
              <Splitter.Panel defaultSize={30}>
                <PanelContent color="#4b5563" textColor="#fff">{t("story.splitter_logs", "Console / Logs")}</PanelContent>
              </Splitter.Panel>
            </Splitter>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
            <PanelContent color="#14b8a6">{t("story.splitter_minmax", "Min: 20%, Max: 50%")}</PanelContent>
          </Splitter.Panel>
          <Splitter.Handle />
          <Splitter.Panel>
            <PanelContent color="#06b6d4">{t("story.splitter_flexible", "Flexible Panel")}</PanelContent>
          </Splitter.Panel>
        </Splitter>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const te=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],ae=Object.freeze(Object.defineProperty({__proto__:null,Constraints:g,Horizontal:y,MultiplePanels:w,Nested:_,Vertical:j,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{g as C,y as H,w as M,_ as N,ae as S,j as V};
