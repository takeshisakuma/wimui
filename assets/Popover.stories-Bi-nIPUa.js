"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{C as l,T as u,t as d,w as f}from"./src-Ssuy8lr7.js";import{t as p}from"./Button-Dps1MPAd.js";import{a as m}from"./FieldTemplate-D3hWbscu.js";import{t as h}from"./Input-BY9GcYwo.js";var g=e({Alignment:()=>S,Default:()=>b,Interactive:()=>x,Placement:()=>C,__namedExportsOrder:()=>w,default:()=>y}),_,v,y,b,x,S,C,w,T=t((()=>{_=n(r(),1),s(),r(),a(),d(),v=o(),y={title:`Components/Overlays/Popover`,component:l,parameters:{layout:`centered`,docs:{description:{component:`A popover component for displaying rich content in a portal-like overlay triggered by a button.`}}},argTypes:{defaultOpen:{control:`boolean`},open:{control:`boolean`}}},b={render:function(e){let{t}=i(c);return(0,v.jsxs)(l,{...e,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{variant:`outline`,children:t(`story.popover_open`)})}),(0,v.jsx)(f,{children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,v.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_dimensions`)}),(0,v.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_set_dim`)}),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(m,{label:t(`story.popover_width`),htmlFor:`width`,style:{marginBottom:`5px`}}),(0,v.jsx)(h,{id:`width`,defaultValue:`100%`})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(m,{label:t(`story.popover_height`),htmlFor:`height`,style:{marginBottom:`5px`}}),(0,v.jsx)(h,{id:`height`,defaultValue:`25px`})]})]})]})})]})}},x={render:function(e){let{t}=i(c),[n,r]=(0,_.useState)(`300px`),[a,o]=(0,_.useState)(`auto`);return(0,v.jsxs)(l,{...e,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{variant:`outline`,children:t(`story.popover_interactive`)})}),(0,v.jsx)(f,{className:`custom-width-popover`,style:{width:n,height:a},children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,v.jsx)(`h4`,{style:{margin:0},children:t(`story.popover_interactive_dim`)}),(0,v.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:t(`story.popover_change_val`)}),(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(m,{label:t(`story.popover_width`),htmlFor:`interactive-width`,style:{marginBottom:`5px`}}),(0,v.jsx)(h,{id:`interactive-width`,value:n,onChange:e=>r(e.target.value)})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(m,{label:t(`story.popover_height`),htmlFor:`interactive-height`,style:{marginBottom:`5px`}}),(0,v.jsx)(h,{id:`interactive-height`,value:a,onChange:e=>o(e.target.value)})]})]})]})})]})}},S={render:function(){let{t:e}=i(c);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`40px`,justifyContent:`center`,padding:`40px 20px`},children:[(0,v.jsxs)(l,{placement:`bottom-start`,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{children:e(`story.popover_left_align`)})}),(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_left_cont`)})})]}),(0,v.jsxs)(l,{placement:`bottom`,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{children:e(`story.popover_center_align`)})}),(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_center_cont`)})})]}),(0,v.jsxs)(l,{placement:`bottom-end`,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{children:e(`story.popover_right_align`)})}),(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_right_cont`)})})]})]})}},C={render:function(){let{t:e}=i(c);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`50px`,padding:`50px`},children:[(0,v.jsxs)(l,{placement:`top`,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{children:e(`story.popover_top_place`)})}),(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_above`)})})]}),(0,v.jsxs)(l,{placement:`bottom`,children:[(0,v.jsx)(u,{asChild:!0,children:(0,v.jsx)(p,{children:e(`story.popover_bottom_place`)})}),(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{padding:`10px`},children:e(`story.popover_appears_below`)})})]})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Interactive`,`Alignment`,`Placement`]}));T();export{S as Alignment,b as Default,x as Interactive,C as Placement,w as __namedExportsOrder,y as default,T as n,g as t};