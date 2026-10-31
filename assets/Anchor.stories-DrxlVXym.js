"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./observeMove-COVas2UN.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=`_root_goe7f_2`,p=`_horizontal_goe7f_8`,m=`_ink_goe7f_13`,h=`_inkBall_goe7f_20`,g=`_list_goe7f_43`,_=`_item_goe7f_62`,v=`_link_goe7f_66`,y=`_active_goe7f_74`,b={root:f,horizontal:p,ink:m,inkBall:h,list:g,item:_,link:v,active:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=e(r(),1),C=e(l(),1),x(),d(),w=c(),T=({items:e=[],bounds:t=5,offset:n=0,direction:r=`vertical`,className:i,style:a,"aria-label":o,"aria-labelledby":s})=>{let[c,l]=(0,S.useState)(``),[d,f]=(0,S.useState)({}),p=(0,S.useRef)(null),m=(e,t)=>{e.preventDefault();let r=t.replace(`#`,``),i=document.getElementById(r);i&&(window.scrollTo({top:i.offsetTop-n,behavior:`smooth`}),l(t))};(0,S.useLayoutEffect)(()=>{let i=()=>{let i=(e,t)=>{let n=[];return e.forEach(e=>{n.push({href:e.href,parentHref:t}),e.children&&(n=n.concat(i(e.children,t||e.href)))}),n},a=i(e),o=``,s=window.scrollY||document.documentElement.scrollTop,u=document.documentElement.scrollHeight,d=document.documentElement.clientHeight;if(s>0&&Math.ceil(s+d)>=u&&a.length>0){let e=a[a.length-1];o=r===`horizontal`&&e.parentHref?e.parentHref:e.href}else for(let e of a){let i=e.href.replace(`#`,``),a=document.getElementById(i);if(a){if(a.getBoundingClientRect().top<=n+t)o=r===`horizontal`&&e.parentHref?e.parentHref:e.href;else break}}o&&o!==c&&l(o)};window.addEventListener(`scroll`,i),window.addEventListener(`resize`,i);let a=e=>e.flatMap(e=>[e.href,...e.children?a(e.children):[]]),o=a(e).map(e=>document.getElementById(e.replace(`#`,``))).filter(e=>e!==null).map(e=>u(e,i));return i(),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,i),o.forEach(e=>e())}},[e,n,t,c,r]);let h=(0,S.useCallback)(()=>{if(!c||!p.current)return;let e=p.current.querySelector(`a[href="${c}"]`);if(e){let t=p.current.getBoundingClientRect();if(r===`vertical`){let n=e.getBoundingClientRect();f({top:n.top-t.top,height:n.height,opacity:1})}else{let n=p.current.querySelector(`.${b.list}`);if(n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=r.left-i.left+n.scrollLeft,o=a-i.width/2+r.width/2,s=n.scrollWidth-i.width,c=Math.max(0,Math.min(o,s)),l=a-c+(i.left-t.left);f({left:l,width:r.width,opacity:1}),n.scrollTo({left:c,behavior:`smooth`})}else{let t=e.getBoundingClientRect();f({left:t.left-p.current.getBoundingClientRect().left,width:t.width,opacity:1})}}}else f({opacity:0})},[c,r]);(0,S.useLayoutEffect)(()=>{h()},[h]),(0,S.useEffect)(()=>{let e=p.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>h());return t.observe(e),e.querySelectorAll(`a`).forEach(e=>t.observe(e)),()=>t.disconnect()},[h,e]);let g=e=>(0,w.jsx)(`ul`,{className:(0,C.default)(b.list,b[r]),children:e.map(e=>(0,w.jsxs)(`li`,{className:(0,C.default)(b.item,c===e.href&&b.active),children:[(0,w.jsx)(`a`,{href:e.href,className:b.link,"aria-current":c===e.href?`location`:void 0,onClick:t=>m(t,e.href),title:typeof e.title==`string`?e.title:void 0,children:e.title}),e.children&&r===`vertical`&&g(e.children)]},e.key))});return(0,w.jsxs)(`div`,{className:(0,C.default)(`wim-anchor`,b.root,b[r],i),style:a,ref:p,role:o||s?`navigation`:void 0,"aria-label":s?void 0:o,"aria-labelledby":s,children:[(0,w.jsx)(`div`,{className:b.ink,children:(0,w.jsx)(`span`,{className:b.inkBall,style:d})}),g(e)]})},T.__docgenInfo={description:``,methods:[],displayName:`Anchor`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`AnchorLinkItem`}],raw:`AnchorLinkItem[]`},description:`Array of anchor link configurations`,defaultValue:{value:`[]`,computed:!1}},bounds:{required:!1,tsType:{name:`number`},description:`Bounding distance (in pixels) for triggering active state`,defaultValue:{value:`5`,computed:!1}},offset:{required:!1,tsType:{name:`number`},description:`Offset (in pixels) from top when clicking to scroll`,defaultValue:{value:`0`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Orientation of the anchor links`,defaultValue:{value:`"vertical"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name. When set, the anchor is exposed as a navigation landmark with this name.`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:"ID of the element that labels the anchor. Takes precedence over `aria-label`."}}}})))()}var D=n({Default:()=>j,__namedExportsOrder:()=>M,default:()=>A}),O,k,A,j,M;function N(){return(N=t((()=>{O=e(r(),1),a(),o(),E(),k=c(),A={title:`Components/Navigation Elements/Anchor`,component:T,parameters:{layout:`fullscreen`},tags:[]},j={render:e=>{let{t}=i(s),[n,r]=O.useState(!1),a=[{key:`part-1`,href:`#part-1`,title:t(`story.anchor_part1`)},{key:`part-2`,href:`#part-2`,title:t(`story.anchor_part2`),children:[{key:`part-2-1`,href:`#part-2-1`,title:t(`story.anchor_part2_1`)},{key:`part-2-2`,href:`#part-2-2`,title:t(`story.anchor_part2_2`)}]},{key:`part-3`,href:`#part-3`,title:t(`story.anchor_part3`)}];return O.useEffect(()=>{let e=()=>r(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:n?`column`:`row-reverse`,padding:n?`0`:`20px`,gap:n?`0`:`40px`,minHeight:`150vh`},children:[(0,k.jsx)(`div`,{style:{position:`sticky`,top:0,zIndex:100,width:n?`100%`:`200px`,flexShrink:0,background:`var(--wim-color-surface)`,backdropFilter:`blur(var(--wim-blur-glass))`,alignSelf:`flex-start`,padding:n?`0`:`20px 0`,borderBottom:n?`1px solid var(--wim-color-border)`:`none`},children:(0,k.jsx)(T,{...e,items:a,direction:n?`horizontal`:`vertical`,offset:n?60:e.offset})}),(0,k.jsxs)(`div`,{style:{flex:1,minWidth:0,padding:n?`20px`:0},children:[(0,k.jsxs)(`section`,{id:`part-1`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,k.jsx)(`h2`,{children:t(`story.anchor_part1`)}),(0,k.jsx)(`p`,{children:t(`story.anchor_scroll_msg`)})]}),(0,k.jsxs)(`section`,{id:`part-2`,style:{height:`1000px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,k.jsx)(`h2`,{children:t(`story.anchor_part2`)}),(0,k.jsx)(`div`,{id:`part-2-1`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,k.jsx)(`h3`,{children:t(`story.anchor_part2_1`)})}),(0,k.jsx)(`div`,{id:`part-2-2`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,k.jsx)(`h3`,{children:t(`story.anchor_part2_2`)})})]}),(0,k.jsx)(`section`,{id:`part-3`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`},children:(0,k.jsx)(`h2`,{children:t(`story.anchor_part3`)})})]})]})},args:{offset:20}},M=[`Default`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [isMobile, setIsMobile] = React.useState(false);
    const items = [{
      key: "part-1",
      href: "#part-1",
      title: t("story.anchor_part1")
    }, {
      key: "part-2",
      href: "#part-2",
      title: t("story.anchor_part2"),
      children: [{
        key: "part-2-1",
        href: "#part-2-1",
        title: t("story.anchor_part2_1")
      }, {
        key: "part-2-2",
        href: "#part-2-2",
        title: t("story.anchor_part2_2")
      }]
    }, {
      key: "part-3",
      href: "#part-3",
      title: t("story.anchor_part3")
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
        backdropFilter: "blur(var(--wim-blur-glass))",
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
            <h2>{t("story.anchor_part1")}</h2>
            <p>{t("story.anchor_scroll_msg")}</p>
          </section>
          <section id="part-2" style={{
          height: "1000px",
          background: "var(--wim-color-surface-variant)",
          padding: "20px",
          marginBottom: "20px"
        }}>
            <h2>{t("story.anchor_part2")}</h2>
            <div id="part-2-1" style={{
            height: "400px",
            border: "1px dashed var(--wim-color-border)",
            margin: "20px 0",
            padding: "10px"
          }}>
              <h3>{t("story.anchor_part2_1")}</h3>
            </div>
            <div id="part-2-2" style={{
            height: "400px",
            border: "1px dashed var(--wim-color-border)",
            margin: "20px 0",
            padding: "10px"
          }}>
              <h3>{t("story.anchor_part2_2")}</h3>
            </div>
          </section>
          <section id="part-3" style={{
          height: "600px",
          background: "var(--wim-color-surface-variant)",
          padding: "20px"
        }}>
            <h2>{t("story.anchor_part3")}</h2>
          </section>
        </div>
      </div>;
  },
  args: {
    offset: 20
  }
}`,...j.parameters?.docs?.source}}}})))()}export{j as n,N as r,D as t};