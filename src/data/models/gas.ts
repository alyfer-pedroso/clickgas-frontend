export class Gas {
  constructor(
    readonly id: number = 0,
    readonly nome: string = "",
    readonly valor: number = 0,
    readonly descricao: string | null = null,
    readonly peso: number = 0,
    readonly icone: string | null = null
  ) {}
}
