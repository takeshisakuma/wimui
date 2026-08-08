"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{ar as c,ei as l,t as u,xr as d,yr as f}from"./src-BE5jBQ9L.js";import{i as p}from"./List-C4WUy_aA.js";import{t as m}from"./ToggleGroup-DkmsZqzA.js";import{t as h}from"./Checkbox-C9bITARL.js";import{r as g,s as _}from"./QueryBuilder-BvfWrLHb.js";import{r as v}from"./ImageCropper-C3fSHHzq.js";import{t as y}from"./ThemeToggle-D3RsqiuK.js";import{i as b,n as x,r as S,t as C}from"./AuditUtils-C0tQOUtW.js";var w,T,E,D,O,k,A,j,M,N;e((()=>{w=t(n(),1),o(),i(),u(),T=a(),b(),E={title:`Audit/SelectionFamily`,parameters:{layout:`fullscreen`}},D=({onChange:e,...t})=>{let[n,r]=w.useState(t.value||`a`);return(0,T.jsx)(_,{...t,value:n,onChange:e??r})},O=e=>{let[t,n]=w.useState(e.defaultValue||[]);return(0,T.jsx)(l,{...e,value:t,onChange:n})},k=e=>{let[t,n]=w.useState(e.defaultValue||``);return(0,T.jsx)(f,{...e,value:t,onChange:n})},A=e=>{let[t,n]=w.useState(e.defaultValue||``);return(0,T.jsx)(m,{...e,value:t,onChange:n})},j=e=>{let[t,n]=w.useState(e.defaultValue||[]);return(0,T.jsx)(c,{...e,value:t,onChange:n})},M={render:()=>{let{t:e}=r([...s,`audit`]);return(0,T.jsxs)(C,{title:e(`audit:selection_family_title`),children:[(0,T.jsxs)(x,{title:e(`audit:alignment_focus_check`),children:[(0,T.jsx)(S,{label:e(`audit:label_checkbox`),children:(0,T.jsx)(h,{children:e(`audit:sample_long_text`,{component:`Checkbox`})})}),(0,T.jsx)(S,{label:e(`audit:label_radio`),children:(0,T.jsx)(d,{name:`audit`,children:e(`audit:sample_long_text`,{component:`Radio`})})}),(0,T.jsx)(S,{label:e(`audit:label_switch`),children:(0,T.jsx)(g,{children:e(`audit:sample_long_text`,{component:`Switch`})})}),(0,T.jsx)(S,{label:e(`audit:label_segmented_control`),children:(0,T.jsx)(D,{options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],value:`a`})}),(0,T.jsxs)(S,{label:e(`audit:label_toggle_group`),children:[(0,T.jsx)(A,{options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],defaultValue:`a`}),(0,T.jsx)(A,{selectionMode:`multiple`,options:[{iconName:`CircleIcon`,value:`1`},{iconName:`SquareIcon`,value:`2`},{iconName:`LoadingIcon`,value:`3`}],defaultValue:[`1`]})]}),(0,T.jsxs)(S,{label:e(`audit:label_checkbox_group`),children:[(0,T.jsx)(O,{label:e(`audit:label_checkbox_group_vertical`),options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`},{label:e(`audit:label_option_3`),value:`3`}],defaultValue:[`1`]}),(0,T.jsx)(O,{label:e(`audit:label_checkbox_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`}],defaultValue:[`1`]})]}),(0,T.jsxs)(S,{label:e(`audit:label_radio_group`),children:[(0,T.jsx)(k,{label:e(`audit:label_radio_group_vertical`),options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`}],defaultValue:`a`}),(0,T.jsx)(k,{label:e(`audit:label_radio_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],defaultValue:`a`})]}),(0,T.jsxs)(S,{label:e(`audit:label_switch_group`),children:[(0,T.jsx)(j,{label:e(`audit:label_switch_group_vertical`),options:[{label:e(`audit:label_toggle_1`),value:`1`},{label:e(`audit:label_toggle_2`),value:`2`}],defaultValue:[`1`]}),(0,T.jsx)(j,{label:e(`audit:label_switch_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_toggle_1`),value:`1`},{label:e(`audit:label_toggle_2`),value:`2`}],defaultValue:[`1`]})]})]}),(0,T.jsxs)(x,{title:e(`audit:intent_comparison`),children:[(0,T.jsxs)(S,{label:e(`audit:label_intent_default`),children:[(0,T.jsx)(h,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,T.jsx)(d,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,T.jsx)(g,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,T.jsx)(v,{defaultValue:50,style:{width:`200px`},"aria-label":e(`audit:label_intent_default`)})]}),(0,T.jsxs)(S,{label:e(`audit:label_intent_error`),children:[(0,T.jsx)(h,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,T.jsx)(d,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,T.jsx)(g,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,T.jsx)(D,{options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],value:`a`,error:e(`audit:label_error_message`)}),(0,T.jsx)(A,{options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],defaultValue:`a`,error:e(`audit:label_error_message`)}),(0,T.jsx)(v,{defaultValue:40,style:{width:`200px`},"aria-label":e(`audit:label_intent_error`),error:e(`audit:label_error_message`)})]})]}),(0,T.jsx)(x,{title:e(`audit:states_disabled`),children:(0,T.jsxs)(S,{label:e(`audit:label_disabled`),children:[(0,T.jsx)(h,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,T.jsx)(d,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,T.jsx)(g,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,T.jsx)(v,{disabled:!0,defaultValue:30,style:{width:`200px`},"aria-label":e(`audit:label_disabled`)})]})}),(0,T.jsxs)(x,{title:e(`audit:selection_theme_toggle_check`),children:[(0,T.jsx)(S,{label:`${e(`audit:label_theme_toggle`)} — ${e(`audit:sfx_icon`)}`,align:`start`,children:(0,T.jsxs)(p,{direction:`row`,gap:`lg`,align:`center`,children:[(0,T.jsx)(y,{size:`sm`,applyToDocument:!1,storageKey:null}),(0,T.jsx)(y,{size:`md`,applyToDocument:!1,storageKey:null}),(0,T.jsx)(y,{size:`lg`,applyToDocument:!1,storageKey:null})]})}),(0,T.jsx)(S,{label:`${e(`audit:label_theme_toggle`)} — ${e(`audit:sfx_segmented`)}`,align:`start`,children:(0,T.jsxs)(p,{direction:`row`,gap:`lg`,align:`center`,children:[(0,T.jsx)(y,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`sm`,applyToDocument:!1,storageKey:null}),(0,T.jsx)(y,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`md`,applyToDocument:!1,storageKey:null}),(0,T.jsx)(y,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`lg`,applyToDocument:!1,storageKey:null})]})})]})]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:selection_family_title")}>
        {/* Alignment & Focus Check */}
        <ComparisonGrid title={t("audit:alignment_focus_check")}>
          <ComponentGroup label={t("audit:label_checkbox")}>
            <Checkbox>{t("audit:sample_long_text", {
              component: "Checkbox"
            })}</Checkbox>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radio")}>
            <Radio name="audit">{t("audit:sample_long_text", {
              component: "Radio"
            })}</Radio>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch")}>
            <Switch>{t("audit:sample_long_text", {
              component: "Switch"
            })}</Switch>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_segmented_control")}>
            <InteractiveSegmentedControl options={[{
            label: t("audit:label_option_a"),
            value: "a"
          }, {
            label: t("audit:label_option_b"),
            value: "b"
          }, {
            label: t("audit:label_option_c"),
            value: "c"
          }]} value="a" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_toggle_group")}>
            <InteractiveToggleGroup options={[{
            label: t("audit:label_option_a"),
            value: "a"
          }, {
            label: t("audit:label_option_b"),
            value: "b"
          }, {
            label: t("audit:label_option_c"),
            value: "c"
          }]} defaultValue="a" />
            <InteractiveToggleGroup selectionMode="multiple" options={[{
            iconName: "CircleIcon",
            value: "1"
          }, {
            iconName: "SquareIcon",
            value: "2"
          }, {
            iconName: "LoadingIcon",
            value: "3"
          }]} defaultValue={["1"]} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_checkbox_group")}>
            <InteractiveCheckboxGroup label={t("audit:label_checkbox_group_vertical")} options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }, {
            label: t("audit:label_option_2"),
            value: "2"
          }, {
            label: t("audit:label_option_3"),
            value: "3"
          }]} defaultValue={["1"]} />
            <InteractiveCheckboxGroup label={t("audit:label_checkbox_group_horizontal")} direction="horizontal" options={[{
            label: t("audit:label_option_1"),
            value: "1"
          }, {
            label: t("audit:label_option_2"),
            value: "2"
          }]} defaultValue={["1"]} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_radio_group")}>
            <InteractiveRadioGroup label={t("audit:label_radio_group_vertical")} options={[{
            label: t("audit:label_option_a"),
            value: "a"
          }, {
            label: t("audit:label_option_b"),
            value: "b"
          }]} defaultValue="a" />
            <InteractiveRadioGroup label={t("audit:label_radio_group_horizontal")} direction="horizontal" options={[{
            label: t("audit:label_option_a"),
            value: "a"
          }, {
            label: t("audit:label_option_b"),
            value: "b"
          }, {
            label: t("audit:label_option_c"),
            value: "c"
          }]} defaultValue="a" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_switch_group")}>
            <InteractiveSwitchGroup label={t("audit:label_switch_group_vertical")} options={[{
            label: t("audit:label_toggle_1"),
            value: "1"
          }, {
            label: t("audit:label_toggle_2"),
            value: "2"
          }]} defaultValue={["1"]} />
            <InteractiveSwitchGroup label={t("audit:label_switch_group_horizontal")} direction="horizontal" options={[{
            label: t("audit:label_toggle_1"),
            value: "1"
          }, {
            label: t("audit:label_toggle_2"),
            value: "2"
          }]} defaultValue={["1"]} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Intent Comparison */}
        <ComparisonGrid title={t("audit:intent_comparison")}>
          <ComponentGroup label={t("audit:label_intent_default")}>
            <Checkbox defaultChecked>{t("audit:label_intent_default")}</Checkbox>
            <Radio defaultChecked>{t("audit:label_intent_default")}</Radio>
            <Switch defaultChecked>{t("audit:label_intent_default")}</Switch>
            <Slider defaultValue={50} style={{
            width: "200px"
          }} aria-label={t("audit:label_intent_default")} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_intent_error")}>
            <Checkbox defaultChecked error>{t("audit:label_intent_error")}</Checkbox>
            <Radio defaultChecked error>{t("audit:label_intent_error")}</Radio>
            <Switch defaultChecked error>{t("audit:label_intent_error")}</Switch>
            <InteractiveSegmentedControl options={[{
            label: "A",
            value: "a"
          }, {
            label: "B",
            value: "b"
          }]} value="a" error={t("audit:label_error_message")} />
            <InteractiveToggleGroup options={[{
            label: "A",
            value: "a"
          }, {
            label: "B",
            value: "b"
          }]} defaultValue="a" error={t("audit:label_error_message")} />
            <Slider defaultValue={40} style={{
            width: "200px"
          }} aria-label={t("audit:label_intent_error")} error={t("audit:label_error_message")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* States Comparison */}
        <ComparisonGrid title={t("audit:states_disabled")}>
          <ComponentGroup label={t("audit:label_disabled")}>
            <Checkbox disabled defaultChecked>{t("audit:label_disabled")}</Checkbox>
            <Radio disabled defaultChecked>{t("audit:label_disabled")}</Radio>
            <Switch disabled defaultChecked>{t("audit:label_disabled")}</Switch>
            <Slider disabled defaultValue={30} style={{
            width: "200px"
          }} aria-label={t("audit:label_disabled")} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Theme Toggle Check */}
        <ComparisonGrid title={t("audit:selection_theme_toggle_check")}>
          <ComponentGroup label={\`\${t("audit:label_theme_toggle")} — \${t("audit:sfx_icon")}\`} align="start">
            <Stack direction="row" gap="lg" align="center">
              <ThemeToggle size="sm" applyToDocument={false} storageKey={null} />
              <ThemeToggle size="md" applyToDocument={false} storageKey={null} />
              <ThemeToggle size="lg" applyToDocument={false} storageKey={null} />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_theme_toggle")} — \${t("audit:sfx_segmented")}\`} align="start">
            <Stack direction="row" gap="lg" align="center">
              <ThemeToggle variant="segmented" modes={["light", "dark", "system"]} size="sm" applyToDocument={false} storageKey={null} />
              <ThemeToggle variant="segmented" modes={["light", "dark", "system"]} size="md" applyToDocument={false} storageKey={null} />
              <ThemeToggle variant="segmented" modes={["light", "dark", "system"]} size="lg" applyToDocument={false} storageKey={null} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Overview`]}))();export{M as Overview,N as __namedExportsOrder,E as default};