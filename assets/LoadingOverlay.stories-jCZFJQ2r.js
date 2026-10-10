"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-TGLZuM2d.js";import{n as d,t as f}from"./Card-CbECOvhR.js";import{n as p,t as m}from"./Button-DSrkNfg0.js";import{n as h,t as g}from"./LoadingOverlay-C4Vz_WYG.js";import{n as _,t as v}from"./scene_landscape-CYVOpy3D.js";var y=n({BackdropVariants:()=>D,Basic:()=>C,BlurEffects:()=>O,CustomLoader:()=>j,DifferentLoaderTypes:()=>E,FullScreen:()=>k,InsideCard:()=>w,Interactive:()=>A,WithMessage:()=>T,__namedExportsOrder:()=>M,default:()=>S}),b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{b=e(r(),1),a(),o(),p(),d(),l(),h(),v(),x=c(),S={title:`Components/Loading States/LoadingOverlay`,component:g,parameters:{layout:`padded`},argTypes:{visible:{control:`boolean`},loaderType:{control:`select`,options:[`spinner`,`bars`,`dots`,`pulse`]},loaderSize:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},loaderColor:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},backdropVariant:{control:`select`,options:[`light`,`dark`]},blur:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},fixed:{control:`boolean`}}},C={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(s);return(0,x.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,x.jsxs)(`div`,{style:{padding:`20px`},children:[(0,x.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,x.jsx)(`p`,{children:t(`story.loading_overlay_content_desc`)})]}),(0,x.jsx)(g,{...e})]})}},w={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(s);return(0,x.jsxs)(f,{children:[(0,x.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,x.jsx)(`p`,{children:t(`story.loading_overlay_content_desc`)}),(0,x.jsx)(g,{...e})]})}},T={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(s);return(0,x.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,x.jsxs)(`div`,{style:{padding:`20px`},children:[(0,x.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,x.jsx)(`p`,{children:t(`story.loading_overlay_with_msg_desc`)})]}),(0,x.jsx)(g,{...e,message:t(`story.loading_overlay_loading_data`)})]})}},E={render:()=>(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[`spinner`,`bars`,`dots`,`pulse`].map(e=>(0,x.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,x.jsx)(`div`,{style:{padding:`20px`},children:(0,x.jsx)(`h4`,{children:e.charAt(0).toUpperCase()+e.slice(1)})}),(0,x.jsx)(g,{visible:!0,loaderType:e})]},e))})},D={render:function(){let{t:e}=i(s);return(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[(0,x.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-glass-bg)`},children:[(0,x.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`},children:(0,x.jsx)(`h4`,{children:e(`story.loading_overlay_light_backdrop`)})}),(0,x.jsx)(g,{visible:!0,backdropVariant:`light`,loaderColor:`primary`})]}),(0,x.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-glass-bg)`},children:[(0,x.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`},children:(0,x.jsx)(`h4`,{children:e(`story.loading_overlay_dark_backdrop`)})}),(0,x.jsx)(g,{visible:!0,backdropVariant:`dark`,loaderColor:`currentColor`})]})]})}},O={render:function(){let{t:e}=i(s);return(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[`none`,`sm`,`md`,`lg`].map(t=>(0,x.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,backgroundImage:`url(${_})`,backgroundSize:`cover`},children:[(0,x.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`,textShadow:`0 0 4px black`},children:(0,x.jsxs)(`h4`,{children:[e(`story.loading_overlay_blur`),`: `,t]})}),(0,x.jsx)(g,{visible:!0,blur:t})]},t))})}},k={args:{visible:!1,fixed:!0,loaderType:`spinner`,loaderSize:`xl`},render:function(e){let{t}=i(s),[n,r]=b.useState(!1);return(0,x.jsxs)(`div`,{style:{padding:`20px`},children:[(0,x.jsx)(m,{onClick:()=>{r(!0),setTimeout(()=>r(!1),3e3)},children:t(`story.loading_overlay_show_fullscreen`)}),(0,x.jsx)(`p`,{children:t(`story.loading_overlay_fullscreen_desc`)}),(0,x.jsx)(g,{...e,visible:n,message:t(`story.loading_overlay_loading_app`)})]})}},A={render:function(){let{t:e}=i(s),[t,n]=b.useState(!1);return(0,x.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,padding:`20px`},children:[(0,x.jsx)(m,{onClick:()=>{n(!0),setTimeout(()=>n(!1),2e3)},disabled:t,children:e(`story.loading_overlay_load_data`)}),(0,x.jsx)(`div`,{style:{marginTop:`20px`},children:(0,x.jsx)(`p`,{children:e(`story.loading_overlay_long_content`)})}),(0,x.jsx)(g,{visible:t,loaderType:`spinner`,loaderSize:`lg`,message:e(`story.loading_overlay_fetching_data`)})]})}},j={args:{visible:!0},render:function(e){let{t}=i(s);return(0,x.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,x.jsxs)(`div`,{style:{padding:`20px`},children:[(0,x.jsx)(`h3`,{children:t(`story.loading_overlay_custom_title`)}),(0,x.jsx)(`p`,{children:t(`story.loading_overlay_custom_desc`)})]}),(0,x.jsx)(g,{...e,children:(0,x.jsxs)(`div`,{style:{textAlign:`center`,color:`var(--wim-color-text-on-primary)`},children:[(0,x.jsx)(u,{name:`ClockIcon`,style:{width:`48px`,height:`48px`,marginBottom:`16px`}}),(0,x.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`},children:t(`story.loading_overlay_wait`)})]})})]})}},M=[`Basic`,`InsideCard`,`WithMessage`,`DifferentLoaderTypes`,`BackdropVariants`,`BlurEffects`,`FullScreen`,`Interactive`,`CustomLoader`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story.loading_overlay_content_title")}</h3>
          <p>{t("story.loading_overlay_content_desc")}</p>
        </div>
        <LoadingOverlay {...args} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card>
        <h3>{t("story.loading_overlay_content_title")}</h3>
        <p>{t("story.loading_overlay_content_desc")}</p>
        <LoadingOverlay {...args} />
      </Card>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story.loading_overlay_content_title")}</h3>
          <p>{t("story.loading_overlay_with_msg_desc")}</p>
        </div>
        <LoadingOverlay {...args} message={t("story.loading_overlay_loading_data")} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  }}>
      {(["spinner", "bars", "dots", "pulse"] as const).map(type => <div key={type} style={{
      position: "relative",
      height: "300px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "8px"
    }}>
          <div style={{
        padding: "20px"
      }}>
            <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
          </div>
          <LoadingOverlay visible={true} loaderType={type} />
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }}>
        <div style={{
        position: "relative",
        height: "300px",
        border: "1px solid var(--wim-color-border)",
        borderRadius: "8px",
        background: "var(--wim-color-glass-bg)"
      }}>
          <div style={{
          padding: "20px",
          color: "var(--wim-color-text-on-primary)"
        }}>
            <h4>{t("story.loading_overlay_light_backdrop")}</h4>
          </div>
          <LoadingOverlay visible={true} backdropVariant="light" loaderColor="primary" />
        </div>
        <div style={{
        position: "relative",
        height: "300px",
        border: "1px solid var(--wim-color-border)",
        borderRadius: "8px",
        background: "var(--wim-color-glass-bg)"
      }}>
          <div style={{
          padding: "20px",
          color: "var(--wim-color-text-on-primary)"
        }}>
            <h4>{t("story.loading_overlay_dark_backdrop")}</h4>
          </div>
          <LoadingOverlay visible={true} backdropVariant="dark" loaderColor="currentColor" />
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }}>
        {(["none", "sm", "md", "lg"] as const).map(blurLevel => <div key={blurLevel} style={{
        position: "relative",
        height: "300px",
        border: "1px solid var(--wim-color-border)",
        borderRadius: "8px",
        backgroundImage: \`url(\${sceneLandscape})\`,
        backgroundSize: "cover"
      }}>
            <div style={{
          padding: "20px",
          color: "var(--wim-color-text-on-primary)",
          textShadow: "0 0 4px black"
        }}>
              <h4>
                {t("story.loading_overlay_blur")}: {blurLevel}
              </h4>
            </div>
            <LoadingOverlay visible={true} blur={blurLevel} />
          </div>)}
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    fixed: true,
    loaderType: "spinner",
    loaderSize: "xl"
  },
  render: function FullScreenStory(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <div style={{
      padding: "20px"
    }}>
        <Button onClick={handleClick}>
          {t("story.loading_overlay_show_fullscreen")}
        </Button>
        <p>{t("story.loading_overlay_fullscreen_desc")}</p>
        <LoadingOverlay {...args} visible={loading} message={t("story.loading_overlay_loading_app")} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "8px",
      padding: "20px"
    }}>
        <Button onClick={handleClick} disabled={loading}>{t("story.loading_overlay_load_data")}</Button>


        <div style={{
        marginTop: "20px"
      }}>

          <p>{t("story.loading_overlay_long_content")}</p>
        </div>
        <LoadingOverlay visible={loading} loaderType="spinner" loaderSize="lg" message={t("story.loading_overlay_fetching_data")} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story.loading_overlay_custom_title")}</h3>
          <p>{t("story.loading_overlay_custom_desc")}</p>
        </div>
        <LoadingOverlay {...args}>
          <div style={{
          textAlign: "center",
          color: "var(--wim-color-text-on-primary)"
        }}>
            <Icon name="ClockIcon" style={{
            width: "48px",
            height: "48px",
            marginBottom: "16px"
          }} />
            <div style={{
            fontSize: "18px",
            fontWeight: "bold"
          }}>
              {t("story.loading_overlay_wait")}
            </div>
          </div>
        </LoadingOverlay>
      </div>;
  }
}`,...j.parameters?.docs?.source}}}})))()}export{N as i,y as n,T as r,k as t};