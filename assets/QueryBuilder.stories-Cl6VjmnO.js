import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-Ddm5FQ3s.js";import{c as w}from"./index-DmFcGT-q.js";import{I as Q}from"./IconButton-Qp008Qpn.js";import{B as C}from"./Button-CFIpO0UY.js";import{S as q}from"./Selectbox-tARCDb0_.js";import{I as J}from"./Input-CJiKxRYT.js";import{N as M}from"./NumberInput-C6WkbnE9.js";import{D as U}from"./DatePicker-CSMhD3UC.js";import{S as W}from"./Switch-DcwKs7_x.js";import{S as Y}from"./SegmentedControl-CmBQve3X.js";import{u as x}from"./useTranslation-BxKydHqK.js";const h=()=>Math.random().toString(36).substring(2,11),V={string:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.contains",value:"contains"},{label:"operators.starts_with",value:"starts_with"},{label:"operators.ends_with",value:"ends_with"},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],number:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.greater_than",value:">"},{label:"operators.less_than",value:"<"},{label:"operators.greater_than_or_equal",value:">="},{label:"operators.less_than_or_equal",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],date:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.after",value:">"},{label:"operators.before",value:"<"},{label:"operators.after_or_on",value:">="},{label:"operators.before_or_on",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],boolean:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}]},g=({fields:i,query:u,defaultQuery:p,onChange:c,maxDepth:T=3,className:D,id:I})=>{const{t}=x("components"),k=b.useId(),O=I||`wim-qb-${k}`,[R,A]=b.useState(p||{id:h(),combinator:"and",not:!1,rules:[]}),m=u!==void 0?u:R,v=b.useCallback(e=>{u===void 0&&A(e),c?.(e)},[u,c]),d=(e,o)=>{const s=a=>a.id===e?{...a,...o}:{...a,rules:a.rules.map(n=>n.id===e?{...n,...o}:"rules"in n?s(n):n)};v(s(m))},B=e=>{const o=i[0],s={id:h(),field:o?.name||"",operator:"=",value:o?.type==="boolean"?!1:""},a=n=>n.id===e?{...n,rules:[...n.rules,s]}:{...n,rules:n.rules.map(y=>"rules"in y?a(y):y)};v(a(m))},G=e=>{const o={id:h(),combinator:"and",not:!1,rules:[]},s=a=>a.id===e?{...a,rules:[...a.rules,o]}:{...a,rules:a.rules.map(n=>"rules"in n?s(n):n)};v(s(m))},j=e=>{const o=s=>({...s,rules:s.rules.filter(a=>a.id!==e).map(a=>"rules"in a?o(a):a)});v(o(m))},z=(e,o)=>{const a=i.find(l=>l.name===e.field)?.type||"string",n=V[a],y=l=>{const E=i.find(F=>F.name===l);d(e.id,{field:l,operator:"=",value:E?.type==="boolean"?!1:""})},P=e.operator==="is_null"||e.operator==="is_not_null";return r.jsx("div",{className:"wim-query-rule",children:r.jsxs("div",{className:"wim-query-rule__fields",children:[r.jsx(q,{className:"wim-query-rule__field",options:i.map(l=>({label:t(l.label),value:l.name})),value:e.field,onChange:y,"aria-label":t("query_builder.field"),fullWidth:!0}),r.jsx(q,{className:"wim-query-rule__operator",options:n.map(l=>({label:t(l.label),value:l.value})),value:e.operator,onChange:l=>d(e.id,{operator:l}),"aria-label":t("query_builder.operator"),fullWidth:!0}),!P&&r.jsx("div",{className:"wim-query-rule__value",children:a==="number"?r.jsx(M,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:l=>d(e.id,{value:l.target.value}),"aria-label":t("query_builder.value")}):a==="date"?r.jsx(U,{value:typeof e.value=="string"||typeof e.value=="number"?new Date(e.value):void 0,onChange:l=>d(e.id,{value:l?l.toISOString():""}),"aria-label":t("query_builder.value")}):a==="boolean"?r.jsx(q,{options:[{label:t("query_builder.true"),value:"true"},{label:t("query_builder.false"),value:"false"}],value:String(e.value),onChange:l=>d(e.id,{value:l==="true"}),"aria-label":t("query_builder.value"),fullWidth:!0}):r.jsx(J,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:l=>d(e.id,{value:l.target.value}),"aria-label":t("query_builder.value")})}),r.jsx(Q,{iconName:"TrashIcon","aria-label":t("query_builder.remove_rule"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>j(e.id),className:"wim-query-rule__remove"})]})},e.id)},N=(e,o,s=!1)=>{const a=e.not?!s:s;return r.jsxs("div",{className:w("wim-query-group",o>0&&"wim-query-group--nested",a&&"wim-query-group--excluded"),children:[r.jsxs("div",{className:"wim-query-group__header",children:[r.jsxs("div",{className:"wim-query-group__header-left",children:[r.jsx(Y,{size:"medium",options:[{label:"AND",value:"and"},{label:"OR",value:"or"}],value:e.combinator,onChange:n=>d(e.id,{combinator:n})}),r.jsx(W,{size:"medium",label:"NOT",checked:e.not,onChange:n=>d(e.id,{not:n.target.checked})})]}),o>0&&r.jsx(Q,{iconName:"TrashIcon","aria-label":t("query_builder.remove_group"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>j(e.id),className:"wim-query-group__remove"})]}),r.jsx("div",{className:"wim-query-builder__rule-list",children:e.rules.map(n=>"rules"in n?N(n,o+1,a):z(n))}),r.jsxs("div",{className:"wim-query-group__actions",children:[r.jsx(C,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>B(e.id),children:t("query_builder.add_rule")}),o<T&&r.jsx(C,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>G(e.id),children:t("query_builder.add_group")})]})]},e.id)};return r.jsx("div",{id:O,className:w("wim-query-builder",D),children:N(m,0,!1)})};g.__docgenInfo={description:"複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。",methods:[],displayName:"QueryBuilder",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"QueryField"}],raw:"QueryField[]"},description:"Field definitions"},query:{required:!1,tsType:{name:"QueryGroup"},description:"Current query state (controlled)"},defaultQuery:{required:!1,tsType:{name:"QueryGroup"},description:"Default query state (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: QueryGroup) => void",signature:{arguments:[{type:{name:"QueryGroup"},name:"query"}],return:{name:"void"}}},description:"Callback when query changes"},maxDepth:{required:!1,tsType:{name:"number"},description:"Maximum nesting depth",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const S=[{name:"firstName",label:"query_builder.field_first_name",type:"string"},{name:"lastName",label:"query_builder.field_last_name",type:"string"},{name:"age",label:"query_builder.field_age",type:"number"},{name:"birthday",label:"query_builder.field_birthday",type:"date"},{name:"isActive",label:"query_builder.field_is_active",type:"boolean"}],$={title:"Components/Data Structures/QueryBuilder",component:g,tags:[],args:{fields:S}},f={render:i=>{const{t:u}=x("components"),[p,c]=b.useState(i.query);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(g,{...i,query:p,onChange:c}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(p,null,2)})]})]})}},_={args:{fields:S,defaultQuery:{id:"root",combinator:"and",not:!1,rules:[{id:"rule1",field:"firstName",operator:"=",value:"John"},{id:"group1",combinator:"or",not:!1,rules:[{id:"rule2",field:"age",operator:">",value:18},{id:"rule3",field:"isActive",operator:"=",value:!0}]}]}},render:i=>{const{t:u}=x("components"),[p,c]=b.useState(i.defaultQuery);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(g,{...i,query:p,onChange:c}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(p,null,2)})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("components");
    const [query, setQuery] = useState<QueryGroup | undefined>(args.query);
    return <div style={{
      padding: "20px"
    }}>\r
        <QueryBuilder {...args} query={query} onChange={setQuery} />\r
        <div style={{
        marginTop: "20px"
      }}>\r
          <h4>{t("query_builder.generated_json")}:</h4>\r
          <pre style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>\r
            {JSON.stringify(query, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    fields,
    defaultQuery: {
      id: "root",
      combinator: "and",
      not: false,
      rules: [{
        id: "rule1",
        field: "firstName",
        operator: "=",
        value: "John"
      }, {
        id: "group1",
        combinator: "or",
        not: false,
        rules: [{
          id: "rule2",
          field: "age",
          operator: ">",
          value: 18
        }, {
          id: "rule3",
          field: "isActive",
          operator: "=",
          value: true
        }]
      }]
    }
  },
  render: args => {
    const {
      t
    } = useTranslation("components");
    const [query, setQuery] = useState<QueryGroup | undefined>(args.defaultQuery as QueryGroup);
    return <div style={{
      padding: "20px"
    }}>\r
        <QueryBuilder {...args} query={query} onChange={setQuery} />\r
        <div style={{
        marginTop: "20px"
      }}>\r
          <h4>{t("query_builder.generated_json")}:</h4>\r
          <pre style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>\r
            {JSON.stringify(query, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const H=["Default","Predefined"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Predefined:_,__namedExportsOrder:H,default:$},Symbol.toStringTag,{value:"Module"}));export{f as D,ie as Q};
