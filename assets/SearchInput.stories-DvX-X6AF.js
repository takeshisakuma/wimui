import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,A as p}from"./iframe-DaM7GZ_J.js";import{I as y}from"./Input-D9oHbF5A.js";import{L as h}from"./FieldTemplate-D7nn8DKS.js";import{u as g}from"./useTranslation-qwfpLTBA.js";const a=o=>e.jsx(y,{leftIcon:"SearchIcon",allowClear:!0,...o});a.__docgenInfo={description:`検索に特化した入力コンポーネント。
検索アイコンを標準装備し、入力がある場合はクリアボタンを表示します。`,methods:[],displayName:"SearchInput"};const b={title:"Components/Basic Inputs/SearchInput",component:a,tags:[],args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},r={render:function(i){const{t:n}=g(p);return e.jsx(h,{label:n("doc_search"),children:e.jsx(a,{...i,placeholder:n("story_searchinput_placeholder")})})}},s={render:function(i){const{t:n}=g(p),[_,S]=l.useState(""),[d,m]=l.useState([]),[f,u]=l.useState(!1),v=async t=>{if(S(t),!t.trim()){m([]);return}u(!0),await new Promise(c=>setTimeout(c,800)),m([n("components:smart_search_result_1",{val:t}),n("components:smart_search_result_2",{val:t}),n("components:smart_search_match",{val:t})]),u(!1)};return e.jsxs("div",{style:{width:400},children:[e.jsx(h,{label:n("components:smart_search_ai_title"),children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(a,{...i,width:400,value:_,onChange:t=>v(t.target.value),placeholder:n("components:smart_search_placeholder")}),f&&e.jsx("div",{style:{position:"absolute",right:40,top:"50%",transform:"translateY(-50%)",fontSize:12,color:"var(--wim-color-text-secondary)"},children:n("components:smart_search_thinking")})]})}),d.length>0&&e.jsxs("div",{style:{marginTop:8,padding:12,border:"1px solid var(--wim-color-border)",borderRadius:8,background:"var(--wim-color-surface-variant)"},children:[e.jsx("div",{style:{fontSize:12,fontWeight:"bold",marginBottom:8,color:"var(--wim-color-primary)"},children:n("components:smart_search_suggestions")}),e.jsx("ul",{style:{margin:0,paddingLeft:20,fontSize:14},children:d.map((t,c)=>e.jsx("li",{style:{padding:"4px 0"},children:t},c))})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("doc_search")}>
        <SearchInput {...args} placeholder={t("story_searchinput_placeholder")} />
      </Label>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      setSuggestions([t("components:smart_search_result_1", {
        val
      }), t("components:smart_search_result_2", {
        val
      }), t("components:smart_search_match", {
        val
      })]);
      setIsSearching(false);
    };
    return <div style={{
      width: 400
    }}>
        <Label label={t("components:smart_search_ai_title")}>
          <div style={{
          position: "relative"
        }}>
            <SearchInput {...args} width={400} value={query} onChange={e => handleSearch(e.target.value)} placeholder={t("components:smart_search_placeholder")} />
            {isSearching && <div style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 12,
            color: "var(--wim-color-text-secondary)"
          }}>
                {t("components:smart_search_thinking")}
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
          color: "var(--wim-color-primary)"
        }}>
              {t("components:smart_search_suggestions")}
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
}`,...s.parameters?.docs?.source}}};const x=["Default","SmartSearchWithAI_Example"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,SmartSearchWithAI_Example:s,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,R as S};
