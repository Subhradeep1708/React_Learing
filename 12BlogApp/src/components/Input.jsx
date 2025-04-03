import React, { forwardRef, useId } from 'react'

// forwardRef hook will forward the state which can be used elsewhere
const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id} // for accessibility not necessary to use id 
            >
                {label}
            </label>
            }
            <input
                type={type}
                className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} //this thing will give reference to parent component
                {...props}
                id={id} // same id for label and input so if anyone click on label input field will highlight
            />
        </div>
    )
})

export default Input
