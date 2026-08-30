"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{t as s}from"./src-CV0le6yM.js";import{t as c}from"./Icon-DKSRBrcV.js";import{a as l,c as u,i as d,l as f,o as p,s as m,u as h}from"./ThoughtProcess-9NXwgSV-.js";var g=e({Alternate:()=>b,LeftAligned:()=>y,WithIcons:()=>x,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S,C=t((()=>{a(),r(),s(),_=i(),v={title:`Components/Data Structures/Timeline`,component:d},y={args:{align:`left`},render:function(e){let{t}=n(o);return(0,_.jsxs)(d,{...e,children:[(0,_.jsxs)(m,{children:[(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`primary`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_eat`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`neutral`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_code`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`success`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_sleep`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(h,{children:(0,_.jsx)(f,{})}),(0,_.jsx)(p,{children:t(`story.timeline_repeat`)})]})]})}},b={args:{align:`alternate`},render:function(e){let{t}=n(o);return(0,_.jsxs)(d,{...e,children:[(0,_.jsxs)(m,{children:[(0,_.jsx)(u,{children:`09:00 AM`}),(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`primary`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_eat`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(u,{children:`10:00 AM`}),(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`neutral`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_code`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(u,{children:`12:00 PM`}),(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`success`}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_sleep`)})]})]})}},x={render:function(e){let{t}=n(o);return(0,_.jsxs)(d,{...e,children:[(0,_.jsxs)(m,{children:[(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`primary`,children:(0,_.jsx)(c,{name:`CheckIcon`,size:`sm`})}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_step1_comp`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsxs)(h,{children:[(0,_.jsx)(f,{intent:`neutral`,children:(0,_.jsx)(c,{name:`CircleIcon`,size:`sm`})}),(0,_.jsx)(l,{})]}),(0,_.jsx)(p,{children:t(`story.timeline_step2_proc`)})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(h,{children:(0,_.jsx)(f,{intent:`danger`,children:(0,_.jsx)(c,{name:`CloseIcon`,size:`sm`})})}),(0,_.jsx)(p,{children:t(`story.timeline_step3_err`)})]})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`LeftAligned`,`Alternate`,`WithIcons`]}));C();export{b as Alternate,y as LeftAligned,x as WithIcons,S as __namedExportsOrder,v as default,C as n,g as t};