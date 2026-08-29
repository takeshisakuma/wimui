import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Comment } from "./Comment";

vi.mock("@/i18n/useWimTranslation", () => ({
  useWimTranslation: () => ({
    // 実物と同じく補間する ── キーをそのまま返すモックだと、
    // `action_context` が名前を運んでいるかを見られない。
    t: (key: string, vars?: Record<string, string>) =>
      vars ? `${key}:${Object.values(vars).join(",")}` : key,
  }),
}));

const AUTHOR = { name: "Ngozi Okonkwo-Whitfield", initials: "NO" };

describe("Comment", () => {
  it("renders the author and the body", () => {
    render(
      <Comment id="c1" author={AUTHOR}>
        Ship it.
      </Comment>,
    );
    expect(screen.getByText("Ngozi Okonkwo-Whitfield")).toBeInTheDocument();
    expect(screen.getByText("Ship it.")).toBeInTheDocument();
  });

  // 名前を著者から作る。固定文字列にすると、一覧で同名の article が並ぶ。
  it("names the article after its author", () => {
    render(
      <Comment id="c1" author={AUTHOR}>
        Ship it.
      </Comment>,
    );
    expect(screen.getByRole("article")).toHaveAccessibleName(
      "Ngozi Okonkwo-Whitfield",
    );
  });

  it("shows a timestamp when given one", () => {
    render(
      <Comment id="c1" author={AUTHOR} timestamp={<span>3 hours ago</span>}>
        Ship it.
      </Comment>,
    );
    expect(screen.getByText("3 hours ago")).toBeInTheDocument();
  });

  // 黙って書き換わったコメントは、最初からそう書いてあったように読まれる。
  it("says so when the comment was edited", () => {
    const { rerender } = render(
      <Comment id="c1" author={AUTHOR}>
        Ship it.
      </Comment>,
    );
    expect(screen.queryByText("comment.edited")).not.toBeInTheDocument();

    rerender(
      <Comment id="c1" author={AUTHOR} edited>
        Ship it later.
      </Comment>,
    );
    expect(screen.getByText("comment.edited")).toBeInTheDocument();
  });

  describe("actions", () => {
    it("shows only the actions that were wired up", () => {
      render(
        <Comment id="c1" author={AUTHOR} onReply={() => {}}>
          Ship it.
        </Comment>,
      );
      const names = screen.getAllByRole("button").map((b) => b.textContent);
      expect(names).toHaveLength(1);
      expect(names[0]).toContain("comment.reply");
    });

    it("passes the comment id back", async () => {
      const onReply = vi.fn();
      const onEdit = vi.fn();
      const onDelete = vi.fn();
      render(
        <Comment
          id="c42"
          author={AUTHOR}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        >
          Ship it.
        </Comment>,
      );
      const user = userEvent.setup();
      for (const [label, spy] of [
        ["comment.reply", onReply],
        ["comment.edit", onEdit],
        ["comment.delete", onDelete],
      ] as const) {
        await user.click(screen.getByRole("button", { name: new RegExp(label) }));
        expect(spy).toHaveBeenCalledWith("c42");
      }
    });

    // 「返信」だけが並ぶと読み上げでは区別が付かないので、名前を足す。
    it("distinguishes identical action labels by author", () => {
      render(
        <Comment id="c1" author={AUTHOR} onReply={() => {}}>
          Ship it.
        </Comment>,
      );
      const name = screen.getByRole("button").textContent ?? "";
      expect(name).toContain("comment.reply");
      expect(name).toContain("Ngozi Okonkwo-Whitfield");
    });

    it("renders extra actions after the built-in ones", () => {
      render(
        <Comment
          id="c1"
          author={AUTHOR}
          onReply={() => {}}
          actions={<button type="button">Report</button>}
        >
          Ship it.
        </Comment>,
      );
      const names = screen.getAllByRole("button").map((b) => b.textContent);
      expect(names).toHaveLength(2);
      expect(names[1]).toBe("Report");
    });
  });

  describe("the reply box and the edit form are slots, not state", () => {
    it("shows the composer only on the comment being replied to", () => {
      const { rerender } = render(
        <Comment
          id="c1"
          author={AUTHOR}
          replyingTo="c2"
          composer={<textarea aria-label="reply" />}
        >
          Ship it.
        </Comment>,
      );
      expect(screen.queryByLabelText("reply")).not.toBeInTheDocument();

      rerender(
        <Comment
          id="c1"
          author={AUTHOR}
          replyingTo="c1"
          composer={<textarea aria-label="reply" />}
        >
          Ship it.
        </Comment>,
      );
      expect(screen.getByLabelText("reply")).toBeInTheDocument();
    });

    // 本文と編集欄を両方出すと、どちらが本物か分からなくなる。
    it("replaces the body while editing rather than showing both", () => {
      render(
        <Comment
          id="c1"
          author={AUTHOR}
          editingId="c1"
          editor={<textarea aria-label="edit" />}
        >
          Ship it.
        </Comment>,
      );
      expect(screen.getByLabelText("edit")).toBeInTheDocument();
      expect(screen.queryByText("Ship it.")).not.toBeInTheDocument();
    });

    // 同じ ID を両方に渡すのはアプリ側の誤用だが、**黙ってどちらかを落とさない**
    // ── 落とすとアプリが持っている状態が画面から消え、原因を追えなくなる。
    // 見た目は編集欄と返信欄が積み重なる（ラベルで区別が付く）。決めた挙動として残す。
    it("renders both slots when the app points them at the same comment", () => {
      render(
        <Comment
          id="c1"
          author={AUTHOR}
          replyingTo="c1"
          editingId="c1"
          composer={<textarea aria-label="reply" />}
          editor={<textarea aria-label="edit" />}
        >
          Ship it.
        </Comment>,
      );
      expect(screen.getByLabelText("edit")).toBeInTheDocument();
      expect(screen.getByLabelText("reply")).toBeInTheDocument();
      expect(screen.queryByText("Ship it.")).not.toBeInTheDocument();
    });

    it("keeps the body when another comment is being edited", () => {
      render(
        <Comment
          id="c1"
          author={AUTHOR}
          editingId="c2"
          editor={<textarea aria-label="edit" />}
        >
          Ship it.
        </Comment>,
      );
      expect(screen.getByText("Ship it.")).toBeInTheDocument();
      expect(screen.queryByLabelText("edit")).not.toBeInTheDocument();
    });
  });

  describe("nesting", () => {
    const nested = (
      <Comment
        id="c1"
        author={AUTHOR}
        replies={[
          <Comment key="c2" id="c2" author={{ name: "Bruno" }}>
            Agreed.
          </Comment>,
          <Comment
            key="c3"
            id="c3"
            author={{ name: "Mei" }}
            replies={[
              <Comment key="c4" id="c4" author={{ name: "Ada" }}>
                Deepest.
              </Comment>,
            ]}
          >
            One more thing.
          </Comment>,
        ]}
      >
        Ship it.
      </Comment>
    );

    // 字下げは目にしか届かない。深さを支援技術へ渡すのは入れ子のリスト。
    it("expresses depth as nested lists, not just indentation", () => {
      render(nested);
      const lists = screen.getAllByRole("list");
      expect(lists).toHaveLength(2);
      // **直接の子だけを数える。** `within` は子孫まで拾うので、入れ子が
      // 1 段深いだけの木も同じ数になり、段の付け替えを見逃す。
      const directItems = (list: HTMLElement) =>
        Array.from(list.children).filter((el) => el.tagName === "LI");
      expect(directItems(lists[0])).toHaveLength(2);
      expect(directItems(lists[1])).toHaveLength(1);
    });

    it("renders every reply", () => {
      render(nested);
      for (const text of ["Agreed.", "One more thing.", "Deepest."]) {
        expect(screen.getByText(text)).toBeInTheDocument();
      }
      expect(screen.getAllByRole("article")).toHaveLength(4);
    });

    it("draws no list when there are no replies", () => {
      render(
        <Comment id="c1" author={AUTHOR}>
          Ship it.
        </Comment>,
      );
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
  });

  it("forwards the ref and extra props to the article", () => {
    const ref = React.createRef<HTMLElement>();
    render(
      <Comment id="c1" author={AUTHOR} ref={ref} data-testid="c">
        Ship it.
      </Comment>,
    );
    expect(ref.current).toBe(screen.getByTestId("c"));
    expect(ref.current?.tagName).toBe("ARTICLE");
  });
});
