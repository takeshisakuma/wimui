"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Label-CaPgujqk.js";import{n as d,t as f}from"./SearchInput-5EIymSie.js";var p=n({Default:()=>_,Ghost:()=>y,SmartSearchWithAI_Example:()=>v,__namedExportsOrder:()=>b,default:()=>g}),m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g={title:`Components/Basic Inputs/SearchInput`,component:f,tags:[],args:{disabled:!1},argTypes:{disabled:{control:`boolean`}}},_={render:function(e){let{t}=i(s);return(0,h.jsx)(u,{label:t(`doc.search`),children:(0,h.jsx)(f,{...e,placeholder:t(`story.searchinput_placeholder`)})})}},v={render:function(e){let{t}=i(s),[n,r]=m.useState(``),[a,o]=m.useState([]),[c,l]=m.useState(!1),d=async e=>{if(r(e),!e.trim()){o([]);return}l(!0),await new Promise(e=>setTimeout(e,800)),o([t(`components:smart.search_result_1`,{val:e}),t(`components:smart.search_result_2`,{val:e}),t(`components:smart.search_match`,{val:e})]),l(!1)};return(0,h.jsxs)(`div`,{style:{width:`min(400px, 100%)`},children:[(0,h.jsx)(u,{label:t(`components:smart.search_ai_title`),children:(0,h.jsxs)(`div`,{style:{position:`relative`},children:[(0,h.jsx)(f,{...e,width:400,value:n,onChange:e=>d(e.target.value),placeholder:t(`components:smart.search_placeholder`)}),c&&(0,h.jsx)(`div`,{style:{position:`absolute`,right:40,top:`50%`,transform:`translateY(-50%)`,fontSize:12,color:`var(--wim-color-text-secondary)`},children:t(`components:smart.search_thinking`)})]})}),a.length>0&&(0,h.jsxs)(`div`,{style:{marginTop:8,padding:12,border:`1px solid var(--wim-color-border)`,borderRadius:8,background:`var(--wim-color-surface-variant)`},children:[(0,h.jsx)(`div`,{style:{fontSize:12,fontWeight:`bold`,marginBottom:8,color:`var(--wim-color-text-accent)`},children:t(`components:smart.search_suggestions`)}),(0,h.jsx)(`ul`,{style:{margin:0,paddingLeft:20,fontSize:14},children:a.map((e,t)=>(0,h.jsx)(`li`,{style:{padding:`4px 0`},children:e},t))})]})]})}},y={..._,args:{..._.args,variant:`ghost`}},b=[`Default`,`SmartSearchWithAI_Example`,`Ghost`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("doc.search")}>
        <SearchInput {...args} placeholder={t("story.searchinput_placeholder")} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [query, setQuery] = React.useState("");
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);

    // Simulated AI semantic search
    const handleSearch = async (val: string) => {
      setQuery(val);
      if (!val.trim()) {
        setSuggestions([]);
        return;
      }
      setIsSearching(true);
      // Simulate API call to Google Generative AI or embeddings search
      await new Promise(resolve => setTimeout(resolve, 800));
      setSuggestions([t("components:smart.search_result_1", {
        val
      }), t("components:smart.search_result_2", {
        val
      }), t("components:smart.search_match", {
        val
      })]);
      setIsSearching(false);
    };
    return <div style={{
      width: "min(400px, 100%)"
    }}>
        <Label label={t("components:smart.search_ai_title")}>
          <div style={{
          position: "relative"
        }}>
            <SearchInput {...args} width={400} value={query} onChange={e => handleSearch(e.target.value)} placeholder={t("components:smart.search_placeholder")} />
            {isSearching && <div style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 12,
            color: "var(--wim-color-text-secondary)"
          }}>
                {t("components:smart.search_thinking")}
              </div>}
          </div>
        </Label>
        {suggestions.length > 0 && <div style={{
        marginTop: 8,
        padding: 12,
        border: "1px solid var(--wim-color-border)",
        borderRadius: 8,
        background: "var(--wim-color-surface-variant)"
      }}>
            <div style={{
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 8,
          color: "var(--wim-color-text-accent)"
        }}>
              {t("components:smart.search_suggestions")}
            </div>
            <ul style={{
          margin: 0,
          paddingLeft: 20,
          fontSize: 14
        }}>
              {suggestions.map((s, i) => <li key={i} style={{
            padding: "4px 0"
          }}>{s}</li>)}
            </ul>
          </div>}
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: "ghost"
  }
}`,...y.parameters?.docs?.source}}}})))()}export{x as i,y as n,p as r,_ as t};