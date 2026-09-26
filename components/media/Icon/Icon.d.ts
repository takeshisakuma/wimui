import { default as React } from '../../../../node_modules/react';
import { ComponentSize, WimColor } from '../../../types/tokens';
import { IconName } from '../../../icon';
type IconProps = Omit<React.SVGProps<SVGSVGElement>, "name"> & {
    /** Icon name. Requires `import "wimui/icons"` once at the app entry to register icons. */
    name?: IconName;
    /** Icon component passed directly. Works without registration and is tree-shakable. */
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    /** Size of the icon */
    size?: ComponentSize;
    /** Apply the loading rotation animation */
    spin?: boolean;
    /**
     * Colour of the icon. Takes the semantic names — `"danger"`, `"success"`,
     * `"warning"`, `"info"`, `"primary"`, `"secondary"`, `"tertiary"`,
     * `"disabled"` — and, like `Text`, any design token colour name such as
     * `"text-tertiary"`, or any CSS colour value.
     */
    color?: WimColor;
};
export declare const Icon: ({ name, component, size, color, spin, className, style, ...props }: IconProps) => React.JSX.Element | null;
export {};
