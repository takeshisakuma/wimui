"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-D0pTsuU-.js";import{n as u,t as d}from"./Checkbox-C6MCvMe9.js";import{n as f,t as p}from"./CheckboxGroup-al0azoVF.js";import{n as m,t as h}from"./Radio-H9OdoF6U.js";import{n as g,t as _}from"./RadioGroup-DDq5iP3q.js";import{n as v,t as y}from"./SegmentedControl-8FAYmOV2.js";import{n as b,t as x}from"./Slider-DERCCKeb.js";import{n as S,t as C}from"./Switch-BG9TlH9E.js";import{n as w,t as T}from"./SwitchGroup-BgPngDb-.js";import{n as E,t as D}from"./ToggleGroup-bCYBqjmw.js";import{n as O,t as k}from"./ThemeToggle-CxGCGr-I.js";import{i as A,n as j,r as M,t as N}from"./AuditUtils-DcuduY3M.js";var P,F,I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{P=e(n(),1),i(),a(),u(),f(),m(),g(),S(),w(),v(),E(),O(),b(),c(),F=s(),A(),I={title:`Audit/SelectionFamily`,parameters:{layout:`fullscreen`}},L=({onChange:e,...t})=>{let[n,r]=P.useState(t.value||`a`);return(0,F.jsx)(y,{...t,value:n,onChange:e??r})},R=e=>{let[t,n]=P.useState(e.defaultValue||[]);return(0,F.jsx)(p,{...e,value:t,onChange:n})},z=e=>{let[t,n]=P.useState(e.defaultValue||``);return(0,F.jsx)(_,{...e,value:t,onChange:n})},B=e=>{let[t,n]=P.useState(e.defaultValue||``);return(0,F.jsx)(D,{...e,value:t,onChange:n})},V=e=>{let[t,n]=P.useState(e.defaultValue||[]);return(0,F.jsx)(T,{...e,value:t,onChange:n})},H={render:()=>{let{t:e}=r([...o,`audit`]);return(0,F.jsxs)(N,{title:e(`audit:selection_family_title`),children:[(0,F.jsxs)(j,{title:e(`audit:alignment_focus_check`),children:[(0,F.jsx)(M,{label:e(`audit:label_checkbox`),children:(0,F.jsx)(d,{children:e(`audit:sample_long_text`,{component:`Checkbox`})})}),(0,F.jsx)(M,{label:e(`audit:label_radio`),children:(0,F.jsx)(h,{name:`audit`,children:e(`audit:sample_long_text`,{component:`Radio`})})}),(0,F.jsx)(M,{label:e(`audit:label_switch`),children:(0,F.jsx)(C,{children:e(`audit:sample_long_text`,{component:`Switch`})})}),(0,F.jsx)(M,{label:e(`audit:label_segmented_control`),children:(0,F.jsx)(L,{options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],value:`a`})}),(0,F.jsxs)(M,{label:e(`audit:label_toggle_group`),children:[(0,F.jsx)(B,{options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],defaultValue:`a`}),(0,F.jsx)(B,{selectionMode:`multiple`,options:[{iconName:`CircleIcon`,value:`1`},{iconName:`SquareIcon`,value:`2`},{iconName:`LoadingIcon`,value:`3`}],defaultValue:[`1`]})]}),(0,F.jsxs)(M,{label:e(`audit:label_checkbox_group`),children:[(0,F.jsx)(R,{label:e(`audit:label_checkbox_group_vertical`),options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`},{label:e(`audit:label_option_3`),value:`3`}],defaultValue:[`1`]}),(0,F.jsx)(R,{label:e(`audit:label_checkbox_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_option_1`),value:`1`},{label:e(`audit:label_option_2`),value:`2`}],defaultValue:[`1`]})]}),(0,F.jsxs)(M,{label:e(`audit:label_radio_group`),children:[(0,F.jsx)(z,{label:e(`audit:label_radio_group_vertical`),options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`}],defaultValue:`a`}),(0,F.jsx)(z,{label:e(`audit:label_radio_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_option_a`),value:`a`},{label:e(`audit:label_option_b`),value:`b`},{label:e(`audit:label_option_c`),value:`c`}],defaultValue:`a`})]}),(0,F.jsxs)(M,{label:e(`audit:label_switch_group`),children:[(0,F.jsx)(V,{label:e(`audit:label_switch_group_vertical`),options:[{label:e(`audit:label_toggle_1`),value:`1`},{label:e(`audit:label_toggle_2`),value:`2`}],defaultValue:[`1`]}),(0,F.jsx)(V,{label:e(`audit:label_switch_group_horizontal`),direction:`horizontal`,options:[{label:e(`audit:label_toggle_1`),value:`1`},{label:e(`audit:label_toggle_2`),value:`2`}],defaultValue:[`1`]})]})]}),(0,F.jsxs)(j,{title:e(`audit:intent_comparison`),children:[(0,F.jsxs)(M,{label:e(`audit:label_intent_default`),children:[(0,F.jsx)(d,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,F.jsx)(h,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,F.jsx)(C,{defaultChecked:!0,children:e(`audit:label_intent_default`)}),(0,F.jsx)(x,{defaultValue:50,style:{width:`200px`},"aria-label":e(`audit:label_intent_default`)})]}),(0,F.jsxs)(M,{label:e(`audit:label_intent_error`),children:[(0,F.jsx)(d,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,F.jsx)(h,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,F.jsx)(C,{defaultChecked:!0,error:!0,children:e(`audit:label_intent_error`)}),(0,F.jsx)(L,{options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],value:`a`,error:e(`audit:label_error_message`)}),(0,F.jsx)(B,{options:[{label:`A`,value:`a`},{label:`B`,value:`b`}],defaultValue:`a`,error:e(`audit:label_error_message`)}),(0,F.jsx)(x,{defaultValue:40,style:{width:`200px`},"aria-label":e(`audit:label_intent_error`),error:e(`audit:label_error_message`)})]})]}),(0,F.jsx)(j,{title:e(`audit:states_disabled`),children:(0,F.jsxs)(M,{label:e(`audit:label_disabled`),children:[(0,F.jsx)(d,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,F.jsx)(h,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,F.jsx)(C,{disabled:!0,defaultChecked:!0,children:e(`audit:label_disabled`)}),(0,F.jsx)(x,{disabled:!0,defaultValue:30,style:{width:`200px`},"aria-label":e(`audit:label_disabled`)})]})}),(0,F.jsxs)(j,{title:e(`audit:selection_theme_toggle_check`),children:[(0,F.jsx)(M,{label:`${e(`audit:label_theme_toggle`)} — ${e(`audit:sfx_icon`)}`,align:`start`,children:(0,F.jsxs)(l,{direction:`row`,gap:`lg`,align:`center`,children:[(0,F.jsx)(k,{size:`sm`,applyToDocument:!1,storageKey:null}),(0,F.jsx)(k,{size:`md`,applyToDocument:!1,storageKey:null}),(0,F.jsx)(k,{size:`lg`,applyToDocument:!1,storageKey:null})]})}),(0,F.jsx)(M,{label:`${e(`audit:label_theme_toggle`)} — ${e(`audit:sfx_segmented`)}`,align:`start`,children:(0,F.jsxs)(l,{direction:`row`,gap:`lg`,align:`center`,children:[(0,F.jsx)(k,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`sm`,applyToDocument:!1,storageKey:null}),(0,F.jsx)(k,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`md`,applyToDocument:!1,storageKey:null}),(0,F.jsx)(k,{variant:`segmented`,modes:[`light`,`dark`,`system`],size:`lg`,applyToDocument:!1,storageKey:null})]})})]})]})}},U=[`Overview`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Overview,U as __namedExportsOrder,I as default};