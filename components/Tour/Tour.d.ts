type TourStep = {
    target: string;
    title: string;
    description: string;
    placement?: "top" | "bottom" | "left" | "right";
};
type TourProps = {
    steps: TourStep[];
    open: boolean;
    onClose: () => void;
    onFinish?: () => void;
};
export declare const Tour: ({ steps, open, onClose, onFinish }: TourProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
