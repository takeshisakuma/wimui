import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../Dialog/Dialog";
import { Button } from "../../form/Button/Button";
import type { ButtonIntent } from "../../../types/tokens";

export interface ConfirmOptions {
  /**
   * The question the dialog asks. Phrase it as the action, e.g. "Delete this file?".
   */
  title: React.ReactNode;
  /**
   * What happens if the user confirms, e.g. that it cannot be undone.
   */
  description?: React.ReactNode;
  /**
   * Label of the confirm button. Name the action ("Delete") rather than leaving the generic default.
   * @default "OK" (localized)
   */
  confirmLabel?: React.ReactNode;
  /**
   * Label of the cancel button.
   * @default "Cancel" (localized)
   */
  cancelLabel?: React.ReactNode;
  /**
   * Color role of the confirm button. With "danger", the cancel button takes the initial focus,
   * so pressing Enter right after the dialog opens does not run the destructive action.
   * @default "default"
   */
  intent?: ButtonIntent;
}

/** Opens a confirmation dialog and resolves to true when confirmed, false when cancelled or dismissed. */
export type ConfirmFunction = (options: ConfirmOptions) => Promise<boolean>;

type ConfirmRequest = {
  id: number;
  options: ConfirmOptions;
  resolve: (confirmed: boolean) => void;
};

const ConfirmContext = createContext<ConfirmFunction | undefined>(undefined);

export interface ConfirmProviderProps {
  /**
   * The part of the app that can call `useConfirm`. Place it once near the root, inside `WimProvider`.
   */
  children: React.ReactNode;
}

/**
 * Renders the confirmation dialog that `useConfirm` opens. Calls made while a dialog is open
 * wait in order and open one after another.
 */
export const ConfirmProvider = ({ children }: ConfirmProviderProps) => {
  const { t } = useWimTranslation(commonNs);
  const [current, setCurrent] = useState<ConfirmRequest | null>(null);
  const [open, setOpen] = useState(false);
  const queue = useRef<ConfirmRequest[]>([]);
  const nextId = useRef(0);
  // 続けて開いたとき、2 つ目のダイアログは 1 つ目のボタンを「開く前のフォーカス」として覚えるので、
  // 閉じても戻れない。最初に開いた時点の要素を持っておき、閉じたときフォーカスが body か
  // 閉じかけのダイアログの中（閉じるアニメーションの間は中身が残る）にあれば戻す。
  const returnFocus = useRef<HTMLElement | null>(null);

  const confirm = useCallback<ConfirmFunction>(
    (options) =>
      new Promise<boolean>((resolve) => {
        const request = { id: nextId.current++, options, resolve };
        queue.current.push(request);
        if (queue.current.length === 1) {
          returnFocus.current = document.activeElement as HTMLElement | null;
          setCurrent(request);
          setOpen(true);
        }
      }),
    [],
  );

  const answer = useCallback((confirmed: boolean) => {
    const done = queue.current.shift();
    done?.resolve(confirmed);
    const next = queue.current[0];
    if (next) {
      setCurrent(next);
    } else {
      // current は残す（閉じるアニメーションの間も中身を描くため）
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) return;
    const target = returnFocus.current;
    const active = document.activeElement;
    if (target?.isConnected && (!active || active === document.body || active.closest(".wim-confirm"))) {
      target.focus();
    }
  }, [open]);

  // Provider ごと消えたら、待っている呼び出しを「確認しなかった」で終わらせる（Promise を宙に浮かせない）
  useEffect(
    () => () => {
      queue.current.splice(0).forEach((request) => request.resolve(false));
    },
    [],
  );

  const options = current?.options;
  const danger = options?.intent === "danger";

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {current && options && (
        <Dialog
          // 次の確認は作り直す（読み上げに新しいダイアログとして名前と説明を伝え、最初のフォーカスも置き直す）
          key={current.id}
          open={open}
          onOpenChange={(next) => {
            if (!next) answer(false);
          }}
          role="alertdialog"
        >
          <DialogContent className="wim-confirm">
            <DialogHeader>
              <DialogTitle>{options.title}</DialogTitle>
              {options.description && <DialogDescription>{options.description}</DialogDescription>}
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => answer(false)} data-autofocus={danger ? "" : undefined}>
                {options.cancelLabel ?? t("action.cancel")}
              </Button>
              <Button
                variant="solid"
                intent={options.intent ?? "default"}
                onClick={() => answer(true)}
                data-autofocus={danger ? undefined : ""}
              >
                {options.confirmLabel ?? t("action.ok")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </ConfirmContext.Provider>
  );
};

ConfirmProvider.displayName = "ConfirmProvider";

/**
 * Ask the user to confirm an action and wait for the answer, from anywhere under `ConfirmProvider`.
 * Resolves to true when the user confirms, and to false when they cancel, press Escape, or the
 * provider unmounts. Use it before an action the user cannot easily undo; for an action that can be
 * undone, run it and offer Undo in a `Snackbar` instead.
 *
 * Throws when called outside `ConfirmProvider`.
 *
 * @returns `confirm(options)` — `{ title, description?, confirmLabel?, cancelLabel?, intent? }` — which returns `Promise<boolean>`.
 *
 * @example
 * const confirm = useConfirm();
 * const ok = await confirm({ title: "Delete this file?", confirmLabel: "Delete", intent: "danger" });
 * if (ok) await deleteFile(id);
 */
export const useConfirm = (): ConfirmFunction => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context;
};
