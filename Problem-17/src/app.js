let S = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8]
let D = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6]
let H = 7
let T = 8

let total = 0
for (let i = 0; i < 1000; i++) {
    c = i % 10;
    b = ((i % 100) - c) / 10;
    a = ((i % 1000) - (b * 10) - c) / 100;

    if (a != 0) {
        total += S[a] + H
        if (b != 0 || c != 0) {
            total += 3;
        }
    }
    if (b == 0 || b == 1) {
        total += S[b * 10 + c]
    }
    else {
        total += D[b] + S[c];
    }
}

total += S[1] + T

console.log(total);