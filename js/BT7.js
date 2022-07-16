document.getElementById('docso').onclick = function () {
    //input
    var so3Chuso = Number(document.getElementById('so3chu').value);
    //output
    var ketQua = '';
    //xu li

    var hangTram = Math.floor(so3Chuso / 100);
    var hangchuc = Math.floor((so3Chuso % 100) / 10);
    var donvi = so3Chuso % 10;

    if (donvi === 0 && so3Chuso < 10) {
        a = 'Không'
    } else if (donvi === 1 && hangchuc === 0 || donvi === 1 && so3Chuso < 20 || donvi === 1 && so3Chuso > 100) {
        a = 'Một'
    } else if (donvi === 1 && so3Chuso > 20) {
        a = 'Mốt'
    } else if (donvi === 2) {
        a = 'Hai'
    } else if (donvi === 3) {
        a = 'Ba'
    } else if (donvi === 4) {
        a = 'Bốn'

    } else if (donvi === 5) {
        a = 'Năm'
    } else if (donvi === 6) {
        a = 'Sáu'
    } else if (donvi === 7) {
        a = 'Bảy'
    } else if (unit === 8) {
        a = 'Tám'
    } else if (donvi === 9) {
        a = 'Chín'
    }
    //Hàng chục
    if (hangchuc === 0) {
        b = 'Lẻ'
    } else if (hangchuc === 1) {
        b = 'Mười'
    } else if (hangchuc === 2) {
        b = 'Hai Mươi'
    } else if (hangchuc === 3) {
        b = 'Ba Mươi'
    } else if (hangchuc === 4) {
        b = 'Bốn Mươi'
    } else if (hangchuc === 5) {
        b = 'Năm Mươi'
    } else if (hangchuc === 6) {
        b = 'Sáu Mươi'
    } else if (hangchuc === 7) {
        b = 'Bảy Mươi'
    } else if (hangchuc === 8) {
        b = 'Tám Mươi'
    } else if (hangchuc === 9) {
        b = 'Chín Mươi'
    }

    //Hàng Trăm
    if (hangTram === 1) {
        c = 'Một Trăm'
    } else if (hangTram === 2) {
        c = 'Hai Trăm'
    } else if (hangTram === 3) {
        c = 'Ba Trăm'
    } else if (hangTram === 4) {
        c = 'Bốn Trăm'

    } else if (hangTram === 5) {
        c = 'Năm Trăm'
    } else if (hangTram === 6) {
        c = 'Sáu Trăm'
    } else if (hangTram === 7) {
        c = 'Bảy Trăm'
    } else if (hangTram === 8) {
        c = 'Tám Trăm'
    } else if (hangTram === 9) {
        c = 'Chín Trăm'
    }
    if (so3Chuso < 10) {
        ketQua = a
    } else if (so3Chuso === 10) {
        ketQua = 'Mười'
    } else if (so3Chuso < 100 && donvi === 0) {
        ketQua = b
    } else if (so3Chuso < 100) {
        ketQua = b + '  ' + a;
    } else if (so3Chuso === 100 && hangchuc === 0 && donvi === 0) {
        ketQua = c
    } else if (so3Chuso > 100 && hangchuc === 0 && donvi === 0) {
        ketQua = c;
    } else if (so3Chuso > 100 && donvi === 0) {

        ketQua = c + '  ' + b;
    } else if (so3Chuso > 100) {
        if (hangchuc >= 2) {
            a = 'Mốt'
        }
        ketQua = c + '  ' + b + '  ' + a;
    }

    document.getElementById('txtResult3').innerHTML = 'Số ' + ketQua;
}