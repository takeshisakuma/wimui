import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-9NEVSgmA.js";import{c as C}from"./index-D0BZ6LJb.js";import{I as Q}from"./IconButton-CCl9eccW.js";import{B as N}from"./Button-DpdSyJ8P.js";import{S as x}from"./Selectbox-oXQepL4e.js";import{I as oe}from"./Input-CglGVxmd.js";import{N as te}from"./NumberInput-BIQaXurH.js";import{D as se}from"./DatePicker-CIbqRf2W.js";import{S as ie}from"./Switch-VMt5Tr1T.js";import{S as ue}from"./SegmentedControl-zAgO8M7U.js";import{u as S}from"./useTranslation-7ChDnO1a.js";const k=()=>Math.random().toString(36).substring(2,11),de={string:[{label:"Equals",value:"=",key:"equal"},{label:"Does not equal",value:"!=",key:"not_equal"},{label:"Contains",value:"contains",key:"contains"},{label:"Starts with",value:"starts_with",key:"starts_with"},{label:"Ends with",value:"ends_with",key:"ends_with"},{label:"Is null",value:"is_null",key:"is_null"},{label:"Is not null",value:"is_not_null",key:"is_not_null"}],number:[{label:"Equals",value:"=",key:"equal"},{label:"Does not equal",value:"!=",key:"not_equal"},{label:"Greater than",value:">",key:"greater_than"},{label:"Less than",value:"<",key:"less_than"},{label:"Greater than or equal",value:">=",key:"greater_than_or_equal"},{label:"Less than or equal",value:"<=",key:"less_than_or_equal"},{label:"Is null",value:"is_null",key:"is_null"},{label:"Is not null",value:"is_not_null",key:"is_not_null"}],date:[{label:"Equals",value:"=",key:"equal"},{label:"Does not equal",value:"!=",key:"not_equal"},{label:"After",value:">",key:"after"},{label:"Before",value:"<",key:"before"},{label:"After or on",value:">=",key:"after_or_on"},{label:"Before or on",value:"<=",key:"before_or_on"},{label:"Is null",value:"is_null",key:"is_null"},{label:"Is not null",value:"is_not_null",key:"is_not_null"}],boolean:[{label:"Equals",value:"=",key:"equal"},{label:"Does not equal",value:"!=",key:"not_equal"},{label:"Is null",value:"is_null",key:"is_null"},{label:"Is not null",value:"is_not_null",key:"is_not_null"}]},h=({fields:i,query:u,defaultQuery:c,onChange:m,maxDepth:T=3,className:I,id:R,labels:D={}})=>{const{ruleAdded:L="Rule added",groupAdded:O="Group added",removed:G="Removed",ruleAriaLabel:B="Rule",fieldAriaLabel:E="Field",operatorAriaLabel:F="Operator",valueAriaLabel:g="Value",trueLabel:z="True",falseLabel:P="False",removeRuleAriaLabel:J="Remove rule",removeGroupAriaLabel:U="Remove group",addRuleLabel:M="Add rule",addGroupLabel:V="Add group",regionAriaLabel:W="Query Builder",combinatorAriaLabel:$="Combinator",operators:H={}}=D,K=p.useId(),X=R||`wim-qb-${K}`,y=p.useRef(null),[Y,Z]=p.useState(c||{id:k(),combinator:"and",not:!1,rules:[]}),v=u!==void 0?u:Y,q=p.useCallback(e=>{y.current&&(y.current.textContent="",setTimeout(()=>{y.current&&(y.current.textContent=e)},50))},[]),_=p.useCallback(e=>{u===void 0&&Z(e),m?.(e)},[u,m]),d=(e,t)=>{const o=n=>n.id===e?{...n,...t}:{...n,rules:n.rules.map(l=>l.id===e?{...l,...t}:"rules"in l?o(l):l)};_(o(v))},ee=e=>{const t=i[0],o={id:k(),field:t?.name||"",operator:"=",value:t?.type==="boolean"?!1:""},n=l=>l.id===e?{...l,rules:[...l.rules,o]}:{...l,rules:l.rules.map(s=>"rules"in s?n(s):s)};_(n(v)),q(L)},re=e=>{const t={id:k(),combinator:"and",not:!1,rules:[]},o=n=>n.id===e?{...n,rules:[...n.rules,t]}:{...n,rules:n.rules.map(l=>"rules"in l?o(l):l)};_(o(v)),q(O)},w=e=>{const t=o=>({...o,rules:o.rules.filter(n=>n.id!==e).map(n=>"rules"in n?t(n):n)});_(t(v)),q(G)},ae=e=>{const o=i.find(a=>a.name===e.field)?.type||"string",n=de[o].map(a=>({...a,label:H[a.key]||a.label})),l=a=>{const ne=i.find(le=>le.name===a);d(e.id,{field:a,operator:"=",value:ne?.type==="boolean"?!1:""})},s=e.operator==="is_null"||e.operator==="is_not_null";return r.jsx("div",{className:"wim-query-rule",role:"group","aria-label":B,children:r.jsxs("div",{className:"wim-query-rule__fields",children:[r.jsx(x,{className:"wim-query-rule__field",options:i.map(a=>({label:a.label,value:a.name})),value:e.field,onChange:l,"aria-label":E,fullWidth:!0}),r.jsx(x,{className:"wim-query-rule__operator",options:n.map(a=>({label:a.label,value:a.value})),value:e.operator,onChange:a=>d(e.id,{operator:a}),"aria-label":F,fullWidth:!0}),!s&&r.jsx("div",{className:"wim-query-rule__value",children:o==="number"?r.jsx(te,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:a=>d(e.id,{value:a.target.value}),"aria-label":g}):o==="date"?r.jsx(se,{value:typeof e.value=="string"||typeof e.value=="number"?new Date(e.value):void 0,onChange:a=>d(e.id,{value:a?a.toISOString():""}),"aria-label":g}):o==="boolean"?r.jsx(x,{options:[{label:z,value:"true"},{label:P,value:"false"}],value:String(e.value),onChange:a=>d(e.id,{value:a==="true"}),"aria-label":g,fullWidth:!0}):r.jsx(oe,{value:typeof e.value=="boolean"?void 0:e.value??void 0,onChange:a=>d(e.id,{value:a.target.value}),"aria-label":g})}),r.jsx(Q,{iconName:"TrashIcon","aria-label":J,variant:"ghost",size:"md",color:"danger",onClick:()=>w(e.id),className:"wim-query-rule__remove"})]})},e.id)},j=(e,t,o=!1)=>{const n=e.not?!o:o,l=`${e.combinator.toUpperCase()}${e.not?" NOT":""} group`;return r.jsxs("div",{role:"group","aria-label":l,className:C("wim-query-group",t>0&&"wim-query-group--nested",n&&"wim-query-group--excluded"),children:[r.jsxs("div",{className:"wim-query-group__header",children:[r.jsxs("div",{className:"wim-query-group__header-left",children:[r.jsx(ue,{size:"md",options:[{label:"AND",value:"and"},{label:"OR",value:"or"}],value:e.combinator,onChange:s=>d(e.id,{combinator:s}),"aria-label":$}),r.jsx(ie,{size:"md",checked:e.not,onChange:s=>d(e.id,{not:s.target.checked}),children:"NOT"})]}),t>0&&r.jsx(Q,{iconName:"TrashIcon","aria-label":U,variant:"ghost",size:"md",color:"danger",onClick:()=>w(e.id),className:"wim-query-group__remove"})]}),r.jsx("div",{className:"wim-query-builder__rule-list",children:e.rules.map(s=>"rules"in s?j(s,t+1,n):ae(s))}),r.jsxs("div",{className:"wim-query-group__actions",children:[r.jsx(N,{size:"md",variant:"ghost",icon:"PlusIcon",onClick:()=>ee(e.id),children:M}),t<T&&r.jsx(N,{size:"md",variant:"ghost",icon:"PlusIcon",onClick:()=>re(e.id),children:V})]})]},e.id)};return r.jsxs("div",{id:X,role:"region","aria-label":W,className:C("wim-query-builder",I),children:[r.jsx("div",{ref:y,"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}),j(v,0,!1)]})};h.__docgenInfo={description:"複雑な検索条件をネスト状に組み立てるためのクエリビルダーコンポーネント。",methods:[],displayName:"QueryBuilder",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"QueryField"}],raw:"QueryField[]"},description:"Field definitions"},query:{required:!1,tsType:{name:"QueryGroup"},description:"Current query state (controlled)"},defaultQuery:{required:!1,tsType:{name:"QueryGroup"},description:"Default query state (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: QueryGroup) => void",signature:{arguments:[{type:{name:"QueryGroup"},name:"query"}],return:{name:"void"}}},description:"Callback when query changes"},maxDepth:{required:!1,tsType:{name:"number"},description:"Maximum nesting depth",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the component"},labels:{required:!1,tsType:{name:"QueryBuilderLabels"},description:"Labels for internationalization",defaultValue:{value:"{}",computed:!1}}}};const A=[{name:"firstName",label:"query.builder.field_first_name",type:"string"},{name:"lastName",label:"query.builder.field_last_name",type:"string"},{name:"age",label:"query.builder.field_age",type:"number"},{name:"birthday",label:"query.builder.field_birthday",type:"date"},{name:"isActive",label:"query.builder.field_is_active",type:"boolean"}],ce={title:"Components/Data Structures/QueryBuilder",component:h,tags:[],args:{fields:A}},b={render:i=>{const{t:u}=S("components"),[c,m]=p.useState(i.query);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(h,{...i,query:c,onChange:m}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query.builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"var(--wim-color-surface-variant)",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(c,null,2)})]})]})}},f={args:{fields:A,defaultQuery:{id:"root",combinator:"and",not:!1,rules:[{id:"rule1",field:"firstName",operator:"=",value:"John"},{id:"group1",combinator:"or",not:!1,rules:[{id:"rule2",field:"age",operator:">",value:18},{id:"rule3",field:"isActive",operator:"=",value:!0}]}]}},render:i=>{const{t:u}=S("components"),[c,m]=p.useState(i.defaultQuery);return r.jsxs("div",{style:{padding:"20px"},children:[r.jsx(h,{...i,query:c,onChange:m}),r.jsxs("div",{style:{marginTop:"20px"},children:[r.jsxs("h4",{children:[u("query.builder.generated_json"),":"]}),r.jsx("pre",{style:{backgroundColor:"var(--wim-color-surface-variant)",padding:"10px",borderRadius:"4px",overflow:"auto"},children:JSON.stringify(c,null,2)})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          <h4>{t("query.builder.generated_json")}:</h4>
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
          <h4>{t("query.builder.generated_json")}:</h4>
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
}`,...f.parameters?.docs?.source}}};const pe=["Default","Predefined"],je=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Predefined:f,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{b as D,f as P,je as Q};
