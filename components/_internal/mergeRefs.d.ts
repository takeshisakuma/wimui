import { default as React } from '../../../node_modules/react';
/**
 * 複数のrefを1つに統合します。
 * 内部でrefを使用しつつ、外部からのrefも受け入れる必要がある場合に便利です。
 */
export declare function mergeRefs<T = any>(...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>): React.RefCallback<T>;
