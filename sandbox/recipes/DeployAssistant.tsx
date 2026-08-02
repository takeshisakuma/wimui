import { useState } from "react";
import {
  AgentStatus,
  AIResponseFeedback,
  Badge,
  Box,
  Button,
  ChatContainer,
  ChatInputArea,
  ChatMessage,
  ChatMessageList,
  CodeBlock,
  Grid,
  Group,
  ModelSelector,
  PromptInput,
  Sidebar,
  SourceCitationList,
  Stack,
  Text,
  ThoughtProcess,
  ThoughtStep,
  ThreadList,
  Title,
  UsageMeter,
} from "wimui";

// An assistant a support engineer opens while a deploy is on fire. The screen
// is the conversation; everything else is chrome and stays quieter than it.
//
// AppShell would be the obvious frame, but its root is `position: fixed;
// inset: 0` — it takes the whole viewport and cannot sit inside a gallery, a
// docs preview, or anything else. Two columns and a header row instead;
// `Sidebar` brings its own width, so no size is written here.

const threads = [
  {
    id: "t_8f2c",
    title: "Deploy 8f2c1ad rolled back twice",
    preview: "Health checks pass but the pods never take traffic",
    timestamp: "14:09",
  },
  {
    id: "t_pool",
    // Long on purpose: a real thread title is a sentence someone typed in a
    // hurry, and the list has to survive it.
    title: "Postgres connection pool exhausted after the 14:02 restart — same as last Thursday?",
    preview: "341 connections against a max of 200",
    timestamp: "13:51",
    unread: true,
  },
  {
    id: "t_queue",
    title: "Staging queue draining slowly",
    preview: "Backlog sat at 4,281 for most of the morning",
    timestamp: "Yesterday",
  },
  {
    id: "t_tf",
    title: "Terraform plan diff on the eu-west module",
    // No preview: opened and abandoned before a reply came back.
    timestamp: "Jul 29",
  },
];

const models = [
  {
    id: "sonnet",
    name: "Sonnet",
    description: "Fast enough to keep up with a live incident",
    contextLength: 200000,
    badge: "Default",
  },
  {
    id: "opus",
    name: "Opus",
    description: "Slower, better at reading unfamiliar stack traces",
    contextLength: 200000,
  },
];

const readinessProbe = `readinessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3`;

const sources = [
  {
    title: "Rollout stuck: pods ready but not receiving traffic",
    url: "https://runbooks.internal/deploys/rollout-stuck",
    domain: "runbooks.internal",
    description: "Covers the readiness gate the service mesh adds on top of Kubernetes.",
  },
  {
    title: "Deploy 8f2c1ad — build log",
    url: "https://ci.internal/builds/8f2c1ad",
    domain: "ci.internal",
  },
];

