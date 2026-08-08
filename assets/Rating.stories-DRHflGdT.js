"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{pr as l,t as u}from"./src-BE5jBQ9L.js";import{a as d}from"./FieldTemplate-C0nkiaIz.js";var f=e({AllowHalf:()=>_,Controlled:()=>S,CustomCount:()=>v,Default:()=>g,Disabled:()=>b,ReadOnly:()=>x,Sizes:()=>y,__namedExportsOrder:()=>C,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Advanced Inputs/Rating`,component:l,parameters:{layout:`centered`},argTypes:{value:{control:`number`},count:{control:`number`},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},g={render:function(e){let{t}=i(c),n={star:e=>t(`components:rating.stars`,{count:e}),readonly:(e,n)=>t(`components:rating.readonly_label`,{count:e,max:n})};return(0,m.jsx)(d,{label:t(`story.rating_default`),children:(0,m.jsx)(l,{...e,labels:n})})},args:{defaultValue:3}},_={render:function(e){let{t}=i(c);return(0,m.jsx)(d,{label:t(`story.rating_half`),children:(0,m.jsx)(l,{...e})})},args:{defaultValue:2.5,allowHalf:!0}},v={render:function(e){let{t}=i(c);return(0,m.jsx)(d,{label:t(`story.rating_custom`),children:(0,m.jsx)(l,{...e})})},args:{defaultValue:7,count:10}},y={render:function(e){let{t}=i(c);return(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:(0,m.jsx)(d,{label:t(`story.rating_sizes`),children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,m.jsx)(l,{...e,size:`sm`,defaultValue:3}),(0,m.jsx)(l,{...e,size:`md`,defaultValue:3}),(0,m.jsx)(l,{...e,size:`lg`,defaultValue:3})]})})})}},b={render:function(e){let{t}=i(c);return(0,m.jsx)(d,{label:t(`story.rating_disabled`),children:(0,m.jsx)(l,{...e,disabled:!0})})},args:{defaultValue:4}},x={render:function(e){let{t}=i(c);return(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:(0,m.jsx)(d,{label:t(`story.rating_readonly`),children:(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,m.jsx)(l,{...e,value:5,readOnly:!0}),(0,m.jsx)(l,{...e,value:4,readOnly:!0}),(0,m.jsx)(l,{...e,value:3,readOnly:!0}),(0,m.jsx)(l,{...e,value:2,readOnly:!0}),(0,m.jsx)(l,{...e,value:1,readOnly:!0})]})})})}},S={render:function(e){let{t}=i(c),[n,r]=(0,p.useState)(e.value??3);(0,p.useEffect)(()=>{r(e.value??3)},[e.value]);let a=t=>{r(t),e.onChange?.(t)};return(0,m.jsx)(d,{label:t(`story.rating_controlled`),children:(0,m.jsx)(l,{...e,value:n,onChange:a})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    return <Label label={t("story.rating_default")}>
        <Rating {...args} labels={labels} />
      </Label>;
  },
  args: {
    defaultValue: 3
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_half")}>
        <Rating {...args} />
      </Label>;
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_custom")}>
        <Rating {...args} />
      </Label>;
  },
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Label label={t("story.rating_sizes")}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
            <Rating {...args} size="sm" defaultValue={3} />
            <Rating {...args} size="md" defaultValue={3} />
            <Rating {...args} size="lg" defaultValue={3} />
          </div>
        </Label>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.rating_disabled")}>
        <Rating {...args} disabled />
      </Label>;
  },
  args: {
    defaultValue: 4
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Label label={t("story.rating_readonly")}>
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
        </Label>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    return <Label label={t("story.rating_controlled")}>
        <Rating {...args} value={value} onChange={handleChange} />
      </Label>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`AllowHalf`,`CustomCount`,`Sizes`,`Disabled`,`ReadOnly`,`Controlled`]}));w();export{_ as AllowHalf,S as Controlled,v as CustomCount,g as Default,b as Disabled,x as ReadOnly,y as Sizes,C as __namedExportsOrder,h as default,w as n,f as t};