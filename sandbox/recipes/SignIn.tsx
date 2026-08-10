import { Center, Card, Stack, Group, Title, Text, Input, PasswordInput, Checkbox, Button, Link } from "wimui";

// A focused single-protagonist screen: one centered card, a left-aligned form.
// Not the generic badge → heading → two-buttons hero. Real product context.
export default function SignIn() {
  // `h="100%"` fills the host container when it has a height (the sandbox app
  // shell) and hugs its content when it does not (the docs preview).
  return (
    <Center h="100%" p="lg">
      <Card padding="lg" variant="outline" style={{ width: "min(380px, 100%)" }}>
        <Stack gap="lg">
          <Stack gap="2xs">
            <Title tag="h1" size="md">Sign in to Larkfield</Title>
            <Text color="secondary">Use your work email — SSO is enabled for Enterprise workspaces.</Text>
          </Stack>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="md">
              <Input label="Work email" type="email" placeholder="you@company.com" fullWidth />
              <PasswordInput label="Password" fullWidth />
              <Group justify="between" align="center">
                <Checkbox>Keep me signed in</Checkbox>
                <Link href="#" priority="secondary">Forgot password?</Link>
              </Group>
              <Button type="submit" variant="solid" fullWidth>Sign in</Button>
            </Stack>
          </form>
          <Text size="sm" color="text-tertiary">
            No account? <Link href="#">Start a 14-day trial</Link>
          </Text>
        </Stack>
      </Card>
    </Center>
  );
}
