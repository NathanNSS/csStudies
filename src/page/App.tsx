import React, { useState } from 'react';

import { Tarefas } from '../types';

import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

import styles from './styles.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Tarefas[]>([])
  const [selecionado, setSelecionado] = useState<Tarefas>()

  function selecionaTarefa(tarefaSelecionada: Tarefas) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizaTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa}/>
    </div>
  );
}

export default App;
