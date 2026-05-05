import React from "react";
import { Box, Stack, Text } from "../../src";

/**
 * Common header for Audit categories.
 */
export const SectionHeader = ({ 
  title, 
  description 
}: { 
  title: string; 
  description?: string 
}) => (
  <Box px="lg" py="lg" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
    <Stack gap="xs">
      <Text size="xl" weight="bold">
        {title}
      </Text>
      {description && (
        <Text size="sm" color="text-secondary">
          {description}
        </Text>
      )}
    </Stack>
  </Box>
);

/**
 * Main wrapper for Audit pages.
 */
export const AuditPage = ({ 
  title, 
  description,
  children 
}: { 
  title: string; 
  description?: string;
  children: React.ReactNode 
}) => (
  <Box bg="bg-surface" style={{ minHeight: "100vh" }}>
    <SectionHeader title={title} description={description} />
    {children}
  </Box>
);

/**
 * A grid container for comparing components.
 */
export const ComparisonGrid = ({
  title,
  children,
  maxWidth,
  overflowX,
}: {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
  overflowX?: React.CSSProperties["overflowX"];
}) => (
  <Box m="lg" style={{ maxWidth }}>
    <Text color="text-secondary" size="sm" style={{ marginBottom: "var(--wim-spacing-md)" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: "var(--wim-spacing-lg)",
        padding: "var(--wim-spacing-md)",
        overflowX: (overflowX || "visible") as React.CSSProperties["overflowX"],
      }}
    >
      {children}
    </Box>
  </Box>
);

interface ComponentGroupProps {
  label: string;
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  align?: "start" | "center" | "end" | "stretch";
  gap?: string | number;
  noStack?: boolean;
  wrap?: boolean;
  direction?: "row" | "column";
  overflow?: string;
}

/**
 * A group for a single component variant or type.
 */
export const ComponentGroup = ({
  label,
  children,
  width = "100%",
  maxWidth,
  align = "start",
  gap = "md",
  noStack = false,
  wrap = false,
  direction = "column",
  overflow = "auto",
}: ComponentGroupProps) => (
  <Stack gap="var(--wim-spacing-xs)" style={{ width, maxWidth: "100%", minWidth: 0, justifySelf: width === "fit-content" ? "start" : undefined }}>
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Box style={{ width, maxWidth: maxWidth || "100%", overflow, minWidth: 0 }}>
      {noStack ? (
        children
      ) : (
        <Stack direction={direction} gap={gap} align={align} w="100%" wrap={wrap}>
          {children}
        </Stack>
      )}
    </Box>
  </Stack>
);
