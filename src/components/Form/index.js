import './Form.css';
import InputText from '../InputText';
import Select from "../Select";
import Button from "../Button";
import { useState } from 'react';

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState();

    const save = (e) => {
        e.preventDefault();
        props.registeredEmployee({
            nome,
            cargo,
            imagem,
            time,
        })

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card de colaborador.</h2>
                <InputText 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome}
                    toChanged={valor => setNome(valor)}
                />
                <InputText 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    toChanged={valor => setCargo(valor)}
                />
                <InputText 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    toChanged={valor => setImagem(valor)}
                />
                <Select 
                    required={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    toChanged={valor => setTime(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;