import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarGroup } from "wimui";
import avatar1 from "@/media/avatar_1.svg";
import avatar2 from "@/media/avatar_2.svg";
import avatar3 from "@/media/avatar_3.svg";
import avatar4 from "@/media/avatar_4.svg";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/Data Indicators/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const users = [
  {
    src: avatar1,
    initials: "JD",
  },
  {
    src: avatar2,
    initials: "SA",
  },
  {
    src: avatar3,
    initials: "ML",
  },
  {
    src: avatar4,
    initials: "BW",
  },
];

export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      {users.map((u, i) => (
        <Avatar key={i} src={u.src} initials={u.initials} />
      ))}
    </AvatarGroup>
  ),
};

export const MaxDisplayed: Story = {
  args: {
    max: 3,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      {users.map((u, i) => (
        <Avatar key={i} src={u.src} initials={u.initials} />
      ))}
    </AvatarGroup>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <AvatarGroup {...args} size="sm">
        {users.map((u, i) => (
          <Avatar key={i} initials={u.initials} intent="primary" />
        ))}
      </AvatarGroup>
      <AvatarGroup {...args} size="md">
        {users.map((u, i) => (
          <Avatar key={i} initials={u.initials} intent="neutral" />
        ))}
      </AvatarGroup>
      <AvatarGroup {...args} size="lg">
        {users.map((u, i) => (
          <Avatar key={i} initials={u.initials} intent="neutral" />
        ))}
      </AvatarGroup>
    </div>
  ),
};

export const TotalCount: Story = {
  args: {
    max: 2,
    total: 10,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      {users.slice(0, 2).map((u, i) => (
        <Avatar key={i} src={u.src} initials={u.initials} />
      ))}
    </AvatarGroup>
  ),
};

// 文書を開いている人。名前は Avatar の alt から、隠れた人の一覧に出る
const viewers = [
  { src: avatar1, alt: "Aiko Tanaka", initials: "AT" },
  { src: avatar2, alt: "Rafael Souza", initials: "RS" },
  { alt: "Kwame Mensah", initials: "KM" },
  { src: avatar3, alt: "Mei Lin", initials: "ML" },
  { alt: "Priya Nair", initials: "PN" },
  { src: avatar4, alt: "Lucas Ferreira", initials: "LF" },
  { alt: "Sofia Rossi", initials: "SR" },
  { alt: "Haruto Sato", initials: "HS" },
];

/** 器（180px）に入るだけを並べ、残りは「+N」から名前で開く */
export const Collapsed: Story = {
  args: { overflow: "collapse" },
  render: (args) => (
    <div style={{ width: "min(var(--wim-width-sm), 100vw - 2rem)" }}>
      <AvatarGroup {...args}>
        {viewers.map((v) => (
          <Avatar key={v.alt} src={v.src} alt={v.alt} initials={v.initials} intent="neutral" />
        ))}
      </AvatarGroup>
    </div>
  ),
};
