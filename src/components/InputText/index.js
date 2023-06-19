import './InputText.css';

const InputText = (props) => {
    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input required={props.required} type='text' placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;