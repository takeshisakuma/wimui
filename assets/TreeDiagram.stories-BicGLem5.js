"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Text-1X1ZsZfu.js";import{n as d,t as f}from"./Avatar-BfxkKreA.js";import{n as p,t as m}from"./TreeDiagram-DxYWkx8r.js";var h=n({Collapsed:()=>S,Default:()=>b,Horizontal:()=>x,Selectable:()=>C,WithAvatars:()=>w,__namedExportsOrder:()=>T,default:()=>v}),g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{g=e(r(),1),a(),o(),d(),l(),p(),_=c(),v={title:`Components/Visualization/TreeDiagram`,component:m,parameters:{layout:`padded`},argTypes:{orientation:{control:`radio`,options:[`vertical`,`horizontal`]}}},y=(e=!1)=>{let{t}=i(s),n=(n,r,i,a)=>({value:n,label:r,description:t(`story.treediagram_role_${i}`),avatar:e?(0,_.jsx)(f,{size:`sm`,initials:r.split(` `).map(e=>e[0]).join(``)}):void 0,children:a});return[n(`mariana`,`Mariana Costa`,`ceo`,[n(`kenji`,`Kenji Watanabe`,`cto`,[n(`amara`,`Amara Okafor`,`backend`),n(`liam`,`Liam O'Connor`,`frontend`),n(`priya`,`Priya Raman`,`backend`)]),n(`sofia`,`Sofia Lindqvist`,`design`),n(`tomas`,`Tomás Herrera`,`operations`,[n(`nadia`,`Nadia Haddad`,`support`),n(`yuki`,`Yuki Sato`,`finance`)])])]},b={render:function(e){let t=y();return(0,_.jsx)(m,{...e,nodes:t})}},x={render:function(e){let t=y();return(0,_.jsx)(m,{...e,nodes:t})},args:{orientation:`horizontal`}},S={render:function(e){let t=y();return(0,_.jsx)(m,{...e,nodes:t,defaultExpandedValues:[`mariana`,`tomas`]})}},C={render:function(e){let{t}=i(s),n=y(),[r,a]=(0,g.useState)(`kenji`),o=e=>e.reduce((e,t)=>e??(t.value===r?t:o(t.children??[])),void 0),c=o(n);return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[(0,_.jsx)(m,{...e,nodes:n,selectedValue:r,onSelect:a}),(0,_.jsx)(u,{size:`sm`,color:`text-tertiary`,"aria-live":`polite`,children:t(`story.treediagram_selected`,{name:c?.label??``,role:c?.description??``})})]})}},w={render:function(e){let t=y(!0);return(0,_.jsx)(m,{...e,nodes:t,nodeWidth:220})}},T=[`Default`,`Horizontal`,`Collapsed`,`Selectable`,`WithAvatars`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} />;
  },
  args: {
    orientation: "horizontal"
  }
}`,...x.parameters?.docs?.source},description:{story:`左から右へ。深い木や、横幅の狭い置き場に向く。`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const nodes = useOrg();
    return <TreeDiagram {...args} nodes={nodes} defaultExpandedValues={["mariana", "tomas"]} />;
  }
}`,...S.parameters?.docs?.source},description:{story:`開いておく部分木を選ぶ。畳んだノードは、隠れている人数をボタンに出す。`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const nodes = useOrg();
    const [selected, setSelected] = useState<string | null>("kenji");
    const find = (list: TreeDiagramNode[]): TreeDiagramNode | undefined => list.reduce<TreeDiagramNode | undefined>((hit, n) => hit ?? (n.value === selected ? n : find(n.children ?? [])), undefined);
    const chosen = find(nodes);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-md)"
    }}>
        <TreeDiagram {...args} nodes={nodes} selectedValue={selected} onSelect={setSelected} />
        <Text size="sm" color="text-tertiary" aria-live="polite">
          {t("story.treediagram_selected", {
          name: chosen?.label ?? "",
          role: chosen?.description ?? ""
        })}
        </Text>
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"`onSelect` を渡すと選べる（渡さなければ読み取り専用）。",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const nodes = useOrg(true);
    return <TreeDiagram {...args} nodes={nodes} nodeWidth={220} />;
  }
}`,...w.parameters?.docs?.source}}}})))()}export{h as a,C as i,b as n,w as o,x as r,E as s,S as t};