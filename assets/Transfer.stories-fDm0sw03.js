"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Transfer-NZrS8iNH.js";var d=n({Controlled:()=>S,CustomTitles:()=>w,Default:()=>b,Disabled:()=>E,LongText:()=>D,__namedExportsOrder:()=>O,default:()=>_}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Advanced Inputs/Transfer`,component:u,parameters:{layout:`padded`}},v=()=>{let{t:e}=i(`docs_stories_common`);return[{title:e(`story.transfer_col_order_id`),type:e(`story.transfer_type_text`),locked:!0},{title:e(`story.transfer_col_placed_at`),type:e(`story.transfer_type_timestamp`),locked:!0},{title:e(`story.transfer_col_customer`),type:e(`story.transfer_type_text`),locked:!0},{title:e(`story.transfer_col_tracking`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_total`),type:e(`story.transfer_type_money`)},{title:e(`story.transfer_col_email`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_payment_method`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_phone`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_ship_city`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_postcode`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_carrier`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_weight`),type:e(`story.transfer_type_number`)},{title:e(`story.transfer_col_items`),type:e(`story.transfer_type_number`)},{title:e(`story.transfer_col_subtotal`),type:e(`story.transfer_type_money`)},{title:e(`story.transfer_col_discount`),type:e(`story.transfer_type_money`)},{title:e(`story.transfer_col_tax`),type:e(`story.transfer_type_money`)},{title:e(`story.transfer_col_shipping_fee`),type:e(`story.transfer_type_money`)},{title:e(`story.transfer_col_refunded`),type:e(`story.transfer_type_flag`)},{title:e(`story.transfer_col_channel`),type:e(`story.transfer_type_text`)},{title:e(`story.transfer_col_warehouse`),type:e(`story.transfer_type_text`)}].map((e,t)=>({key:t.toString(),title:e.title,description:e.type,disabled:e.locked===!0}))},y=e=>{let{t}=i(`form`),n=v(),r={noData:t(`transfer.no_data`),moveToTarget:t(`transfer.move_to_target`),moveToSource:t(`transfer.move_to_source`),statusMovedToTarget:e=>t(`transfer.status_moved_to_target`,{count:e}),statusMovedToSource:e=>t(`transfer.status_moved_to_source`,{count:e})};return(0,p.jsx)(u,{...e,dataSource:n,targetKeys:[`1`,`3`,`5`],labels:r,titles:[t(`transfer.source`),t(`transfer.target`)]})},b={render:e=>(0,p.jsx)(y,{...e})},x=()=>{let{t:e}=i(`form`),t=v(),[n,r]=(0,f.useState)([`1`,`2`]),a={noData:e(`transfer.no_data`),moveToTarget:e(`transfer.move_to_target`),moveToSource:e(`transfer.move_to_source`),statusMovedToTarget:t=>e(`transfer.status_moved_to_target`,{count:t}),statusMovedToSource:t=>e(`transfer.status_moved_to_source`,{count:t})};return(0,p.jsx)(u,{dataSource:t,targetKeys:n,onChange:e=>r(e),labels:a,titles:[e(`transfer.source`),e(`transfer.target`)]})},S={render:()=>(0,p.jsx)(x,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`option`,{name:`Tracking number`});await h.click(n);let r=t.getByRole(`button`,{name:`Move to selected`});await h.click(r);let[i,a]=t.getAllByRole(`listbox`);await m(g(a).getByRole(`option`,{name:`Tracking number`})).toBeInTheDocument(),await m(g(i).queryByRole(`option`,{name:`Tracking number`})).not.toBeInTheDocument()}},C=e=>{let{t}=i([`docs_stories_common`,`form`]),n=v(),r={noData:t(`form:transfer.no_data`),moveToTarget:t(`form:transfer.move_to_target`),moveToSource:t(`form:transfer.move_to_source`),statusMovedToTarget:e=>t(`form:transfer.status_moved_to_target`,{count:e}),statusMovedToSource:e=>t(`form:transfer.status_moved_to_source`,{count:e})};return(0,p.jsx)(u,{...e,dataSource:n,titles:[t(`docs_stories_common:story.transfer_available`),t(`docs_stories_common:story.transfer_selected`)],targetKeys:[`10`,`11`],labels:r})},w={render:e=>(0,p.jsx)(C,{...e})},T=e=>{let t=v();return(0,p.jsx)(u,{...e,dataSource:t,disabled:!0,targetKeys:[`1`,`2`]})},E={render:e=>(0,p.jsx)(T,{...e})},D={render:function(e){let{t}=i(s),n=[{key:`1`,title:t(`story.transfer_long_title`),description:t(`story.transfer_long_desc`)},{key:`2`,title:t(`story.transfer_short_title`),description:t(`story.transfer_short_desc`)}];return(0,p.jsx)(u,{...e,dataSource:n,titles:[`Very Long Title for the Source Panel Header`,`Very Long Title for the Target Panel Header`]})}},O=[`Default`,`Controlled`,`CustomTitles`,`Disabled`,`LongText`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultTransfer {...args} />
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TransferWrapper />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 左パネルに残っている最初の「外せる列」（dataSource の index 3）。
    // キー 1・2 は TransferWrapper の既定で target 側にある。
    // 文言の span は \`pointer-events: none\`（クリックは行＝option が受ける）なので、行を引いて押す。
    // 以前は span を \`getByText\` で引いており、userEvent が「押せない要素」として例外を投げていた
    // ── play はどの CI でも検査されていなかったので、黙って落ち続けていた。
    const trackingColumn = canvas.getByRole("option", {
      name: "Tracking number"
    });
    await userEvent.click(trackingColumn);

    // Move to right
    const moveToRightButton = canvas.getByRole("button", {
      name: "Move to selected"
    });
    await userEvent.click(moveToRightButton);

    // 右パネルへ移ったことの確認（"Target" という見出しは翻訳されるため、
    // パネル名ではなく列名の存在で見る）。
    // 以前は「文書のどこかにある」だけを見ていて、移動に失敗しても通っていた。
    // 左（1 つ目の listbox）から消え、右（2 つ目）に入ったことを見る。
    const [source, target] = canvas.getAllByRole("listbox");
    await expect(within(target).getByRole("option", {
      name: "Tracking number"
    })).toBeInTheDocument();
    await expect(within(source).queryByRole("option", {
      name: "Tracking number"
    })).not.toBeInTheDocument();
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
}`,...D.parameters?.docs?.source}}}})))()}export{d as a,E as i,w as n,k as o,b as r,S as t};