"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Q as c,t as l}from"./src-CV0le6yM.js";import{t as u}from"./Stack-z584y6QE.js";import{t as d}from"./Card-BT1d9WN9.js";import{t as f}from"./Text-CLDfz7UT.js";var p=e({Default:()=>g,Formats:()=>_,Realistic:()=>b,Unencodable:()=>y,WithoutPrintedValue:()=>v,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{o(),n(),i(),l(),m=a(),h={title:`Components/Data Indicators/Barcode`,component:c,parameters:{layout:`padded`},argTypes:{format:{control:`radio`,options:[`code128`,`ean13`]},showValue:{control:`boolean`},height:{control:{type:`range`,min:32,max:128,step:8}},moduleWidth:{control:{type:`range`,min:1,max:4,step:1}}}},g={args:{value:`WIM-4829-KT`,format:`code128`}},_={render:function(e){let{t}=r(s);return(0,m.jsxs)(u,{gap:`xl`,children:[(0,m.jsxs)(u,{gap:`2xs`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_code128`)}),(0,m.jsx)(c,{...e,value:`1Z999AA10123456784`,format:`code128`})]}),(0,m.jsxs)(u,{gap:`2xs`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_ean13`)}),(0,m.jsx)(c,{...e,value:`490177701868`,format:`ean13`})]})]})}},v={render:function(e){let{t}=r(s);return(0,m.jsxs)(u,{gap:`2xs`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_bare`)}),(0,m.jsx)(c,{...e,value:`SKU-77120`,showValue:!1,height:40})]})}},y={render:function(e){let{t}=r(s);return(0,m.jsxs)(u,{gap:`2xs`,w:`20rem`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:t(`story.barcode_caption_invalid`)}),(0,m.jsx)(c,{...e,value:`4901777018680`,format:`ean13`})]})}},b={render:function(){let{t:e}=r(s);return(0,m.jsx)(d,{variant:`outline`,children:(0,m.jsxs)(u,{gap:`lg`,w:`21rem`,children:[(0,m.jsxs)(u,{gap:`3xs`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,children:e(`story.barcode_receipt_service`)}),(0,m.jsxs)(u,{direction:`row`,gap:`xs`,align:`baseline`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_to`)}),(0,m.jsx)(f,{size:`sm`,weight:`medium`,truncate:!0,children:e(`story.barcode_receipt_recipient`)})]}),(0,m.jsx)(f,{size:`xs`,color:`text-secondary`,truncate:!0,children:e(`story.barcode_receipt_address`)})]}),(0,m.jsxs)(u,{gap:`2xs`,children:[(0,m.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_tracking`)}),(0,m.jsx)(c,{value:`464927180355`,format:`code128`,height:72})]}),(0,m.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(`story.barcode_receipt_dropped`)})]})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: "WIM-4829-KT",
    format: "code128"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`どちらを使うかは**読む側の道具**で決まる。Code 128 は ASCII をそのまま載せられ、
EAN-13 は 13 桁の商品コード専用（12 桁を渡せばチェックディジットは計算される）。`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`表の行や棚札のように、数字を別の列で持っている場所では印字を落とす。
見た目から消えてもアクセシブル名は値を持ったままなので、読み上げは変わらない。`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`表現できない値は描かない。ここでは EAN-13 の 13 桁目が合っていない
（\`490177701868\` の正しいチェックディジットは 6）。近い形で描くと、
**読めるのに別の商品を指すバーコード**になる。`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`コンビニで受け付けた宅配便の控え。**主役は追跡番号のシンボル 1 つ**で、
宛先も受付時刻もその周りの小さな文字に落としてある。住所は 1 行に収まらず
切れる ── 控えは幅が決まっていて、住所は決まっていない。`,...b.parameters?.docs?.description}}},x=[`Default`,`Formats`,`WithoutPrintedValue`,`Unencodable`,`Realistic`]}));S();export{g as Default,_ as Formats,b as Realistic,y as Unencodable,v as WithoutPrintedValue,x as __namedExportsOrder,h as default,S as n,p as t};