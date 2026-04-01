import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as i,A}from"./iframe-BZoygCoD.js";import{T as B}from"./Textarea-B6Hyisck.js";import{B as U}from"./BaseListItem-DwUFfOXm.js";import{L as w}from"./FieldTemplate-G7g6XCsE.js";import{u as D}from"./useTranslation-CVcR0t5u.js";const m=({options:_,trigger:r="@",value:s,defaultValue:k,onChange:f,onSelect:M,...C})=>{const[E,v]=i.useState(k||""),b=s!==void 0,x=b?s:E,[L,l]=i.useState(!1),[I,R]=i.useState(""),[O,P]=i.useState(0),[q,S]=i.useState(-1),[d,y]=i.useState(0),g=i.useRef(null),N=i.useRef(null),o=_.filter(e=>e.display.toLowerCase().includes(I.toLowerCase())),W=e=>{const n=e.target.value,h=e.target.selectionStart;P(h),b||v(n),f&&f(e);const u=n.slice(0,h),a=u.lastIndexOf(r);if(a!==-1){const T=u.slice(a+r.length);if(!T.includes(" ")){S(a),R(T),l(!0),y(0);return}}l(!1),S(-1)},j=e=>{const n=x.slice(0,q),h=x.slice(O),u=`${n}${r}${e.display} ${h}`;b||v(u),f&&f({target:{value:u}}),M&&M(e),l(!1),S(-1),setTimeout(()=>{if(g.current){g.current.focus();const a=n.length+r.length+e.display.length+1;g.current.setSelectionRange(a,a)}},0)},V=e=>{L&&o.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),y(n=>n>=o.length-1?0:n+1)):e.key==="ArrowUp"?(e.preventDefault(),y(n=>n<=0?o.length-1:n-1)):e.key==="Enter"||e.key==="Tab"?d>=0&&o[d]&&(e.preventDefault(),j(o[d])):e.key==="Escape"&&l(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:N,children:[t.jsx(B,{...C,ref:g,value:x,onChange:W,onKeyDown:V,onBlur:()=>{setTimeout(()=>l(!1),200)}}),L&&o.length>0&&t.jsx("div",{className:"wim-mentions-list",role:"listbox",children:o.map((e,n)=>t.jsx(U,{className:"wim-mentions-item",active:n===d,onClick:()=>j(e),onMouseEnter:()=>y(n),role:"option","aria-selected":n===d,tabIndex:-1,children:e.display},e.id))})]})};m.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const $={title:"Components/Basic Inputs/Mentions",component:m,parameters:{layout:"padded"},args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},K=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],c={render:function(r){const{t:s}=D(A);return t.jsx(w,{label:s("story.mentions_label_user"),children:t.jsx(m,{...r,options:K,placeholder:s("story.mentions_placeholder_user"),fullWidth:!0,rows:4})})}},p={render:function(r){const{t:s}=D(A);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(w,{label:s("story.mentions_label_char"),children:t.jsx(m,{...r,fullWidth:!0,rows:3,trigger:"#",placeholder:s("story.mentions_placeholder_char"),options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(w,{label:s("story.mentions_label_cmd"),children:t.jsx(m,{...r,fullWidth:!0,rows:3,trigger:"/",placeholder:s("story.mentions_placeholder_cmd"),options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.mentions_label_user")}>
        <Mentions {...args} options={mockUsers} placeholder={t("story.mentions_placeholder_user")} fullWidth rows={4} />
      </Label>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>
        <Label label={t("story.mentions_label_char")}>
          <Mentions {...args} fullWidth rows={3} trigger="#" placeholder={t("story.mentions_placeholder_char")} options={[{
          id: 1,
          display: "SuperMario"
        }, {
          id: 2,
          display: "Luigi"
        }, {
          id: 3,
          display: "Peach"
        }]} />
        </Label>
        <Label label={t("story.mentions_label_cmd")}>
          <Mentions {...args} fullWidth rows={3} trigger="/" placeholder={t("story.mentions_placeholder_cmd")} options={[{
          id: 1,
          display: "help"
        }, {
          id: 2,
          display: "settings"
        }, {
          id: 3,
          display: "logout"
        }]} />
        </Label>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const z=["Default","CustomTrigger"],Y=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:p,Default:c,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{p as C,c as D,Y as M};
