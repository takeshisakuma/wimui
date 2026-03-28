import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-CIIG-mzz.js";import{c as Q}from"./index-QbjQN0Z0.js";import{I as S}from"./IconButton-Cg2BwD68.js";import{B as T}from"./Button-BdD__R2V.js";import{S as x}from"./Selectbox-DYC7TneZ.js";import{I as M}from"./Input-DHP5LlhO.js";import{N as W}from"./NumberInput-D8l42KxG.js";import{D as $}from"./DatePicker-Dsl4LZ1j.js";import{S as Y}from"./Switch-FoM7D4Fl.js";import{S as L}from"./SegmentedControl-kBUy4Y4q.js";import{u as w}from"./useTranslation-BlkCzwGH.js";const j=()=>Math.random().toString(36).substring(2,11),V={string:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.contains",value:"contains"},{label:"operators.starts_with",value:"starts_with"},{label:"operators.ends_with",value:"ends_with"},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],number:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.greater_than",value:">"},{label:"operators.less_than",value:"<"},{label:"operators.greater_than_or_equal",value:">="},{label:"operators.less_than_or_equal",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],date:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.after",value:">"},{label:"operators.before",value:"<"},{label:"operators.after_or_on",value:">="},{label:"operators.before_or_on",value:"<="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}],boolean:[{label:"operators.equal",value:"="},{label:"operators.not_equal",value:"!="},{label:"operators.is_null",value:"is_null"},{label:"operators.is_not_null",value:"is_not_null"}]},q=({fields:u,query:d,defaultQuery:c,onChange:y,maxDepth:k=3,className:D,id:I})=>{const{t:l}=w("components"),O=m.useId(),A=I||`wim-qb-${O}`,b=m.useRef(null),[B,G]=m.useState(c||{id:j(),combinator:"and",not:!1,rules:[]}),v=d!==void 0?d:B,h=m.useCallback(e=>{b.current&&(b.current.textContent="",setTimeout(()=>{b.current&&(b.current.textContent=e)},50))},[]),g=m.useCallback(e=>{d===void 0&&G(e),y?.(e)},[d,y]),p=(e,t)=>{const s=a=>a.id===e?{...a,...t}:{...a,rules:a.rules.map(o=>o.id===e?{...o,...t}:"rules"in o?s(o):o)};g(s(v))},P=e=>{const t=u[0],s={id:j(),field:t?.name||"",operator:"=",value:t?.type==="boolean"?!1:""},a=o=>o.id===e?{...o,rules:[...o.rules,s]}:{...o,rules:o.rules.map(i=>"rules"in i?a(i):i)};g(a(v)),h(l("query_builder.rule_added","Rule added"))},z=e=>{const t={id:j(),combinator:"and",not:!1,rules:[]},s=a=>a.id===e?{...a,rules:[...a.rules,t]}:{...a,rules:a.rules.map(o=>"rules"in o?s(o):o)};g(s(v)),h(l("query_builder.group_added","Group added"))},N=e=>{const t=s=>({...s,rules:s.rules.filter(a=>a.id!==e).map(a=>"rules"in a?t(a):a)});g(t(v)),h(l("query_builder.removed","Removed"))},E=(e,t)=>{const a=u.find(n=>n.name===e.field)?.type||"string",o=V[a],i=n=>{const J=u.find(U=>U.name===n);p(e.id,{field:n,operator:"=",value:J?.type==="boolean"?!1:""})},F=e.operator==="is_null"||e.operator==="is_not_null";return r.jsx("div",{className:"wim-query-rule",role:"group","aria-label":l("query_builder.rule","Rule"),children:r.jsxs("div",{className:"wim-query-rule__fields",children:[r.jsx(x,{className:"wim-query-rule__field",options:u.map(n=>({label:l(n.label),value:n.name})),value:e.field,onChange:i,"aria-label":l("query_builder.field"),fullWidth:!0}),r.jsx(x,{className:"wim-query-rule__operator",options:o.map(n=>({label:l(n.label),value:n.value})),value:e.operator,onChange:n=>p(e.id,{operator:n}),"aria-label":l("query_builder.operator"),fullWidth:!0}),!F&&r.jsx("div",{className:"wim-query-rule__value",children:a==="number"?r.jsx(W,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:n=>p(e.id,{value:n.target.value}),"aria-label":l("query_builder.value")}):a==="date"?r.jsx($,{value:typeof e.value=="string"||typeof e.value=="number"?new Date(e.value):void 0,onChange:n=>p(e.id,{value:n?n.toISOString():""}),"aria-label":l("query_builder.value")}):a==="boolean"?r.jsx(x,{options:[{label:l("query_builder.true"),value:"true"},{label:l("query_builder.false"),value:"false"}],value:String(e.value),onChange:n=>p(e.id,{value:n==="true"}),"aria-label":l("query_builder.value"),fullWidth:!0}):r.jsx(M,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:n=>p(e.id,{value:n.target.value}),"aria-label":l("query_builder.value")})}),r.jsx(S,{iconName:"TrashIcon","aria-label":l("query_builder.remove_rule"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>N(e.id),className:"wim-query-rule__remove"})]})},e.id)},C=(e,t,s=!1)=>{const a=e.not?!s:s,o=`${e.combinator.toUpperCase()}${e.not?" NOT":""} group`;return r.jsxs("div",{role:"group","aria-label":o,className:Q("wim-query-group",t>0&&"wim-query-group--nested",a&&"wim-query-group--excluded"),children:[r.jsxs("div",{className:"wim-query-group__header",children:[r.jsxs("div",{className:"wim-query-group__header-left",children:[r.jsx(L,{size:"medium",options:[{label:"AND",value:"and"},{label:"OR",value:"or"}],value:e.combinator,onChange:i=>p(e.id,{combinator:i}),"aria-label":l("query_builder.combinator","Combinator")}),r.jsx(Y,{size:"medium",label:"NOT",checked:e.not,onChange:i=>p(e.id,{not:i.target.checked})})]}),t>0&&r.jsx(S,{iconName:"TrashIcon","aria-label":l("query_builder.remove_group"),priority:"tertiary",size:"medium",color:"danger",onClick:()=>N(e.id),className:"wim-query-group__remove"})]}),r.jsx("div",{className:"wim-query-builder__rule-list",children:e.rules.map(i=>"rules"in i?C(i,t+1,a):E(i))}),r.jsxs("div",{className:"wim-query-group__actions",children:[r.jsx(T,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>P(e.id),children:l("query_builder.add_rule")}),t<k&&r.jsx(T,{size:"medium",priority:"tertiary",iconName:"PlusIcon",onClick:()=>z(e.id),children:l("query_builder.add_group")})]})]},e.id)};return r.jsxs("div",{id:A,role:"region","aria-label":l("query_builder.region_label","Query Builder"),className:Q("wim-query-builder",D),children:[r.jsx("div",{ref:b,"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}),C(v,0,!1)]})};q.__docgenInfo={description:"複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。",methods:[],displayName:"QueryBuilder",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"QueryField"}],raw:"QueryField[]"},description:"Field definitions"},query:{required:!1,tsType:{name:"QueryGroup"},description:"Current query state (controlled)"},defaultQuery:{required:!1,tsType:{name:"QueryGroup"},description:"Default query state (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: QueryGroup) => void",signature:{arguments:[{type:{name:"QueryGroup"},name:"query"}],return:{name:"void"}}},description:"Callback when query changes"},maxDepth:{required:!1,tsType:{name:"number"},description:"Maximum nesting depth",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"}}};const R=[{name:"firstName",label:"query_builder.field_first_name",type:"string"},{name:"lastName",label:"query_builder.field_last_name",type:"string"},{name:"age",label:"query_builder.field_age",type:"number"},{name:"birthday",label:"query_builder.field_birthday",type:"date"},{name:"isActive",label:"query_builder.field_is_active",type:"boolean"}],H={title:"Components/Data Structures/QueryBuilder",component:q,tags:[],args:{fields:R}},_={render:u=>{const{t:d}=w("components"),[c,y]=m.useState(u.query);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(q,{...u,query:c,onChange:y}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[d("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"var(--wim-color-surface-variant)",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(c,null,2)})]})]})}},f={args:{fields:R,defaultQuery:{id:"root",combinator:"and",not:!1,rules:[{id:"rule1",field:"firstName",operator:"=",value:"John"},{id:"group1",combinator:"or",not:!1,rules:[{id:"rule2",field:"age",operator:">",value:18},{id:"rule3",field:"isActive",operator:"=",value:!0}]}]}},render:u=>{const{t:d}=w("components"),[c,y]=m.useState(u.defaultQuery);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(q,{...u,query:c,onChange:y}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[d("query_builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"var(--wim-color-surface-variant)",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(c,null,2)})]})]})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("components");
    const [query, setQuery] = useState<QueryGroup | undefined>(args.query);
    return <div style={{
      padding: "20px"
    }}>
        <QueryBuilder {...args} query={query} onChange={setQuery} />
        <div style={{
        marginTop: "20px"
      }}>
          <h4>{t("query_builder.generated_json")}:</h4>
          <pre style={{
          backgroundColor: "var(--wim-color-surface-variant)",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    }}>
        <QueryBuilder {...args} query={query} onChange={setQuery} />
        <div style={{
        marginTop: "20px"
      }}>
          <h4>{t("query_builder.generated_json")}:</h4>
          <pre style={{
          backgroundColor: "var(--wim-color-surface-variant)",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const K=["Default","Predefined"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:_,Predefined:f,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{_ as D,f as P,de as Q};
