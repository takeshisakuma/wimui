import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as L}from"./iframe-3yZnAg6Q.js";import{P as a}from"./index-DaY9gHDY.js";import{I as P}from"./Icon-3Ynv0pzA.js";import{u as j}from"./useTranslation-IotFLVOW.js";const y=({size:e="medium",label:n,priority:t="secondary",role:i="default",state:l="abled",iconName:v=void 0,iconPosition:S="left",loading:C=!1,loadingMode:k="text",backgroundColor:I,"aria-label":T,...B})=>{const{t:z}=j(),q=`wim-button--${{small:"sm",medium:"md",large:"lg"}[e]}`,h=`wim-button--${t}`,x=`wim-button--${i}`,O=C?`wim-button--loading wim-button--loading-${k}`:"",w=!n&&(v||C)?"wim-button--icon-only":"",o=C?"LoadingIcon":v,_=o?r.jsx(P,{name:o,size:e}):null,M=r.jsxs(r.Fragment,{children:[o&&S==="left"&&_,n&&r.jsx("span",{className:"wim-button__label",children:z(n)}),o&&S==="right"&&_]});return r.jsx("button",{type:"button",style:I?{backgroundColor:I}:void 0,className:["wim-button",q,h,x,O,w].filter(Boolean).join(" "),disabled:l==="disabled"||C,"aria-label":T||(!n&&o?o:void 0),...B,children:M})};y.propTypes={backgroundColor:a.string,size:a.oneOf(["small","medium","large"]),label:a.string,onClick:a.func,priority:a.oneOf(["primary","secondary","tertiary"]),role:a.oneOf(["default","destructive","positive"]),state:a.oneOf(["abled","disabled"]),iconName:a.oneOf(["CircleIcon","SquareIcon","LoadingIcon"]),iconPosition:a.oneOf(["left","right"]),loading:a.bool,loadingMode:a.oneOf(["text","icon"]),"aria-label":a.string};y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},label:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},priority:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]}},role:{required:!1,tsType:{name:"union",raw:'"default" | "destructive" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"destructive"',computed:!1},{value:'"positive"',computed:!1}]}},state:{required:!1,tsType:{name:"union",raw:'"abled" | "disabled"',elements:[{name:"literal",value:'"abled"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"abled"',computed:!1},type:{name:"enum",value:[{value:'"abled"',computed:!1},{value:'"disabled"',computed:!1}]}},iconName:{required:!1,tsType:{name:"union",raw:'"CircleIcon" | "SquareIcon" | "LoadingIcon"',elements:[{name:"literal",value:'"CircleIcon"'},{name:"literal",value:'"SquareIcon"'},{name:"literal",value:'"LoadingIcon"'}]},description:"",defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},loadingMode:{required:!1,tsType:{name:"union",raw:'"text" | "icon"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}]},description:"",defaultValue:{value:'"text"',computed:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"icon"',computed:!1}]}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},onClick:{description:"",type:{name:"func"},required:!1}}};const{fn:N}=__STORYBOOK_MODULE_TEST__,E={title:"Component/Buttons & Actions/Button",component:y,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:N()}},s={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},u={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},c={args:{size:"small",label:"button_label",priority:"secondary",state:"abled"}},d={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},m={args:{size:"large",priority:"primary",role:"default",state:"abled",iconName:"SquareIcon","aria-label":"Square Icon Button"}},p={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},g={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},b={render:e=>{const[n,t]=L.useState(!1),[i,l]=L.useState(e.label||"button_label"),v=S=>{e.onClick&&e.onClick(S),t(!0),l("saving"),setTimeout(()=>{t(!1),l(e.label||"button_label")},2e3)};return r.jsx(y,{...e,loading:n,label:i,onClick:v})},args:{size:"medium",priority:"primary",label:"button_label"}},f={render:e=>{const[n,t]=L.useState(!1),i=l=>{e.onClick&&e.onClick(l),t(!0),setTimeout(()=>{t(!1)},2e3)};return r.jsx(y,{...e,loading:n,loadingMode:"icon",onClick:i})},args:{size:"medium",priority:"primary",label:"Click to Shrink",loadingMode:"icon"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled"
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} loadingMode="icon" onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "Click to Shrink",
    loadingMode: "icon"
  }
}`,...f.parameters?.docs?.source}}};const V=["LargePrimaryButton","MeduimSecondaryButton","SmallSecondaryButton","SmallTertiaryButtonWithCircleIcon","LargePrimaryButtonWithSquareIconNoLabel","LoadingProcessing","LoadingSaving","InteractiveLoading","IconOnlyLoading"],F=Object.freeze(Object.defineProperty({__proto__:null,IconOnlyLoading:f,InteractiveLoading:b,LargePrimaryButton:s,LargePrimaryButtonWithSquareIconNoLabel:m,LoadingProcessing:p,LoadingSaving:g,MeduimSecondaryButton:u,SmallSecondaryButton:c,SmallTertiaryButtonWithCircleIcon:d,__namedExportsOrder:V,default:E},Symbol.toStringTag,{value:"Module"}));export{F as B,s as L};