export default function DeployAssistant() {
  const [activeThread, setActiveThread] = useState("t_8f2c");
  const [draft, setDraft] = useState("");

  return (
    <Stack gap="xl">
      {/* Chrome: which model, how much budget is left, nothing else. No primary
          surface here — the page's one accent belongs to Send. */}
      {/* Chrome: the page title alone. UsageMeter and ModelSelector are
          `width: 100%` column fillers (ModelSelector even sets `min-width: 0`),
          so a flex row squeezes them to one character per line — measured 12px
          wide and 272px tall before they moved. They live in the rail, which is
          a column and the size they expect. Filed as T59. */}
      <Title tag="h1" size="sm">
        Deploy assistant
      </Title>

      <Grid cols={{ base: "1fr", lg: "auto 1fr" }} gap="xl" align="start">
        <Sidebar bordered>
          {/* Sidebar has no padding of its own (measured 0 on all four sides),
              so the rail states its own. Without it the thread list sits on the
              top edge and the meter on the bottom one. */}
          <Box py="lg">
            <Stack gap="lg">
              <ThreadList threads={threads} activeId={activeThread} onSelect={setActiveThread} />
              <Box px="md">
                <Stack gap="md">
                  <ModelSelector models={models} value="sonnet" />
                  <UsageMeter
                    used={128400}
                    max={200000}
                    size="sm"
                    labels={{ label: "Context", unit: "tokens" }}
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Sidebar>

        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="right" senderName="You" timestamp="14:04">
              8f2c1ad has rolled back twice in prod. Health checks pass in the pod logs, so why does
              the rollout never finish?
            </ChatMessage>

            <ChatMessage
              position="left"
              senderName="Assistant"
              timestamp="14:05"
              actions={<AIResponseFeedback showRegenerate />}
            >
              <Stack gap="lg">
                <ThoughtProcess>
                  <ThoughtStep status="completed" label="Read the rollout events">
                    Both attempts stopped at 3 of 5 replicas ready.
                  </ThoughtStep>
                  <ThoughtStep status="completed" label="Compared against the last good deploy">
                    7c41e90 used the same image and finished in 12.4s.
                  </ThoughtStep>
                  <ThoughtStep status="completed" label="Checked the mesh sidecar" isLast>
                    The sidecar reports the pod unhealthy for 30s after the container is ready.
                  </ThoughtStep>
                </ThoughtProcess>

                <Text>
                  Kubernetes considers the pod ready before the mesh does. Your probe waits 5
                  seconds and fails after 3 checks, so the rollout gives up at second 35 — while the
                  sidecar is still holding the pod out of the pool.
                </Text>

                <CodeBlock
                  code={readinessProbe}
                  language="yaml"
                  filename="k8s/deployment.yaml"
                  showLineNumbers
                />

                <Text>
                  Raising <code>initialDelaySeconds</code> past the sidecar&apos;s own warm-up is the
                  smaller change. Raising <code>failureThreshold</code> hides the symptom on every
                  future deploy.
                </Text>

                <SourceCitationList sources={sources} />
              </Stack>
            </ChatMessage>

            <ChatMessage position="right" senderName="You" timestamp="14:08">
              Is that the same thing that hit us last Thursday?
            </ChatMessage>


            <ChatMessage position="left" senderName="Assistant" timestamp="14:09" isTyping>
              <AgentStatus status="running" message="Reading 6 incidents from the last 30 days" />
            </ChatMessage>
          </ChatMessageList>

          {/* Not a happy path: the answer never arrived. Deliberately *not* a
              ChatMessage — nothing was said, so a speech bubble would be a lie,
              and the retry belongs next to the failure rather than in a
              page-level banner.

              The danger colour here is solid, not subtle, and the failure is
              written as text rather than an `AgentStatus status="error"`.
              Both of those are workarounds for a real defect, measured while
              building this screen: on dark, `text-danger` (#ffa3a3) is
              6.06:1 over `surface` but only 4.30:1 over `surface-variant` /
              `surface-tertiary`, and 3.10–3.63:1 once a `subtle` tint
              composites on top. `check:contrast` stays green because it tests
              three of the eleven surface tokens. Filed as T56. */}
          {/* ChatMessageList pads its own children; a sibling of the list gets
              nothing, so the padding is stated here rather than left to chance.
              2xl (16px) rather than the list's own md (8px): the sender labels
              inside sit 14px from the list edge, so md left this block visibly
              tighter than everything above it. */}
          <Box px="2xl" py="2xl">
            <Stack gap="md">
              <Group gap="md" align="center">
                <Badge intent="danger">No answer</Badge>
                <Text size="sm" color="text-secondary">
                  Search over incident history timed out
                </Text>
              </Group>
              <Group gap="sm">
                <Button variant="outline" size="sm">
                  Search without history
                </Button>
              </Group>
            </Stack>
          </Box>

          <ChatInputArea>
            <PromptInput
              value={draft}
              onChange={setDraft}
              onSubmit={() => setDraft("")}
              placeholder="Ask about this deploy"
              showAttach
              maxRows={6}
              fullWidth
            />
          </ChatInputArea>
        </ChatContainer>
      </Grid>
    </Stack>
  );
}
