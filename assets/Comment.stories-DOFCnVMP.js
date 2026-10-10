"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-CrCPoxQ1.js";import{n as u,t as d}from"./Button-DSrkNfg0.js";import{n as f,t as p}from"./Textarea-ioORUD2t.js";import{n as m,t as h}from"./Tag-Cp5Yzadp.js";import{n as g,t as _}from"./RelativeTime-D3PLCLab.js";import{n as v,t as y}from"./Comment-CTg2EZZu.js";var b=t({Default:()=>w,Editing:()=>D,ReadOnly:()=>O,Replying:()=>E,Thread:()=>T,__namedExportsOrder:()=>k,default:()=>S}),x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),i(),a(),v(),g(),m(),u(),f(),c(),x=s(),S={title:`Components/Data-display/Comment`,component:y,parameters:{layout:`padded`}},C=e=>new Date(Date.now()-e*36e5),w={render:function(e){let{t}=r(o);return(0,x.jsx)(y,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,x.jsx)(_,{date:C(5)}),onReply:()=>{},children:t(`story.comment_body_lead`)})}},T={render:function(e){let{t}=r(o);return(0,x.jsx)(y,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`,badge:(0,x.jsx)(h,{size:`sm`,children:t(`story.comment_badge_author`)})},timestamp:(0,x.jsx)(_,{date:C(26)}),onReply:()=>{},replies:[(0,x.jsx)(y,{id:`c2`,author:{name:t(`story.comment_author_reviewer`),initials:`BS`},timestamp:(0,x.jsx)(_,{date:C(21)}),onReply:()=>{},replies:[(0,x.jsx)(y,{id:`c3`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,x.jsx)(_,{date:C(19)}),edited:!0,onReply:()=>{},children:t(`story.comment_body_nested`)},`c3`)],children:t(`story.comment_body_reviewer`)},`c2`),(0,x.jsx)(y,{id:`c4`,author:{name:t(`story.comment_author_ops`),initials:`MT`},timestamp:(0,x.jsx)(_,{date:C(3)}),onReply:()=>{},children:t(`story.comment_body_ops`)},`c4`)],children:t(`story.comment_body_lead`)})}},E={render:function(e){let{t}=r(o);return(0,x.jsx)(y,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,x.jsx)(_,{date:C(5)}),replyingTo:`c1`,onReply:()=>{},composer:(0,x.jsxs)(l,{gap:`sm`,align:`start`,children:[(0,x.jsx)(p,{label:t(`story.comment_composer_label`),placeholder:t(`story.comment_composer_placeholder`),rows:3}),(0,x.jsx)(d,{size:`sm`,children:t(`story.comment_composer_submit`)})]}),children:t(`story.comment_body_lead`)})}},D={render:function(e){let{t}=r(o);return(0,x.jsx)(y,{...e,id:`c1`,author:{name:t(`story.comment_author_lead`),initials:`NO`},timestamp:(0,x.jsx)(_,{date:C(5)}),editingId:`c1`,onEdit:()=>{},onDelete:()=>{},editor:(0,x.jsxs)(l,{gap:`sm`,align:`start`,children:[(0,x.jsx)(p,{label:t(`story.comment_editor_label`),defaultValue:t(`story.comment_body_lead`),rows:3}),(0,x.jsx)(d,{size:`sm`,children:t(`story.comment_editor_submit`)})]}),children:t(`story.comment_body_lead`)})}},O={render:function(e){let{t}=r(o);return(0,x.jsx)(y,{...e,id:`c1`,author:{name:t(`story.comment_author_ops`),initials:`MT`},timestamp:(0,x.jsx)(_,{date:C(48)}),edited:!0,children:t(`story.comment_body_ops`)})}},k=[`Default`,`Thread`,`Replying`,`Editing`,`ReadOnly`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`返信の入れ子。**字下げだけでなく list として組む**ので、支援技術にも
深さが伝わる（読み上げは「リスト、項目 1 の 2」のように段を言う）。`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"返信欄が開いている状態。**開いているかは `replyingTo` で外から渡す** ──\n下書きも送信もアプリの持ち物なので、ここは差し込み口だけ。",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`編集中。**本文は差し替える** ── 本文と編集欄を並べると、どちらが今の内容か
読み手に分からなくなる。`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`読むだけの状態（コールバックを 1 つも渡さない）。操作の行そのものが出ない
ので、押せないボタンが並ぶことがない。`,...O.parameters?.docs?.description}}}})))()}export{A as n,b as t};