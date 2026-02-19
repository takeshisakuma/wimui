import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as C,r as u}from"./iframe-ylVohT6i.js";import{c as h}from"./index-C6pZpGhD.js";import{I as W}from"./Icon-DsjUDsBf.js";const i=({options:e,value:r,onChange:t,size:l="medium",fullWidth:N=!1,className:j,label:f})=>{const[L,x]=C.useState(null),I=C.useRef([]),b=`wim-segmented-label-${u.useId()}`,w=e.findIndex(a=>a.value===r),O={width:`calc((100% - 4px) / ${e.length})`,transform:`translateX(${w*100}%)`},q=(a,o)=>{let s=o;switch(a.key){case"ArrowLeft":case"ArrowUp":s=o-1,s<0&&(s=e.length-1);break;case"ArrowRight":case"ArrowDown":s=o+1,s>=e.length&&(s=0);break;default:return}a.preventDefault(),t(e[s].value),I.current[s]?.focus()};return n.jsxs("div",{className:h("wim-segmented-control-container",j),children:[f&&n.jsx("div",{id:b,className:"wim-label",style:{marginBottom:"8px"},children:f}),n.jsxs("div",{className:h("wim-segmented-control",`wim-segmented-control--${l==="small"?"sm":l==="large"?"lg":"md"}`,N&&"wim-segmented-control--full-width"),role:"radiogroup","aria-labelledby":f?b:void 0,children:[n.jsx("div",{className:"wim-segmented-control__slider",style:O,"aria-hidden":"true"}),e.map((a,o)=>{const s=a.value===r,V=s||w===-1&&o===0;return n.jsxs("button",{ref:y=>{I.current[o]=y},type:"button",className:h("wim-segmented-control__item",s&&"wim-segmented-control__item--active",!a.label&&a.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>t(a.value),onKeyDown:y=>q(y,o),onFocus:()=>x(o),onBlur:()=>x(null),role:"radio","aria-checked":s,tabIndex:V?0:-1,"aria-label":a.label||a.value,children:[a.iconName&&n.jsx(W,{name:a.iconName,size:l}),a.label&&n.jsx("span",{className:"wim-segmented-control__label",children:a.label})]},a.value)})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    value: string;\r
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"アクセシビリティ用のラベル"}}};const _={title:"Component/Selection Controls/SegmentedControl",component:i,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},S=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],c={args:{size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=u.useState("day");return n.jsx(i,{...e,options:S,value:r,onChange:t})}},d={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=u.useState("day");return n.jsx(i,{...e,options:S,value:r,onChange:t})}},m={args:{size:"large",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=u.useState("day");return n.jsx(i,{...e,options:S,value:r,onChange:t})}},g={args:{size:"medium",fullWidth:!0},render:e=>{const[r,t]=u.useState("on"),l=[{label:"On",value:"on"},{label:"Off",value:"off"}];return n.jsx(i,{...e,options:l,value:r,onChange:t})}},p={args:{size:"medium",fullWidth:!1},render:e=>{const[r,t]=u.useState("circle"),l=[{label:"Circle",value:"circle",iconName:"CircleIcon"},{label:"Square",value:"square",iconName:"SquareIcon"},{label:"External",value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(i,{...e,options:l,value:r,onChange:t})}},v={args:{size:"medium",fullWidth:!1},render:e=>{const[r,t]=u.useState("circle"),l=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(i,{...e,options:l,value:r,onChange:t})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "600px"
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
    width: "600px"
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
    width: "600px"
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const k=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly"],D=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:v,Large:m,Medium:d,Small:c,TwoOptions:g,WithIcons:p,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{v as I,m as L,d as M,D as S,g as T,p as W,c as a};
