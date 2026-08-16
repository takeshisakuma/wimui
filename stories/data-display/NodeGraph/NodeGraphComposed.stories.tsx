import React, { useCallback, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { NodeGraph } from "@/components/data-display/NodeGraph/NodeGraph";
import { Badge } from "@/components/data-display/Badge/Badge";
import { Button } from "@/components/form/Button/Button";
import { Stack } from "@/components/layout/Stack/Stack";
import { Text } from "@/components/typography/Text/Text";
import {
  Handle,
  Position,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type NodeTypes,
  type OnConnect,
} from "@xyflow/react";
import styles from "./composed.module.scss";

/**
 * Look-see: WIM 部品を nodeTypes でノードの中に置く。
 * T199 の Realistic 単体（Selected）とは別。カタログに残す。
 */
const meta: Meta<typeof NodeGraph> = {
  title: "Components/Visualization/NodeGraph",
  component: NodeGraph,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof NodeGraph>;

type CounterData = { title: string; badge: string };
type NoteData = { body: string };
type DeskData = { line: string; call: string };

function CounterNode({ data }: { data: CounterData }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Stack className={styles.body} gap="xs" p="sm" align="start">
        <Badge intent="warning" size="sm">
          {data.badge}
        </Badge>
        <Text size="sm" truncate>
          {data.title}
        </Text>
      </Stack>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

function NoteNode({ data }: { data: NoteData }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Stack className={styles.body} gap="xs" p="sm" align="start">
        <Text size="sm">{data.body}</Text>
      </Stack>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

function DeskNode({ data }: { data: DeskData }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Stack className={styles.body} gap="xs" p="sm" align="start">
        <Text size="sm">{data.line}</Text>
        <Button className="nodrag nopan" size="sm" type="button">
          {data.call}
        </Button>
      </Stack>
    </>
  );
}

const nodeTypes: NodeTypes = {
  counter: CounterNode,
  note: NoteNode,
  desk: DeskNode,
};

function Graph({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((current) => addEdge(params, current)),
    [setEdges],
  );

  return (
    <div className={styles.frame}>
      <NodeGraph
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}

export const Composed: Story = {
  args: {
    showControls: true,
    showMiniMap: false,
  },
  render: function Render() {
    const { t, i18n } = useTranslation(ALL_NAMESPACES);
    const lang = i18n.language;
    const nodes: Node[] = useMemo(
      () => [
        {
          id: "counter",
          type: "counter",
          position: { x: 48, y: 120 },
          data: {
            title: t("story.nodegraph_composed_counter"),
            badge: t("story.nodegraph_composed_badge"),
          },
        },
        {
          id: "note",
          type: "note",
          position: { x: 340, y: 40 },
          data: { body: t("story.nodegraph_composed_note") },
        },
        {
          id: "desk",
          type: "desk",
          position: { x: 340, y: 240 },
          data: {
            line: t("story.nodegraph_composed_desk"),
            call: t("story.nodegraph_composed_call"),
          },
        },
      ],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [lang],
    );
    const edges: Edge[] = useMemo(
      () => [
        {
          id: "e-counter-note",
          source: "counter",
          target: "note",
          label: t("story.nodegraph_composed_edge_note"),
        },
        {
          id: "e-counter-desk",
          source: "counter",
          target: "desk",
          label: t("story.nodegraph_composed_edge_desk"),
        },
      ],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [lang],
    );

    return <Graph key={lang} initialNodes={nodes} initialEdges={edges} />;
  },
};
