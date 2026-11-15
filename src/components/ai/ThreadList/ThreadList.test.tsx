import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThreadList, ConversationList, Thread } from "./ThreadList";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const THREADS: Thread[] = [
  { id: "a", title: "First chat", preview: "Hello there", timestamp: "2m" },
  { id: "b", title: "Second chat", unread: true },
];

describe("ThreadList", () => {
  it("renders all threads", () => {
    render(<ThreadList threads={THREADS} />);
    expect(screen.getByText("First chat")).toBeInTheDocument();
    expect(screen.getByText("Second chat")).toBeInTheDocument();
  });

  it("marks the active thread with aria-current", () => {
    render(<ThreadList threads={THREADS} activeId="b" />);
    const active = screen.getByText("Second chat").closest("button");
    expect(active).toHaveAttribute("aria-current", "true");
  });

  it("calls onSelect when a thread is clicked", () => {
    const onSelect = vi.fn();
    render(<ThreadList threads={THREADS} onSelect={onSelect} />);
    fireEvent.click(screen.getByText("First chat"));
    expect(onSelect).toHaveBeenCalledWith("a");
  });

  it("shows delete buttons and calls onDelete", () => {
    const onDelete = vi.fn();
    render(<ThreadList threads={THREADS} onDelete={onDelete} labels={{ delete: "Remove" }} />);
    fireEvent.click(screen.getAllByLabelText("Remove")[0]);
    expect(onDelete).toHaveBeenCalledWith("a");
  });

  // T402: 会話を消すのは使う側。削除ボタンにフォーカスを置いたまま行が消えると、文書へ落ちていた。
  it("keeps focus on the previous conversation when one is deleted", () => {
    const Removable = () => {
      const [threads, setThreads] = useState(THREADS);
      return (
        <>
          <button type="button">Before</button>
          <ThreadList
            threads={threads}
            onDelete={(id) => setThreads((current) => current.filter((thread) => thread.id !== id))}
            labels={{ delete: "Remove" }}
          />
        </>
      );
    };
    render(<Removable />);
    const remove = screen.getAllByRole("button", { name: "Remove" })[1];
    remove.focus();
    fireEvent.click(remove);
    expect(screen.queryByText("Second chat")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Remove" })).toHaveFocus();
    expect(document.activeElement).not.toBe(screen.getByRole("button", { name: "Before" }));
  });

  it("shows the empty state", () => {
    render(<ThreadList threads={[]} labels={{ empty: "Nothing here" }} />);
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("shows the new-conversation button when onNewThread is set", () => {
    const onNew = vi.fn();
    render(<ThreadList threads={THREADS} onNewThread={onNew} labels={{ newThread: "Start" }} />);
    fireEvent.click(screen.getByText("Start"));
    expect(onNew).toHaveBeenCalled();
  });

  it("exposes ConversationList as an alias", () => {
    expect(ConversationList).toBe(ThreadList);
  });
});
