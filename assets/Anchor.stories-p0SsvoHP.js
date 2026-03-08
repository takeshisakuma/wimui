import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x,R}from"./iframe-D-INtma0.js";import{c as w}from"./index-BYKyH6Np.js";import{u as L}from"./useTranslation-gsjwUuWZ.js";const j=({items:p=[],bounds:i=5,offset:o=0,direction:c="vertical",className:b,style:m})=>{const[h,S]=x.useState(""),[B,_]=x.useState({}),u=x.useRef(null),A=(a,t)=>{a.preventDefault();const n=t.replace("#",""),r=document.getElementById(n);r&&(window.scrollTo({top:r.offsetTop-o,behavior:"smooth"}),S(t))};x.useEffect(()=>{const a=()=>{const t=(s,f)=>{let d=[];return s.forEach(g=>{d.push({href:g.href,parentHref:f}),g.children&&(d=d.concat(t(g.children,f||g.href)))}),d},n=t(p);let r="";const l=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.scrollHeight,k=document.documentElement.clientHeight;if(l>0&&Math.ceil(l+k)>=v&&n.length>0){const s=n[n.length-1];c==="horizontal"&&s.parentHref?r=s.parentHref:r=s.href}else for(const s of n){const f=s.href.replace("#",""),d=document.getElementById(f);if(d)if(d.getBoundingClientRect().top<=o+i)c==="horizontal"&&s.parentHref?r=s.parentHref:r=s.href;else break}r&&r!==h&&S(r)};return window.addEventListener("scroll",a),a(),()=>window.removeEventListener("scroll",a)},[p,o,i,h,c]),x.useEffect(()=>{if(!h||!u.current)return;const a=u.current.querySelector(`a[href="${h}"]`);if(a){const t=u.current.getBoundingClientRect();if(c==="vertical"){const n=a.getBoundingClientRect();_({top:n.top-t.top,height:n.height,opacity:1})}else{const n=u.current.querySelector(".wim-anchor__list");if(n){const r=a.getBoundingClientRect(),l=n.getBoundingClientRect(),v=r.left-l.left+n.scrollLeft,k=v-l.width/2+r.width/2,E=n.scrollWidth-l.width,s=Math.max(0,Math.min(k,E)),f=v-s+(l.left-t.left);_({left:f,width:r.width,opacity:1}),n.scrollTo({left:s,behavior:"smooth"})}else{const r=a.getBoundingClientRect();_({left:r.left-t.left,width:r.width,opacity:1})}}}else _({opacity:0})},[h,c]);const M=a=>e.jsx("ul",{className:w("wim-anchor__list",`wim-anchor__list--${c}`),children:a.map(t=>e.jsxs("li",{className:w("wim-anchor__item",h===t.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:t.href,className:"wim-anchor__link",onClick:n=>A(n,t.href),title:typeof t.title=="string"?t.title:void 0,children:t.title}),t.children&&c==="vertical"&&M(t.children)]},t.key))});return e.jsxs("div",{className:w("wim-anchor",`wim-anchor--${c}`,b),style:m,ref:u,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:B})}),M(p)]})};j.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of the anchor links",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const T={title:"Components/Navigation Elements/Anchor",component:j,parameters:{layout:"fullscreen"},tags:[]},y={render:p=>{const{t:i}=L(["docs","common","components"]),[o,c]=R.useState(!1),b=[{key:"part-1",href:"#part-1",title:i("story_anchor_part1")},{key:"part-2",href:"#part-2",title:i("story_anchor_part2"),children:[{key:"part-2-1",href:"#part-2-1",title:i("story_anchor_part2_1")},{key:"part-2-2",href:"#part-2-2",title:i("story_anchor_part2_2")}]},{key:"part-3",href:"#part-3",title:i("story_anchor_part3")}];return R.useEffect(()=>{const m=()=>c(window.innerWidth<768);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:o?"column":"row-reverse",padding:o?"0":"20px",gap:o?"0":"40px",minHeight:"150vh"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:100,width:o?"100%":"200px",flexShrink:0,background:"rgba(255, 255, 255, 1)",backdropFilter:"blur(8px)",alignSelf:"flex-start",padding:o?"0":"20px 0",borderBottom:o?"1px solid #eee":"none"},children:e.jsx(j,{...p,items:b,direction:o?"horizontal":"vertical",offset:o?60:p.offset})}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:o?"20px":0},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"#f0f2f5",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:i("story_anchor_part1")}),e.jsx("p",{children:i("story_anchor_scroll_msg")})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"#f9f9f9",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:i("story_anchor_part2")}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:i("story_anchor_part2_1")})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed #ccc",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:i("story_anchor_part2_2")})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"#f0f2f5",padding:"20px"},children:e.jsx("h2",{children:i("story_anchor_part3")})})]})]})},args:{offset:20}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [isMobile, setIsMobile] = React.useState(false);
    const items = [{
      key: "part-1",
      href: "#part-1",
      title: t("story_anchor_part1")
    }, {
      key: "part-2",
      href: "#part-2",
      title: t("story_anchor_part2"),
      children: [{
        key: "part-2-1",
        href: "#part-2-1",
        title: t("story_anchor_part2_1")
      }, {
        key: "part-2-2",
        href: "#part-2-2",
        title: t("story_anchor_part2_2")
      }]
    }, {
      key: "part-3",
      href: "#part-3",
      title: t("story_anchor_part3")
    }];
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
          <Anchor {...args} items={items} direction={isMobile ? "horizontal" : "vertical"} offset={isMobile ? 60 : args.offset} />\r
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
            <h2>{t("story_anchor_part1")}</h2>\r
            <p>{t("story_anchor_scroll_msg")}</p>\r
          </section>\r
          <section id="part-2" style={{
          height: "1000px",
          background: "#f9f9f9",
          padding: "20px",
          marginBottom: "20px"
        }}>\r
            <h2>{t("story_anchor_part2")}</h2>\r
            <div id="part-2-1" style={{
            height: "400px",
            border: "1px dashed #ccc",
            margin: "20px 0",
            padding: "10px"
          }}>\r
              <h3>{t("story_anchor_part2_1")}</h3>\r
            </div>\r
            <div id="part-2-2" style={{
            height: "400px",
            border: "1px dashed #ccc",
            margin: "20px 0",
            padding: "10px"
          }}>\r
              <h3>{t("story_anchor_part2_2")}</h3>\r
            </div>\r
          </section>\r
          <section id="part-3" style={{
          height: "600px",
          background: "#f0f2f5",
          padding: "20px"
        }}>\r
            <h2>{t("story_anchor_part3")}</h2>\r
          </section>\r
        </div>\r
      </div>;
  },
  args: {
    offset: 20
  }
}`,...y.parameters?.docs?.source}}};const z=["Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:y,__namedExportsOrder:z,default:T},Symbol.toStringTag,{value:"Module"}));export{q as A,y as D};
