import react from "react";
function CustomButton({ text, onClick, variant = 'Primary', className = '' }) {
    return(
        <button
        className={`btn btn-${variant} ${className}`}
        onClick={onClick}
        >
            {text}
        </button>

    )
}
export default CustomButton;
