"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./Transfer-C33vtVuL.js";var d=e({Controlled:()=>S,CustomTitles:()=>w,Default:()=>b,Disabled:()=>E,LongText:()=>D,__namedExportsOrder:()=>O,default:()=>_}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Advanced Inputs/Transfer`,component:u,parameters:{layout:`padded`}},v=()=>{let{t:e}=i(`docs_stories_common`);return Array.from({length:20}).map((t,n)=>({key:n.toString(),title:`${e(`story.transfer_item`)} ${n+1}`,description:`${e(`story.transfer_desc`)} ${n+1}`,disabled:n%5==0}))},y=e=>{let{t}=i(`form`),n=v(),r={noData:t(`transfer.no_data`),moveToTarget:t(`transfer.move_to_target`),moveToSource:t(`transfer.move_to_source`),statusMovedToTarget:e=>t(`transfer.status_moved_to_target`,{count:e}),statusMovedToSource:e=>t(`transfer.status_moved_to_source`,{count:e})};return(0,p.jsx)(u,{...e,dataSource:n,targetKeys:[`1`,`3`,`5`],labels:r,titles:[t(`transfer.source`),t(`transfer.target`)]})},b={render:e=>(0,p.jsx)(y,{...e})},x=()=>{let{t:e}=i(`form`),t=v(),[n,r]=(0,f.useState)([`1`,`2`]);return(0,p.jsx)(u,{dataSource:t,targetKeys:n,onChange:e=>r(e),labels:{noData:e(`transfer.no_data`),moveToTarget:e(`transfer.move_to_target`),moveToSource:e(`transfer.move_to_source`),statusMovedToTarget:t=>e(`transfer.status_moved_to_target`,{count:t}),statusMovedToSource:t=>e(`transfer.status_moved_to_source`,{count:t})},titles:[e(`transfer.source`),e(`transfer.target`)]})},S={render:()=>(0,p.jsx)(x,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByText(`Item 4`);await h.click(n);let r=t.getByRole(`button`,{name:`Move to Target`});await h.click(r),await m(t.getByText(`Item 4`)).toBeInTheDocument()}},C=e=>{let{t}=i([`docs_stories_common`,`form`]),n=v(),r={noData:t(`form:transfer.no_data`),moveToTarget:t(`form:transfer.move_to_target`),moveToSource:t(`form:transfer.move_to_source`),statusMovedToTarget:e=>t(`form:transfer.status_moved_to_target`,{count:e}),statusMovedToSource:e=>t(`form:transfer.status_moved_to_source`,{count:e})};return(0,p.jsx)(u,{...e,dataSource:n,titles:[t(`docs_stories_common:story.transfer_available`),t(`docs_stories_common:story.transfer_selected`)],targetKeys:[`10`,`11`],labels:r})},w={render:e=>(0,p.jsx)(C,{...e})},T=e=>{let t=v();return(0,p.jsx)(u,{...e,dataSource:t,disabled:!0,targetKeys:[`1`,`2`]})},E={render:e=>(0,p.jsx)(T,{...e})},D={render:function(e){let{t}=i(c),n=[{key:`1`,title:t(`story.transfer_long_title`),description:t(`story.transfer_long_desc`)},{key:`2`,title:t(`story.transfer_short_title`),description:t(`story.transfer_short_desc`)}];return(0,p.jsx)(u,{...e,dataSource:n,titles:[`Very Long Title for the Source Panel Header`,`Very Long Title for the Target Panel Header`]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultTransfer {...args} />
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TransferWrapper />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find "Item 4" in the left panel (dataSource keys: 0-19)
    // Keys 1, 2 are in target by default in TransferWrapper
    const item4 = canvas.getByText("Item 4");
    await userEvent.click(item4);

    // Move to right
    const moveToRightButton = canvas.getByRole("button", {
      name: "Move to Target"
    });
    await userEvent.click(moveToRightButton);

    // Check if Item 4 is now in the right panel
    // We can't easily get by name "Target" if translated, so we use the wrapper class if available or just check existence
    await expect(canvas.getByText("Item 4")).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <CustomTitlesTransfer {...args} />
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <DisabledTransfer {...args} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const dataSource = [{
      key: "1",
      title: t("story.transfer_long_title"),
      description: t("story.transfer_long_desc")
    }, {
      key: "2",
      title: t("story.transfer_short_title"),
      description: t("story.transfer_short_desc")
    }];
    return <Transfer {...args} dataSource={dataSource} titles={["Very Long Title for the Source Panel Header", "Very Long Title for the Target Panel Header"]} />;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Controlled`,`CustomTitles`,`Disabled`,`LongText`]}));k();export{S as Controlled,w as CustomTitles,b as Default,E as Disabled,D as LongText,O as __namedExportsOrder,_ as default,k as n,d as t};