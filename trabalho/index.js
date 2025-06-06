document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nome = document.getElementById("inome").value.trim();
  const sobrenome = document.getElementById("isobrenome").value.trim();
  const email = document.getElementById("iemail").value.trim();
  const telefone = document.getElementById("itelefone").value.trim();
  const senha = document.getElementById("isenha").value;
  const csenha = document.getElementById("icsenha").value;
  const cep = document.getElementById("icep").value.trim();
  const datanasc = document.getElementById("idatanasc").value;
  const termos = document.getElementById("itermos").checked;
  const sexo = document.querySelector('input[name="sexo"]:checked');

  let erros = [];

  
  if (nome === "") erros.push("Nome é obrigatório.");
  if (sobrenome === "") erros.push("Sobrenome é obrigatório.");
  if (!sexo) erros.push("Selecione o sexo.");
  if (email === "") erros.push("E-mail é obrigatório.");
  if (telefone === "") erros.push("Telefone é obrigatório.");
  if (senha === "") erros.push("Senha é obrigatória.");
  if (csenha === "") erros.push("Confirmação de senha é obrigatória.");
  if (cep === "") erros.push("CEP é obrigatório.");
  if (datanasc === "") erros.push("Data de nascimento é obrigatória.");
  if (!termos) erros.push("Você deve aceitar os termos.");

  
  if (nome.length > 0 && nome.length < 3) erros.push("Nome deve ter no mínimo 3 letras.");
  if (sobrenome.length > 0 && sobrenome.length < 3) erros.push("Sobrenome deve ter no mínimo 3 letras.");
  if (!sexo) erros.push("Selecione o sexo.");
  if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.push("E-mail inválido.");
  if (telefone.length > 0 && !/^\d{10,11}$/.test(telefone)) erros.push("Telefone deve ter 10 ou 11 dígitos numéricos.");
  if (senha.length > 0 && senha.length < 8) erros.push("Senha deve ter no mínimo 8 caracteres.");
  if (senha !== "" && csenha !== "" && senha !== csenha) erros.push("As senhas não coincidem.");
  if (cep.length > 0 && cep.length < 8) erros.push("CEP inválido (mínimo 8 caracteres).");

  if (erros.length > 0) {
    alert("Erros encontrados:\n\n" + erros.join("\n"));
  } else {
    alert("Formulário enviado com sucesso!");
    this.submit();
  }
});