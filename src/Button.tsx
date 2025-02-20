

type ButtonElements = {
    label: string;
    onClick: () => void;
    className?: string; 
}

const Button = ({ label, onClick, className }: ButtonElements) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;