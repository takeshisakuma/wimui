"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{Dr as s,Jr as c,ar as l,ei as u,t as d,yr as f}from"./src-BE5jBQ9L.js";import{t as p}from"./Box-Bs2Irq0X.js";import{i as m}from"./List-C4WUy_aA.js";import{t as h}from"./Checkbox-C9bITARL.js";import{t as g}from"./Input-Bi6gYF1O.js";import{a as _,d as v,l as y}from"./QueryBuilder-BvfWrLHb.js";import{r as b}from"./ImageCropper-C3fSHHzq.js";import{i as x,n as S,r as C,t as w}from"./AuditUtils-C0tQOUtW.js";var T,E,D,O;e((()=>{t(),a(),r(),d(),x(),T=i(),E={title:`Audit/FormControlFamily`,parameters:{layout:`fullscreen`}},D={render:()=>{let{t:e}=n([...o,`audit`]);return(0,T.jsxs)(w,{title:e(`audit:form_controls_audit_title`),description:e(`audit:form_controls_audit_desc`),children:[(0,T.jsxs)(S,{title:e(`audit:form_label_consistency`),children:[(0,T.jsx)(C,{label:e(`audit:label_standard_input`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(g,{label:e(`audit:label_username`),placeholder:e(`audit:placeholder_username`),fullWidth:!0})}),(0,T.jsx)(C,{label:e(`audit:label_select`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(_,{label:e(`audit:label_country`),options:[{label:e(`audit:option_us`),value:`us`},{label:e(`audit:option_japan`),value:`jp`}],placeholder:e(`audit:placeholder_country`),fullWidth:!0})}),(0,T.jsx)(C,{label:e(`audit:label_checkbox_group`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(u,{label:e(`audit:label_interests`),options:[{label:`Design`,value:`d`},{label:`Development`,value:`dev`}]})}),(0,T.jsx)(C,{label:e(`audit:label_switch_group`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(l,{label:e(`audit:label_notifications`),options:[{label:`Email`,value:`e`},{label:`Push`,value:`p`}]})})]}),(0,T.jsxs)(S,{title:e(`audit:form_validation_consistency`),children:[(0,T.jsx)(C,{label:`${e(`audit:label_input`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(g,{label:e(`audit:label_email_address`),defaultValue:`invalid-email`,intent:`danger`,error:e(`audit:error_email_invalid`),fullWidth:!0})}),(0,T.jsx)(C,{label:`${e(`audit:label_number_input`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(y,{label:e(`audit:label_age`),defaultValue:150,error:e(`audit:error_age_range`),fullWidth:!0})}),(0,T.jsx)(C,{label:`${e(`audit:label_multi_select_selection`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(s,{label:e(`audit:label_tags`),options:[{label:`React`,value:`r`}],defaultValue:[],error:e(`audit:error_tag_required`),fullWidth:!0})}),(0,T.jsx)(C,{label:`${e(`audit:label_radio_group`)} (${e(`audit:label_intent_error`)})`,maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(f,{label:e(`audit:label_gender`),options:[{label:`Male`,value:`m`},{label:`Female`,value:`f`}],error:e(`audit:error_gender_required`)})})]}),(0,T.jsxs)(S,{title:e(`audit:form_layout_patterns`),children:[(0,T.jsx)(C,{label:e(`audit:label_form_layout_vertical`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,T.jsxs)(m,{gap:`md`,children:[(0,T.jsx)(g,{label:e(`audit:label_first_name`),fullWidth:!0}),(0,T.jsx)(g,{label:e(`audit:label_last_name`),fullWidth:!0}),(0,T.jsx)(_,{label:e(`audit:label_role`),fullWidth:!0,options:[]})]})}),(0,T.jsx)(C,{label:e(`audit:label_promo_code`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,T.jsxs)(m,{gap:`sm`,children:[(0,T.jsx)(g,{label:e(`audit:label_promo_code`),fullWidth:!0}),(0,T.jsx)(h,{children:e(`audit:label_apply`)})]})})]}),(0,T.jsxs)(S,{title:e(`audit:complex_form_consistency`),children:[(0,T.jsx)(C,{label:e(`audit:label_date_picker`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(v,{label:e(`audit:label_start_date`),fullWidth:!0})}),(0,T.jsx)(C,{label:e(`audit:label_slider`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(p,{pt:`md`,children:(0,T.jsx)(b,{label:e(`audit:label_volume_level`),defaultValue:70})})}),(0,T.jsx)(C,{label:e(`audit:label_combobox`),maxWidth:`var(--wim-width-md)`,align:`stretch`,children:(0,T.jsx)(c,{label:e(`audit:label_fruit`),options:[{label:`Apple`,value:`a`},{label:`Banana`,value:`b`}],fullWidth:!0})})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Overview`]}))();export{D as Overview,O as __namedExportsOrder,E as default};