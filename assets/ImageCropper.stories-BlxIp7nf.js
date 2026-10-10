"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-CrCPoxQ1.js";import{n as u,t as d}from"./Text-1X1ZsZfu.js";import{n as f,t as p}from"./ImageCropper-DwRWslG1.js";var m=t({Circular:()=>b,CropResult:()=>x,Default:()=>v,Landscape:()=>y,__namedExportsOrder:()=>S,default:()=>_}),h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{h=n(),i(),c(),u(),f(),a(),g=s(),_={title:`Components/Advanced Inputs/ImageCropper`,component:p,parameters:{layout:`centered`},argTypes:{showApplyButton:{control:`boolean`},showRotation:{control:`boolean`},showZoom:{control:`boolean`},aspectRatio:{control:`number`}}},v={args:{src:`./images/sample-landscape.png`,aspectRatio:1,onCrop:e=>console.log(`Cropped data:`,e),onApply:e=>console.log(`Applied crop:`,e)}},y={args:{src:`./images/sample-landscape.png`,aspectRatio:16/9,onApply:e=>console.log(`Applied landscape crop:`,e)}},b={args:{src:`./images/sample-landscape.png`,aspectRatio:1,circular:!0,onApply:e=>console.log(`Applied circular crop:`,e)}},x={args:{src:`./images/sample-landscape.png`,aspectRatio:1},render:function(e){let{t}=r(o),[n,i]=(0,h.useState)(null);return(0,g.jsxs)(l,{gap:`md`,children:[(0,g.jsx)(p,{...e,onApply:(e,t)=>i({dataUrl:e,detail:t})}),n&&(0,g.jsxs)(l,{gap:`sm`,children:[(0,g.jsx)(`img`,{src:n.dataUrl,alt:t(`story.imagecropper_result_alt`),"data-testid":`crop-output`}),(0,g.jsx)(d,{size:`sm`,"data-testid":`crop-detail`,"data-detail":JSON.stringify(n.detail),children:t(`story.imagecropper_result_size`,{width:n.detail.width,height:n.detail.height})})]})]})}},S=[`Default`,`Landscape`,`Circular`,`CropResult`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    onCrop: data => console.log("Cropped data:", data),
    onApply: data => console.log("Applied crop:", data)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 16 / 9,
    onApply: data => console.log("Applied landscape crop:", data)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    circular: true,
    onApply: data => console.log("Applied circular crop:", data)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [result, setResult] = useState<{
      dataUrl: string;
      detail: ImageCropDetail;
    } | null>(null);
    return <Stack gap="md">
        <ImageCropper {...args} onApply={(dataUrl, detail) => setResult({
        dataUrl,
        detail
      })} />
        {result && <Stack gap="sm">
            <img src={result.dataUrl} alt={t("story.imagecropper_result_alt")} data-testid="crop-output" />
            <Text size="sm" data-testid="crop-detail" data-detail={JSON.stringify(result.detail)}>
              {t("story.imagecropper_result_size", {
            width: result.detail.width,
            height: result.detail.height
          })}
            </Text>
          </Stack>}
      </Stack>;
  }
}`,...x.parameters?.docs?.source},description:{story:"切り抜いた結果を、その場に出す。`onApply` には、切り抜いた画像（data URL）と、切り抜きの数値が渡る。\n出力は元の画像の解像度で、`maxOutputSize` で長いほうの辺の上限を決められる。",...x.parameters?.docs?.description}}}})))()}export{y as a,m as i,x as n,C as o,v as r,b as t};