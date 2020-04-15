let op = 2;
let url =
  op === 1 ? "http://localhost:8080" : "http://entregadordelivery.com.br:8080";

function loginUser() {
  let data = {
    token: "token1234",
    data: {
      categoria: "1",
      empresa: { nomeFantasia: "Empresa Mock", idEmpresa: 1 },
      email: "Brenner.batista.dev@gmail.com",
    },
  };
  insereSession(data);
}
function insereSession(data) {
  console.log("DATA", data);
  let token = data["token"];
  let categoria = data["data"].categoria;
  let nome = data["data"].nome;
  let nomeEmpresa = data["data"]["empresa"].nomeFantasia;
  let EMP_id = data["data"]["empresa"].idEmpresa;
  let login = data["data"].email;

  sessionStorage.setItem("EMP_id", EMP_id);
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("url", url);

  if (categoria < 4) {
    location.href = "pedidos.php"; //mudar para pedidos.php
  } else if (categoria === 10) {
    location.href = "empresas.php";
  } else {
    location.href = "principal.php";
  }
}
