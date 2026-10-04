"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n as ee,t as n}from"./useTranslation-BDKsuBAo.js";import{n as r,t as i}from"./i18nConstants-BhvmnjLS.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as te,t as o}from"./Stack-D0pTsuU-.js";import{n as s,t as c}from"./Button-DrO46Brn.js";import{n as l,t as u}from"./Cascader-CCPD9AYx.js";import{n as d,t as f}from"./Input-Cx7cDmF1.js";import{n as p,t as m}from"./ColorInput-BSOdHT5L.js";import{n as ne,t as re}from"./ColorPicker-BDZuYIAe.js";import{n as ie,t as h}from"./Combobox-BTRd4D6L.js";import{n as g,t as _}from"./DatePicker-Dw2aI36P.js";import{n as v,t as y}from"./InputMask-BU5N5dFI.js";import{n as b,t as x}from"./Textarea-DCy4SxIv.js";import{n as S,t as C}from"./MultiSelect-BS_2fIzv.js";import{n as ae,t as oe}from"./NumberInput-dctPeYf0.js";import{n as se,t as w}from"./OtpInput-BMEKzoWs.js";import{n as ce,t as T}from"./PasswordInput-AqlojnYq.js";import{n as E,t as D}from"./PhoneInput-CYVl1eW9.js";import{n as O,t as k}from"./SearchInput-DxowftA6.js";import{n as A,t as j}from"./SmartSearchInput-DxZYP_lw.js";import{n as M,t as N}from"./Select-DCLSdcqg.js";import{n as P,t as F}from"./TreeSelect-Dn117pQo.js";import{n as I,t as L}from"./InlineEdit-DarYoUbY.js";import{n as R,t as z}from"./TagInput-Dl0_7qMa.js";import{n as le,t as B}from"./CreditCardInput-szE2LgrL.js";import{n as V,t as H}from"./CounterTextarea-Dv-EvGdp.js";import{n as U,t as W}from"./PromptInput-hU8vmY8F.js";import{i as ue,n as G,r as K,t as de}from"./AuditUtils-DcuduY3M.js";var q,J,Y,X,Z,Q;function $(){return($=e((()=>{t(),n(),r(),d(),b(),ce(),O(),A(),U(),ae(),se(),ne(),p(),ie(),R(),M(),S(),P(),l(),E(),le(),g(),I(),V(),v(),s(),te(),ue(),q=a(),J={title:`Audit/InputFamily`,parameters:{layout:`fullscreen`}},Y=f,X=T,Z={render:()=>{let{t:e}=ee([...i,`audit`]);return(0,q.jsxs)(de,{title:e(`audit:input_family_title`),children:[(0,q.jsxs)(G,{title:e(`audit:basic_comparison`),children:[(0,q.jsxs)(K,{label:e(`audit:label_standard_inputs`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(f,{label:e(`audit:label_standard_input`),placeholder:e(`audit:sample_name_placeholder`)}),(0,q.jsx)(k,{label:e(`audit:label_search_input`),placeholder:e(`audit:sample_search_placeholder`)}),(0,q.jsx)(oe,{label:e(`audit:label_number_input`),placeholder:e(`audit:sample_number_placeholder`)})]}),(0,q.jsx)(K,{label:e(`audit:label_otp_input`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,q.jsx)(w,{label:e(`audit:label_otp_input`),length:6})})]}),(0,q.jsx)(G,{title:e(`audit:variant_comparison`),children:[`outline`,`ghost`].map(t=>(0,q.jsxs)(K,{label:e(`audit:label_variant`,{variant:t}),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(f,{label:e(`audit:label_variant`,{variant:t}),variant:t,placeholder:e(`audit:sample_name_placeholder`)}),(0,q.jsx)(x,{label:e(`audit:label_variant`,{variant:t}),variant:t,placeholder:e(`audit:sample_textarea_placeholder`)}),(0,q.jsx)(k,{label:e(`audit:label_search_input`),variant:t,placeholder:e(`audit:sample_search_placeholder`)}),(0,q.jsx)(T,{label:e(`audit:label_password_input`),variant:t}),(0,q.jsx)(z,{label:e(`audit:label_tag_input_freeform`),variant:t,defaultValue:[e(`audit:sample_tag_a`)],placeholder:e(`audit:sample_tag_input_placeholder`)}),(0,q.jsx)(m,{label:e(`audit:label_color_input_hex`),variant:t,fullWidth:!0}),(0,q.jsx)(B,{label:e(`audit:label_credit_card`),variant:t,placeholder:e(`audit:sample_credit_card_placeholder`)}),(0,q.jsx)(y,{"aria-label":e(`audit:label_input_mask`),variant:t,mask:`999-9999`,placeholder:`000-0000`}),(0,q.jsx)(H,{label:e(`audit:label_counter_textarea`),variant:t,maxLength:100,placeholder:e(`audit:sample_textarea_placeholder`)}),t===`ghost`&&(0,q.jsx)(L,{label:e(`audit:label_inline_edit_comparison`),defaultValue:e(`audit:sample_inline_edit_placeholder`)})]},t))}),(0,q.jsx)(G,{title:e(`audit:intent_comparison`),children:[`default`,`danger`].map(t=>(0,q.jsxs)(K,{label:e(`audit:label_intent`,{intent:t}),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(Y,{label:e(`audit:label_intent`,{intent:t}),intent:t,placeholder:e(`audit:sample_name_placeholder`)}),(0,q.jsx)(X,{label:e(`audit:label_intent`,{intent:t}),intent:t}),(0,q.jsx)(j,{label:e(`audit:label_intent`,{intent:t}),intent:t,placeholder:e(`audit:sample_smart_search_ai`)}),(0,q.jsx)(W,{label:e(`audit:label_intent`,{intent:t}),error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_prompt_ai`)}),(0,q.jsx)(h,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_combobox_placeholder`)}),(0,q.jsx)(z,{label:e(`audit:label_intent`,{intent:t}),defaultValue:[e(`audit:sample_tag_a`)],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_tag_input_placeholder`)}),(0,q.jsx)(N,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_select_placeholder`)}),(0,q.jsx)(C,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_multi_select_placeholder`)})]},t))}),(0,q.jsxs)(G,{title:e(`audit:specialized_inputs`),children:[(0,q.jsxs)(K,{label:e(`audit:specialized_inputs`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(W,{label:e(`audit:label_ai_prompt`),placeholder:e(`audit:sample_prompt_ai`)}),(0,q.jsx)(j,{label:e(`audit:label_ai_smart_search`),placeholder:e(`audit:sample_smart_search_ai`)}),(0,q.jsx)(re,{label:e(`audit:label_color_picker`)}),(0,q.jsx)(m,{label:e(`audit:label_color_input_hex`),fullWidth:!0}),(0,q.jsx)(z,{label:e(`audit:label_tag_input_freeform`),defaultValue:[e(`audit:sample_tag_a`),e(`audit:sample_tag_b`)],placeholder:e(`audit:sample_tag_input_placeholder`)}),(0,q.jsx)(C,{label:e(`audit:label_multi_select_selection`),options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`},{label:e(`audit:label_option_3`),value:`3`}],defaultValue:[`1`,`2`],placeholder:e(`audit:sample_multi_select_placeholder`)}),(0,q.jsx)(h,{label:e(`audit:label_combobox`),options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`}],placeholder:e(`audit:sample_combobox_placeholder`)}),(0,q.jsx)(N,{label:e(`audit:label_select`),options:[{label:e(`audit:label_priority_high`),value:`high`},{label:e(`audit:label_priority_low`),value:`low`}],placeholder:e(`audit:sample_select_placeholder`)}),(0,q.jsx)(F,{label:e(`audit:label_tree_select`),treeData:[{label:e(`audit:label_parent`),value:`p`,children:[{label:e(`audit:label_child`),value:`c`}]}],placeholder:e(`audit:sample_tree_select_placeholder`)}),(0,q.jsx)(u,{label:e(`audit:label_cascader`),options:[{label:e(`audit:label_category`),value:`cat`,children:[{label:e(`audit:label_product`),value:`prod`}]}],placeholder:e(`audit:sample_cascader_placeholder`)}),(0,q.jsx)(D,{label:e(`audit:label_phone_input`),placeholder:e(`audit:sample_phone_placeholder`)}),(0,q.jsx)(B,{label:e(`audit:label_credit_card`),placeholder:e(`audit:sample_credit_card_placeholder`)}),(0,q.jsx)(_,{label:e(`audit:label_date_picker`),placeholder:e(`audit:sample_date_placeholder`)}),(0,q.jsx)(L,{label:e(`audit:label_inline_edit`),defaultValue:`Priya Nair`,placeholder:e(`audit:sample_name_placeholder`)})]}),(0,q.jsxs)(K,{label:e(`audit:label_large_text_fields`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(x,{label:e(`audit:label_standard_textarea`),placeholder:e(`audit:sample_textarea_placeholder`)}),(0,q.jsx)(H,{label:e(`audit:label_counter_textarea`),maxLength:100,placeholder:e(`audit:sample_textarea_placeholder`)}),(0,q.jsx)(x,{label:e(`audit:label_large_textarea`),rows:5,placeholder:e(`audit:sample_textarea_placeholder`)})]})]}),(0,q.jsx)(G,{title:e(`audit:mixed_composition`),children:(0,q.jsxs)(K,{label:e(`audit:label_mix`),children:[(0,q.jsxs)(o,{direction:`row`,gap:`md`,align:`center`,w:`100%`,wrap:!0,children:[(0,q.jsx)(f,{"aria-label":e(`audit:mix_input_1`),placeholder:e(`audit:sample_name_placeholder`),style:{flex:1}}),(0,q.jsx)(c,{children:e(`audit:demo_action`)}),(0,q.jsx)(k,{"aria-label":e(`audit:mix_search`),placeholder:e(`audit:input_placeholder_report`),style:{flex:1}})]}),(0,q.jsxs)(o,{direction:`row`,gap:`md`,align:`center`,w:`100%`,wrap:!0,children:[(0,q.jsx)(f,{"aria-label":e(`audit:mix_input_2`),placeholder:e(`audit:input_placeholder_hello`),style:{flex:1}}),(0,q.jsx)(c,{variant:`ghost`,children:e(`action.cancel`)}),(0,q.jsx)(c,{children:`Send`})]})]})}),(0,q.jsx)(G,{title:e(`audit:states_disabled`),children:(0,q.jsxs)(K,{label:e(`audit:label_disabled`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,q.jsx)(f,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_name_placeholder`)}),(0,q.jsx)(k,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_search_placeholder`)}),(0,q.jsx)(x,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_textarea_placeholder`)})]})}),(0,q.jsxs)(G,{title:e(`audit:fluid_width_check`),children:[(0,q.jsx)(K,{label:e(`audit:label_truly_full_width`),children:(0,q.jsxs)(o,{gap:`lg`,children:[(0,q.jsx)(f,{label:e(`audit:label_fluid_input`),fullWidth:!0,placeholder:e(`audit:sample_name_placeholder`)}),(0,q.jsx)(k,{label:e(`audit:label_fluid_search`),fullWidth:!0,placeholder:e(`audit:sample_search_placeholder`)}),(0,q.jsx)(T,{label:e(`audit:label_fluid_password`),fullWidth:!0}),(0,q.jsx)(w,{label:e(`audit:label_fluid_otp`),length:6,fullWidth:!0}),(0,q.jsx)(W,{label:e(`audit:label_fluid_prompt`),fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,q.jsx)(j,{label:e(`audit:label_fluid_smart_search`),fullWidth:!0,placeholder:e(`audit:sample_smart_search_ai`)}),(0,q.jsx)(h,{label:e(`audit:label_fluid_combobox`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_combobox_placeholder`)}),(0,q.jsx)(z,{label:e(`audit:label_fluid_tag_input`),fullWidth:!0,defaultValue:[e(`audit:label_mix`)]}),(0,q.jsx)(N,{label:e(`audit:label_fluid_select`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_select_placeholder`)}),(0,q.jsx)(C,{label:e(`audit:label_fluid_multi_select`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_multi_select_placeholder`)}),(0,q.jsx)(F,{label:e(`audit:label_fluid_tree_select`),fullWidth:!0,treeData:[{label:e(`audit:label_option_1`),value:`fn1`}],placeholder:e(`audit:sample_tree_select_placeholder`)}),(0,q.jsx)(u,{label:e(`audit:label_fluid_cascader`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`fc1`}],placeholder:e(`audit:sample_cascader_placeholder`)}),(0,q.jsx)(D,{label:e(`audit:label_fluid_phone`),fullWidth:!0,placeholder:e(`audit:sample_phone_placeholder`)}),(0,q.jsx)(B,{label:e(`audit:label_fluid_cc`),fullWidth:!0,placeholder:e(`audit:sample_credit_card_placeholder`)}),(0,q.jsx)(_,{label:e(`audit:label_fluid_date_picker`),fullWidth:!0,placeholder:e(`audit:sample_date_placeholder`)})]})}),(0,q.jsx)(K,{label:e(`audit:label_readable_limit`),maxWidth:`40rem`,children:(0,q.jsxs)(o,{gap:`lg`,children:[(0,q.jsx)(f,{fullWidth:!0,placeholder:e(`audit:sample_name_placeholder`),defaultValue:`あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも`}),(0,q.jsx)(W,{fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,q.jsx)(j,{fullWidth:!0,placeholder:e(`audit:sample_smart_search_ai`)})]})})]})]})}},Q=[`Overview`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const variants = ["outline", "ghost"] as const;
    const intents = ["default", "danger"] as const;
    return <AuditPage title={t("audit:input_family_title")}>
        {/* 1. Basic Comparison */}
        <ComparisonGrid title={t("audit:basic_comparison")}>
          <ComponentGroup label={t("audit:label_standard_inputs")} align="stretch" maxWidth="var(--wim-width-md)">
            <Input label={t("audit:label_standard_input")} placeholder={t("audit:sample_name_placeholder")} />
            <SearchInput label={t("audit:label_search_input")} placeholder={t("audit:sample_search_placeholder")} />
            <NumberInput label={t("audit:label_number_input")} placeholder={t("audit:sample_number_placeholder")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_otp_input")} align="stretch" maxWidth="var(--wim-width-md)">
            <OtpInput label={t("audit:label_otp_input")} length={6} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 2. Variant Comparison */}
        <ComparisonGrid title={t("audit:variant_comparison")}>
          {variants.map(variant => <ComponentGroup key={variant} label={t("audit:label_variant", {
          variant
        })} align="stretch" maxWidth="var(--wim-width-md)">
              <Input label={t("audit:label_variant", {
            variant
          })} variant={variant} placeholder={t("audit:sample_name_placeholder")} />
              <Textarea label={t("audit:label_variant", {
            variant
          })} variant={variant} placeholder={t("audit:sample_textarea_placeholder")} />
              {/* T280: 以下は variant を持つのに、ghost がどのストーリーにも描かれていなかった */}
              <SearchInput label={t("audit:label_search_input")} variant={variant} placeholder={t("audit:sample_search_placeholder")} />
              <PasswordInput label={t("audit:label_password_input")} variant={variant} />
              <TagInput label={t("audit:label_tag_input_freeform")} variant={variant} defaultValue={[t("audit:sample_tag_a")]} placeholder={t("audit:sample_tag_input_placeholder")} />
              <ColorInput label={t("audit:label_color_input_hex")} variant={variant} fullWidth />
              <CreditCardInput label={t("audit:label_credit_card")} variant={variant} placeholder={t("audit:sample_credit_card_placeholder")} />
              <InputMask aria-label={t("audit:label_input_mask")} variant={variant} mask="999-9999" placeholder="000-0000" />
              <CounterTextarea label={t("audit:label_counter_textarea")} variant={variant} maxLength={100} placeholder={t("audit:sample_textarea_placeholder")} />
              {variant === "ghost" && <InlineEdit label={t("audit:label_inline_edit_comparison")} defaultValue={t("audit:sample_inline_edit_placeholder")} />}
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* 3. Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          {intents.map(intent => <ComponentGroup key={intent} label={t("audit:label_intent", {
          intent
        })} align="stretch" maxWidth="var(--wim-width-md)">
              <InputAny label={t("audit:label_intent", {
            intent
          })} intent={intent as "default" | "danger"} placeholder={t("audit:sample_name_placeholder")} />
              <PasswordInputAny label={t("audit:label_intent", {
            intent
          })} intent={intent as "default" | "danger"} />
              <SmartSearchInput label={t("audit:label_intent", {
            intent
          })} intent={intent as "default" | "danger"} placeholder={t("audit:sample_smart_search_ai")} />
              <PromptInput label={t("audit:label_intent", {
            intent
          })} error={intent === "danger" ? t("audit:label_error_message") : undefined} placeholder={t("audit:sample_prompt_ai")} />
              <Combobox label={t("audit:label_intent", {
            intent
          })} options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }]} error={intent === "danger" ? t("audit:label_error_message") : undefined} placeholder={t("audit:sample_combobox_placeholder")} />
              <TagInput label={t("audit:label_intent", {
            intent
          })} defaultValue={[t("audit:sample_tag_a")]} error={intent === "danger" ? t("audit:label_error_message") : undefined} placeholder={t("audit:sample_tag_input_placeholder")} />
              <Select label={t("audit:label_intent", {
            intent
          })} options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }]} error={intent === "danger" ? t("audit:label_error_message") : undefined} placeholder={t("audit:sample_select_placeholder")} />
              <MultiSelect label={t("audit:label_intent", {
            intent
          })} options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }]} error={intent === "danger" ? t("audit:label_error_message") : undefined} placeholder={t("audit:sample_multi_select_placeholder")} />
            </ComponentGroup>)}
        </ComparisonGrid>

        {/* 4. Specialized & AI Inputs */}
        <ComparisonGrid title={t("audit:specialized_inputs")}>
          <ComponentGroup label={t("audit:specialized_inputs")} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput label={t("audit:label_ai_prompt")} placeholder={t("audit:sample_prompt_ai")} />
            <SmartSearchInput label={t("audit:label_ai_smart_search")} placeholder={t("audit:sample_smart_search_ai")} />
            <ColorPicker label={t("audit:label_color_picker")} />
            <ColorInput label={t("audit:label_color_input_hex")} fullWidth />
            <TagInput label={t("audit:label_tag_input_freeform")} defaultValue={[t("audit:sample_tag_a"), t("audit:sample_tag_b")]} placeholder={t("audit:sample_tag_input_placeholder")} />
            <MultiSelect label={t("audit:label_multi_select_selection")} options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }, {
            label: t("audit:label_option_2"),
            value: "2"
          }, {
            label: t("audit:label_option_3"),
            value: "3"
          }]} defaultValue={["1", "2"]} placeholder={t("audit:sample_multi_select_placeholder")} />
            <Combobox label={t("audit:label_combobox")} options={[{
            label: t("audit:label_option_a"),
            value: "a"
          }, {
            label: t("audit:label_option_b"),
            value: "b"
          }]} placeholder={t("audit:sample_combobox_placeholder")} />
            <Select label={t("audit:label_select")} options={[{
            label: t("audit:label_priority_high"),
            value: "high"
          }, {
            label: t("audit:label_priority_low"),
            value: "low"
          }]} placeholder={t("audit:sample_select_placeholder")} />
            <TreeSelect label={t("audit:label_tree_select")} treeData={[{
            label: t("audit:label_parent"),
            value: "p",
            children: [{
              label: t("audit:label_child"),
              value: "c"
            }]
          }]} placeholder={t("audit:sample_tree_select_placeholder")} />
            <Cascader label={t("audit:label_cascader")} options={[{
            label: t("audit:label_category"),
            value: "cat",
            children: [{
              label: t("audit:label_product"),
              value: "prod"
            }]
          }]} placeholder={t("audit:sample_cascader_placeholder")} />
            <PhoneInput label={t("audit:label_phone_input")} placeholder={t("audit:sample_phone_placeholder")} />
            <CreditCardInput label={t("audit:label_credit_card")} placeholder={t("audit:sample_credit_card_placeholder")} />
            <DatePicker label={t("audit:label_date_picker")} placeholder={t("audit:sample_date_placeholder")} />
            <InlineEdit label={t("audit:label_inline_edit")} defaultValue="Priya Nair" placeholder={t("audit:sample_name_placeholder")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_large_text_fields")} align="stretch" maxWidth="var(--wim-width-md)">
            <Textarea label={t("audit:label_standard_textarea")} placeholder={t("audit:sample_textarea_placeholder")} />
            <CounterTextarea label={t("audit:label_counter_textarea")} maxLength={100} placeholder={t("audit:sample_textarea_placeholder")} />
            <Textarea label={t("audit:label_large_textarea")} rows={5} placeholder={t("audit:sample_textarea_placeholder")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 5. Mixed Composition (Alignment Check) */}
        <ComparisonGrid title={t("audit:mixed_composition")}>
          <ComponentGroup label={t("audit:label_mix")}>
            <Stack direction="row" gap="md" align="center" w="100%" wrap>
              <Input aria-label={t("audit:mix_input_1")} placeholder={t("audit:sample_name_placeholder")} style={{
              flex: 1
            }} />
              <Button>{t("audit:demo_action")}</Button>
              <SearchInput aria-label={t("audit:mix_search")} placeholder={t("audit:input_placeholder_report")} style={{
              flex: 1
            }} />
            </Stack>
            <Stack direction="row" gap="md" align="center" w="100%" wrap>
              <Input aria-label={t("audit:mix_input_2")} placeholder={t("audit:input_placeholder_hello")} style={{
              flex: 1
            }} />
              <Button variant="ghost">{t("action.cancel")}</Button>
              <Button>Send</Button>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* 6. Focus & Disabled States */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")} align="stretch" maxWidth="var(--wim-width-md)">
            <Input label={t("audit:label_disabled")} disabled placeholder={t("audit:sample_name_placeholder")} />
            <SearchInput label={t("audit:label_disabled")} disabled placeholder={t("audit:sample_search_placeholder")} />
            <Textarea label={t("audit:label_disabled")} disabled placeholder={t("audit:sample_textarea_placeholder")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* 7. Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          {/* Fully Fluid */}
          <ComponentGroup label={t("audit:label_truly_full_width")}>
            <Stack gap="lg">
              <Input label={t("audit:label_fluid_input")} fullWidth placeholder={t("audit:sample_name_placeholder")} />
              <SearchInput label={t("audit:label_fluid_search")} fullWidth placeholder={t("audit:sample_search_placeholder")} />
              <PasswordInput label={t("audit:label_fluid_password")} fullWidth />
              <OtpInput label={t("audit:label_fluid_otp")} length={6} fullWidth />
              <PromptInput label={t("audit:label_fluid_prompt")} fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <SmartSearchInput label={t("audit:label_fluid_smart_search")} fullWidth placeholder={t("audit:sample_smart_search_ai")} />
              <Combobox label={t("audit:label_fluid_combobox")} fullWidth options={[{
              label: t("audit:label_option_1"),
              value: "f1"
            }]} placeholder={t("audit:sample_combobox_placeholder")} />
              <TagInput label={t("audit:label_fluid_tag_input")} fullWidth defaultValue={[t("audit:label_mix")]} />
              <Select label={t("audit:label_fluid_select")} fullWidth options={[{
              label: t("audit:label_option_1"),
              value: "f1"
            }]} placeholder={t("audit:sample_select_placeholder")} />
              <MultiSelect label={t("audit:label_fluid_multi_select")} fullWidth options={[{
              label: t("audit:label_option_1"),
              value: "f1"
            }]} placeholder={t("audit:sample_multi_select_placeholder")} />
              <TreeSelect label={t("audit:label_fluid_tree_select")} fullWidth treeData={[{
              label: t("audit:label_option_1"),
              value: "fn1"
            }]} placeholder={t("audit:sample_tree_select_placeholder")} />
              <Cascader label={t("audit:label_fluid_cascader")} fullWidth options={[{
              label: t("audit:label_option_1"),
              value: "fc1"
            }]} placeholder={t("audit:sample_cascader_placeholder")} />
              <PhoneInput label={t("audit:label_fluid_phone")} fullWidth placeholder={t("audit:sample_phone_placeholder")} />
              <CreditCardInput label={t("audit:label_fluid_cc")} fullWidth placeholder={t("audit:sample_credit_card_placeholder")} />
              <DatePicker label={t("audit:label_fluid_date_picker")} fullWidth placeholder={t("audit:sample_date_placeholder")} />
            </Stack>
          </ComponentGroup>

          {/* Capped for Readability */}
          <ComponentGroup label={t("audit:label_readable_limit")} maxWidth="40rem">
            <Stack gap="lg">
              <Input fullWidth placeholder={t("audit:sample_name_placeholder")} defaultValue="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも" />
              <PromptInput fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <SmartSearchInput fullWidth placeholder={t("audit:sample_smart_search_ai")} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Overview,Q as __namedExportsOrder,J as default};