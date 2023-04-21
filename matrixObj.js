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
    for (let j = 0; j < m1[i].length; j++) {}
      ms[i].push(m1[i][j].value + m2[i][j].value);
  }
  return ms;
}

console.log(sumaMatriciObiecte(m1, m2));