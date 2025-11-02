import css from './EdaAvatar.module.css';

export const EdaAvatar = () => {


    return (
        <div className={css.wrapper}>
            <img className={css.avatar} src='/images/Eda.jpg' alt='Я Эда, честно' />
        </div>
    )
}