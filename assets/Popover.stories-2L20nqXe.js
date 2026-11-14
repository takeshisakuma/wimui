"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Group-tKRHS_M5.js";import{n as d,t as f}from"./Button-Drq-Mw-h.js";import{n as p,t as m}from"./Label-CxYSUU6J.js";import{n as h,t as g}from"./Text-D9yqbrao.js";import{n as _,t as v}from"./Input-BJXKgZZz.js";import{n as y,t as b}from"./IconButton-DxQRDsKK.js";import{a as x,i as S,r as C,t as w}from"./Popover-sEgDD4SW.js";var T=n({Alignment:()=>N,Default:()=>A,InfoTip:()=>F,InfoTipOpen:()=>I,Interactive:()=>M,Placement:()=>P,Variants:()=>j,__namedExportsOrder:()=>L,default:()=>k});function E({defaultOpen:e}){let{t}=i(s);return(0,O.jsxs)(u,{gap:`2xs`,align:`center`,children:[(0,O.jsx)(g,{children:t(`story.popover_infotip_price`)}),(0,O.jsxs)(w,{defaultOpen:e,placement:`bottom-start`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(b,{iconName:`InfoCircleIcon`,variant:`ghost`,size:`sm`,"aria-label":t(`story.popover_infotip_label`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(g,{size:`sm`,children:t(`story.popover_infotip_body`)})})]})]})}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{D=e(r(),1),a(),o(),d(),l(),y(),_(),p(),x(),h(),O=c(),k={title:`Components/Overlays/Popover`,component:w,parameters:{layout:`centered`,docs:{description:{component:`A popover component for displaying rich content in a portal-like overlay triggered by a button.`}}},argTypes:{defaultOpen:{control:`boolean`},open:{control:`boolean`}}},A={render:function(e){let{t}=i(s);return(0,O.jsxs)(w,{...e,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{variant:`outline`,children:t(`story.popover_open`)})}),(0,O.jsx)(C,{children:(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,O.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_dimensions`)}),(0,O.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_set_dim`)}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(m,{label:t(`story.popover_width`),htmlFor:`width`,style:{marginBottom:`5px`}}),(0,O.jsx)(v,{id:`width`,defaultValue:`100%`})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(m,{label:t(`story.popover_height`),htmlFor:`height`,style:{marginBottom:`5px`}}),(0,O.jsx)(v,{id:`height`,defaultValue:`25px`})]})]})]})})]})}},j={render:function(){let{t:e}=i(s),t=D.useId();return(0,O.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-5xl)`,paddingBottom:`calc(var(--wim-spacing-5xl) * 3)`},children:[`default`,`glass`].map(n=>(0,O.jsxs)(w,{open:!0,variant:n,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{variant:`outline`,children:e(n===`glass`?`story.overlay_variant_glass`:`common.default`)})}),(0,O.jsx)(C,{"aria-labelledby":n===`glass`?`${t}${n}`:void 0,children:(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`},children:[(0,O.jsx)(`h4`,{id:`${t}${n}`,style:{margin:0},children:e(`story.popover_dimensions`)}),(0,O.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:e(`story.popover_set_dim`)})]})})]},n))})}},M={render:function(e){let{t}=i(s),[n,r]=(0,D.useState)(`300px`),[a,o]=(0,D.useState)(`auto`);return(0,O.jsxs)(w,{...e,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{variant:`outline`,children:t(`story.popover_interactive`)})}),(0,O.jsx)(C,{className:`custom-width-popover`,style:{width:n,height:a},children:(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,O.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_interactive_dim`)}),(0,O.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_change_val`)}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(m,{label:t(`story.popover_width`),htmlFor:`interactive-width`,style:{marginBottom:`5px`}}),(0,O.jsx)(v,{id:`interactive-width`,value:n,onChange:e=>r(e.target.value)})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(m,{label:t(`story.popover_height`),htmlFor:`interactive-height`,style:{marginBottom:`5px`}}),(0,O.jsx)(v,{id:`interactive-height`,value:a,onChange:e=>o(e.target.value)})]})]})]})})]})}},N={render:function(){let{t:e}=i(s);return(0,O.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`40px`,justifyContent:`center`,padding:`40px 20px`},children:[(0,O.jsxs)(w,{placement:`bottom-start`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{children:e(`story.popover_left_align`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_left_cont`)})})]}),(0,O.jsxs)(w,{placement:`bottom`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{children:e(`story.popover_center_align`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_center_cont`)})})]}),(0,O.jsxs)(w,{placement:`bottom-end`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{children:e(`story.popover_right_align`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_right_cont`)})})]})]})}},P={render:function(){let{t:e}=i(s);return(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`50px`,padding:`50px`},children:[(0,O.jsxs)(w,{placement:`top`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{children:e(`story.popover_top_place`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_above`)})})]}),(0,O.jsxs)(w,{placement:`bottom`,children:[(0,O.jsx)(S,{asChild:!0,children:(0,O.jsx)(f,{children:e(`story.popover_bottom_place`)})}),(0,O.jsx)(C,{children:(0,O.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_below`)})})]})]})}},F={render:()=>(0,O.jsx)(E,{})},I={render:()=>(0,O.jsx)(E,{defaultOpen:!0})},L=[`Default`,`Variants`,`Interactive`,`Alignment`,`Placement`,`InfoTip`,`InfoTipOpen`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
            <PopoverContent aria-labelledby={variant === "glass" ? \`\${headingId}\${variant}\` : undefined}>
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
}`,...j.parameters?.docs?.source},description:{story:`開いた状態で既定と glass を並べる（T280: 面そのものがどのストーリーにも写っていなかった）。
名前の 2 経路も a11y に載せる（T282）: 既定は名前を渡さずトリガーの文字が名前になり、glass は見出しを渡して渡した名前が勝つ。`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InfoTipExample />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <InfoTipExample defaultOpen />
}`,...I.parameters?.docs?.source},description:{story:"開いた姿（VRT と a11y に、開いた面を写すため）。docs ページには載せない（`defaultOpen` はページを開いた瞬間に開く）。",...I.parameters?.docs?.description}}}})))()}export{P as a,R as c,M as i,A as n,T as o,F as r,j as s,N as t};