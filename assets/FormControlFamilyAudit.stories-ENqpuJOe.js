"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-lSx-_C-t.js";import{n as l,t as u}from"./Stack-D0pTsuU-.js";import{n as d,t as f}from"./Checkbox-C6MCvMe9.js";import{n as p,t as m}from"./CheckboxGroup-al0azoVF.js";import{n as h,t as g}from"./Input-Cx7cDmF1.js";import{n as _,t as v}from"./Combobox-BTRd4D6L.js";import{n as y,t as b}from"./DatePicker-Dw2aI36P.js";import{n as x,t as S}from"./MultiSelect-BS_2fIzv.js";import{n as C,t as w}from"./NumberInput-dctPeYf0.js";import{n as T,t as E}from"./RadioGroup-DDq5iP3q.js";import{n as D,t as O}from"./Select-DCLSdcqg.js";import{n as k,t as A}from"./Slider-DERCCKeb.js";import{n as j,t as M}from"./SwitchGroup-BgPngDb-.js";import{i as N,n as P,r as F,t as I}from"./AuditUtils-DcuduY3M.js";var L,R,z,B;function V(){return(V=e((()=>{t(),r(),i(),h(),D(),_(),x(),d(),p(),T(),j(),k(),C(),y(),l(),s(),N(),L=o(),R={title:`Audit/FormControlFamily`,parameters:{layout:`fullscreen`}},z={render:()=>{let{t:e}=n([...a,`audit`]);return(0,L.jsxs)(I,{title:e(`audit:form_controls_audit_title`),description:e(`audit:form_controls_audit_desc`),children:[(0,L.jsxs)(P,{title:e(`audit:form_label_consistency`),children:[(0,L.jsx)(F,{label:e(`audit:label_standard_input`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(g,{label:e(`audit:label_username`),placeholder:e(`audit:placeholder_username`),fullWidth:!0})}),(0,L.jsx)(F,{label:e(`audit:label_select`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(O,{label:e(`audit:label_country`),options:[{label:e(`audit:option_us`),value:`us`},{label:e(`audit:option_japan`),value:`jp`}],placeholder:e(`audit:placeholder_country`),fullWidth:!0})}),(0,L.jsx)(F,{label:e(`audit:label_checkbox_group`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(m,{label:e(`audit:label_interests`),options:[{label:`Design`,value:`d`},{label:`Development`,value:`dev`}]})}),(0,L.jsx)(F,{label:e(`audit:label_switch_group`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(M,{label:e(`audit:label_notifications`),options:[{label:`Email`,value:`e`},{label:`Push`,value:`p`}]})})]}),(0,L.jsxs)(P,{title:e(`audit:form_validation_consistency`),children:[(0,L.jsx)(F,{label:`${e(`audit:label_input`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(g,{label:e(`audit:label_email_address`),defaultValue:`invalid-email`,intent:`danger`,error:e(`audit:error_email_invalid`),fullWidth:!0})}),(0,L.jsx)(F,{label:`${e(`audit:label_number_input`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(w,{label:e(`audit:label_age`),defaultValue:150,error:e(`audit:error_age_range`),fullWidth:!0})}),(0,L.jsx)(F,{label:`${e(`audit:label_multi_select_selection`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(S,{label:e(`audit:label_tags`),options:[{label:`React`,value:`r`}],defaultValue:[],error:e(`audit:error_tag_required`),fullWidth:!0})}),(0,L.jsx)(F,{label:`${e(`audit:label_radio_group`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(E,{label:e(`audit:label_gender`),options:[{label:`Male`,value:`m`},{label:`Female`,value:`f`}],error:e(`audit:error_gender_required`)})})]}),(0,L.jsxs)(P,{title:e(`audit:form_layout_patterns`),children:[(0,L.jsx)(F,{label:e(`audit:label_form_layout_vertical`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,L.jsxs)(u,{gap:`md`,children:[(0,L.jsx)(g,{label:e(`audit:label_first_name`),fullWidth:!0}),(0,L.jsx)(g,{label:e(`audit:label_last_name`),fullWidth:!0}),(0,L.jsx)(O,{label:e(`audit:label_role`),fullWidth:!0,options:[]})]})}),(0,L.jsx)(F,{label:e(`audit:label_promo_code`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,L.jsxs)(u,{gap:`sm`,children:[(0,L.jsx)(g,{label:e(`audit:label_promo_code`),fullWidth:!0}),(0,L.jsx)(f,{children:e(`audit:label_apply`)})]})})]}),(0,L.jsxs)(P,{title:e(`audit:complex_form_consistency`),children:[(0,L.jsx)(F,{label:e(`audit:label_date_picker`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(b,{label:e(`audit:label_start_date`),fullWidth:!0})}),(0,L.jsx)(F,{label:e(`audit:label_slider`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(c,{pt:`md`,children:(0,L.jsx)(A,{label:e(`audit:label_volume_level`),defaultValue:70})})}),(0,L.jsx)(F,{label:e(`audit:label_combobox`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,L.jsx)(v,{label:e(`audit:label_fruit`),options:[{label:`Apple`,value:`a`},{label:`Banana`,value:`b`}],fullWidth:!0})})]})]})}},B=[`Overview`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:form_controls_audit_title")} description={t("audit:form_controls_audit_desc")}>
        {/* Label & Help Text Consistency */}
        <ComparisonGrid title={t("audit:form_label_consistency")}>
          <ComponentGroup label={t("audit:label_standard_input")} maxWidth="var(--wim-width-md)" align="stretch">
            <Input label={t("audit:label_username")} placeholder={t("audit:placeholder_username")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_select")} maxWidth="var(--wim-width-md)" align="stretch">
            <Select label={t("audit:label_country")} options={[{
            label: t("audit:option_us"),
            value: "us"
          }, {
            label: t("audit:option_japan"),
            value: "jp"
          }]} placeholder={t("audit:placeholder_country")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_checkbox_group")} maxWidth="var(--wim-width-md)" align="stretch">
            <CheckboxGroup label={t("audit:label_interests")} options={[{
            label: "Design",
            value: "d"
          }, {
            label: "Development",
            value: "dev"
          }]} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch_group")} maxWidth="var(--wim-width-md)" align="stretch">
            <SwitchGroup label={t("audit:label_notifications")} options={[{
            label: "Email",
            value: "e"
          }, {
            label: "Push",
            value: "p"
          }]} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Validation State Consistency */}
        <ComparisonGrid title={t("audit:form_validation_consistency")}>
          <ComponentGroup label={\`\${t("audit:label_input")} (\${t("audit:label_intent_error")})\`} maxWidth="var(--wim-width-md)" align="stretch">
            <Input label={t("audit:label_email_address")} defaultValue="invalid-email" intent="danger" error={t("audit:error_email_invalid")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_number_input")} (\${t("audit:label_intent_error")})\`} maxWidth="var(--wim-width-md)" align="stretch">
            <NumberInput label={t("audit:label_age")} defaultValue={150} error={t("audit:error_age_range")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_multi_select_selection")} (\${t("audit:label_intent_error")})\`} maxWidth="var(--wim-width-md)" align="stretch">
            <MultiSelect label={t("audit:label_tags")} options={[{
            label: "React",
            value: "r"
          }]} defaultValue={[]} error={t("audit:error_tag_required")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_radio_group")} (\${t("audit:label_intent_error")})\`} maxWidth="var(--wim-width-md)" align="stretch">
            <RadioGroup label={t("audit:label_gender")} options={[{
            label: "Male",
            value: "m"
          }, {
            label: "Female",
            value: "f"
          }]} error={t("audit:error_gender_required")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Layout: Horizontal vs Vertical */}
        <ComparisonGrid title={t("audit:form_layout_patterns")}>
          <ComponentGroup label={t("audit:label_form_layout_vertical")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <Input label={t("audit:label_first_name")} fullWidth />
              <Input label={t("audit:label_last_name")} fullWidth />
              <Select label={t("audit:label_role")} fullWidth options={[]} />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_promo_code")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="sm">
              <Input label={t("audit:label_promo_code")} fullWidth />
              <Checkbox>{t("audit:label_apply")}</Checkbox>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Complex Components Consistency */}
        <ComparisonGrid title={t("audit:complex_form_consistency")}>
          <ComponentGroup label={t("audit:label_date_picker")} maxWidth="var(--wim-width-md)" align="stretch">
             <DatePicker label={t("audit:label_start_date")} fullWidth />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_slider")} maxWidth="var(--wim-width-md)" align="stretch">
             <Box pt="md">
               <Slider label={t("audit:label_volume_level")} defaultValue={70} />
             </Box>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_combobox")} maxWidth="var(--wim-width-md)" align="stretch">
             <Combobox label={t("audit:label_fruit")} options={[{
            label: "Apple",
            value: "a"
          }, {
            label: "Banana",
            value: "b"
          }]} fullWidth />
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Overview,B as __namedExportsOrder,R as default};