"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-CpMdOj2B.js";import{n as i,t as a}from"./i18nConstants-YD8z3mm4.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./Group-tKRHS_M5.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Title-DbsxqXW4.js";import{n as p,t as m}from"./Text-D9yqbrao.js";import{n as h,t as g}from"./Input-DdAacezo.js";import{n as _,t as v}from"./Table-DFHDFQyw.js";import{n as y,t as b}from"./AILabel-B4xGf6I0.js";var x=t({Default:()=>w,InField:()=>T,InTableCell:()=>E,Open:()=>O,Sizes:()=>D,__namedExportsOrder:()=>k,default:()=>C}),S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),i(),y(),h(),_(),s(),l(),d(),p(),S=o(),C={title:`Components/AI/AILabel`,component:b,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placement:{control:`select`,options:[`bottom-start`,`bottom`,`bottom-end`,`top-start`,`top`,`top-end`]}}},w={render:function(e){let{t}=n(a);return(0,S.jsxs)(u,{gap:`xs`,style:{maxWidth:`26rem`},children:[(0,S.jsxs)(f,{size:`md`,children:[t(`story.ai_label_heading`),` `,(0,S.jsx)(b,{...e,children:t(`story.ai_label_summary_explanation`)})]}),(0,S.jsx)(m,{size:`sm`,children:t(`story.ai_label_summary`)})]})}},T={render:function(){let{t:e}=n(a);return(0,S.jsx)(g,{label:e(`story.ai_label_field_label`),defaultValue:e(`story.ai_label_field_value`),width:`md`,suffix:(0,S.jsx)(b,{size:`sm`,children:e(`story.ai_label_field_explanation`)})})}},E={parameters:{layout:`padded`},render:function(){let{t:e}=n(a);return(0,S.jsxs)(v,{children:[(0,S.jsx)(v.Header,{children:(0,S.jsxs)(v.Row,{children:[(0,S.jsx)(v.Head,{children:e(`story.ai_label_col_merchant`)}),(0,S.jsx)(v.Head,{children:e(`story.ai_label_col_category`)}),(0,S.jsx)(v.Head,{children:e(`story.ai_label_col_amount`)})]})}),(0,S.jsx)(v.Body,{children:[{merchant:`ai_label_merchant_hotel`,category:`ai_label_cat_lodging`,amount:`¥8,900`,ai:!0},{merchant:`ai_label_merchant_rail`,category:`ai_label_cat_train`,amount:`¥11,210`,ai:!1},{merchant:`ai_label_merchant_cafe`,category:`ai_label_cat_meals`,amount:`¥1,340`,ai:!0}].map(t=>(0,S.jsxs)(v.Row,{children:[(0,S.jsx)(v.Cell,{children:e(`story.${t.merchant}`)}),(0,S.jsxs)(v.Cell,{children:[e(`story.${t.category}`),` `,t.ai&&(0,S.jsx)(b,{size:`sm`,children:e(`story.ai_label_cell_explanation`)})]}),(0,S.jsx)(v.Cell,{children:t.amount})]},t.merchant))})]})}},D={render:function(){let{t:e}=n(a);return(0,S.jsxs)(c,{gap:`md`,align:`center`,children:[(0,S.jsx)(b,{size:`sm`,children:e(`story.ai_label_summary_explanation`)}),(0,S.jsx)(b,{size:`md`,children:e(`story.ai_label_summary_explanation`)}),(0,S.jsx)(b,{size:`lg`,children:e(`story.ai_label_summary_explanation`)})]})}},O={...w,tags:[`!autodocs`],parameters:{docs:{disable:!0}},args:{defaultOpen:!0}},k=[`Default`,`InField`,`InTableCell`,`Sizes`,`Open`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xs" style={{
      maxWidth: "26rem"
    }}>
        {/* 印は見出しの中に置く（Title は幅いっぱいの塊なので、横に並べると次の行へ落ちる） */}
        <Title size="md">
          {t("story.ai_label_heading")}{" "}
          <AILabel {...args}>{t("story.ai_label_summary_explanation")}</AILabel>
        </Title>
        <Text size="sm">{t("story.ai_label_summary")}</Text>
      </Stack>;
  }
}`,...w.parameters?.docs?.source},description:{story:`見出しの隣に置く。印は文章の中身より声量を下げ、押すと、何から何を作ったかが開く。`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Input label={t("story.ai_label_field_label")} defaultValue={t("story.ai_label_field_value")} width="md" suffix={<AILabel size="sm">{t("story.ai_label_field_explanation")}</AILabel>} />;
  }
}`,...T.parameters?.docs?.source},description:{story:"入力欄の中（`Input` の `suffix`）に置く。欄の説明として「AI が作成」も読まれる。",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const rows = [{
      merchant: "ai_label_merchant_hotel",
      category: "ai_label_cat_lodging",
      amount: "¥8,900",
      ai: true
    }, {
      merchant: "ai_label_merchant_rail",
      category: "ai_label_cat_train",
      amount: "¥11,210",
      ai: false
    }, {
      merchant: "ai_label_merchant_cafe",
      category: "ai_label_cat_meals",
      amount: "¥1,340",
      ai: true
    }];
    return <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.ai_label_col_merchant")}</Table.Head>
            <Table.Head>{t("story.ai_label_col_category")}</Table.Head>
            <Table.Head>{t("story.ai_label_col_amount")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map(row => <Table.Row key={row.merchant}>
              <Table.Cell>{t(\`story.\${row.merchant}\`)}</Table.Cell>
              <Table.Cell>
                {t(\`story.\${row.category}\`)}{" "}
                {row.ai && <AILabel size="sm">{t("story.ai_label_cell_explanation")}</AILabel>}
              </Table.Cell>
              <Table.Cell>{row.amount}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...E.parameters?.docs?.source},description:{story:`表のセルの中に置く。AI が埋めた値の行にだけ付ける（人が入れた値には付けない）。`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group gap="md" align="center">
        <AILabel size="sm">{t("story.ai_label_summary_explanation")}</AILabel>
        <AILabel size="md">{t("story.ai_label_summary_explanation")}</AILabel>
        <AILabel size="lg">{t("story.ai_label_summary_explanation")}</AILabel>
      </Group>;
  }
}`,...D.parameters?.docs?.source},description:{story:"3 つの大きさ。`sm` は入力欄とセルの中、`md` は見出しの隣、`lg` は大きな見出しの隣。",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Default,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      disable: true
    }
  },
  args: {
    defaultOpen: true
  }
}`,...O.parameters?.docs?.source}}}})))()}export{D as a,E as i,w as n,A as o,T as r,x as t};