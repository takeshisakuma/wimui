import React from 'react';
import { T } from './T';
import { Command } from './Command';
import indexData from '@/data/docgen_index.json';
import './docgen.scss';

interface DocgenProps {
  componentName: string;
  section?: 'tokens' | 'anatomy' | 'props' | 'test';
}

interface PropInfo {
  required?: boolean;
  tsType?: { name: string; raw?: string };
  defaultValue?: { value: string };
  description?: string;
}

interface ComponentData {
  props?: Record<string, PropInfo>;
  tokens?: string[];
  anatomy?: string[];
  /** anatomy の抽出元: 'global' = 旧式 .wim-x__y クラス / 'module' = CSS Modules ローカルクラス */
  anatomyStyle?: 'global' | 'module';
}

const typedIndexData = indexData as Record<string, string>;

export const Docgen = ({ componentName, section }: DocgenProps) => {
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

  React.useEffect(() => {
    if (!category) return;
    // Dynamic import the specific category data
    import(`@/data/docgen_${category}.json`)
      .then((module) => {
        const categoryData = module.default as Record<string, ComponentData>;
        if (categoryData[componentName]) {
          setData(categoryData[componentName]);
          setError(null);
        } else {
          setError(`No data found for ${componentName} in ${category}`);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(`Failed to load documentation for ${category}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [componentName, category]);

  if (!category) {
    return <div className="docgen-error">No category found for {componentName}</div>;
  }

  if (loading) {
    return <div className="docgen-loading">Loading documentation data...</div>;
  }

  if (error || !data) {
    return <div className="docgen-error">{error || 'Unknown error'}</div>;
  }

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
                <td><code>{propInfo.tsType?.raw || propInfo.tsType?.name || 'any'}</code></td>
                <td>{propInfo.defaultValue ? <code>{propInfo.defaultValue.value}</code> : '-'}</td>
                <td>{propInfo.description}</td>
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
              <th>Part</th>
              <th>CSS Class</th>
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

  if (section === 'tokens') return renderTokens();
  if (section === 'anatomy') return renderAnatomy();
  if (section === 'props') return renderProps();
  if (section === 'test') return renderTest();

  return (
    <div className="docgen-container">
      {renderTokens()}
      {renderAnatomy()}
      {renderProps()}
      {renderTest()}
    </div>
  );
};
