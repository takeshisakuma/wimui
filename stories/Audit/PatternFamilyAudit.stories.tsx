import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Box,
  Grid,
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

// Import the stories to render them in the audit
import * as ArtifactsStories from "../Patterns/AI/AI.stories";
import * as FeatureStories from "../Patterns/Marketing/Marketing.stories";

const meta: Meta = {
  title: "Audit/PatternFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    return (
      <AuditPage title={t("audit:pattern_family_title")}>
        {/* ArtifactsCanvas Audit */}
        <ComparisonGrid title={t("audit:label_artifacts_canvas")}>
          <ComponentGroup label={t("audit:pattern_artifacts_layout")} noStack>
             {/* 高さは、中の画面と同じ 100vh にする（CI-18）。以前は 600px で切っていたので、中の画面
                 （高さ 100vh）の下が隠れ、隠れた部分の箱が次の節のラベルに重なっていた。見た目では
                 切り取られているが、axe は箱の位置で重なりを見るので、ラベルのコントラストを測らなかった。 */}
             <Box style={{ height: "100vh", overflow: "hidden" }}>
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
           <Grid cols={{ base: 1, lg: 2 }} gap="xl">
              <ComponentGroup label={t("audit:pattern_mobile_artifacts")} noStack>
                 <Box style={{ width: "100%", maxWidth: "375px", height: "400px", overflow: "hidden", margin: "0 auto" }}>
                    {/* @ts-expect-error - Storybook render function */}
                    <ArtifactsStories.ArtifactsCanvas.render isMobile={true} />
                 </Box>
              </ComponentGroup>
              <ComponentGroup label={t("audit:pattern_mobile_comparison")} noStack>
                 <Box style={{ width: "100%", maxWidth: "375px", margin: "0 auto" }}>
                    {/* @ts-expect-error - Storybook render function */}
                    <FeatureStories.ComparisonTable.render />
                 </Box>
              </ComponentGroup>
           </Grid>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
