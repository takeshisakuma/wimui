import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./calendar.scss";

export type CalendarProps = {
    /**
     * 現在選択されている日付。
     */
    value?: Date;
    /**
     * 日付が変更された時のコールバック。
     */
    onChange?: (date: Date) => void;
    /**
     * 初期値。
     */
    defaultValue?: Date;
    /**
     * 追加のクラス名。
     */
    className?: string;
    /**
     * 無効化。
     */
    disabled?: boolean;
};

/**
 * ユーザーが日付を閲覧し、選択するためのカレンダーコンポーネント。
 */
export const Calendar = ({
    value,
    onChange,
    defaultValue,
    className = "",
    disabled = false,
    ...props
}: CalendarProps) => {
    const [viewDate, setViewDate] = useState(defaultValue || value || new Date());
    const [selectedDate, setSelectedDate] = useState(defaultValue || value);

    const isControlled = value !== undefined;
    const currentSelected = isControlled ? value : selectedDate;

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // 当月の最初の日
    const firstDayOfMonth = new Date(year, month, 1);
    // 当月の最後の日
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // 前月の最後の日
    const lastDayOfPrevMonth = new Date(year, month, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    const handlePrevMonth = () => {
        if (disabled) return;
        setViewDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        if (disabled) return;
        setViewDate(new Date(year, month + 1, 1));
    };

    const handleDateClick = (date: Date) => {
        if (disabled) return;
        if (!isControlled) {
            setSelectedDate(date);
        }
        if (onChange) {
            onChange(date);
        }
    };

    const isSelected = (date: Date) => {
        return currentSelected &&
            date.getFullYear() === currentSelected.getFullYear() &&
            date.getMonth() === currentSelected.getMonth() &&
            date.getDate() === currentSelected.getDate();
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();
    };

    // カレンダーのグリッドを生成
    const calendarDays = [];

    // 前月の日付
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const d = new Date(year, month - 1, lastDayOfPrevMonth.getDate() - i);
        calendarDays.push({ date: d, currentMonth: false });
    }

    // 当月の日付
    for (let i = 1; i <= daysInMonth; i++) {
        const d = new Date(year, month, i);
        calendarDays.push({ date: d, currentMonth: true });
    }

    // 次月の日付 (6週間分埋める)
    const remainingDays = 42 - calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
        const d = new Date(year, month + 1, i);
        calendarDays.push({ date: d, currentMonth: false });
    }

    const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

    return (
        <div
            className={`wim-calendar ${disabled ? "wim-calendar--disabled" : ""} ${className}`}
            {...props}
        >
            <div className="wim-calendar-header">
                <button
                    type="button"
                    className="wim-calendar-nav-btn"
                    onClick={handlePrevMonth}
                    disabled={disabled}
                >
                    <Icon name="ChevronLeftIcon" size="small" />
                </button>
                <div className="wim-calendar-title">
                    {year}年 {month + 1}月
                </div>
                <button
                    type="button"
                    className="wim-calendar-nav-btn"
                    onClick={handleNextMonth}
                    disabled={disabled}
                >
                    <Icon name="ChevronRightIcon" size="small" />
                </button>
            </div>
            <div className="wim-calendar-grid">
                {weekDays.map(day => (
                    <div key={day} className="wim-calendar-weekday">
                        {day}
                    </div>
                ))}
                {calendarDays.map(({ date, currentMonth }, index) => {
                    const selected = isSelected(date);
                    const today = isToday(date);

                    return (
                        <button
                            key={index}
                            type="button"
                            className={[
                                "wim-calendar-day",
                                !currentMonth && "wim-calendar-day--outside",
                                selected && "wim-calendar-day--selected",
                                today && "wim-calendar-day--today",
                            ].filter(Boolean).join(" ")}
                            onClick={() => handleDateClick(date)}
                            disabled={disabled}
                        >
                            {date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    defaultValue: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};
