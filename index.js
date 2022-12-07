


class Node{
    constructor(data, leftNode, rightNode){
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

let arr = [1,2,3,4,5,7,8,9,10,11,12];
let start = 0;
let end = arr.length - 1;



class Tree{
    constructor(){
        
        this.root = this.buildTree(arr, start, end);

    }
    buildTree(arr, start, end){
        if(start > end) return null;
        
        let mid = Math.floor((start + end) / 2);
        console.log(mid)
        let root = new Node(arr[mid]);
        root.leftNode = this.buildTree(arr, start, mid - 1);
        root.rightNode = this.buildTree(arr, mid + 1, end);
        return root;
    }
    levelOrder(){
        
        const queue = [];
        queue.push(this.root);
        while(queue.length !== 0){
            let current = queue.shift()
            
            if(current.leftNode){
                queue.push(current.leftNode)
            }
            if(current.rightNode){
                queue.push(current.rightNode)
            }
        }
        
    }
    insert(data){
        insertRec(data, root)
    }
    find(data){
        findRec(data, root)
    }  
    delete(data){
        root = deleteRec(data, root)
    }   
    
}

let myTree = new Tree(arr, start, end)

let root = myTree.root;

myTree.insert(111)
myTree.insert(123)
myTree.insert(144)




function inOrderRec(root, inOrderArray = []){
    if(root !== null){
        inOrderRec(root.leftNode, inOrderArray);
        inOrderArray.push(root.data)
        inOrderRec(root.rightNode, inOrderArray);
    };
    console.log(inOrderArray)
    return inOrderArray;
}

function preOrderRec(root, preOrderArray = []){
    
    if(root !== null) {
        preOrderArray.push(root.data)
        preOrderRec(root.leftNode,  preOrderArray);
        preOrderRec(root.rightNode, preOrderArray);
    }
    
    return preOrderArray;
}
preOrderRec(root)

function heightRec(root){
    if(root == null) {
        console.log('zero')
        return - 1;
    }
    
    let left = heightRec(root.leftNode)
    let right = heightRec(root.rightNode) 
       
    
    
    if(left > right) {
        console.log(left + 1)
        return left + 1
    } else {
        console.log(right + 1)
        return right + 1
    }
   
}


function depthRec(root, node, count = 0){
    if(root == null) {
        return ;
    }
    if(root.data == node) return count;
    if(root.data > node){
        console.log('if')
        return depthRec(root.leftNode, node, count + 1)
        
    } else {
        console.log('else')
        return depthRec(root.rightNode, node, count + 1)
        
    }
}


function isBalanced(root){
   return (findMinHeight(root) >= findMaxHeight(root) - 1)
}

function reBalanced(root){
    arr = inOrderRec(root, inOrderArray = [])
    console.log(arr)
    myTree.root = myTree.buildTree(arr, 0, arr.length - 1)
    console.log(myTree)
    return myTree.root;


}
reBalanced(root)



function findMinHeight(root){
    if(root == null) return -1;
    let left = findMinHeight(root.leftNode);
    let right = findMinHeight(root.rightNode);
    if (left < right) {
        return left + 1;
    } else {
        return right + 1;
    }

}     

function findMaxHeight(root){
    if(root == null) return -1;
    let left = findMaxHeight(root.leftNode);
    let right = findMaxHeight(root.rightNode);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }

}  

    
    
   



function insertRec(data, root){
    
    if(root == null){
        root = new Node(data)
        root.leftNode = null;
        root.rightNode = null;
        return root;
    }
    
    if(data < root.data){
        root.leftNode = insertRec(data, root.leftNode)
    } else if (data > root.data){
        root.rightNode = insertRec(data, root.rightNode)
    }
    arr.push(data)
    return root;
        
}  

function findRec(data, root){
    
    if(root == null) return root;
        
    if(data < root.data){
        
        findRec(data, root.leftNode)
    } else if (data > root.data){
        
        findRec(data, root.rightNode)
    } else if (data == root.data){
        console.log(root)
        return root;
    }
    
       
        
}


function deleteRec(data, root){
    console.log(root)
    if(root == null) return root;
    //If tree is empty, just return it
    if(data < root.data) {
        root.leftNode = deleteRec(data, root.leftNode)
        /*if data to delete is less than this call root's data, recursively call this function again
        on this root's LEFT node*/
    } else if (data > root.data){
        root.rightNode = deleteRec(data, root.rightNode);
        /*Else if data to delete is less than this call root's data, recursively call this function again
        on this root's RIGHT node*/
    } else if (data == root.data) {
        if(root.leftNode == null){
            return root.rightNode;
        } else if(root.rightNode == null){
            return root.leftNode;
        }
        root.data = minValue(root.rightNode);
        root.rightNode = deleteRec(root.data, root.rightNode)
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


const prettyPrint = (root, prefix = '', isLeft = true) => {
    if (root.rightNode !== null) {
        prettyPrint(root.rightNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${root.data}`);
    if (root.leftNode !== null) {
        prettyPrint(root.leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

