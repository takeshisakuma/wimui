import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as S}from"./iframe-BO-ghgqI.js";import{c as v}from"./index-BDJ3dKw4.js";const y=({items:p=[],bounds:i=5,offset:f=0,direction:s="vertical",className:j,style:_})=>{const[h,b]=m.useState(""),[M,g]=m.useState({}),u=m.useRef(null),C=(o,t)=>{o.preventDefault();const r=t.replace("#",""),n=document.getElementById(r);n&&(window.scrollTo({top:n.offsetTop-f,behavior:"smooth"}),b(t))};m.useEffect(()=>{const o=()=>{const t=(a,c)=>{let l=[];return a.forEach(d=>{l.push({href:d.href,parentHref:c}),d.children&&(l=l.concat(t(d.children,c||d.href)))}),l},r=t(p);let n="";for(const a of r){const c=a.href.replace("#",""),l=document.getElementById(c);if(l)if(l.getBoundingClientRect().top<=f+i)s==="horizontal"&&a.parentHref?n=a.parentHref:n=a.href;else break}n&&n!==h&&b(n)};return window.addEventListener("scroll",o),o(),()=>window.removeEventListener("scroll",o)},[p,f,i,h,s]),m.useEffect(()=>{if(!h||!u.current)return;const o=u.current.querySelector(`a[href="${h}"]`);if(o){const t=u.current.getBoundingClientRect();if(s==="vertical"){const r=o.getBoundingClientRect();g({top:r.top-t.top,height:r.height,opacity:1})}else{const r=u.current.querySelector(".wim-anchor__list");if(r){const n=o.getBoundingClientRect(),a=r.getBoundingClientRect(),c=n.left-a.left+r.scrollLeft,l=c-a.width/2+n.width/2,d=r.scrollWidth-a.width,k=Math.max(0,Math.min(l,d)),R=c-k+(a.left-t.left);g({left:R,width:n.width,opacity:1}),r.scrollTo({left:k,behavior:"smooth"})}else{const n=o.getBoundingClientRect();g({left:n.left-t.left,width:n.width,opacity:1})}}}else g({opacity:0})},[h,s]);const w=o=>e.jsx("ul",{className:v("wim-anchor__list",`wim-anchor__list--${s}`),children:o.map(t=>e.jsxs("li",{className:v("wim-anchor__item",h===t.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:t.href,className:"wim-anchor__link",onClick:r=>C(r,t.href),title:typeof t.title=="string"?t.title:void 0,children:t.title}),t.children&&s==="vertical"&&w(t.children)]},t.key))});return e.jsxs("div",{className:v("wim-anchor",`wim-anchor--${s}`,j),style:_,ref:u,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:M})}),w(p)]})};y.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of the anchor links",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const A={title:"Component/Navigation Elements/Anchor",component:y,parameters:{layout:"fullscreen"},tags:[]},E=[{key:"part-1",href:"#part-1",title:"Part 1: Introduction"},{key:"part-2",href:"#part-2",title:"Part 2: Features",children:[{key:"part-2-1",href:"#part-2-1",title:"Core Functionality"},{key:"part-2-2",href:"#part-2-2",title:"Advanced Options"}]},{key:"part-3",href:"#part-3",title:"Part 3: Conclusion"}],x={args:{items:E,offset:20},render:p=>{const[i,f]=S.useState(!1);return S.useEffect(()=>{const s=()=>f(window.innerWidth<768);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:i?"column":"row-reverse",padding:i?"0":"20px",gap:i?"0":"40px",minHeight:"150vh"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:100,width:i?"100%":"200px",flexShrink:0,background:"rgba(255, 255, 255, 1)",backdropFilter:"blur(8px)",alignSelf:"flex-start",padding:i?"0":"20px 0",borderBottom:i?"1px solid #eee":"none"},children:e.jsx(y,{...p,direction:i?"horizontal":"vertical",offset:i?60:p.offset})}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:i?"20px":0},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 1: Introduction"}),e.jsx("p",{children:"Scroll down to see the anchor in action."})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 2: Features"}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Core Functionality"})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Advanced Options"})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:"Part 3: Conclusion"})})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    offset: 20
  },
  render: args => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row-reverse",
      padding: isMobile ? "0" : "20px",
      gap: isMobile ? "0" : "40px",
      minHeight: "150vh"
    }}>\r
                <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: isMobile ? "100%" : "200px",
        flexShrink: 0,
        background: "rgba(255, 255, 255, 1)",
        backdropFilter: "blur(8px)",
        alignSelf: "flex-start",
        padding: isMobile ? "0" : "20px 0",
        borderBottom: isMobile ? "1px solid #eee" : "none"
      }}>\r
                    <Anchor {...args} direction={isMobile ? "horizontal" : "vertical"} offset={isMobile ? 60 : args.offset} />\r
                </div>\r
                <div style={{
        flex: 1,
        minWidth: 0,
        padding: isMobile ? "20px" : 0
      }}>\r
                    <section id="part-1" style={{
          height: "600px",
          background: "#f0f2f5",
          padding: "20px",
          marginBottom: "20px"
        }}>\r
                        <h2>Part 1: Introduction</h2>\r
                        <p>Scroll down to see the anchor in action.</p>\r
                    </section>\r
                    <section id="part-2" style={{
          height: "1000px",
          background: "#f9f9f9",
          padding: "20px",
          marginBottom: "20px"
        }}>\r
                        <h2>Part 2: Features</h2>\r
                        <div id="part-2-1" style={{
            height: "400px",
            border: "1px dashed #ccc",
            margin: "20px 0",
            padding: "10px"
          }}>\r
                            <h3>Core Functionality</h3>\r
                        </div>\r
                        <div id="part-2-2" style={{
            height: "400px",
            border: "1px dashed #ccc",
            margin: "20px 0",
            padding: "10px"
          }}>\r
                            <h3>Advanced Options</h3>\r
                        </div>\r
                    </section>\r
                    <section id="part-3" style={{
          height: "600px",
          background: "#f0f2f5",
          padding: "20px"
        }}>\r
                        <h2>Part 3: Conclusion</h2>\r
                    </section>\r
                </div>\r
            </div>;
  }
}`,...x.parameters?.docs?.source}}};const I=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:x,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{P as A,x as D};
