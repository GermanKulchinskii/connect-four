import RestartIcon from '@/shared/ui/icons/game-restart.svg?react';
import css from './RestartButton.module.css';
import { useState } from 'react';

interface RestartButtonProps {
    restart: () => void;
    className?: string;
}

export const RestartButton = (props: RestartButtonProps) => {
    const {restart, className} = props;
    const [isCircling, setIsCircling] = useState(false);

    const onClick = () => {
        setIsCircling(true);
        restart();
        const timer = setTimeout(() => {
            setIsCircling(false);
        }, 300);

        return () => clearTimeout(timer);
    }

    return (
        <div className={`${css.restartWrapper} ${className} ${isCircling ? css.circling : ''}`}>
            <RestartIcon className={css.restartIcon} fill='#41B883' onClick={onClick} />
        </div>
    )
}
