"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Tn as l,t as u}from"./src-CV0le6yM.js";import{n as d,t as f}from"./scene_landscape-DRLAOg4r.js";var p=e({CardExample:()=>S,Circle:()=>y,Default:()=>_,LoadingToggle:()=>C,Rect:()=>b,Text:()=>v,WaveAnimation:()=>x,__namedExportsOrder:()=>w,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{m=n(r(),1),s(),a(),u(),f(),h=o(),g={title:`Components/Loading States/Skeleton`,component:l,argTypes:{variant:{control:`select`,options:[`text`,`rect`,`circle`]},animation:{control:`select`,options:[`pulse`,`wave`,`none`]},width:{control:`text`},height:{control:`text`}}},_={args:{width:`100%`}},v={render:e=>(0,h.jsxs)(`div`,{style:{maxWidth:`300px`,width:`100%`},children:[(0,h.jsx)(l,{...e,variant:`text`,width:`100%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`80%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`60%`})]})},y={args:{variant:`circle`,width:40,height:40}},b={args:{variant:`rect`,width:200,height:100}},x={args:{animation:`wave`,width:`100%`}},S={render:e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`300px`,width:`100%`,padding:`16px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,h.jsx)(l,{...e,variant:`circle`,width:40,height:40}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(l,{...e,variant:`text`,width:`60%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`40%`})]})]}),(0,h.jsx)(l,{...e,variant:`rect`,width:`100%`,height:150}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(l,{...e,variant:`text`,width:`100%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`90%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`70%`})]})]})},C={render:function(e){let[t,n]=m.useState(!0),{t:r}=i(c);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,h.jsx)(`button`,{onClick:()=>n(!t),style:{padding:`8px 16px`,borderRadius:`4px`,border:`1px solid var(--wim-color-border)`,cursor:`pointer`,width:`fit-content`,color:`var(--wim-color-text-primary)`,background:`var(--wim-color-surface)`},children:r(t?`story.skeleton_show_content`:`story.skeleton_show_skeleton`)}),(0,h.jsx)(`div`,{style:{padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`12px`,maxWidth:`350px`,width:`100%`,boxSizing:`border-box`},children:t?(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,h.jsx)(l,{...e,variant:`circle`,width:48,height:48}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(l,{...e,variant:`text`,width:`50%`}),(0,h.jsx)(l,{...e,variant:`text`,width:`30%`})]})]}),(0,h.jsx)(l,{...e,variant:`rect`,width:`100%`,height:120}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{...e,variant:`text`}),(0,h.jsx)(l,{...e,variant:`text`}),(0,h.jsx)(l,{...e,variant:`text`,width:`60%`})]})]}):(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,h.jsx)(`div`,{style:{width:48,height:48,borderRadius:`50%`,backgroundColor:`var(--wim-color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`,fontWeight:`bold`},children:`MS`}),(0,h.jsxs)(`div`,{style:{flex:1},children:[(0,h.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.1rem`},children:r(`story.skeleton_sample_name`)}),(0,h.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:r(`story.skeleton_sample_role`)})]})]}),(0,h.jsx)(`img`,{src:d,alt:r(`common.content`),style:{width:`100%`,height:`120px`,objectFit:`cover`,borderRadius:`4px`}}),(0,h.jsx)(`div`,{style:{lineHeight:`1.6`,color:`var(--wim-color-text-secondary)`},children:r(`story.skeleton_demo_desc`)})]})})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: "300px",
    width: "100%"
  }}>
      <Skeleton {...args} variant="text" width="100%" />
      <Skeleton {...args} variant="text" width="80%" />
      <Skeleton {...args} variant="text" width="60%" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    width: 40,
    height: 40
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rect",
    width: 200,
    height: 100
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    animation: "wave",
    width: "100%"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "300px",
    width: "100%",
    padding: "16px",
    border: "1px solid var(--wim-color-border)",
    borderRadius: "8px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <Skeleton {...args} variant="circle" width={40} height={40} />
        <div style={{
        flex: 1
      }}>
          <Skeleton {...args} variant="text" width="60%" />
          <Skeleton {...args} variant="text" width="40%" />
        </div>
      </div>
      <Skeleton {...args} variant="rect" width="100%" height={150} />
      <div>
        <Skeleton {...args} variant="text" width="100%" />
        <Skeleton {...args} variant="text" width="90%" />
        <Skeleton {...args} variant="text" width="70%" />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [loading, setLoading] = React.useState(true);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <button onClick={() => setLoading(!loading)} style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid var(--wim-color-border)",
        cursor: "pointer",
        width: "fit-content",
        color: "var(--wim-color-text-primary)",
        background: "var(--wim-color-surface)"
      }}>
          {loading ? t("story.skeleton_show_content") : t("story.skeleton_show_skeleton")}
        </button>

        <div style={{
        padding: "20px",
        border: "1px solid var(--wim-color-border)",
        borderRadius: "12px",
        maxWidth: "350px",
        width: "100%",
        boxSizing: "border-box"
      }}>
          {loading ? <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
                <Skeleton {...args} variant="circle" width={48} height={48} />
                <div style={{
              flex: 1
            }}>
                  <Skeleton {...args} variant="text" width="50%" />
                  <Skeleton {...args} variant="text" width="30%" />
                </div>
              </div>
              <Skeleton {...args} variant="rect" width="100%" height={120} />
              <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
                <Skeleton {...args} variant="text" />
                <Skeleton {...args} variant="text" />
                <Skeleton {...args} variant="text" width="60%" />
              </div>
            </div> : <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
              <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
                <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "var(--wim-color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--wim-color-text-on-primary)",
              fontWeight: "bold"
            }}>
                  MS
                </div>
                <div style={{
              flex: 1
            }}>
                  <div style={{
                fontWeight: "bold",
                fontSize: "1.1rem"
              }}>
                    {t("story.skeleton_sample_name")}
                  </div>
                  <div style={{
                color: "var(--wim-color-text-secondary)",
                fontSize: "0.9rem"
              }}>
                    {t("story.skeleton_sample_role")}
                  </div>
                </div>
              </div>
              <img src={sceneLandscape} alt={t("common.content")} style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "4px"
          }} />
              <div style={{
            lineHeight: "1.6",
            color: "var(--wim-color-text-secondary)"
          }}>
                {t("story.skeleton_demo_desc")}
              </div>
            </div>}
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Text`,`Circle`,`Rect`,`WaveAnimation`,`CardExample`,`LoadingToggle`]}));T();export{S as CardExample,y as Circle,_ as Default,C as LoadingToggle,b as Rect,v as Text,x as WaveAnimation,w as __namedExportsOrder,g as default,T as n,p as t};