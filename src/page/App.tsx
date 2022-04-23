import React, { useState } from 'react';

import { Tarefas } from '../types';

import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

import styles from './styles.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Tarefas[]>([])
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
