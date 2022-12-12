window.onload = function () {
    var voltar = document.getElementById("btnVoltar");
    voltar.onclick = function(){
        window.location.href = "telainicial.html"
    }


      var chart = bb.generate({
        data: {
          columns: [
            ["Renda Fixa", 5000],
            ["Renda Variável", 2515.15],
            ["Despesa Fixa", 85.09],
            ["Despesa Variável", 1700],
            ["Poupança", 500],

          ],
          type: "donut",
          onclick: function (d, i) {
            console.log("onclick", d, i);
          },
          onover: function (d, i) {
            console.log("onover", d, i);
          },
          onout: function (d, i) {
            console.log("onout", d, i);
          },
        },
        
        bindto: "#donut-chart",
      });
}