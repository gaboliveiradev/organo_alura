import React from 'react';
import './Colaborator.css'

export default function Colaborator({nome, imagem, cargo}) {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}