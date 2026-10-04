"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-lSx-_C-t.js";import{n as l,t as u}from"./Stack-D0pTsuU-.js";import{n as d,t as f}from"./Text-8oARqUeB.js";import{n as p,t as m}from"./Progress-C0zI57n2.js";import{n as h,t as g}from"./Breadcrumb-Duuqgl58.js";import{n as _,t as v}from"./Pagination-D1jcCDv6.js";import{n as y,t as b}from"./Stepper-DxP9dpnW.js";import{a as x,i as S,n as C,r as w,t as T}from"./Tabs-DzQQ5vFE.js";import{n as E,t as D}from"./Menubar-C5CztJ-c.js";import{i as O,n as k,r as A,t as j}from"./AuditUtils-DcuduY3M.js";var M,N,P,F;function I(){return(I=e((()=>{t(),r(),i(),h(),y(),E(),_(),x(),p(),l(),d(),s(),M=o(),O(),N={title:`Audit/NavigationFamily`,parameters:{layout:`fullscreen`}},P={render:()=>{let{t:e}=n([...a,`audit`]);return(0,M.jsxs)(j,{title:e(`audit:navigation_family_title`),children:[(0,M.jsxs)(k,{title:e(`audit:state_expression_check`),children:[(0,M.jsx)(A,{label:e(`audit:label_stepper`),children:(0,M.jsx)(b,{current:1,steps:[{title:e(`audit:label_step_completed`),intent:`finish`},{title:e(`audit:label_step_current`),intent:`process`},{title:e(`audit:label_step_pending`),intent:`wait`}]})}),(0,M.jsx)(A,{label:e(`audit:label_progress`),children:(0,M.jsxs)(u,{gap:`md`,children:[(0,M.jsx)(m,{value:100,intent:`success`,label:e(`audit:label_progress_success`),showValue:!0}),(0,M.jsx)(m,{value:60,intent:`primary`,label:e(`audit:label_progress_primary`),showValue:!0}),(0,M.jsx)(m,{value:30,intent:`warning`,label:e(`audit:label_progress_warning`),showValue:!0}),(0,M.jsx)(m,{value:70,intent:`danger`,label:e(`audit:label_progress_error`),showValue:!0})]})})]}),(0,M.jsxs)(k,{title:`${e(`audit:active_contrast_check`)} & ${e(`audit:clickable_area_check`)}`,children:[(0,M.jsx)(A,{label:e(`audit:label_tabs`),children:(0,M.jsxs)(w,{defaultValue:`1`,children:[(0,M.jsxs)(C,{children:[(0,M.jsx)(S,{value:`1`,children:e(`audit:nav_tab_active`)}),(0,M.jsx)(S,{value:`2`,children:e(`audit:nav_tab_default`)}),(0,M.jsx)(S,{value:`3`,disabled:!0,children:e(`audit:nav_tab_disabled`)})]}),(0,M.jsx)(T,{value:`1`,children:(0,M.jsx)(c,{p:`md`,children:(0,M.jsx)(f,{children:e(`audit:nav_active_content`)})})}),(0,M.jsx)(T,{value:`2`,children:(0,M.jsx)(c,{p:`md`,children:(0,M.jsx)(f,{children:e(`audit:nav_default_content`)})})})]})}),(0,M.jsx)(A,{label:e(`audit:label_pagination`),children:(0,M.jsx)(v,{total:100,current:1,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`})}),(0,M.jsx)(A,{label:e(`audit:label_menubar`),align:`start`,children:(0,M.jsxs)(D,{"aria-label":e(`audit:sample_menubar_label`),children:[(0,M.jsxs)(D.Menu,{value:`file`,children:[(0,M.jsx)(D.Trigger,{children:e(`audit:sample_menubar_file`)}),(0,M.jsxs)(D.Content,{children:[(0,M.jsx)(D.Item,{children:e(`audit:sample_menubar_new`)}),(0,M.jsx)(D.Item,{children:e(`audit:sample_menubar_open`)})]})]}),(0,M.jsxs)(D.Menu,{value:`edit`,children:[(0,M.jsx)(D.Trigger,{children:e(`action.edit`)}),(0,M.jsxs)(D.Content,{children:[(0,M.jsx)(D.Item,{children:e(`action.copy`)}),(0,M.jsx)(D.Item,{children:e(`action.delete`)})]})]})]})}),(0,M.jsx)(A,{label:e(`audit:label_breadcrumbs`),children:(0,M.jsx)(g,{items:[{label:`Home`,href:`/`},{label:`Category`,href:`/category`},{label:e(`audit:nav_current_page`)}]})})]})]})}},F=[`Overview`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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

          <ComponentGroup label={t("audit:label_menubar")} align="start">
            <Menubar aria-label={t("audit:sample_menubar_label")}>
              <Menubar.Menu value="file">
                <Menubar.Trigger>{t("audit:sample_menubar_file")}</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>{t("audit:sample_menubar_new")}</Menubar.Item>
                  <Menubar.Item>{t("audit:sample_menubar_open")}</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>
              <Menubar.Menu value="edit">
                <Menubar.Trigger>{t("action.edit")}</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>{t("action.copy")}</Menubar.Item>
                  <Menubar.Item>{t("action.delete")}</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>
            </Menubar>
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
}`,...P.parameters?.docs?.source}}}})))()}I();export{P as Overview,F as __namedExportsOrder,N as default};