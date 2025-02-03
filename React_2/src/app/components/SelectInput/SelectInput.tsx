import React from 'react';
import "@/app/components/SelectInput/SelectInput.css";

interface SelectInputProps {
    answer: number[];
    setAnswer: (newAnswer: number[]) => void;
    options?: {
        items: string[];
    };
}

const SelectInput = ({ answer = [], setAnswer, options } : SelectInputProps) => {

    const handleChange = (isChecked: boolean, index: number) => { 
        console.log(answer);

        if(isChecked) {
            setAnswer([...answer, index]);
        } else {
            setAnswer(answer.filter((item: number) => item !== index));
        }
    }


    return (
        <div className='selectInput'>
            {options && options.items && options.items.map((item: string, index: number) => {
                return (
                    <div key={index}>
                        <label>
                            <input type='checkbox' onChange={(e) => handleChange(e.target.checked, index)}></input>
                            <span/>
                            <div>{item}</div>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default SelectInput;