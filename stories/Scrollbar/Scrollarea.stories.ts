import { fn } from "storybook/test";
import { Scrollarea } from "./Scrollarea";

export default {
  title: "Component/Scrollarea",
  component: Scrollarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  }
};

export const ScrollareaYaxis = {
  args: {
  text: 'sampletextforscrollarea', 
  scrollAxis:`y`,
  maxHeight: `10rem`,
  },
};
