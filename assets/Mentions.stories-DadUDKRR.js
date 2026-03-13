import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-D4gOfWnt.js";import{T as B}from"./Textarea-DWbqC165.js";import{B as N}from"./BaseListItem-DLGwJNcc.js";import{L as w}from"./FieldTemplate-D0rJBmWS.js";import{u as L}from"./useTranslation-BONq47qB.js";const m=({options:h,trigger:o="@",value:t,defaultValue:k,onChange:y,onSelect:S,...I})=>{const[R,M]=r.useState(k||""),b=t!==void 0,x=b?t:R,[j,d]=r.useState(!1),[C,O]=r.useState(""),[q,E]=r.useState(0),[W,v]=r.useState(-1),[c,_]=r.useState(0),g=r.useRef(null),A=r.useRef(null),i=h.filter(e=>e.display.toLowerCase().includes(C.toLowerCase())),P=e=>{const n=e.target.value,f=e.target.selectionStart;E(f),b||M(n),y&&y(e);const l=n.slice(0,f),a=l.lastIndexOf(o);if(a!==-1){const D=l.slice(a+o.length);if(!D.includes(" ")){v(a),O(D),d(!0),_(0);return}}d(!1),v(-1)},T=e=>{const n=x.slice(0,W),f=x.slice(q),l=`${n}${o}${e.display} ${f}`;b||M(l),y&&y({target:{value:l},currentTarget:{value:l}}),S&&S(e),d(!1),v(-1),setTimeout(()=>{if(g.current){g.current.focus();const a=n.length+o.length+e.display.length+1;g.current.setSelectionRange(a,a)}},0)},V=e=>{j&&i.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),_(n=>n>=i.length-1?0:n+1)):e.key==="ArrowUp"?(e.preventDefault(),_(n=>n<=0?i.length-1:n-1)):e.key==="Enter"||e.key==="Tab"?c>=0&&i[c]&&(e.preventDefault(),T(i[c])):e.key==="Escape"&&d(!1))};return s.jsxs("div",{className:"wim-mentions-container",ref:A,children:[s.jsx(B,{...I,ref:g,value:x,onChange:P,onKeyDown:V,onBlur:()=>{setTimeout(()=>d(!1),200)}}),j&&i.length>0&&s.jsx("div",{className:"wim-mentions-list",role:"listbox",children:i.map((e,n)=>s.jsx(N,{className:"wim-mentions-item",active:n===c,onClick:()=>T(e),onMouseEnter:()=>_(n),role:"option","aria-selected":n===c,tabIndex:-1,children:e.display},e.id))})]})};m.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: string | number;\r
  display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  id: string | number;\r
  display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const U={title:"Components/Basic Inputs/Mentions",component:m,parameters:{layout:"padded"}},$=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],u={render:function(o){const{t}=L(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(w,{label:t("story_mentions_label_user"),children:s.jsx(m,{...o,options:$,placeholder:t("story_mentions_placeholder_user"),fullWidth:!0,rows:4})})}},p={render:function(o){const{t}=L(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s.jsx(w,{label:t("story_mentions_label_char"),children:s.jsx(m,{...o,fullWidth:!0,rows:3,trigger:"#",placeholder:t("story_mentions_placeholder_char"),options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),s.jsx(w,{label:t("story_mentions_label_cmd"),children:s.jsx(m,{...o,fullWidth:!0,rows:3,trigger:"/",placeholder:t("story_mentions_placeholder_cmd"),options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_mentions_label_user")}>\r
        <Mentions {...args} options={mockUsers} placeholder={t("story_mentions_placeholder_user")} fullWidth rows={4} />\r
      </Label>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>\r
        <Label label={t("story_mentions_label_char")}>\r
          <Mentions {...args} fullWidth rows={3} trigger="#" placeholder={t("story_mentions_placeholder_char")} options={[{
          id: 1,
          display: "SuperMario"
        }, {
          id: 2,
          display: "Luigi"
        }, {
          id: 3,
          display: "Peach"
        }]} />\r
        </Label>\r
        <Label label={t("story_mentions_label_cmd")}>\r
          <Mentions {...args} fullWidth rows={3} trigger="/" placeholder={t("story_mentions_placeholder_cmd")} options={[{
          id: 1,
          display: "help"
        }, {
          id: 2,
          display: "settings"
        }, {
          id: 3,
          display: "logout"
        }]} />\r
        </Label>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","CustomTrigger"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:p,Default:u,__namedExportsOrder:K,default:U},Symbol.toStringTag,{value:"Module"}));export{p as C,u as D,X as M};
