import type { Meta, StoryObj } from "@storybook/react-vite";
import { Result } from "@/components/Result/Result";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Result> = {
    title: "Component/Alerts & Notifications/Result",
    component: Result,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Success: Story = {
    args: {
        status: "success",
        title: "Successfully Purchased Cloud Server ECS!",
        subTitle: "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait patiently.",
        extra: [
            <Button priority="primary" key="console" label="Go Console" />,
            <Button key="buy" label="Buy Again" />,
        ],
    },
};

export const Info: Story = {
    args: {
        title: "Your operation has been executed",
        extra: <Button priority="primary" label="Go Console" />,
    },
};

export const Warning: Story = {
    args: {
        status: "warning",
        title: "There are some problems with your operation.",
        extra: <Button priority="primary" label="Go Console" />,
    },
};

export const ErrorStatus: Story = {
    args: {
        status: "error",
        title: "Submission Failed",
        subTitle: "Please check and modify the following information before resubmitting.",
        extra: [
            <Button priority="primary" key="console" label="Go Console" />,
            <Button key="buy" label="Buy Again" />,
        ],
    },
};

export const Status404: Story = {
    args: {
        status: "404",
        title: "404",
        subTitle: "Sorry, the page you visited does not exist.",
        extra: <Button priority="primary" label="Back Home" />,
    },
};

export const Status403: Story = {
    args: {
        status: "403",
        title: "403",
        subTitle: "Sorry, you are not authorized to access this page.",
        extra: <Button priority="primary" label="Back Home" />,
    },
};

export const Status500: Story = {
    args: {
        status: "500",
        title: "500",
        subTitle: "Sorry, something went wrong.",
        extra: <Button priority="primary" label="Back Home" />,
    },
};


