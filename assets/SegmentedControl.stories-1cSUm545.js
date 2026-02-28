import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as W,r as u}from"./iframe-EVkAXmOk.js";import{c as y}from"./index-BX12fiL9.js";import{I as L}from"./Icon-BGwsqTxV.js";const o=({options:e,value:a,onChange:r,size:l="medium",fullWidth:j=!1,className:O,label:f})=>{const[z,b]=W.useState(null),w=W.useRef([]),I=`wim-segmented-label-${u.useId()}`,C=e.findIndex(t=>t.value===a),N={width:`calc((100% - 4px) / ${e.length})`,transform:`translateX(${C*100}%)`},q=(t,i)=>{let s=i;switch(t.key){case"ArrowLeft":case"ArrowUp":s=i-1,s<0&&(s=e.length-1);break;case"ArrowRight":case"ArrowDown":s=i+1,s>=e.length&&(s=0);break;default:return}t.preventDefault(),r(e[s].value),w.current[s]?.focus()};return n.jsxs("div",{className:y("wim-segmented-control-container",O),children:[f&&n.jsx("div",{id:I,className:"wim-label",style:{marginBottom:"8px"},children:f}),n.jsxs("div",{className:y("wim-segmented-control",`wim-segmented-control--${l==="small"?"sm":l==="large"?"lg":"md"}`,j&&"wim-segmented-control--full-width"),role:"radiogroup","aria-labelledby":f?I:void 0,children:[n.jsx("div",{className:"wim-segmented-control__slider",style:N,"aria-hidden":"true"}),e.map((t,i)=>{const s=t.value===a,V=s||C===-1&&i===0;return n.jsxs("button",{ref:x=>{w.current[i]=x},type:"button",className:y("wim-segmented-control__item",s&&"wim-segmented-control__item--active",!t.label&&t.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>r(t.value),onKeyDown:x=>q(x,i),onFocus:()=>b(i),onBlur:()=>b(null),role:"radio","aria-checked":s,tabIndex:V?0:-1,"aria-label":t.label||t.value,children:[t.iconName&&n.jsx(L,{name:t.iconName,size:l}),t.label&&n.jsx("span",{className:"wim-segmented-control__label",children:t.label})]},t.value)})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"}}};const _={title:"Components/Selection Controls/SegmentedControl",component:o,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},S=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],c={args:{size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,r]=u.useState("day");return n.jsx(o,{...e,options:S,value:a,onChange:r})}},d={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,r]=u.useState("day");return n.jsx(o,{...e,options:S,value:a,onChange:r})}},m={args:{size:"large",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,r]=u.useState("day");return n.jsx(o,{...e,options:S,value:a,onChange:r})}},g={args:{size:"medium",fullWidth:!0},render:e=>{const[a,r]=u.useState("on"),l=[{label:"On",value:"on"},{label:"Off",value:"off"}];return n.jsx(o,{...e,options:l,value:a,onChange:r})}},v={args:{size:"medium",fullWidth:!1},render:e=>{const[a,r]=u.useState("circle"),l=[{label:"Circle",value:"circle",iconName:"CircleIcon"},{label:"Square",value:"square",iconName:"SquareIcon"},{label:"External",value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(o,{...e,options:l,value:a,onChange:r})}},p={args:{size:"medium",fullWidth:!1},render:e=>{const[a,r]=u.useState("circle"),l=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(o,{...e,options:l,value:a,onChange:r})}},h={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:n.jsx(e,{})})],render:e=>{const[a,r]=u.useState("long1"),l=[{label:"This is a very long text label that might cause overflow",value:"long1"},{label:"Another long text variant",value:"long2"},{label:"Short",value:"short"}];return n.jsx(o,{...e,options:l,value:a,onChange:r})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const [value, setValue] = useState("day");
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const [value, setValue] = useState("on");
    const twoOptions = [{
      label: "On",
      value: "on"
    }, {
      label: "Off",
      value: "off"
    }];
    return <SegmentedControl {...args} options={twoOptions} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState("circle");
    const iconOptions = [{
      label: "Circle",
      value: "circle",
      iconName: "CircleIcon"
    }, {
      label: "Square",
      value: "square",
      iconName: "SquareIcon"
    }, {
      label: "External",
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const;
    return <SegmentedControl {...args} options={iconOptions as any} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const [value, setValue] = useState("circle");
    const iconOnlyOptions = [{
      value: "circle",
      iconName: "CircleIcon"
    }, {
      value: "square",
      iconName: "SquareIcon"
    }, {
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const;
    return <SegmentedControl {...args} options={iconOnlyOptions as any} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
        <Story />\r
      </div>],
  render: args => {
    const [value, setValue] = useState("long1");
    const longOptions = [{
      label: "This is a very long text label that might cause overflow",
      value: "long1"
    }, {
      label: "Another long text variant",
      value: "long2"
    }, {
      label: "Short",
      value: "short"
    }];
    return <SegmentedControl {...args} options={longOptions} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}};const k=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],M=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:p,Large:m,LongLabel:h,Medium:d,Small:c,TwoOptions:g,WithIcons:v,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{p as I,m as L,d as M,M as S,g as T,v as W,c as a};
