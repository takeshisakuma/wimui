import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f,R as w}from"./iframe-Dq24M1Fk.js";import{c as v}from"./index-Dq8OH074.js";const y=({items:l=[],bounds:t=5,offset:p=0,direction:r="vertical",className:j,style:S})=>{const[c,b]=f.useState(""),[_,g]=f.useState({}),x=f.useRef(null),M=(i,n)=>{i.preventDefault();const o=n.replace("#",""),s=document.getElementById(o);s&&(window.scrollTo({top:s.offsetTop-p,behavior:"smooth"}),b(n))};f.useEffect(()=>{const i=()=>{const n=(d,m)=>{let a=[];return d.forEach(h=>{a.push({href:h.href,parentHref:m}),h.children&&(a=a.concat(n(h.children,m||h.href)))}),a},o=n(l);let s="";for(const d of o){const m=d.href.replace("#",""),a=document.getElementById(m);if(a)if(a.getBoundingClientRect().top<=p+t)r==="horizontal"&&d.parentHref?s=d.parentHref:s=d.href;else break}s&&s!==c&&b(s)};return window.addEventListener("scroll",i),i(),()=>window.removeEventListener("scroll",i)},[l,p,t,c,r]),f.useEffect(()=>{if(!c||!x.current)return;const i=x.current.querySelector(`a[href="${c}"]`);if(i){const n=i.getBoundingClientRect(),o=x.current.getBoundingClientRect();g(r==="vertical"?{top:n.top-o.top,height:n.height,opacity:1}:{left:n.left-o.left,width:n.width,opacity:1})}else g({opacity:0})},[c,r]);const k=i=>e.jsx("ul",{className:v("wim-anchor__list",`wim-anchor__list--${r}`),children:i.map(n=>e.jsxs("li",{className:v("wim-anchor__item",c===n.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:n.href,className:"wim-anchor__link",onClick:o=>M(o,n.href),title:typeof n.title=="string"?n.title:void 0,children:n.title}),n.children&&r==="vertical"&&k(n.children)]},n.key))});return e.jsxs("div",{className:v("wim-anchor",`wim-anchor--${r}`,j),style:S,ref:x,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:_})}),k(l)]})};y.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of the anchor links",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const A={title:"Component/Navigation Elements/Anchor",component:y,parameters:{layout:"fullscreen"},tags:[]},E=[{key:"part-1",href:"#part-1",title:"Part 1: Introduction"},{key:"part-2",href:"#part-2",title:"Part 2: Features",children:[{key:"part-2-1",href:"#part-2-1",title:"Core Functionality"},{key:"part-2-2",href:"#part-2-2",title:"Advanced Options"}]},{key:"part-3",href:"#part-3",title:"Part 3: Conclusion"}],u={args:{items:E,offset:20},render:l=>{const[t,p]=w.useState(!1);return w.useEffect(()=>{const r=()=>p(window.innerWidth<768);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:t?"column":"row-reverse",padding:t?"0":"20px",gap:t?"0":"40px",minHeight:"150vh"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:100,width:t?"100%":"200px",flexShrink:0,background:"rgba(255, 255, 255, 1)",backdropFilter:"blur(8px)",alignSelf:"flex-start",padding:t?"0":"20px 0",borderBottom:t?"1px solid #eee":"none"},children:e.jsx(y,{...l,direction:t?"horizontal":"vertical",offset:t?60:l.offset})}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:t?"20px":0},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 1: Introduction"}),e.jsx("p",{children:"Scroll down to see the anchor in action."})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 2: Features"}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Core Functionality"})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Advanced Options"})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:"Part 3: Conclusion"})})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const I=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{B as A,u as D};
