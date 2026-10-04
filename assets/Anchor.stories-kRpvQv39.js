"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{u=`_root_goe7f_2`,d=`_horizontal_goe7f_8`,f=`_ink_goe7f_13`,p=`_inkBall_goe7f_20`,m=`_list_goe7f_43`,h=`_item_goe7f_62`,g=`_link_goe7f_66`,_=`_active_goe7f_74`,v={root:u,horizontal:d,ink:f,inkBall:p,list:m,item:h,link:g,active:_}})))()}var b,x,S,C;function w(){return(w=t((()=>{b=e(r(),1),x=e(l(),1),y(),S=c(),C=({items:e=[],bounds:t=5,offset:n=0,direction:r=`vertical`,className:i,style:a})=>{let[o,s]=(0,b.useState)(``),[c,l]=(0,b.useState)({}),u=(0,b.useRef)(null),d=(e,t)=>{e.preventDefault();let r=t.replace(`#`,``),i=document.getElementById(r);i&&(window.scrollTo({top:i.offsetTop-n,behavior:`smooth`}),s(t))};(0,b.useLayoutEffect)(()=>{let i=()=>{let i=(e,t)=>{let n=[];return e.forEach(e=>{n.push({href:e.href,parentHref:t}),e.children&&(n=n.concat(i(e.children,t||e.href)))}),n},a=i(e),c=``,l=window.scrollY||document.documentElement.scrollTop,u=document.documentElement.scrollHeight,d=document.documentElement.clientHeight;if(l>0&&Math.ceil(l+d)>=u&&a.length>0){let e=a[a.length-1];c=r===`horizontal`&&e.parentHref?e.parentHref:e.href}else for(let e of a){let i=e.href.replace(`#`,``),a=document.getElementById(i);if(a){if(a.getBoundingClientRect().top<=n+t)c=r===`horizontal`&&e.parentHref?e.parentHref:e.href;else break}}c&&c!==o&&s(c)};return window.addEventListener(`scroll`,i),i(),()=>window.removeEventListener(`scroll`,i)},[e,n,t,o,r]),(0,b.useLayoutEffect)(()=>{if(!o||!u.current)return;let e=u.current.querySelector(`a[href="${o}"]`);if(e){let t=u.current.getBoundingClientRect();if(r===`vertical`){let n=e.getBoundingClientRect();l({top:n.top-t.top,height:n.height,opacity:1})}else{let n=u.current.querySelector(`.${v.list}`);if(n){let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=r.left-i.left+n.scrollLeft,o=a-i.width/2+r.width/2,s=n.scrollWidth-i.width,c=Math.max(0,Math.min(o,s)),u=a-c+(i.left-t.left);l({left:u,width:r.width,opacity:1}),n.scrollTo({left:c,behavior:`smooth`})}else{let t=e.getBoundingClientRect();l({left:t.left-u.current.getBoundingClientRect().left,width:t.width,opacity:1})}}}else l({opacity:0})},[o,r]);let f=e=>(0,S.jsx)(`ul`,{className:(0,x.default)(v.list,v[r]),children:e.map(e=>(0,S.jsxs)(`li`,{className:(0,x.default)(v.item,o===e.href&&v.active),children:[(0,S.jsx)(`a`,{href:e.href,className:v.link,onClick:t=>d(t,e.href),title:typeof e.title==`string`?e.title:void 0,children:e.title}),e.children&&r===`vertical`&&f(e.children)]},e.key))});return(0,S.jsxs)(`div`,{className:(0,x.default)(`wim-anchor`,v.root,v[r],i),style:a,ref:u,children:[(0,S.jsx)(`div`,{className:v.ink,children:(0,S.jsx)(`span`,{className:v.inkBall,style:c})}),f(e)]})},C.__docgenInfo={description:``,methods:[],displayName:`Anchor`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`AnchorLinkItem`}],raw:`AnchorLinkItem[]`},description:`Array of anchor link configurations`,defaultValue:{value:`[]`,computed:!1}},bounds:{required:!1,tsType:{name:`number`},description:`Bounding distance (in pixels) for triggering active state`,defaultValue:{value:`5`,computed:!1}},offset:{required:!1,tsType:{name:`number`},description:`Offset (in pixels) from top when clicking to scroll`,defaultValue:{value:`0`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Orientation of the anchor links`,defaultValue:{value:`"vertical"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`}}}})))()}var T=n({Default:()=>k,__namedExportsOrder:()=>A,default:()=>O}),E,D,O,k,A;function j(){return(j=t((()=>{E=e(r(),1),a(),o(),w(),D=c(),O={title:`Components/Navigation Elements/Anchor`,component:C,parameters:{layout:`fullscreen`},tags:[]},k={render:e=>{let{t}=i(s),[n,r]=E.useState(!1),a=[{key:`part-1`,href:`#part-1`,title:t(`story.anchor_part1`)},{key:`part-2`,href:`#part-2`,title:t(`story.anchor_part2`),children:[{key:`part-2-1`,href:`#part-2-1`,title:t(`story.anchor_part2_1`)},{key:`part-2-2`,href:`#part-2-2`,title:t(`story.anchor_part2_2`)}]},{key:`part-3`,href:`#part-3`,title:t(`story.anchor_part3`)}];return E.useEffect(()=>{let e=()=>r(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:n?`column`:`row-reverse`,padding:n?`0`:`20px`,gap:n?`0`:`40px`,minHeight:`150vh`},children:[(0,D.jsx)(`div`,{style:{position:`sticky`,top:0,zIndex:100,width:n?`100%`:`200px`,flexShrink:0,background:`var(--wim-color-surface)`,backdropFilter:`blur(var(--wim-blur-glass))`,alignSelf:`flex-start`,padding:n?`0`:`20px 0`,borderBottom:n?`1px solid var(--wim-color-border)`:`none`},children:(0,D.jsx)(C,{...e,items:a,direction:n?`horizontal`:`vertical`,offset:n?60:e.offset})}),(0,D.jsxs)(`div`,{style:{flex:1,minWidth:0,padding:n?`20px`:0},children:[(0,D.jsxs)(`section`,{id:`part-1`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,D.jsx)(`h2`,{children:t(`story.anchor_part1`)}),(0,D.jsx)(`p`,{children:t(`story.anchor_scroll_msg`)})]}),(0,D.jsxs)(`section`,{id:`part-2`,style:{height:`1000px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,D.jsx)(`h2`,{children:t(`story.anchor_part2`)}),(0,D.jsx)(`div`,{id:`part-2-1`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,D.jsx)(`h3`,{children:t(`story.anchor_part2_1`)})}),(0,D.jsx)(`div`,{id:`part-2-2`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,D.jsx)(`h3`,{children:t(`story.anchor_part2_2`)})})]}),(0,D.jsx)(`section`,{id:`part-3`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`},children:(0,D.jsx)(`h2`,{children:t(`story.anchor_part3`)})})]})]})},args:{offset:20}},A=[`Default`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}export{k as n,j as r,T as t};