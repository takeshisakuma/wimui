import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRangePicker } from "./DateRangePicker";

const meta: Meta<typeof DateRangePicker> = {
    title: "Component/Pickers & Sliders/DateRangePicker",
    component: DateRangePicker,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
    args: {
        startProps: {
            placeholder: "開始日",
        },
        endProps: {
            placeholder: "終了日",
        }
    },
};

