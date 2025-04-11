import React, { useState } from 'react';
import IndirectChildren from './IndirectChildren';


export default function IndirectParent (props) {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [nerd, setNerd] = useState('');

    function serveInfo(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <div>
                    <span>{nome}</span>
                    <span><strong>{idade}</strong></span>
                    <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
                </div>
            </div>
            <IndirectChildren serveInfo={serveInfo} />
        </div>
    );
};