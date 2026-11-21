"use client";
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-BGJ90fIb.js";import{n,t as r}from"./useTranslation-CpMdOj2B.js";import{n as i,t as a}from"./i18nConstants-YD8z3mm4.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./SkipLink-CJcYosVJ.js";import{n as l,t as u}from"./Box-B1y3gmHG.js";import{n as d,t as f}from"./Stack-SbfzwNKR.js";import{n as p,t as m}from"./Text-D9yqbrao.js";import{n as h,t as g}from"./Progress-CTz6hNjM.js";import{n as _,t as v}from"./Breadcrumb-0zzUajV2.js";import{n as y,t as b}from"./Pagination-D5IAOOgc.js";import{n as x,t as S}from"./Stepper-WdngAnO6.js";import{a as C,i as w,n as T,r as E,t as D}from"./Tabs-DvJcb5Xy.js";import{n as O,t as k}from"./Menubar-Bvd9ku0b.js";import{i as A,n as j,r as M,t as N}from"./AuditUtils-DTsCA1qz.js";var P,F,I,L;function R(){return(R=e((()=>{t(),r(),i(),_(),s(),x(),O(),y(),C(),h(),d(),p(),l(),P=o(),A(),F={title:`Audit/NavigationFamily`,parameters:{layout:`fullscreen`}},I={render:()=>{let{t:e}=n([...a,`audit`]);return(0,P.jsxs)(N,{title:e(`audit:navigation_family_title`),children:[(0,P.jsxs)(j,{title:e(`audit:state_expression_check`),children:[(0,P.jsx)(M,{label:e(`audit:label_stepper`),children:(0,P.jsx)(S,{current:1,steps:[{title:e(`audit:label_step_completed`),intent:`finish`},{title:e(`audit:label_step_current`),intent:`process`},{title:e(`audit:label_step_pending`),intent:`wait`}]})}),(0,P.jsx)(M,{label:e(`audit:label_progress`),children:(0,P.jsxs)(f,{gap:`md`,children:[(0,P.jsx)(g,{value:100,intent:`success`,label:e(`audit:label_progress_success`),showValue:!0}),(0,P.jsx)(g,{value:60,intent:`primary`,label:e(`audit:label_progress_primary`),showValue:!0}),(0,P.jsx)(g,{value:30,intent:`warning`,label:e(`audit:label_progress_warning`),showValue:!0}),(0,P.jsx)(g,{value:70,intent:`danger`,label:e(`audit:label_progress_error`),showValue:!0})]})})]}),(0,P.jsxs)(j,{title:`${e(`audit:active_contrast_check`)} & ${e(`audit:clickable_area_check`)}`,children:[(0,P.jsx)(M,{label:e(`audit:label_tabs`),children:(0,P.jsxs)(E,{defaultValue:`1`,children:[(0,P.jsxs)(T,{children:[(0,P.jsx)(w,{value:`1`,children:e(`audit:nav_tab_active`)}),(0,P.jsx)(w,{value:`2`,children:e(`audit:nav_tab_default`)}),(0,P.jsx)(w,{value:`3`,disabled:!0,children:e(`audit:nav_tab_disabled`)})]}),(0,P.jsx)(D,{value:`1`,children:(0,P.jsx)(u,{p:`md`,children:(0,P.jsx)(m,{children:e(`audit:nav_active_content`)})})}),(0,P.jsx)(D,{value:`2`,children:(0,P.jsx)(u,{p:`md`,children:(0,P.jsx)(m,{children:e(`audit:nav_default_content`)})})})]})}),(0,P.jsx)(M,{label:e(`audit:label_pagination`),children:(0,P.jsx)(b,{total:100,current:1,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`})}),(0,P.jsx)(M,{label:e(`audit:label_menubar`),align:`start`,children:(0,P.jsxs)(k,{"aria-label":e(`audit:sample_menubar_label`),children:[(0,P.jsxs)(k.Menu,{value:`file`,children:[(0,P.jsx)(k.Trigger,{children:e(`audit:sample_menubar_file`)}),(0,P.jsxs)(k.Content,{children:[(0,P.jsx)(k.Item,{children:e(`audit:sample_menubar_new`)}),(0,P.jsx)(k.Item,{children:e(`audit:sample_menubar_open`)})]})]}),(0,P.jsxs)(k.Menu,{value:`edit`,children:[(0,P.jsx)(k.Trigger,{children:e(`action.edit`)}),(0,P.jsxs)(k.Content,{children:[(0,P.jsx)(k.Item,{children:e(`action.copy`)}),(0,P.jsx)(k.Item,{children:e(`action.delete`)})]})]})]})}),(0,P.jsx)(M,{label:e(`audit:label_skiplink`),children:(0,P.jsx)(c,{href:`#audit-nav-breadcrumbs`})}),(0,P.jsx)(M,{label:e(`audit:label_breadcrumbs`),children:(0,P.jsx)(`div`,{id:`audit-nav-breadcrumbs`,children:(0,P.jsx)(v,{items:[{label:`Home`,href:`/`},{label:`Category`,href:`/category`},{label:e(`audit:nav_current_page`)}]})})})]})]})}},L=[`Overview`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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

          <ComponentGroup label={t("audit:label_skiplink")}>
            <SkipLink href="#audit-nav-breadcrumbs" />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_breadcrumbs")}>
            <div id="audit-nav-breadcrumbs">
              <Breadcrumb items={[{
              label: "Home",
              href: "/"
            }, {
              label: "Category",
              href: "/category"
            }, {
              label: t("audit:nav_current_page")
            }]} />
            </div>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Overview,L as __namedExportsOrder,F as default};