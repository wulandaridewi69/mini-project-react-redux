// @ts-nocheck
import React from "react";

const Button = ({ id, label, className, loading, onClick, children }) => {
    return (
            <button
                id={id}
                className={className}
                onClick={onClick}
                disabled={loading}
            >
                {label}
                {children}
            </button>
    );
}

export default Button;