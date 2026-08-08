"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{On as l,t as u}from"./src-BE5jBQ9L.js";import{t as d}from"./Icon-Bz8kwOgZ.js";import{t as f}from"./Card-eglN3578.js";import{t as p}from"./Button-d-SlSJ4S.js";import{n as m,t as h}from"./scene_landscape-DRLAOg4r.js";var g=e({BackdropVariants:()=>w,Basic:()=>b,BlurEffects:()=>T,CustomLoader:()=>O,DifferentLoaderTypes:()=>C,FullScreen:()=>E,InsideCard:()=>x,Interactive:()=>D,WithMessage:()=>S,__namedExportsOrder:()=>k,default:()=>y}),_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{_=n(r(),1),s(),a(),u(),h(),v=o(),y={title:`Components/Loading States/LoadingOverlay`,component:l,parameters:{layout:`padded`},argTypes:{visible:{control:`boolean`},loaderType:{control:`select`,options:[`spinner`,`bars`,`dots`,`pulse`]},loaderSize:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},loaderColor:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`currentColor`]},backdropVariant:{control:`select`,options:[`light`,`dark`]},blur:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},fixed:{control:`boolean`}}},b={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(c);return(0,v.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,v.jsxs)(`div`,{style:{padding:`20px`},children:[(0,v.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,v.jsx)(`p`,{children:t(`story.loading_overlay_content_desc`)})]}),(0,v.jsx)(l,{...e})]})}},x={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(c);return(0,v.jsxs)(f,{children:[(0,v.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,v.jsx)(`p`,{children:t(`story.loading_overlay_content_desc`)}),(0,v.jsx)(l,{...e})]})}},S={args:{visible:!0,loaderType:`spinner`,loaderSize:`lg`,loaderColor:`primary`},render:function(e){let{t}=i(c);return(0,v.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,v.jsxs)(`div`,{style:{padding:`20px`},children:[(0,v.jsx)(`h3`,{children:t(`story.loading_overlay_content_title`)}),(0,v.jsx)(`p`,{children:t(`story.loading_overlay_with_msg_desc`)})]}),(0,v.jsx)(l,{...e,message:t(`story.loading_overlay_loading_data`)})]})}},C={render:()=>(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[`spinner`,`bars`,`dots`,`pulse`].map(e=>(0,v.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,v.jsx)(`div`,{style:{padding:`20px`},children:(0,v.jsx)(`h4`,{children:e.charAt(0).toUpperCase()+e.slice(1)})}),(0,v.jsx)(l,{visible:!0,loaderType:e})]},e))})},w={render:function(){let{t:e}=i(c);return(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[(0,v.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-glass-bg)`},children:[(0,v.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`},children:(0,v.jsx)(`h4`,{children:e(`story.loading_overlay_light_backdrop`)})}),(0,v.jsx)(l,{visible:!0,backdropVariant:`light`,loaderColor:`primary`})]}),(0,v.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,background:`var(--wim-color-glass-bg)`},children:[(0,v.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`},children:(0,v.jsx)(`h4`,{children:e(`story.loading_overlay_dark_backdrop`)})}),(0,v.jsx)(l,{visible:!0,backdropVariant:`dark`,loaderColor:`currentColor`})]})]})}},T={render:function(){let{t:e}=i(c);return(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`20px`},children:[`none`,`sm`,`md`,`lg`].map(t=>(0,v.jsxs)(`div`,{style:{position:`relative`,height:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,backgroundImage:`url(${m})`,backgroundSize:`cover`},children:[(0,v.jsx)(`div`,{style:{padding:`20px`,color:`var(--wim-color-text-on-primary)`,textShadow:`0 0 4px black`},children:(0,v.jsxs)(`h4`,{children:[e(`story.loading_overlay_blur`),`: `,t]})}),(0,v.jsx)(l,{visible:!0,blur:t})]},t))})}},E={args:{visible:!1,fixed:!0,loaderType:`spinner`,loaderSize:`xl`},render:function(e){let{t}=i(c),[n,r]=_.useState(!1);return(0,v.jsxs)(`div`,{style:{padding:`20px`},children:[(0,v.jsx)(p,{onClick:()=>{r(!0),setTimeout(()=>r(!1),3e3)},children:t(`story.loading_overlay_show_fullscreen`)}),(0,v.jsx)(`p`,{children:t(`story.loading_overlay_fullscreen_desc`)}),(0,v.jsx)(l,{...e,visible:n,message:t(`story.loading_overlay_loading_app`)})]})}},D={render:function(){let{t:e}=i(c),[t,n]=_.useState(!1);return(0,v.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`,padding:`20px`},children:[(0,v.jsx)(p,{onClick:()=>{n(!0),setTimeout(()=>n(!1),2e3)},disabled:t,children:e(`story.loading_overlay_load_data`)}),(0,v.jsx)(`div`,{style:{marginTop:`20px`},children:(0,v.jsx)(`p`,{children:e(`story.loading_overlay_long_content`)})}),(0,v.jsx)(l,{visible:t,loaderType:`spinner`,loaderSize:`lg`,message:e(`story.loading_overlay_fetching_data`)})]})}},O={args:{visible:!0},render:function(e){let{t}=i(c);return(0,v.jsxs)(`div`,{style:{position:`relative`,height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:[(0,v.jsxs)(`div`,{style:{padding:`20px`},children:[(0,v.jsx)(`h3`,{children:t(`story.loading_overlay_custom_title`)}),(0,v.jsx)(`p`,{children:t(`story.loading_overlay_custom_desc`)})]}),(0,v.jsx)(l,{...e,children:(0,v.jsxs)(`div`,{style:{textAlign:`center`,color:`var(--wim-color-text-on-primary)`},children:[(0,v.jsx)(d,{name:`ClockIcon`,style:{width:`48px`,height:`48px`,marginBottom:`16px`}}),(0,v.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`bold`},children:t(`story.loading_overlay_wait`)})]})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`InsideCard`,`WithMessage`,`DifferentLoaderTypes`,`BackdropVariants`,`BlurEffects`,`FullScreen`,`Interactive`,`CustomLoader`]}));A();export{w as BackdropVariants,b as Basic,T as BlurEffects,O as CustomLoader,C as DifferentLoaderTypes,E as FullScreen,x as InsideCard,D as Interactive,S as WithMessage,k as __namedExportsOrder,y as default,A as n,g as t};