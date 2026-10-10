"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,r as d,t as f}from"./dist-DOTMK4FX.js";import{n as p,t as m}from"./useMergedRef-B2nPi4fY.js";import{n as h,t as g}from"./Icon-TGLZuM2d.js";import{n as ee,t as te}from"./useIndicator-D6nA27Rt.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{_=`_root_1uh70_30`,v=`_list_1uh70_40`,y=`_start_1uh70_51`,b=`_center_1uh70_54`,x=`_end_1uh70_57`,S=`_justify_1uh70_60`,C=`_item_1uh70_63`,w=`_sm_1uh70_70`,T=`_md_1uh70_75`,E=`_lg_1uh70_80`,D=`_disabled_1uh70_116`,O=`_icon_1uh70_144`,k=`_underline_1uh70_151`,A=`_slider_1uh70_154`,j=`_ready_1uh70_167`,M=`_active_1uh70_183`,N=`_pill_1uh70_190`,P=`_contained_1uh70_230`,F={root:_,list:v,start:y,center:b,end:x,justify:S,item:C,sm:w,md:T,lg:E,disabled:D,icon:O,underline:k,slider:A,ready:j,active:M,pill:N,contained:P}})))()}var L,R,z,B,V,H;function U(){return(U=t((()=>{L=e(r(),1),R=e(l(),1),d(),te(),m(),I(),z=c(),B=L.forwardRef(({className:e,children:t,variant:n=`underline`,align:r=`start`,size:i=`md`,...a},o)=>{let s=(0,L.useRef)(null),{containerRef:c,sliderStyle:l,isReady:u}=ee({activeSelector:`.${F.active}`,variant:n}),d=p(s,o,e=>{c&&(c.current=e?.querySelector(`.${F.list}`)||null)}),f=e=>{if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))return;e.preventDefault();let t=Array.from(e.currentTarget.querySelectorAll(`[role="tab"]:not([aria-disabled="true"])`));if(t.length===0)return;let n=t.indexOf(document.activeElement);if(n===-1)return;let r;r=e.key===`ArrowRight`||e.key===`ArrowDown`?(n+1)%t.length:e.key===`ArrowLeft`||e.key===`ArrowUp`?(n-1+t.length)%t.length:e.key===`Home`?0:t.length-1;let i=t[r];i.focus(),i.click()};return(0,z.jsx)(`nav`,{ref:d,className:(0,R.default)(`wim-tab-navigation`,F.root,F[n],F[r],F[i],u&&F.ready,e),...a,children:(0,z.jsxs)(`div`,{className:F.list,role:`tablist`,tabIndex:0,onKeyDown:f,children:[(0,z.jsx)(`div`,{className:F.slider,style:l,"aria-hidden":`true`}),t]})})}),B.displayName=`TabNavigation`,V=L.forwardRef(({asChild:e=!1,className:t,children:n,active:r,disabled:i,icon:a,href:o,onClick:s,...c},l)=>(0,z.jsxs)(e?f:`a`,{ref:l,href:e?void 0:o,onClick:e=>{if(i){e.preventDefault();return}s&&(e.preventDefault(),s(e))},className:(0,R.default)(F.item,r&&F.active,i&&F.disabled,t),role:`tab`,"aria-selected":r,"aria-disabled":i,tabIndex:r&&!i?0:-1,...c,children:[a&&(0,z.jsx)(`span`,{className:F.icon,children:a}),(0,z.jsx)(u,{children:n})]})),V.displayName=`TabNavigation.Item`,H=B,H.Item=V,V.__docgenInfo={description:``,methods:[],displayName:`TabNavigation.Item`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`If true, the item will be rendered as its child, merging its props onto that child.`,defaultValue:{value:`false`,computed:!1}},active:{required:!1,tsType:{name:`boolean`},description:`Active state`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Icon element`}}},B.__docgenInfo={description:``,methods:[],displayName:`TabNavigation`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"underline" | "pill" | "contained"`,elements:[{name:`literal`,value:`"underline"`},{name:`literal`,value:`"pill"`},{name:`literal`,value:`"contained"`}]},description:`Visual style of the tabs`,defaultValue:{value:`"underline"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "justify"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"justify"`}]},description:`Alignment of the tabs`,defaultValue:{value:`"start"`,computed:!1}},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size of the tabs`,defaultValue:{value:`"md"`,computed:!1}}}}})))()}var ne=n({Contained:()=>X,Default:()=>q,Pills:()=>Y,Sizes:()=>J,WithIcons:()=>Z,__namedExportsOrder:()=>Q,default:()=>K}),W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{W=e(r(),1),U(),a(),o(),h(),G=c(),K={title:`Components/Navigation Elements/TabNavigation`,component:H,parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`contained`]},align:{control:`select`,options:[`start`,`center`,`end`,`justify`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},q={render:e=>{let{t}=i(s),[n,r]=W.useState(`overview`);return(0,G.jsxs)(H,{...e,children:[(0,G.jsx)(H.Item,{active:n===`overview`,onClick:()=>r(`overview`),href:`#`,children:t(`story.tabnav_overview`)}),(0,G.jsx)(H.Item,{active:n===`integrations`,onClick:()=>r(`integrations`),href:`#`,children:t(`story.tabnav_integrations`)}),(0,G.jsx)(H.Item,{active:n===`activity`,onClick:()=>r(`activity`),href:`#`,children:t(`story.tabnav_activity`)}),(0,G.jsx)(H.Item,{active:n===`settings`,onClick:()=>r(`settings`),href:`#`,children:t(`story.tabnav_settings`)})]})}},J={render:function(e){let{t}=i(s);return(0,G.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xl)`},children:[`sm`,`md`,`lg`].map(n=>(0,G.jsxs)(H,{...e,size:n,"aria-label":t(`story.tabnav_size_label`,{size:n}),children:[(0,G.jsx)(H.Item,{active:!0,href:`#`,children:t(`story.tabnav_overview`)}),(0,G.jsx)(H.Item,{href:`#`,children:t(`story.tabnav_integrations`)}),(0,G.jsx)(H.Item,{href:`#`,children:t(`story.tabnav_activity`)})]},n))})}},Y={render:e=>{let{t}=i(s),[n,r]=W.useState(`all`);return(0,G.jsxs)(H,{...e,variant:`pill`,children:[(0,G.jsx)(H.Item,{active:n===`all`,onClick:()=>r(`all`),children:t(`story.tabnav_all`)}),(0,G.jsx)(H.Item,{active:n===`unread`,onClick:()=>r(`unread`),children:t(`story.tabnav_unread`)}),(0,G.jsx)(H.Item,{active:n===`archived`,onClick:()=>r(`archived`),children:t(`story.tabnav_archived`)})]})}},X={render:e=>{let{t}=i(s),[n,r]=W.useState(`daily`);return(0,G.jsxs)(H,{...e,variant:`contained`,children:[(0,G.jsx)(H.Item,{active:n===`daily`,onClick:()=>r(`daily`),children:t(`story.tabnav_daily`)}),(0,G.jsx)(H.Item,{active:n===`weekly`,onClick:()=>r(`weekly`),children:t(`story.tabnav_weekly`)}),(0,G.jsx)(H.Item,{active:n===`monthly`,onClick:()=>r(`monthly`),children:t(`story.tabnav_monthly`)})]})}},Z={render:e=>{let{t}=i(s),[n,r]=W.useState(`code`);return(0,G.jsxs)(H,{...e,children:[(0,G.jsx)(H.Item,{active:n===`code`,onClick:()=>r(`code`),icon:(0,G.jsx)(g,{name:`ChevronRightIcon`}),children:t(`story.tabnav_code`)}),(0,G.jsx)(H.Item,{active:n===`issues`,onClick:()=>r(`issues`),icon:(0,G.jsx)(g,{name:`CircleIcon`}),children:t(`story.tabnav_issues`)}),(0,G.jsx)(H.Item,{active:n===`pulls`,onClick:()=>r(`pulls`),icon:(0,G.jsx)(g,{name:`CopyIcon`}),children:t(`story.tabnav_pull_requests`)})]})}},Q=[`Default`,`Sizes`,`Pills`,`Contained`,`WithIcons`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("overview");
    return <TabNavigation {...args}>
        <TabNavigation.Item active={active === "overview"} onClick={() => setActive("overview")} href="#">
          {t("story.tabnav_overview")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "integrations"} onClick={() => setActive("integrations")} href="#">
          {t("story.tabnav_integrations")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "activity"} onClick={() => setActive("activity")} href="#">
          {t("story.tabnav_activity")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "settings"} onClick={() => setActive("settings")} href="#">
          {t("story.tabnav_settings")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-xl)"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <TabNavigation key={size} {...args} size={size} aria-label={t("story.tabnav_size_label", {
        size
      })}>
            <TabNavigation.Item active href="#">{t("story.tabnav_overview")}</TabNavigation.Item>
            <TabNavigation.Item href="#">{t("story.tabnav_integrations")}</TabNavigation.Item>
            <TabNavigation.Item href="#">{t("story.tabnav_activity")}</TabNavigation.Item>
          </TabNavigation>)}
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("all");
    return <TabNavigation {...args} variant="pill">
        <TabNavigation.Item active={active === "all"} onClick={() => setActive("all")}>
          {t("story.tabnav_all")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "unread"} onClick={() => setActive("unread")}>
          {t("story.tabnav_unread")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "archived"} onClick={() => setActive("archived")}>
          {t("story.tabnav_archived")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("daily");
    return <TabNavigation {...args} variant="contained">
        <TabNavigation.Item active={active === "daily"} onClick={() => setActive("daily")}>
          {t("story.tabnav_daily")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "weekly"} onClick={() => setActive("weekly")}>
          {t("story.tabnav_weekly")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "monthly"} onClick={() => setActive("monthly")}>
          {t("story.tabnav_monthly")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("code");
    return <TabNavigation {...args}>
        <TabNavigation.Item active={active === "code"} onClick={() => setActive("code")} icon={<Icon name="ChevronRightIcon" />}>
          {t("story.tabnav_code")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "issues"} onClick={() => setActive("issues")} icon={<Icon name="CircleIcon" />}>
          {t("story.tabnav_issues")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "pulls"} onClick={() => setActive("pulls")} icon={<Icon name="CopyIcon" />}>
          {t("story.tabnav_pull_requests")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{ne as a,J as i,q as n,Z as o,Y as r,$ as s,X as t};