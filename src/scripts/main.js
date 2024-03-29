$(document).ready(function(){
    AOS.init();    

    const dataAniversario = new Date("Apr 21, 2024 20:00:00");
    const timeStampDoEvento = dataAniversario.getTime();
    const contaAsHoras = setInterval(function(){
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60 ;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        const horasFormatadas = horasAteOEvento.toString().padStart(2, '0');
        const minutosFormatados = minutosAteOEvento.toString().padStart(2, '0');
        const segundosFormatados = segundosAteOEvento.toString().padStart(2, '0');

        $('#contador').html(`${diasAteOEvento}d ${horasFormatadas}h ${minutosFormatados}m ${segundosFormatados}s`);

        if(distanciaAteOEvento < 0){
            clearInterval(contaAsHoras);
            $('#contador').html('Evento Expirado');
        }
    }, 1000);
});
