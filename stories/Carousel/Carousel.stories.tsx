import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@/components/Carousel/Carousel";
import SampleImage from "@/media/imagesanple.webp";


const meta: Meta<typeof Carousel> = {
    title: "Component/Media/Carousel",
    component: Carousel,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        loop: true,
    },
    argTypes: {
        autoPlay: { control: "boolean" },
        interval: { control: "number" },
        showIndicators: { control: "boolean" },
        showControls: { control: "boolean" },
        loop: { control: "boolean" },
        slidesToShow: { control: "number" },
        aspectRatio: { control: "text" },
        objectFit: {
            control: "select",
            options: ["fill", "contain", "cover", "none", "scale-down"]
        },
    },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const ImagePlaceholder = ({ index, width = "600px" }: { index: number; width?: string }) => (
    <div
        style={{
            width: "100%",
            height: "300px",
            backgroundColor: ["#f44336", "#2196f3", "#4caf50", "#ff9800", "#9c27b0", "#3f51b5"][index % 6],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            border: "4px solid rgba(255,255,255,0.2)",
            boxSizing: "border-box",
        }}
    >
        Slide {index + 1}
    </div>
);

const slides = [
    <ImagePlaceholder key={1} index={0} />,
    <ImagePlaceholder key={2} index={1} />,
    <ImagePlaceholder key={3} index={2} />,
    <ImagePlaceholder key={4} index={3} />,
    <ImagePlaceholder key={5} index={4} />,
    <ImagePlaceholder key={6} index={5} />,
];

export const Basic: Story = {
    args: {
        children: slides.slice(0, 4),
    },
};

export const MultipleItems: Story = {
    args: {
        slidesToShow: 3,
        children: slides,
    },
    parameters: {
        layout: "padded",
    },
};

export const Responsive: Story = {
    args: {
        slidesToShow: {
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
        },
        children: slides,
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const AutoPlay: Story = {
    args: {
        autoPlay: true,
        interval: 3000,
        children: slides.slice(0, 4),
    },
};

export const CustomContent: Story = {
    args: {
        children: [
            <div key={1} style={{ padding: "0 10px", width: "100%" }}>
                <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
                    <h3>Card 1</h3>
                    <p>Seamless infinite loop is enabled by default.</p>
                </div>
            </div>,
            <div key={2} style={{ padding: "0 10px", width: "100%" }}>
                <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
                    <h3>Card 2</h3>
                    <p>You can see multiple items at once.</p>
                </div>
            </div>,
            <div key={3} style={{ padding: "0 10px", width: "100%" }}>
                <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
                    <h3>Card 3</h3>
                    <p>The slider wraps around smoothly.</p>
                </div>
            </div>,
        ],
    },
};

export const NoLoop: Story = {
    args: {
        loop: false,
        children: slides.slice(0, 3),
    },
};

export const WithImage: Story = {
    args: {
        children: Array.from({ length: 4 }).map((_, i) => (
            <div key={`img-${i}`} style={{ width: "100%", height: "300px" }}>
                <img
                    src={SampleImage}
                    alt={`Sample ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
        )),
    },
};

export const AspectRatioCheck: Story = {
    args: {
        aspectRatio: "16/9",
        objectFit: "cover",
        children: Array.from({ length: 4 }).map((_, i) => (
            <img
                key={`img-${i}`}
                src={SampleImage}
                alt={`Sample ${i + 1}`}
            />
        )),
    },
};


