import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@/components/Combobox/Combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Selection Controls/Combobox",
  component: Combobox,
  argTypes: {
    showSearchIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Lemon", value: "lemon" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
];

export const Default: Story = {
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple",
    showSearchIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple",
    disabled: true,
  },
};
