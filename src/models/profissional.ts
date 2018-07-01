export class Profissional {
  profissionalId: number;
  nome: string;
  email: string;
  cpf: string;
  foto: string;
  meta: number;


  constructor(
    profissionalId: number,
    nome: string,
    email: string,
    cpf: string,
    foto: string,
    meta: number
  )
  {
    this.profissionalId = profissionalId
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.foto = foto
    this.meta = meta

  }
}
