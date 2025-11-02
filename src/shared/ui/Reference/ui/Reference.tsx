import css from './Reference.module.css'

interface ReferenceProps {
    path: string;
    children?: React.ReactNode;
}

export const Reference = (props: ReferenceProps) => {
    const {path, children} = props

    return (
        <a 
            className={css.reference}
            target="_blank"
            href={path}
        >
            {children}
        </a>
    )
}