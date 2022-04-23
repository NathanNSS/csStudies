export function tempoParaSegundo(tempo:string) {
    let [horas = 0, minutos = 0, segundos =  0] = tempo.split(":");
    let horaEmSegundos = Number(horas) * 3600;
    let minutosEmSegundos = Number(minutos) * 60;
    return minutosEmSegundos + horaEmSegundos + Number(segundos);

}

export function minutosSegundo(valor:number){
    let [minuto = 0, segundo = 0] = (valor/60).toFixed(2).split(".")
    return `${minuto}:${Math.round(Number(segundo)*0.6)}`
  }