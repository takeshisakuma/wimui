import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { KanbanBoard } from "@/components/data-display/Kanban/Kanban";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/Data Structures/Kanban",
  component: KanbanBoard,
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

type CardId = string;
type Columns = Record<string, CardId[]>;

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const cardLabels: Record<string, string> = {
      "card-1": t("story.kanban_card_design"),
      "card-2": t("story.kanban_card_research"),
      "card-3": t("story.kanban_card_develop"),
      "card-4": t("story.kanban_card_review"),
      "card-5": t("story.kanban_card_deploy"),
      "card-6": t("story.kanban_card_done1"),
    };

    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      inProgress: ["card-3"],
      review: ["card-4"],
      done: ["card-5", "card-6"],
    });

    const handleCardMove = (
      cardId: string,
      fromColumnId: string,
      toColumnId: string,
    ) => {
      setColumns((prev) => {
        const next = { ...prev };
        next[fromColumnId] = prev[fromColumnId].filter((id) => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };

    return (
      <KanbanBoard onCardMove={handleCardMove}>
        <KanbanBoard.Column
          id="todo"
          title={t("story.kanban_col_todo")}
          cardCount={columns.todo.length}
        >
          {columns.todo.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="inProgress"
          title={t("story.kanban_col_in_progress")}
          cardCount={columns.inProgress.length}
        >
          {columns.inProgress.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="review"
          title={t("story.kanban_col_review")}
          cardCount={columns.review.length}
        >
          {columns.review.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="done"
          title={t("story.kanban_col_done")}
          cardCount={columns.done.length}
        >
          {columns.done.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
      </KanbanBoard>
    );
  },
};

export const WithDisabledCard: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      done: ["card-3"],
    });

    const handleCardMove = (
      cardId: string,
      fromColumnId: string,
      toColumnId: string,
    ) => {
      setColumns((prev) => {
        const next = { ...prev };
        next[fromColumnId] = prev[fromColumnId].filter((id) => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };

    return (
      <KanbanBoard onCardMove={handleCardMove}>
        <KanbanBoard.Column
          id="todo"
          title={t("story.kanban_col_todo")}
          cardCount={columns.todo.length}
        >
          <KanbanBoard.Card id="card-1">
            {t("story.kanban_card_design")}
          </KanbanBoard.Card>
          <KanbanBoard.Card id="card-2" disabled>
            {t("story.kanban_card_locked")}
          </KanbanBoard.Card>
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="done"
          title={t("story.kanban_col_done")}
          cardCount={columns.done.length}
        >
          <KanbanBoard.Card id="card-3">
            {t("story.kanban_card_done1")}
          </KanbanBoard.Card>
        </KanbanBoard.Column>
      </KanbanBoard>
    );
  },
};

export const MobileUI: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      inProgress: ["card-3"],
      done: ["card-4"],
    });

    const cardLabels: Record<string, string> = {
      "card-1": t("story.kanban_card_design"),
      "card-2": t("story.kanban_card_research"),
      "card-3": t("story.kanban_card_develop"),
      "card-4": t("story.kanban_card_done1"),
    };

    const handleCardMove = (
      cardId: string,
      fromColumnId: string,
      toColumnId: string,
    ) => {
      setColumns((prev) => {
        const next = { ...prev };
        next[fromColumnId] = prev[fromColumnId].filter((id) => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };

    return (
      <KanbanBoard onCardMove={handleCardMove} forceMobileUI>
        <KanbanBoard.Column
          id="todo"
          title={t("story.kanban_col_todo")}
          cardCount={columns.todo.length}
        >
          {columns.todo.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="inProgress"
          title={t("story.kanban_col_in_progress")}
          cardCount={columns.inProgress.length}
        >
          {columns.inProgress.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
        <KanbanBoard.Column
          id="done"
          title={t("story.kanban_col_done")}
          cardCount={columns.done.length}
        >
          {columns.done.map((id) => (
            <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>
          ))}
        </KanbanBoard.Column>
      </KanbanBoard>
    );
  },
};
