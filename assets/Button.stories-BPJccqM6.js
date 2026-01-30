import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-BT0MwaR-.js";import{P as t}from"./index-Lrr0O5_Q.js";import{I as _}from"./Icon-Bqcd2Of1.js";import{u as w}from"./useTranslation-C_eEKRnQ.js";const v=({size:e="medium",label:r,priority:l="secondary",role:i="default",state:C="abled",iconName:a=void 0,iconPosition:o="left",loading:s=!1,backgroundColor:I,"aria-label":L,...B})=>{const{t:T}=w(),h=`wim-button--${{small:"sm",medium:"md",large:"lg"}[e]}`,k=`wim-button--${l}`,q=`wim-button--${i}`,z=s?"wim-button--loading":"",M=!r&&a?"wim-button--icon-only":"",P=n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"wim-button__inner",style:s?{visibility:"hidden"}:void 0,children:[a&&o==="left"&&n.jsx(_,{name:a,size:e}),r&&n.jsx("span",{className:"wim-button__label",children:T(r)}),a&&o==="right"&&n.jsx(_,{name:a,size:e})]}),s&&n.jsx("span",{className:"wim-button__loader",children:n.jsx(_,{name:"LoadingIcon",size:e})})]});return n.jsx("button",{type:"button",style:I?{backgroundColor:I}:void 0,className:["wim-button",h,k,q,z,M].filter(Boolean).join(" "),disabled:C==="disabled"||s,"aria-label":L||(!r&&a?a:void 0)||(s?"LoadingIcon":void 0),...B,children:P})};v.propTypes={backgroundColor:t.string,size:t.oneOf(["small","medium","large"]),label:t.string,onClick:t.func,priority:t.oneOf(["primary","secondary","tertiary"]),role:t.oneOf(["default","destructive","positive"]),state:t.oneOf(["abled","disabled"]),iconName:t.oneOf(["CircleIcon","SquareIcon","LoadingIcon"]),iconPosition:t.oneOf(["left","right"]),loading:t.bool,"aria-label":t.string};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"destructive"',computed:!1},{value:'"positive"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:j}=__STORYBOOK_MODULE_TEST__,x={title:"Component/Buttons & Actions/Button",component:v,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:j()}},u={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},c={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},d={args:{size:"small",label:"button_label",priority:"tertiary",state:"abled"}},m={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},p={args:{size:"large",priority:"primary",role:"default",state:"abled",iconName:"SquareIcon","aria-label":"Square Icon Button"}},b={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},g={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},y={render:e=>{const[r,l]=S.useState(!1),[i,C]=S.useState(e.label||"button_label"),a=o=>{e.onClick&&e.onClick(o),l(!0),setTimeout(()=>{l(!1)},2e3)};return n.jsx(v,{...e,loading:r,label:i,onClick:a})},args:{size:"medium",priority:"primary",label:"button_label"}},f={render:e=>{const[r,l]=S.useState(!1),[i,C]=S.useState(e.label||"button_label"),a=o=>{e.onClick&&e.onClick(o),l(!0),setTimeout(()=>{l(!1)},2e3)};return n.jsx(v,{...e,loading:r,label:i,onClick:a})},args:{size:"medium",priority:"secondary",label:"button_label",iconName:"CircleIcon",iconPosition:"left"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    state: "abled"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button"
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} label={label} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label"
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} label={label} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    label: "button_label",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...f.parameters?.docs?.source}}};const O=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","LargePrimaryNoLabelWithSquareIconButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton"],$=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:u,LargePrimaryNoLabelWithSquareIconButton:p,MediumPrimaryInteractiveLoadingButton:y,MediumPrimaryLoadingProcessingButton:b,MediumSecondaryButton:c,MediumSecondaryInteractiveLoadingWithIconButton:f,MediumSecondaryLoadingSavingButton:g,SmallTertiaryButton:d,SmallTertiaryDestructiveWithCircleIconButton:m,__namedExportsOrder:O,default:x},Symbol.toStringTag,{value:"Module"}));export{$ as B};
