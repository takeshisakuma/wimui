"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Group-tKRHS_M5.js";import{n as d,t as f}from"./Button-BZJbe9C-.js";import{n as p,t as m}from"./IconButton-CONohkBw.js";import{n as h,t as g}from"./Label-CyxCZ7Fk.js";import{n as _,t as v}from"./Text-D9yqbrao.js";import{n as y,t as b}from"./Input-DdAacezo.js";import{a as x,i as S,r as C,t as w}from"./Popover-O9UMMf15.js";var T=n({Alignment:()=>P,Default:()=>j,InfoTip:()=>I,InfoTipOpen:()=>L,Interactive:()=>N,LongContentOpen:()=>R,Placement:()=>F,Variants:()=>M,__namedExportsOrder:()=>z,default:()=>A});function E(){let[e,t]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{let e=!0;return Promise.all([`400 16px "Noto Sans"`,`500 16px "Noto Sans"`,`700 16px "Noto Sans"`].map(e=>document.fonts.load(e).catch(()=>void 0))).then(()=>{e&&t(!0)}),()=>{e=!1}},[]),e}function D({defaultOpen:e}){let{t}=i(s);return(0,k.jsxs)(u,{gap:`2xs`,align:`center`,children:[(0,k.jsx)(v,{children:t(`story.popover_infotip_price`)}),(0,k.jsxs)(w,{defaultOpen:e,placement:`bottom-start`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(m,{iconName:`InfoCircleIcon`,variant:`ghost`,size:`sm`,"aria-label":t(`story.popover_infotip_label`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(v,{size:`sm`,children:t(`story.popover_infotip_body`)})})]})]})}var O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{O=e(r(),1),a(),o(),d(),l(),p(),y(),h(),x(),_(),k=c(),A={title:`Components/Overlays/Popover`,component:w,parameters:{layout:`centered`,docs:{description:{component:`A popover component for displaying rich content in a portal-like overlay triggered by a button.`}}},argTypes:{defaultOpen:{control:`boolean`},open:{control:`boolean`}}},j={render:function(e){let{t}=i(s);return(0,k.jsxs)(w,{...e,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{variant:`outline`,children:t(`story.popover_open`)})}),(0,k.jsx)(C,{children:(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,k.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_dimensions`)}),(0,k.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_set_dim`)}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(g,{label:t(`story.popover_width`),htmlFor:`width`,style:{marginBottom:`5px`}}),(0,k.jsx)(b,{id:`width`,defaultValue:`100%`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(g,{label:t(`story.popover_height`),htmlFor:`height`,style:{marginBottom:`5px`}}),(0,k.jsx)(b,{id:`height`,defaultValue:`25px`})]})]})]})})]})}},M={render:function(){let{t:e}=i(s),t=O.useId();return(0,k.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-start`},children:[`default`,`glass`].map(n=>(0,k.jsx)(`div`,{style:{paddingBottom:`calc(var(--wim-spacing-5xl) * 3)`},children:(0,k.jsxs)(w,{open:!0,variant:n,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{variant:`outline`,children:e(n===`glass`?`story.overlay_variant_glass`:`common.default`)})}),(0,k.jsx)(C,{"aria-labelledby":n===`glass`?`${t}${n}`:void 0,children:(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xs)`},children:[(0,k.jsx)(`h4`,{id:`${t}${n}`,style:{margin:0},children:e(`story.popover_dimensions`)}),(0,k.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:e(`story.popover_set_dim`)})]})})]})},n))})}},N={render:function(e){let{t}=i(s),[n,r]=(0,O.useState)(`300px`),[a,o]=(0,O.useState)(`auto`);return(0,k.jsxs)(w,{...e,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{variant:`outline`,children:t(`story.popover_interactive`)})}),(0,k.jsx)(C,{className:`custom-width-popover`,style:{width:n,height:a},children:(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,k.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_interactive_dim`)}),(0,k.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_change_val`)}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(g,{label:t(`story.popover_width`),htmlFor:`interactive-width`,style:{marginBottom:`5px`}}),(0,k.jsx)(b,{id:`interactive-width`,value:n,onChange:e=>r(e.target.value)})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(g,{label:t(`story.popover_height`),htmlFor:`interactive-height`,style:{marginBottom:`5px`}}),(0,k.jsx)(b,{id:`interactive-height`,value:a,onChange:e=>o(e.target.value)})]})]})]})})]})}},P={render:function(){let{t:e}=i(s);return(0,k.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`40px`,justifyContent:`center`,padding:`40px 20px`},children:[(0,k.jsxs)(w,{placement:`bottom-start`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{children:e(`story.popover_left_align`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_left_cont`)})})]}),(0,k.jsxs)(w,{placement:`bottom`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{children:e(`story.popover_center_align`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_center_cont`)})})]}),(0,k.jsxs)(w,{placement:`bottom-end`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{children:e(`story.popover_right_align`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_right_cont`)})})]})]})}},F={render:function(){let{t:e}=i(s);return(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`50px`,padding:`50px`},children:[(0,k.jsxs)(w,{placement:`top`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{children:e(`story.popover_top_place`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_above`)})})]}),(0,k.jsxs)(w,{placement:`bottom`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{children:e(`story.popover_bottom_place`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_below`)})})]})]})}},I={render:()=>(0,k.jsx)(D,{})},L={render:function(){let e=E();return(0,k.jsx)(D,{defaultOpen:e},String(e))}},R={render:function(){let{t:e}=i(s),t=E();return(0,k.jsxs)(w,{defaultOpen:t,placement:`bottom-start`,children:[(0,k.jsx)(S,{asChild:!0,children:(0,k.jsx)(f,{variant:`outline`,children:e(`story.popover_open`)})}),(0,k.jsx)(C,{children:(0,k.jsx)(v,{size:`sm`,children:e(`story.popover_long_body`)})})]},String(t))}},z=[`Default`,`Variants`,`Interactive`,`Alignment`,`Placement`,`InfoTip`,`InfoTipOpen`,`LongContentOpen`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const headingId = React.useId();
    return (
      // 面は引き金の下に開くので、横に並べると面どうしが重なる（T407）。縦に積み、各引き金の下に面の高さを空ける
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        {(["default", "glass"] as const).map(variant => <div key={variant} style={{
          paddingBottom: "calc(var(--wim-spacing-5xl) * 3)"
        }}>
            <Popover open variant={variant}>
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
            </Popover>
          </div>)}
      </div>
    );
  }
}`,...M.parameters?.docs?.source},description:{story:`開いた状態で既定と glass を並べる（T280: 面そのものがどのストーリーにも写っていなかった）。
名前の 2 経路も a11y に載せる（T282）: 既定は名前を渡さずトリガーの文字が名前になり、glass は見出しを渡して渡した名前が勝つ。`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <InfoTipExample />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const fontsLoaded = useFontsLoaded();
    return <InfoTipExample key={String(fontsLoaded)} defaultOpen={fontsLoaded} />;
  }
}`,...L.parameters?.docs?.source},description:{story:"開いた姿（VRT と a11y に、開いた面を写すため）。docs ページには載せない（`defaultOpen` はページを開いた瞬間に開く）。",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const fontsLoaded = useFontsLoaded();
    return <Popover key={String(fontsLoaded)} defaultOpen={fontsLoaded} placement="bottom-start">
        <PopoverTrigger asChild>
          <Button variant="outline">{t("story.popover_open")}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text size="sm">{t("story.popover_long_body")}</Text>
        </PopoverContent>
      </Popover>;
  }
}`,...R.parameters?.docs?.source},description:{story:"長い文を入れた開いた姿（T448）。面は `--wim-overlay-max-width-md`（448px）で折り返す。\n上限が無いと 1280px の画面で面が 1,264px まで伸び、1 行が 100 字を超える。docs ページには載せない。",...R.parameters?.docs?.description}}}})))()}export{F as a,B as c,N as i,j as n,T as o,I as r,M as s,P as t};