// Documentação dos tipos em TypeScript
// typescriptlang.org/docs/handbook/basic-types.html

// Boolean
let contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 2.4;

// String
const nome: string = 'Rodrigo';

// Array
const idades: number[] = [23,28,32];
// ou
// Utilizando a interface array
const years: Array<number> = [23,28,29];

// Tuple
// Muito parecido com array porem cada índice pode ter um tipo diferente.
let jogadores: [string, string, string];
jogadores = ['Denis', 'Lucas', 'Dunga'];

// Enum
// Utilizado para fazer mapeamentos de informações.
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any
// Não se sabe o que vai ser retornado
const retornoDaAPI: any[] = [123, 'Rodrigo', false];
const retornoDaAPI2: any = {
  // Várias informações
};

// Void
// Para informar que uma função não retorna nada.
// Não sendo necessário, pois o typeScript consegue inferir que a função não vai retornar dados.
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
// Quando será atribuído na variável a valor.
const u : undefined = undefined;
const n: null = null

// Object
// Quando se tem um objeto,não é um tipo primitivo.
function criar(objeto: object) {
  // ....
}

criar({
  propriedade: 1,
})
// criar('Rodrigo') // Dá erro

// Never
// Dizer para uma função que ela nunca vai sair.
// Ela nunca vai retornar.
function loopInfinito(): never {
  while (true);
}

// Quando uma função executa outra função do tipo never.
function falha(): never {
  return erro('Algo falhou');
}

// Union Types
// Quando  se pode ter um tipo ou outro.
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias
// type Funcionarios = Array<string> | number | boolean;
// type Funcionarios = string[];
// type Funcionarios = Array<string>;

// const funcionarios: Funcionarios = ['Rodrigo', 'lucas'];

type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
// ou
//const funcionarios: Funcionarios = [{

const funcionarios: Funcionario[] = [{
  nome: 'Rodrigo',
  sobrenome: 'MS',
  dataNascimento: new Date(),
}];


function tratarFuncionarios(funcionario:Funcionario[]){
  // ...
}

// Valor nulo ou opcional
let altura: number | null = 1.6
altura = null

// Ponto de interrogação diz que o campo é opcional
type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string;
}

const contato: Contato = {
  nome: 'Douglas',
  telefone1: '123456789',
}

// Type Assertion
// Definir explicitamente qual é o tipo do código.

const minhaIdade: any = 23;
(minhaIdade as number).toString; // Asegurando para o Typescript qual é o tipo da variável.

// Outro exemplo.
// const input = document.getElementById("numero1") as HTMLInputElement;
// console.log(input.value);

// ou

const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);



// Interface
// Não tem no Javascript apenas no Typescript.
// Recomendado o uso de interface ao usar types Aliases.
interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

// Pode-se utilizar a interface como type Aliases.
function getUser(): Usuario {
  return {
    nome: 'rms',
    email: 'rms@rms.com'
  }
}

function setUser(usuario: Usuario) {
  // ...
}

// Classes
// Por default é publico.
class Data {
  public dia:number;
  //private mes: number;
  mes: number;
  ano: number;

// 1970 = valor default quando o ano não for informado.
  constructor(dia: number, mes: number, ano:number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano= ano;
  }
}

const data = new Data(1,1,2020);
console.log(data.dia);

const data2 = new Data(1,1);

// Sendo permitido realizar a declaração direto dento do construtor
// O Typescript vai gerar os valores automaticamente na conversão para JavaScript.
class Data2 {
  constructor(public dia: number, public mes: number, public ano: number = 2020) {

  }
}



// Modificadores de acesso.
// Valores que podem ser modificados apenas utilizando métodos de dentro da classe.
class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    // Validação de aceleração e frenagem
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    
    } else {
      // Se a velocidade for maior que 0 vai para velocidade máxima.
      // Senão vai para 0 (velocidade mínima).
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  public acelerar() {
    this.alterarVelocidade(5);
  }

  public frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar()

// Herança

class Camaro extends Carro {
  private turbo = true;

  constructor() {
    // super - Forma de chamar a classe pai.
    super('Chevrolet', 'Camaro', 500)
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.ligarTurbo();