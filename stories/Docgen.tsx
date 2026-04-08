import React from 'react';
import { T } from './T';
import docgenData from '../src/data/docgen.json';
import './docgen.scss';

interface DocgenProps {
  componentName: string;
  section?: 'tokens' | 'anatomy' | 'props';
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
}

export const Docgen = ({ componentName, section }: DocgenProps) => {
  const data = (docgenData as Record<string, ComponentData>)[componentName];

  if (!data) {
    return <div>No docgen data for {componentName}</div>;
  }

  const renderProps = () => {
    const props = data.props;
    if (!props || Object.keys(props).length === 0) return null;

    return (
      <section id="props">
        <h2>Props</h2>
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
            {data.anatomy.map((part: string) => {
               const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
               return (
                <tr key={part}>
                  <td><b>{part}</b></td>
                  <td><code>.wim-{kebabName}__{part}</code></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  };

  if (section === 'tokens') return renderTokens();
  if (section === 'anatomy') return renderAnatomy();
  if (section === 'props') return renderProps();

  return (
    <div className="docgen-container">
      {renderTokens()}
      {renderAnatomy()}
      {renderProps()}
    </div>
  );
};
