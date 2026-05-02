import React from "react";
import { ThoughtProcess, ThoughtStep } from "../../../src/components/ai/ThoughtProcess/ThoughtProcess";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ThoughtProcess> = {
  title: "Components/AI/ThoughtProcess",
  component: ThoughtProcess,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ThoughtProcess>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <ThoughtProcess title="Analyzing your request...">
        <ThoughtStep label="Step 1" status="completed">
          Searching for relevant documents in the knowledge base.
        </ThoughtStep>
        <ThoughtStep label="Step 2" status="completed">
          Extracting key information from the search results.
        </ThoughtStep>
        <ThoughtStep label="Step 3" status="pending">
          Generating a comprehensive answer based on the findings.
        </ThoughtStep>
        <ThoughtStep label="Step 4" status="pending" isLast>
          Reviewing the final response for accuracy.
        </ThoughtStep>
      </ThoughtProcess>
    </div>
  ),
};

export const ComplexReasoning: Story = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <ThoughtProcess title="Deep Reasoner v2.1" defaultExpanded={true}>
        <ThoughtStep label="Intent Analysis" status="completed">
          User is asking about the differences between React and Vue in 2024.
        </ThoughtStep>
        <ThoughtStep label="Knowledge Retrieval" status="completed">
          Retrieved 5 articles from the database.
          <ul>
            <li>State of JS 2023</li>
            <li>React 19 release notes</li>
            <li>Vue 3.4 performance benchmarks</li>
          </ul>
        </ThoughtStep>
        <ThoughtStep label="Conflict Resolution" status="error">
          Found conflicting information regarding &quot;Server Actions&quot; support in Vue.
        </ThoughtStep>
        <ThoughtStep label="Correction" status="completed">
          Self-corrected: Vue has a different approach to server-side logic called &quot;Nitro&quot; in Nuxt.
        </ThoughtStep>
        <ThoughtStep label="Synthesis" status="pending" isLast>
          Combining all findings into a structured comparison.
        </ThoughtStep>
      </ThoughtProcess>
    </div>
  ),
};

export const Static: Story = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <ThoughtProcess isCollapsible={false} title="Processing Log">
        <ThoughtStep status="completed">File uploaded: report.pdf</ThoughtStep>
        <ThoughtStep status="completed">OCR completed</ThoughtStep>
        <ThoughtStep status="completed" isLast>Analysis finished</ThoughtStep>
      </ThoughtProcess>
    </div>
  ),
};
