import React from 'react';
import './Team.css';
import Colaborator from '../Colaborator';

export default function Team(props) {
    return(
        <section className='team' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottom: '4px solid' + props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborator 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                />)}
            </div>
        </section>
    )
}