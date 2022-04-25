export function tempoParaSegundo(tempo: string) {
    let [horas = 0, minutos = 0, segundos = 0] = tempo.split(":");
    let horaEmSegundos = Number(horas) * 3600;
    let minutosEmSegundos = Number(minutos) * 60;
    return minutosEmSegundos + horaEmSegundos + Number(segundos);

}
export function minutosSegundos(tempo: number) {
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    const [minutoDezena, minutosUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundosUnidade] = String(segundos).padStart(2, '0');
    return [minutoDezena, minutosUnidade, segundoDezena, segundosUnidade]
}

export function randomCod(length: Number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //let characters       = '0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}