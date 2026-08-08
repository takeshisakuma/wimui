"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";import{o as d}from"./Lightbox-BHnZSO8p.js";var f,p=t((()=>{f=``+new URL(`vibrant_landscape-BL-xlQBo.png`,import.meta.url).href})),m=e({AdvancedEffects:()=>E,BlendingEffects:()=>O,Circular:()=>S,Default:()=>y,Filters:()=>w,Glassmorphism:()=>T,MotionEffects:()=>D,Rounded:()=>x,WithCaption:()=>b,WithShadow:()=>C,__namedExportsOrder:()=>k,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{h=n(r(),1),p(),s(),a(),l(),g=o(),_=n(r(),1),v={title:`Components/Media/Image`,component:d,parameters:{layout:`centered`},argTypes:{radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},fit:{control:`select`,options:[`contain`,`cover`,`fill`,`none`,`scale-down`]}}},y={render:function(e){let{t}=i(c);return(0,g.jsx)(d,{...e,alt:t(`story.image_alt`)})},args:{src:f,width:400}},b={render:function(e){let{t}=i(c);return(0,g.jsx)(d,{...e,alt:t(`story.image_alt`),caption:t(`story.image_caption`)})},args:{src:f,width:400}},x={render:function(e){let{t}=i(c);return(0,g.jsx)(d,{...e,alt:t(`story.image_alt`)})},args:{src:f,width:200,height:200,radius:`lg`,fit:`cover`}},S={render:function(e){let{t}=i(c);return(0,g.jsx)(d,{...e,alt:t(`story.image_alt`)})},args:{src:f,width:150,height:150,radius:`full`,fit:`cover`,border:!0}},C={render:function(e){let{t}=i(c);return(0,g.jsx)(d,{...e,alt:t(`story.image_alt`)})},args:{src:f,width:400,shadow:!0,radius:`md`}},w={render:function(e){let{t}=i(c);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`2rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`},children:t(`story.image_filter_grayscale`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt`),filter:{grayscale:`lg`},hoverFilter:{grayscale:`none`},width:260})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`},children:t(`story.image_filter_blur`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt`),filter:{blur:`sm`},hoverFilter:{blur:`none`},width:260})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`},children:t(`story.image_filter_sepia`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt`),filter:{sepia:`md`},width:260})]})]})},args:{src:f}},T={render:function(e){let{t}=i(c);return(0,g.jsxs)(`div`,{style:{position:`relative`,width:`600px`,height:`300px`,overflow:`hidden`,borderRadius:`12px`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,g.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url(${f})`,backgroundSize:`cover`,filter:`saturate(1.5) brightness(0.8)`}}),(0,g.jsxs)(`div`,{style:{position:`relative`,zIndex:1,textAlign:`center`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt`),backdropFilter:{blur:`md`},hoverBackdropFilter:{blur:`none`},style:{backgroundColor:`var(--wim-color-glass-bg)`,padding:`20px`,color:`var(--wim-color-text-primary)`},width:300,radius:`lg`,border:!0}),(0,g.jsx)(`p`,{style:{color:`var(--wim-color-text-on-primary)`,marginTop:`1rem`,fontWeight:`bold`},children:t(`story.image_backdrop_hover_clear`,{defaultValue:`Hover to clear backdrop blur`})})]})]})},args:{src:f}},E={render:function(e){let{t}=i(c);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_advanced_noise`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt_low_noise`),noise:`sm`,width:200,caption:`${t(`common.intensity`,{defaultValue:`Intensity`})}: sm`}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_medium_noise`),noise:`md`,width:200,caption:`${t(`common.intensity`,{defaultValue:`Intensity`})}: md`}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_high_noise`),noise:`lg`,width:200,caption:`${t(`common.intensity`,{defaultValue:`Intensity`})}: lg`})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_advanced_duotone`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt_duotone_gold`),duotone:{light:`#f0dfaf`,dark:`#3f3f3f`},width:300,caption:t(`story.image_advanced_goldish`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_duotone_cyber`),duotone:{light:`#00fff2`,dark:`#6000ff`},width:300,caption:t(`story.image_advanced_cyberpunk`)})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_advanced_overlay_vignette`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,g.jsxs)(`div`,{style:{position:`relative`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt_overlay`),overlay:{color:`linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,intensity:`md`},width:300}),(0,g.jsxs)(`div`,{style:{position:`absolute`,bottom:`12px`,left:`12px`,padding:`8px 12px`,color:`var(--wim-color-white)`,background:`var(--wim-color-overlay-strong)`,borderRadius:`var(--wim-radius-sm)`,zIndex:2},children:[(0,g.jsx)(`h4`,{style:{margin:0},children:t(`story.image_advanced_text_over`)}),(0,g.jsx)(`p`,{style:{margin:0,fontSize:`0.8rem`},children:t(`story.image_advanced_overlay_readability`)})]})]}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_hover_overlay`),overlay:{color:`rgba(100, 108, 255, 0.4)`,showOnHover:!0},width:300,caption:t(`story.image_advanced_hover_brand`)})]})]})]})},args:{src:f,radius:`md`}},D={render:function(e){let{t}=i(c),[n,r]=h.useState(0);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3rem`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`2rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_motion_effects_smooth_zoom`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_zoom`),zoom:1.1,width:300,radius:`md`,caption:t(`story.image_motion_effects_zoom_caption`)})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_motion_effects_3d_tilt`)}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_tilt`),tilt:!0,width:300,radius:`md`,shadow:!0,caption:t(`story.image_motion_effects_tilt_caption`)})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_motion_effects_fade_in`)}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,g.jsx)(`div`,{style:{display:`flex`,gap:`1rem`},children:(0,g.jsx)(u,{variant:`solid`,onClick:()=>r(e=>e+1),icon:`RefreshIcon`,children:t(`story.image_motion_effects_reload`)})}),(0,_.createElement)(d,{...e,alt:t(`story.image_alt`),key:n,src:`${f}?k=${n}`,fadeIn:!0,demoDelay:2e3,width:400,radius:`md`,shadow:!0,caption:t(`story.image_motion_effects_interactive_caption`)})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_filter_combo`)}),(0,g.jsx)(`div`,{style:{maxWidth:`500px`},children:(0,g.jsx)(d,{...e,alt:t(`story.image_alt_combo`),zoom:!0,tilt:!0,noise:`sm`,overlay:{color:`linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)`,showOnHover:!0},filter:{grayscale:`sm`},hoverFilter:{grayscale:`none`},width:`100%`,radius:`lg`,shadow:!0,caption:t(`story.image_caption_combo`)})})]})]})},args:{src:f}},O={render:function(e){let{t}=i(c);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3rem`},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_blending_overlay`,{defaultValue:`Overlay Blending`})}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt_multiply`,{defaultValue:`Multiply overlay`}),overlay:{color:`#3498db`,intensity:`md`,blendMode:`multiply`},width:300,caption:t(`story.image_caption_blue_multiply`,{defaultValue:`Blue Multiply (Adds tint)`})}),(0,g.jsx)(d,{...e,alt:t(`story.image_alt_overlay`,{defaultValue:`Overlay blend`}),overlay:{color:`#e74c3c`,intensity:`md`,blendMode:`overlay`},width:300,caption:t(`story.image_caption_red_overlay`,{defaultValue:`Red Overlay (Increases contrast)`})})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_blending_image`,{defaultValue:`Image Blending with Background`})}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,g.jsx)(`div`,{style:{padding:`20px`,background:`var(--wim-color-surface-variant)`},children:(0,g.jsx)(d,{...e,alt:t(`story.image_alt_multiply_bg`,{defaultValue:`Multiply image`}),blendMode:`multiply`,bgColor:`#f1c40f`,width:300,caption:t(`story.image_caption_yellow_multiply`,{defaultValue:`Image Multiply with Yellow BG`})})}),(0,g.jsx)(`div`,{style:{padding:`20px`,background:`var(--wim-color-surface-inverse)`,color:`var(--wim-color-text-on-inverse)`},children:(0,g.jsx)(d,{...e,alt:t(`story.image_alt_screen`,{defaultValue:`Image Screen (Whitening effect)`}),blendMode:`screen`,width:300,caption:t(`story.image_caption_screen`,{defaultValue:`Image Screen (Whitening effect)`})})})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{style:{marginBottom:`1rem`,fontWeight:`bold`},children:t(`story.image_blending_difference`,{defaultValue:`Creative: Difference Mode`})}),(0,g.jsxs)(`div`,{style:{position:`relative`,width:`400px`},children:[(0,g.jsx)(d,{...e,alt:t(`story.image_alt_difference`,{defaultValue:`Difference`}),overlay:{color:`white`,intensity:1,blendMode:`difference`},width:`100%`}),(0,g.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,color:`white`,fontSize:`2rem`,fontWeight:`bold`,mixBlendMode:`difference`,padding:`0.5rem 1rem`,borderRadius:`4px`},children:t(`story.image_inverted_text`,{defaultValue:`INVERTED TEXT`})})]})]})]})},args:{src:f,radius:`md`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} caption={t("story.image_caption")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 200,
    height: 200,
    radius: "lg",
    fit: "cover"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400,
    shadow: true,
    radius: "md"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem"
    }}>
        <div>
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>{t("story.image_filter_grayscale")}</p>
          <Image {...args} alt={t("story.image_alt")} filter={{
          grayscale: "lg"
        }} hoverFilter={{
          grayscale: "none"
        }} width={260} />
        </div>
        <div>
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>{t("story.image_filter_blur")}</p>
          <Image {...args} alt={t("story.image_alt")} filter={{
          blur: "sm"
        }} hoverFilter={{
          blur: "none"
        }} width={260} />
        </div>
        <div>
          <p style={{
          marginBottom: "0.5rem",
          fontSize: "0.875rem"
        }}>{t("story.image_filter_sepia")}</p>
          <Image {...args} alt={t("story.image_alt")} filter={{
          sepia: "md"
        }} width={260} />
        </div>
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      width: "600px",
      height: "300px",
      overflow: "hidden",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
        {/* 背景画像 */}
        <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: \`url(\${vibrantLandscape})\`,
        backgroundSize: "cover",
        filter: "saturate(1.5) brightness(0.8)"
      }} />
        {/* Backdrop Filterをかけた画像（透過素材を想定） */}
        <div style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center"
      }}>
          <Image {...args} alt={t("story.image_alt")} backdropFilter={{
          blur: "md"
        }} hoverBackdropFilter={{
          blur: "none"
        }} style={{
          backgroundColor: "var(--wim-color-glass-bg)",
          padding: "20px",
          color: "var(--wim-color-text-primary)"
        }} width={300} radius="lg" border />
          <p style={{
          color: "var(--wim-color-text-on-primary)",
          marginTop: "1rem",
          fontWeight: "bold"
        }}>
            {t("story.image_backdrop_hover_clear", {
            defaultValue: "Hover to clear backdrop blur"
          })}
          </p>
        </div>
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>
        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_advanced_noise")}</p>
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <Image {...args} alt={t("story.image_alt_low_noise")} noise="sm" width={200} caption={\`\${t("common.intensity", {
            defaultValue: "Intensity"
          })}: sm\`} />
            <Image {...args} alt={t("story.image_alt_medium_noise")} noise="md" width={200} caption={\`\${t("common.intensity", {
            defaultValue: "Intensity"
          })}: md\`} />
            <Image {...args} alt={t("story.image_alt_high_noise")} noise="lg" width={200} caption={\`\${t("common.intensity", {
            defaultValue: "Intensity"
          })}: lg\`} />
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_advanced_duotone")}</p>
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <Image {...args} alt={t("story.image_alt_duotone_gold")} duotone={{
            light: "#f0dfaf",
            dark: "#3f3f3f"
          }} width={300} caption={t("story.image_advanced_goldish")} />
            <Image {...args} alt={t("story.image_alt_duotone_cyber")} duotone={{
            light: "#00fff2",
            dark: "#6000ff"
          }} width={300} caption={t("story.image_advanced_cyberpunk")} />
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_advanced_overlay_vignette")}</p>
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <div style={{
            position: "relative"
          }}>
              <Image {...args} alt={t("story.image_alt_overlay")} overlay={{
              color: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              intensity: "md"
            }} width={300} />
              {/* 画像上のテキストはスクリム背景で実コントラストを担保する（axe: color-contrast） */}
              <div style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              padding: "8px 12px",
              color: "var(--wim-color-white)",
              background: "var(--wim-color-overlay-strong)",
              borderRadius: "var(--wim-radius-sm)",
              zIndex: 2
            }}>
                <h4 style={{
                margin: 0
              }}>{t("story.image_advanced_text_over")}</h4>
                <p style={{
                margin: 0,
                fontSize: "0.8rem"
              }}>{t("story.image_advanced_overlay_readability")}</p>
              </div>
            </div>
            
            <Image {...args} alt={t("story.image_alt_hover_overlay")} overlay={{
            color: "rgba(100, 108, 255, 0.4)",
            showOnHover: true
          }} width={300} caption={t("story.image_advanced_hover_brand")} />
          </div>
        </div>
      </div>;
  },
  args: {
    src: vibrantLandscape,
    radius: "md"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [imageKey, setImageKey] = React.useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
          <div>
            <p style={{
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>{t("story.image_motion_effects_smooth_zoom")}</p>
            <Image {...args} alt={t("story.image_alt_zoom")} zoom={1.1} width={300} radius="md" caption={t("story.image_motion_effects_zoom_caption")} />
          </div>
          <div>
            <p style={{
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>{t("story.image_motion_effects_3d_tilt")}</p>
            <Image {...args} alt={t("story.image_alt_tilt")} tilt width={300} radius="md" shadow caption={t("story.image_motion_effects_tilt_caption")} />
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_motion_effects_fade_in")}</p>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
            <div style={{
            display: "flex",
            gap: "1rem"
          }}>
              <Button variant="solid" onClick={() => setImageKey(prev => prev + 1)} icon="RefreshIcon">{t("story.image_motion_effects_reload")}</Button>
            </div>
            <Image {...args} alt={t("story.image_alt")} key={imageKey} src={\`\${vibrantLandscape}?k=\${imageKey}\`} fadeIn demoDelay={2000} width={400} radius="md" shadow caption={t("story.image_motion_effects_interactive_caption")} />
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_filter_combo")}</p>
          <div style={{
          maxWidth: "500px"
        }}>
            <Image {...args} alt={t("story.image_alt_combo")} zoom tilt noise="sm" overlay={{
            color: "linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)",
            showOnHover: true
          }} filter={{
            grayscale: "sm"
          }} hoverFilter={{
            grayscale: "none"
          }} width="100%" radius="lg" shadow caption={t("story.image_caption_combo")} />
          </div>
        </div>
      </div>;
  },
  args: {
    src: vibrantLandscape
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem"
    }}>
        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_blending_overlay", {
            defaultValue: "Overlay Blending"
          })}</p>
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <Image {...args} alt={t("story.image_alt_multiply", {
            defaultValue: "Multiply overlay"
          })} overlay={{
            color: "#3498db",
            intensity: "md",
            blendMode: "multiply"
          }} width={300} caption={t("story.image_caption_blue_multiply", {
            defaultValue: "Blue Multiply (Adds tint)"
          })} />
            <Image {...args} alt={t("story.image_alt_overlay", {
            defaultValue: "Overlay blend"
          })} overlay={{
            color: "#e74c3c",
            intensity: "md",
            blendMode: "overlay"
          }} width={300} caption={t("story.image_caption_red_overlay", {
            defaultValue: "Red Overlay (Increases contrast)"
          })} />
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_blending_image", {
            defaultValue: "Image Blending with Background"
          })}</p>
          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <div style={{
            padding: "20px",
            background: "var(--wim-color-surface-variant)"
          }}>
              <Image {...args} alt={t("story.image_alt_multiply_bg", {
              defaultValue: "Multiply image"
            })} blendMode="multiply" bgColor="#f1c40f" width={300} caption={t("story.image_caption_yellow_multiply", {
              defaultValue: "Image Multiply with Yellow BG"
            })} />
            </div>
            <div style={{
            padding: "20px",
            background: "var(--wim-color-surface-inverse)",
            color: "var(--wim-color-text-on-inverse)"
          }}>
              <Image {...args} alt={t("story.image_alt_screen", {
              defaultValue: "Image Screen (Whitening effect)"
            })} blendMode="screen" width={300} caption={t("story.image_caption_screen", {
              defaultValue: "Image Screen (Whitening effect)"
            })} />
            </div>
          </div>
        </div>

        <div>
          <p style={{
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>{t("story.image_blending_difference", {
            defaultValue: "Creative: Difference Mode"
          })}</p>
          <div style={{
          position: "relative",
          width: "400px"
        }}>
            <Image {...args} alt={t("story.image_alt_difference", {
            defaultValue: "Difference"
          })} overlay={{
            color: "white",
            intensity: 1,
            blendMode: "difference"
          }} width="100%" />
            <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            mixBlendMode: "difference",
            padding: "0.5rem 1rem",
            borderRadius: "4px"
          }}>
              {t("story.image_inverted_text", {
              defaultValue: "INVERTED TEXT"
            })}
            </div>
          </div>
        </div>
      </div>;
  },
  args: {
    src: vibrantLandscape,
    radius: "md"
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithCaption`,`Rounded`,`Circular`,`WithShadow`,`Filters`,`Glassmorphism`,`AdvancedEffects`,`MotionEffects`,`BlendingEffects`]}));A();export{E as AdvancedEffects,O as BlendingEffects,S as Circular,y as Default,w as Filters,T as Glassmorphism,D as MotionEffects,x as Rounded,b as WithCaption,C as WithShadow,k as __namedExportsOrder,v as default,A as n,m as t};