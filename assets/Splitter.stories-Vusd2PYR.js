import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as M}from"./iframe-Db58Vw-8.js";import{c as L}from"./index-DP8HKhHy.js";import{u as K}from"./useTranslation-DTvl2rTp.js";const A=a.createContext(null),Q=()=>{const l=a.useContext(A);if(!l)throw new Error("Splitter components must be used within Splitter");return l},D=({orientation:l="horizontal",className:p,children:C,...u})=>{const s=a.useRef(null),[S,m]=a.useState([]),[r,N]=a.useState(null),T=M.Children.toArray(C),h=T.filter(n=>n.type&&n.type===y);a.useEffect(()=>{const n=h.map(d=>d.props.defaultSize??100/h.length),o=n.reduce((d,H)=>d+H,0);m(n.map(d=>d/o*100))},[h.length]);const F=a.useCallback((n,o)=>{N(n),o.preventDefault()},[]),X=n=>"touches"in n?l==="horizontal"?n.touches[0].clientX:n.touches[0].clientY:l==="horizontal"?n.clientX:n.clientY,P=a.useCallback(n=>{if(r===null||!s.current)return;const o=s.current.getBoundingClientRect(),d=l==="horizontal"?o.width:o.height,H=l==="horizontal"?o.left:o.top,W=(X(n)-H)/d*100;m(g=>{const E=[...g];let k=0;for(let I=0;I<r;I++)k+=g[I];const R=g[r]+g[r+1];let x=W-k;const O=h[r],V=h[r+1],G=O.props.minSize??0,J=O.props.maxSize??100,B=V.props.minSize??0,q=V.props.maxSize??100;x=Math.max(G,Math.min(x,J));let c=R-x;return c<B?(c=B,x=R-c):c>q&&(c=q,x=R-c),E[r]=x,E[r+1]=c,E})},[r,l,h]),f=a.useCallback(()=>{N(null)},[]);a.useEffect(()=>{if(r!==null)return window.addEventListener("mousemove",P),window.addEventListener("mouseup",f),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",f),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",f)}},[r,P,f]);let Y=0,$=0;const U=T.map(n=>{if(n.type===y){const o=Y++;return M.cloneElement(n,{size:S[o]})}if(n.type===_){const o=$++;return M.cloneElement(n,{index:o,active:r===o})}return n});return e.jsx(A.Provider,{value:{orientation:l,onResizeStart:F},children:e.jsx("div",{ref:s,className:L("wim-splitter",`wim-splitter--${l}`,r!==null&&"wim-splitter--resizing",p),...u,children:U})})},y=({defaultSize:l,minSize:p,maxSize:C,size:u,style:s,className:S,children:m,...r})=>e.jsx("div",{className:L("wim-splitter-panel",S),style:{...s,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...r,children:m});y.displayName="SplitterPanel";const _=({index:l,active:p,className:C,...u})=>{const{t:s}=K(),{onResizeStart:S,orientation:m}=Q();return e.jsx("div",{role:"separator","aria-orientation":m,"aria-label":s("a11y_resize_panel"),tabIndex:0,className:L("wim-splitter-handle",p&&"wim-splitter-handle--active",C),onMouseDown:r=>l!==void 0&&S(l,r),onTouchStart:r=>l!==void 0&&S(l,r),...u})};_.displayName="SplitterHandle";const t=D;t.Panel=y;t.Handle=_;D.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const Z={title:"Components/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},i=({children:l,color:p})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:p,fontSize:"24px",fontWeight:"bold",color:"white"},children:l}),z={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#3b82f6",children:"Left Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#10b981",children:"Right Panel"})})]})})},v={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(i,{color:"#ef4444",children:"Top Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#f59e0b",children:"Bottom Panel"})})]})})},b={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#6366f1",children:"Panel 1"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#8b5cf6",children:"Panel 2"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#ec4899",children:"Panel 3"})})]})})},j={render:()=>e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(i,{color:"#374151",children:"Sidebar"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#1f2937",children:"Main Content"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#4b5563",children:"Console / Logs"})})]})})]})})},w={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(i,{color:"#14b8a6",children:"Min: 20%, Max: 50%"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(i,{color:"#06b6d4",children:"Flexible Panel"})})]})})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "400px",
    border: "1px solid var(--wim-color-border-subtle)"
  }}>\r
      <Splitter orientation="horizontal">\r
        <Splitter.Panel defaultSize={30}>\r
          <PanelContent color="#3b82f6">Left Panel</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel defaultSize={70}>\r
          <PanelContent color="#10b981">Right Panel</PanelContent>\r
        </Splitter.Panel>\r
      </Splitter>\r
    </div>
}`,...z.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "400px",
    border: "1px solid var(--wim-color-border-subtle)"
  }}>\r
      <Splitter orientation="vertical">\r
        <Splitter.Panel defaultSize={40}>\r
          <PanelContent color="#ef4444">Top Panel</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel defaultSize={60}>\r
          <PanelContent color="#f59e0b">Bottom Panel</PanelContent>\r
        </Splitter.Panel>\r
      </Splitter>\r
    </div>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "400px",
    border: "1px solid var(--wim-color-border-subtle)"
  }}>\r
      <Splitter orientation="horizontal">\r
        <Splitter.Panel defaultSize={20}>\r
          <PanelContent color="#6366f1">Panel 1</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel defaultSize={60}>\r
          <PanelContent color="#8b5cf6">Panel 2</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel defaultSize={20}>\r
          <PanelContent color="#ec4899">Panel 3</PanelContent>\r
        </Splitter.Panel>\r
      </Splitter>\r
    </div>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "600px",
    border: "1px solid var(--wim-color-border-subtle)"
  }}>\r
      <Splitter orientation="horizontal">\r
        <Splitter.Panel defaultSize={25}>\r
          <PanelContent color="#374151">Sidebar</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel defaultSize={75}>\r
          <Splitter orientation="vertical">\r
            <Splitter.Panel defaultSize={70}>\r
              <PanelContent color="#1f2937">Main Content</PanelContent>\r
            </Splitter.Panel>\r
            <Splitter.Handle />\r
            <Splitter.Panel defaultSize={30}>\r
              <PanelContent color="#4b5563">Console / Logs</PanelContent>\r
            </Splitter.Panel>\r
          </Splitter>\r
        </Splitter.Panel>\r
      </Splitter>\r
    </div>
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "400px",
    border: "1px solid var(--wim-color-border-subtle)"
  }}>\r
      <Splitter orientation="horizontal">\r
        <Splitter.Panel minSize={20} maxSize={50} defaultSize={30}>\r
          <PanelContent color="#14b8a6">Min: 20%, Max: 50%</PanelContent>\r
        </Splitter.Panel>\r
        <Splitter.Handle />\r
        <Splitter.Panel>\r
          <PanelContent color="#06b6d4">Flexible Panel</PanelContent>\r
        </Splitter.Panel>\r
      </Splitter>\r
    </div>
}`,...w.parameters?.docs?.source}}};const ee=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],ie=Object.freeze(Object.defineProperty({__proto__:null,Constraints:w,Horizontal:z,MultiplePanels:b,Nested:j,Vertical:v,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{w as C,z as H,b as M,j as N,ie as S,v as V};
