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
          <ComponentGroup label="AI Artifacts Layout (Split Pane)" noStack>
             <Box style={{ height: "600px", overflow: "hidden" }}>
                {/* @ts-expect-error - Storybook render function */}
                <ArtifactsStories.ArtifactsCanvas.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* ComparisonTable (Original) Audit */}
        <ComparisonGrid title="ComparisonTable (Standard)">
          <ComponentGroup label="Original simple comparison table" noStack>
             <Box>
                {/* @ts-expect-error - Storybook render function */}
                <FeatureStories.ComparisonTable.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* FeatureComparison (Advanced) Audit */}
        <ComparisonGrid title={t("audit:label_feature_comparison")}>
          <ComponentGroup label="Advanced tiered feature comparison" noStack>
             <Box>
                {/* @ts-expect-error - Storybook render function */}
                <FeatureStories.FeatureComparison.render />
             </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Responsive Check */}
        <ComparisonGrid title="Responsive Composition Check">
           <Grid cols={{ base: 1, lg: 2 }} gap="xl">
              <ComponentGroup label="Mobile Artifacts (Partial View)" noStack>
                 <Box style={{ width: "100%", maxWidth: "375px", height: "400px", overflow: "hidden", margin: "0 auto" }}>
                    {/* @ts-expect-error - Storybook render function */}
                    <ArtifactsStories.ArtifactsCanvas.render isMobile={true} />
                 </Box>
              </ComponentGroup>
              <ComponentGroup label="Mobile Comparison (Scrolled View)" noStack>
                 <Box style={{ width: "100%", maxWidth: "375px", height: "400px", overflow: "auto", margin: "0 auto" }}>
                    <Box style={{ transform: "scale(0.9)", transformOrigin: "top left", width: "111%" }}>
                       {/* @ts-expect-error - Storybook render function */}
                       <FeatureStories.ComparisonTable.render />
                    </Box>
                 </Box>
              </ComponentGroup>
           </Grid>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
