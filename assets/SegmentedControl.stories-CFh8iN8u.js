"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./SegmentedControl-C7Bjc-XD.js";var d=n({IconOnly:()=>b,Large:()=>_,LongLabel:()=>x,Medium:()=>g,Small:()=>h,TwoOptions:()=>v,WithIcons:()=>y,__namedExportsOrder:()=>S,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Selection Controls/SegmentedControl`,component:u,parameters:{layout:`centered`},argTypes:{disabled:{control:`boolean`},size:{control:`radio`,options:[`sm`,`md`,`lg`]},fullWidth:{control:`boolean`}}},h={args:{size:`sm`,fullWidth:!0},decorators:[e=>(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`min(600px, 100vw - 2rem)`},children:(0,p.jsx)(e,{})})],render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`day`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_day`),value:`day`},{label:t(`story.segmented_week`),value:`week`},{label:t(`story.segmented_month`),value:`month`}],[t]);return(0,p.jsx)(u,{...e,options:a,value:n,onChange:r})}},g={args:{size:`md`,fullWidth:!0},decorators:[e=>(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`min(600px, 100vw - 2rem)`},children:(0,p.jsx)(e,{})})],render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`day`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_day`),value:`day`},{label:t(`story.segmented_week`),value:`week`},{label:t(`story.segmented_month`),value:`month`}],[t]);return(0,p.jsx)(u,{...e,options:a,value:n,onChange:r})}},_={args:{size:`lg`,fullWidth:!0},decorators:[e=>(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`min(600px, 100vw - 2rem)`},children:(0,p.jsx)(e,{})})],render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`day`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_day`),value:`day`},{label:t(`story.segmented_week`),value:`week`},{label:t(`story.segmented_month`),value:`month`}],[t]);return(0,p.jsx)(u,{...e,options:a,value:n,onChange:r})}},v={args:{size:`md`,fullWidth:!0},render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`on`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_on`),value:`on`},{label:t(`story.segmented_off`),value:`off`}],[t]);return(0,p.jsx)(u,{...e,options:a,value:n,onChange:r})}},y={args:{size:`md`,fullWidth:!1},render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`circle`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_circle`),value:`circle`,iconName:`CircleIcon`},{label:t(`story.segmented_square`),value:`square`,iconName:`SquareIcon`},{label:t(`story.segmented_external`),value:`external`,iconName:`ExternalLinkIcon`}],[t]);return(0,p.jsx)(u,{...e,options:[...a],value:n,onChange:r})}},b={args:{size:`md`,fullWidth:!1},render:e=>{let[t,n]=(0,f.useState)(`circle`),r=[{value:`circle`,iconName:`CircleIcon`},{value:`square`,iconName:`SquareIcon`},{value:`external`,iconName:`ExternalLinkIcon`}];return(0,p.jsx)(u,{...e,options:[...r],value:t,onChange:n})}},x={args:{size:`md`,fullWidth:!0},decorators:[e=>(0,p.jsx)(`div`,{style:{width:`100%`,maxWidth:`min(600px, 100vw - 2rem)`},children:(0,p.jsx)(e,{})})],render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`long1`),a=(0,f.useMemo)(()=>[{label:t(`story.segmented_long_label`),value:`long1`},{label:t(`story.segmented_another_long`),value:`long2`},{label:t(`story.segmented_short`),value:`short`}],[t]);return(0,p.jsx)(u,{...e,options:a,value:n,onChange:r})}},S=[`Small`,`Medium`,`Large`,`TwoOptions`,`WithIcons`,`IconOnly`,`LongLabel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "min(600px, 100vw - 2rem)"
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "min(600px, 100vw - 2rem)"
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "min(600px, 100vw - 2rem)"
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "100%",
    maxWidth: "min(600px, 100vw - 2rem)"
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
}`,...x.parameters?.docs?.source}}}})))()}export{h as a,C as c,d as i,_ as n,v as o,g as r,y as s,b as t};