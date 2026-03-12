import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-BisTGuVC.js";import{I as y}from"./Input-DayEea5m.js";import{L as p}from"./FieldTemplate-DQGW8oml.js";import{u as h}from"./useTranslation-BH3LN071.js";const a=o=>e.jsx(y,{leftIcon:"SearchIcon",allowClear:!0,...o});a.__docgenInfo={description:`検索に特化した入力コンポーネント。
検索アイコンを標準装備し、入力がある場合はクリアボタンを表示します。`,methods:[],displayName:"SearchInput"};const v={title:"Components/Basic Inputs/SearchInput",component:a,tags:[]},s={render:function(i){const{t:n}=h(["docs","common","components"]);return e.jsx(p,{label:n("doc_search"),children:e.jsx(a,{...i,placeholder:n("story_searchinput_placeholder")})})}},r={render:function(i){const{t:n}=h(["docs","common","components"]),[g,_]=l.useState(""),[m,d]=l.useState([]),[S,u]=l.useState(!1),f=async t=>{if(_(t),!t.trim()){d([]);return}u(!0),await new Promise(c=>setTimeout(c,800)),d([n("components:smart_search_result_1",{val:t}),n("components:smart_search_result_2",{val:t}),n("components:smart_search_match",{val:t})]),u(!1)};return e.jsxs("div",{style:{width:400},children:[e.jsx(p,{label:n("components:smart_search_ai_title"),children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(a,{...i,width:400,value:g,onChange:t=>f(t.target.value),placeholder:n("components:smart_search_placeholder")}),S&&e.jsx("div",{style:{position:"absolute",right:40,top:"50%",transform:"translateY(-50%)",fontSize:12,color:"#888"},children:n("components:smart_search_thinking")})]})}),m.length>0&&e.jsxs("div",{style:{marginTop:8,padding:12,border:"1px solid #eee",borderRadius:8,background:"#fafafa"},children:[e.jsx("div",{style:{fontSize:12,fontWeight:"bold",marginBottom:8,color:"var(--wim-color-primary)"},children:n("components:smart_search_suggestions")}),e.jsx("ul",{style:{margin:0,paddingLeft:20,fontSize:14},children:m.map((t,c)=>e.jsx("li",{style:{padding:"4px 0"},children:t},c))})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("doc_search")}>\r
        <SearchInput {...args} placeholder={t("story_searchinput_placeholder")} />\r
      </Label>;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...r.parameters?.docs?.source}}};const b=["Default","SmartSearchWithAI_Example"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,SmartSearchWithAI_Example:r,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,L as S};
