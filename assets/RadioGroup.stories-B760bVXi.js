"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./RadioGroup-BBdSb6Ql.js";var d=n({Cards:()=>x,CardsHorizontal:()=>S,Controlled:()=>y,Default:()=>g,Horizontal:()=>_,LongLabel:()=>b,WithDisabledOption:()=>v,__namedExportsOrder:()=>C,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Selection Controls/RadioGroup`,component:u,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=i(s);return[{label:e(`story.radio_ship_standard`),value:`standard`},{label:e(`story.radio_ship_express`),value:`express`},{label:e(`story.radio_ship_pickup`),value:`pickup`}]},g={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,name:`default-group`,defaultValue:`standard`})}},_={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,direction:`horizontal`,name:`horizontal-group`,defaultValue:`standard`})}},v={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,options:[{label:t(`story.radio_ship_standard`),value:`standard`},{label:t(`story.radio_ship_express`),value:`express`},{label:`${t(`story.radio_ship_pickup`)} ${t(`story.option_disabled`)}`,value:`pickup`,disabled:!0}],name:`disabled-option-group`,defaultValue:`standard`})}},y={render:function(){let{t:e}=i(s),t=h(),[n,r]=(0,f.useState)(`standard`);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.radiogroup_selected`),`: `,n]}),(0,p.jsx)(u,{options:t,value:n,onChange:r,name:`controlled-group`})]})}},b={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,options:[{label:t(`story.radio_long_label`),value:`long1`},{label:t(`story.radio_long_label`),value:`long2`}],name:`long-label-group`})}},x={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,variant:`card`,name:`delivery`,label:t(`story.radio_card_label`),defaultValue:`standard`,options:[{label:t(`story.radio_card_standard`),value:`standard`,description:t(`story.radio_card_standard_desc`)},{label:t(`story.radio_card_express`),value:`express`,description:t(`story.radio_card_express_desc`)},{label:t(`story.radio_card_pickup`),value:`pickup`,description:t(`story.radio_card_pickup_desc`)},{label:t(`story.radio_card_sameday`),value:`sameday`,description:t(`story.radio_card_sameday_desc`),disabled:!0}]})}},S={...x,args:{direction:`horizontal`}},C=[`Default`,`Horizontal`,`WithDisabledOption`,`Controlled`,`LongLabel`,`Cards`,`CardsHorizontal`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} name="default-group" defaultValue="standard" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} direction="horizontal" name="horizontal-group" defaultValue="standard" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} options={[{
      label: t("story.radio_ship_standard"),
      value: "standard"
    }, {
      label: t("story.radio_ship_express"),
      value: "express"
    }, {
      // 受け取り店舗が選べない、は無効状態の理由として実在する。
      label: \`\${t("story.radio_ship_pickup")} \${t("story.option_disabled")}\`,
      value: "pickup",
      disabled: true
    }]} name="disabled-option-group" defaultValue="standard" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("standard");
    return <div>
        <div style={{
        marginBottom: "1rem"
      }}>
          {t("story.radiogroup_selected")}: {value}
        </div>
        <RadioGroup options={options} value={value} onChange={setValue} name="controlled-group" />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} options={[{
      label: t("story.radio_long_label"),
      value: "long1"
    }, {
      label: t("story.radio_long_label"),
      value: "long2"
    }]} name="long-label-group" />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} variant="card" name="delivery" label={t("story.radio_card_label")} defaultValue="standard" options={[{
      label: t("story.radio_card_standard"),
      value: "standard",
      description: t("story.radio_card_standard_desc")
    }, {
      label: t("story.radio_card_express"),
      value: "express",
      description: t("story.radio_card_express_desc")
    }, {
      label: t("story.radio_card_pickup"),
      value: "pickup",
      description: t("story.radio_card_pickup_desc")
    }, {
      label: t("story.radio_card_sameday"),
      value: "sameday",
      description: t("story.radio_card_sameday_desc"),
      disabled: true
    }]} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"カードで選ぶ（T365）。カードは選択肢の `<label>` なので、どこを押しても選べる。説明文は入力から\n`aria-describedby` で指す。当日便は、この住所では使えない（無効の選択肢）。",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Cards,
  args: {
    direction: "horizontal"
  }
}`,...S.parameters?.docs?.source},description:{story:`横に並べたカード。幅が足りないと、1 列に落ちる。`,...S.parameters?.docs?.description}}}})))()}export{d as a,_ as i,S as n,v as o,y as r,w as s,x as t};