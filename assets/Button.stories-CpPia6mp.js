import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-eiiYkaZ-.js";import{P as e}from"./index-sCZswWJS.js";import{I as P}from"./Icon-DK4qDEzR.js";import{u as N}from"./useTranslation-BEPvlZI2.js";const v=({size:a="medium",label:t,priority:p="secondary",role:S="default",state:b="abled",iconName:g=void 0,iconPosition:y="left",loading:f=!1,backgroundColor:_,"aria-label":L,...T})=>{const{t:B}=N(),q=`wim-button--${{small:"sm",medium:"md",large:"lg"}[a]}`,z=`wim-button--${p}`,h=`wim-button--${S}`,k=f?"wim-button--loading":"",w=!t&&(g||f)?"wim-button--icon-only":"",r=f?"LoadingIcon":g,C=r?n.jsx(P,{name:r,size:a}):null,O=n.jsxs(n.Fragment,{children:[r&&y==="left"&&C,t&&n.jsx("span",{className:"wim-button__label",children:B(t)}),r&&y==="right"&&C]});return n.jsx("button",{type:"button",style:_?{backgroundColor:_}:void 0,className:["wim-button",q,z,h,k,w].filter(Boolean).join(" "),disabled:b==="disabled"||f,"aria-label":L||(!t&&r?r:void 0),...T,children:O})};v.propTypes={backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string,onClick:e.func,priority:e.oneOf(["primary","secondary","tertiary"]),role:e.oneOf(["default","destructive","positive"]),state:e.oneOf(["abled","disabled"]),iconName:e.oneOf(["CircleIcon","SquareIcon","LoadingIcon"]),iconPosition:e.oneOf(["left","right"]),loading:e.bool,"aria-label":e.string};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"destructive"',computed:!1},{value:'"positive"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:j}=__STORYBOOK_MODULE_TEST__,x={title:"Component/Buttons & Actions/Button",component:v,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:j()}},l={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},o={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},s={args:{size:"small",label:"button_label",priority:"secondary",state:"abled"}},i={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},u={args:{size:"large",priority:"primary",role:"default",state:"abled",iconName:"SquareIcon","aria-label":"Square Icon Button"}},c={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},m={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},d={render:a=>{const[t,p]=I.useState(!1),[S,b]=I.useState(a.label||"button_label"),g=y=>{a.onClick&&a.onClick(y),p(!0),b("saving"),setTimeout(()=>{p(!1),b(a.label||"button_label")},2e3)};return n.jsx(v,{...a,loading:t,label:S,onClick:g})},args:{size:"medium",priority:"primary",label:"button_label"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setLabel("saving");
      setTimeout(() => {
        setLoading(false);
        setLabel(args.label || "button_label");
      }, 2000);
    };
    return <Button {...args} loading={loading} label={label} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label"
  }
}`,...d.parameters?.docs?.source}}};const M=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallTertiaryButtonWithCircleIcon","LargePrimaryButtonWithSquareIconNoLabel","LoadingProcessing","LoadingSaving","InteractiveLoading"],D=Object.freeze(Object.defineProperty({__proto__:null,InteractiveLoading:d,LargePrimaryButton:l,LargePrimaryButtonWithSquareIconNoLabel:u,LoadingProcessing:c,LoadingSaving:m,MeduimSecondaryButton:o,SmallSecondaryButton:s,SmallTertiaryButtonWithCircleIcon:i,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{D as B,l as L};
