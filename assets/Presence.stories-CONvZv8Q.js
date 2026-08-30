"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{It as c,et as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Stack-z584y6QE.js";import{t as f}from"./Text-CLDfz7UT.js";var p=e({Default:()=>g,OnAvatar:()=>_,Realistic:()=>b,Sizes:()=>y,Statuses:()=>v,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{o(),n(),i(),u(),m=a(),h={title:`Components/Data Indicators/Presence`,component:l,parameters:{layout:`centered`},argTypes:{status:{control:`radio`,options:[`online`,`away`,`busy`,`offline`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`]},showLabel:{control:`boolean`}}},g={args:{status:`online`,showLabel:!0}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(l,{...e,children:(0,m.jsx)(c,{initials:`AF`,alt:t(`story.presence_name_1`)})})},args:{status:`online`}},v={render:e=>(0,m.jsxs)(d,{direction:`row`,gap:`lg`,align:`center`,children:[(0,m.jsx)(l,{...e,status:`online`,showLabel:!0}),(0,m.jsx)(l,{...e,status:`away`,showLabel:!0}),(0,m.jsx)(l,{...e,status:`busy`,showLabel:!0}),(0,m.jsx)(l,{...e,status:`offline`,showLabel:!0})]})},y={render:e=>(0,m.jsxs)(d,{direction:`row`,gap:`lg`,align:`center`,children:[(0,m.jsx)(l,{...e,status:`online`,size:`sm`,children:(0,m.jsx)(c,{initials:`AF`,size:`sm`,intent:`neutral`})}),(0,m.jsx)(l,{...e,status:`online`,size:`md`,children:(0,m.jsx)(c,{initials:`TB`,size:`md`,intent:`neutral`})}),(0,m.jsx)(l,{...e,status:`online`,size:`lg`,children:(0,m.jsx)(c,{initials:`NO`,size:`lg`,intent:`neutral`})})]})},b={render:function(){let{t:e}=r(s),t=[{initials:`AF`,name:e(`story.presence_name_1`),status:`online`,note:e(`story.presence_role_editing`)},{initials:`NO`,name:e(`story.presence_name_3`),status:`busy`,note:e(`story.presence_role_comment`)},{initials:`TB`,name:e(`story.presence_name_2`),status:`away`,note:e(`story.presence_role_viewing`)},{initials:`KV`,name:e(`story.presence_name_4`),status:`offline`,note:e(`story.presence_last_seen`)}];return(0,m.jsxs)(d,{gap:`md`,w:`18rem`,children:[(0,m.jsx)(f,{size:`sm`,color:`text-secondary`,children:e(`story.presence_panel_title`)}),(0,m.jsx)(d,{gap:`sm`,children:t.map(e=>(0,m.jsxs)(d,{direction:`row`,gap:`sm`,align:`center`,children:[(0,m.jsx)(l,{status:e.status,children:(0,m.jsx)(c,{initials:e.initials,size:`sm`,intent:`neutral`})}),(0,m.jsxs)(d,{gap:`3xs`,children:[(0,m.jsx)(f,{size:`sm`,truncate:!0,children:e.name}),(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:e.note})]})]},e.initials))})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: "online",
    showLabel: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Presence {...args}>
        <Avatar initials="AF" alt={t("story.presence_name_1")} />
      </Presence>;
  },
  args: {
    status: "online"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: PresenceProps) => <Stack direction="row" gap="lg" align="center">
      <Presence {...args} status="online" showLabel />
      <Presence {...args} status="away" showLabel />
      <Presence {...args} status="busy" showLabel />
      <Presence {...args} status="offline" showLabel />
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: PresenceProps) => <Stack direction="row" gap="lg" align="center">
      <Presence {...args} status="online" size="sm">
        <Avatar initials="AF" size="sm" intent="neutral" />
      </Presence>
      <Presence {...args} status="online" size="md">
        <Avatar initials="TB" size="md" intent="neutral" />
      </Presence>
      <Presence {...args} status="online" size="lg">
        <Avatar initials="NO" size="lg" intent="neutral" />
      </Presence>
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const people = [{
      initials: "AF",
      name: t("story.presence_name_1"),
      status: "online" as const,
      note: t("story.presence_role_editing")
    }, {
      initials: "NO",
      name: t("story.presence_name_3"),
      status: "busy" as const,
      note: t("story.presence_role_comment")
    }, {
      initials: "TB",
      name: t("story.presence_name_2"),
      status: "away" as const,
      note: t("story.presence_role_viewing")
    }, {
      initials: "KV",
      name: t("story.presence_name_4"),
      status: "offline" as const,
      note: t("story.presence_last_seen")
    }];
    return <Stack gap="md" w="18rem">
        <Text size="sm" color="text-secondary">
          {t("story.presence_panel_title")}
        </Text>
        <Stack gap="sm">
          {people.map(person => <Stack key={person.initials} direction="row" gap="sm" align="center">
              <Presence status={person.status}>
                <Avatar initials={person.initials} size="sm" intent="neutral" />
              </Presence>
              <Stack gap="3xs">
                <Text size="sm" truncate>
                  {person.name}
                </Text>
                <Text size="xs" color="text-secondary">
                  {person.note}
                </Text>
              </Stack>
            </Stack>)}
        </Stack>
      </Stack>;
  }
}`,...b.parameters?.docs?.source},description:{story:`共同編集中のドキュメントの参加者一覧。**在席は名前の隣ではなくアバターの角**に付き、
説明文の側は「いま何をしているか」を持つ。オフラインの行だけ最終アクセスに変わり、
長い名前は 1 行に収まらない ── 揃っていない行が混ざるのが実際の一覧。`,...b.parameters?.docs?.description}}},x=[`Default`,`OnAvatar`,`Statuses`,`Sizes`,`Realistic`]}));S();export{g as Default,_ as OnAvatar,b as Realistic,y as Sizes,v as Statuses,x as __namedExportsOrder,h as default,S as n,p as t};