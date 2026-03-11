import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-SL2HqV3D.js";import{T as B}from"./Textarea-FgYGQ4bW.js";import{B as N}from"./BaseListItem-wx-dS4Xz.js";import{L as v}from"./Label-BbZVH_Iw.js";import{u as L}from"./useTranslation-ZF4WB21B.js";const m=({options:h,trigger:r="@",value:s,defaultValue:k,onChange:y,onSelect:S,...I})=>{const[R,M]=o.useState(k||""),b=s!==void 0,x=b?s:R,[j,d]=o.useState(!1),[C,O]=o.useState(""),[q,E]=o.useState(0),[W,w]=o.useState(-1),[c,f]=o.useState(0),g=o.useRef(null),A=o.useRef(null),i=h.filter(e=>e.display.toLowerCase().includes(C.toLowerCase())),P=e=>{const n=e.target.value,_=e.target.selectionStart;E(_),b||M(n),y&&y(e);const l=n.slice(0,_),a=l.lastIndexOf(r);if(a!==-1){const D=l.slice(a+r.length);if(!D.includes(" ")){w(a),O(D),d(!0),f(0);return}}d(!1),w(-1)},T=e=>{const n=x.slice(0,W),_=x.slice(q),l=`${n}${r}${e.display} ${_}`;b||M(l),y&&y({target:{value:l},currentTarget:{value:l}}),S&&S(e),d(!1),w(-1),setTimeout(()=>{if(g.current){g.current.focus();const a=n.length+r.length+e.display.length+1;g.current.setSelectionRange(a,a)}},0)},V=e=>{j&&i.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),f(n=>n>=i.length-1?0:n+1)):e.key==="ArrowUp"?(e.preventDefault(),f(n=>n<=0?i.length-1:n-1)):e.key==="Enter"||e.key==="Tab"?c>=0&&i[c]&&(e.preventDefault(),T(i[c])):e.key==="Escape"&&d(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:A,children:[t.jsx(B,{...I,ref:g,value:x,onChange:P,onKeyDown:V,onBlur:()=>{setTimeout(()=>d(!1),200)}}),j&&i.length>0&&t.jsx("div",{className:"wim-mentions-list",role:"listbox",children:i.map((e,n)=>t.jsx(N,{className:"wim-mentions-item",active:n===c,onClick:()=>T(e),onMouseEnter:()=>f(n),role:"option","aria-selected":n===c,tabIndex:-1,children:e.display},e.id))})]})};m.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const U={title:"Components/Basic Inputs/Mentions",component:m,parameters:{layout:"padded"}},$=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],u={render:function(r){const{t:s}=L(["docs","common","components"]);return t.jsx(v,{label:s("story_mentions_label_user"),children:t.jsx(m,{...r,options:$,placeholder:s("story_mentions_placeholder_user"),fullWidth:!0,rows:4})})}},p={render:function(r){const{t:s}=L(["docs","common","components"]);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(v,{label:s("story_mentions_label_char"),children:t.jsx(m,{...r,fullWidth:!0,rows:3,trigger:"#",placeholder:s("story_mentions_placeholder_char"),options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(v,{label:s("story_mentions_label_cmd"),children:t.jsx(m,{...r,fullWidth:!0,rows:3,trigger:"/",placeholder:s("story_mentions_placeholder_cmd"),options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_mentions_label_user")}>\r
        <Mentions {...args} options={mockUsers} placeholder={t("story_mentions_placeholder_user")} fullWidth rows={4} />\r
      </Label>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
