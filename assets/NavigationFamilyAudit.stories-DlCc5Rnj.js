"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{Ft as s,Ht as c,It as l,Nt as u,Pt as d,Wt as f,nn as p,t as m,wn as h}from"./src-BE5jBQ9L.js";import{t as g}from"./Box-Bs2Irq0X.js";import{i as _}from"./List-C4WUy_aA.js";import{t as v}from"./Text-B6DLYHMc.js";import{i as y,n as b,r as x,t as S}from"./AuditUtils-C0tQOUtW.js";var C,w,T,E;e((()=>{t(),a(),r(),m(),C=i(),y(),w={title:`Audit/NavigationFamily`,parameters:{layout:`fullscreen`}},T={render:()=>{let{t:e}=n([...o,`audit`]);return(0,C.jsxs)(S,{title:e(`audit:navigation_family_title`),children:[(0,C.jsxs)(b,{title:e(`audit:state_expression_check`),children:[(0,C.jsx)(x,{label:e(`audit:label_stepper`),children:(0,C.jsx)(c,{current:1,steps:[{title:e(`audit:label_step_completed`),intent:`finish`},{title:e(`audit:label_step_current`),intent:`process`},{title:e(`audit:label_step_pending`),intent:`wait`}]})}),(0,C.jsx)(x,{label:e(`audit:label_progress`),children:(0,C.jsxs)(_,{gap:`md`,children:[(0,C.jsx)(h,{value:100,intent:`success`,label:e(`audit:label_progress_success`),showValue:!0}),(0,C.jsx)(h,{value:60,intent:`primary`,label:e(`audit:label_progress_primary`),showValue:!0}),(0,C.jsx)(h,{value:30,intent:`warning`,label:e(`audit:label_progress_warning`),showValue:!0}),(0,C.jsx)(h,{value:70,intent:`danger`,label:e(`audit:label_progress_error`),showValue:!0})]})})]}),(0,C.jsxs)(b,{title:`${e(`audit:active_contrast_check`)} & ${e(`audit:clickable_area_check`)}`,children:[(0,C.jsx)(x,{label:e(`audit:label_tabs`),children:(0,C.jsxs)(s,{defaultValue:`1`,children:[(0,C.jsxs)(d,{children:[(0,C.jsx)(l,{value:`1`,children:e(`audit:nav_tab_active`)}),(0,C.jsx)(l,{value:`2`,children:e(`audit:nav_tab_default`)}),(0,C.jsx)(l,{value:`3`,disabled:!0,children:e(`audit:nav_tab_disabled`)})]}),(0,C.jsx)(u,{value:`1`,children:(0,C.jsx)(g,{p:`md`,children:(0,C.jsx)(v,{children:e(`audit:nav_active_content`)})})}),(0,C.jsx)(u,{value:`2`,children:(0,C.jsx)(g,{p:`md`,children:(0,C.jsx)(v,{children:e(`audit:nav_default_content`)})})})]})}),(0,C.jsx)(x,{label:e(`audit:label_pagination`),children:(0,C.jsx)(f,{total:100,current:1,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`})}),(0,C.jsx)(x,{label:e(`audit:label_breadcrumbs`),children:(0,C.jsx)(p,{items:[{label:`Home`,href:`/`},{label:`Category`,href:`/category`},{label:e(`audit:nav_current_page`)}]})})]})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:navigation_family_title")}>
        {/* State Expression Audit */}
        <ComparisonGrid title={t("audit:state_expression_check")}>
          <ComponentGroup label={t("audit:label_stepper")}>
            <Stepper current={1} steps={[{
            title: t("audit:label_step_completed"),
            intent: "finish"
          }, {
            title: t("audit:label_step_current"),
            intent: "process"
          }, {
            title: t("audit:label_step_pending"),
            intent: "wait"
          }]} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_progress")}>
            <Stack gap="md">
              <Progress value={100} intent="success" label={t("audit:label_progress_success")} showValue />
              <Progress value={60} intent="primary" label={t("audit:label_progress_primary")} showValue />
              <Progress value={30} intent="warning" label={t("audit:label_progress_warning")} showValue />
              <Progress value={70} intent="danger" label={t("audit:label_progress_error")} showValue />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Active Contrast & Clickable Area Audit */}
        <ComparisonGrid title={\`\${t("audit:active_contrast_check")} & \${t("audit:clickable_area_check")}\`}>
          <ComponentGroup label={t("audit:label_tabs")}>
            <Tabs defaultValue="1">
              <TabsList>
                <TabsTrigger value="1">{t("audit:nav_tab_active")}</TabsTrigger>
                <TabsTrigger value="2">{t("audit:nav_tab_default")}</TabsTrigger>
                <TabsTrigger value="3" disabled>{t("audit:nav_tab_disabled")}</TabsTrigger>
              </TabsList>
              <TabsContent value="1">
                <Box p="md"><Text>{t("audit:nav_active_content")}</Text></Box>
              </TabsContent>
              <TabsContent value="2">
                <Box p="md"><Text>{t("audit:nav_default_content")}</Text></Box>
              </TabsContent>
            </Tabs>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_pagination")}>
            <Pagination total={100} current={1} showSizeChanger showQuickJumper showTotal={total => \`Total \${total} items\`} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_breadcrumbs")}>
            <Breadcrumb items={[{
            label: "Home",
            href: "/"
          }, {
            label: "Category",
            href: "/category"
          }, {
            label: t("audit:nav_current_page")
          }]} />
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Overview`]}))();export{T as Overview,E as __namedExportsOrder,w as default};