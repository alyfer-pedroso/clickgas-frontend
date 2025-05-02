export class Supplier {
  constructor(
    public razaoSocial: string = "",
    public email: string = "",
    public telefone: string = "",
    public cnpj: string = "",
    public endereco: string | null = null,
    public icone: string | null = null
  ) {}
}
