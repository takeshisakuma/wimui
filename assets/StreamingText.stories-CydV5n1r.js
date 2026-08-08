"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{n as l,t as u}from"./StreamingText-DsEhBHX5.js";var d=e({Default:()=>h,Streaming:()=>g,WithCursor:()=>_,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v,y=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/AI/StreamingText`,component:u,parameters:{layout:`centered`},argTypes:{isStreaming:{control:`boolean`},content:{control:`text`}}},h={render:function(e){let{t}=i(c);return(0,p.jsx)(`div`,{style:{width:560},children:(0,p.jsx)(u,{...e,content:e.content??t(`story.streamingtext_sample`)})})},args:{isStreaming:!1}},g={render:function(e){let{t}=i(c),[n,r]=(0,f.useState)(``),a=e.content??t(`story.streamingtext_sample`);(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__){r(a);return}r(``);let e=0,t=setInterval(()=>{e+=3,r(a.slice(0,e)),e>=a.length&&clearInterval(t)},30);return()=>clearInterval(t)},[a]);let o=n.length<a.length;return(0,p.jsx)(`div`,{style:{width:560},children:(0,p.jsx)(u,{...e,content:n,isStreaming:o})})},args:{}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(`div`,{style:{width:560},children:(0,p.jsx)(u,{...e,content:e.content??t(`story.streamingtext_thinking`)})})},args:{isStreaming:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: 560
    }}>
        <StreamingText {...args} content={args.content ?? t("story.streamingtext_sample")} />
      </div>;
  },
  args: {
    isStreaming: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [displayed, setDisplayed] = useState("");
    const full = args.content ?? t("story.streamingtext_sample");
    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        setDisplayed(full);
        return;
      }
      setDisplayed("");
      let i = 0;
      const timer = setInterval(() => {
        i += 3;
        setDisplayed(full.slice(0, i));
        if (i >= full.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }, [full]);
    const isStreaming = displayed.length < full.length;
    return <div style={{
      width: 560
    }}>
        <StreamingText {...args} content={displayed} isStreaming={isStreaming} />
      </div>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: 560
    }}>
        <StreamingText {...args} content={args.content ?? t("story.streamingtext_thinking")} />
      </div>;
  },
  args: {
    isStreaming: true
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Streaming`,`WithCursor`]}));y();export{h as Default,g as Streaming,_ as WithCursor,v as __namedExportsOrder,m as default,y as n,d as t};