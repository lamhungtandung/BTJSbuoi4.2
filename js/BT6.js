document.getElementById('btnTinh').onclick = function () {
    //input
    var thang = Number(document.getElementById('thang2').value);
    var nam = Number(document.getElementById('nam2').value);

    //output
    var ketQua = '';
    //xu li
    var ngay = 0;
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        ngay = 31;
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        ngay = 30;
    }
    if (thang % 4 === 0) {
        if (thang === 2) {
            ngay = 29;
        }
    } else if (nam % 4 !== 0) {
        if (thang === 2) {
            ngay = 28;
        }
    }
    ketQua = ngay;
    document.getElementById('txtResult2').innerHTML = 'Số ngày trong tháng là: ' + ketQua +  'Ngày'; 
}

