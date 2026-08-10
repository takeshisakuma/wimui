import type { Meta, StoryObj } from "@storybook/react-vite";

import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Icon, Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelinePoint, TimelineSeparator } from "wimui";


const meta: Meta<typeof Timeline> = {
  title: "Components/Data Structures/Timeline",
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const LeftAligned: Story = {
  args: {
    align: "left",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="neutral" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_repeat")}</TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  },
};

export const Alternate: Story = {
  args: {
    align: "alternate",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Timeline {...args}>
        <TimelineItem>
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_eat")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="neutral" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_code")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 PM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint intent="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_sleep")}</TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Timeline {...args}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="primary">
              <Icon name="CheckIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step1_comp")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="neutral">
              <Icon name="CircleIcon" size="sm" />
            </TimelinePoint>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step2_proc")}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelinePoint intent="danger">
              <Icon name="CloseIcon" size="sm" />
            </TimelinePoint>
          </TimelineSeparator>
          <TimelineContent>{t("story.timeline_step3_err")}</TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  },
};
