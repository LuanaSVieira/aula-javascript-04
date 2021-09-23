// 1)

var numeros = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];

numeros.sort();

console.log(numeros);

// 2) 

var times = [ 'Santos', 'Sport',' Santa Cruz', 'Vasco',' Chapecó'];

times.push('Flamengo');
console.log(times);

times.shift();
console.log(times);

times.unshift('Palmeiras');
console.log(times);

times.push('Grêmio');
console.log(times);

times.unshift('São Paulo', 'Santos');
console.log(times);

console.log(times.length);

times.pop();
console.log(times);

times.sort();
console.log(times);


// 3)

var atividades = ['Dormir', 'Comer', 'Estudar', 'Tomar banho', 'Assistir', 'Escutar música', 'Exercíco físico']

var atividade3 = atividades[2];
var atividade6 = atividades[5];

console.log(atividade3, atividade6);

console.log(atividades.join(" - ")) 

var atividades1 = ['Passear', 'Descansar'];

var novoArray = atividades.concat(atividades1);

console.log(novoArray);

// 4)

var cidades = ['Recife', 'Jaboatão', 'Olinda', 'Russas', 'Milão'];

cidades.sort();
console.log(cidades);

cidades.pop();
console.log(cidades);

cidades.shift();
console.log(cidades);

cidades.sort();
console.log(cidades);








