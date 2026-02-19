import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-5J6xCe39.js";import{c as V}from"./index-CkWMbguu.js";import{T as N}from"./Textarea-BvfP2IAj.js";import{L as w}from"./Label-Cf3cCoBx.js";const c=({options:a,trigger:p="@",value:M,defaultValue:k,onChange:m,onSelect:S,...L})=>{const[_,j]=r.useState(k||""),y=M!==void 0,h=y?M:_,[D,l]=r.useState(!1),[I,O]=r.useState(""),[q,E]=r.useState(0),[A,x]=r.useState(-1),[b,v]=r.useState(0),g=r.useRef(null),P=r.useRef(null),s=a.filter(e=>e.display.toLowerCase().includes(I.toLowerCase())),R=e=>{const n=e.target.value,f=e.target.selectionStart;E(f),y||j(n),m&&m(e);const o=n.slice(0,f),i=o.lastIndexOf(p);if(i!==-1){const C=o.slice(i+p.length);if(!C.includes(" ")){x(i),O(C),l(!0),v(0);return}}l(!1),x(-1)},T=e=>{const n=h.slice(0,A),f=h.slice(q),o=`${n}${p}${e.display} ${f}`;y||j(o),m&&m({target:{value:o},currentTarget:{value:o}}),S&&S(e),l(!1),x(-1),setTimeout(()=>{if(g.current){g.current.focus();const i=n.length+p.length+e.display.length+1;g.current.setSelectionRange(i,i)}},0)},U=e=>{D&&s.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),v(n=>(n+1)%s.length)):e.key==="ArrowUp"?(e.preventDefault(),v(n=>(n-1+s.length)%s.length)):e.key==="Enter"||e.key==="Tab"?(e.preventDefault(),T(s[b])):e.key==="Escape"&&l(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:P,children:[t.jsx(N,{...L,ref:g,value:h,onChange:R,onKeyDown:U,onBlur:()=>{setTimeout(()=>l(!1),200)}}),D&&s.length>0&&t.jsx("div",{className:"wim-mentions-list",role:"listbox",children:s.map((e,n)=>t.jsx("div",{className:V("wim-mentions-item",n===b&&"wim-mentions-item--selected"),onClick:()=>T(e),role:"option","aria-selected":n===b,tabIndex:-1,children:e.display},e.id))})]})};c.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    id: string | number;\r
    display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:""},trigger:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"@"',computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    id: string | number;\r
    display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const W={title:"Component/Basic Inputs/Mentions",component:c,parameters:{layout:"padded"}},$=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],d={render:a=>t.jsx(w,{label:"User Mention (@でユーザーを選択)",children:t.jsx(c,{...a})}),args:{options:$,placeholder:"@を入力して候補を表示...",fullWidth:!0,rows:4}},u={render:a=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(w,{label:"Character Mention (#でキャラクターを選択)",children:t.jsx(c,{...a,trigger:"#",options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(w,{label:"Command Mention (/でコマンドを選択)",children:t.jsx(c,{...a,trigger:"/",options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]}),args:{placeholder:"記号を入力...",fullWidth:!0,rows:3}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="User Mention (@でユーザーを選択)">\r
            <Mentions {...args} />\r
        </Label>,
  args: {
    options: mockUsers,
    placeholder: "@を入力して候補を表示...",
    fullWidth: true,
    rows: 4
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
            <Label label="Character Mention (#でキャラクターを選択)">\r
                <Mentions {...args} trigger="#" options={[{
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
                <Mentions {...args} trigger="/" options={[{
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
    placeholder: "記号を入力...",
    fullWidth: true,
    rows: 3
  }
}`,...u.parameters?.docs?.source}}};const B=["Default","CustomTrigger"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:u,Default:d,__namedExportsOrder:B,default:W},Symbol.toStringTag,{value:"Module"}));export{u as C,d as D,Q as M};
