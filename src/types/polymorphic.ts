import React from "react";

/**
 * Polymorphic component type utilities.
 *
 * These helpers provide proper TypeScript typing for components that accept
 * an `as` prop (polymorphic components) using React.forwardRef.
 *
 * Usage:
 *   ref: React.ForwardedRef<PolymorphicRef<C>>
 *   ref?: React.Ref<PolymorphicRef<C>>
 */

/**
 * Extracts the DOM/component instance type for a given React element type.
 * Use this to type `ref` parameters in polymorphic forwardRef render functions.
 *
 * @example
 * // "div"           → HTMLDivElement
 * // "button"        → HTMLButtonElement
 * // typeof MyComp   → the ref type of MyComp
 */
export type PolymorphicRef<C extends React.ElementType> = React.ComponentRef<C>;
