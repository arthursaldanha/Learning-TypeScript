class Negociacoes {

   private _negociacoes: Array<Negociacao> = [];

   adiciona(negociacao: Negociacao): void {
      this._negociacoes.push(negociacao);
   }

   paraArray(): Negociacao[] {
      return this._negociacoes;
   }
}