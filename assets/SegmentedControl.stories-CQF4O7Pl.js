import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as I,r as i}from"./iframe-BoXBO0MO.js";import{c as b}from"./index-DaS8FBbW.js";import{I as q}from"./Icon-BGLtcWFY.js";const u=({options:e,value:r,onChange:t,size:l="medium",fullWidth:w=!1,className:C})=>{const[_,S]=I.useState(null),h=I.useRef([]),x=e.findIndex(a=>a.value===r),N={width:`calc((100% - 4px) / ${e.length})`,transform:`translateX(${x*100}%)`},O=(a,o)=>{let s=o;switch(a.key){case"ArrowLeft":case"ArrowUp":s=o-1,s<0&&(s=e.length-1);break;case"ArrowRight":case"ArrowDown":s=o+1,s>=e.length&&(s=0);break;default:return}a.preventDefault(),t(e[s].value),h.current[s]?.focus()};return n.jsxs("div",{className:b("wim-segmented-control",`wim-segmented-control--${l==="small"?"sm":l==="large"?"lg":"md"}`,w&&"wim-segmented-control--full-width",C),role:"radiogroup",children:[n.jsx("div",{className:"wim-segmented-control__slider",style:N}),e.map((a,o)=>{const s=a.value===r,j=s||x===-1&&o===0;return n.jsxs("button",{ref:f=>{h.current[o]=f},type:"button",className:b("wim-segmented-control__item",s&&"wim-segmented-control__item--active",!a.label&&a.iconName&&"wim-segmented-control__item--icon-only"),onClick:()=>t(a.value),onKeyDown:f=>O(f,o),onFocus:()=>S(o),onBlur:()=>S(null),role:"radio","aria-checked":s,tabIndex:j?0:-1,"aria-label":a.label||a.value,children:[a.iconName&&n.jsx(q,{name:a.iconName,size:l}),a.label&&n.jsx("span",{className:"wim-segmented-control__label",children:a.label})]},a.value)})]})};u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    value: string;\r
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'},{name:"literal",value:'"ExternalLinkIcon"'}],required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Component/Selection Controls/SegmentedControl",component:u,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},y=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],c={args:{size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=i.useState("day");return n.jsx(u,{...e,options:y,value:r,onChange:t})}},d={args:{size:"medium",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=i.useState("day");return n.jsx(u,{...e,options:y,value:r,onChange:t})}},m={args:{size:"large",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"600px"},children:n.jsx(e,{})})],render:e=>{const[r,t]=i.useState("day");return n.jsx(u,{...e,options:y,value:r,onChange:t})}},g={args:{size:"medium",fullWidth:!0},render:e=>{const[r,t]=i.useState("on"),l=[{label:"On",value:"on"},{label:"Off",value:"off"}];return n.jsx(u,{...e,options:l,value:r,onChange:t})}},p={args:{size:"medium",fullWidth:!1},render:e=>{const[r,t]=i.useState("circle"),l=[{label:"Circle",value:"circle",iconName:"CircleIcon"},{label:"Square",value:"square",iconName:"SquareIcon"},{label:"External",value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(u,{...e,options:l,value:r,onChange:t})}},v={args:{size:"medium",fullWidth:!1},render:e=>{const[r,t]=i.useState("circle"),l=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return n.jsx(u,{...e,options:l,value:r,onChange:t})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const W=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly"],T=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:v,Large:m,Medium:d,Small:c,TwoOptions:g,WithIcons:p,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{v as I,m as L,d as M,T as S,g as T,p as W,c as a};
