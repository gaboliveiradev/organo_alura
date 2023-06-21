import './Select.css';

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select onChange={e => props.toChanged(e.target.value)} required={props.required} value={props.value}> 
                {
                    props.itens.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default Select;