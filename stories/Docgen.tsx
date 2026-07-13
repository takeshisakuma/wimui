import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../.storybook/i18n';
import { ALL_NAMESPACES } from './i18nConstants';
import { T } from './T';
import { Command } from './Command';
import { formatImportSnippet, resolveImportInfo } from './peerImports';
import indexData from '@/data/docgen_index.json';
import './docgen.scss';

interface DocgenProps {
  componentName: string;
  section?: 'tokens' | 'anatomy' | 'props' | 'test' | 'i18n' | 'import';
}

interface PropInfo {
  required?: boolean;
  tsType?: { name: string; raw?: string; elements?: { name: string; raw?: string }[] };
  defaultValue?: { value: string };
  description?: string;
}

/**
 * Extract<Union, Subset> 型は選択後のユニオン（第2型引数）を表示する。
 * `Extract<ComponentSize, "sm" | "md" | "lg">` → `"sm" | "md" | "lg"`
 */
const formatTsType = (tsType?: PropInfo['tsType']): string => {
  if (!tsType) return 'any';
  if (tsType.name === 'Extract' && tsType.elements?.[1]?.raw) {
    return tsType.elements[1].raw;
  }
  return tsType.raw || tsType.name;
};

/** Table.Header → tableHeader（ドット除去後に lowerFirst。i18next の . ネスト衝突を避ける） */
const toDocBaseName = (name: string): string => {
  const compact = name.replace(/\./g, '');
  return compact.charAt(0).toLowerCase() + compact.slice(1);
};

interface ComponentData {
  props?: Record<string, PropInfo>;
  tokens?: string[];
  anatomy?: string[];
  /** anatomy の抽出元: 'global' = 旧式 .wim-x__y クラス / 'module' = CSS Modules ローカルクラス */
  anatomyStyle?: 'global' | 'module';
}

const typedIndexData = indexData as Record<string, string>;

