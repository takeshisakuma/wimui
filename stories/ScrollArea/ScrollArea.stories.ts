import React from "react";
import { ScrollArea } from "./ScrollArea";

export default {
  title: "Component/Navigation & Structure/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scrollAxis: {
      control: "select",
      options: ["x", "y", "both"],
    },
    maxHeight: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem",
  },
};

export const HorizontalScroll = {
  args: {
    scrollAxis: "x",
    style: { width: "20rem" },
    children: React.createElement(
      "div",
      { style: { width: "50rem", background: "linear-gradient(to right, #f0f, #0ff)", padding: "1rem", color: "white" } },
      "This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。"
    ),
  },
};

export const WithChildren = {
  args: {
    scrollAxis: "y",
    maxHeight: "12rem",
    children: React.createElement(
      "div",
      { style: { padding: "1rem" } },
      [
        React.createElement("h4", { key: "h1", style: { margin: "0 0 1rem 0" } }, "Custom Content Area"),
        React.createElement("p", { key: "p1" }, "You can wrap any React elements inside ScrollArea."),
        React.createElement(
          "ul",
          { key: "ul1" },
          [
            React.createElement("li", { key: "li1" }, "Item 1"),
            React.createElement("li", { key: "li2" }, "Item 2"),
            React.createElement("li", { key: "li3" }, "Item 3"),
            React.createElement("li", { key: "li4" }, "Item 4"),
            React.createElement("li", { key: "li5" }, "Item 5"),
          ]
        ),
        React.createElement("p", { key: "p2" }, "Scrolling works perfectly for complex layouts."),
      ]
    ),
  },
};
