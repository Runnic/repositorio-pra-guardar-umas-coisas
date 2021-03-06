// com promise
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
/*
getTurma('A').then(alunos => {
    nomes.push('A: ')
    nomes.push(alunos.map(e => e.nome))
    getTurma('B').then(alunos => {
        nomes.push('B: ')
        nomes.push(alunos.map(e => e.nome))
        getTurma('C').then(alunos => {
            nomes.push('C: ')
            nomes.push(alunos.map( e => e.nome))
            console.log(nomes)
        })
    })
})
*/


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))