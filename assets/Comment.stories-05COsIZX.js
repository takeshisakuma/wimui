"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Br as c,nt as l,t as u}from"./src-CV0le6yM.js";import{t as d}from"./Stack-z584y6QE.js";import{t as f}from"./Button-vRcm9ObM.js";import{r as p}from"./TagInput-ELhz9K8s.js";import{t as m}from"./RelativeTime-CEcKS_oi.js";var h=e({Default:()=>y,Editing:()=>S,ReadOnly:()=>C,Replying:()=>x,Thread:()=>b,__namedExportsOrder:()=>w,default:()=>_}),g,_,v,y,b,x,S,C,w,T=t((()=>{n(),o(),i(),u(),g=a(),_={title:`Components/Data-display/Comment`,component:l,parameters:{layout:`padded`}},v=e=>new Date(Date.now()-e*36e5),y={render:function(e){let{t}=r(s);return(0,g.jsx)(l,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,g.jsx)(m,{date:v(5)}),onReply:()=>{},children:t(`story.comment_body_lead`)})}},b={render:function(e){let{t}=r(s);return(0,g.jsx)(l,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`,badge:(0,g.jsx)(p,{size:`sm`,children:t(`story.comment_badge_author`)})},timestamp:(0,g.jsx)(m,{date:v(26)}),onReply:()=>{},replies:[(0,g.jsx)(l,{id:`c2`,author:{name:t(`story.comment_author_reviewer`),initials:`BS`},timestamp:(0,g.jsx)(m,{date:v(21)}),onReply:()=>{},replies:[(0,g.jsx)(l,{id:`c3`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,g.jsx)(m,{date:v(19)}),edited:!0,onReply:()=>{},children:t(`story.comment_body_nested`)},`c3`)],children:t(`story.comment_body_reviewer`)},`c2`),(0,g.jsx)(l,{id:`c4`,author:{name:t(`story.comment_author_ops`),initials:`MT`},timestamp:(0,g.jsx)(m,{date:v(3)}),onReply:()=>{},children:t(`story.comment_body_ops`)},`c4`)],children:t(`story.comment_body_lead`)})}},x={render:function(e){let{t}=r(s);return(0,g.jsx)(l,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,g.jsx)(m,{date:v(5)}),replyingTo:`c1`,onReply:()=>{},composer:(0,g.jsxs)(d,{gap:`sm`,align:`start`,children:[(0,g.jsx)(c,{label:t(`story.comment_composer_label`),placeholder:t(`story.comment_composer_placeholder`),rows:3}),(0,g.jsx)(f,{size:`sm`,children:t(`story.comment_composer_submit`)})]}),children:t(`story.comment_body_lead`)})}},S={render:function(e){let{t}=r(s);return(0,g.jsx)(l,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,g.jsx)(m,{date:v(5)}),editingId:`c1`,onEdit:()=>{},onDelete:()=>{},editor:(0,g.jsxs)(d,{gap:`sm`,align:`start`,children:[(0,g.jsx)(c,{label:t(`story.comment_editor_label`),defaultValue:t(`story.comment_body_lead`),rows:3}),(0,g.jsx)(f,{size:`sm`,children:t(`story.comment_editor_submit`)})]}),children:t(`story.comment_body_lead`)})}},C={render:function(e){let{t}=r(s);return(0,g.jsx)(l,{...e,id:`c1`,author:{name:t(`story.comment_author_ops`),initials:`MT`},timestamp:(0,g.jsx)(m,{date:v(48)}),edited:!0,children:t(`story.comment_body_ops`)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Comment {...args} id="c1" author={{
      name: t("story.comment_author_lead"),
      initials: "NO"
    }} timestamp={<RelativeTime date={hoursAgo(5)} />} onReply={() => {}}>
        {t("story.comment_body_lead")}
      </Comment>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Comment {...args} id="c1" author={{
      name: t("story.comment_author_lead"),
      initials: "NO",
      badge: <Tag size="sm">{t("story.comment_badge_author")}</Tag>
    }} timestamp={<RelativeTime date={hoursAgo(26)} />} onReply={() => {}} replies={[<Comment key="c2" id="c2" author={{
      name: t("story.comment_author_reviewer"),
      initials: "BS"
    }} timestamp={<RelativeTime date={hoursAgo(21)} />} onReply={() => {}} replies={[<Comment key="c3" id="c3" author={{
      name: t("story.comment_author_lead"),
      initials: "NO"
    }} timestamp={<RelativeTime date={hoursAgo(19)} />} edited onReply={() => {}}>
                {t("story.comment_body_nested")}
              </Comment>]}>
            {t("story.comment_body_reviewer")}
          </Comment>, <Comment key="c4" id="c4" author={{
      name: t("story.comment_author_ops"),
      initials: "MT"
    }} timestamp={<RelativeTime date={hoursAgo(3)} />} onReply={() => {}}>
            {t("story.comment_body_ops")}
          </Comment>]}>
        {t("story.comment_body_lead")}
      </Comment>;
  }
}`,...b.parameters?.docs?.source},description:{story:`返信の入れ子。**字下げだけでなく list として組む**ので、支援技術にも
深さが伝わる（読み上げは「リスト、項目 1 の 2」のように段を言う）。`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Comment {...args} id="c1" author={{
      name: t("story.comment_author_lead"),
      initials: "NO"
    }} timestamp={<RelativeTime date={hoursAgo(5)} />} replyingTo="c1" onReply={() => {}} composer={<Stack gap="sm" align="start">
            <Textarea label={t("story.comment_composer_label")} placeholder={t("story.comment_composer_placeholder")} rows={3} />
            <Button size="sm">{t("story.comment_composer_submit")}</Button>
          </Stack>}>
        {t("story.comment_body_lead")}
      </Comment>;
  }
}`,...x.parameters?.docs?.source},description:{story:"返信欄が開いている状態。**開いているかは `replyingTo` で外から渡す** ──\n下書きも送信もアプリの持ち物なので、ここは差し込み口だけ。",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Comment {...args} id="c1" author={{
      name: t("story.comment_author_lead"),
      initials: "NO"
    }} timestamp={<RelativeTime date={hoursAgo(5)} />} editingId="c1" onEdit={() => {}} onDelete={() => {}} editor={<Stack gap="sm" align="start">
            <Textarea label={t("story.comment_editor_label")} defaultValue={t("story.comment_body_lead")} rows={3} />
            <Button size="sm">{t("story.comment_editor_submit")}</Button>
          </Stack>}>
        {t("story.comment_body_lead")}
      </Comment>;
  }
}`,...S.parameters?.docs?.source},description:{story:`編集中。**本文は差し替える** ── 本文と編集欄を並べると、どちらが今の内容か
読み手に分からなくなる。`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Comment {...args} id="c1" author={{
      name: t("story.comment_author_ops"),
      initials: "MT"
    }} timestamp={<RelativeTime date={hoursAgo(48)} />} edited>
        {t("story.comment_body_ops")}
      </Comment>;
  }
}`,...C.parameters?.docs?.source},description:{story:`読むだけの状態（コールバックを 1 つも渡さない）。操作の行そのものが出ない
ので、押せないボタンが並ぶことがない。`,...C.parameters?.docs?.description}}},w=[`Default`,`Thread`,`Replying`,`Editing`,`ReadOnly`]}));T();export{y as Default,S as Editing,C as ReadOnly,x as Replying,b as Thread,w as __namedExportsOrder,_ as default,T as n,h as t};