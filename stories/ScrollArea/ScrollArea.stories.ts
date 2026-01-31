import { ScrollArea } from "./ScrollArea";

export default {
  title: "Component/Navigation & Layout/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const ScrollAreaYaxis = {
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: `y`,
    maxHeight: `10rem`,
  },
};
