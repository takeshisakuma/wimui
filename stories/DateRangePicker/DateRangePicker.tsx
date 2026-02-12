import React from "react";
import classNames from "classnames";
import { DatePicker } from "../DatePicker/DatePicker";

type DateRangePickerProps = {
    startProps?: React.ComponentProps<typeof DatePicker>;
    endProps?: React.ComponentProps<typeof DatePicker>;
    className?: string;
};

/**
 * 期間（開始日・終了日）を選択するためのコンポーネント。
 */
export const DateRangePicker = ({
    startProps,
    endProps,
    className,
}: DateRangePickerProps) => {
    return (
        <div className={classNames("wim-daterangepicker", className)} style={{ display: "flex", gap: "8px" }}>
            <DatePicker {...startProps} />
            <span style={{ alignSelf: "center" }}>~</span>
            <DatePicker {...endProps} />
        </div>
    );
};
