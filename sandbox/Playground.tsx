import type React from "react";
import { Button, Card, Code, Grid, Group, Stack, Text, Title } from "wimui";

// The version StackBlitz will install. Read from package.json rather than
// written down: between releases this file holds the last published version,
// and inside a release PR it holds the one about to publish — which is exactly
// what the sandbox should ask for in both cases.
//
// It used to be the literal `^0.3.0`, and stayed there through seven releases.
// The comment below promised that the preview and the sandbox "can never
// drift"; that was true of the code and false of the version, so people opened
// a sandbox running a library seven minors older than the preview above it.
import { version as publishedVersion } from "../package.json";

// Live components (rendered in the docs preview) + their raw source (shipped to
// StackBlitz). Both come from the same file, so the preview and the sandbox can
// never drift. These recipes are app-shaped (no Storybook / i18n scaffolding),
// so their source runs unchanged against the published `wimui` package.
import BillingOverview from "./recipes/BillingOverview";
import billingSource from "./recipes/BillingOverview.tsx?raw";
import SignIn from "./recipes/SignIn";
import signInSource from "./recipes/SignIn.tsx?raw";
import NotificationSettings from "./recipes/NotificationSettings";
import settingsSource from "./recipes/NotificationSettings.tsx?raw";
import MembersTable from "./recipes/MembersTable";
import membersSource from "./recipes/MembersTable.tsx?raw";
import Onboarding from "./recipes/Onboarding";
import onboardingSource from "./recipes/Onboarding.tsx?raw";

type Recipe = {
  id: string;
  title: string;
  /** Omitted where the title already says it — not every card needs a caption. */
  description?: string;
  /**
   * Which gallery column the recipe belongs to. Tables and steppers need the
   * width; an auth card and a settings list do not. The featured recipe (the
   * first entry) spans both and has no column.
   */
  column?: "wide" | "narrow";
  Component: React.ComponentType;
  source: string;
};

const RECIPES: Recipe[] = [
  {
    id: "billing-overview",
    title: "Billing overview",
    description:
      "A KPI row over a dense invoice table. One customer has no plan and one payment failed — the two rows a billing screen actually has to survive.",
    Component: BillingOverview,
    source: billingSource,
  },
  {
    id: "members-table",
    title: "Members",
    description: "A search and role filter over a table that narrows as you type.",
    column: "wide",
    Component: MembersTable,
    source: membersSource,
  },
  {
    id: "sign-in",
    title: "Sign in",
    description: "One card, 380px, form left-aligned.",
    column: "narrow",
    Component: SignIn,
    source: signInSource,
  },
  {
    id: "onboarding",
    title: "Workspace onboarding",
    description: "Opened at step 2, the way you would find it after a reload.",
    column: "wide",
    Component: Onboarding,
    source: onboardingSource,
  },
  {
    id: "notification-settings",
    title: "Notification settings",
    column: "narrow",
    Component: NotificationSettings,
    source: settingsSource,
  },
];

// --- StackBlitz project scaffold (a minimal Vite + React 19 app) ------------

const PACKAGE_JSON = JSON.stringify(
  {
    name: "wimui-recipe",
    private: true,
    type: "module",
    scripts: { dev: "vite", build: "vite build" },
    dependencies: {
      wimui: `^${publishedVersion}`,
      react: "^19.0.0",
      "react-dom": "^19.0.0",
    },
    devDependencies: {
      "@vitejs/plugin-react": "^4.3.4",
      "@types/react": "^19.0.0",
      "@types/react-dom": "^19.0.0",
      typescript: "^5.7.0",
      vite: "^6.0.0",
    },
  },
  null,
  2,
);

const INDEX_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>wimui recipe</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

const MAIN_TSX = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "wimui/styles.css"; // REQUIRED: design tokens + component styles
import { WimProvider } from "wimui";
import Recipe from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WimProvider theme="system">
      <div
        style={{
          height: "100dvh",
          boxSizing: "border-box",
          padding: "var(--wim-spacing-4xl)",
          background: "var(--wim-color-surface-app)",
        }}
      >
        <Recipe />
      </div>
    </WimProvider>
  </StrictMode>,
);
`;

const VITE_CONFIG = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react()] });
`;

const TSCONFIG = JSON.stringify(
  {
    compilerOptions: {
      target: "ESNext",
      module: "ESNext",
      moduleResolution: "bundler",
      jsx: "react-jsx",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
    },
    include: ["src"],
  },
  null,
  2,
);

function projectFiles(appSource: string): Record<string, string> {
  return {
    "index.html": INDEX_HTML,
    "package.json": PACKAGE_JSON,
    "tsconfig.json": TSCONFIG,
    "vite.config.ts": VITE_CONFIG,
    "src/main.tsx": MAIN_TSX,
    "src/App.tsx": appSource,
  };
}

