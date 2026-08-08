"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{dr as l,it as u,t as d,un as f,wi as p}from"./src-BE5jBQ9L.js";import{t as m}from"./Box-Bs2Irq0X.js";import{i as h}from"./List-C4WUy_aA.js";import{t as g}from"./Button-d-SlSJ4S.js";var _=e({Default:()=>x,__namedExportsOrder:()=>S,default:()=>b}),v,y,b,x,S,C=t((()=>{v=n(r(),1),s(),a(),d(),y=o(),b={title:`Components/Overlays/Tour`,component:f},x={render:function(e){let{t}=i(c),[n,r]=(0,v.useState)(!1),a=[{target:`#tour-step-1`,title:t(`story.tour_welcome_title`),description:t(`story.tour_welcome_desc`),placement:`bottom`},{target:`#tour-step-2`,title:t(`story.tour_feature_title`),description:t(`story.tour_feature_desc`),placement:`right`},{target:`#tour-step-3`,title:t(`story.tour_help_title`),description:t(`story.tour_help_desc`),placement:`top`}];return(0,y.jsxs)(m,{p:`5xl`,children:[(0,y.jsxs)(h,{gap:`5xl`,children:[(0,y.jsxs)(p,{justify:`between`,align:`center`,wrap:`wrap`,gap:`md`,children:[(0,y.jsx)(`div`,{id:`tour-step-1`,children:(0,y.jsx)(l,{width:`md`,placeholder:t(`story.tour_search_placeholder`),"aria-label":t(`story.tour_search_label`)})}),(0,y.jsx)(g,{onClick:()=>r(!0),children:t(`story.tour_start`)})]}),(0,y.jsx)(m,{id:`tour-step-2`,w:`var(--wim-width-sm)`,children:(0,y.jsxs)(u,{children:[(0,y.jsx)(u.Label,{children:t(`story.tour_stats_label`)}),(0,y.jsx)(u.Value,{children:`4,281`}),(0,y.jsx)(u.Description,{children:t(`story.tour_stats_caption`)})]})}),(0,y.jsx)(p,{justify:`end`,children:(0,y.jsx)(`div`,{id:`tour-step-3`,children:(0,y.jsx)(g,{variant:`ghost`,size:`sm`,icon:`HelpCircleIcon`,children:t(`story.tour_help_action`)})})})]}),(0,y.jsx)(f,{...e,open:n,steps:a,onClose:()=>r(!1)})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`]}));C();export{x as Default,S as __namedExportsOrder,b as default,C as n,_ as t};