const controller = new NegociacaoController();

(document
   .querySelector(".form") as HTMLElement)
   .addEventListener("submit", controller.adiciona.bind(controller))