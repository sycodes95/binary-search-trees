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
    //If tree is empty, just return it
    if(data < root.data) {
        deleteNode(data, root.leftNode)
        /*if data to delete is less than this call root's data, recursively call this function again
        on this root's LEFT node*/
    } else if (data > root.data){
        deleteNode(data, root.rightNode);
        /*Else if data to delete is less than this call root's data, recursively call this function again
        on this root's RIGHT node*/
    } else {
        if(root.leftNode == null){
            return root.rightNode;
        } else if(root.rightNode == null){
            return root.leftNode;
        }
        root.data = minValue(root.rightNode);
        root.rightNode = deleteNode(root.data, root.rightNode)
    }
    return root;
    
}

function minValue(root){
    let minv = root.data;
    while(root.leftNode !== null){
        //while root left exists
        minv = root.leftNode.data;
        //root.data = root left data
        root = root.leftNode
    }
    return minv;
}

function find(data, root){
    if(root == null) return root;
    
    if(data < root.data){
        
        find(data, root.leftNode)
    } else if (data > root.data){
        
        find(data, root.rightNode)
    } else if (data == root.data){
        
        return root.data;
    }
    
    
    
}

function levelOrder(){
    const queue = [];
    queue.push(this.root);
    while(queue.length){
        let current = queue.shift()
        console.log(current.value)
        if(current.leftNode){
            queue.push(current.leftNode)
        }
        if(current.rightNode){
            queue.push(current.rightNode)
        }
    }
    
}


console.log(myTree.levelOrder())

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


