import React from 'react';
import "@/app/components/SelectInput/SelectInput.css";

interface SelectInputProps {
    answer: string;
    setAnswer: (newAnswer: string) => void;
    options?: {
        items: string[];
    };
}

const SelectInput = ({ answer, setAnswer, options } : SelectInputProps) => {
    return (
        <div>
            {options && options.items && options.items.map((item: string, index: number) => {
                return (
                    <div key={index} className='selectInput'>
                        <label>
                            <input type='checkbox'></input>
                            <span/>
                            {item}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default SelectInput;