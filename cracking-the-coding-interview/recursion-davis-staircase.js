function waysToClimb(n, stored){
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else if (n === 3) {
        return 4;
    } else {
        if (typeof stored[n-1] === 'undefined') {
            stored[n-1] = waysToClimb(n-1, stored);
        }
        
        if (typeof stored[n-2] === 'undefined') {
            stored[n-2] = waysToClimb(n-2, stored);
        }
        
        if (typeof stored[n-3] === 'undefined') {
            stored[n-3] = waysToClimb(n-3, stored);
        }
        
        return stored[n-1] + stored[n-2] + stored[n-3]; 
    }
}

function main() {
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        console.log(waysToClimb(n, []));
    }

}

