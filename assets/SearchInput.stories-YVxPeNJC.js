"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{dr as l,t as u}from"./src-BE5jBQ9L.js";import{a as d}from"./FieldTemplate-C0nkiaIz.js";var f=e({Default:()=>g,SmartSearchWithAI_Example:()=>_,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v,y=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Basic Inputs/SearchInput`,component:l,tags:[],args:{disabled:!1},argTypes:{disabled:{control:`boolean`}}},g={render:function(e){let{t}=i(c);return(0,m.jsx)(d,{label:t(`doc.search`),children:(0,m.jsx)(l,{...e,placeholder:t(`story.searchinput_placeholder`)})})}},_={render:function(e){let{t}=i(c),[n,r]=p.useState(``),[a,o]=p.useState([]),[s,u]=p.useState(!1),f=async e=>{if(r(e),!e.trim()){o([]);return}u(!0),await new Promise(e=>setTimeout(e,800)),o([t(`components:smart.search_result_1`,{val:e}),t(`components:smart.search_result_2`,{val:e}),t(`components:smart.search_match`,{val:e})]),u(!1)};return(0,m.jsxs)(`div`,{style:{width:400},children:[(0,m.jsx)(d,{label:t(`components:smart.search_ai_title`),children:(0,m.jsxs)(`div`,{style:{position:`relative`},children:[(0,m.jsx)(l,{...e,width:400,value:n,onChange:e=>f(e.target.value),placeholder:t(`components:smart.search_placeholder`)}),s&&(0,m.jsx)(`div`,{style:{position:`absolute`,right:40,top:`50%`,transform:`translateY(-50%)`,fontSize:12,color:`var(--wim-color-text-secondary)`},children:t(`components:smart.search_thinking`)})]})}),a.length>0&&(0,m.jsxs)(`div`,{style:{marginTop:8,padding:12,border:`1px solid var(--wim-color-border)`,borderRadius:8,background:`var(--wim-color-surface-variant)`},children:[(0,m.jsx)(`div`,{style:{fontSize:12,fontWeight:`bold`,marginBottom:8,color:`var(--wim-color-text-accent)`},children:t(`components:smart.search_suggestions`)}),(0,m.jsx)(`ul`,{style:{margin:0,paddingLeft:20,fontSize:14},children:a.map((e,t)=>(0,m.jsx)(`li`,{style:{padding:`4px 0`},children:e},t))})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("doc.search")}>
        <SearchInput {...args} placeholder={t("story.searchinput_placeholder")} />
      </Label>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      width: 400
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`SmartSearchWithAI_Example`]}));y();export{g as Default,_ as SmartSearchWithAI_Example,v as __namedExportsOrder,h as default,y as n,f as t};