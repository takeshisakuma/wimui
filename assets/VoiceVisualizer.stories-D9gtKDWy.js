"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./VoiceVisualizer-BlfXzo2D.js";var d=e({BarsIdle:()=>h,BarsWithData:()=>_,Inactive:()=>y,LargeHeight:()=>b,SentimentVariants:()=>S,WaveformIdle:()=>g,WaveformWithData:()=>v,WithAriaLabel:()=>x,__namedExportsOrder:()=>C,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{f=n(r(),1),l(),s(),a(),p=o(),m={title:`Components/AI/VoiceVisualizer`,component:u,parameters:{layout:`padded`},args:{mode:`bars`,isActive:!0,barCount:24,height:40}},h={name:`Bars — Idle Animation`,args:{mode:`bars`,isActive:!0}},g={name:`Waveform — Idle Animation`,args:{mode:`waveform`,isActive:!0,height:40}},_={name:`Bars — Live Data`,render:()=>{let[e,t]=(0,f.useState)(()=>typeof window<`u`&&window.__VRT__?Array.from({length:24},(e,t)=>.2+.7*Math.abs(Math.sin(t*.5))):Array(24).fill(.05)),n=(0,f.useRef)(0),r=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__)return;let e=()=>{r.current+=.07;let i=r.current;t(Array.from({length:24},(e,t)=>{let n=.5+.45*Math.sin(i+t*.4),r=.05*Math.random();return Math.min(1,Math.max(.05,n+r))})),n.current=requestAnimationFrame(e)};return n.current=requestAnimationFrame(e),()=>cancelAnimationFrame(n.current)},[]),(0,p.jsx)(u,{mode:`bars`,data:e,isActive:!0,height:40})}},v={name:`Waveform — Live Data`,render:()=>{let[e,t]=(0,f.useState)(()=>typeof window<`u`&&window.__VRT__?Array.from({length:64},(e,t)=>{let n=t/63*Math.PI*4;return .5+.4*Math.sin(n)}):Array(64).fill(.5)),n=(0,f.useRef)(0),r=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__)return;let e=()=>{r.current+=.05;let i=r.current;t(Array.from({length:64},(e,t)=>{let n=t/63*Math.PI*4;return .5+.4*Math.sin(n+i)*(.7+.3*Math.sin(i*.5))})),n.current=requestAnimationFrame(e)};return n.current=requestAnimationFrame(e),()=>cancelAnimationFrame(n.current)},[]),(0,p.jsx)(u,{mode:`waveform`,data:e,isActive:!0,height:40})}},y={args:{isActive:!1,mode:`bars`}},b={args:{height:64,barCount:32,isActive:!0}},x={render:()=>{let{t:e}=i(c);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`var(--wim-spacing-sm)`,fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:e(`story.voice_label_recording`)}),(0,p.jsx)(u,{mode:`bars`,isActive:!0,"aria-label":e(`story.voice_label_recording`)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`var(--wim-spacing-sm)`,fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:e(`story.voice_label_playback`)}),(0,p.jsx)(u,{mode:`waveform`,isActive:!0,"aria-label":e(`story.voice_label_playback`)})]})]})}},S={render:function(){let{t:e}=i(c);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_positive`)}),(0,p.jsx)(u,{sentiment:`positive`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_negative`)}),(0,p.jsx)(u,{sentiment:`negative`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_caution`)}),(0,p.jsx)(u,{sentiment:`caution`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_informative`)}),(0,p.jsx)(u,{sentiment:`informative`,isActive:!0})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Bars — Idle Animation",
  args: {
    mode: "bars",
    isActive: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Waveform — Idle Animation",
  args: {
    mode: "waveform",
    isActive: true,
    height: 40
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Bars — Live Data",
  render: () => {
    const [data, setData] = useState<number[]>(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        return Array.from({
          length: 24
        }, (_, i) => 0.2 + 0.7 * Math.abs(Math.sin(i * 0.5)));
      }
      return Array(24).fill(0.05);
    });
    const frameRef = useRef<number>(0);
    const tRef = useRef(0);
    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) return;
      const tick = () => {
        tRef.current += 0.07;
        const t = tRef.current;
        setData(Array.from({
          length: 24
        }, (_, i) => {
          const base = 0.5 + 0.45 * Math.sin(t + i * 0.4);
          const noise = 0.05 * Math.random();
          return Math.min(1, Math.max(0.05, base + noise));
        }));
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameRef.current);
    }, []);
    return <VoiceVisualizer mode="bars" data={data} isActive height={40} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Waveform — Live Data",
  render: () => {
    const [data, setData] = useState<number[]>(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        return Array.from({
          length: 64
        }, (_, i) => {
          const phase = i / 63 * Math.PI * 4;
          return 0.5 + 0.4 * Math.sin(phase);
        });
      }
      return Array(64).fill(0.5);
    });
    const frameRef = useRef<number>(0);
    const tRef = useRef(0);
    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) return;
      const tick = () => {
        tRef.current += 0.05;
        const t = tRef.current;
        setData(Array.from({
          length: 64
        }, (_, i) => {
          const phase = i / 63 * Math.PI * 4;
          return 0.5 + 0.4 * Math.sin(phase + t) * (0.7 + 0.3 * Math.sin(t * 0.5));
        }));
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameRef.current);
    }, []);
    return <VoiceVisualizer mode="waveform" data={data} isActive height={40} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false,
    mode: "bars"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    height: 64,
    barCount: 32,
    isActive: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <div>
          <p style={{
          marginBottom: "var(--wim-spacing-sm)",
          fontSize: "var(--wim-font-size-xs)",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.voice_label_recording")}
          </p>
          <VoiceVisualizer mode="bars" isActive aria-label={t("story.voice_label_recording")} />
        </div>
        <div>
          <p style={{
          marginBottom: "var(--wim-spacing-sm)",
          fontSize: "var(--wim-font-size-xs)",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.voice_label_playback")}
          </p>
          <VoiceVisualizer mode="waveform" isActive aria-label={t("story.voice_label_playback")} />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>
      <div>
        <p style={{
          marginBottom: "8px",
          fontSize: "12px",
          color: "var(--wim-color-text-tertiary)"
        }}>{t("story.voice_sentiment_positive")}</p>
        <VoiceVisualizer sentiment="positive" isActive />
      </div>
      <div>
        <p style={{
          marginBottom: "8px",
          fontSize: "12px",
          color: "var(--wim-color-text-tertiary)"
        }}>{t("story.voice_sentiment_negative")}</p>
        <VoiceVisualizer sentiment="negative" isActive />
      </div>
      <div>
        <p style={{
          marginBottom: "8px",
          fontSize: "12px",
          color: "var(--wim-color-text-tertiary)"
        }}>{t("story.voice_sentiment_caution")}</p>
        <VoiceVisualizer sentiment="caution" isActive />
      </div>
      <div>
        <p style={{
          marginBottom: "8px",
          fontSize: "12px",
          color: "var(--wim-color-text-tertiary)"
        }}>{t("story.voice_sentiment_informative")}</p>
        <VoiceVisualizer sentiment="informative" isActive />
      </div>
    </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`BarsIdle`,`WaveformIdle`,`BarsWithData`,`WaveformWithData`,`Inactive`,`LargeHeight`,`WithAriaLabel`,`SentimentVariants`]}));w();export{h as BarsIdle,_ as BarsWithData,y as Inactive,b as LargeHeight,S as SentimentVariants,g as WaveformIdle,v as WaveformWithData,x as WithAriaLabel,C as __namedExportsOrder,m as default,w as n,d as t};