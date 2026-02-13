import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelinePoint, TimelineContent, TimelineOppositeContent } from "@/components/Timeline/Timeline";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof Timeline> = {
    title: 'Component/Data Display/Timeline',
    component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const LeftAligned: Story = {
    args: {
        align: 'left',
    },
    render: (args) => (
        <Timeline {...args}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
        </Timeline>
    ),
};

export const Alternate: Story = {
    args: {
        align: 'alternate',
    },
    render: (args) => (
        <Timeline {...args}>
            <TimelineItem>
                <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelinePoint variant="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelinePoint variant="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelinePoint variant="success" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
        </Timeline>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <Timeline {...args}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="primary">
                        <Icon name="CheckIcon" size="small" />
                    </TimelinePoint>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Step 1 Completed</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="secondary">
                        <Icon name="CircleIcon" size="small" />
                    </TimelinePoint>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Step 2 Processing</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelinePoint variant="error">
                        <Icon name="CloseIcon" size="small" />
                    </TimelinePoint>
                </TimelineSeparator>
                <TimelineContent>Step 3 Error</TimelineContent>
            </TimelineItem>
        </Timeline>
    ),
};

