const m1 = [
  [{ value: 1 }, { value: 2 }, { value: 3 }],
  [{ value: 4 }, { value: 5 }, { value: 6 }],
  [{ value: 7 }, { value: 8 }, { value: 9 }],
];

const m2 = [
  [{ value: 1 }, { value: 2 }, { value: 3 }],
  [{ value: 4 }, { value: 5 }, { value: 6 }],
  [{ value: 7 }, { value: 8 }, { value: 9 }],
];

function sumaMatriciObiecte(matrice1, matrice2) {
  let ms = [];
  for (let i = 0; i < m1.length; i++) {
    ms.push([]);
    for (let j = 0; j < m1[i].length; j++)
      ms[i].push({ value: m1[i][j].value + m2[i][j].value, 
                   color: Math.floor(Math.random() *2) + 1 == 1 ? m1[i][j].color : m2[i][j].color  });
  }
  return ms;
}
// console.log(sumaMatriciObiecte(m1, m2));

//matrice de 9x9 obiecte
//ii pionul pe mine(pe patrat) - daca e pe mine primeste o valoare(pionON) - daca e 1 e acolo daca e 0 nu e acolo
//cu 1 il afisez, cu 0 nu il afisez - fiecare are 4 pereti

function creareMatrice(linii, coloane) {
  let mat = [];
  for (let i = 0; i < linii; i++) {
    mat.push([]);
    for (let j = 0; j < coloane; j++) {
      mat[i].push({ value: Math.floor(Math.random() * 9) + 1, 
                    color: "rbg("+Math.floor(+Math.random() * 255) +","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")" });
    }
  }
  console.log(mat);
  return mat;
}

console.log(sumaMatriciObiecte(creareMatrice(3, 3), creareMatrice(3, 3)));

