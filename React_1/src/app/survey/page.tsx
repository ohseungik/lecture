'use client';

import React, { useCallback, useState } from 'react';
import TextInput from '@/app/components/TextInput/TextInput';
import Select from '@/app/components/Select/Select';

const contryOptions = ["한국", "중국", "일본", "러시아", "미국"];

const Survey = () => {
    const [formVal, setFormVal] = useState({
        name: "",
        country: "",
        address: ""
    })

    const valueHandler = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormVal({...formVal, [event.target.name]: event.target.value})
    }, [formVal])


    const saveHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();

        alert("저장되었습니다.");

        window.localStorage.setItem("formVal", JSON.stringify(formVal));

        setFormVal({
            name: "",
            country: "",
            address: ""
        });
    }, [formVal]);

    return (
        <div className='survey'>
            <div className='form'>
                <div className='form-item'>
                    <h1>1. 이름이 무엇인가요?</h1>
                    <TextInput name="name" value={formVal.name} setValue={valueHandler}/>
                </div>

                <div className='form-item'>
                    <h1>2. 사는 곳은 어딘가요?</h1>
                    <Select name="country" value={formVal.country} setValue={valueHandler} options={contryOptions}/>
                </div>

                {formVal.country === "한국" && 
                    <div className="form-item">
                        <h1>2-1. 한국 어디에 사나요?</h1>
                        <TextInput name="address" value={formVal.address} setValue={valueHandler}/>
                    </div> 
                }

                <div className="button-group">
                    <button onClick={saveHandler} disabled={!formVal.name || !formVal.country || formVal.country === "한국" && formVal.address === ""}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default Survey;