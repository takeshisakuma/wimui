"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{Cr as s,Dr as c,Jr as l,Nr as u,Qr as d,Tr as f,Xr as p,Yn as m,Zn as h,dr as g,lr as _,t as v}from"./src-BE5jBQ9L.js";import{i as y}from"./List-C4WUy_aA.js";import{t as b}from"./Button-d-SlSJ4S.js";import{t as x}from"./Cascader-LhmsYeN5.js";import{t as S}from"./Input-Bi6gYF1O.js";import{a as C,d as w,l as T}from"./QueryBuilder-BvfWrLHb.js";import{r as E}from"./PasswordStrength-Dpkg2Not.js";import{t as D}from"./PromptInput-BKL8DJY2.js";import{t as O}from"./TreeSelect-C-wYjR5N.js";import{t as k}from"./InlineEdit-BetTgdzR.js";import{t as A}from"./TagInput-Den4avVR.js";import{i as j,n as M,r as N,t as P}from"./AuditUtils-C0tQOUtW.js";var F,I,L,R,z,B;e((()=>{t(),a(),r(),v(),j(),F=i(),I={title:`Audit/InputFamily`,parameters:{layout:`fullscreen`}},L=S,R=E,z={render:()=>{let{t:e}=n([...o,`audit`]);return(0,F.jsxs)(P,{title:e(`audit:input_family_title`),children:[(0,F.jsxs)(M,{title:e(`audit:basic_comparison`),children:[(0,F.jsxs)(N,{label:e(`audit:label_standard_inputs`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(S,{label:e(`audit:label_standard_input`),placeholder:e(`audit:sample_name_placeholder`)}),(0,F.jsx)(g,{label:e(`audit:label_search_input`),placeholder:e(`audit:sample_search_placeholder`)}),(0,F.jsx)(T,{label:e(`audit:label_number_input`),placeholder:e(`audit:sample_number_placeholder`)})]}),(0,F.jsx)(N,{label:e(`audit:label_otp_input`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,F.jsx)(f,{label:e(`audit:label_otp_input`),length:6})})]}),(0,F.jsx)(M,{title:e(`audit:variant_comparison`),children:[`outline`,`ghost`].map(t=>(0,F.jsxs)(N,{label:e(`audit:label_variant`,{variant:t}),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(S,{label:e(`audit:label_variant`,{variant:t}),variant:t,placeholder:e(`audit:sample_name_placeholder`)}),(0,F.jsx)(u,{label:e(`audit:label_variant`,{variant:t}),variant:t,placeholder:e(`audit:sample_textarea_placeholder`)}),t===`ghost`&&(0,F.jsx)(k,{label:e(`audit:label_inline_edit_comparison`),defaultValue:e(`audit:sample_inline_edit_placeholder`)})]},t))}),(0,F.jsx)(M,{title:e(`audit:intent_comparison`),children:[`default`,`danger`].map(t=>(0,F.jsxs)(N,{label:e(`audit:label_intent`,{intent:t}),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(L,{label:e(`audit:label_intent`,{intent:t}),intent:t,placeholder:e(`audit:sample_name_placeholder`)}),(0,F.jsx)(R,{label:e(`audit:label_intent`,{intent:t}),intent:t}),(0,F.jsx)(_,{label:e(`audit:label_intent`,{intent:t}),intent:t,placeholder:e(`audit:sample_smart_search_ai`)}),(0,F.jsx)(D,{label:e(`audit:label_intent`,{intent:t}),error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_prompt_ai`)}),(0,F.jsx)(l,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_combobox_placeholder`)}),(0,F.jsx)(A,{label:e(`audit:label_intent`,{intent:t}),defaultValue:[e(`audit:sample_tag_a`)],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_tag_input_placeholder`)}),(0,F.jsx)(C,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_select_placeholder`)}),(0,F.jsx)(c,{label:e(`audit:label_intent`,{intent:t}),options:[{label:e(`audit:label_option_1`),value:`1`}],error:t===`danger`?e(`audit:label_error_message`):void 0,placeholder:e(`audit:sample_multi_select_placeholder`)})]},t))}),(0,F.jsxs)(M,{title:e(`audit:specialized_inputs`),children:[(0,F.jsxs)(N,{label:e(`audit:specialized_inputs`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(D,{label:e(`audit:label_ai_prompt`),placeholder:e(`audit:sample_prompt_ai`)}),(0,F.jsx)(_,{label:e(`audit:label_ai_smart_search`),placeholder:e(`audit:sample_smart_search_ai`)}),(0,F.jsx)(p,{label:e(`audit:label_color_picker`)}),(0,F.jsx)(d,{label:e(`audit:label_color_input_hex`),fullWidth:!0}),(0,F.jsx)(A,{label:e(`audit:label_tag_input_freeform`),defaultValue:[e(`audit:sample_tag_a`),e(`audit:sample_tag_b`)],placeholder:e(`audit:sample_tag_input_placeholder`)}),(0,F.jsx)(c,{label:e(`audit:label_multi_select_selection`),options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`},{label:e(`audit:label_option_3`),value:`3`}],defaultValue:[`1`,`2`],placeholder:e(`audit:sample_multi_select_placeholder`)}),(0,F.jsx)(l,{label:e(`audit:label_combobox`),options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`}],placeholder:e(`audit:sample_combobox_placeholder`)}),(0,F.jsx)(C,{label:e(`audit:label_select`),options:[{label:e(`audit:label_priority_high`),value:`high`},{label:e(`audit:label_priority_low`),value:`low`}],placeholder:e(`audit:sample_select_placeholder`)}),(0,F.jsx)(O,{label:e(`audit:label_tree_select`),treeData:[{label:e(`audit:label_parent`),value:`p`,children:[{label:e(`audit:label_child`),value:`c`}]}],placeholder:e(`audit:sample_tree_select_placeholder`)}),(0,F.jsx)(x,{label:e(`audit:label_cascader`),options:[{label:e(`audit:label_category`),value:`cat`,children:[{label:e(`audit:label_product`),value:`prod`}]}],placeholder:e(`audit:sample_cascader_placeholder`)}),(0,F.jsx)(s,{label:e(`audit:label_phone_input`),placeholder:e(`audit:sample_phone_placeholder`)}),(0,F.jsx)(h,{label:e(`audit:label_credit_card`),placeholder:e(`audit:sample_credit_card_placeholder`)}),(0,F.jsx)(w,{label:e(`audit:label_date_picker`),placeholder:e(`audit:sample_date_placeholder`)}),(0,F.jsx)(k,{label:e(`audit:label_inline_edit`),defaultValue:`Priya Nair`,placeholder:e(`audit:sample_name_placeholder`)})]}),(0,F.jsxs)(N,{label:e(`audit:label_large_text_fields`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(u,{label:e(`audit:label_standard_textarea`),placeholder:e(`audit:sample_textarea_placeholder`)}),(0,F.jsx)(m,{label:e(`audit:label_counter_textarea`),maxLength:100,placeholder:e(`audit:sample_textarea_placeholder`)}),(0,F.jsx)(u,{label:e(`audit:label_large_textarea`),rows:5,placeholder:e(`audit:sample_textarea_placeholder`)})]})]}),(0,F.jsx)(M,{title:e(`audit:mixed_composition`),children:(0,F.jsxs)(N,{label:e(`audit:label_mix`),children:[(0,F.jsxs)(y,{direction:`row`,gap:`md`,align:`center`,w:`100%`,children:[(0,F.jsx)(S,{"aria-label":e(`audit:mix_input_1`),placeholder:e(`audit:sample_name_placeholder`),style:{flex:1}}),(0,F.jsx)(b,{children:e(`audit:demo_action`)}),(0,F.jsx)(g,{"aria-label":e(`audit:mix_search`),placeholder:e(`audit:input_placeholder_report`),style:{flex:1}})]}),(0,F.jsxs)(y,{direction:`row`,gap:`md`,align:`center`,w:`100%`,children:[(0,F.jsx)(S,{"aria-label":e(`audit:mix_input_2`),placeholder:e(`audit:input_placeholder_hello`),style:{flex:1}}),(0,F.jsx)(b,{variant:`ghost`,children:e(`action.cancel`)}),(0,F.jsx)(b,{children:`Send`})]})]})}),(0,F.jsx)(M,{title:e(`audit:states_disabled`),children:(0,F.jsxs)(N,{label:e(`audit:label_disabled`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:[(0,F.jsx)(S,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_name_placeholder`)}),(0,F.jsx)(g,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_search_placeholder`)}),(0,F.jsx)(u,{label:e(`audit:label_disabled`),disabled:!0,placeholder:e(`audit:sample_textarea_placeholder`)})]})}),(0,F.jsxs)(M,{title:e(`audit:fluid_width_check`),children:[(0,F.jsx)(N,{label:e(`audit:label_truly_full_width`),children:(0,F.jsxs)(y,{gap:`lg`,children:[(0,F.jsx)(S,{label:e(`audit:label_fluid_input`),fullWidth:!0,placeholder:e(`audit:sample_name_placeholder`)}),(0,F.jsx)(g,{label:e(`audit:label_fluid_search`),fullWidth:!0,placeholder:e(`audit:sample_search_placeholder`)}),(0,F.jsx)(E,{label:e(`audit:label_fluid_password`),fullWidth:!0}),(0,F.jsx)(f,{label:e(`audit:label_fluid_otp`),length:6,fullWidth:!0}),(0,F.jsx)(D,{label:e(`audit:label_fluid_prompt`),fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,F.jsx)(_,{label:e(`audit:label_fluid_smart_search`),fullWidth:!0,placeholder:e(`audit:sample_smart_search_ai`)}),(0,F.jsx)(l,{label:e(`audit:label_fluid_combobox`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_combobox_placeholder`)}),(0,F.jsx)(A,{label:e(`audit:label_fluid_tag_input`),fullWidth:!0,defaultValue:[e(`audit:label_mix`)]}),(0,F.jsx)(C,{label:e(`audit:label_fluid_select`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_select_placeholder`)}),(0,F.jsx)(c,{label:e(`audit:label_fluid_multi_select`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`f1`}],placeholder:e(`audit:sample_multi_select_placeholder`)}),(0,F.jsx)(O,{label:e(`audit:label_fluid_tree_select`),fullWidth:!0,treeData:[{label:e(`audit:label_option_1`),value:`fn1`}],placeholder:e(`audit:sample_tree_select_placeholder`)}),(0,F.jsx)(x,{label:e(`audit:label_fluid_cascader`),fullWidth:!0,options:[{label:e(`audit:label_option_1`),value:`fc1`}],placeholder:e(`audit:sample_cascader_placeholder`)}),(0,F.jsx)(s,{label:e(`audit:label_fluid_phone`),fullWidth:!0,placeholder:e(`audit:sample_phone_placeholder`)}),(0,F.jsx)(h,{label:e(`audit:label_fluid_cc`),fullWidth:!0,placeholder:e(`audit:sample_credit_card_placeholder`)}),(0,F.jsx)(w,{label:e(`audit:label_fluid_date_picker`),fullWidth:!0,placeholder:e(`audit:sample_date_placeholder`)})]})}),(0,F.jsx)(N,{label:e(`audit:label_readable_limit`),maxWidth:`40rem`,children:(0,F.jsxs)(y,{gap:`lg`,children:[(0,F.jsx)(S,{fullWidth:!0,placeholder:e(`audit:sample_name_placeholder`),defaultValue:`あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも`}),(0,F.jsx)(D,{fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,F.jsx)(_,{fullWidth:!0,placeholder:e(`audit:sample_smart_search_ai`)})]})})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
            <Stack direction="row" gap="md" align="center" w="100%">
              <Input aria-label={t("audit:mix_input_1")} placeholder={t("audit:sample_name_placeholder")} style={{
              flex: 1
            }} />
              <Button>{t("audit:demo_action")}</Button>
              <SearchInput aria-label={t("audit:mix_search")} placeholder={t("audit:input_placeholder_report")} style={{
              flex: 1
            }} />
            </Stack>
            <Stack direction="row" gap="md" align="center" w="100%">
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
}`,...z.parameters?.docs?.source}}},B=[`Overview`]}))();export{z as Overview,B as __namedExportsOrder,I as default};