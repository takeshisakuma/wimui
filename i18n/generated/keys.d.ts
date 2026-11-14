import { CommonKey } from './common';
import { ComponentsKey } from './components';
import { DataDisplayKey } from './data-display';
import { FormKey } from './form';
import { LayoutKey } from './layout';
import { NavigationKey } from './navigation';
export type WimI18nKey = CommonKey | `common:${CommonKey}` | ComponentsKey | `components:${ComponentsKey}` | DataDisplayKey | `data-display:${DataDisplayKey}` | FormKey | `form:${FormKey}` | LayoutKey | `layout:${LayoutKey}` | NavigationKey | `navigation:${NavigationKey}`;
