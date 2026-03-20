import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-Ck4sjCvr.js";import{c as w}from"./index-BGo_XZDM.js";import{I as Q}from"./IconButton-Ds2srQx5.js";import{B as C}from"./Button-BPXZ1oyI.js";import{S as h}from"./Selectbox-1Da0MDu0.js";import{I as J}from"./Input-R5pne_C9.js";import{N as E}from"./NumberInput-DeTrRowJ.js";import{D as M}from"./DatePicker-D5vUuQsQ.js";import{S as U}from"./Switch-BcVxxyKR.js";import{S as W}from"./SegmentedControl-cSLbseml.js";import{u as x}from"./useTranslation-CrQtSC0V.js";const q=()=>Math.random().toString(36).substring(2,11),Y={string:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.contains",value:"contains"},{label:"operators.starts_with",value:"starts_with"},{label:"operators.ends_with",value:"ends_with"},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],number:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.greater_than",value:">"},{label:"operators.less_than",value:"<"},{label:"operators.greater_than_or_equal",value:">="},{label:"operators.less_than_or_equal",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],date:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.after",value:">"},{label:"operators.before",value:"<"},{label:"operators.after_or_on",value:">="},{label:"operators.before_or_on",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],boolean:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}]},g=({fields:i,query:u,defaultQuery:p,onChange:c,maxDepth:T=3,className:D,id:I})=>{const{t:s}=x("components"),k=b.useId(),O=I||`wim-qb-${k}`,[R,A]=b.useState(p||{id:q(),combinator:"and",not:!1,rules:[]}),m=u!==void 0?u:R,v=b.useCallback(e=>{u===void 0&&A(e),c?.(e)},[u,c]),d=(e,t)=>{const a=n=>n.id===e?{...n,...t}:{...n,rules:n.rules.map(o=>o.id===e?{...o,...t}:"rules"in o?a(o):o)};v(a(m))},B=e=>{const t=i[0],a={id:q(),field:t?.name||"",operator:"=",value:t?.type==="boolean"?!1:""},n=o=>o.id===e?{...o,rules:[...o.rules,a]}:{...o,rules:o.rules.map(y=>"rules"in y?n(y):y)};v(n(m))},G=e=>{const t={id:q(),combinator:"and",not:!1,rules:[]},a=n=>n.id===e?{...n,rules:[...n.rules,t]}:{...n,rules:n.rules.map(o=>"rules"in o?a(o):o)};v(a(m))},j=e=>{const t=a=>({...a,rules:a.rules.filter(n=>n.id!==e).map(n=>"rules"in n?t(n):n)});v(t(m))},P=e=>{const a=i.find(l=>l.name===e.field)?.type||"string",n=Y[a],o=l=>{const z=i.find(F=>F.name===l);d(e.id,{field:l,operator:"=",value:z?.type==="boolean"?!1:""})},y=e.operator==="is_null"||e.operator==="is_not_null";return r.jsx("div",{className:"wim-query-rule",children:r.jsxs("div",{className:"wim-query-rule__fields",children:[r.jsx(h,{className:"wim-query-rule__field",options:i.map(l=>({label:s(l.label),value:l.name})),value:e.field,onChange:o,"aria-label":s("query_builder.field"),fullWidth:!0}),r.jsx(h,{className:"wim-query-rule__operator",options:n.map(l=>({label:s(l.label),value:l.value})),value:e.operator,onChange:l=>d(e.id,{operator:l}),"aria-label":s("query_builder.operator"),fullWidth:!0}),!y&&r.jsx("div",{className:"wim-query-rule__value",children:a==="number"?r.jsx(E,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:l=>d(e.id,{value:l.target.value}),"aria-label":s("query_builder.value")}):a==="date"?r.jsx(M,{value:typeof e.value=="string"||typeof e.value=="number"?new Date(e.value):void 0,onChange:l=>d(e.id,{value:l?l.toISOString():""}),"aria-label":s("query_builder.value")}):a==="boolean"?r.jsx(h,{options:[{label:s("query_builder.true"),value:"true"},{label:s("query_builder.false"),value:"false"}],value:String(e.value),onChange:l=>d(e.id,{value:l==="true"}),"aria-label":s("query_builder.value"),fullWidth:!0}):r.jsx(J,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:l=>d(e.id,{value:l.target.value}),"aria-label":s("query_builder.value")})}),r.jsx(Q,{iconName:"TrashIcon","aria-label":s("query_builder.remove_rule"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>j(e.id),className:"wim-query-rule__remove"})]})},e.id)},N=(e,t)=>r.jsxs("div",{className:w("wim-query-group",t>0&&"wim-query-group--nested"),children:[r.jsxs("div",{className:"wim-query-group__header",children:[r.jsxs("div",{className:"wim-query-group__header-left",children:[r.jsx(W,{size:"medium",options:[{label:"AND",value:"and"},{label:"OR",value:"or"}],value:e.combinator,onChange:a=>d(e.id,{combinator:a})}),r.jsx(U,{size:"medium",label:"NOT",checked:e.not,onChange:a=>d(e.id,{not:a.target.checked})})]}),t>0&&r.jsx(Q,{iconName:"TrashIcon","aria-label":s("query_builder.remove_group"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>j(e.id),className:"wim-query-group__remove"})]}),r.jsx("div",{className:"wim-query-builder__rule-list",children:e.rules.map(a=>"rules"in a?N(a,t+1):P(a))}),r.jsxs("div",{className:"wim-query-group__actions",children:[r.jsx(C,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>B(e.id),children:s("query_builder.add_rule")}),t<T&&r.jsx(C,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>G(e.id),children:s("query_builder.add_group")})]})]},e.id);return r.jsx("div",{id:O,className:w("wim-query-builder",D),children:N(m,0)})};g.__docgenInfo={description:"複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。",methods:[],displayName:"QueryBuilder",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"QueryField"}],raw:"QueryField[]"},description:"Field definitions"},query:{required:!1,tsType:{name:"QueryGroup"},description:"Current query state (controlled)"},defaultQuery:{required:!1,tsType:{name:"QueryGroup"},description:"Default query state (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: QueryGroup) => void",signature:{arguments:[{type:{name:"QueryGroup"},name:"query"}],return:{name:"void"}}},description:"Callback when query changes"},maxDepth:{required:!1,tsType:{name:"number"},description:"Maximum nesting depth",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const S=[{name:"firstName",label:"query_builder.field_first_name",type:"string"},{name:"lastName",label:"query_builder.field_last_name",type:"string"},{name:"age",label:"query_builder.field_age",type:"number"},{name:"birthday",label:"query_builder.field_birthday",type:"date"},{name:"isActive",label:"query_builder.field_is_active",type:"boolean"}],V={title:"Components/Data Structures/QueryBuilder",component:g,tags:[],args:{fields:S}},f={render:i=>{const{t:u}=x("components"),[p,c]=b.useState(i.query);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(g,{...i,query:p,onChange:c}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(p,null,2)})]})]})}},_={args:{fields:S,defaultQuery:{id:"root",combinator:"and",not:!1,rules:[{id:"rule1",field:"firstName",operator:"=",value:"John"},{id:"group1",combinator:"or",not:!1,rules:[{id:"rule2",field:"age",operator:">",value:18},{id:"rule3",field:"isActive",operator:"=",value:!0}]}]}},render:i=>{const{t:u}=x("components"),[p,c]=b.useState(i.defaultQuery);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(g,{...i,query:p,onChange:c}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(p,null,2)})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const $=["Default","Predefined"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Predefined:_,__namedExportsOrder:$,default:V},Symbol.toStringTag,{value:"Module"}));export{f as D,se as Q};
