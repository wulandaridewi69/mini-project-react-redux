import React from "react";

const Button = ({ id, label, className, loading, onClick }) => {
    return (
            <button
                id={id}
                className={className}
                onClick={onClick}
                disabled={loading}
            >
                {label}
            </button>
    );
}

export default Button;