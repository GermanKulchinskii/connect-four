import css from './ToLandingBtn.module.css';
import ToMenuBtn from '@/shared/ui/icons/arrow-back.svg?react';
import { Link } from 'react-router';

interface ToLandingBtnProps {
    onClick: () => void;
}

export const ToLandingBtn = (props: ToLandingBtnProps) => {
    const {onClick} = props;

    return (
        <Link to={'/'} onClick={onClick} className={css.link}>
            <ToMenuBtn fill='#41B883' className={css.icon} />
        </Link>
    )
}