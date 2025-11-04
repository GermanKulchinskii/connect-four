import css from "./Cell.module.css";

interface CellProps {
    isFilled: boolean;
    player: "First" | "Second" | null;
    isActive: boolean;
    className?: string;
}

export const Cell = (props: CellProps) => {
    const { isFilled, player, isActive, className } = props;

    return (
        <div className={`${css.cell} ${isFilled ? css.filled : ""} ${isActive ? css.active : ""} ${className}`}>
            {player === "First" && <span className={`${css.symbol} ${css.one}`}>1</span>}
            {player === "Second" && <span className={`${css.symbol} ${css.zero}`}>0</span>}
        </div>
    );
}