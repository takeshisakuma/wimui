"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./ImageCropper-nG8ZlQcM.js";var i=t({Circular:()=>c,Default:()=>o,Landscape:()=>s,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l;function u(){return(u=e((()=>{n(),a={title:`Components/Advanced Inputs/ImageCropper`,component:r,parameters:{layout:`centered`},argTypes:{showApplyButton:{control:`boolean`},showRotation:{control:`boolean`},showZoom:{control:`boolean`},aspectRatio:{control:`number`}}},o={args:{src:`./images/sample-landscape.png`,aspectRatio:1,onCrop:e=>console.log(`Cropped data:`,e),onApply:e=>console.log(`Applied crop:`,e)}},s={args:{src:`./images/sample-landscape.png`,aspectRatio:16/9,onApply:e=>console.log(`Applied landscape crop:`,e)}},c={args:{src:`./images/sample-landscape.png`,aspectRatio:1,circular:!0,onApply:e=>console.log(`Applied circular crop:`,e)}},l=[`Default`,`Landscape`,`Circular`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}export{u as a,s as i,o as n,i as r,c as t};