import React, { useState, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SwipeAction, SwipeActionRef } from "@/components/data-display/SwipeAction/SwipeAction";
import { SwipeableList } from "@/components/data-display/SwipeAction/SwipeableList";
import { List } from "@/components/data-display/List/List";
import { Card } from "@/components/data-display/Card/Card";
import { Text } from "@/components/typography/Text/Text";
import { Stack } from "@/components/layout/Stack/Stack";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/overlay/Dialog/Dialog";
import { Button } from "@/components/form/Button/Button";

const meta: Meta<typeof SwipeAction> = {
  title: "Components/Utilities/SwipeAction",
  component: SwipeAction,
};

export default meta;
type Story = StoryObj<typeof SwipeAction>;

const ListItem = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <Card padding="md" style={{ borderRadius: 0, border: "none", borderBottom: "1px solid var(--wim-color-border)" }}>
    <Stack gap="xs">
      <Text weight="bold">{title}</Text>
      <Text size="sm" color="text-tertiary">{subtitle}</Text>
    </Stack>
  </Card>
);

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<string>("");
    const swipeActionRef = useRef<SwipeActionRef>(null);

    const handleAction = (label: string) => {
      setSelectedAction(label);
      setDialogOpen(true);
    };

    return (
      <>
        <SwipeAction
          ref={swipeActionRef}
          closeOnAction={false}
          leftActions={[
            { icon: "CheckIcon", label: t("common.done"), intent: "success", onClick: () => handleAction("Done") },
          ]}
          rightActions={[
            { icon: "EditIcon", label: t("action.edit"), intent: "primary", onClick: () => handleAction("Edit") },
            { icon: "TrashIcon", label: t("action.delete"), intent: "error", onClick: () => handleAction("Delete") },
          ]}
        >
          <ListItem title={t("story.swipeaction_swipe_me")} subtitle={t("story.swipeaction_subtitle")} />
        </SwipeAction>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Action Confirmed</DialogTitle>
              <DialogDescription>
                You clicked the &quot;{selectedAction}&quot; action.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{ width: "100%" }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.close")}
                </Button>
                <Button variant="solid" intent="default" onClick={() => {
                  swipeActionRef.current?.close();
                  setDialogOpen(false);
                }}>
                  OK
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const MultipleActions: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<string>("");
    const swipeActionRef = useRef<SwipeActionRef>(null);

    const handleAction = (label: string) => {
      setSelectedAction(label);
      setDialogOpen(true);
    };

    return (
      <>
        <SwipeAction
          ref={swipeActionRef}
          closeOnAction={false}
          leftActions={[
            { icon: "BellIcon", label: "Alert", intent: "warning", onClick: () => handleAction("Alert") },
            { icon: "EmailIcon", label: "Archive", intent: "neutral", onClick: () => handleAction("Archive") },
          ]}
          rightActions={[
            { icon: "TrashIcon", label: t("action.delete"), intent: "error", onClick: () => handleAction("Delete") },
          ]}
        >
          <ListItem title={t("story.swipeaction_multiple")} subtitle="Try swiping both ways" />
        </SwipeAction>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Action Executed</DialogTitle>
              <DialogDescription>
                Performing &quot;{selectedAction}&quot; operation on this item.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{ width: "100%" }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.cancel")}
                </Button>
                <Button variant="solid" intent="default" onClick={() => {
                  swipeActionRef.current?.close();
                  setDialogOpen(false);
                }}>
                  {t("action.confirm")}
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const ExclusiveList: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ id: number; action: string } | null>(null);
    const swipeActionRefs = useRef<Record<number, SwipeActionRef | null>>({});

    const handleAction = (id: number, action: string) => {
      setSelectedItem({ id, action });
      setDialogOpen(true);
    };

    const confirmAction = () => {
      if (selectedItem) {
        console.log(`Updated Task ${selectedItem.id} to ${selectedItem.action}`);
        swipeActionRefs.current[selectedItem.id]?.close();
      }
      setDialogOpen(false);
    };

    return (
      <>
        <SwipeableList exclusive>
          <List>
            {[1, 2, 3, 4, 5].map((i) => (
              <SwipeAction
                key={i}
                as="li"
                ref={(el) => { swipeActionRefs.current[i] = el; }}
                closeOnAction={false}
                leftActions={[
                  {
                    icon: "CheckIcon",
                    label: "Start",
                    onClick: () => handleAction(i, "In Progress"),
                    intent: "success",
                  },
                ]}
                rightActions={[
                  {
                    icon: "BellIcon",
                    label: "Hold",
                    onClick: () => handleAction(i, "On Hold"),
                    intent: "warning",
                  },
                  {
                    icon: "TrashIcon",
                    label: "Cancel",
                    onClick: () => handleAction(i, "Cancelled"),
                    intent: "error",
                  },
                ]}
              >
                <ListItem title={`Task ${i}`} subtitle="Swipe left or right. Exclusive mode is on." />
              </SwipeAction>
            ))}
          </List>
        </SwipeableList>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Status</DialogTitle>
              <DialogDescription>
                Are you sure you want to change Task {selectedItem?.id} status to &quot;{selectedItem?.action}&quot;?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{ width: "100%" }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.cancel")}
                </Button>
                <Button 
                  variant="solid"
                  intent={selectedItem?.action === "Cancelled" ? "destructive" : "default"}
                  onClick={confirmAction}
                >
                  {t("action.confirm")}
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};
