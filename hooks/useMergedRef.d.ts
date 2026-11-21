import { default as React } from '../../node_modules/react';
type PossibleRef<T> = React.Ref<T> | undefined;
/**
 * Multiple refs can be assigned to a single element.
 * Useful when you need to use a ref internally but also support a forwarded ref.
 */
export declare function useMergedRef<T>(...refs: PossibleRef<T>[]): React.RefCallback<T>;
export {};
