import { fn } from "storybook/test";
import { Scrollarea } from "./Scrollarea";

export default {
  title: "Component/Navigation & Layout/Scrollarea",
  component: Scrollarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const ScrollareaYaxis = {
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: `y`,
    maxHeight: `10rem`,
  },
};
