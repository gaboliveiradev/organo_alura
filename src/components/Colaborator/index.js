import React from 'react';
import './Colaborator.css'

export default function Colaborator(props) {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/gaboliveiradev.png' alt='Gabriel Oliveira' />
            </div>
            <div className='rodape'>
                <h4>Gabriel Oliveira</h4>
                <h5>Full Stack Developer</h5>
            </div>
        </div>
    )
}