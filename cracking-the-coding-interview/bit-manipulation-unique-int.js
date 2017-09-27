function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var unique = a.reduce((acc, n) => acc ^ n, 0);
    console.log(unique);
}
