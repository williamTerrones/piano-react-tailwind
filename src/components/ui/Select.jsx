import React from 'react'

const UISelect = ({
    name,
    items,
    onChange,
    placeholder = "Elige una opción"
}) => {
    return (
        <>
            <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {placeholder}
            </label>
            <select onChange={onChange} id={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected>{placeholder}</option>
                {
                    items?.map((e,i) => (
                        <option key={i} label={e.label} value={e.value} />
                    ))
                }
            </select>
        </>
    )
}

export default UISelect