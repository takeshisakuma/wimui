import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-B1TToC6s.js";import{I as f}from"./Input-GX6cw92R.js";import{L as p}from"./FieldTemplate-SwTDQt6n.js";import{u as _}from"./useTranslation-CHJ-TYb-.js";const r=a=>e.jsx(f,{leftIcon:"SearchIcon",allowClear:!0,...a});r.__docgenInfo={description:`検索に特化した入力コンポーネント。
検索アイコンを標準装備し、入力がある場合はクリアボタンを表示します。`,methods:[],displayName:"SearchInput"};const v={title:"Components/Basic Inputs/SearchInput",component:r,tags:[]},t={render:function(c){const{t:s}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(p,{label:s("doc_search"),children:e.jsx(r,{...c,placeholder:s("story_searchinput_placeholder")})})}},o={render:function(c){const{t:s}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[h,g]=d.useState(""),[l,m]=d.useState([]),[S,u]=d.useState(!1),y=async n=>{if(g(n),!n.trim()){m([]);return}u(!0),await new Promise(i=>setTimeout(i,800)),m([s("components:smart_search_result_1",{val:n}),s("components:smart_search_result_2",{val:n}),s("components:smart_search_match",{val:n})]),u(!1)};return e.jsxs("div",{style:{width:400},children:[e.jsx(p,{label:s("components:smart_search_ai_title"),children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(r,{...c,width:400,value:h,onChange:n=>y(n.target.value),placeholder:s("components:smart_search_placeholder")}),S&&e.jsx("div",{style:{position:"absolute",right:40,top:"50%",transform:"translateY(-50%)",fontSize:12,color:"#888"},children:s("components:smart_search_thinking")})]})}),l.length>0&&e.jsxs("div",{style:{marginTop:8,padding:12,border:"1px solid #eee",borderRadius:8,background:"#fafafa"},children:[e.jsx("div",{style:{fontSize:12,fontWeight:"bold",marginBottom:8,color:"var(--wim-color-primary)"},children:s("components:smart_search_suggestions")}),e.jsx("ul",{style:{margin:0,paddingLeft:20,fontSize:14},children:l.map((n,i)=>e.jsx("li",{style:{padding:"4px 0"},children:n},i))})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("doc_search")}>\r
        <SearchInput {...args} placeholder={t("story_searchinput_placeholder")} />\r
      </Label>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    }}>\r
        <Label label={t("components:smart_search_ai_title")}>\r
          <div style={{
          position: "relative"
        }}>\r
            <SearchInput {...args} width={400} value={query} onChange={e => handleSearch(e.target.value)} placeholder={t("components:smart_search_placeholder")} />\r
            {isSearching && <div style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 12,
            color: "#888"
          }}>\r
                {t("components:smart_search_thinking")}\r
              </div>}\r
          </div>\r
        </Label>\r
        {suggestions.length > 0 && <div style={{
        marginTop: 8,
        padding: 12,
        border: "1px solid #eee",
        borderRadius: 8,
        background: "#fafafa"
      }}>\r
            <div style={{
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 8,
          color: "var(--wim-color-primary)"
        }}>\r
              {t("components:smart_search_suggestions")}\r
            </div>\r
            <ul style={{
          margin: 0,
          paddingLeft: 20,
          fontSize: 14
        }}>\r
              {suggestions.map((s, i) => <li key={i} style={{
            padding: "4px 0"
          }}>{s}</li>)}\r
            </ul>\r
          </div>}\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","SmartSearchWithAI_Example"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,SmartSearchWithAI_Example:o,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,L as S};
