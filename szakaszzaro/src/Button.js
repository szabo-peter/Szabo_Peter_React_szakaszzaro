import React from 'react'

const Button= ({className, func, buttonText}) =>{
    return (
        <button className={`btn btn-${className}`} onClick={func}>{buttonText}</button>
    )
}

export default Button;