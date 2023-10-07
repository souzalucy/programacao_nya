const teste1 = tabelaVerdade (true, "conjunção", false);
alert(teste1)

const teste2 = tabelaVerdade (true, "disjunção", false);
alert(teste2)

const teste3 = tabelaVerdade (true, "Condicional", false);
alert(teste3)

const teste4 = tabelaVerdade (true, "biCondicional", false);
alert(teste4)

function tabelaVerdade(a, operadorLogico, b) {
    let resultado;

    switch (operadorLogico) { 
        case "conjunção":
            resultado = a && b;
            break;
        case "disjunção":
            resultado = a || b;
            break;
        case "Condicional":
            resultado = !a || b;
            break;
        case "biCondicional":
            resultado = (a && b) || (!a && !b);
            break;
        default:
            resultado = "Operador lógico inválido";
    }

    return resultado;
}