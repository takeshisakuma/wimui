import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FileUpload } from "./FileUpload";
import { Dropzone } from "../Dropzone/Dropzone";

/**
 * 実アプリでは必ずサーバ側の既存ファイルを出すのに、どちらのコンポーネントも
 * 内部 state しか持たず、一覧はアプリが自前で描くしかなかった。その結果
 * コンポーネントは永久に「ファイル未選択」と言い続ける（T32 2 枚目 ⑧）。
 */
const fileNamed = (name: string) => new File(["x"], name, { type: "text/plain" });

describe("FileUpload shows files it did not pick", () => {
  // ② で踏んだのと同じ形。マウント時点で出ないと保存済みが消える。
  it("shows the names it is mounted with", () => {
    render(<FileUpload label="Docs" value={["registration.pdf"]} />);
    expect(screen.getByText("registration.pdf")).toBeInTheDocument();
  });

  it("joins several names", () => {
    render(<FileUpload label="Docs" value={["a.pdf", "b.pdf"]} />);
    expect(screen.getByText("a.pdf, b.pdf")).toBeInTheDocument();
  });

  it("falls back to the empty label for an empty list", () => {
    render(<FileUpload label="Docs" value={[]} noFileLabel="Nothing yet" />);
    expect(screen.getByText("Nothing yet")).toBeInTheDocument();
  });

  it("keeps showing value after a pick, and reports the pick", () => {
    const onChange = vi.fn();
    const { container } = render(
      <FileUpload label="Docs" value={["server.pdf"]} onChange={onChange} />,
    );
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [fileNamed("local.pdf")] } });

    expect(onChange).toHaveBeenCalledOnce();
    // 制御されている間は表示を勝手に変えない — 呼び出し側が value を更新する
    expect(screen.getByText("server.pdf")).toBeInTheDocument();
  });

  it("still tracks its own selection when value is not given", () => {
    const { container } = render(<FileUpload label="Docs" />);
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [fileNamed("local.pdf")] } });

    expect(screen.getByText("local.pdf")).toBeInTheDocument();
  });
});

describe("Dropzone shows files it did not pick", () => {
  it("shows the names it is mounted with", () => {
    render(<Dropzone label="Docs" value={["registration.pdf"]} />);
    expect(screen.getByText("registration.pdf")).toBeInTheDocument();
  });

  it("lists several names separately", () => {
    render(<Dropzone label="Docs" value={["a.pdf", "b.pdf"]} />);
    expect(screen.getByText("a.pdf")).toBeInTheDocument();
    expect(screen.getByText("b.pdf")).toBeInTheDocument();
  });

  it("lists nothing for an empty list", () => {
    const { container } = render(<Dropzone label="Docs" value={[]} />);
    expect(container.querySelectorAll("[class*=fileName]")).toHaveLength(0);
  });

  it("still tracks its own selection when value is not given", () => {
    const { container } = render(<Dropzone label="Docs" />);
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: [fileNamed("local.pdf")] } });

    expect(screen.getByText("local.pdf")).toBeInTheDocument();
  });
});
