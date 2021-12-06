const topWrap = document.getElementById("topWrap"),
    bottomWrap = document.getElementById("bottomWrap"),
    qty = document.getElementById("qty"),
    cryptoSelect = document.getElementById("cryptoSelect"),
    typeBtn = document.getElementById("typeBtn"),
    fiatSelect = document.getElementById("fiatSelect"),
    result = document.getElementById("result");

let type = true;

const cryptoToFiat = (q, c, f) => {
    console.clear();
    console.log("crypto to fiat");
    r = q * c * f;
    result.innerHTML = r.toFixed(2);
    console.log(r);
};

const fiatToCrypto = (q, f, c) => {
    console.clear();
    console.log("fiat to crypto");
    r = (q * f) / c;
    result.innerHTML = r.toFixed(10);
    console.log(r);
};

let convert = () => {
    if (type === true) {
        topWrap.append(cryptoSelect);
        bottomWrap.append(fiatSelect);
        cryptoToFiat(qty.value, cryptoSelect.value, fiatSelect.value);
    } else {
        bottomWrap.append(cryptoSelect);
        topWrap.append(fiatSelect);
        fiatToCrypto(qty.value, fiatSelect.value, cryptoSelect.value);
    }
};

window.onload = function () {
    convert();
};

qty.addEventListener("change", function () {
    convert();
});

typeBtn.addEventListener("click", function () {
    type = !type;
    convert();
});

cryptoSelect.addEventListener("change", function () {
    convert();
});

fiatSelect.addEventListener("change", function () {
    convert();
});
