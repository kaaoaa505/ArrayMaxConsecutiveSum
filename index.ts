const a = [2, 3, 5, 1, 6];
const k = 2;
console.log(solve(a, k));

function solve(a: number[], k: number): number {
    let r = 0;
    a.forEach(v => {
        if (r < v + k) r = v + k;
    });
    return r;
}
