document.getElementById("form-contato")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("mensagem-status");
  status.textContent = "Enviando mensagem...";

  // Simulação de envio de formulário
  setTimeout(() => {
    status.textContent = "Mensagem enviada com sucesso! 🎉";
    this.reset();
  }, 1500);
});
