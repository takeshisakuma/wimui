"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./ImageCropper-CIOqgjbD.js";var i=e({Circular:()=>c,Default:()=>o,Landscape:()=>s,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=t((()=>{n(),a={title:`Components/Advanced Inputs/ImageCropper`,component:r,parameters:{layout:`centered`},argTypes:{showApplyButton:{control:`boolean`},showRotation:{control:`boolean`},showZoom:{control:`boolean`},aspectRatio:{control:`number`}}},o={args:{src:`./images/sample-landscape.png`,aspectRatio:1,onCrop:e=>console.log(`Cropped data:`,e),onApply:e=>console.log(`Applied crop:`,e)}},s={args:{src:`./images/sample-landscape.png`,aspectRatio:16/9,onApply:e=>console.log(`Applied landscape crop:`,e)}},c={args:{src:`./images/sample-landscape.png`,aspectRatio:1,circular:!0,onApply:e=>console.log(`Applied circular crop:`,e)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    onCrop: data => console.log("Cropped data:", data),
    onApply: data => console.log("Applied crop:", data)
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 16 / 9,
    onApply: data => console.log("Applied landscape crop:", data)
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    circular: true,
    onApply: data => console.log("Applied circular crop:", data)
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Landscape`,`Circular`]}));u();export{c as Circular,o as Default,s as Landscape,l as __namedExportsOrder,a as default,u as n,i as t};