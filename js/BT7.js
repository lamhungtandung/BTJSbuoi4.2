function docSo3ChuSo() {
    //input
    var so3Chuso = Number(document.getElementById('so3chu').value);
    var hienThi = document.getElementById('txtResult3')

    var number = xuLiSo(so3Chuso);
    //output

    hienThi.innerHTML = number;
}
// xu li 
function xuLiSo(input) {
    var hangTram = Math.trunc(input / 100);
    var hangchuc = Math.trunc((input % 100) / 10);
    var donvi = input % 10;
    var ketQua = '';
    var docHangTram = '';
    var docHangChuc = '';
    var docHangDV = '';

    switch (hangTram) {
        case 1:
            docHangTram += 'Một trăm ';
            break;
        case 2:
            docHangTram += 'Hai trăm ';
            break;
        case 3:
            docHangTram += 'Ba trăm ';
            break;
        case 4:
            docHangTram += 'Bốn trăm ';
            break;
        case 5:
            docHangTram += 'Năm trăm ';
            break;
        case 6:
            docHangTram += 'Sáu trăm ';
            break;
        case 7:
            docHangTram += 'Bảy trăm ';
            break;
        case 8:
            docHangTram += 'Tám trăm ';
            break;
        case 9:
            docHangTram += 'Chín trăm ';
            break;

        default:
            alert('Error!');
            break;
    }

    //hang chuc
    switch (hangchuc) {
        case 1:
            docHangChuc += ' mười ';
            break;
        case 2:
            docHangChuc += ' hai mươi ';
            break;
        case 3:
            docHangChuc += ' ba mươi ';
            break;
        case 4:
            docHangChuc += ' bốn mươi ';
            break;
        case 5:
            docHangChuc += ' năm mươi ';
            break;
        case 6:
            docHangChuc += ' sáu mươi ';
            break;
        case 7:
            docHangChuc += ' bảy mươi ';
            break;
        case 8:
            docHangChuc += ' tám mươi ';
            break;
        case 9:
            docHangChuc += ' chín mươi ';
            break;

        default:
            alert('Error!');
            break;
    }

    //hang don vi
    switch (donvi) {
        case 1:
            docHangDV += ' một ';
            break;
        case 2:
            docHangDV += ' hai ';
            break;
        case 3:
            docHangDV += ' ba ';
            break;
        case 4:
            docHangDV += ' bốn ';
            break;
        case 5:
            docHangDV += ' năm ';
            break;
        case 6:
            docHangDV += ' sáu ';
            break;
        case 7:
            docHangDV += ' bảy  ';
            break;
        case 8:
            docHangDV += ' tám ';
            break;
        case 9:
            docHangDV += ' chín ';
            break;

        default:
            alert('Error!');
            break;
    }

    ketQua = docHangTram + docHangChuc + docHangDV;
    return ketQua;
}