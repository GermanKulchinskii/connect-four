import { Eda } from '@/features/Eda';
import css from './ErrorPage.module.css';
import { useEdaStore } from '@/entities/Eda';
import { MessageList } from '@/entities/Eda/types/messages';

export const ErrorPage = () => {
    const setMessage = useEdaStore(state => state.setCurrentMessage);

    setMessage(MessageList.MESSAGE_404);

    return (
        <div className={css.wrapper}>
            <h1 className={css.title}>404</h1>
            <Eda className={css.eda} />
        </div>
    )
}