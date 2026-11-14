"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-DbPgW6Wr.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Group-tKRHS_M5.js";import{n as u,t as d}from"./Stack-SbfzwNKR.js";import{a as f,i as p,n as m,r as h,t as g}from"./Card-BF_Jnhw6.js";import{n as _,t as v}from"./Button-Drq-Mw-h.js";import{n as y,t as b}from"./Text-D9yqbrao.js";var x=t({Default:()=>w,Elevated:()=>T,Flat:()=>D,LinkCard:()=>k,Outline:()=>E,WithHeaderAndFooter:()=>O,__namedExportsOrder:()=>A,default:()=>C}),S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),i(),a(),_(),m(),c(),u(),y(),f(),S=s(),C={title:`Components/Data Containers/Card`,component:g,tags:[],parameters:{layout:`padded`},decorators:[e=>(0,S.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`32px`},children:(0,S.jsx)(e,{})})],argTypes:{variant:{control:`select`,options:[`elevated`,`outline`,`flat`]},padding:{control:`select`,options:[...h]},radius:{control:`select`,options:[...p]}}},w={render:function(e){let{t}=r(o);return(0,S.jsx)(g,{...e,children:(0,S.jsxs)(g.Body,{children:[(0,S.jsx)(`h3`,{children:t(`story.card_default_title`)}),(0,S.jsx)(`p`,{children:t(`story.card_default_desc`)})]})})},args:{style:{width:`300px`}}},T={render:function(e){let{t}=r(o);return(0,S.jsx)(g,{...e,children:(0,S.jsxs)(g.Body,{children:[(0,S.jsx)(`h3`,{children:t(`story.card_elevated_title`)}),(0,S.jsx)(`p`,{children:t(`story.card_elevated_desc`)})]})})},args:{variant:`elevated`,style:{width:`300px`}}},E={render:function(e){let{t}=r(o);return(0,S.jsx)(g,{...e,children:(0,S.jsxs)(g.Body,{children:[(0,S.jsx)(`h3`,{children:t(`story.card_outline_title`)}),(0,S.jsx)(`p`,{children:t(`story.card_outline_desc`)})]})})},args:{variant:`outline`,style:{width:`300px`}}},D={render:function(e){let{t}=r(o);return(0,S.jsx)(g,{...e,children:(0,S.jsxs)(g.Body,{children:[(0,S.jsx)(`h3`,{children:t(`story.card_flat_title`)}),(0,S.jsx)(`p`,{children:t(`story.card_flat_desc`)})]})})},args:{variant:`flat`,style:{width:`300px`}}},O={render:function(e){let{t}=r(o);return(0,S.jsxs)(g,{...e,style:{width:`400px`},children:[(0,S.jsx)(g.Header,{children:(0,S.jsx)(`h4`,{style:{margin:0},children:t(`story.card_header_title`)})}),(0,S.jsx)(g.Body,{children:(0,S.jsx)(`p`,{children:t(`story.card_body_text`)})}),(0,S.jsx)(g.Footer,{children:(0,S.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,S.jsx)(v,{variant:`outline`,size:`sm`,children:t(`story.card_cancel`)}),(0,S.jsx)(v,{variant:`solid`,size:`sm`,children:t(`story.card_save`)})]})})]})},args:{variant:`elevated`}},k={render:function(){let{t:e}=r(o);return(0,S.jsxs)(d,{gap:`sm`,children:[(0,S.jsx)(g,{interactive:!0,children:(0,S.jsxs)(l,{justify:`between`,align:`center`,gap:`md`,children:[(0,S.jsxs)(d,{gap:`2xs`,children:[(0,S.jsx)(g.Link,{href:`#order-4281`,children:e(`story.card_link_order_1`)}),(0,S.jsx)(b,{size:`sm`,color:`text-secondary`,children:e(`story.card_link_order_1_meta`)})]}),(0,S.jsx)(v,{variant:`outline`,size:`sm`,children:e(`story.card_link_buy_again`)})]})}),(0,S.jsx)(g,{interactive:!0,children:(0,S.jsxs)(d,{gap:`2xs`,children:[(0,S.jsx)(g.Link,{href:`#order-4307`,children:e(`story.card_link_order_2`)}),(0,S.jsx)(b,{size:`sm`,color:`text-secondary`,children:e(`story.card_link_order_2_meta`)})]})})]})}},A=[`Default`,`Elevated`,`Outline`,`Flat`,`WithHeaderAndFooter`,`LinkCard`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_default_title")}</h3>
          <p>{t("story.card_default_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    style: {
      width: "300px"
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_elevated_title")}</h3>
          <p>{t("story.card_elevated_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "elevated",
    style: {
      width: "300px"
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_outline_title")}</h3>
          <p>{t("story.card_outline_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "outline",
    style: {
      width: "300px"
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args}>
        <Card.Body>
          <h3>{t("story.card_flat_title")}</h3>
          <p>{t("story.card_flat_desc")}</p>
        </Card.Body>
      </Card>;
  },
  args: {
    variant: "flat",
    style: {
      width: "300px"
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card {...args} style={{
      width: "400px"
    }}>
        <Card.Header>
          <h4 style={{
          margin: 0
        }}>{t("story.card_header_title")}</h4>
        </Card.Header>
        <Card.Body>
          <p>{t("story.card_body_text")}</p>
        </Card.Body>
        <Card.Footer>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <Button variant="outline" size="sm">{t("story.card_cancel")}</Button>
            <Button variant="solid" size="sm">{t("story.card_save")}</Button>
          </div>
        </Card.Footer>
      </Card>;
  },
  args: {
    variant: "elevated"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="sm">
        <Card interactive>
          <Group justify="between" align="center" gap="md">
            <Stack gap="2xs">
              <Card.Link href="#order-4281">{t("story.card_link_order_1")}</Card.Link>
              <Text size="sm" color="text-secondary">
                {t("story.card_link_order_1_meta")}
              </Text>
            </Stack>
            <Button variant="outline" size="sm">
              {t("story.card_link_buy_again")}
            </Button>
          </Group>
        </Card>
        <Card interactive>
          <Stack gap="2xs">
            <Card.Link href="#order-4307">{t("story.card_link_order_2")}</Card.Link>
            <Text size="sm" color="text-secondary">
              {t("story.card_link_order_2_meta")}
            </Text>
          </Stack>
        </Card>
      </Stack>;
  }
}`,...k.parameters?.docs?.source},description:{story:"カード全体が押せるリンク（T365・`Card.Link`）。題のリンクがカード全体に広がり、\n「もう一度買う」は別に押せる（リンクの中にボタンを入れ子にしない）。2 枚目はボタンを持たない。",...k.parameters?.docs?.description}}}})))()}export{k as a,j as c,D as i,w as n,E as o,T as r,O as s,x as t};