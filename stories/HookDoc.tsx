import React from 'react';
import { T } from './T';
import { Command } from './Command';

interface HookData {
  importPath: string;
  signature: string;
  example: string | null;
}

/**
 * 公開している hook 1 つ分の、import・シグネチャ・例（T380）。
 *
 * 中身は `src/data/docgen-hooks.json`（`scripts/docgen-plugin.js` の `generateHooksDocgen` が、
 * Storybook の起動時に JSDoc から作る）から読む。MDX に手で写すと JSDoc とずれるため。
 * JSON は gitignore した生成物なので、型チェックで解決させないよう動的 import にする（Docgen.tsx と同じ）。
 */
export const HookDoc = ({ name }: { name: string }) => {
  const [data, setData] = React.useState<HookData | null | undefined>(undefined);

  React.useEffect(() => {
    let cancelled = false;
    const file = 'hooks';
    import(`@/data/docgen-${file}.json`)
      .then((module) => {
        if (!cancelled) setData((module.default as Record<string, HookData>)[name] ?? null);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, [name]);

  if (data === undefined) return <div className="docgen-loading"><T k="doc.docgen_loading" /></div>;
  if (data === null) return <div className="docgen-error">No hook data for {name}</div>;

  return (
    <>
      <Command>{`import { ${name} } from "${data.importPath}";`}</Command>
      <h4><T k="guide.hooks_signature" /></h4>
      <Command>{`${name}${data.signature}`}</Command>
      {data.example && (
        <>
          <h4><T k="guide.hooks_example" /></h4>
          <Command>{data.example}</Command>
        </>
      )}
    </>
  );
};
