const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo valor ao final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1) // remove 1 elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pega elementos do indice 1 ate o 4 mas sem incluir o ultimo elemento
console.log(algunsPilotos2)