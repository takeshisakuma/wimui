"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-BNJo1pMu.js";import{n as l,t as u}from"./Grid-BYezJt6w.js";import{i as d,n as f,r as p,t as m}from"./AuditUtils-DQd41XyN.js";import{n as h,r as g}from"./AI.stories-urWteyUU.js";import{i as _,n as v,t as y}from"./Marketing.stories-BExvhutO.js";var b,x,S,C;function w(){return(w=e((()=>{t(),r(),i(),s(),l(),d(),g(),_(),b=o(),x={title:`Audit/PatternFamily`,parameters:{layout:`fullscreen`}},S={render:()=>{let{t:e}=n([...a,`audit`]);return(0,b.jsxs)(m,{title:e(`audit:pattern_family_title`),children:[(0,b.jsx)(f,{title:e(`audit:label_artifacts_canvas`),children:(0,b.jsx)(p,{label:e(`audit:pattern_artifacts_layout`),noStack:!0,children:(0,b.jsx)(c,{style:{height:`600px`,overflow:`hidden`},children:(0,b.jsx)(h.render,{})})})}),(0,b.jsx)(f,{title:e(`audit:pattern_comparison_std_title`),children:(0,b.jsx)(p,{label:e(`audit:pattern_comparison_std_label`),noStack:!0,children:(0,b.jsx)(c,{children:(0,b.jsx)(y.render,{})})})}),(0,b.jsx)(f,{title:e(`audit:label_feature_comparison`),children:(0,b.jsx)(p,{label:e(`audit:pattern_feature_comp_label`),noStack:!0,children:(0,b.jsx)(c,{children:(0,b.jsx)(v.render,{})})})}),(0,b.jsx)(f,{title:e(`audit:pattern_responsive_title`),children:(0,b.jsxs)(u,{cols:{base:1,lg:2},gap:`xl`,children:[(0,b.jsx)(p,{label:e(`audit:pattern_mobile_artifacts`),noStack:!0,children:(0,b.jsx)(c,{style:{width:`100%`,maxWidth:`375px`,height:`400px`,overflow:`hidden`,margin:`0 auto`},children:(0,b.jsx)(h.render,{isMobile:!0})})}),(0,b.jsx)(p,{label:e(`audit:pattern_mobile_comparison`),noStack:!0,children:(0,b.jsx)(c,{style:{width:`100%`,maxWidth:`375px`,margin:`0 auto`},children:(0,b.jsx)(y.render,{})})})]})})]})}},C=[`Overview`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    return <AuditPage title={t("audit:pattern_family_title")}>
        {/* ArtifactsCanvas Audit */}
        <ComparisonGrid title={t("audit:label_artifacts_canvas")}>
          <ComponentGroup label={t("audit:pattern_artifacts_layout")} noStack>
             <Box style={{
            height: "600px",
            overflow: "hidden"
          }}>
                {/* @ts-expect-error - Storybook render function */}
                <ArtifactsStories.ArtifactsCanvas.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* ComparisonTable (Original) Audit */}
        <ComparisonGrid title={t("audit:pattern_comparison_std_title")}>
          <ComponentGroup label={t("audit:pattern_comparison_std_label")} noStack>
             <Box>
                {/* @ts-expect-error - Storybook render function */}
                <FeatureStories.ComparisonTable.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* FeatureComparison (Advanced) Audit */}
        <ComparisonGrid title={t("audit:label_feature_comparison")}>
          <ComponentGroup label={t("audit:pattern_feature_comp_label")} noStack>
             <Box>
                {/* @ts-expect-error - Storybook render function */}
                <FeatureStories.FeatureComparison.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Responsive Check */}
        <ComparisonGrid title={t("audit:pattern_responsive_title")}>
           <Grid cols={{
          base: 1,
          lg: 2
        }} gap="xl">
              <ComponentGroup label={t("audit:pattern_mobile_artifacts")} noStack>
                 <Box style={{
              width: "100%",
              maxWidth: "375px",
              height: "400px",
              overflow: "hidden",
              margin: "0 auto"
            }}>
                    {/* @ts-expect-error - Storybook render function */}
                    <ArtifactsStories.ArtifactsCanvas.render isMobile={true} />
                 </Box>
              </ComponentGroup>
              <ComponentGroup label={t("audit:pattern_mobile_comparison")} noStack>
                 <Box style={{
              width: "100%",
              maxWidth: "375px",
              margin: "0 auto"
            }}>
                    {/* @ts-expect-error - Storybook render function */}
                    <FeatureStories.ComparisonTable.render />
                 </Box>
              </ComponentGroup>
           </Grid>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Overview,C as __namedExportsOrder,x as default};