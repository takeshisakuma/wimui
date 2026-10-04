"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-D0pTsuU-.js";import{n as u,t as d}from"./Card-BX8yw3HV.js";import{n as f,t as p}from"./Text-8oARqUeB.js";import{n as m,t as h}from"./Barcode-BIXFAqP5.js";var g=t({Default:()=>y,Formats:()=>b,Realistic:()=>C,Unencodable:()=>S,WithoutPrintedValue:()=>x,__namedExportsOrder:()=>w,default:()=>v}),_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),n(),a(),m(),u(),c(),f(),_=s(),v={title:`Components/Data Indicators/Barcode`,component:h,parameters:{layout:`padded`},argTypes:{format:{control:`radio`,options:[`code128`,`ean13`]},showValue:{control:`boolean`},height:{control:{type:`range`,min:32,max:128,step:8}},moduleWidth:{control:{type:`range`,min:1,max:4,step:1}}}},y={args:{value:`WIM-4829-KT`,format:`code128`}},b={render:function(e){let{t}=r(o);return(0,_.jsxs)(l,{gap:`xl`,children:[(0,_.jsxs)(l,{gap:`2xs`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_code128`)}),(0,_.jsx)(h,{...e,value:`1Z999AA10123456784`,format:`code128`})]}),(0,_.jsxs)(l,{gap:`2xs`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_ean13`)}),(0,_.jsx)(h,{...e,value:`490177701868`,format:`ean13`})]})]})}},x={render:function(e){let{t}=r(o);return(0,_.jsxs)(l,{gap:`2xs`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_bare`)}),(0,_.jsx)(h,{...e,value:`SKU-77120`,showValue:!1,height:40})]})}},S={render:function(e){let{t}=r(o);return(0,_.jsxs)(l,{gap:`2xs`,w:`20rem`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_invalid`)}),(0,_.jsx)(h,{...e,value:`4901777018680`,format:`ean13`})]})}},C={render:function(){let{t:e}=r(o);return(0,_.jsx)(d,{variant:`outline`,children:(0,_.jsxs)(l,{gap:`lg`,w:`21rem`,children:[(0,_.jsxs)(l,{gap:`3xs`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`story.barcode_receipt_service`)}),(0,_.jsxs)(l,{direction:`row`,gap:`xs`,align:`baseline`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_to`)}),(0,_.jsx)(p,{size:`sm`,weight:`medium`,truncate:!0,children:e(`story.barcode_receipt_recipient`)})]}),(0,_.jsx)(p,{size:`xs`,color:`text-secondary`,truncate:!0,children:e(`story.barcode_receipt_address`)})]}),(0,_.jsxs)(l,{gap:`2xs`,children:[(0,_.jsx)(p,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_tracking`)}),(0,_.jsx)(h,{value:`464927180355`,format:`code128`,height:72})]}),(0,_.jsx)(p,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_dropped`)})]})})}},w=[`Default`,`Formats`,`WithoutPrintedValue`,`Unencodable`,`Realistic`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: "WIM-4829-KT",
    format: "code128"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args: BarcodeProps) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xl">
        <Stack gap="2xs">
          <Text size="xs" color="text-secondary">
            {t("story.barcode_caption_code128")}
          </Text>
          <Barcode {...args} value="1Z999AA10123456784" format="code128" />
        </Stack>
        <Stack gap="2xs">
          <Text size="xs" color="text-secondary">
            {t("story.barcode_caption_ean13")}
          </Text>
          <Barcode {...args} value="490177701868" format="ean13" />
        </Stack>
      </Stack>;
  }
}`,...b.parameters?.docs?.source},description:{story:`どちらを使うかは**読む側の道具**で決まる。Code 128 は ASCII をそのまま載せられ、
EAN-13 は 13 桁の商品コード専用（12 桁を渡せばチェックディジットは計算される）。`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args: BarcodeProps) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="2xs">
        <Text size="xs" color="text-secondary">
          {t("story.barcode_caption_bare")}
        </Text>
        <Barcode {...args} value="SKU-77120" showValue={false} height={40} />
      </Stack>;
  }
}`,...x.parameters?.docs?.source},description:{story:`表の行や棚札のように、数字を別の列で持っている場所では印字を落とす。
見た目から消えてもアクセシブル名は値を持ったままなので、読み上げは変わらない。`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args: BarcodeProps) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="2xs" w="20rem">
        <Text size="xs" color="text-secondary">
          {t("story.barcode_caption_invalid")}
        </Text>
        <Barcode {...args} value="4901777018680" format="ean13" />
      </Stack>;
  }
}`,...S.parameters?.docs?.source},description:{story:`表現できない値は描かない。ここでは EAN-13 の 13 桁目が合っていない
（\`490177701868\` の正しいチェックディジットは 6）。近い形で描くと、
**読めるのに別の商品を指すバーコード**になる。`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card variant="outline">
        <Stack gap="lg" w="21rem">
          <Stack gap="3xs">
            <Text size="xs" color="text-secondary">
              {t("story.barcode_receipt_service")}
            </Text>
            <Stack direction="row" gap="xs" align="baseline">
              <Text size="xs" color="text-tertiary">
                {t("story.barcode_receipt_to")}
              </Text>
              <Text size="sm" weight="medium" truncate>
                {t("story.barcode_receipt_recipient")}
              </Text>
            </Stack>
            <Text size="xs" color="text-secondary" truncate>
              {t("story.barcode_receipt_address")}
            </Text>
          </Stack>

          <Stack gap="2xs">
            <Text size="xs" color="text-tertiary">
              {t("story.barcode_receipt_tracking")}
            </Text>
            <Barcode value="464927180355" format="code128" height={72} />
          </Stack>

          <Text size="xs" color="text-tertiary">
            {t("story.barcode_receipt_dropped")}
          </Text>
        </Stack>
      </Card>;
  }
}`,...C.parameters?.docs?.source},description:{story:`コンビニで受け付けた宅配便の控え。**主役は追跡番号のシンボル 1 つ**で、
宛先も受付時刻もその周りの小さな文字に落としてある。住所は 1 行に収まらず
切れる ── 控えは幅が決まっていて、住所は決まっていない。`,...C.parameters?.docs?.description}}}})))()}export{S as a,C as i,y as n,x as o,b as r,T as s,g as t};