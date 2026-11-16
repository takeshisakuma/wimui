import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../.storybook/i18n';
import { ALL_NAMESPACES } from './i18nConstants';
import { T } from './T';
import screenReader from '@/data/a11y-screen-reader.json';

/**
 * 部品のアクセシビリティを、どこまで確かめてあるか（T400）。
 *
 * 3 つの欄（2026-11-16 のユーザー判断）:
 *   - 自動検査（axe）: ストーリーを持つ部品は、a11y のスペックが全ストーリーを light / dark で流す
 *   - ブラウザでの操作テスト: E2E のファイルに書かれたストーリー ID から引いた、その部品を開くファイル
 *   - 実機の読み上げ: 人が聞いた結果の正本（`src/data/a11y-screen-reader.json`）の、いちばん新しい記録
 *
 * 前の 2 つは `src/data/docgen-a11y.json`（`scripts/docgen-plugin.js` の `generateA11yDocgen` が
 * Storybook の起動時に作る）から読む。gitignore した生成物なので、動的 import にする（HookDoc と同じ）。
 * 「未確認」も隠さずに出す ── 確かめた部品だけを並べると、聞いていない部品が聞いた部品と同じに見える。
 */

export interface A11yAutomated {
  stories: number;
  e2e: string[];
}

export interface ScreenReaderRecord {
  component: string;
  date: string;
  reader: string;
  browser: string;
  result: 'ok' | 'fixed' | 'fixed-unheard';
  sources: string[];
  note?: string;
}

const BROWSER_NAMES: Record<string, string> = { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari' };

const records = (screenReader as { records: ScreenReaderRecord[] }).records;

/** 部品ごとの、いちばん新しい読み上げの記録。 */
export const latestScreenReader = (componentName: string): ScreenReaderRecord | undefined =>
  records
    .filter((r) => r.component === componentName)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))[0];

/** `docgen-a11y.json` を読む。読めないときは null（生成前など）。 */
export const useA11yAutomated = (): Record<string, A11yAutomated> | null | undefined => {
  const [data, setData] = React.useState<Record<string, A11yAutomated> | null | undefined>(undefined);
  React.useEffect(() => {
    let cancelled = false;
    const file = 'a11y';
    import(`@/data/docgen-${file}.json`)
      .then((module) => {
        if (!cancelled) setData(module.default as Record<string, A11yAutomated>);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return data;
};

export const useA11yStatusText = () => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });
  return {
    axe: (auto?: A11yAutomated) => t(auto && auto.stories > 0 ? 'doc.a11y_status_axe_done' : 'doc.a11y_status_axe_none'),
    e2e: (auto?: A11yAutomated) =>
      auto && auto.e2e.length > 0 ? t('doc.a11y_status_e2e_done', { files: auto.e2e.join(', ') }) : t('doc.a11y_status_e2e_none'),
    sr: (record?: ScreenReaderRecord) => {
      if (!record) return t('doc.a11y_status_sr_none');
      const values = {
        date: record.date,
        reader: t(`doc.a11y_reader_${record.reader}`),
        browser: BROWSER_NAMES[record.browser] ?? record.browser,
      };
      const key = { ok: 'doc.a11y_status_sr_ok', fixed: 'doc.a11y_status_sr_fixed', 'fixed-unheard': 'doc.a11y_status_sr_fixed_unheard' }[record.result];
      return t(key, values);
    },
  };
};

export const A11yStatusTable = ({ componentName }: { componentName: string }) => {
  const automated = useA11yAutomated();
  const text = useA11yStatusText();
  if (automated === undefined) return <div className="docgen-loading"><T k="doc.docgen_loading" /></div>;
  const auto = automated?.[componentName];

  return (
    <div className="wim-a11y-status">
      <h3><T k="doc.a11y_status_title" /></h3>
      <p><T k="doc.a11y_status_desc" /></p>
      <table className="docgen-table">
        <thead>
          <tr>
            <th scope="col"><T k="doc.a11y_status_check" /></th>
            <th scope="col"><T k="doc.a11y_status_state" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><T k="doc.a11y_status_axe" /></th>
            <td>{text.axe(auto)}</td>
          </tr>
          <tr>
            <th scope="row"><T k="doc.a11y_status_e2e" /></th>
            <td>{text.e2e(auto)}</td>
          </tr>
          <tr>
            <th scope="row"><T k="doc.a11y_status_sr" /></th>
            <td>{text.sr(latestScreenReader(componentName))}</td>
          </tr>
        </tbody>
      </table>
      <p><T k="doc.a11y_status_note" /></p>
    </div>
  );
};
