import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as M}from"./iframe-BMhI-kZV.js";import{c as I}from"./index-C9C6tVju.js";const B=a.createContext(null),J=()=>{const l=a.useContext(B);if(!l)throw new Error("Splitter components must be used within Splitter");return l},q=({orientation:l="horizontal",className:p,children:j,...u})=>{const s=a.useRef(null),[h,v]=a.useState([]),[n,N]=a.useState(null),E=M.Children.toArray(j),S=E.filter(r=>r.type?.displayName==="SplitterPanel");a.useEffect(()=>{const r=S.map(d=>d.props.defaultSize??100/S.length),o=r.reduce((d,L)=>d+L,0);v(r.map(d=>d/o*100))},[S.length]);const F=a.useCallback((r,o)=>{N(r),o.preventDefault()},[]),g=a.useCallback(r=>{if(n===null||!s.current)return;const o=s.current.getBoundingClientRect(),d=l==="horizontal"?o.width:o.height,X=(l==="horizontal"?r.clientX-o.left:r.clientY-o.top)/d*100;v(C=>{const y=[...C];let _=0;for(let R=0;R<n;R++)_+=C[R];const H=C[n]+C[n+1];let m=X-_;const T=S[n],k=S[n+1],Y=T.props.minSize??0,G=T.props.maxSize??100,O=k.props.minSize??0,V=k.props.maxSize??100;m=Math.max(Y,Math.min(m,G));let c=H-m;return c<O?(c=O,m=H-c):c>V&&(c=V,m=H-c),y[n]=m,y[n+1]=c,y})},[n,l,S]),w=a.useCallback(()=>{N(null)},[]);a.useEffect(()=>{if(n!==null)return window.addEventListener("mousemove",g),window.addEventListener("mouseup",w),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",w)}},[n,g,w]);let U=0,$=0;const W=E.map(r=>{if(r.type?.displayName==="SplitterPanel"){const o=U++;return M.cloneElement(r,{size:h[o]})}if(r.type?.displayName==="SplitterHandle"){const o=$++;return M.cloneElement(r,{index:o,active:n===o})}return r});return e.jsx(B.Provider,{value:{orientation:l,onResizeStart:F},children:e.jsx("div",{ref:s,className:I("wim-splitter",`wim-splitter--${l}`,n!==null&&"wim-splitter--resizing",p),...u,children:W})})},A=({defaultSize:l,minSize:p,maxSize:j,size:u,style:s,className:h,children:v,...n})=>e.jsx("div",{className:I("wim-splitter-panel",h),style:{...s,flex:u!==void 0?`0 0 ${u}%`:"1 1 0%"},...n,children:v});A.displayName="SplitterPanel";const D=({index:l,active:p,className:j,...u})=>{const{onResizeStart:s}=J();return e.jsx("div",{className:I("wim-splitter-handle",p&&"wim-splitter-handle--active",j),onMouseDown:h=>l!==void 0&&s(l,h),...u})};D.displayName="SplitterHandle";const t=q;t.Panel=A;t.Handle=D;q.__docgenInfo={description:"Splitter component that allows resizing of multiple panels.",methods:[],displayName:"Splitter",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"The orientation of the splitter.",defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`."}}};const K={title:"Component/Layout/Splitter",component:t,parameters:{layout:"fullscreen"}},i=({children:l,color:p})=>e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:p,fontSize:"24px",fontWeight:"bold",color:"white"},children:l}),x={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#3b82f6",children:"Left Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#10b981",children:"Right Panel"})})]})})},P={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:40,children:e.jsx(i,{color:"#ef4444",children:"Top Panel"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#f59e0b",children:"Bottom Panel"})})]})})},f={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#6366f1",children:"Panel 1"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:60,children:e.jsx(i,{color:"#8b5cf6",children:"Panel 2"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:20,children:e.jsx(i,{color:"#ec4899",children:"Panel 3"})})]})})},z={render:()=>e.jsx("div",{style:{height:"600px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{defaultSize:25,children:e.jsx(i,{color:"#374151",children:"Sidebar"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:75,children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(t.Panel,{defaultSize:70,children:e.jsx(i,{color:"#1f2937",children:"Main Content"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{defaultSize:30,children:e.jsx(i,{color:"#4b5563",children:"Console / Logs"})})]})})]})})},b={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid var(--wim-color-border-subtle)"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(t.Panel,{minSize:20,maxSize:50,defaultSize:30,children:e.jsx(i,{color:"#14b8a6",children:"Min: 20%, Max: 50%"})}),e.jsx(t.Handle,{}),e.jsx(t.Panel,{children:e.jsx(i,{color:"#06b6d4",children:"Flexible Panel"})})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Q=["Horizontal","Vertical","MultiplePanels","Nested","Constraints"],ne=Object.freeze(Object.defineProperty({__proto__:null,Constraints:b,Horizontal:x,MultiplePanels:f,Nested:z,Vertical:P,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{b as C,x as H,f as M,z as N,ne as S,P as V};
