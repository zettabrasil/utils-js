export default (num: number, decimals: number) => {
  let dec_point = ",";
  let thousands_sep = ".";

  let number = (num + "").replace(/[^0-9+\-Ee.]/g, "");
  let n = (!isFinite(parseFloat(number)) ? 0 : parseFloat(number)),
    prec = (!isFinite(decimals) ? 0 : Math.abs(decimals)),
    sep = (typeof thousands_sep === "undefined" ? "," : thousands_sep),
    dec = (typeof dec_point === "undefined" ? "." : dec_point),
    toFixedFix = function (nParam: number, precParam: number) {
      var k = Math.pow(10, precParam);
      return "" + Math.round(nParam * k) / k;
    };

  let s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
