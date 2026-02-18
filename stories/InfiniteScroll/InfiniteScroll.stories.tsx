import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InfiniteScroll } from "@/components/InfiniteScroll/InfiniteScroll";
import { Card } from "@/components/Card/Card";
import { Stack } from "@/components/Stack/Stack";

const meta: Meta<typeof InfiniteScroll> = {
    title: "Component/DataDisplay/InfiniteScroll",
    component: InfiniteScroll,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof InfiniteScroll>;

export const Default: Story = {
    render: (args) => {
        const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
        const [loading, setLoading] = useState(false);
        const [hasMore, setHasMore] = useState(true);

        const loadMore = () => {
            if (loading || !hasMore) return;
            setLoading(true);
            setTimeout(() => {
                const newItems = Array.from(
                    { length: 10 },
                    (_, i) => `Item ${items.length + i + 1}`
                );
                setItems((prev) => [...prev, ...newItems]);
                setLoading(false);
                if (items.length > 50) {
                    setHasMore(false);
                }
            }, 1000);
        };

        return (
            <div style={{ height: "400px", overflowY: "auto", padding: "20px" }}>
                <InfiniteScroll
                    {...args}
                    loading={loading}
                    hasMore={hasMore}
                    onLoadMore={loadMore}
                >
                    <Stack gap="md">
                        {items.map((item) => (
                            <Card key={item} padding="md">
                                {item}
                            </Card>
                        ))}
                    </Stack>
                </InfiniteScroll>
            </div>
        );
    },
};
