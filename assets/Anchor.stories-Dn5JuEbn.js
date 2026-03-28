import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x,R as A,A as B}from"./iframe-DhNyLLHC.js";import{c as k}from"./index-C7Nj9VOz.js";import{u as T}from"./useTranslation-OwuDKqc3.js";const S=({items:p=[],bounds:o=5,offset:i=0,direction:l="vertical",className:w,style:m})=>{const[h,M]=x.useState(""),[L,y]=x.useState({}),u=x.useRef(null),R=(s,t)=>{s.preventDefault();const r=t.replace("#",""),n=document.getElementById(r);n&&(window.scrollTo({top:n.offsetTop-i,behavior:"smooth"}),M(t))};x.useEffect(()=>{const s=()=>{const t=(a,f)=>{let d=[];return a.forEach(g=>{d.push({href:g.href,parentHref:f}),g.children&&(d=d.concat(t(g.children,f||g.href)))}),d},r=t(p);let n="";const c=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.scrollHeight,b=document.documentElement.clientHeight;if(c>0&&Math.ceil(c+b)>=v&&r.length>0){const a=r[r.length-1];l==="horizontal"&&a.parentHref?n=a.parentHref:n=a.href}else for(const a of r){const f=a.href.replace("#",""),d=document.getElementById(f);if(d)if(d.getBoundingClientRect().top<=i+o)l==="horizontal"&&a.parentHref?n=a.parentHref:n=a.href;else break}n&&n!==h&&M(n)};return window.addEventListener("scroll",s),s(),()=>window.removeEventListener("scroll",s)},[p,i,o,h,l]),x.useEffect(()=>{if(!h||!u.current)return;const s=u.current.querySelector(`a[href="${h}"]`);if(s){const t=u.current.getBoundingClientRect();if(l==="vertical"){const r=s.getBoundingClientRect();y({top:r.top-t.top,height:r.height,opacity:1})}else{const r=u.current.querySelector(".wim-anchor__list");if(r){const n=s.getBoundingClientRect(),c=r.getBoundingClientRect(),v=n.left-c.left+r.scrollLeft,b=v-c.width/2+n.width/2,E=r.scrollWidth-c.width,a=Math.max(0,Math.min(b,E)),f=v-a+(c.left-t.left);y({left:f,width:n.width,opacity:1}),r.scrollTo({left:a,behavior:"smooth"})}else{const n=s.getBoundingClientRect();y({left:n.left-t.left,width:n.width,opacity:1})}}}else y({opacity:0})},[h,l]);const j=s=>e.jsx("ul",{className:k("wim-anchor__list",`wim-anchor__list--${l}`),children:s.map(t=>e.jsxs("li",{className:k("wim-anchor__item",h===t.href&&"wim-anchor__item--active"),children:[e.jsx("a",{href:t.href,className:"wim-anchor__link",onClick:r=>R(r,t.href),title:typeof t.title=="string"?t.title:void 0,children:t.title}),t.children&&l==="vertical"&&j(t.children)]},t.key))});return e.jsxs("div",{className:k("wim-anchor",`wim-anchor--${l}`,w),style:m,ref:u,children:[e.jsx("div",{className:"wim-anchor__ink",children:e.jsx("span",{className:"wim-anchor__ink-ball",style:L})}),j(p)]})};S.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"Array of anchor link configurations",defaultValue:{value:"[]",computed:!1}},bounds:{required:!1,tsType:{name:"number"},description:"Bounding distance (in pixels) for triggering active state",defaultValue:{value:"5",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset (in pixels) from top when clicking to scroll",defaultValue:{value:"0",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Orientation of the anchor links",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style attribute"}}};const C={title:"Components/Navigation Elements/Anchor",component:S,parameters:{layout:"fullscreen"},tags:[]},_={render:p=>{const{t:o}=T(B),[i,l]=A.useState(!1),w=[{key:"part-1",href:"#part-1",title:o("story_anchor_part1")},{key:"part-2",href:"#part-2",title:o("story_anchor_part2"),children:[{key:"part-2-1",href:"#part-2-1",title:o("story_anchor_part2_1")},{key:"part-2-2",href:"#part-2-2",title:o("story_anchor_part2_2")}]},{key:"part-3",href:"#part-3",title:o("story_anchor_part3")}];return A.useEffect(()=>{const m=()=>l(window.innerWidth<768);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:i?"column":"row-reverse",padding:i?"0":"20px",gap:i?"0":"40px",minHeight:"150vh"},children:[e.jsx("div",{style:{position:"sticky",top:0,zIndex:100,width:i?"100%":"200px",flexShrink:0,background:"var(--wim-color-surface)",backdropFilter:"blur(8px)",alignSelf:"flex-start",padding:i?"0":"20px 0",borderBottom:i?"1px solid var(--wim-color-border)":"none"},children:e.jsx(S,{...p,items:w,direction:i?"horizontal":"vertical",offset:i?60:p.offset})}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:i?"20px":0},children:[e.jsxs("section",{id:"part-1",style:{height:"600px",background:"var(--wim-color-surface-variant)",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:o("story_anchor_part1")}),e.jsx("p",{children:o("story_anchor_scroll_msg")})]}),e.jsxs("section",{id:"part-2",style:{height:"1000px",background:"var(--wim-color-surface-variant)",padding:"20px",marginBottom:"20px"},children:[e.jsx("h2",{children:o("story_anchor_part2")}),e.jsx("div",{id:"part-2-1",style:{height:"400px",border:"1px dashed var(--wim-color-border)",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:o("story_anchor_part2_1")})}),e.jsx("div",{id:"part-2-2",style:{height:"400px",border:"1px dashed var(--wim-color-border)",margin:"20px 0",padding:"10px"},children:e.jsx("h3",{children:o("story_anchor_part2_2")})})]}),e.jsx("section",{id:"part-3",style:{height:"600px",background:"var(--wim-color-surface-variant)",padding:"20px"},children:e.jsx("h2",{children:o("story_anchor_part3")})})]})]})},args:{offset:20}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    }}>
        <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: isMobile ? "100%" : "200px",
        flexShrink: 0,
        background: "var(--wim-color-surface)",
        backdropFilter: "blur(8px)",
        alignSelf: "flex-start",
        padding: isMobile ? "0" : "20px 0",
        borderBottom: isMobile ? "1px solid var(--wim-color-border)" : "none"
      }}>
          <Anchor {...args} items={items} direction={isMobile ? "horizontal" : "vertical"} offset={isMobile ? 60 : args.offset} />
        </div>
        <div style={{
        flex: 1,
        minWidth: 0,
        padding: isMobile ? "20px" : 0
      }}>
          <section id="part-1" style={{
          height: "600px",
          background: "var(--wim-color-surface-variant)",
          padding: "20px",
          marginBottom: "20px"
        }}>
            <h2>{t("story_anchor_part1")}</h2>
            <p>{t("story_anchor_scroll_msg")}</p>
          </section>
          <section id="part-2" style={{
          height: "1000px",
          background: "var(--wim-color-surface-variant)",
          padding: "20px",
          marginBottom: "20px"
        }}>
            <h2>{t("story_anchor_part2")}</h2>
            <div id="part-2-1" style={{
            height: "400px",
            border: "1px dashed var(--wim-color-border)",
            margin: "20px 0",
            padding: "10px"
          }}>
              <h3>{t("story_anchor_part2_1")}</h3>
            </div>
            <div id="part-2-2" style={{
            height: "400px",
            border: "1px dashed var(--wim-color-border)",
            margin: "20px 0",
            padding: "10px"
          }}>
              <h3>{t("story_anchor_part2_2")}</h3>
            </div>
          </section>
          <section id="part-3" style={{
          height: "600px",
          background: "var(--wim-color-surface-variant)",
          padding: "20px"
        }}>
            <h2>{t("story_anchor_part3")}</h2>
          </section>
        </div>
      </div>;
  },
  args: {
    offset: 20
  }
}`,..._.parameters?.docs?.source}}};const z=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:_,__namedExportsOrder:z,default:C},Symbol.toStringTag,{value:"Module"}));export{D as A,_ as D};
