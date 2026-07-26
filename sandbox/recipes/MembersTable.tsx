import { useMemo, useState } from "react";
import { Stack, Group, SearchInput, Select, Table, Badge, Text } from "wimui";

type Role = "admin" | "member";
type MemberStatus = "active" | "invited" | "suspended";
type Member = {
  id: string;
  name: string;
  team: string | null;
  role: Role;
  status: MemberStatus;
};

const members: Member[] = [
  { id: "u_1", name: "Marisol Okonkwo", team: "Growth", role: "admin", status: "active" },
  { id: "u_2", name: "Dmitri Sørensen", team: "Platform", role: "member", status: "invited" },
  { id: "u_3", name: "Aleksandra Wiśniewska-Nowak", team: null, role: "member", status: "active" }, // no team
  { id: "u_4", name: "Thomas O'Reilly", team: "Growth", role: "member", status: "suspended" }, // non-happy path
];

// Only the exceptional value is coloured — an undefined intent falls back to
// primary, which would paint every row and tell the reader nothing.
const roleIntent: Record<Role, "primary" | "neutral"> = { admin: "primary", member: "neutral" };
const statusIntent: Record<MemberStatus, "success" | "danger" | "neutral"> = {
  active: "success",
  invited: "neutral",
  suspended: "danger",
};

// A search/filter toolbar as the sparse region above a dense table.
export default function MembersTable() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState("all");

  const rows = useMemo(
    () =>
      members.filter(
        (m) =>
          (role === "all" || m.role === role) &&
          m.name.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [q, role],
  );

  return (
    <Stack gap="md">
      {/* Sparse toolbar */}
      <Group justify="between" align="center" gap="md">
        <SearchInput
          placeholder="Search members"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          allowClear
          width={280}
        />
        <Select
          aria-label="Filter by role"
          value={role}
          onChange={setRole}
          options={[
            { label: "All roles", value: "all" },
            { label: "Admins", value: "admin" },
            { label: "Members", value: "member" },
          ]}
        />
      </Group>

      {/* Dense data region */}
      <Table card hoverable fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head>Member</Table.Head>
            <Table.Head>Team</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((m) => (
            <Table.Row key={m.id}>
              <Table.Cell>{m.name}</Table.Cell>
              <Table.Cell>{m.team ?? <Text color="tertiary">No team</Text>}</Table.Cell>
              <Table.Cell>
                <Badge variant="subtle" intent={roleIntent[m.role]}>{m.role}</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="subtle" intent={statusIntent[m.status]}>{m.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  );
}
