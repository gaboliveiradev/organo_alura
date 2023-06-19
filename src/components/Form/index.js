import './Form.css';
import InputText from '../InputText';
import Select from "../Select";
import Button from "../Button";

const Form = () => {

    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX Desing', 'Mobile', 'Inovação e Gestão']

    const save = () => {
        alert("fui enviado");
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card de colaborador.</h2>
                <InputText label="Nome" placeholder="Digite o seu nome" />
                <InputText label="Cargo" placeholder="Digite o seu cargo"/>
                <InputText label="Imagem" placeholder="Informe o endereço da imagem"/>
                <Select label="Time" itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;