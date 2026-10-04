"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Fieldset-BTSOmOYa.js";import{n as d,t as f}from"./Rating-CLzTnUOC.js";import{n as p,t as m}from"./Legend-Ddwou_K2.js";var h=n({AllowHalf:()=>b,Controlled:()=>T,CustomCount:()=>x,Default:()=>y,Disabled:()=>C,InWideField:()=>E,ReadOnly:()=>w,Sizes:()=>S,__namedExportsOrder:()=>D,default:()=>v}),g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{g=e(r(),1),a(),o(),l(),p(),d(),_=c(),v={title:`Components/Advanced Inputs/Rating`,component:f,parameters:{layout:`centered`},argTypes:{value:{control:`number`},count:{control:`number`},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},y={render:function(e){let{t}=i(s),n={star:e=>t(`components:rating.stars`,{count:e}),readonly:(e,n)=>t(`components:rating.readonly_label`,{count:e,max:n})};return(0,_.jsx)(f,{...e,label:t(`story.rating_default`),labels:n})},args:{defaultValue:3}},b={render:function(e){let{t}=i(s);return(0,_.jsx)(f,{...e,label:t(`story.rating_half`)})},args:{defaultValue:2.5,allowHalf:!0}},x={render:function(e){let{t}=i(s);return(0,_.jsx)(f,{...e,label:t(`story.rating_custom`)})},args:{defaultValue:7,count:10}},S={render:function(e){let{t}=i(s);return(0,_.jsxs)(u,{variant:`plain`,children:[(0,_.jsx)(m,{label:t(`story.rating_sizes`)}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,_.jsx)(f,{...e,size:`sm`,defaultValue:3}),(0,_.jsx)(f,{...e,size:`md`,defaultValue:3}),(0,_.jsx)(f,{...e,size:`lg`,defaultValue:3})]})]})}},C={render:function(e){let{t}=i(s);return(0,_.jsx)(f,{...e,label:t(`story.rating_disabled`),disabled:!0})},args:{defaultValue:4}},w={render:function(e){let{t}=i(s);return(0,_.jsxs)(u,{variant:`plain`,children:[(0,_.jsx)(m,{label:t(`story.rating_readonly`)}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,_.jsx)(f,{...e,value:5,readOnly:!0}),(0,_.jsx)(f,{...e,value:4,readOnly:!0}),(0,_.jsx)(f,{...e,value:3,readOnly:!0}),(0,_.jsx)(f,{...e,value:2,readOnly:!0}),(0,_.jsx)(f,{...e,value:1,readOnly:!0})]})]})}},T={render:function(e){let{t}=i(s),[n,r]=(0,g.useState)(e.value??3);(0,g.useEffect)(()=>{r(e.value??3)},[e.value]);let a=t=>{r(t),e.onChange?.(t)};return(0,_.jsx)(f,{...e,label:t(`story.rating_controlled`),value:n,onChange:a})}},E={parameters:{layout:`fullscreen`},render:function(e){let{t}=i(s);return(0,_.jsx)(`div`,{style:{padding:`var(--wim-spacing-lg)`,width:`100%`},children:(0,_.jsx)(f,{...e,label:t(`story.rating_wide_field`)})})}},D=[`Default`,`AllowHalf`,`CustomCount`,`Sizes`,`Disabled`,`ReadOnly`,`Controlled`,`InWideField`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Rating {...args} label={t("story.rating_disabled")} disabled />;
  },
  args: {
    defaultValue: 4
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:'T125 と同じ機構（同族は `Rating` のこの 1 件だけ）。`FieldTemplate` の\n`.content` に stretch されて根が親いっぱいに伸びるため、星の右側に\n押せる空白が広がる。他のストーリーは `layout: "centered"` なので出ない。',...E.parameters?.docs?.description}}}})))()}export{w as a,h as i,y as n,S as o,C as r,O as s,b as t};