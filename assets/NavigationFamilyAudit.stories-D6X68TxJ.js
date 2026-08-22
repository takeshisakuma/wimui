"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{Ft as s,Gt as c,It as l,Lt as u,Pt as d,Tn as f,Ut as p,rn as m,t as h}from"./src-Ssuy8lr7.js";import{t as g}from"./Box--bAE-pUN.js";import{t as _}from"./Stack-CC3QEopK.js";import{t as v}from"./Text-DzblcqZm.js";import{t as y}from"./Menubar-DekPBU36.js";import{i as b,n as x,r as S,t as C}from"./AuditUtils-Cal9MsZq.js";var w,T,E,D;e((()=>{t(),a(),r(),h(),w=i(),b(),T={title:`Audit/NavigationFamily`,parameters:{layout:`fullscreen`}},E={render:()=>{let{t:e}=n([...o,`audit`]);return(0,w.jsxs)(C,{title:e(`audit:navigation_family_title`),children:[(0,w.jsxs)(x,{title:e(`audit:state_expression_check`),children:[(0,w.jsx)(S,{label:e(`audit:label_stepper`),children:(0,w.jsx)(p,{current:1,steps:[{title:e(`audit:label_step_completed`),intent:`finish`},{title:e(`audit:label_step_current`),intent:`process`},{title:e(`audit:label_step_pending`),intent:`wait`}]})}),(0,w.jsx)(S,{label:e(`audit:label_progress`),children:(0,w.jsxs)(_,{gap:`md`,children:[(0,w.jsx)(f,{value:100,intent:`success`,label:e(`audit:label_progress_success`),showValue:!0}),(0,w.jsx)(f,{value:60,intent:`primary`,label:e(`audit:label_progress_primary`),showValue:!0}),(0,w.jsx)(f,{value:30,intent:`warning`,label:e(`audit:label_progress_warning`),showValue:!0}),(0,w.jsx)(f,{value:70,intent:`danger`,label:e(`audit:label_progress_error`),showValue:!0})]})})]}),(0,w.jsxs)(x,{title:`${e(`audit:active_contrast_check`)} & ${e(`audit:clickable_area_check`)}`,children:[(0,w.jsx)(S,{label:e(`audit:label_tabs`),children:(0,w.jsxs)(l,{defaultValue:`1`,children:[(0,w.jsxs)(s,{children:[(0,w.jsx)(u,{value:`1`,children:e(`audit:nav_tab_active`)}),(0,w.jsx)(u,{value:`2`,children:e(`audit:nav_tab_default`)}),(0,w.jsx)(u,{value:`3`,disabled:!0,children:e(`audit:nav_tab_disabled`)})]}),(0,w.jsx)(d,{value:`1`,children:(0,w.jsx)(g,{p:`md`,children:(0,w.jsx)(v,{children:e(`audit:nav_active_content`)})})}),(0,w.jsx)(d,{value:`2`,children:(0,w.jsx)(g,{p:`md`,children:(0,w.jsx)(v,{children:e(`audit:nav_default_content`)})})})]})}),(0,w.jsx)(S,{label:e(`audit:label_pagination`),children:(0,w.jsx)(c,{total:100,current:1,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`})}),(0,w.jsx)(S,{label:e(`audit:label_menubar`),align:`start`,children:(0,w.jsxs)(y,{"aria-label":e(`audit:sample_menubar_label`),children:[(0,w.jsxs)(y.Menu,{value:`file`,children:[(0,w.jsx)(y.Trigger,{children:e(`audit:sample_menubar_file`)}),(0,w.jsxs)(y.Content,{children:[(0,w.jsx)(y.Item,{children:e(`audit:sample_menubar_new`)}),(0,w.jsx)(y.Item,{children:e(`audit:sample_menubar_open`)})]})]}),(0,w.jsxs)(y.Menu,{value:`edit`,children:[(0,w.jsx)(y.Trigger,{children:e(`action.edit`)}),(0,w.jsxs)(y.Content,{children:[(0,w.jsx)(y.Item,{children:e(`action.copy`)}),(0,w.jsx)(y.Item,{children:e(`action.delete`)})]})]})]})}),(0,w.jsx)(S,{label:e(`audit:label_breadcrumbs`),children:(0,w.jsx)(m,{items:[{label:`Home`,href:`/`},{label:`Category`,href:`/category`},{label:e(`audit:nav_current_page`)}]})})]})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Overview`]}))();export{E as Overview,D as __namedExportsOrder,T as default};