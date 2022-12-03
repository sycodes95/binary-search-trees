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


let arr = [1,2,3,4,5,6,7];
let start = 0;
let end = 6;






function buildTree(arr, start, end){
    if(start > end) return null;
    
    let mid = (start + end) / 2;
    
    let root = new Node(arr[mid]);
    root.leftNode = buildTree(arr, start, mid - 1);
    root.rightNode = buildTree(arr, mid + 1, end);
    
    return root;
}
    



let kevin = new Tree(mergeSort(arr), start, end)


console.log(kevin.root.leftNode)







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


