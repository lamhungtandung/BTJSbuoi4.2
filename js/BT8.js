document.getElementById('timkiem').onclick = function () {
    //input
    var toaDo1X = Number(document.getElementById('toado1X').value);
    var toaDo1Y = Number(document.getElementById('toado1Y').value);
    var toaDo2X = Number(document.getElementById('toado2X').value);
    var toaDo2Y = Number(document.getElementById('toado2Y').value);
    var toaDo3X = Number(document.getElementById('toado3X').value);
    var toaDo3Y = Number(document.getElementById('toado3Y').value);
    var toaDoX = Number(document.getElementById('toadoX').value);
    var toaDoY = Number(document.getElementById('toadoY').value);
    var name1 = document.getElementById('name1').innerHTML;
    var name2 = document.getElementById('name2').innerHTML;
    var name3 = document.getElementById('name3').innerHTML;

    //output
    var ketQua = '';

    var d1 = Toado(toaDo1X, toaDo1Y, toaDoX, toaDoY);
    var d2 = Toado(toaDo2X, toaDo2Y, toaDoX, toaDoY);
    var d3 = Toado(toaDo3X, toaDo3Y, toaDoX, toaDoY);

    function Toado(x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        var d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        return d
    }
    if (d1 > d2 && d1 > d3) {
        ketQua = name1
    } else if (d2 > d1 && d2 > d3) {
        ketQua = name2
    } else if (d3 > d1 && d3 > d2) {
        ketQua = name3
    } else if (d1 === d2 && d2 === d3) {
        ketQua = 'Cả ba'
    } else if (d1 === d2) {
        ketQua = name1 + ' và ' + name2;
    } else if (d2 === d3) {
        ketQua = name2 + ' và ' + name3;
    }

    document.getElementById('txtResult4').innerHTML = 'Người có quãng đường tới trường xa nhất là: ' + ketQua;
}