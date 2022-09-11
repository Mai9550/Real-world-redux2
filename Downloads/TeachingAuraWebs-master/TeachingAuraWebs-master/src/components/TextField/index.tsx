import React from 'react';

const TextField = ({value, placeholder, onChange, id, name}) => {
  return (
    <div className="relative w-full">
      <input
        className="bg-[#EEEEEE] peer px-4 pt-6 pb-2 focus:pt-6 focus:pb-2 placeholder-shown:py-4 w-full placeholder-transparent rounded-[30px] focus:outline-none"
        type="text"
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="text-[#888888] pt-2 text-xs peer-focus:pt-2 peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:pt-4 absolute left-2 px-3"
      >
        {placeholder}
      </label>
    </div>
  )
}

export default TextField;