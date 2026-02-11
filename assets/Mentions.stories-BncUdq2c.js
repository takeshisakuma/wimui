import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-hbRdK1HV.js";import{P as s}from"./index-DI8fBNh8.js";import{T as W}from"./Textarea-Fnz3GcnO.js";import{L as w}from"./Label-BWeZn8Se.js";const d=({options:o,trigger:m="@",value:M,defaultValue:k,onChange:g,onSelect:S,...L})=>{const[O,j]=r.useState(k||""),h=M!==void 0,x=h?M:O,[T,u]=r.useState(!1),[_,I]=r.useState(""),[R,P]=r.useState(0),[E,b]=r.useState(-1),[D,v]=r.useState(0),y=r.useRef(null),A=r.useRef(null),i=o.filter(e=>e.display.toLowerCase().includes(_.toLowerCase())),U=e=>{const n=e.target.value,f=e.target.selectionStart;P(f),h||j(n),g&&g(e);const l=n.slice(0,f),a=l.lastIndexOf(m);if(a!==-1){const C=l.slice(a+m.length);if(!C.includes(" ")){b(a),I(C),u(!0),v(0);return}}u(!1),b(-1)},q=e=>{const n=x.slice(0,E),f=x.slice(R),l=`${n}${m}${e.display} ${f}`;h||j(l),g&&g({target:{value:l},currentTarget:{value:l}}),S&&S(e),u(!1),b(-1),setTimeout(()=>{if(y.current){y.current.focus();const a=n.length+m.length+e.display.length+1;y.current.setSelectionRange(a,a)}},0)},V=e=>{T&&i.length>0&&(e.key==="ArrowDown"?(e.preventDefault(),v(n=>(n+1)%i.length)):e.key==="ArrowUp"?(e.preventDefault(),v(n=>(n-1+i.length)%i.length)):e.key==="Enter"||e.key==="Tab"?(e.preventDefault(),q(i[D])):e.key==="Escape"&&u(!1))};return t.jsxs("div",{className:"wim-mentions-container",ref:A,children:[t.jsx(W,{...L,ref:y,value:x,onChange:U,onKeyDown:V,onBlur:()=>{setTimeout(()=>u(!1),200)}}),T&&i.length>0&&t.jsx("div",{className:"wim-mentions-list",children:i.map((e,n)=>t.jsx("div",{className:`wim-mentions-item ${n===D?"wim-mentions-item--selected":""}`,onClick:()=>q(e),children:e.display},e.id))})]})};d.propTypes={options:s.arrayOf(s.shape({id:s.oneOfType([s.string,s.number]).isRequired,display:s.string.isRequired})).isRequired,trigger:s.string,onSelect:s.func};d.__docgenInfo={description:"テキスト入力中に特定の文字（@など）をトリガーにして候補を表示し、選択できるようにするコンポーネント。",methods:[],displayName:"Mentions",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    id: string | number;\r
    display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}}],raw:"MentionOption[]"},description:"補完候補のリスト。",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},display:{name:"string",required:!0}}}}},trigger:{required:!1,tsType:{name:"string"},description:"メンションを開始するトリガー文字。デフォルトは '@'。",defaultValue:{value:'"@"',computed:!1},type:{name:"string"}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    id: string | number;\r
    display: string;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"display",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:"候補が選択された時に呼ばれるコールバック。",type:{name:"func"}}}};const $={title:"Component/Form Inputs/Mentions",component:d,parameters:{layout:"padded"}},N=[{id:1,display:"Alex"},{id:2,display:"Jordan"},{id:3,display:"WimUI_Admin"},{id:4,display:"Designer_K"},{id:5,display:"Frontend_Dev"},{id:6,display:"Google_Deepmind"}],p={render:o=>t.jsx(w,{label:"User Mention (@でユーザーを選択)",children:t.jsx(d,{...o})}),args:{options:N,placeholder:"@を入力して候補を表示...",fullWidth:!0,rows:4}},c={render:o=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(w,{label:"Character Mention (#でキャラクターを選択)",children:t.jsx(d,{...o,trigger:"#",options:[{id:1,display:"SuperMario"},{id:2,display:"Luigi"},{id:3,display:"Peach"}]})}),t.jsx(w,{label:"Command Mention (/でコマンドを選択)",children:t.jsx(d,{...o,trigger:"/",options:[{id:1,display:"help"},{id:2,display:"settings"},{id:3,display:"logout"}]})})]}),args:{placeholder:"記号を入力...",fullWidth:!0,rows:3}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="User Mention (@でユーザーを選択)">\r
            <Mentions {...args} />\r
        </Label>,
  args: {
    options: mockUsers,
    placeholder: "@を入力して候補を表示...",
    fullWidth: true,
    rows: 4
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const K=["Default","CustomTrigger"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomTrigger:c,Default:p,__namedExportsOrder:K,default:$},Symbol.toStringTag,{value:"Module"}));export{c as C,p as D,Q as M};
