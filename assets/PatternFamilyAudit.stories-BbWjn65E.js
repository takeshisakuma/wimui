"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-CIRVVv_5.js";import{Ni as s,t as c}from"./src-C35woejG.js";import{t as l}from"./Box-C3basXe9.js";import{i as u,n as d,r as f,t as p}from"./AuditUtils-vs3WH0lv.js";import{ArtifactsCanvas as m,t as h}from"./AI.stories-azyYgnJj.js";import{ComparisonTable as g,FeatureComparison as _,t as v}from"./Marketing.stories-BNhO0Ctb.js";var y,b,x,S;e((()=>{t(),n(),r(),c(),u(),h(),v(),y=a(),b={title:`Audit/PatternFamily`,parameters:{layout:`fullscreen`}},x={render:()=>{let{t:e}=i([...o,`audit`]);return(0,y.jsxs)(p,{title:e(`audit:pattern_family_title`),children:[(0,y.jsx)(d,{title:e(`audit:label_artifacts_canvas`),children:(0,y.jsx)(f,{label:e(`audit:pattern_artifacts_layout`),noStack:!0,children:(0,y.jsx)(l,{style:{height:`600px`,overflow:`hidden`},children:(0,y.jsx)(m.render,{})})})}),(0,y.jsx)(d,{title:e(`audit:pattern_comparison_std_title`),children:(0,y.jsx)(f,{label:e(`audit:pattern_comparison_std_label`),noStack:!0,children:(0,y.jsx)(l,{children:(0,y.jsx)(g.render,{})})})}),(0,y.jsx)(d,{title:e(`audit:label_feature_comparison`),children:(0,y.jsx)(f,{label:e(`audit:pattern_feature_comp_label`),noStack:!0,children:(0,y.jsx)(l,{children:(0,y.jsx)(_.render,{})})})}),(0,y.jsx)(d,{title:e(`audit:pattern_responsive_title`),children:(0,y.jsxs)(s,{cols:{base:1,lg:2},gap:`xl`,children:[(0,y.jsx)(f,{label:e(`audit:pattern_mobile_artifacts`),noStack:!0,children:(0,y.jsx)(l,{style:{width:`100%`,maxWidth:`375px`,height:`400px`,overflow:`hidden`,margin:`0 auto`},children:(0,y.jsx)(m.render,{isMobile:!0})})}),(0,y.jsx)(f,{label:e(`audit:pattern_mobile_comparison`),noStack:!0,children:(0,y.jsx)(l,{style:{width:`100%`,maxWidth:`375px`,margin:`0 auto`},children:(0,y.jsx)(g.render,{})})})]})})]})}},S=[`Overview`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}}))();export{x as Overview,S as __namedExportsOrder,b as default};