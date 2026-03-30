import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as a,A as u}from"./iframe-BB8xHwtR.js";import{S as l}from"./SegmentedControl-DpJl08H2.js";import{u as d}from"./useTranslation-y7Vel5kV.js";const h={title:"Components/Selection Controls/SegmentedControl",component:l,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]},fullWidth:{control:"boolean"}}},c={args:{size:"sm",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story.segmented_day"),value:"day"},{label:e("story.segmented_week"),value:"week"},{label:e("story.segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},i={args:{size:"md",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story.segmented_day"),value:"day"},{label:e("story.segmented_week"),value:"week"},{label:e("story.segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},m={args:{size:"lg",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(u),[s,o]=a.useState("day"),r=a.useMemo(()=>[{label:e("story.segmented_day"),value:"day"},{label:e("story.segmented_week"),value:"week"},{label:e("story.segmented_month"),value:"month"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},g={args:{size:"md",fullWidth:!0},render:n=>{const{t:e}=d(u),[s,o]=a.useState("on"),r=a.useMemo(()=>[{label:e("story.segmented_on"),value:"on"},{label:e("story.segmented_off"),value:"off"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}},p={args:{size:"md",fullWidth:!1},render:n=>{const{t:e}=d(u),[s,o]=a.useState("circle"),r=a.useMemo(()=>[{label:e("story.segmented_circle"),value:"circle",iconName:"CircleIcon"},{label:e("story.segmented_square"),value:"square",iconName:"SquareIcon"},{label:e("story.segmented_external"),value:"external",iconName:"ExternalLinkIcon"}],[e]);return t.jsx(l,{...n,options:[...r],value:s,onChange:o})}},v={args:{size:"md",fullWidth:!1},render:n=>{const[e,s]=a.useState("circle"),o=[{value:"circle",iconName:"CircleIcon"},{value:"square",iconName:"SquareIcon"},{value:"external",iconName:"ExternalLinkIcon"}];return t.jsx(l,{...n,options:[...o],value:e,onChange:s})}},y={args:{size:"md",fullWidth:!0},decorators:[n=>t.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:t.jsx(n,{})})],render:n=>{const{t:e}=d(u),[s,o]=a.useState("long1"),r=a.useMemo(()=>[{label:e("story.segmented_long_label"),value:"long1"},{label:e("story.segmented_another_long"),value:"long2"},{label:e("story.segmented_short"),value:"short"}],[e]);return t.jsx(l,{...n,options:r,value:s,onChange:o})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
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
      label: t("story.segmented_day"),
      value: "day"
    }, {
      label: t("story.segmented_week"),
      value: "week"
    }, {
      label: t("story.segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
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
      label: t("story.segmented_day"),
      value: "day"
    }, {
      label: t("story.segmented_week"),
      value: "week"
    }, {
      label: t("story.segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
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
      label: t("story.segmented_day"),
      value: "day"
    }, {
      label: t("story.segmented_week"),
      value: "week"
    }, {
      label: t("story.segmented_month"),
      value: "month"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    fullWidth: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("on");
    const options = useMemo(() => [{
      label: t("story.segmented_on"),
      value: "on"
    }, {
      label: t("story.segmented_off"),
      value: "off"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    fullWidth: false
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("circle");
    const options = useMemo(() => [{
      label: t("story.segmented_circle"),
      value: "circle",
      iconName: "CircleIcon"
    }, {
      label: t("story.segmented_square"),
      value: "square",
      iconName: "SquareIcon"
    }, {
      label: t("story.segmented_external"),
      value: "external",
      iconName: "ExternalLinkIcon"
    }] as const, [t]);
    return <SegmentedControl {...args} options={[...options] as Parameters<typeof SegmentedControl>[0]["options"]} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
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
      label: t("story.segmented_long_label"),
      value: "long1"
    }, {
      label: t("story.segmented_another_long"),
      value: "long2"
    }, {
      label: t("story.segmented_short"),
      value: "short"
    }], [t]);
    return <SegmentedControl {...args} options={options} value={value} onChange={setValue} />;
  }
}`,...y.parameters?.docs?.source}}};const S=["Small","Medium","Large","TwoOptions","WithIcons","IconOnly","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,IconOnly:v,Large:m,LongLabel:y,Medium:i,Small:c,TwoOptions:g,WithIcons:p,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{v as I,m as L,i as M,f as S,g as T,p as W,c as a};
