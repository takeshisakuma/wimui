import type React from "react";
import { Button, Card, Group, Stack, Text } from "wimui";

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
  description: string;
  Component: React.ComponentType;
  source: string;
};

const RECIPES: Recipe[] = [
  {
    id: "billing-overview",
    title: "Billing overview",
    description: "A KPI row over a dense invoice table — the composed-screen baseline.",
    Component: BillingOverview,
    source: billingSource,
  },
  {
    id: "sign-in",
    title: "Sign in",
    description: "A focused auth screen: one centered card, a real product form.",
    Component: SignIn,
    source: signInSource,
  },
  {
    id: "notification-settings",
    title: "Settings form",
    description: "Label-left / control-right rows grouped in a card, actions bottom-right.",
    Component: NotificationSettings,
    source: settingsSource,
  },
  {
    id: "members-table",
    title: "Filtered data table",
    description: "A search + role filter toolbar over a live-filtered members table.",
    Component: MembersTable,
    source: membersSource,
  },
  {
    id: "onboarding",
    title: "Onboarding flow",
    description: "A Stepper driving a single focused task per step.",
    Component: Onboarding,
    source: onboardingSource,
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
      wimui: "^0.3.0",
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
      <div style={{ padding: 24, minHeight: "100vh", background: "var(--wim-color-surface-app)" }}>
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
  add("project[description]", recipe.description);
  add("project[template]", "node");
  for (const [path, content] of Object.entries(projectFiles(recipe.source))) {
    add(`project[files][${path}]`, content);
  }

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

// --- gallery ---------------------------------------------------------------

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { Component } = recipe;
  return (
    <Card padding="none" variant="outline">
      <Stack gap={0}>
        <Group justify="between" align="center" gap="md" style={{ padding: "var(--wim-spacing-md)" }}>
          <Stack gap="3xs">
            <Text weight="medium">{recipe.title}</Text>
            <Text size="sm" color="secondary">{recipe.description}</Text>
          </Stack>
          <Button variant="solid" onClick={() => openInStackBlitz(recipe)}>
            Open in StackBlitz
          </Button>
        </Group>

        {/* Live preview — the same component whose source ships to the sandbox */}
        <div
          style={{
            padding: "var(--wim-spacing-lg)",
            borderTop: "1px solid var(--wim-color-border-secondary)",
            background: "var(--wim-color-surface-app)",
            overflow: "auto",
          }}
        >
          <Component />
        </div>

        <details style={{ borderTop: "1px solid var(--wim-color-border-secondary)" }}>
          <summary
            style={{
              padding: "var(--wim-spacing-sm) var(--wim-spacing-md)",
              cursor: "pointer",
              color: "var(--wim-color-text-secondary)",
              fontSize: 14,
            }}
          >
            View source
          </summary>
          <pre
            style={{
              margin: 0,
              padding: "var(--wim-spacing-md)",
              overflow: "auto",
              fontSize: 13,
              lineHeight: 1.5,
              background: "var(--wim-color-surface-subtle)",
            }}
          >
            <code>{recipe.source}</code>
          </pre>
        </details>
      </Stack>
    </Card>
  );
}

export function Playground() {
  return (
    <Stack gap="xl">
      {RECIPES.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Stack>
  );
}
