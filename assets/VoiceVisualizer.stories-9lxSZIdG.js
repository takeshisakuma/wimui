"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./VoiceVisualizer-Cz0ldsPl.js";var d=n({BarsIdle:()=>_,BarsWithData:()=>y,Disabled:()=>S,FillHeight:()=>w,Inactive:()=>x,LargeHeight:()=>T,Playback:()=>C,SentimentVariants:()=>D,WaveformIdle:()=>v,WaveformWithData:()=>b,WithAriaLabel:()=>E,__namedExportsOrder:()=>O,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{f=e(r(),1),l(),a(),o(),p=c(),m={title:`Components/AI/VoiceVisualizer`,component:u,parameters:{layout:`padded`},args:{mode:`bars`,isActive:!0,height:40}},h=Array.from({length:120},(e,t)=>{let n=t/119;return .08+.85*(Math.sin(Math.PI*n)*(.5+.5*Math.sin(n*7*Math.PI)**2))*Math.abs(Math.sin(t*.9))}),g=Array.from({length:360},(e,t)=>{let n=t/359;return .5+.45*(Math.sin(Math.PI*n)*(.55+.45*Math.sin(n*5*Math.PI)**2))*Math.sin(t*.28)}),_={name:`Bars — Idle Animation`,args:{mode:`bars`,isActive:!0}},v={name:`Waveform — Idle Animation`,args:{mode:`waveform`,isActive:!0,height:40}},y={name:`Bars — Live Data`,render:()=>{let[e,t]=(0,f.useState)(()=>typeof window<`u`&&window.__VRT__?Array.from({length:24},(e,t)=>.2+.7*Math.abs(Math.sin(t*.5))):Array(24).fill(.05)),n=(0,f.useRef)(0),r=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__)return;let e=()=>{r.current+=.07;let i=r.current;t(Array.from({length:24},(e,t)=>{let n=.5+.45*Math.sin(i+t*.4),r=.05*Math.random();return Math.min(1,Math.max(.05,n+r))})),n.current=requestAnimationFrame(e)};return n.current=requestAnimationFrame(e),()=>cancelAnimationFrame(n.current)},[]),(0,p.jsx)(u,{mode:`bars`,data:e,isActive:!0,height:40})}},b={name:`Waveform — Live Data`,render:()=>{let[e,t]=(0,f.useState)(()=>typeof window<`u`&&window.__VRT__?Array.from({length:64},(e,t)=>{let n=t/63*Math.PI*4;return .5+.4*Math.sin(n)}):Array(64).fill(.5)),n=(0,f.useRef)(0),r=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__)return;let e=()=>{r.current+=.05;let i=r.current;t(Array.from({length:64},(e,t)=>{let n=t/63*Math.PI*4;return .5+.4*Math.sin(n+i)*(.7+.3*Math.sin(i*.5))})),n.current=requestAnimationFrame(e)};return n.current=requestAnimationFrame(e),()=>cancelAnimationFrame(n.current)},[]),(0,p.jsx)(u,{mode:`waveform`,data:e,isActive:!0,height:40})}},x={args:{isActive:!1,mode:`waveform`,data:g,height:48}},S={args:{disabled:!0,isActive:!1,mode:`bars`}},C={render:function(){let{t:e}=i(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xl)`},children:[(0,p.jsx)(u,{mode:`bars`,isActive:!1,data:h,progress:.35,height:32,"aria-label":e(`story.voice_label_playback`)}),(0,p.jsx)(u,{mode:`waveform`,isActive:!1,data:g,progress:.62,height:48,"aria-label":e(`story.voice_label_playback`)})]})}},w={render:()=>(0,p.jsx)(`div`,{style:{height:96,display:`flex`},children:(0,p.jsx)(u,{mode:`bars`,height:`fill`,isActive:!1,data:h})})},T={args:{height:64,barCount:32,isActive:!0}},E={render:()=>{let{t:e}=i(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`var(--wim-spacing-sm)`,fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:e(`story.voice_label_recording`)}),(0,p.jsx)(u,{mode:`bars`,isActive:!0,"aria-label":e(`story.voice_label_recording`)})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`var(--wim-spacing-sm)`,fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:e(`story.voice_label_playback`)}),(0,p.jsx)(u,{mode:`waveform`,isActive:!0,"aria-label":e(`story.voice_label_playback`)})]})]})}},D={render:function(){let{t:e}=i(s);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_positive`)}),(0,p.jsx)(u,{sentiment:`positive`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_negative`)}),(0,p.jsx)(u,{sentiment:`negative`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_caution`)}),(0,p.jsx)(u,{sentiment:`caution`,isActive:!0})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`12px`,color:`var(--wim-color-text-tertiary)`},children:e(`story.voice_sentiment_informative`)}),(0,p.jsx)(u,{sentiment:`informative`,isActive:!0})]})]})}},O=[`BarsIdle`,`WaveformIdle`,`BarsWithData`,`WaveformWithData`,`Inactive`,`Disabled`,`Playback`,`FillHeight`,`LargeHeight`,`WithAriaLabel`,`SentimentVariants`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Bars — Idle Animation",
  args: {
    mode: "bars",
    isActive: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Waveform — Idle Animation",
  args: {
    mode: "waveform",
    isActive: true,
    height: 40
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false,
    mode: "waveform",
    data: RECORDED_WAVE,
    height: 48
  }
}`,...x.parameters?.docs?.source},description:{story:`録音が終わった音声。止まっているが、薄くはしない（使えないわけではないため）。`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    isActive: false,
    mode: "bars"
  }
}`,...S.parameters?.docs?.source},description:{story:`音声を拾えない・流せない（マイクの許可が無いなど）ときだけ薄くする。`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-xl)"
    }}>
        <VoiceVisualizer mode="bars" isActive={false} data={RECORDED} progress={0.35} height={32} aria-label={t("story.voice_label_playback")} />
        <VoiceVisualizer mode="waveform" isActive={false} data={RECORDED_WAVE} progress={0.62} height={48} aria-label={t("story.voice_label_playback")} />
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"録音の再生。`progress` より手前を色付き、後ろを中立色で描く。",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 96,
    display: "flex"
  }}>{/* 親の高さ（デモ用の固定値） */}
      <VoiceVisualizer mode="bars" height="fill" isActive={false} data={RECORDED} />
    </div>
}`,...w.parameters?.docs?.source},description:{story:'`height="fill"` は親の高さに合わせる（親の高さが決まっていること）。棒の本数は幅から決まる。',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    height: 64,
    barCount: 32,
    isActive: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}export{x as a,d as c,k as d,w as i,v as l,y as n,T as o,S as r,C as s,_ as t,b as u};