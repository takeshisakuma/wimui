"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-CUEdBzLr.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Box-BNJo1pMu.js";import{n as f,t as p}from"./Group-BLI3kjIp.js";import{n as m,t as h}from"./useWimTranslation-CsACK-Kz.js";import{n as g,t as ee}from"./common-By_4SFOZ.js";import{n as _,t as v}from"./Portal-BCsViLJs.js";import{n as y,t as b}from"./FocusTrap-Bz0AV-X1.js";import{n as x,t as te}from"./Stack-CrCPoxQ1.js";import{n as S,t as C}from"./Button-o-MLz1Ym.js";import{n as ne,t as re}from"./SearchInput-BGAJaMsq.js";import{n as ie,t as w}from"./observeMove-4P_16Pm_.js";import{n as ae,t as T}from"./Stats-CecP0LuY.js";import{r as oe,t as E}from"./playOpen-BfHmRBb6.js";var D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{D=`_mask_15j7q_3`,O=`_highlight_15j7q_9`,k=`_bubble_15j7q_17`,A=`_inner_15j7q_27`,j=`_title_15j7q_30`,M=`_description_15j7q_35`,N=`_footer_15j7q_40`,P=`_progress_15j7q_45`,F=`_buttons_15j7q_49`,I={mask:D,highlight:O,bubble:k,inner:A,title:j,description:M,footer:N,progress:P,buttons:F}})))()}function R(e){let t=getComputedStyle(e);return`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`}async function se(e){let t=document.fonts;if(t&&typeof t.load==`function`){try{await t.load(R(e))}catch{}for(;t.status===`loading`;)await new Promise(e=>{t.addEventListener(`loadingdone`,()=>e(),{once:!0})})}}function ce(e){let t=document.fonts;return!t||typeof t.load!=`function`?!1:t.status===`loading`||typeof t.check==`function`&&!t.check(R(e))}function le(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.width)===Math.round(t.width)&&Math.round(e.height)===Math.round(t.height)}function z(e){return e.top>=U&&e.bottom<=window.innerHeight-U&&e.left>=U&&e.right<=window.innerWidth-U}var B,V,H,U,W;function G(){return(G=t((()=>{B=e(r(),1),V=e(l(),1),_(),y(),S(),h(),g(),L(),w(),H=c(),U=16,W=({steps:e,open:t,onClose:n,onFinish:r})=>{let{t:i}=m(ee),[a,o]=(0,B.useState)(0),[s,c]=(0,B.useState)(null),l=e[a],u=l?.target;(0,B.useLayoutEffect)(()=>{if(!t||!u){c(null);return}let e=!1,n=t=>{e||c(e=>t?e&&le(e,t)?e:t:null)},r=()=>{let e=document.querySelector(u);if(!e){n(null);return}z(e.getBoundingClientRect())||e.scrollIntoView({block:`center`,inline:`nearest`}),n(e.getBoundingClientRect())},i=()=>{let e=document.querySelector(u);n(e?e.getBoundingClientRect():null)},a,o=()=>{window.addEventListener(`resize`,i),window.addEventListener(`scroll`,i,!0);let e=document.querySelector(u);e&&(a=ie(e,i))},s=async()=>{let t=document.querySelector(u);t&&await se(t),!e&&(r(),o())},l=document.querySelector(u);return l&&ce(l)?s():(r(),o()),()=>{e=!0,window.removeEventListener(`resize`,i),window.removeEventListener(`scroll`,i,!0),a?.()}},[t,a,u]);let d=(0,B.useId)(),f=(0,B.useRef)(null),p=(0,B.useRef)(null),h=t&&!!l&&!!s;if((0,B.useEffect)(()=>{if(!h)return;let e=f.current;e&&!e.contains(document.activeElement)&&p.current?.focus()},[h,a]),(0,B.useEffect)(()=>{if(!t)return;let e=e=>{e.key===`Escape`&&(e.preventDefault(),n())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[t,n]),!t||!l)return null;let g=()=>{a<e.length-1?o(a+1):(r?r():n(),o(0))},_=()=>{a>0&&o(a-1)},y={},x=l.placement||`bottom`;if(s){let e=window.innerWidth,t=Math.min(300,e-32),n=x;if(e<640&&(n===`left`||n===`right`)&&(n=`bottom`),x=n,n===`top`||n===`bottom`){let r=s.left+s.width/2,i=t/2+16,a=e-t/2-16;r=i>a?e/2:Math.max(i,Math.min(a,r)),y.left=r,n===`top`?(y.top=s.top-12,y.transform=`translate(-50%, -100%)`):(y.top=s.bottom+12,y.transform=`translateX(-50%)`)}else n===`left`?(y.left=s.left-12,y.top=s.top+s.height/2,y.transform=`translate(-100%, -50%)`):n===`right`&&(y.left=s.right+12,y.top=s.top+s.height/2,y.transform=`translateY(-50%)`)}return(0,H.jsx)(v,{children:(0,H.jsx)(b,{initialFocus:!1,children:(0,H.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":l.title,"aria-describedby":s?d:void 0,children:[s&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:I.highlight,style:{top:s.top-4,left:s.left-4,width:s.width+8,height:s.height+8}}),(0,H.jsx)(`div`,{ref:f,className:(0,V.default)(`wim-tour`,I.bubble),"data-placement":x,style:y,children:(0,H.jsxs)(`div`,{className:I.inner,children:[(0,H.jsx)(`h3`,{className:I.title,children:l.title}),(0,H.jsx)(`p`,{id:d,className:I.description,children:l.description}),(0,H.jsxs)(`div`,{className:I.footer,children:[(0,H.jsxs)(`span`,{className:I.progress,children:[a+1,` / `,e.length]}),(0,H.jsxs)(`div`,{className:I.buttons,children:[a>0&&(0,H.jsx)(C,{size:`sm`,variant:`outline`,onClick:_,children:i(`action.back`)}),(0,H.jsx)(C,{ref:p,size:`sm`,variant:`solid`,onClick:g,children:a===e.length-1?i(`action.finish`):i(`action.next`)})]})]})]})})]}),(0,H.jsx)(`div`,{className:I.mask,onClick:n,role:`button`,tabIndex:0,"aria-label":i(`a11y.close_tour`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&n()}})]},a)})})},W.__docgenInfo={description:``,methods:[],displayName:`Tour`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:`target`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`placement`,value:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}],required:!1}}]}}],raw:`TourStep[]`},description:`Steps of the tour. Each step targets an element via a CSS selector.`},open:{required:!0,tsType:{name:`boolean`},description:`Whether the tour is shown.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the tour is dismissed before completion.`},onFinish:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the last step is completed.`}}}})))()}var K=n({Default:()=>X,Open:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),q,J,Y,X,Z,Q;function $(){return($=t((()=>{q=e(r(),1),a(),o(),E(),u(),S(),f(),ne(),x(),ae(),G(),J=c(),Y={title:`Components/Overlays/Tour`,component:W},X={render:function(e){let{t}=i(s),[n,r]=(0,q.useState)(!1),a=[{target:`#tour-step-1`,title:t(`story.tour_welcome_title`),description:t(`story.tour_welcome_desc`),placement:`bottom`},{target:`#tour-step-2`,title:t(`story.tour_feature_title`),description:t(`story.tour_feature_desc`),placement:`right`},{target:`#tour-step-3`,title:t(`story.tour_help_title`),description:t(`story.tour_help_desc`),placement:`top`}];return(0,J.jsxs)(d,{p:`5xl`,children:[(0,J.jsxs)(te,{gap:`5xl`,children:[(0,J.jsxs)(p,{justify:`between`,align:`center`,wrap:`wrap`,gap:`md`,children:[(0,J.jsx)(`div`,{id:`tour-step-1`,children:(0,J.jsx)(re,{width:`md`,placeholder:t(`story.tour_search_placeholder`),"aria-label":t(`story.tour_search_label`)})}),(0,J.jsx)(C,{onClick:()=>r(!0),children:t(`story.tour_start`)})]}),(0,J.jsx)(d,{id:`tour-step-2`,w:`var(--wim-width-sm)`,children:(0,J.jsxs)(T,{children:[(0,J.jsx)(T.Label,{children:t(`story.tour_stats_label`)}),(0,J.jsx)(T.Value,{children:`4,281`}),(0,J.jsx)(T.Description,{children:t(`story.tour_stats_caption`)})]})}),(0,J.jsx)(p,{justify:`end`,children:(0,J.jsx)(`div`,{id:`tour-step-3`,children:(0,J.jsx)(C,{variant:`ghost`,size:`sm`,icon:`HelpCircleIcon`,children:t(`story.tour_help_action`)})})})]}),(0,J.jsx)(W,{...e,open:n,steps:a,onClose:()=>r(!1)})]})}},Z={...X,play:oe(`click`,`button:not([id^="tour-step"] button)`,`.wim-tour`)},Q=[`Default`,`Open`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...Default,
  // 開始のボタンは、ツアーの対象（#tour-step-*）の外にある最初のボタン。
  play: openWith("click", 'button:not([id^="tour-step"] button)', ".wim-tour")
}`,...Z.parameters?.docs?.source}}}})))()}export{K as n,$ as r,X as t};