document.getElementById('ngaymai').onclick = function () {
    //input
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);

    //output
    var ketQua = '';
//xu li
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        if (ngay === 31) {
            thang++;
            ngay = 1;
        } else if (ngay < 31) {
            ngay++;
        }
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        if (ngay === 30) {
            thang++;
            ngay = 1;
        } else if (ngay < 30) {
            ngay++;
        }
    } else if (nam % 4 === 0) {
        if (thang === 2 && ngay === 29) {
            ngay = 1;
            thang++;
        } else if (thang === 2 && ngay < 29) {
            ngay++;
        }
    } else if (nam > 13 || thang > 13 || ngay > 32) {
        return document.getElementById('txtResult').innerHTML = 'Error!';
    } else {
        if (thang === 2 && ngay === 28) {
            ngay = 1;
            thang++;
        } else if (thang === 2 && ngay < 28) {
            day++;
        } else if (thang === 2 && ngay > 28) {
            ngay = 0;

            return document.getElementById('txtResult').innerHTML = 'Error!';
        }
    }


    if (thang > 12) {
        thang = 1;
        nam++;
    }
    ketQua = ngay + '/ ' + thang + '/ ' + nam;

    document.getElementById('txtResult').innerHTML = ketQua;
};

document.getElementById('homqua').onclick = function () {
   //input
   var ngay = Number(document.getElementById('ngay').value);
   var thang = Number(document.getElementById('thang').value);
   var nam = Number(document.getElementById('nam').value);

   var ketQua = '';

   if (thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
    if (ngay === 1) {
        thang--;
        ngay = 31;
    } else if (ngay <= 31) {
        ngay--;
    }
} else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    if (ngay === 1) {
        thang--;
        ngay = 31;
    } else if (ngay <= 30) {
        ngay--;
    }
} else if (thang === 1 && ngay === 1) {
    thang = 12;
    ngay = 31;
    nam--;
} else if (thang === 1) {
    if (ngay <= 31) {
        ngay--;
    }
}

if (nam % 4 === 0) {
    if (thang === 2) {
        if (ngay === 1) {
            ngay = 31;
            thang--;
        } else if (ngay <= 29) {
            ngay--;
        } else if (ngay > 29) {
            ngay = 0;

            return document.getElementById('txtResult').innerHTML = 'Error!';
        }
    }

} else {
    if (thang === 2) {
        if (ngay === 1) {
            ngay = 31;
            thang--;
        } else if (ngay <= 28) {
            ngay--;
        } else if (ngay > 28) {
          return  document.getElementById('txtResult').innerHTML = 'Error!';
        }
    }
}
ketQua = ngay + '/ ' + thang + '/ ' + nam;
document.getElementById('txtResult').innerHTML = ketQua;
}
