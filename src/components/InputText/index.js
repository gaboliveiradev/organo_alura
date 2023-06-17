import './InputText.css';

const InputText = () => {
    return (
        <div className='text-field'>
            <label>Nome</label>
            <input type='text' placeholder='Digite o seu nome' />
        </div>
    )
}

export default InputText;