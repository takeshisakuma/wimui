import fs from 'fs';
import path from 'path';

const charts = [
  'AreaChart', 'FunnelChart', 'GaugeChart', 'Heatmap', 
  'LineChart', 'PieChart', 'RadarChart', 'ScatterChart', 'Treemap'
];

const locales = ['en', 'ja', 'pt'];
const basePath = 'c:\\Users\\facto\\Desktop\\github\\wimui\\public\\locales';

const templates = {
  en: {
    long_desc: 'A component for displaying {name}. Best for visualizing {purpose} trends and distributions.',
    design_intent: 'The {name} is intended to provide a clear and concise visual summary of complex data patterns.',
    choice_matrix_desc: 'Use {name} when you need to emphasize {context}.',
    choice_self_when: 'When visualizing {purpose}.',
    choice_alt_when: 'When the data is more suitable for a simple table or basic list.',
    anatomy_root_label: 'Chart Container',
    anatomy_root: 'The main wrapper handling responsive sizing and layout.',
    anatomy_content_label: 'Data Area',
    anatomy_content: 'The core visualization area where bars, lines, or segments are rendered.',
    content_guideline: 'Ensure labels are readable and use consistent color tokens for data mapping.',
    motion_desc: 'Smooth transitions occur during initial load or data updates, respecting prefers-reduced-motion.',
    a11y_desc: 'Accessible through screen readers with proper ARIA roles and labels for data points.',
    scenario_1: 'Integrating into dashboards for performance tracking.',
    scenario_2: 'Visualizing statistical data in complex reports.',
    best_practice_1: 'Use standard color palettes to ensure high contrast and accessibility.',
    best_practice_2: 'Test behavior across different screen sizes to ensure data remains readable.',
    i18n_desc: 'Supports localized number formatting and date strings.'
  },
  ja: {
    long_desc: '{name}を表示するためのコンポーネント。{purpose}の傾向や分布を視覚化するのに最適です。',
    design_intent: '{name}は、複雑なデータパターンの明確で簡潔な視覚的要約を提供することを目的としています。',
    choice_matrix_desc: '{context}を強調する必要がある場合に{name}を使用します。',
    choice_self_when: '{purpose}を視覚化する場合。',
    choice_alt_when: 'データが単純な表または基本的なリストに適している場合。',
    anatomy_root_label: 'チャートコンテナ',
    anatomy_root: 'レスポンシブなサイズ設定とレイアウトを処理するメインラッパー。',
    anatomy_content_label: 'データ領域',
    anatomy_content: '棒、線、またはセグメントが描画されるコアの視覚化領域。',
    content_guideline: 'ラベルが読みやすく、データマッピングに一貫したカラートークンを使用していることを確認してください。',
    motion_desc: '初回ロード時やデータ更新時にスムーズな遷移が発生し、prefers-reduced-motionを尊重します。',
    a11y_desc: 'データポイントの適切なARIAロールとラベルにより、スクリーンリーダーからアクセス可能です。',
    scenario_1: 'パフォーマンス追跡のためにダッシュボードに統合します。',
    scenario_2: '複雑なレポートで統計データを視覚化します。',
    best_practice_1: '高いコントラストとアクセシビリティを確保するために、標準のカラーパレットを使用します。',
    best_practice_2: 'データが読み取れることを確認するために、さまざまな画面サイズで動作をテストします。',
    i18n_desc: '数値形式や日付文字列のローカライズをサポートしています。'
  },
  pt: {
    long_desc: 'Um componente para exibir {name}. Ideal para visualizar tendências e distribuições de {purpose}.',
    design_intent: 'O {name} destina-se a fornecer um resumo visual claro e conciso de padrões de dados complexos.',
    choice_matrix_desc: 'Use {name} quando precisar enfatizar {context}.',
    choice_self_when: 'Ao visualizar {purpose}.',
    choice_alt_when: 'Quando os dados são mais adequados para uma tabela simples ou lista básica.',
    anatomy_root_label: 'Contêiner do Gráfico',
    anatomy_root: 'O wrapper principal que lida com o redimensionamento responsivo e layout.',
    anatomy_content_label: 'Área de Dados',
    anatomy_content: 'A área principal de visualização onde barras, linhas ou segmentos são renderizados.',
    content_guideline: 'Certifique-se de que os rótulos sejam legíveis e use tokens de cores consistentes para mapeamento de dados.',
    motion_desc: 'Transições suaves ocorrem durante o carregamento inicial ou atualizações de dados, respeitando prefers-reduced-motion.',
    a11y_desc: 'Acessível através de leitores de tela com funções e rótulos ARIA adequados para pontos de dados.',
    scenario_1: 'Integrando em dashboards para acompanhamento de desempenho.',
    scenario_2: 'Visualizando dados estatísticos em relatórios complexos.',
    best_practice_1: 'Use paletas de cores padrão para garantir alto contraste e acessibilidade.',
    best_practice_2: 'Teste o comportamento em diferentes tamanhos de tela para garantir que os dados permaneçam legíveis.',
    i18n_desc: 'Suporta formatação de números e strings de data localizadas.'
  }
};

