import { Stack, Grid, Card, Stats, Table, Badge, Title, Text } from "wimui";

type Status = "paid" | "failed" | "pending";
type Row = {
  id: string;
  name: string;
  plan: string | null;
  amount: string;
  status: Status;
};

const rows: Row[] = [
  { id: "in_9f2a", name: "Marisol Okonkwo", plan: "Scale", amount: "$4,610.50", status: "paid" },
  { id: "in_7b41", name: "Dmitri Sørensen", plan: "Enterprise", amount: "$12,199.00", status: "failed" },
  { id: "in_2a90", name: "Thomas O'Reilly", plan: null, amount: "$89.00", status: "pending" }, // incomplete row
];

const statusIntent: Record<Status, "success" | "danger" | undefined> = {
  paid: "success",
  failed: "danger",
  pending: undefined,
};

// One protagonist (the KPI row), a dense table below, tokens via props,
// jagged real data, and one deliberately incomplete row.
export default function BillingOverview() {
  return (
    <Stack gap="lg">
      <Title tag="h2" size="lg">Billing</Title>

      {/* Protagonist: KPI row. Uneven content per tile — not three clones. */}
      <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="md">
        <Stats>
          <Stats.Label>MRR</Stats.Label>
          <Stats.Value>$48,210</Stats.Value>
          <Stats.Trend>+6.4%</Stats.Trend>
        </Stats>
        <Stats>
          <Stats.Label>Active workspaces</Stats.Label>
          <Stats.Value>1,204</Stats.Value>
          <Stats.Description>176 idle over 30 days</Stats.Description>
        </Stats>
        <Stats>
          <Stats.Label>Failed webhooks</Stats.Label>
          <Stats.Value>137</Stats.Value>
          <Stats.Trend>+23 today</Stats.Trend>
        </Stats>
      </Grid>

      {/* Dense data region */}
      <Card padding="none">
        <Table hoverable fullWidth>
          <Table.Header>
            <Table.Row>
              <Table.Head>Customer</Table.Head>
              <Table.Head>Plan</Table.Head>
              <Table.Head>Amount</Table.Head>
              <Table.Head>Status</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((r) => (
              <Table.Row key={r.id}>
                <Table.Cell>{r.name}</Table.Cell>
                <Table.Cell>{r.plan ?? <Text color="tertiary">—</Text>}</Table.Cell>
                <Table.Cell>{r.amount}</Table.Cell>
                <Table.Cell>
                  <Badge variant="subtle" intent={statusIntent[r.status]}>{r.status}</Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </Stack>
  );
}
