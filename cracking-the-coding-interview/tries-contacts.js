process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

class Node {

    constructor(data) {
        this.wordMatchCount = 0;
        this.data = data;
        this.children = {};
        this.isCompleteWord = false;
    }

    addChild(data) {
        this.children[data] = new Node(data);
    }
}

class Trie {
    
    constructor() {
        this.root = new Node('');
    }

    add(chars) {
        const charsArr = chars.split('');
        let node = this.root;
        
        for (let i = 0; i < charsArr.length; i++) {
            let data = charsArr[i];
            if (!node.children[data]) {
                node.children[data] = new Node(data);
            }
            node = node.children[data];
            node.wordMatchCount++;
            if (i === charsArr.length - 1) {
               node.isCompleteWord = true; 
            } 
        }
    }
    
    findCount(chars) {
        const charsArr = chars.split('');
        let node = this.root;
        let count = 0;
        
        for (let i = 0; i < charsArr.length; i++) {
            let data = charsArr[i];
            if (!node.children[data]) {
                return count;
            }
            node = node.children[data];
        }

        return node.wordMatchCount;
    }
}

function main() {
    var n = parseInt(readLine());
    const trie = new Trie();
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if (op === 'add') {
            trie.add(contact);
        } else if (op === 'find') {
            console.log(trie.findCount(contact));
        }
    }

}