const purposes = {
    'AreaChart': 'magnitudes of change over time',
    'FunnelChart': 'progressive stages in a process',
    'GaugeChart': 'values within a percentage range',
    'Heatmap': 'data density and intensity',
    'LineChart': 'trends and variations over intervals',
    'PieChart': 'proportional parts of a whole',
    'RadarChart': 'multivariate data on concentric axes',
    'ScatterChart': 'relationships between variables',
    'Treemap': 'hierarchical data with nested rectangles'
};

const contexts = {
    'AreaChart': 'cumulative totals or area under curves',
    'FunnelChart': 'drop-off rates between steps',
    'GaugeChart': 'KPI progress and milestones',
    'Heatmap': 'hot spots and correlations',
    'LineChart': 'sequential patterns',
    'PieChart': 'relative distribution',
    'RadarChart': 'profile comparisons',
    'ScatterChart': 'correlation and clusters',
    'Treemap': 'proportional composition of categories'
};

for (const lang of locales) {
  const filePath = path.join(basePath, lang, 'docs_display.json');
  if (!fs.existsSync(filePath)) continue;

  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  for (const chart of charts) {
    const prefix = `doc_${chart.toLowerCase()}`;
    const purpose = purposes[chart] || 'data patterns';
    const context = contexts[chart] || 'data relationships';

    content[`${prefix}_long_desc`] = templates[lang].long_desc.replace('{name}', chart).replace('{purpose}', purpose);
    content[`${prefix}_design_intent`] = templates[lang].design_intent.replace('{name}', chart);
    content[`${prefix}_choice_matrix_desc`] = templates[lang].choice_matrix_desc.replace('{name}', chart).replace('{context}', context);
    content[`${prefix}_choice_self_when`] = templates[lang].choice_self_when.replace('{purpose}', purpose);
    content[`${prefix}_choice_alt_when`] = templates[lang].choice_alt_when;
    content[`${prefix}_anatomy_root_label`] = templates[lang].anatomy_root_label;
    content[`${prefix}_anatomy_root`] = templates[lang].anatomy_root;
    content[`${prefix}_anatomy_content_label`] = templates[lang].anatomy_content_label;
    content[`${prefix}_anatomy_content`] = templates[lang].anatomy_content;
    content[`${prefix}_content_guideline`] = templates[lang].content_guideline;
    content[`${prefix}_motion_desc`] = templates[lang].motion_desc;
    content[`${prefix}_a11y_desc`] = templates[lang].a11y_desc;
    content[`${prefix}_scenario_1`] = templates[lang].scenario_1;
    content[`${prefix}_scenario_2`] = templates[lang].scenario_2;
    content[`${prefix}_best_practice_1`] = templates[lang].best_practice_1;
    content[`${prefix}_best_practice_2`] = templates[lang].best_practice_2;
    content[`${prefix}_i18n_desc`] = templates[lang].i18n_desc;
  }

  // Also add Kanban missing keys if lang matches
  if (lang === 'en' || lang === 'ja' || lang === 'pt') {
      const k = 'doc_kanban';
      content[`${k}_token_bg`] = lang === 'en' ? 'Background color of columns.' : lang === 'ja' ? 'カラムの背景色。' : 'Cor de fundo das colunas.';
      content[`${k}_token_border`] = lang === 'en' ? 'Border color of cards.' : lang === 'ja' ? 'カードの境界線色。' : 'Cor da borda dos cartões.';
      content[`${k}_token_radius`] = lang === 'en' ? 'Border radius of cards and columns.' : lang === 'ja' ? 'カードとカラムの角丸。' : 'Raio da borda dos cartões e colunas.';
      content[`${k}_token_shadow`] = lang === 'en' ? 'Shadow applied to cards during drag.' : lang === 'ja' ? 'ドラッグ中のカードに適用される影。' : 'Sombra aplicada aos cartões durante o arrasto.';
      content[`${k}_responsive_desc`] = lang === 'en' ? 'Adapts to mobile by stacking columns or using a tab view.' : lang === 'ja' ? 'カラムをスタックするかタブビューを使用してモバイルに適応します。' : 'Adapta-se ao mobile empilhando colunas ou usando uma visualização de abas.';
      content[`${k}_keyboard_desc`] = lang === 'en' ? 'Cards can be moved between columns using keyboard shortcuts.' : lang === 'ja' ? 'キーボードショートカットを使用して、カラム間でカードを移動できます。' : 'Os cartões podem ser movidos entre colunas usando atalhos de teclado.';
      content[`${k}_i18n_desc`] = lang === 'en' ? 'Supports labels for different column states like Todo, Doing, Done.' : lang === 'ja' ? '未着手、進行中、完了などの異なるカラム状態のラベルをサポートします。' : 'Suporta rótulos para diferentes estados de coluna, como Todo, Doing, Done.';
  }

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}

console.log('Translations updated.');
