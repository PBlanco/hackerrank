function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]); // # dollars
    var m = parseInt(n_temp[1]); // # coins
    var coins = readLine().split(' '); // coins list
    coins = coins.map(Number);
    coins.sort();
    
    var memo = [1]; 
    for(var i = 1; i <= n; i++) {
        memo[i] = 0;    
    }
    
    coins.forEach(coin => {
        for(var i = coin; i <= n; i++) {
            memo[i] += memo[i - coin];
        }
    });
    
    console.log(memo[n]);
}
