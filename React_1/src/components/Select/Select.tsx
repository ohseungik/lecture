import React from 'react';

type SelectProps = {
    name: string;
    value: string;
    setValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const Select = ({ name, value, setValue, options } : SelectProps) => {
    return (
      <select name={name} value={value} onChange={setValue}>
        <option value="" disabled>지역을 선택해주세요.</option>
        {options.map((optionElement, index) => {
            return <option key={index} value={optionElement}>{optionElement}</option>
        })}
      </select>
    )
}

export default Select;