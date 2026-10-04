"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-D0pTsuU-.js";import{n as u,t as d}from"./Text-8oARqUeB.js";import{n as f,t as p}from"./Avatar-C38mVE7B.js";import{n as m,t as h}from"./Presence-D5d0UCeL.js";var g=t({Default:()=>y,OnAvatar:()=>b,Realistic:()=>C,Sizes:()=>S,Statuses:()=>x,__namedExportsOrder:()=>w,default:()=>v}),_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),n(),a(),f(),m(),c(),u(),_=s(),v={title:`Components/Data Indicators/Presence`,component:h,parameters:{layout:`centered`},argTypes:{status:{control:`radio`,options:[`online`,`away`,`busy`,`offline`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`]},showLabel:{control:`boolean`}}},y={args:{status:`online`,showLabel:!0}},b={render:function(e){let{t}=r(o);return(0,_.jsx)(h,{...e,children:(0,_.jsx)(p,{initials:`AF`,alt:t(`story.presence_name_1`)})})},args:{status:`online`}},x={render:e=>(0,_.jsxs)(l,{direction:`row`,gap:`lg`,align:`center`,children:[(0,_.jsx)(h,{...e,status:`online`,showLabel:!0}),(0,_.jsx)(h,{...e,status:`away`,showLabel:!0}),(0,_.jsx)(h,{...e,status:`busy`,showLabel:!0}),(0,_.jsx)(h,{...e,status:`offline`,showLabel:!0})]})},S={render:e=>(0,_.jsxs)(l,{direction:`row`,gap:`lg`,align:`center`,children:[(0,_.jsx)(h,{...e,status:`online`,size:`sm`,children:(0,_.jsx)(p,{initials:`AF`,size:`sm`,intent:`neutral`})}),(0,_.jsx)(h,{...e,status:`online`,size:`md`,children:(0,_.jsx)(p,{initials:`TB`,size:`md`,intent:`neutral`})}),(0,_.jsx)(h,{...e,status:`online`,size:`lg`,children:(0,_.jsx)(p,{initials:`NO`,size:`lg`,intent:`neutral`})})]})},C={render:function(){let{t:e}=r(o),t=[{initials:`AF`,name:e(`story.presence_name_1`),status:`online`,note:e(`story.presence_role_editing`)},{initials:`NO`,name:e(`story.presence_name_3`),status:`busy`,note:e(`story.presence_role_comment`)},{initials:`TB`,name:e(`story.presence_name_2`),status:`away`,note:e(`story.presence_role_viewing`)},{initials:`KV`,name:e(`story.presence_name_4`),status:`offline`,note:e(`story.presence_last_seen`)}];return(0,_.jsxs)(l,{gap:`md`,w:`18rem`,children:[(0,_.jsx)(d,{size:`sm`,color:`text-secondary`,children:e(`story.presence_panel_title`)}),(0,_.jsx)(l,{gap:`sm`,children:t.map(e=>(0,_.jsxs)(l,{direction:`row`,gap:`sm`,align:`center`,children:[(0,_.jsx)(h,{status:e.status,children:(0,_.jsx)(p,{initials:e.initials,size:`sm`,intent:`neutral`})}),(0,_.jsxs)(l,{gap:`3xs`,children:[(0,_.jsx)(d,{size:`sm`,truncate:!0,children:e.name}),(0,_.jsx)(d,{size:`xs`,color:`text-secondary`,children:e.note})]})]},e.initials))})]})}},w=[`Default`,`OnAvatar`,`Statuses`,`Sizes`,`Realistic`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: "online",
    showLabel: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: PresenceProps) => <Stack direction="row" gap="lg" align="center">
      <Presence {...args} status="online" showLabel />
      <Presence {...args} status="away" showLabel />
      <Presence {...args} status="busy" showLabel />
      <Presence {...args} status="offline" showLabel />
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`共同編集中のドキュメントの参加者一覧。**在席は名前の隣ではなくアバターの角**に付き、
説明文の側は「いま何をしているか」を持つ。オフラインの行だけ最終アクセスに変わり、
長い名前は 1 行に収まらない ── 揃っていない行が混ざるのが実際の一覧。`,...C.parameters?.docs?.description}}}})))()}export{S as a,C as i,b as n,x as o,g as r,T as s,y as t};