import type { Meta, StoryObj } from "@storybook/react-vite";
import { Playground } from "../../../sandbox/Playground";

/**
 * The Getting Started/Playground gallery, rendered as a story so it lands in
 * VRT — which in turn makes it scorable by `npm run judge:slop` (the judge
 * reads `vrt/vrt.spec.ts-snapshots/light-patterns-*.png`).
 *
 * The docs page owns the page chrome (heading, intro, note); this story is the
 * gallery itself, which is the part the composition rules apply to.
 */
const meta: Meta<typeof Playground> = {
  title: "Patterns/Playground",
  component: Playground,
  parameters: {
    layout: "fullscreen",
    // The gallery is a page-level composition; a padded canvas would change the
    // proportions the judge sees.
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof Playground>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        padding: "var(--wim-spacing-4xl)",
        maxWidth: "var(--wim-breakpoint-xl)",
        margin: "0 auto",
        background: "var(--wim-color-surface-app)",
      }}
    >
      <Playground />
    </div>
  ),
};
