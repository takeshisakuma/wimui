import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as M}from"./iframe-dDvr7adw.js";import{c as L}from"./index-CfHkw1yO.js";const A=a.createContext(null),K=()=>{const r=a.useContext(A);if(!r)throw new Error("Splitter components must be used within Splitter");return r},D=({orientation:r="horizontal",className:u,children:C,...S})=>{const s=a.useRef(null),[x,d]=a.useState([]),[l,_]=a.useState(null),T=M.Children.toArray(C),m=T.filter(n=>n.type&&n.type===y);a.useEffect(()=>{const n=m.map(c=>c.props.defaultSize??100/m.length),o=n.reduce((c,H)=>c+H,0);d(n.map(c=>c/o*100))},[m.length]);const F=a.useCallback((n,o)=>{_(n),o.preventDefault()},[]),X=n=>"touches"in n?r==="horizontal"?n.touches[0].clientX:n.touches[0].clientY:r==="horizontal"?n.clientX:n.clientY,P=a.useCallback(n=>{if(l===null||!s.current)return;const o=s.current.getBoundingClientRect(),c=r==="horizontal"?o.width:o.height,H=r==="horizontal"?o.left:o.top,W=(X(n)-H)/c*100;d(g=>{const R=[...g];let k=0;for(let I=0;I<l;I++)k+=g[I];const E=g[l]+g[l+1];let h=W-k;const O=m[l],V=m[l+1],G=O.props.minSize??0,J=O.props.maxSize??100,B=V.props.minSize??0,q=V.props.maxSize??100;h=Math.max(G,Math.min(h,J));let p=E-h;return p<B?(p=B,h=E-p):p>q&&(p=q,h=E-p),R[l]=h,R[l+1]=p,R})},[l,r,m]),f=a.useCallback(()=>{_(null)},[]);a.useEffect(()=>{if(l!==null)return window.addEventListener("mousemove",P),window.addEventListener("mouseup",f),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",f),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",f)}},[l,P,f]);let Y=0,$=0;const U=T.map(n=>{if(n.type===y){const o=Y++;return M.cloneElement(n,{size:x[o]})}if(n.type===N){const o=$++;return M.cloneElement(n,{index:o,active:l===o})}return n});return e.jsx(A.Provider,{value:{orientation:r,onResizeStart:F},children:e.jsx("div",{ref:s,className:L("wim-splitter",`wim-splitter--${r}`,l!==null&&"wim-splitter--resizing",u),...S,children:U})})},y=({defaultSize:r,minSize:u,maxSize:C,size:S,style:s,className:x,children:d,...l})=>e.jsx("div",{className:L("wim-splitter-panel",x),style:{...s,flex:S!==void 0?`0 0 ${S}%`:"1 1 0%"},...l,children:d});y.displayName="SplitterPanel";const N=({index:r,active:u,className:C,...S})=>{const{onResizeStart:s,orientation:x}=K();return e.jsx("div",{role:"separator","aria-orientation":x,"aria-label":"Resize panel",tabIndex:0,className:L("wim-splitter-handle",u&&"wim-splitter-handle--active",C),onMouseDown:d=>r!==void 0&&s(r,d),onTouchStart:d=>r!==void 0&&s(r,d),...S})};N.displayName="SplitterHandle";const t=D;t.Panel=y;t.Handle=N;D.__docgenInfo={description:`Splitter component that allows resizing of multiple panels.\r
Supports both mouse and touch events.`,methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const Q={title:"Component/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},i=({children:r,color:u})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:u,fontSize:"24px",fontWeight:"bold",color:"white"},children:r}),z={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#3b82f6",children:"Left Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#10b981",children:"Right Panel"})})]})})},v={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(i,{color:"#ef4444",children:"Top Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#f59e0b",children:"Bottom Panel"})})]})})},b={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#6366f1",children:"Panel 1"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#8b5cf6",children:"Panel 2"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#ec4899",children:"Panel 3"})})]})})},j={render:()=>e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(i,{color:"#374151",children:"Sidebar"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#1f2937",children:"Main Content"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#4b5563",children:"Console / Logs"})})]})})]})})},w={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(i,{color:"#14b8a6",children:"Min: 20%, Max: 50%"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(i,{color:"#06b6d4",children:"Flexible Panel"})})]})})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
                    <PanelContent color="#14b8a6">\r
                        Min: 20%, Max: 50%\r
                    </PanelContent>\r
                </Splitter.Panel>\r
                <Splitter.Handle />\r
                <Splitter.Panel>\r
                    <PanelContent color="#06b6d4">Flexible Panel</PanelContent>\r
                </Splitter.Panel>\r
            </Splitter>\r
        </div>
}`,...w.parameters?.docs?.source}}};const Z=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],le=Object.freeze(Object.defineProperty({__proto__:null,Constraints:w,Horizontal:z,MultiplePanels:b,Nested:j,Vertical:v,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{w as C,z as H,b as M,j as N,le as S,v as V};
