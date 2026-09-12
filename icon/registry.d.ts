import { default as React } from '../../node_modules/react';
export type IconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export declare const registeredIcons: Record<string, IconComponentType>;
export declare function registerIcons(icons: Record<string, IconComponentType>): void;
export declare function warnUnregisteredIcon(name: string): void;
