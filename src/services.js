export function dobro(n){
    return n * 2;
}

export function somarGet(a, b){
    return a + b;
}


export function CorPrimaria(cor){
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'vermelho' || cor =='amarelo'
}

export function ingresso(qtdInteiras, qtdMeias, dia, nacionalidade){
    if(nacionalidade.toLowerCase() == 'brasileira')
        return (qtdInteiras + qtdMeias) * 5;

    else if(dia.toLowerCase() == 'quarta')
        return (qtdInteiras +qtdMeias) * 14.25;

    else
        return (qtdInteiras * 28.5) + (qtdMeias * 14.25);
}


export function frequenciaCaracter(texto, caractere){
    let qtd = 0;
    for(let letra of texto) {
        if(letra == caractere)
        qtd++;
    }
        return qtd;
}


export function maiorNumero(numeros){
    let maior = Number.MIN_VALUE;
     for (let item of numeros) {
         if(item > maior)
            maior = item;
    }
    return maior;
}

export function media(n1,n2,n3){
    return (n1+n2+n3) / 3;
    }
    
    export function temperatura (temp){
        let t = false
        if(temp > 38){
            t = true
        }
    
        return t;
    }

    export function somar (a, b){
        return a + b;
        }
    