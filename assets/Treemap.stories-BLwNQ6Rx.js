"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Treemap-CZYxhi8Z.js";var l=t({Default:()=>p,NarrowTiles:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/Treemap`,component:c},f=[{name:`Category A`,value:400},{name:`Category B`,value:300},{name:`Category C`,value:300},{name:`Category D`,value:200},{name:`Category E`,value:278},{name:`Category F`,value:189}],p={args:{data:f,dataKey:`value`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_category_distribution`)})}},m={args:{dataKey:`kg`,data:[{name:`Ethiopia Yirgacheffe`,kg:1240},{name:`Colombia Huila`,kg:860},{name:`Guatemala Antigua`,kg:515},{name:`Rwanda`,kg:288},{name:`Brazil`,kg:174}]},render:function(e){let{t}=n(a);return(0,u.jsx)(`div`,{style:{width:`min(420px, 100%)`},children:(0,u.jsx)(c,{...e,title:t(`story.chart_narrow_tiles`)})})}},h=[`Default`,`NarrowTiles`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    dataKey: "value"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Treemap {...args} title={t("story.chart_category_distribution")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataKey: "kg",
    data: [{
      name: "Ethiopia Yirgacheffe",
      kg: 1240
    }, {
      name: "Colombia Huila",
      kg: 860
    }, {
      name: "Guatemala Antigua",
      kg: 515
    }, {
      name: "Rwanda",
      kg: 288
    }, {
      name: "Brazil",
      kg: 174
    }]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "min(420px, 100%)"
    }}>
        <Treemap {...args} title={t("story.chart_narrow_tiles")} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`T149: 名前が枠に入らないタイルを含む形。**この形のストーリーが無かったので、
「小さいタイルが黙って名前を失う」欠陥が VRT にも a11y にも映らなかった。**

\`Treemap\` が凡例を持たなくてよいのは「タイルが自分で名乗る」からなので
（\`check:chart-palette\` の免除条件・T152 案①）、名前が消えるのは
免除の根拠が消えるのと同じ。入らないときは**省略して見せる**のが正しく、
ここはその境目を撮るための形。`,...m.parameters?.docs?.description}}}})))()}export{g as n,l as t};