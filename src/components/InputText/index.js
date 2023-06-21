import { useState } from 'react';
import './InputText.css';

const InputText = (props) => {

    const toType = (e) => {
        props.toChanged(e.target.value);
    }

    return (        
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={toType} required={props.required} type='text' placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;