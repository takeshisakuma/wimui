import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-VGitSx0_.js";import{T as V}from"./Textarea-Cd-i8XIO.js";import{B}from"./BaseListItem-X1JUAuZ6.js";import{L as v}from"./Label-B0rSE9fz.js";const p=({options:a,trigger:m="@",value:w,defaultValue:L,onChange:g,onSelect:S,...k})=>{const[I,j]=r.useState(L||""),x=w!==void 0,b=x?w:I,[D,l]=r.useState(!1),[_,O]=r.useState(""),[q,E]=r.useState(0),[A,M]=r.useState(-1),[d,f]=r.useState(-1),y=r.useRef(null),P=r.useRef(null),s=a.filter(e=>e.display.toLowerCase().includes(_.toLowerCase())),R=e=>{const n=e.target.value,h=e.target.selectionStart;E(h),x||j(n),g&&g(e);const o=n.slice(0,h),i=o.lastIndexOf(m);if(i!==-1){const C=o.slice(i+m.length);if(!C.includes(" ")){M(i),O(C),l(!0),f(-1);return}}l(!1),M(-1)},T=e=>{const n=b.slice(0,A),h=b.slice(q),o=`${n}${m}${e.display} ${h}`;x||j(o),g&&g({target:{value:o},currentTarget:{value:o}}),S&&S(e),l(!1),M(-1),setTimeout(()=>{if(y.current){y.current.focus();const i=n.length+m.length+e.display.length+1;y.current.setSelectionRange(i,i)}},0)},U=e=>{D&&s.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),f(n=>n>=s.length-1?0:n+1)):e.key==="ArrowUp"?(e.preventDefault(),f(n=>n<=0?s.length-1:n-1)):e.key==="Enter"||e.key==="Tab"?d>=0&&s[d]&&(e.preventDefault(),T(s[d])):e.key==="Escape"&&l(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:P,children:[t.jsx(V,{...k,ref:y,value:b,onChange:R,onKeyDown:U,onBlur:()=>{setTimeout(()=>l(!1),200)}}),D&&s.length>0&&t.jsx("div",{className:"wim-mentions-list",role:"listbox",children:s.map((e,n)=>t.jsx(B,{className:"wim-mentions-item",active:n===d,onClick:()=>T(e),onMouseEnter:()=>f(n),role:"option","aria-selected":n===d,tabIndex:-1,children:e.display},e.id))})]})};p.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string | number;
  display: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const W={title:"Components/Basic Inputs/Mentions",component:p,parameters:{layout:"padded"}},N=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],u={render:a=>t.jsx(v,{label:"User Mention (@でユーザーを選択)",children:t.jsx(p,{...a})}),args:{options:N,placeholder:"@yamada",fullWidth:!0,rows:4}},c={render:a=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(v,{label:"Character Mention (#でキャラクターを選択)",children:t.jsx(p,{...a,trigger:"#",placeholder:"#SuperMario",options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(v,{label:"Command Mention (/でコマンドを選択)",children:t.jsx(p,{...a,trigger:"/",placeholder:"/help",options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]}),args:{fullWidth:!0,rows:3}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="User Mention (@でユーザーを選択)">\r
      <Mentions {...args} />\r
    </Label>,
  args: {
    options: mockUsers,
    placeholder: "@yamada",
    fullWidth: true,
    rows: 4
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <Label label="Character Mention (#でキャラクターを選択)">\r
        <Mentions {...args} trigger="#" placeholder="#SuperMario" options={[{
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
      <Label label="Command Mention (/でコマンドを選択)">\r
        <Mentions {...args} trigger="/" placeholder="/help" options={[{
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
    </div>,
  args: {
    fullWidth: true,
    rows: 3
  }
}`,...c.parameters?.docs?.source}}};const $=["Default","CustomTrigger"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:c,Default:u,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"}));export{c as C,u as D,Q as M};
