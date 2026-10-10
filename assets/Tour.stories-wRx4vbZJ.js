"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Box-BNJo1pMu.js";import{n as f,t as p}from"./Group-BLI3kjIp.js";import{n as m,t as h}from"./useWimTranslation-DkW6YDva.js";import{n as g,t as ee}from"./common-BvPUqJnw.js";import{n as _,t as v}from"./Portal-BCsViLJs.js";import{n as y,t as b}from"./FocusTrap-Bz0AV-X1.js";import{n as x,t as S}from"./Stack-CrCPoxQ1.js";import{n as C,t as w}from"./Button-DSrkNfg0.js";import{n as te,t as ne}from"./SearchInput-5EIymSie.js";import{n as re,t as T}from"./Stats-BSSkCQ64.js";import{r as E,t as D}from"./playOpen-BfHmRBb6.js";var O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{O=`_mask_q23ul_3`,k=`_highlight_q23ul_9`,A=`_bubble_q23ul_17`,j=`_inner_q23ul_27`,M=`_title_q23ul_30`,N=`_description_q23ul_35`,P=`_footer_q23ul_40`,F=`_progress_q23ul_45`,I=`_buttons_q23ul_49`,L={mask:O,highlight:k,bubble:A,inner:j,title:M,description:N,footer:P,progress:F,buttons:I}})))()}function z(e){let t=getComputedStyle(e);return`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`}async function B(e){let t=document.fonts;if(t&&typeof t.load==`function`){try{await t.load(z(e))}catch{}for(;t.status===`loading`;)await new Promise(e=>{t.addEventListener(`loadingdone`,()=>e(),{once:!0})})}}function ie(e){let t=document.fonts;return!t||typeof t.load!=`function`?!1:t.status===`loading`||typeof t.check==`function`&&!t.check(z(e))}function ae(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.width)===Math.round(t.width)&&Math.round(e.height)===Math.round(t.height)}function oe(e){return e.top>=W&&e.bottom<=window.innerHeight-W&&e.left>=W&&e.right<=window.innerWidth-W}var V,H,U,W,G;function K(){return(K=t((()=>{V=e(r(),1),H=e(l(),1),_(),y(),C(),h(),g(),R(),U=c(),W=16,G=({steps:e,open:t,onClose:n,onFinish:r})=>{let{t:i}=m(ee),[a,o]=(0,V.useState)(0),[s,c]=(0,V.useState)(null),l=e[a],u=l?.target;(0,V.useLayoutEffect)(()=>{if(!t||!u){c(null);return}let e=!1,n=t=>{e||c(e=>t?e&&ae(e,t)?e:t:null)},r=()=>{let e=document.querySelector(u);if(!e){n(null);return}oe(e.getBoundingClientRect())||e.scrollIntoView({block:`center`,inline:`nearest`}),n(e.getBoundingClientRect())},i=()=>{let e=document.querySelector(u);n(e?e.getBoundingClientRect():null)},a=()=>{window.addEventListener(`resize`,i),window.addEventListener(`scroll`,i,!0)},o=async()=>{let t=document.querySelector(u);t&&await B(t),!e&&(r(),a())},s=document.querySelector(u);return s&&ie(s)?o():(r(),a()),()=>{e=!0,window.removeEventListener(`resize`,i),window.removeEventListener(`scroll`,i,!0)}},[t,a,u]);let d=(0,V.useId)(),f=(0,V.useRef)(null),p=(0,V.useRef)(null),h=t&&!!l&&!!s;if((0,V.useEffect)(()=>{if(!h)return;let e=f.current;e&&!e.contains(document.activeElement)&&p.current?.focus()},[h,a]),(0,V.useEffect)(()=>{if(!t)return;let e=e=>{e.key===`Escape`&&(e.preventDefault(),n())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[t,n]),!t||!l)return null;let g=()=>{a<e.length-1?o(a+1):(r?r():n(),o(0))},_=()=>{a>0&&o(a-1)},y={},x=l.placement||`bottom`;if(s){let e=window.innerWidth,t=Math.min(300,e-32),n=x;if(e<640&&(n===`left`||n===`right`)&&(n=`bottom`),x=n,n===`top`||n===`bottom`){let r=s.left+s.width/2,i=t/2+16,a=e-t/2-16;r=i>a?e/2:Math.max(i,Math.min(a,r)),y.left=r,n===`top`?(y.top=s.top-12,y.transform=`translate(-50%, -100%)`):(y.top=s.bottom+12,y.transform=`translateX(-50%)`)}else n===`left`?(y.left=s.left-12,y.top=s.top+s.height/2,y.transform=`translate(-100%, -50%)`):n===`right`&&(y.left=s.right+12,y.top=s.top+s.height/2,y.transform=`translateY(-50%)`)}return(0,U.jsx)(v,{children:(0,U.jsx)(b,{initialFocus:!1,children:(0,U.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":l.title,"aria-describedby":s?d:void 0,children:[s&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:L.highlight,style:{top:s.top-4,left:s.left-4,width:s.width+8,height:s.height+8}}),(0,U.jsx)(`div`,{ref:f,className:(0,H.default)(`wim-tour`,L.bubble),"data-placement":x,style:y,children:(0,U.jsxs)(`div`,{className:L.inner,children:[(0,U.jsx)(`h3`,{className:L.title,children:l.title}),(0,U.jsx)(`p`,{id:d,className:L.description,children:l.description}),(0,U.jsxs)(`div`,{className:L.footer,children:[(0,U.jsxs)(`span`,{className:L.progress,children:[a+1,` / `,e.length]}),(0,U.jsxs)(`div`,{className:L.buttons,children:[a>0&&(0,U.jsx)(w,{size:`sm`,variant:`outline`,onClick:_,children:i(`action.back`)}),(0,U.jsx)(w,{ref:p,size:`sm`,variant:`solid`,onClick:g,children:a===e.length-1?i(`action.finish`):i(`action.next`)})]})]})]})})]}),(0,U.jsx)(`div`,{className:L.mask,onClick:n,role:`button`,tabIndex:0,"aria-label":i(`a11y.close_tour`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&n()}})]})})})},G.__docgenInfo={description:``,methods:[],displayName:`Tour`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  target: string; // CSS selector
  title: string;
  description: string;
  placement?: "top" | "bottom" | "left" | "right";
}`,signature:{properties:[{key:`target`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`placement`,value:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}],required:!1}}]}}],raw:`TourStep[]`},description:`Steps of the tour. Each step targets an element via a CSS selector.`},open:{required:!0,tsType:{name:`boolean`},description:`Whether the tour is shown.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the tour is dismissed before completion.`},onFinish:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the last step is completed.`}}}})))()}var se=n({Default:()=>X,Open:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),q,J,Y,X,Z,Q;function $(){return($=t((()=>{q=e(r(),1),a(),o(),D(),u(),C(),f(),te(),x(),re(),K(),J=c(),Y={title:`Components/Overlays/Tour`,component:G},X={render:function(e){let{t}=i(s),[n,r]=(0,q.useState)(!1),a=[{target:`#tour-step-1`,title:t(`story.tour_welcome_title`),description:t(`story.tour_welcome_desc`),placement:`bottom`},{target:`#tour-step-2`,title:t(`story.tour_feature_title`),description:t(`story.tour_feature_desc`),placement:`right`},{target:`#tour-step-3`,title:t(`story.tour_help_title`),description:t(`story.tour_help_desc`),placement:`top`}];return(0,J.jsxs)(d,{p:`5xl`,children:[(0,J.jsxs)(S,{gap:`5xl`,children:[(0,J.jsxs)(p,{justify:`between`,align:`center`,wrap:`wrap`,gap:`md`,children:[(0,J.jsx)(`div`,{id:`tour-step-1`,children:(0,J.jsx)(ne,{width:`md`,placeholder:t(`story.tour_search_placeholder`),"aria-label":t(`story.tour_search_label`)})}),(0,J.jsx)(w,{onClick:()=>r(!0),children:t(`story.tour_start`)})]}),(0,J.jsx)(d,{id:`tour-step-2`,w:`var(--wim-width-sm)`,children:(0,J.jsxs)(T,{children:[(0,J.jsx)(T.Label,{children:t(`story.tour_stats_label`)}),(0,J.jsx)(T.Value,{children:`4,281`}),(0,J.jsx)(T.Description,{children:t(`story.tour_stats_caption`)})]})}),(0,J.jsx)(p,{justify:`end`,children:(0,J.jsx)(`div`,{id:`tour-step-3`,children:(0,J.jsx)(w,{variant:`ghost`,size:`sm`,icon:`HelpCircleIcon`,children:t(`story.tour_help_action`)})})})]}),(0,J.jsx)(G,{...e,open:n,steps:a,onClose:()=>r(!1)})]})}},Z={...X,play:E(`click`,`button:not([id^="tour-step"] button)`,`.wim-tour`)},Q=[`Default`,`Open`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{se as n,$ as r,X as t};