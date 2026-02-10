import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DkKouYTS.js";import{P as t}from"./index-0gwFuz90.js";const f=({items:o=[],bounds:x=5,offset:u=0,className:j,style:k})=>{const[a,g]=c.useState(""),[b,y]=c.useState({}),m=c.useRef(null),w=(r,n)=>{r.preventDefault();const d=n.replace("#",""),i=document.getElementById(d);i&&(window.scrollTo({top:i.offsetTop-u,behavior:"smooth"}),g(n))};c.useEffect(()=>{const r=()=>{const n=p=>{let s=[];return p.forEach(h=>{s.push(h.href.replace("#","")),h.children&&(s=s.concat(n(h.children)))}),s},d=n(o);let i="";for(const p of d){const s=document.getElementById(p);if(s)if(s.getBoundingClientRect().top<=u+x+10)i=`#${p}`;else break}i&&i!==a&&g(i)};return window.addEventListener("scroll",r),r(),()=>window.removeEventListener("scroll",r)},[o,u,x,a]),c.useEffect(()=>{if(!a||!m.current)return;const r=m.current.querySelector(`a[href="${a}"]`);y(r?{top:r.offsetTop,height:r.offsetHeight,opacity:1}:{opacity:0})},[a]);const v=r=>e.jsx("ul",{className:"wim-anchor__list",children:r.map(n=>e.jsxs("li",{className:["wim-anchor__item",a===n.href?"wim-anchor__item--active":""].filter(Boolean).join(" "),children:[e.jsx("a",{href:n.href,className:"wim-anchor__link",onClick:d=>w(d,n.href),title:typeof n.title=="string"?n.title:void 0,children:n.title}),n.children&&v(n.children)]},n.key))});return e.jsxs("div",{className:["wim-anchor",j].filter(Boolean).join(" "),style:k,ref:m,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:b})}),v(o)]})};f.propTypes={items:t.arrayOf(t.shape({key:t.string.isRequired,href:t.string.isRequired,title:t.node.isRequired,children:t.array})).isRequired,bounds:t.number,offset:t.number,className:t.string,style:t.object};f.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{key:{name:"string",required:!0},href:{name:"string",required:!0},title:{name:"node",required:!0},children:{name:"array",required:!1}}}}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1},type:{name:"number"}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1},type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute",type:{name:"object"}}}};const _={title:"Component/Navigation/Anchor",component:f,parameters:{layout:"fullscreen"},tags:[]},A=[{key:"part-1",href:"#part-1",title:"Part 1: Introduction"},{key:"part-2",href:"#part-2",title:"Part 2: Features",children:[{key:"part-2-1",href:"#part-2-1",title:"Core Functionality"},{key:"part-2-2",href:"#part-2-2",title:"Advanced Options"}]},{key:"part-3",href:"#part-3",title:"Part 3: Conclusion"}],l={args:{items:A,offset:20},render:o=>e.jsxs("div",{style:{display:"flex",padding:"20px"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 1: Introduction"}),e.jsx("p",{children:"Scroll down to see the anchor in action."})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:"Part 2: Features"}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Core Functionality"})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:"Advanced Options"})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:"Part 3: Conclusion"})})]}),e.jsx("div",{style:{width:"200px",marginLeft:"40px"},children:e.jsx("div",{style:{position:"sticky",top:"20px"},children:e.jsx(f,{...o})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{I as A,l as D};
