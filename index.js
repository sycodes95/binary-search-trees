class Node{
    constructor(data, leftNode, rightNode){
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class Tree{
    constructor(arr, start, end){
        
        this.root = buildTree(arr, start, end);

    }      
}


let arr = [1,2,3,4,5,7,8,9,10,11,12];
let start = 0;
let end = arr.length - 1;



let myTree = new Tree(arr, start, end)

let root = myTree.root;


function buildTree(arr, start, end){
    if(start > end) return null;
    
    let mid = Math.floor((start + end) / 2);
    
    let root = new Node(arr[mid]);
    root.leftNode = buildTree(arr, start, mid - 1);
    root.rightNode = buildTree(arr, mid + 1, end);
    
    return root;
}

function insertNode(data, root){
    console.log(root)
    if(root == null){
        root = new Node(data)
        root.leftNode = null;
        root.rightNode = null;
        return root;
    }
    
    if(data < root.data){
        root.leftNode = insertNode(data, root.leftNode)
    } else if (data > root.data){
        root.rightNode = insertNode(data, root.rightNode)
    }
    return root;
        
}

function deleteNode(data, root){
    if(root == null) return root;
    if(data < root.data) {
        deleteNode(data, root.leftNode)
    } else if (data > root.data){
        deleteNode(data, root.rightNode);
    } else {
        if(root.leftNode == null){
            return root.rightNode;
        } else if(root.rightNode == null){
            return root.leftNode;
        }
        root.data = minValue(root.rightNode);
        root.rightNode = deleteNode(root.data, root.rightNode)
    }
    
}

function minValue(root){
    let minv = root.data;
    while(root.leftNode !== null){
        minv = root.leftNode.data;
        root = root.leftNode
    }
    return minv;
}



insertNode(20, root)
console.log(deleteNode(10, root))

console.log(root)


const prettyPrint = (root, prefix = '', isLeft = true) => {
    if (root.rightNode !== null) {
        prettyPrint(root.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${root.data}`);
    if (root.leftNode !== null) {
        prettyPrint(root.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

console.log(prettyPrint(root))








function mergeSort(n){
    if (n.length < 2){
        return n
    } 
    let low = 0;
    let mid = Math.floor(n.length / 2);
    let high = n.length;
    
    let firstHalf = n.slice(low, mid)
    let secondHalf = n.slice(mid, high)

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length >= 1 && secondHalf.length >= 1){
        if(firstHalf[0] <= secondHalf[0]){
            sorted.push(firstHalf.shift())
        } else {
            sorted.push(secondHalf.shift())   
        }
    }
    return [...sorted, ...firstHalf, ...secondHalf]

}


