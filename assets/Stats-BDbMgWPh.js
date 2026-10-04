"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,bn as a,gn as o,vn as s}from"./iframe-Bq9jGRMU.js";import{t as c}from"./classnames-D09xBJOL.js";import{n as l,t as u}from"./Icon-B_89lpXW.js";import{n as d,t as f}from"./Card-BX8yw3HV.js";var p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{p=`_root_l22hh_3`,m=`_inner_l22hh_6`,h=`_label_l22hh_12`,g=`_value_l22hh_18`,_=`_description_l22hh_24`,v=`_trend_l22hh_29`,y=`_success_l22hh_50`,b=`_danger_l22hh_54`,x=`_neutral_l22hh_58`,S={root:p,inner:m,label:h,value:g,description:_,trend:v,success:y,danger:b,neutral:x}})))()}var w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{n(),w=e(c(),1),d(),l(),i(),C(),T=r(),E={up:o,down:a,neutral:s},D=({variant:e=`outline`,className:t,children:n,...r})=>(0,T.jsx)(f,{variant:e,className:(0,w.default)(`wim-stats`,S.root,t),padding:`none`,...r,children:(0,T.jsx)(`div`,{className:S.inner,children:n})}),O=({className:e,children:t,...n})=>(0,T.jsx)(`div`,{className:(0,w.default)(S.label,e),...n,children:t}),k=({className:e,children:t,...n})=>(0,T.jsx)(`div`,{className:(0,w.default)(S.value,e),...n,children:t}),A=({className:e,children:t,...n})=>(0,T.jsx)(`div`,{className:(0,w.default)(S.description,e),...n,children:t}),j={up:`success`,down:`danger`,neutral:`neutral`},M=({direction:e=`up`,intent:t=j[e],className:n,children:r,...i})=>(0,T.jsxs)(`div`,{className:(0,w.default)(S.trend,S[t],n),"data-direction":e,"data-intent":t,...i,children:[(0,T.jsx)(`span`,{"aria-hidden":`true`,children:(0,T.jsx)(u,{component:E[e],size:`sm`})}),(0,T.jsx)(`span`,{children:r})]}),D.displayName=`Stats`,O.displayName=`Stats.Label`,k.displayName=`Stats.Value`,A.displayName=`Stats.Description`,M.displayName=`Stats.Trend`,D.Label=O,D.Value=k,D.Description=A,D.Trend=M,D.__docgenInfo={description:"`Stats` is a component for displaying statistics and metrics.",methods:[{name:`Label`,docblock:null,modifiers:[`static`],params:[{name:`{
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"div">`,elements:[{name:`literal`,value:`"div"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null},{name:`Value`,docblock:null,modifiers:[`static`],params:[{name:`{
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"div">`,elements:[{name:`literal`,value:`"div"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null},{name:`Description`,docblock:null,modifiers:[`static`],params:[{name:`{
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"div">`,elements:[{name:`literal`,value:`"div"`}],alias:`React.ComponentPropsWithoutRef`}}],returns:null},{name:`Trend`,docblock:null,modifiers:[`static`],params:[{name:`{
  direction = "up",
  // 色は向きではなく良し悪しで決める（T250 ④・2026-09-21）。以前は \`direction\` が
  // 矢印と色を同時に決めていたので、「増えると悪い指標」（コスト・エラー率）の上昇が
  // 成功色で描かれた。合成ルール \`colour_means_good_or_bad\` が「Trend を使うな」と
  // 回避を指示していたのは、API がこの意味を表せなかったため。
  intent = TREND_INTENT[direction],
  className,
  children,
  ...props
}: StatsTrendProps`,optional:!1,type:{name:`intersection`,raw:`React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Trend direction, which controls the arrow icon. When \`intent\` is not given it
   * also sets the color (\`up\` = success, \`down\` = danger, \`neutral\` = neutral).
   * @default "up"
   */
  direction?: "up" | "down" | "neutral";
  /**
   * Whether the change is good or bad, which controls the color independently of
   * the arrow. Set it for metrics where a rise is bad news, such as costs or error
   * rates: \`direction="up" intent="danger"\`. Defaults to the color implied by
   * \`direction\`.
   */
  intent?: "success" | "danger" | "neutral";
}`,elements:[{name:`ReactComponentPropsWithoutRef`,raw:`React.ComponentPropsWithoutRef<"div">`,elements:[{name:`literal`,value:`"div"`}]},{name:`signature`,type:`object`,raw:`{
  /**
   * Trend direction, which controls the arrow icon. When \`intent\` is not given it
   * also sets the color (\`up\` = success, \`down\` = danger, \`neutral\` = neutral).
   * @default "up"
   */
  direction?: "up" | "down" | "neutral";
  /**
   * Whether the change is good or bad, which controls the color independently of
   * the arrow. Set it for metrics where a rise is bad news, such as costs or error
   * rates: \`direction="up" intent="danger"\`. Defaults to the color implied by
   * \`direction\`.
   */
  intent?: "success" | "danger" | "neutral";
}`,signature:{properties:[{key:`direction`,value:{name:`union`,raw:`"up" | "down" | "neutral"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"neutral"`}],required:!1},description:'Trend direction, which controls the arrow icon. When `intent` is not given it\nalso sets the color (`up` = success, `down` = danger, `neutral` = neutral).\n@default "up"'},{key:`intent`,value:{name:`union`,raw:`"success" | "danger" | "neutral"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"neutral"`}],required:!1},description:'Whether the change is good or bad, which controls the color independently of\nthe arrow. Set it for metrics where a rise is bad news, such as costs or error\nrates: `direction="up" intent="danger"`. Defaults to the color implied by\n`direction`.'}]}}],alias:`StatsTrendProps`}}],returns:null}],displayName:`Stats`,props:{variant:{required:!1,tsType:{name:`ReactComponentProps["variant"]`,raw:`React.ComponentProps<typeof Card>["variant"]`},description:`Visual style variant of the card`,defaultValue:{value:`"outline"`,computed:!1}}}},O.__docgenInfo={description:``,methods:[],displayName:`Stats.Label`},k.__docgenInfo={description:``,methods:[],displayName:`Stats.Value`},A.__docgenInfo={description:``,methods:[],displayName:`Stats.Description`},M.__docgenInfo={description:``,methods:[],displayName:`Stats.Trend`,props:{direction:{required:!1,tsType:{name:`union`,raw:`"up" | "down" | "neutral"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"neutral"`}]},description:'Trend direction, which controls the arrow icon. When `intent` is not given it\nalso sets the color (`up` = success, `down` = danger, `neutral` = neutral).\n@default "up"',defaultValue:{value:`"up"`,computed:!1}},intent:{required:!1,tsType:{name:`union`,raw:`"success" | "danger" | "neutral"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"neutral"`}]},description:'Whether the change is good or bad, which controls the color independently of\nthe arrow. Set it for metrics where a rise is bad news, such as costs or error\nrates: `direction="up" intent="danger"`. Defaults to the color implied by\n`direction`.',defaultValue:{value:`{ up: "success", down: "danger", neutral: "neutral" }`,computed:!1}}}}})))()}export{N as n,D as t};