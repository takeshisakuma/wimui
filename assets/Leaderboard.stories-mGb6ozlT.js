"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{u=`_root_9dy8y_3`,d=`_sm_9dy8y_13`,f=`_item_9dy8y_13`,p=`_rank_9dy8y_17`,m=`_avatar_9dy8y_17`,h=`_lg_9dy8y_21`,g=`_highlight_9dy8y_39`,_=`_rank1_9dy8y_43`,v=`_rank2_9dy8y_55`,y=`_rank3_9dy8y_59`,b=`_name_9dy8y_84`,x=`_score_9dy8y_92`,S=`_scoreValue_9dy8y_98`,C=`_unit_9dy8y_103`,w={root:u,sm:d,item:f,rank:p,avatar:m,lg:h,highlight:g,rank1:_,rank2:v,rank3:y,name:b,score:x,scoreValue:S,unit:C}})))()}var E,D,O,k;function A(){return(A=t((()=>{E=e(r(),1),D=e(l(),1),T(),O=c(),k=E.forwardRef(({entries:e,unit:t,size:n=`md`,className:r,...i},a)=>(0,O.jsx)(`ol`,{ref:a,className:(0,D.default)(`wim-leaderboard`,w.root,w[n],r),...i,children:e.map((e,n)=>{let r=n+1;return(0,O.jsxs)(`li`,{"aria-current":e.highlight?!0:void 0,className:(0,D.default)(w.item,r<=3&&w[`rank${r}`],e.highlight&&w.highlight),children:[(0,O.jsx)(`span`,{className:w.rank,"aria-hidden":`true`,children:r}),e.avatar&&(0,O.jsx)(`img`,{src:e.avatar,alt:``,className:w.avatar,"aria-hidden":`true`}),(0,O.jsx)(`span`,{className:w.name,children:e.name}),(0,O.jsxs)(`span`,{className:w.score,children:[(0,O.jsx)(`span`,{className:w.scoreValue,children:e.score}),t&&(0,O.jsx)(`span`,{className:w.unit,children:t})]})]},e.id)})})),k.displayName=`Leaderboard`,k.__docgenInfo={description:`Component that displays a scored ranking. The top 3 entries get medal colors.`,methods:[],displayName:`Leaderboard`,props:{entries:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  score: number | string;
  avatar?: string;
  highlight?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`score`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}},{key:`avatar`,value:{name:`string`,required:!1}},{key:`highlight`,value:{name:`boolean`,required:!1}}]}}],raw:`LeaderboardEntry[]`},description:`List of ranking entries`},unit:{required:!1,tsType:{name:`string`},description:`Label for the score unit`},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size`,defaultValue:{value:`"md"`,computed:!1}}}}})))()}var j=n({Default:()=>F,Large:()=>z,Small:()=>R,WithHighlight:()=>L,WithUnit:()=>I,__namedExportsOrder:()=>B,default:()=>P});function M(){let{t:e}=i(s);return[{id:`1`,name:e(`story.lb_alice`),score:2450},{id:`2`,name:e(`story.lb_bob`),score:2100},{id:`3`,name:e(`story.lb_charlie`),score:1900},{id:`4`,name:e(`story.lb_diana`),score:1650},{id:`5`,name:e(`story.lb_eve`),score:1400}]}var N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{a(),o(),A(),N=c(),P={title:`Components/Data Indicators/Leaderboard`,component:k,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},F={render:function(e){let t=M();return(0,N.jsx)(k,{...e,entries:t,size:`md`})}},I={render:function(e){let{t}=i(s),n=M();return(0,N.jsx)(k,{...e,entries:n,unit:t(`story.lb_unit_pts`),size:`md`})}},L={render:function(e){let{t}=i(s),n=[{id:`1`,name:t(`story.lb_alice`),score:2450},{id:`2`,name:t(`story.lb_bob`),score:2100},{id:`3`,name:t(`story.lb_charlie`),score:1900},{id:`4`,name:t(`story.lb_diana`),score:1650,highlight:!0},{id:`5`,name:t(`story.lb_eve`),score:1400}];return(0,N.jsx)(k,{...e,entries:n,unit:t(`story.lb_unit_pts`),size:`md`})}},R={render:function(e){let{t}=i(s),n=M();return(0,N.jsx)(k,{...e,entries:n,unit:t(`story.lb_unit_pts`),size:`sm`})}},z={render:function(e){let{t}=i(s),n=M();return(0,N.jsx)(k,{...e,entries:n,unit:t(`story.lb_unit_pts`),size:`lg`})}},B=[`Default`,`WithUnit`,`WithHighlight`,`Small`,`Large`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} size="md" />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries: LeaderboardEntry[] = [{
      id: "1",
      name: t("story.lb_alice"),
      score: 2450
    }, {
      id: "2",
      name: t("story.lb_bob"),
      score: 2100
    }, {
      id: "3",
      name: t("story.lb_charlie"),
      score: 1900
    }, {
      id: "4",
      name: t("story.lb_diana"),
      score: 1650,
      highlight: true
    }, {
      id: "5",
      name: t("story.lb_eve"),
      score: 1400
    }];
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="sm" />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="lg" />;
  }
}`,...z.parameters?.docs?.source}}}})))()}export{L as a,R as i,z as n,I as o,j as r,V as s,F as t};