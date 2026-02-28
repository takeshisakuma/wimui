import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g,R as _}from"./iframe-CWdbcN92.js";import{c as w}from"./index-vtw7FrBa.js";const k=({items:d=[],bounds:o=5,offset:f=0,direction:s="vertical",className:E,style:A})=>{const[p,S]=g.useState(""),[C,v]=g.useState({}),u=g.useRef(null),R=(l,t)=>{l.preventDefault();const n=t.replace("#",""),r=document.getElementById(n);r&&(window.scrollTo({top:r.offsetTop-f,behavior:"smooth"}),S(t))};g.useEffect(()=>{const l=()=>{const t=(i,h)=>{let c=[];return i.forEach(m=>{c.push({href:m.href,parentHref:h}),m.children&&(c=c.concat(t(m.children,h||m.href)))}),c},n=t(d);let r="";const a=window.scrollY||document.documentElement.scrollTop,y=document.documentElement.scrollHeight,b=document.documentElement.clientHeight;if(a>0&&Math.ceil(a+b)>=y&&n.length>0){const i=n[n.length-1];s==="horizontal"&&i.parentHref?r=i.parentHref:r=i.href}else for(const i of n){const h=i.href.replace("#",""),c=document.getElementById(h);if(c)if(c.getBoundingClientRect().top<=f+o)s==="horizontal"&&i.parentHref?r=i.parentHref:r=i.href;else break}r&&r!==p&&S(r)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[d,f,o,p,s]),g.useEffect(()=>{if(!p||!u.current)return;const l=u.current.querySelector(`a[href="${p}"]`);if(l){const t=u.current.getBoundingClientRect();if(s==="vertical"){const n=l.getBoundingClientRect();v({top:n.top-t.top,height:n.height,opacity:1})}else{const n=u.current.querySelector(".wim-anchor__list");if(n){const r=l.getBoundingClientRect(),a=n.getBoundingClientRect(),y=r.left-a.left+n.scrollLeft,b=y-a.width/2+r.width/2,M=n.scrollWidth-a.width,i=Math.max(0,Math.min(b,M)),h=y-i+(a.left-t.left);v({left:h,width:r.width,opacity:1}),n.scrollTo({left:i,behavior:"smooth"})}else{const r=l.getBoundingClientRect();v({left:r.left-t.left,width:r.width,opacity:1})}}}else v({opacity:0})},[p,s]);const j=l=>e.jsx("ul",{className:w("wim-anchor__list",`wim-anchor__list--${s}`),children:l.map(t=>e.jsxs("li",{className:w("wim-anchor__item",p===t.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:t.href,className:"wim-anchor__link",onClick:n=>R(n,t.href),title:typeof t.title=="string"?t.title:void 0,children:t.title}),t.children&&s==="vertical"&&j(t.children)]},t.key))});return e.jsxs("div",{className:w("wim-anchor",`wim-anchor--${s}`,E),style:A,ref:u,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:C})}),j(d)]})};k.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of the anchor links",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const B={title:"Components/Navigation Elements/Anchor",component:k,parameters:{layout:"fullscreen"},tags:[]},I=[{key:"part-1",href:"#part-1",title:"Part 1: Introduction"},{key:"part-2",href:"#part-2",title:"Part 2: Features",children:[{key:"part-2-1",href:"#part-2-1",title:"Core Functionality"},{key:"part-2-2",href:"#part-2-2",title:"Advanced Options"}]},{key:"part-3",href:"#part-3",title:"Part 3: Conclusion"}],x={args:{items:I,offset:20},render:d=>{const[o,f]=_.useState(!1);return _.useEffect(()=>{const s=()=>f(window.innerWidth<768);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:o?"column":"row-reverse",padding:o?"0":"20px",gap:o?"0":"40px",minHeight:"150vh"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:100,width:o?"100%":"200px",flexShrink:0,background:"rgba(255, 255, 255, 1)",backdropFilter:"blur(8px)",alignSelf:"flex-start",padding:o?"0":"20px 0",borderBottom:o?"1px solid #eee":"none"},children:e.jsx(k,{...d,direction:o?"horizontal":"vertical",offset:o?60:d.offset})}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:o?"20px":0},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 1: Introduction"}),e.jsx("p",{children:"Scroll down to see the anchor in action."})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 2: Features"}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Core Functionality"})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Advanced Options"})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:"Part 3: Conclusion"})})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const L=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:x,__namedExportsOrder:L,default:B},Symbol.toStringTag,{value:"Module"}));export{N as A,x as D};
