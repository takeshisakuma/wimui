"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{in as l,t as u}from"./src-BE5jBQ9L.js";var d=e({Default:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g,_=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Navigation Elements/Anchor`,component:l,parameters:{layout:`fullscreen`},tags:[]},h={render:e=>{let{t}=i(c),[n,r]=f.useState(!1),a=[{key:`part-1`,href:`#part-1`,title:t(`story.anchor_part1`)},{key:`part-2`,href:`#part-2`,title:t(`story.anchor_part2`),children:[{key:`part-2-1`,href:`#part-2-1`,title:t(`story.anchor_part2_1`)},{key:`part-2-2`,href:`#part-2-2`,title:t(`story.anchor_part2_2`)}]},{key:`part-3`,href:`#part-3`,title:t(`story.anchor_part3`)}];return f.useEffect(()=>{let e=()=>r(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:n?`column`:`row-reverse`,padding:n?`0`:`20px`,gap:n?`0`:`40px`,minHeight:`150vh`},children:[(0,p.jsx)(`div`,{style:{position:`sticky`,top:0,zIndex:100,width:n?`100%`:`200px`,flexShrink:0,background:`var(--wim-color-surface)`,backdropFilter:`blur(var(--wim-blur-glass))`,alignSelf:`flex-start`,padding:n?`0`:`20px 0`,borderBottom:n?`1px solid var(--wim-color-border)`:`none`},children:(0,p.jsx)(l,{...e,items:a,direction:n?`horizontal`:`vertical`,offset:n?60:e.offset})}),(0,p.jsxs)(`div`,{style:{flex:1,minWidth:0,padding:n?`20px`:0},children:[(0,p.jsxs)(`section`,{id:`part-1`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,p.jsx)(`h2`,{children:t(`story.anchor_part1`)}),(0,p.jsx)(`p`,{children:t(`story.anchor_scroll_msg`)})]}),(0,p.jsxs)(`section`,{id:`part-2`,style:{height:`1000px`,background:`var(--wim-color-surface-variant)`,padding:`20px`,marginBottom:`20px`},children:[(0,p.jsx)(`h2`,{children:t(`story.anchor_part2`)}),(0,p.jsx)(`div`,{id:`part-2-1`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,p.jsx)(`h3`,{children:t(`story.anchor_part2_1`)})}),(0,p.jsx)(`div`,{id:`part-2-2`,style:{height:`400px`,border:`1px dashed var(--wim-color-border)`,margin:`20px 0`,padding:`10px`},children:(0,p.jsx)(`h3`,{children:t(`story.anchor_part2_2`)})})]}),(0,p.jsx)(`section`,{id:`part-3`,style:{height:`600px`,background:`var(--wim-color-surface-variant)`,padding:`20px`},children:(0,p.jsx)(`h2`,{children:t(`story.anchor_part3`)})})]})]})},args:{offset:20}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`]}));_();export{h as Default,g as __namedExportsOrder,m as default,_ as n,d as t};