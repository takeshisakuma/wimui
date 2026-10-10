"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Icon-TGLZuM2d.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./Timeline-DJklBW06.js";var _=t({Alternate:()=>x,LeftAligned:()=>b,WithIcons:()=>S,__namedExportsOrder:()=>C,default:()=>y}),v,y,b,x,S,C;function w(){return(w=e((()=>{r(),i(),s(),u(),v=o(),y={title:`Components/Data Structures/Timeline`,component:g},b={args:{align:`left`},render:function(e){let{t}=n(a);return(0,v.jsxs)(g,{...e,children:[(0,v.jsxs)(d,{children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`primary`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_eat`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`neutral`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_code`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`success`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_sleep`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(p,{})}),(0,v.jsx)(m,{children:t(`story.timeline_repeat`)})]})]})}},x={args:{align:`alternate`},render:function(e){let{t}=n(a);return(0,v.jsxs)(g,{...e,children:[(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{children:`09:00 AM`}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`primary`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_eat`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{children:`10:00 AM`}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`neutral`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_code`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{children:`12:00 PM`}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`success`}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_sleep`)})]})]})}},S={render:function(e){let{t}=n(a);return(0,v.jsxs)(g,{...e,children:[(0,v.jsxs)(d,{children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`primary`,children:(0,v.jsx)(c,{name:`CheckIcon`,size:`sm`})}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_step1_comp`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{intent:`neutral`,children:(0,v.jsx)(c,{name:`CircleIcon`,size:`sm`})}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:t(`story.timeline_step2_proc`)})]}),(0,v.jsxs)(d,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(p,{intent:`danger`,children:(0,v.jsx)(c,{name:`CloseIcon`,size:`sm`})})}),(0,v.jsx)(m,{children:t(`story.timeline_step3_err`)})]})]})}},C=[`LeftAligned`,`Alternate`,`WithIcons`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    align: "left"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="neutral" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_repeat")}</TimelineContent>
        </TimelineItem>
      </Timeline>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    align: "alternate"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="neutral" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
      </Timeline>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="primary">
              <Icon name="CheckIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step1_comp")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="neutral">
              <Icon name="CircleIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step2_proc")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="danger">
              <Icon name="CloseIcon" size="sm" />
            </TimelinePoint>
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step3_err")}</TimelineContent>
        </TimelineItem>
      </Timeline>;
  }
}`,...S.parameters?.docs?.source}}}})))()}export{w as a,S as i,b as n,_ as r,x as t};