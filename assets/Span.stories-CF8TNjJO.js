"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,r as d,t as ee}from"./dist-DOTMK4FX.js";import{c as f,r as te,t as ne}from"./style-utils-C0B2hRHU.js";import{n as p,t as re}from"./Icon-TGLZuM2d.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{m=`_root_thknd_2`,h=`_xl_thknd_13`,g=`_lg_thknd_16`,_=`_md_thknd_19`,v=`_sm_thknd_22`,y=`_xs_thknd_25`,b=`_primary_thknd_28`,x=`_danger_thknd_31`,S=`_success_thknd_34`,C=`_warning_thknd_37`,w=`_info_thknd_40`,T=`_bold_thknd_43`,E=`_italic_thknd_46`,D=`_underline_thknd_52`,O=`_highlight_thknd_58`,k={root:m,xl:h,lg:g,md:_,sm:v,xs:y,primary:b,danger:x,success:S,warning:C,info:w,bold:T,italic:E,"line-through":`_line-through_thknd_49`,underline:D,highlight:O}})))()}var j,M,N,P;function F(){return(F=t((()=>{j=e(r(),1),M=e(l(),1),d(),A(),p(),f(),N=c(),P=j.forwardRef(({asChild:e=!1,size:t=`md`,content:n,color:r,weight:i=`normal`,fontStyle:a=`normal`,iconName:o=void 0,iconPosition:s=`left`,decoration:c=`none`,className:l,style:d,children:f,...p},m)=>{let h=e?f:n??f,g={xs:`xs`,sm:`sm`,md:`md`,lg:`lg`,xl:`lg`}[t]||`md`,_=o?(0,N.jsx)(re,{name:o,size:g}):null,v=o?(0,N.jsxs)(N.Fragment,{children:[s===`left`&&_,(0,N.jsx)(u,{children:e?h:(0,N.jsx)(`span`,{children:h})}),s===`right`&&_]}):(0,N.jsx)(u,{children:h}),y=typeof r==`string`&&[`danger`,`primary`,`danger`,`success`,`warning`,`info`].includes(r);return(0,N.jsx)(e?ee:`span`,{ref:m,className:(0,M.default)(`wim-span`,k.root,k[t],y&&k[r],i===`bold`&&k.bold,a===`italic`&&k.italic,c!==`none`&&k[c],l),style:{color:y?void 0:ne(r),fontWeight:te(i),...d},...p,children:v})}),P.displayName=`Span`,P.__docgenInfo={description:``,methods:[],displayName:`Span`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:`If true, the span will be rendered as its child, merging its props onto that child.`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]}],raw:`Extract<ComponentSize, "xs" | "sm" | "md" | "lg" | "xl">`},description:`Font size of the text.
@default "md"`,defaultValue:{value:`"md"`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`T | (string & {})`,elements:[{name:`union`,raw:`WimColorKey | WimColorToken`,elements:[{name:`WimColorKey`},{name:`union`,raw:"| `var(--wim-color-${WimColorKey})`\n| `var(--wim-${WimColorKey})`",elements:[{name:`literal`,value:"`var(--wim-color-${WimColorKey})`"},{name:`literal`,value:"`var(--wim-${WimColorKey})`"}]}]},{name:`unknown`}]},description:`Text color. Accepts a design token color name or any CSS color value.`},weight:{required:!1,tsType:{name:`WimFontWeightKey`},description:`Font weight.
@default "normal"`,defaultValue:{value:`"normal"`,computed:!1}},fontStyle:{required:!1,tsType:{name:`union`,raw:`"normal" | "italic"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"italic"`}]},description:`Font style.
@default "normal"`,defaultValue:{value:`"normal"`,computed:!1}},decoration:{required:!1,tsType:{name:`union`,raw:`"line-through" | "underline" | "highlight" | "none"`,elements:[{name:`literal`,value:`"line-through"`},{name:`literal`,value:`"underline"`},{name:`literal`,value:`"highlight"`},{name:`literal`,value:`"none"`}]},description:`Visual decoration applied to the text.
@default "none"`,defaultValue:{value:`"none"`,computed:!1}},content:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content of the span. Alternative to children.`},iconName:{required:!1,tsType:{name:`ReactComponentProps["name"]`,raw:`React.ComponentProps<typeof Icon>["name"]`},description:`Name of the icon displayed alongside the text.`,defaultValue:{value:`undefined`,computed:!0}},iconPosition:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Position of the icon relative to the text.
@default "left"`,defaultValue:{value:`"left"`,computed:!1}}},composes:[`Omit`]}})))()}var I=n({AsChild:()=>Z,BoldSpan:()=>J,ExLargeSpan:()=>B,ExSmallSpan:()=>W,HighlightSpan:()=>X,IconOnlySpan:()=>q,LargeSpan:()=>V,LargeSpanWithIconOnRight:()=>K,MediumSpan:()=>H,SmallSpan:()=>U,SmallSpanWithIcon:()=>G,StrikethroughSpan:()=>Y,__namedExportsOrder:()=>Q,default:()=>z}),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{a(),o(),F(),L=c(),{fn:R}=__STORYBOOK_MODULE_TEST__,z={title:`Components/Typography & Icons/Span`,component:P,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:[`black`,`deepgray`,`gray`,`lightgray`,`white`,`danger`,`primary`,`success`,`warning`,`info`]}},args:{onClick:R()}},B={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`xl`,weight:`normal`,color:`deepgray`,fontStyle:`normal`}},V={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`lg`,weight:`normal`,color:`deepgray`,fontStyle:`normal`}},H={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`md`,weight:`normal`,color:`deepgray`,fontStyle:`normal`}},U={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`sm`,weight:`normal`,color:`deepgray`,fontStyle:`normal`}},W={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`xs`,weight:`normal`,color:`deepgray`,fontStyle:`normal`}},G={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`sm`,weight:`normal`,color:`deepgray`,fontStyle:`normal`,iconName:`SquareIcon`,iconPosition:`left`}},K={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`lg`,weight:`bold`,fontStyle:`italic`,iconName:`CircleIcon`,iconPosition:`right`}},q={args:{size:`md`,content:``,iconName:`CircleIcon`}},J={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`md`,weight:`bold`}},Y={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{size:`md`,decoration:`line-through`}},X={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,content:t(`story.span_medium`)})},args:{decoration:`highlight`}},Z={render:e=>{let{t}=i(s);return(0,L.jsx)(P,{...e,asChild:!0,children:(0,L.jsx)(`a`,{href:`/`,style:{color:`var(--wim-color-text-accent)`,fontWeight:`bold`},children:t(`story.span_medium`)})})},args:{}},Q=[`ExLargeSpan`,`LargeSpan`,`MediumSpan`,`SmallSpan`,`ExSmallSpan`,`SmallSpanWithIcon`,`LargeSpanWithIconOnRight`,`IconOnlySpan`,`BoldSpan`,`StrikethroughSpan`,`HighlightSpan`,`AsChild`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xl",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xs",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: \`normal\`,
    color: \`deepgray\`,
    fontStyle: \`normal\`,
    iconName: "SquareIcon",
    //アイコン名を指定
    iconPosition: "left" //アイコンの位置を指定
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: "bold",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    content: "",
    // テキストなし
    iconName: "CircleIcon"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: "bold"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    decoration: "line-through"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    decoration: "highlight"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Span>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} asChild>
        <a href="/" style={{
        color: "var(--wim-color-text-accent)",
        fontWeight: "bold"
      }}>
          {t('story.span_medium')}
        </a>
      </Span>;
  },
  args: {}
}`,...Z.parameters?.docs?.source}}}})))()}export{U as a,Y as c,H as i,$ as l,X as n,G as o,V as r,I as s,B as t};