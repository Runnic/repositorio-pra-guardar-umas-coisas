class Lancamento {
    constructor (nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...params){
        params.forEach(element => this.lancamentos.push(element))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(e => {
            valorConsolidado += e.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(02, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())