export const Docgen = ({ componentName, section }: DocgenProps) => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });
  const [data, setData] = React.useState<ComponentData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const category = typedIndexData[componentName];
  const [prevComponentName, setPrevComponentName] = React.useState(componentName);
  if (componentName !== prevComponentName) {
    setPrevComponentName(componentName);
    setLoading(true);
    setError(null);
    setData(null);
  }

  // Import path only needs the category (+ peer map) — skip docgen JSON load
  const renderImport = () => {
    if (!category) return null;
    const info = resolveImportInfo(componentName, category);
    const snippet = formatImportSnippet(componentName, info);
    return (
      <section id="import">
        <h2><T k="doc.import" /></h2>
        <Command>{snippet}</Command>
      </section>
    );
  };

  React.useEffect(() => {
    if (!category || section === 'import') return;

    let cancelled = false;
    // Dynamic import the specific category data
    import(`@/data/docgen_${category}.json`)
      .then((module) => {
        if (cancelled) return;
        const categoryData = module.default as Record<string, ComponentData>;
        if (categoryData[componentName]) {
          setData(categoryData[componentName]);
          setError(null);
        } else {
          setError(`No data found for ${componentName} in ${category}`);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(err);
        setError(`Failed to load documentation for ${category}`);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [componentName, category, section]);

  if (!category) {
    return <div className="docgen-error">No category found for {componentName}</div>;
  }

  if (section === 'import') {
    return renderImport();
  }

  if (loading) {
    return <div className="docgen-loading"><T k="doc.docgen_loading" /></div>;
  }

  if (error || !data) {
    return <div className="docgen-error">{error || 'Unknown error'}</div>;
  }

  // Props の Description は `doc.<component>_prop_<prop>` キー（3言語）を優先し、
  // キーが未整備のコンポーネントはソースの JSDoc（英語）にフォールバックする。
  // キー名は relativeTime_title 等と同じ lowerCamelCase。複合はドット除去
  // （Table.Header → tableHeader）で i18next のネスト衝突を避ける。
  const docBaseName = toDocBaseName(componentName);
  const propDescription = (propName: string, propInfo: PropInfo): string =>
    t(`doc.${docBaseName}_prop_${propName}`, {
      defaultValue: propInfo.description ?? '',
    });

  const renderProps = () => {
    const props = data.props;
    // 固有 props を持たないコンポーネント（HTML 属性のみ継承するサブパーツ等）でも
    // セクションを黙って消さず、注記を表示する
    if (!props || Object.keys(props).length === 0) {
      return (
        <section id="props">
          <h2><T k="doc.props_title" /></h2>
          <p><T k="doc.props_none" /></p>
        </section>
      );
    }

    return (
      <section id="props">
        <h2><T k="doc.props_title" /></h2>
        <table className="docgen-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(props).map(([propName, propInfo]) => (
              <tr key={propName}>
                <td><code>{propName}{propInfo.required ? '*' : ''}</code></td>
                <td><code>{formatTsType(propInfo.tsType)}</code></td>
                <td>{propInfo.defaultValue ? <code>{propInfo.defaultValue.value}</code> : '-'}</td>
                <td>{propDescription(propName, propInfo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };

  const renderTokens = () => {
    if (!data.tokens || data.tokens.length === 0) return null;

    return (
      <section id="tokens">
        <h2><T k="doc.tokens_title" /></h2>
        <ul className="docgen-list">
          {data.tokens.map((token: string) => (
            <li key={token}><code>{token}</code></li>
          ))}
        </ul>
      </section>
    );
  };

  const renderAnatomy = () => {
    if (!data.anatomy || data.anatomy.length === 0) return null;

    const isModule = data.anatomyStyle === 'module';
    const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    return (
      <section id="anatomy">
        <h2><T k="doc.anatomy_title" /></h2>
        <table className="docgen-table">
          <thead>
            <tr>
              <th><T k="doc.docgen_part" /></th>
              <th><T k="doc.docgen_css_class" /></th>
            </tr>
          </thead>
          <tbody>
            {data.anatomy.map((part: string) => (
              <tr key={part}>
                <td><b>{part}</b></td>
                <td>
                  <code>{isModule ? `.${part}` : `.wim-${kebabName}__${part}`}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModule && <p><T k="doc.anatomy_module_note" /></p>}
      </section>
    );
  };

  const renderTest = () => {
    const commandText = `npm run test -- ${componentName}`;
    return (
      <section id="test">
        <h2><T k="doc.test_title" /></h2>
        <p><T k="doc.test_description" /></p>
        <Command>{commandText}</Command>
      </section>
    );
  };

  // Auto-derived i18n note: lists the component's own text-bearing props
  // (string / ReactNode) so consumers know where to pass translated strings.
  // Replaces the ~173 hand-written per-component i18n_desc keys with one shared
  // intro key plus the auto-listed props.
  const renderI18n = () => {
    const props = data.props ?? {};
    // ReactNode/string props are text-bearing, but some node slots carry
    // non-translatable content (icons, avatars, media, adornments). Exclude
    // those by name so the generated note lists only props you localize.
    const nonTextSlots = new Set([
      'className', 'style', 'id', 'key',
      'icon', 'leftIcon', 'rightIcon', 'startIcon', 'endIcon',
      'avatar', 'thumbnail', 'media', 'image', 'logo',
      'prefix', 'suffix', 'startContent', 'endContent',
      'addonBefore', 'addonAfter', 'leftSection', 'rightSection', 'trigger',
    ]);
    const textProps = Object.entries(props)
      .filter(([name, info]) => {
        if (nonTextSlots.has(name)) return false;
        const t = formatTsType(info.tsType);
        if (t.includes('=>')) return false; // skip event handlers / functions
        return /ReactNode|ReactElement|\bstring\b/.test(t);
      })
      .map(([name]) => name);
    return (
      <section id="i18n">
        <h2><T k="doc.i18n_title" /></h2>
        {textProps.length > 0 ? (
          <p>
            <T k="doc.i18n_docgen_intro" />{' '}
            {textProps.map((p, i) => (
              <React.Fragment key={p}>
                {i > 0 ? ', ' : ''}<code>{p}</code>
              </React.Fragment>
            ))}
            .
          </p>
        ) : (
          <p><T k="doc.i18n_docgen_none" /></p>
        )}
      </section>
    );
  };

  if (section === 'tokens') return renderTokens();
  if (section === 'anatomy') return renderAnatomy();
  if (section === 'props') return renderProps();
  if (section === 'test') return renderTest();
  if (section === 'i18n') return renderI18n();

  return (
    <div className="docgen-container">
      {renderTokens()}
      {renderAnatomy()}
      {renderProps()}
      {renderTest()}
    </div>
  );
};
