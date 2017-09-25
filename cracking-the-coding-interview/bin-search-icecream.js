class IceCream {
    constructor(cost, indx) {
        this.cost = cost;
        this.indx = indx;
    }
}

function binarySearch(arr, x) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = parseInt(left + ((right - left) / 2));
        if (arr[mid].cost === x) {
            return mid;
        } else if (arr[mid].cost > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        
        var sortedIceCream = a.map((x, i) => new IceCream(x, i + 1)).sort((a,b) => {
            if (a.cost < b.cost) {
                return -1;
            } else if (a.cost > b.cost) {
                return 1;
            } else {
                return 0;
            }
        });
        
        for (var i = 0; i < sortedIceCream.length; i++) {
            var iceCream1 = sortedIceCream[i];
            var remainder = m - iceCream1.cost;
            
            var secFlavIndx = binarySearch(sortedIceCream, remainder);
            if (secFlavIndx === -1) {
                continue;
            }
            
            var iceCream2 = sortedIceCream[secFlavIndx];
            if (secFlavIndx === i) {
                if (sortedIceCream[i-1] && sortedIceCream[i-1].cost === iceCream1.cost) {
                    iceCream2 = sortedIceCream[i-1];
                } else if (sortedIceCream[i+1] && sortedIceCream[i+1].cost === iceCream1.cost) {
                    iceCream2 = sortedIceCream[i+1];
                } else {
                    continue;
                }
            }
            
            if (iceCream1.indx < iceCream2.indx) {
                console.log(`${iceCream1.indx} ${iceCream2.indx}`)
            } else {
                console.log(`${iceCream2.indx} ${iceCream1.indx}`)
            }
            break;
        }
    }

}