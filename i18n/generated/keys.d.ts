import { CommonKey } from './common';
import { ComponentsKey } from './components';
import { DataDisplayKey } from './data-display';
import { FormKey } from './form';
export type WimI18nKey = CommonKey | `common:${CommonKey}` | ComponentsKey | `components:${ComponentsKey}` | DataDisplayKey | `data-display:${DataDisplayKey}` | FormKey | `form:${FormKey}`;
