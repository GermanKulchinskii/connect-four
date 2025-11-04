import css from './Input.module.css';

interface InputProps {
    value: string;
    onChange?: (value: any) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    readOnly?: boolean
}

export const Input = (props: InputProps) => {
    const { value, onChange = () => [], placeholder = '', disabled = false, className = '', readOnly } = props;

    return (
        <input
            className={`${css.input} ${className}`}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
        />
    );
};
