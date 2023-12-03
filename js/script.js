function luas() {
  var a = document.getElementById("input-alas").value;
  var t = document.getElementById("input-tinggi").value;
  var rumusluas = (a * t) / 2;
  console.log(rumusluas);

  const para = document.createElement("p");
  para.innerHTML = "Luas nya adalah ".rumusluas;
  document.getElementById("hasilLuas").appendChild(para);
}

function keliling() {
  var s1 = document.getElementById("input-sisi1").value;
  var s2 = document.getElementById("input-sisi2").value;
  var s3 = document.getElementById("input-sisi3").value;
  var rumuskeliling = s1 + s2 + s3;
  console.log(rumuskeliling);

  document.getElementById("hasilKeliling").innerHTML = `<ul>
  <li> Keliling = S + S + S</li>
  <li>Vue</li>
  <li> Hasil = </li>
</ul>`;
}
