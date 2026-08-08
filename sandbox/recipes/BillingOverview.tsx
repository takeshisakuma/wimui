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

// Colour carries state only: paid and failed earn an intent, pending is the
// ordinary case. Leaving the intent undefined would fall back to primary and
// paint the ordinary case as loudly as the exceptions.
const statusIntent: Record<Status, "success" | "danger" | "neutral"> = {
  paid: "success",
  failed: "danger",
  pending: "neutral",
};

// One protagonist (the KPI row), a dense table below, tokens via props,
// jagged real data, and one deliberately incomplete row.
export default function BillingOverview() {
  return (
    <Stack gap="lg">
      <Title tag="h2" size="lg">Billing</Title>

      {/* Protagonist: KPI row. Uneven content per tile — not three clones.
          `outline` everywhere: one elevation stance per screen, and the table
          below is framed by a border too. Stats defaults to `elevated`. */}
      <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="md">
        <Stats variant="outline">
          <Stats.Label>MRR</Stats.Label>
          <Stats.Value>$48,210</Stats.Value>
          <Stats.Trend>+6.4%</Stats.Trend>
        </Stats>
        <Stats variant="outline">
          <Stats.Label>Active workspaces</Stats.Label>
          <Stats.Value>1,204</Stats.Value>
          <Stats.Description>176 idle over 30 days</Stats.Description>
        </Stats>
        <Stats variant="outline">
          <Stats.Label>Failed webhooks</Stats.Label>
          <Stats.Value>137</Stats.Value>
          {/* Not a Trend: rising failures are bad, and Trend only pairs ↑ with
              the success colour. A plain description says it without lying. */}
          <Stats.Description>+23 today</Stats.Description>
        </Stats>
      </Grid>

      {/* Dense data region. `card` frames the table itself — wrapping it in a
          Card instead would stack the table's border on the last row's and put
          a 4px radius inside a 12px one. `mobileCard` + Cell `label` keep the
          four columns readable when the Playground card is narrow (T97). */}
      <Table card hoverable fullWidth mobileCard>
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
              <Table.Cell label="Customer">{r.name}</Table.Cell>
              <Table.Cell label="Plan">
                {r.plan ?? <Text color="tertiary">—</Text>}
              </Table.Cell>
              <Table.Cell label="Amount">{r.amount}</Table.Cell>
              <Table.Cell label="Status">
                <Badge variant="subtle" intent={statusIntent[r.status]}>{r.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  );
}
