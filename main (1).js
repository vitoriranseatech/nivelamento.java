function exercicio4() {
  var v1 = 2;
  var v2 = 3;
  var v3 = 5;
  var v4 = 6;
  var soma = v1 + v2 + v3 + v4;
  console.log("Soma dos valores:", soma);
  console.log("Média dos valores:", media);
}
exercicio4();

function exercicio5() {
  var nota1 = 64;
  var nota2 = 45;
  var nota3 = 60;
  var media = (nota1 + nota2 + nota3) / 3;
    if (media >= 60) {
    console.log("O aluno está aprovado!");
  } else {
    console.log("O aluno está reprovado.");
  }
}
exercicio5();
function exercicio6() {
  var nota1 = 70;
  var nota2 = 85;
  var nota3 = 90;
  var media = (nota1 + nota2 + nota3) / 3;
  if (media >= 90) {
    console.log("Aluno foi aprovado com certificado!");
  } else if (media >= 60) {
    console.log("Aluno está apenas aprovado.");
  } else {
    console.log("Aluno está reprovado.");
  }
}

exercicio6();