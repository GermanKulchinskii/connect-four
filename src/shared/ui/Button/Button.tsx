import css from './Button.module.css';

interface ButtonProps {
    onClick: () => void;
	children?: React.ReactNode;
	className?: string;
}

export const Button = (props: ButtonProps) => {
    const { children, onClick, className } = props;

    return (
		<button 
			className={`${css.button} ${className}`} 
			onClick={onClick}
		>
			{children}
		</button>
    )
}
