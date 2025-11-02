import { EdaAvatar } from "@/entities/Eda"
import { MessageBlock } from "@/entities/Eda"
import css from './Eda.module.css';

interface EdaProps {
    className?: string;
}

export const Eda = (props: EdaProps) => {
    const { className } = props;


    return (
        <div className={`${css.eda} ${className}`}>
            <MessageBlock />
            <EdaAvatar />
        </div>
    )
}