// Dependency-free "Open in StackBlitz": build and POST a form to /run. Field
// values are set via the DOM `.value` property, so any content (quotes,
// newlines) is carried safely without escaping.
function openInStackBlitz(recipe: Recipe): void {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://stackblitz.com/run?file=src/App.tsx";
  form.target = "_blank";
  form.rel = "noopener";
  form.style.display = "none";

  const add = (name: string, value: string) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  add("project[title]", `wimui — ${recipe.title}`);
  add("project[description]", recipe.description ?? `A wimui recipe: ${recipe.title}.`);
  add("project[template]", "node");
  for (const [path, content] of Object.entries(projectFiles(recipe.source))) {
    add(`project[files][${path}]`, content);
  }

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

// --- gallery ---------------------------------------------------------------

const HAIRLINE = "1px solid var(--wim-color-border-secondary)";

/** Live preview surface. Recipes sit on the app background, not on the card. */
function Preview({ Component, pad }: { Component: React.ComponentType; pad: string }) {
  return (
    <div style={{ padding: pad, background: "var(--wim-color-surface-app)", overflow: "auto" }}>
      <Component />
    </div>
  );
}

function SourceDisclosure({ source }: { source: string }) {
  return (
    <details style={{ borderTop: HAIRLINE }}>
      <summary
        style={{
          padding: "var(--wim-spacing-xl) var(--wim-spacing-2xl)",
          cursor: "pointer",
          fontSize: "var(--wim-font-size-sm)",
          color: "var(--wim-color-text-secondary)",
        }}
      >
        View source
      </summary>
      {/* Code brings its own vertical margin; the inset keeps its border off
          the card's. */}
      <div style={{ padding: "0 var(--wim-spacing-2xl)" }}>
        <Code block language="tsx" code={source} />
      </div>
    </details>
  );
}

/**
 * The protagonist: one recipe gets the full width, the heading treatment, and
 * the only solid button on the page. Its caption sits above the frame, so it
 * reads as a section rather than as another tile in the gallery.
 */
function FeaturedRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <Stack gap="xl">
      <Group justify="between" align="end" gap="2xl">
        {/* Capped to a readable measure — the page itself is much wider. */}
        <Stack gap="2xs" style={{ maxWidth: "58ch" }}>
          {/* One step below the page h1, one step above the card captions. */}
          <Title tag="h2" size="md">{recipe.title}</Title>
          <Text color="secondary">{recipe.description}</Text>
        </Stack>
        <Button variant="solid" onClick={() => openInStackBlitz(recipe)}>
          Open in StackBlitz
        </Button>
      </Group>

      {/* The preview fills the top edge, so the card has to clip — otherwise the
          preview's own background squares off the rounded corners. */}
      <Card padding="none" variant="outline" style={{ overflow: "hidden" }}>
        <Stack gap={0}>
          <Preview Component={recipe.Component} pad="var(--wim-spacing-4xl)" />
          <SourceDisclosure source={recipe.source} />
        </Stack>
      </Card>
    </Stack>
  );
}

/**
 * The rest. Caption below the preview (figure/caption order) so the screen is
 * what you see first, and a quiet button so the accent stays on the featured one.
 */
function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card padding="none" variant="outline" style={{ overflow: "hidden" }}>
      <Stack gap={0}>
        <Preview Component={recipe.Component} pad="var(--wim-spacing-3xl)" />

        <Group
          justify="between"
          align="center"
          gap="xl"
          style={{ padding: "var(--wim-spacing-2xl) var(--wim-spacing-3xl)", borderTop: HAIRLINE }}
        >
          <Stack gap="3xs">
            <Text weight="medium">{recipe.title}</Text>
            {recipe.description ? (
              <Text size="sm" color="secondary">{recipe.description}</Text>
            ) : null}
          </Stack>
          <Button
            variant="ghost"
            size="sm"
            aria-label={`Open ${recipe.title} in StackBlitz`}
            onClick={() => openInStackBlitz(recipe)}
          >
            Open
          </Button>
        </Group>

        <SourceDisclosure source={recipe.source} />
      </Stack>
    </Card>
  );
}

export function Playground() {
  const [featured, ...rest] = RECIPES;
  const column = (side: Recipe["column"]) =>
    rest
      .filter((recipe) => recipe.column === side)
      .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

  return (
    // Loose between the two groups, tight inside the gallery — proximity does
    // the grouping instead of a divider.
    //
    // `data-host-canary` is the anchor `vrt/host-matrix.spec.ts` uses to find
    // this same subtree in two different hosts (the canvas story and the MDX
    // body of Getting Started/Playground) and compare their computed styles.
    // It has to live on the component itself: the two hosts wrap it in
    // different chrome, so there is no positional selector that means the same
    // thing in both.
    <Stack gap="5xl" data-host-canary>
      <FeaturedRecipe recipe={featured} />

      {/* Two stacked columns rather than grid rows: cards keep their own height
          and pack against the one above, so a short recipe next to a tall one
          leaves no dead row. */}
      <Grid cols={{ base: 1, md: "minmax(0, 7fr) minmax(0, 5fr)" }} gap="2xl" align="start">
        <Stack gap="2xl">{column("wide")}</Stack>
        <Stack gap="2xl">{column("narrow")}</Stack>
      </Grid>
    </Stack>
  );
}
