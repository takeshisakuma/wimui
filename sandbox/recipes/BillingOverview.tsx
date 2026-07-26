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

// Colour carries state only. paid and failed earn a filled intent; pending is
// the ordinary case, so it gets an outline instead — `neutral`/`subtle` would
// be a 15%-alpha grey that disappears on a white row, and leaving intent
// undefined falls back to primary and reads as a state of its own.
type BadgeLook = { variant: "subtle" | "outline"; intent: "success" | "danger" | "primary" | "secondary" };

const statusBadge: Record<Status, BadgeLook> = {
  paid: { variant: "subtle", intent: "success" },
  failed: { variant: "subtle", intent: "danger" },
  pending: { variant: "outline", intent: "secondary" },
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
          {/* Not a Trend: rising failures are bad, and Trend only pairs ↑ with
              the success colour. A plain description says it without lying. */}
          <Stats.Description>+23 today</Stats.Description>
        </Stats>
      </Grid>

      {/* Dense data region. `card` frames the table itself — wrapping it in a
          Card instead would stack the table's border on the last row's and put
          a 4px radius inside a 12px one. */}
      <Table card hoverable fullWidth>
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
                <Badge {...statusBadge[r.status]}>{r.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  );
}
