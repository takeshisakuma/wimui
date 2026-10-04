"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Box-lSx-_C-t.js";import{n as f,t as p}from"./Group-DVFOQHnC.js";import{n as m,t as h}from"./useWimTranslation-akUKuRsR.js";import{n as g,t as _}from"./Portal-BCsViLJs.js";import{n as v,t as y}from"./Stack-D0pTsuU-.js";import{n as b,t as x}from"./Button-DrO46Brn.js";import{n as S,t as ee}from"./SearchInput-DxowftA6.js";import{n as C,t as w}from"./Stats-BDbMgWPh.js";var T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{T=`_mask_q23ul_3`,E=`_highlight_q23ul_9`,D=`_bubble_q23ul_17`,O=`_inner_q23ul_27`,k=`_title_q23ul_30`,A=`_description_q23ul_35`,j=`_footer_q23ul_40`,M=`_progress_q23ul_45`,N=`_buttons_q23ul_49`,P={mask:T,highlight:E,bubble:D,inner:O,title:k,description:A,footer:j,progress:M,buttons:N}})))()}function I(e){let t=getComputedStyle(e);return`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`}async function L(e){let t=document.fonts;if(t&&typeof t.load==`function`){try{await t.load(I(e))}catch{}for(;t.status===`loading`;)await new Promise(e=>{t.addEventListener(`loadingdone`,()=>e(),{once:!0})})}}function R(e){let t=document.fonts;return!t||typeof t.load!=`function`?!1:t.status===`loading`||typeof t.check==`function`&&!t.check(I(e))}function z(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.width)===Math.round(t.width)&&Math.round(e.height)===Math.round(t.height)}function B(e){return e.top>=W&&e.bottom<=window.innerHeight-W&&e.left>=W&&e.right<=window.innerWidth-W}var V,H,U,W,G;function K(){return(K=t((()=>{V=e(r(),1),H=e(l(),1),g(),b(),h(),F(),U=c(),W=16,G=({steps:e,open:t,onClose:n,onFinish:r})=>{let{t:i}=m(`common`),[a,o]=(0,V.useState)(0),[s,c]=(0,V.useState)(null),l=e[a],u=l?.target;if((0,V.useLayoutEffect)(()=>{if(!t||!u){c(null);return}let e=!1,n=t=>{e||c(e=>t?e&&z(e,t)?e:t:null)},r=()=>{let e=document.querySelector(u);if(!e){n(null);return}B(e.getBoundingClientRect())||e.scrollIntoView({block:`center`,inline:`nearest`}),n(e.getBoundingClientRect())},i=()=>{let e=document.querySelector(u);n(e?e.getBoundingClientRect():null)},a=()=>{window.addEventListener(`resize`,i),window.addEventListener(`scroll`,i,!0)},o=async()=>{let t=document.querySelector(u);t&&await L(t),!e&&(r(),a())},s=document.querySelector(u);return s&&R(s)?o():(r(),a()),()=>{e=!0,window.removeEventListener(`resize`,i),window.removeEventListener(`scroll`,i,!0)}},[t,a,u]),!t||!l)return null;let d=()=>{a<e.length-1?o(a+1):(r?r():n(),o(0))},f=()=>{a>0&&o(a-1)},p={},h=l.placement||`bottom`;if(s){let e=window.innerWidth,t=Math.min(300,e-32),n=h;if(e<640&&(n===`left`||n===`right`)&&(n=`bottom`),h=n,n===`top`||n===`bottom`){let r=s.left+s.width/2,i=t/2+16,a=e-t/2-16;r=i>a?e/2:Math.max(i,Math.min(a,r)),p.left=r,n===`top`?(p.top=s.top-12,p.transform=`translate(-50%, -100%)`):(p.top=s.bottom+12,p.transform=`translateX(-50%)`)}else n===`left`?(p.left=s.left-12,p.top=s.top+s.height/2,p.transform=`translate(-100%, -50%)`):n===`right`&&(p.left=s.right+12,p.top=s.top+s.height/2,p.transform=`translateY(-50%)`)}return(0,U.jsxs)(_,{children:[(0,U.jsx)(`div`,{className:P.mask,onClick:n,role:`button`,tabIndex:0,"aria-label":i(`a11y.close_tour`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&n()}}),s&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:P.highlight,style:{top:s.top-4,left:s.left-4,width:s.width+8,height:s.height+8}}),(0,U.jsx)(`div`,{className:(0,H.default)(`wim-tour`,P.bubble),"data-placement":h,style:p,children:(0,U.jsxs)(`div`,{className:P.inner,children:[(0,U.jsx)(`h3`,{className:P.title,children:l.title}),(0,U.jsx)(`p`,{className:P.description,children:l.description}),(0,U.jsxs)(`div`,{className:P.footer,children:[(0,U.jsxs)(`span`,{className:P.progress,children:[a+1,` / `,e.length]}),(0,U.jsxs)(`div`,{className:P.buttons,children:[a>0&&(0,U.jsx)(x,{size:`sm`,variant:`outline`,onClick:f,children:i(`action.back`)}),(0,U.jsx)(x,{size:`sm`,variant:`solid`,onClick:d,children:a===e.length-1?i(`action.finish`):i(`action.next`)})]})]})]})})]})]})},G.__docgenInfo={description:``,methods:[],displayName:`Tour`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:`target`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`placement`,value:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}],required:!1}}]}}],raw:`TourStep[]`},description:`Steps of the tour. Each step targets an element via a CSS selector.`},open:{required:!0,tsType:{name:`boolean`},description:`Whether the tour is shown.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the tour is dismissed before completion.`},onFinish:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the last step is completed.`}}}})))()}var q=n({Default:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),J,Y,X,Z,Q;function $(){return($=t((()=>{J=e(r(),1),a(),o(),u(),b(),f(),S(),v(),C(),K(),Y=c(),X={title:`Components/Overlays/Tour`,component:G},Z={render:function(e){let{t}=i(s),[n,r]=(0,J.useState)(!1),a=[{target:`#tour-step-1`,title:t(`story.tour_welcome_title`),description:t(`story.tour_welcome_desc`),placement:`bottom`},{target:`#tour-step-2`,title:t(`story.tour_feature_title`),description:t(`story.tour_feature_desc`),placement:`right`},{target:`#tour-step-3`,title:t(`story.tour_help_title`),description:t(`story.tour_help_desc`),placement:`top`}];return(0,Y.jsxs)(d,{p:`5xl`,children:[(0,Y.jsxs)(y,{gap:`5xl`,children:[(0,Y.jsxs)(p,{justify:`between`,align:`center`,wrap:`wrap`,gap:`md`,children:[(0,Y.jsx)(`div`,{id:`tour-step-1`,children:(0,Y.jsx)(ee,{width:`md`,placeholder:t(`story.tour_search_placeholder`),"aria-label":t(`story.tour_search_label`)})}),(0,Y.jsx)(x,{onClick:()=>r(!0),children:t(`story.tour_start`)})]}),(0,Y.jsx)(d,{id:`tour-step-2`,w:`var(--wim-width-sm)`,children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(w.Label,{children:t(`story.tour_stats_label`)}),(0,Y.jsx)(w.Value,{children:`4,281`}),(0,Y.jsx)(w.Description,{children:t(`story.tour_stats_caption`)})]})}),(0,Y.jsx)(p,{justify:`end`,children:(0,Y.jsx)(`div`,{id:`tour-step-3`,children:(0,Y.jsx)(x,{variant:`ghost`,size:`sm`,icon:`HelpCircleIcon`,children:t(`story.tour_help_action`)})})})]}),(0,Y.jsx)(G,{...e,open:n,steps:a,onClose:()=>r(!1)})]})}},Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    const steps = [{
      target: "#tour-step-1",
      title: t("story.tour_welcome_title"),
      description: t("story.tour_welcome_desc"),
      placement: "bottom" as const
    }, {
      target: "#tour-step-2",
      title: t("story.tour_feature_title"),
      description: t("story.tour_feature_desc"),
      placement: "right" as const
    }, {
      target: "#tour-step-3",
      title: t("story.tour_help_title"),
      description: t("story.tour_help_desc"),
      placement: "top" as const
    }];
    return <Box p="5xl">
        <Stack gap="5xl">
          <Group justify="between" align="center" wrap="wrap" gap="md">
            <div id="tour-step-1">
              {/* placeholder は入力例、aria-label は欄の説明。同じキーを流用すると
                  スクリーンリーダーに「Q3 ロードマップ」という欄名が読まれてしまう。 */}
              <SearchInput width="md" placeholder={t("story.tour_search_placeholder")} aria-label={t("story.tour_search_label")} />
            </div>
            <Button onClick={() => setOpen(true)}>{t("story.tour_start")}</Button>
          </Group>

          <Box id="tour-step-2" w="var(--wim-width-sm)">
            <Stats>
              <Stats.Label>{t("story.tour_stats_label")}</Stats.Label>
              <Stats.Value>4,281</Stats.Value>
              <Stats.Description>{t("story.tour_stats_caption")}</Stats.Description>
            </Stats>
          </Box>

          <Group justify="end">
            <div id="tour-step-3">
              <Button variant="ghost" size="sm" icon="HelpCircleIcon">
                {t("story.tour_help_action")}
              </Button>
            </div>
          </Group>
        </Stack>

        <Tour {...args} open={open} steps={steps} onClose={() => setOpen(false)} />
      </Box>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{q as n,$ as r,Z as t};