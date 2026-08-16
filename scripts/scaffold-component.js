import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const componentName = process.argv[2];
const category = process.argv[3]; // physical category, e.g. form, layout, feedback
const targetIdArg = process.argv[4]; // optional category ID in components.json

if (!componentName || !category) {
  console.log('Usage: npm run scaffold -- <ComponentName> <category> [categoryId]');
  console.log('Example: npm run scaffold -- MyInput form basic-inputs');
  process.exit(1);
}

const componentDir = path.join(__dirname, '../src/components', category, componentName);
const storiesDir = path.join(__dirname, '../stories', category, componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Error: Component ${componentName} already exists in ${category}.`);
  process.exit(1);
}

// Create directories
fs.mkdirSync(componentDir, { recursive: true });
fs.mkdirSync(storiesDir, { recursive: true });

// 頭字語ラン対応の kebab（QRCode->qr-code, AIResponseFeedback->ai-response-feedback）。
// scripts/check-root-hooks.js の toKebab と一致させること。
const kebabName = componentName
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/([a-z\d])([A-Z])/g, '$1-$2')
  .toLowerCase();

function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

// 1. Component TSX
const tsx = `import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import localStyles from "./${kebabName}.module.scss";

export type ${componentName}Props = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

/**
 * ${componentName} component description.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Root = asChild ? Slot : "div";

    return (
      <Root
        ref={ref}
        className={classNames("wim-${kebabName}", localStyles.root, className)}
        {...props}
      >
        {children}
      </Root>
    );
  }
);

${componentName}.displayName = "${componentName}";
`;

// 2. Component SCSS
const scss = `@use "../../../tokens/breakpoints" as breakpoints;

@layer component {
  .root {
    display: block;
    // Add styles using tokens. Example:
    // padding: var(--wim-spacing-md);

    // Responsive: UIコンポーネントにはコンテナクエリを使用する。
    // ビューポート全体に依存するレイアウト（AppShell等）のみメディアクエリ（@include breakpoints.down()）を使う。
    // @include breakpoints.container-down(md) {
    //   flex-direction: column;
    // }
  }
}
`;

// 3. Test TSX
const test = `import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ${componentName} } from "./${componentName}";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("${componentName}", () => {
  it("renders correctly", () => {
    render(<${componentName}>Test content</${componentName}>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <${componentName} asChild>
        <span data-testid="child">Child</span>
      </${componentName}>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
`;

// 4. Stories TSX
const stories = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${componentName} } from "@/components/${category}/${componentName}/${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/${category.charAt(0).toUpperCase() + category.slice(1)}/${componentName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    children: "${componentName} Content",
  },
};
`;

// 5. MDX
const mdx = `import { Meta, Canvas, Controls, Title, Primary, Stories } from "@storybook/blocks";
import * as ${componentName}Stories from "./${componentName}.stories";
import { T } from "../../T";
import { Docgen } from "../../Docgen";

<Meta of={${componentName}Stories} />

<Title />

${componentName} description...

<Canvas of={${componentName}Stories.Default} />
<Controls of={${componentName}Stories.Default} />

## <T k="doc.design_intent_title" />

Design intent here...

## <T k="doc.choice_matrix_title" />

Choice matrix here...

<Docgen componentName="${componentName}" section="anatomy" />

## <T k="doc.content_guidelines_title" />

Content guidelines here...

## <T k="doc.motion_spec_title" />

Motion spec here...

## <T k="doc.a11y_spec_title" />

A11y spec here...

## <T k="doc.real_world_scenarios_title" />

Real world scenarios here...

## <T k="doc.best_practices_title" />

Best practices here...

<Docgen componentName="${componentName}" section="props" />

<Docgen componentName="${componentName}" section="tokens" />

## <T k="doc.responsive_title" />

Responsive design info here...

## <T k="doc.keyboard_nav_title" />

Keyboard navigation info here...

## <T k="doc.i18n_title" />

I18n info here...

<Docgen componentName="${componentName}" section="test" />

<Primary />

{/* <Stories /> */}
`;

// Write files
fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsx);
fs.writeFileSync(path.join(componentDir, `${kebabName}.module.scss`), scss);
fs.writeFileSync(path.join(componentDir, `${componentName}.test.tsx`), test);
fs.writeFileSync(path.join(storiesDir, `${componentName}.stories.tsx`), stories);
fs.writeFileSync(path.join(storiesDir, `${componentName}.mdx`), mdx);

// Also add to export file
const exportFilePath = path.join(__dirname, `../src/${category}.ts`);
if (fs.existsSync(exportFilePath)) {
  let exportContent = fs.readFileSync(exportFilePath, 'utf8');
  const exportLine = `export * from "./components/${category}/${componentName}/${componentName}";\n`;
  if (!exportContent.includes(exportLine)) {
    exportContent += exportLine.trim() + '\n';
    fs.writeFileSync(exportFilePath, exportContent);
    console.log(`✓ Added export to src/${category}.ts`);
  }
}

// --- Automatic updates for components.json and i18n ---

const componentsJsonPath = path.join(__dirname, '../src/data/components.json');
if (fs.existsSync(componentsJsonPath)) {
  const componentsJson = JSON.parse(fs.readFileSync(componentsJsonPath, 'utf8'));
  
  // Try to find the target category ID
  const CATEGORY_MAP = {
    'form': 'basic-inputs',
    'layout': 'layout',
    'feedback': 'alerts',
    'navigation': 'nav-elements',
    'overlay': 'overlays',
    'typography': 'typography-icons',
    'media': 'media',
    'data-display': 'data-indicators',
    'ai': 'ai',
    'charts': 'visualization'
  };

  const targetId = targetIdArg || CATEGORY_MAP[category] || category;
  const categoryObj = componentsJson.find(c => c.id === targetId);

  if (categoryObj) {
    if (!categoryObj.components.find(c => c.name === componentName)) {
      categoryObj.components.push({
        name: componentName,
        descKey: `doc.${lowerFirst(componentName)}_desc`,
        pc: true,
        mobile: true
      });
      fs.writeFileSync(componentsJsonPath, JSON.stringify(componentsJson, null, 2) + '\n');
      console.log(`✓ Added ${componentName} to src/data/components.json (category: ${targetId})`);
    }
  } else {
    console.warn(`! Warning: Could not find category ID "${targetId}" in src/data/components.json.`);
    console.warn(`  Available IDs: ${componentsJson.map(c => c.id).join(', ')}`);
  }
}

// Update i18n files
const locales = ['en', 'ja', 'pt'];
const i18nKey = `${lowerFirst(componentName)}_desc`;
locales.forEach(lang => {
  const i18nPath = path.join(__dirname, `../public/locales/${lang}/components.json`);
  if (fs.existsSync(i18nPath)) {
    try {
      const i18nJson = JSON.parse(fs.readFileSync(i18nPath, 'utf8'));
      if (!i18nJson.doc) i18nJson.doc = {};
      if (!i18nJson.doc[i18nKey]) {
        i18nJson.doc[i18nKey] = `${componentName} description.`;
        fs.writeFileSync(i18nPath, JSON.stringify(i18nJson, null, 2) + '\n');
        console.log(`✓ Added ${i18nKey} to public/locales/${lang}/components.json`);
      }
    } catch (e) {
      console.error(`! Failed to update public/locales/${lang}/components.json:`, e.message);
    }
  }
});

console.log(`✓ ${componentName} scaffolded successfully in src/components/${category}/${componentName}`);
console.log(`Next steps:`);
console.log(`1. Implement the component logic and styles (tokens only; no bare px/colors without Exception).`);
console.log(`2. Add/update public/locales/en keys → npm run i18n:sync → npm run i18n:check`);
console.log(`3. Complete MDX (required sections) → npm run audit-mdx`);
console.log(`4. If asChild is required for this component: implement it, update RULES.md list, npm run check:aschild`);
console.log(`5. Quality gates before PR:`);
console.log(`   npm run check:api`);
console.log(`   npm run check:aschild`);
console.log(`   npm run audit:hardcoded`);
console.log(`   npm run i18n:check`);
console.log(`   npm run check:imports`);
console.log(`   npm run lint && npm run stylelint`);
console.log(`   (or npm run audit:lib)`);
console.log(`6. Probe (compose) once with other components. Discard the probe screen. Keep the Realistic catalog story. Do not add a Patterns page for coverage. See RULES.md.`);
console.log(`See .github/pull_request_template.md and RULES.md「品質ゲート・チェックリスト」。`);
