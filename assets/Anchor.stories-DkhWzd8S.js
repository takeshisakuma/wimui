import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-f4BvNpCj.js";import{c as v}from"./index-uXtM2pJ9.js";const u=({items:a=[],bounds:x=5,offset:h=0,className:j,style:k})=>{const[s,m]=c.useState(""),[w,g]=c.useState({}),f=c.useRef(null),_=(t,n)=>{t.preventDefault();const o=n.replace("#",""),r=document.getElementById(o);r&&(window.scrollTo({top:r.offsetTop-h,behavior:"smooth"}),m(n))};c.useEffect(()=>{const t=()=>{const n=l=>{let i=[];return l.forEach(p=>{i.push(p.href.replace("#","")),p.children&&(i=i.concat(n(p.children)))}),i},o=n(a);let r="";for(const l of o){const i=document.getElementById(l);if(i)if(i.getBoundingClientRect().top<=h+x+10)r=`#${l}`;else break}r&&r!==s&&m(r)};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[a,h,x,s]),c.useEffect(()=>{if(!s||!f.current)return;const t=f.current.querySelector(`a[href="${s}"]`);g(t?{top:t.offsetTop,height:t.offsetHeight,opacity:1}:{opacity:0})},[s]);const y=t=>e.jsx("ul",{className:"wim-anchor__list",children:t.map(n=>e.jsxs("li",{className:v("wim-anchor__item",s===n.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:n.href,className:"wim-anchor__link",onClick:o=>_(o,n.href),title:typeof n.title=="string"?n.title:void 0,children:n.title}),n.children&&y(n.children)]},n.key))});return e.jsxs("div",{className:v("wim-anchor",j),style:k,ref:f,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:w})}),y(a)]})};u.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const b={title:"Component/Navigation/Anchor",component:u,parameters:{layout:"fullscreen"},tags:[]},A=[{key:"part-1",href:"#part-1",title:"Part 1: Introduction"},{key:"part-2",href:"#part-2",title:"Part 2: Features",children:[{key:"part-2-1",href:"#part-2-1",title:"Core Functionality"},{key:"part-2-2",href:"#part-2-2",title:"Advanced Options"}]},{key:"part-3",href:"#part-3",title:"Part 3: Conclusion"}],d={args:{items:A,offset:20},render:a=>e.jsxs("div",{style:{display:"flex",padding:"20px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 1: Introduction"}),e.jsx("p",{children:"Scroll down to see the anchor in action."})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 2: Features"}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Core Functionality"})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Advanced Options"})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:"Part 3: Conclusion"})})]}),e.jsx("div",{style:{width:"200px",marginLeft:"40px"},children:e.jsx("div",{style:{position:"sticky",top:"20px"},children:e.jsx(u,{...a})})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    offset: 20
  },
  render: args => <div style={{
    display: "flex",
    padding: "20px"
  }}>\r
            <div style={{
      flex: 1
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
            <div style={{
      width: "200px",
      marginLeft: "40px"
    }}>\r
                <div style={{
        position: "sticky",
        top: "20px"
      }}>\r
                    <Anchor {...args} />\r
                </div>\r
            </div>\r
        </div>
}`,...d.parameters?.docs?.source}}};const S=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{E as A,d as D};
