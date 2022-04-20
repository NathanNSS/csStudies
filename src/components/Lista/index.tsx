import React from 'react';

export default function Lista() {
    let tarefas = [
        {
            id: "1",
            nome: "React",
            tempo: "08:00:00"
        },
        {
            id: "2",
            nome: "React-Native",
            tempo: "10:00:00"
        },
        {
            id: "3",
            nome: "TypeScript",
            tempo: "07:00:00"
        }
    ]
    return (
        <aside>
            <h2>Estudos do Dia 📚</h2>
            <ul>
                {
                    tarefas.map((item) => (
                        <li key={item.id}>
                            <h3>
                                {item.nome}
                            </h3>
                            <span>
                                {item.tempo}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}