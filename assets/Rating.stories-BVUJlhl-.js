"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{Ur as l,h as u,mr as d,t as f}from"./src-Ssuy8lr7.js";var p=e({AllowHalf:()=>v,Controlled:()=>C,CustomCount:()=>y,Default:()=>_,Disabled:()=>x,InWideField:()=>w,ReadOnly:()=>S,Sizes:()=>b,__namedExportsOrder:()=>T,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{m=n(r(),1),s(),a(),f(),h=o(),g={title:`Components/Advanced Inputs/Rating`,component:d,parameters:{layout:`centered`},argTypes:{value:{control:`number`},count:{control:`number`},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},_={render:function(e){let{t}=i(c),n={star:e=>t(`components:rating.stars`,{count:e}),readonly:(e,n)=>t(`components:rating.readonly_label`,{count:e,max:n})};return(0,h.jsx)(d,{...e,label:t(`story.rating_default`),labels:n})},args:{defaultValue:3}},v={render:function(e){let{t}=i(c);return(0,h.jsx)(d,{...e,label:t(`story.rating_half`)})},args:{defaultValue:2.5,allowHalf:!0}},y={render:function(e){let{t}=i(c);return(0,h.jsx)(d,{...e,label:t(`story.rating_custom`)})},args:{defaultValue:7,count:10}},b={render:function(e){let{t}=i(c);return(0,h.jsxs)(l,{variant:`plain`,children:[(0,h.jsx)(u,{label:t(`story.rating_sizes`)}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,h.jsx)(d,{...e,size:`sm`,defaultValue:3}),(0,h.jsx)(d,{...e,size:`md`,defaultValue:3}),(0,h.jsx)(d,{...e,size:`lg`,defaultValue:3})]})]})}},x={render:function(e){let{t}=i(c);return(0,h.jsx)(d,{...e,label:t(`story.rating_disabled`),disabled:!0})},args:{defaultValue:4}},S={render:function(e){let{t}=i(c);return(0,h.jsxs)(l,{variant:`plain`,children:[(0,h.jsx)(u,{label:t(`story.rating_readonly`)}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(d,{...e,value:5,readOnly:!0}),(0,h.jsx)(d,{...e,value:4,readOnly:!0}),(0,h.jsx)(d,{...e,value:3,readOnly:!0}),(0,h.jsx)(d,{...e,value:2,readOnly:!0}),(0,h.jsx)(d,{...e,value:1,readOnly:!0})]})]})}},C={render:function(e){let{t}=i(c),[n,r]=(0,m.useState)(e.value??3);(0,m.useEffect)(()=>{r(e.value??3)},[e.value]);let a=t=>{r(t),e.onChange?.(t)};return(0,h.jsx)(d,{...e,label:t(`story.rating_controlled`),value:n,onChange:a})}},w={parameters:{layout:`fullscreen`},render:function(e){let{t}=i(c);return(0,h.jsx)(`div`,{style:{padding:`var(--wim-spacing-lg)`,width:`100%`},children:(0,h.jsx)(d,{...e,label:t(`story.rating_wide_field`)})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const labels = {
      star: (count: number) => t("components:rating.stars", {
        count
      }),
      readonly: (count: number, max: number) => t("components:rating.readonly_label", {
        count,
        max
      })
    };
    return <Rating {...args} label={t("story.rating_default")} labels={labels} />;
  },
  args: {
    defaultValue: 3
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Rating {...args} label={t("story.rating_half")} />;
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Rating {...args} label={t("story.rating_custom")} />;
  },
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset variant="plain">
        <Legend label={t("story.rating_sizes")} />
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
          <Rating {...args} size="sm" defaultValue={3} />
          <Rating {...args} size="md" defaultValue={3} />
          <Rating {...args} size="lg" defaultValue={3} />
        </div>
      </Fieldset>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Rating {...args} label={t("story.rating_disabled")} disabled />;
  },
  args: {
    defaultValue: 4
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset variant="plain">
        <Legend label={t("story.rating_readonly")} />
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Rating {...args} value={5} readOnly />
          <Rating {...args} value={4} readOnly />
          <Rating {...args} value={3} readOnly />
          <Rating {...args} value={2} readOnly />
          <Rating {...args} value={1} readOnly />
        </div>
      </Fieldset>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState(args.value ?? 3);
    useEffect(() => {
      setValue(args.value ?? 3);
    }, [args.value]);
    const handleChange = (newVal: number) => {
      setValue(newVal);
      args.onChange?.(newVal);
    };
    return <Rating {...args} label={t("story.rating_controlled")} value={value} onChange={handleChange} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "var(--wim-spacing-lg)",
      width: "100%"
    }}>
        <Rating {...args} label={t("story.rating_wide_field")} />
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:'T125 と同じ機構（同族は `Rating` のこの 1 件だけ）。`FieldTemplate` の\n`.content` に stretch されて根が親いっぱいに伸びるため、星の右側に\n押せる空白が広がる。他のストーリーは `layout: "centered"` なので出ない。',...w.parameters?.docs?.description}}},T=[`Default`,`AllowHalf`,`CustomCount`,`Sizes`,`Disabled`,`ReadOnly`,`Controlled`,`InWideField`]}));E();export{v as AllowHalf,C as Controlled,y as CustomCount,_ as Default,x as Disabled,w as InWideField,S as ReadOnly,b as Sizes,T as __namedExportsOrder,g as default,E as n,p as t};