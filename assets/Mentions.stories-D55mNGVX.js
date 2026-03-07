import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-HgycnWp4.js";import{T as B}from"./Textarea-BXiGhpg_.js";import{B as N}from"./BaseListItem-9twmybOv.js";import{L as v}from"./Label-DhYiWddr.js";import{u as L}from"./useTranslation-T6dr20_p.js";const m=({options:b,trigger:s="@",value:o,defaultValue:k,onChange:f,onSelect:S,...I})=>{const[R,M]=r.useState(k||""),x=o!==void 0,_=x?o:R,[j,d]=r.useState(!1),[C,O]=r.useState(""),[q,E]=r.useState(0),[W,w]=r.useState(-1),[u,y]=r.useState(-1),g=r.useRef(null),A=r.useRef(null),i=b.filter(e=>e.display.toLowerCase().includes(C.toLowerCase())),P=e=>{const n=e.target.value,h=e.target.selectionStart;E(h),x||M(n),f&&f(e);const l=n.slice(0,h),a=l.lastIndexOf(s);if(a!==-1){const D=l.slice(a+s.length);if(!D.includes(" ")){w(a),O(D),d(!0),y(-1);return}}d(!1),w(-1)},T=e=>{const n=_.slice(0,W),h=_.slice(q),l=`${n}${s}${e.display} ${h}`;x||M(l),f&&f({target:{value:l},currentTarget:{value:l}}),S&&S(e),d(!1),w(-1),setTimeout(()=>{if(g.current){g.current.focus();const a=n.length+s.length+e.display.length+1;g.current.setSelectionRange(a,a)}},0)},V=e=>{j&&i.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),y(n=>n>=i.length-1?0:n+1)):e.key==="ArrowUp"?(e.preventDefault(),y(n=>n<=0?i.length-1:n-1)):e.key==="Enter"||e.key==="Tab"?u>=0&&i[u]&&(e.preventDefault(),T(i[u])):e.key==="Escape"&&d(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:A,children:[t.jsx(B,{...I,ref:g,value:_,onChange:P,onKeyDown:V,onBlur:()=>{setTimeout(()=>d(!1),200)}}),j&&i.length>0&&t.jsx("div",{className:"wim-mentions-list",role:"listbox",children:i.map((e,n)=>t.jsx(N,{className:"wim-mentions-item",active:n===u,onClick:()=>T(e),onMouseEnter:()=>y(n),role:"option","aria-selected":n===u,tabIndex:-1,children:e.display},e.id))})]})};m.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const U={title:"Components/Basic Inputs/Mentions",component:m,parameters:{layout:"padded"}},$=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],c={render:function(s){const{t:o}=L(["docs","common","components"]);return t.jsx(v,{label:o("story_mentions_label_user"),children:t.jsx(m,{...s,options:$,placeholder:"@yamada",fullWidth:!0,rows:4})})}},p={render:function(s){const{t:o}=L(["docs","common","components"]);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(v,{label:o("story_mentions_label_char"),children:t.jsx(m,{...s,fullWidth:!0,rows:3,trigger:"#",placeholder:"#SuperMario",options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(v,{label:o("story_mentions_label_cmd"),children:t.jsx(m,{...s,fullWidth:!0,rows:3,trigger:"/",placeholder:"/help",options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_mentions_label_user")}>\r
        <Mentions {...args} options={mockUsers} placeholder="@yamada" fullWidth rows={4} />\r
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          <Mentions {...args} fullWidth rows={3} trigger="#" placeholder="#SuperMario" options={[{
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
          <Mentions {...args} fullWidth rows={3} trigger="/" placeholder="/help" options={[{
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
}`,...p.parameters?.docs?.source}}};const K=["Default","CustomTrigger"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:p,Default:c,__namedExportsOrder:K,default:U},Symbol.toStringTag,{value:"Module"}));export{p as C,c as D,X as M};
