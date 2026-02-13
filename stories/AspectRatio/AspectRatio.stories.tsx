import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@/components/AspectRatio/AspectRatio";

const meta: Meta<typeof AspectRatio> = {
    title: "Component/Layout/AspectRatio",
    component: AspectRatio,
    tags: [],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        ratio: {
            control: { type: "number" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
    args: {
        ratio: 16 / 9,
        children: (
            <img
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape"
            />
        ),
        style: { width: "400px" },
    },
};

export const Square: Story = {
    args: {
        ratio: 1,
        children: (
            <img
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape"
            />
        ),
        style: { width: "200px" },
    },
};

export const Embed: Story = {
    args: {
        ratio: 16 / 9,
        children: (
            <iframe
                title="Imperial Palace"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp"
                style={{ border: 0 }}
                allowFullScreen
            />
        ),
        style: { width: "500px" },
    },
};
