import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as a,A as u}from"./iframe-tWK6G2pl.js";import{S as l}from"./SegmentedControl-C-TXtoXe.js";import{u as i}from"./useTranslation-C9hYRQzo.js";const y={title:"Components/Selection Controls/SegmentedControl",component:l,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},fullWidth:{control:"boolean"}}},d={args:{size:"small",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},c={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},m={args:{size:"large",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story_segmented_day"),value:"day"},{label:e("story_segmented_week"),value:"week"},{label:e("story_segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},g={args:{size:"medium",fullWidth:!0},render:n=>{const{t:e}=i(u),[s,o]=a.useState("on"),r=a.useMemo(()=>[{label:e("story_segmented_on"),value:"on"},{label:e("story_segmented_off"),value:"off"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},p={args:{size:"medium",fullWidth:!1},render:n=>{const{t:e}=i(u),[s,o]=a.useState("circle"),r=a.useMemo(()=>[{label:e("story_segmented_circle"),value:"circle",iconName:"CircleIcon"},{label:e("story_segmented_square"),value:"square",iconName:"SquareIcon"},{label:e("story_segmented_external"),value:"external",iconName:"ExternalLinkIcon"}],[e]);return t.jsx(l,{...n,options:[...r],value:s,onChange:o})}},_={args:{size:"medium",fullWidth:!1},render:n=>{const[e,s]=a.useState("circle"),o=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return t.jsx(l,{...n,options:[...o],value:e,onChange:s})}},v={args:{size:"medium",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=i(u),[s,o]=a.useState("long1"),r=a.useMemo(()=>[{label:e("story_segmented_long_label"),value:"long1"},{label:e("story_segmented_another_long"),value:"long2"},{label:e("story_segmented_short"),value:"short"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(() => [{
      label: t("story_segmented_day"),
      value: "day"
    }, {
      label: t("story_segmented_week"),
      value: "week"
    }, {
      label: t("story_segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("on");
    const options = useMemo(() => [{
      label: t("story_segmented_on"),
      value: "on"
    }, {
      label: t("story_segmented_off"),
      value: "off"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: false
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("circle");
    const options = useMemo(() => [{
      label: t("story_segmented_circle"),
      value: "circle",
      iconName: "CircleIcon"
    }, {
      label: t("story_segmented_square"),
      value: "square",
      iconName: "SquareIcon"
    }, {
      label: t("story_segmented_external"),
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const, [t]);
    return <SegmentedControl {...args} options={[...options] as Parameters<typeof SegmentedControl>[0]["options"]} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    return <SegmentedControl {...args} options={[...iconOnlyOptions] as Parameters<typeof SegmentedControl>[0]["options"]} value={value} onChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
        <Story />
      </div>],
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("long1");
    const options = useMemo(() => [{
      label: t("story_segmented_long_label"),
      value: "long1"
    }, {
      label: t("story_segmented_another_long"),
      value: "long2"
    }, {
      label: t("story_segmented_short"),
      value: "short"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};const h=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:_,Large:m,LongLabel:v,Medium:c,Small:d,TwoOptions:g,WithIcons:p,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{_ as I,m as L,c as M,f as S,g as T,p as W,d as a};
