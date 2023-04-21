const matrice1 = [[1, 2], [4, 5]];

const matrice2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function Suma(matrice1, matrice2) {

    let matriceSuma = []

    for (let i = 0; i < matrice1.length; i++) {

        matriceSuma.push([]);
        for (let j = 0; j < matrice1[i].length; j++) {
            matriceSuma[i].push(matrice1[i][j] + matrice2[i][j]);
        }

    }
    return matriceSuma;
}

console.log(Suma(matrice1, matrice2));