import css from './PlayerNumber.module.css';

interface PlayerNumberProps {
    className?: string;
    isActive: boolean;
    children?: React.ReactNode;
}

export const PlayerNumber = (props: PlayerNumberProps) => {
    const {className, isActive, children} = props;

    return (
        <div className={`${css.wrapper} ${className} ${isActive ? css.active : ''}`}>{children}</div>
    )
}