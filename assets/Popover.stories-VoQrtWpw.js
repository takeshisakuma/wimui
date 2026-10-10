"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-DSrkNfg0.js";import{n as d,t as f}from"./Label-CaPgujqk.js";import{n as p,t as m}from"./Input-D4uyP0D5.js";import{a as h,i as g,r as _,t as v}from"./Popover-iYZ-Em6l.js";var y=n({Alignment:()=>D,Default:()=>w,Interactive:()=>E,Placement:()=>O,Variants:()=>T,__namedExportsOrder:()=>k,default:()=>C}),b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{b=r(),a(),x=e(r(),1),o(),l(),p(),d(),h(),S=c(),C={title:`Components/Overlays/Popover`,component:v,parameters:{layout:`centered`,docs:{description:{component:`A popover component for displaying rich content in a portal-like overlay triggered by a button.`}}},argTypes:{defaultOpen:{control:`boolean`},open:{control:`boolean`}}},w={render:function(e){let{t}=i(s);return(0,S.jsxs)(v,{...e,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{variant:`outline`,children:t(`story.popover_open`)})}),(0,S.jsx)(_,{children:(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,S.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_dimensions`)}),(0,S.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_set_dim`)}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(f,{label:t(`story.popover_width`),htmlFor:`width`,style:{marginBottom:`5px`}}),(0,S.jsx)(m,{id:`width`,defaultValue:`100%`})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(f,{label:t(`story.popover_height`),htmlFor:`height`,style:{marginBottom:`5px`}}),(0,S.jsx)(m,{id:`height`,defaultValue:`25px`})]})]})]})})]})}},T={render:function(){let{t:e}=i(s),t=x.useId();return(0,S.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-5xl)`,paddingBottom:`calc(var(--wim-spacing-5xl) * 3)`},children:[`default`,`glass`].map(n=>(0,S.jsxs)(v,{open:!0,variant:n,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{variant:`outline`,children:e(n===`glass`?`story.overlay_variant_glass`:`common.default`)})}),(0,S.jsx)(_,{side:`bottom`,"aria-labelledby":n===`glass`?`${t}${n}`:void 0,children:(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`},children:[(0,S.jsx)(`h4`,{id:`${t}${n}`,style:{margin:0},children:e(`story.popover_dimensions`)}),(0,S.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:e(`story.popover_set_dim`)})]})})]},n))})}},E={render:function(e){let{t}=i(s),[n,r]=(0,b.useState)(`300px`),[a,o]=(0,b.useState)(`auto`);return(0,S.jsxs)(v,{...e,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{variant:`outline`,children:t(`story.popover_interactive`)})}),(0,S.jsx)(_,{className:`custom-width-popover`,style:{width:n,height:a},children:(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,S.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_interactive_dim`)}),(0,S.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_change_val`)}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(f,{label:t(`story.popover_width`),htmlFor:`interactive-width`,style:{marginBottom:`5px`}}),(0,S.jsx)(m,{id:`interactive-width`,value:n,onChange:e=>r(e.target.value)})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(f,{label:t(`story.popover_height`),htmlFor:`interactive-height`,style:{marginBottom:`5px`}}),(0,S.jsx)(m,{id:`interactive-height`,value:a,onChange:e=>o(e.target.value)})]})]})]})})]})}},D={render:function(){let{t:e}=i(s);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`40px`,justifyContent:`center`,padding:`40px 20px`},children:[(0,S.jsxs)(v,{placement:`bottom-start`,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{children:e(`story.popover_left_align`)})}),(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_left_cont`)})})]}),(0,S.jsxs)(v,{placement:`bottom`,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{children:e(`story.popover_center_align`)})}),(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_center_cont`)})})]}),(0,S.jsxs)(v,{placement:`bottom-end`,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{children:e(`story.popover_right_align`)})}),(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_right_cont`)})})]})]})}},O={render:function(){let{t:e}=i(s);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`50px`,padding:`50px`},children:[(0,S.jsxs)(v,{placement:`top`,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{children:e(`story.popover_top_place`)})}),(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_above`)})})]}),(0,S.jsxs)(v,{placement:`bottom`,children:[(0,S.jsx)(g,{asChild:!0,children:(0,S.jsx)(u,{children:e(`story.popover_bottom_place`)})}),(0,S.jsx)(_,{children:(0,S.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_below`)})})]})]})}},k=[`Default`,`Variants`,`Interactive`,`Alignment`,`Placement`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">{t("story.popover_open")}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
            <h4 style={{
            margin: 0
          }}>{t("story.popover_dimensions")}</h4>
            <p style={{
            margin: 0,
            color: "var(--wim-color-text-secondary)",
            fontSize: "0.9rem"
          }}>
              {t("story.popover_set_dim")}
            </p>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
              <div>
                <Label label={t("story.popover_width")} htmlFor="width" style={{
                marginBottom: "5px"
              }} />
                <Input id="width" defaultValue="100%" />
              </div>
              <div>
                <Label label={t("story.popover_height")} htmlFor="height" style={{
                marginBottom: "5px"
              }} />
                <Input id="height" defaultValue="25px" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const headingId = React.useId();
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-5xl)",
      paddingBottom: "calc(var(--wim-spacing-5xl) * 3)"
    }}>
        {(["default", "glass"] as const).map(variant => <Popover key={variant} open variant={variant}>
            <PopoverTrigger asChild>
              <Button variant="outline">{t(variant === "glass" ? "story.overlay_variant_glass" : "common.default")}</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" aria-labelledby={variant === "glass" ? \`\${headingId}\${variant}\` : undefined}>
              <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--wim-spacing-xs)"
          }}>
                <h4 id={\`\${headingId}\${variant}\`} style={{
              margin: 0
            }}>{t("story.popover_dimensions")}</h4>
                <p style={{
              margin: 0,
              color: "var(--wim-color-text-secondary)"
            }}>{t("story.popover_set_dim")}</p>
              </div>
            </PopoverContent>
          </Popover>)}
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:`開いた状態で既定と glass を並べる（T280: 面そのものがどのストーリーにも写っていなかった）。
名前の 2 経路も a11y に載せる（T282）: 既定は名前を渡さずトリガーの文字が名前になり、glass は見出しを渡して渡した名前が勝つ。`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");
    return <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">{t("story.popover_interactive")}</Button>
        </PopoverTrigger>
        <PopoverContent className="custom-width-popover" style={{
        width,
        height
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
            <h4 style={{
            margin: 0
          }}>{t("story.popover_interactive_dim")}</h4>
            <p style={{
            margin: 0,
            color: "var(--wim-color-text-secondary)",
            fontSize: "0.9rem"
          }}>
              {t("story.popover_change_val")}
            </p>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
              <div>
                <Label label={t("story.popover_width")} htmlFor="interactive-width" style={{
                marginBottom: "5px"
              }} />
                <Input id="interactive-width" value={width} onChange={e => setWidth(e.target.value)} />
              </div>
              <div>
                <Label label={t("story.popover_height")} htmlFor="interactive-height" style={{
                marginBottom: "5px"
              }} />
                <Input id="interactive-height" value={height} onChange={e => setHeight(e.target.value)} />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
      padding: "40px 20px"
    }}>
        <Popover placement="bottom-start">
          <PopoverTrigger asChild>
            <Button>{t("story.popover_left_align")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story.popover_left_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button>{t("story.popover_center_align")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story.popover_center_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverTrigger asChild>
            <Button>{t("story.popover_right_align")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story.popover_right_cont")}</div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      padding: "50px"
    }}>
        <Popover placement="top">
          <PopoverTrigger asChild>
            <Button>{t("story.popover_top_place")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story.popover_appears_above")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button>{t("story.popover_bottom_place")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div style={{
            padding: "10px"
          }}>{t("story.popover_appears_below")}</div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...O.parameters?.docs?.source}}}})))()}export{y as a,O as i,w as n,T as o,E as r,A as s,D as t};