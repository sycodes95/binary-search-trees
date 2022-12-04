<script>
// javascript program to demonstrate
// insert operation in binary
// search tree
	/*
	* Class containing left and right child of current node and key value
	*/
	class Node {
	
constructor(item) {
			this.key = item;
			this.left = this.right = null;
		}
	}

	// Root of BST
	var root = null;

	// This method mainly calls insertRec()
	function insert(key) {
		root = insertRec(root, key);
	}

	/*
	* A recursive function to insert a new key in BST
	*/
	function insertRec(root , key) {

		/*
		* If the tree is empty, return a new node
		*/
		if (root == null) {
			root = new Node(key);
			return root;
		}

		/* Otherwise, recur down the tree */
		if (key < root.key)
			root.left = insertRec(root.left, key);
		else if (key > root.key)
			root.right = insertRec(root.right, key);

		/* return the (unchanged) node pointer */
		return root;
	}

	// This method mainly calls InorderRec()
	function inorder() {
		inorderRec(root);
	}

	// A utility function to
	// do inorder traversal of BST
	function inorderRec(root)
	{
		if (root != null) {
			inorderRec(root.left);
			document.write(root.key+"<br/>");
			inorderRec(root.right);
		}
	}

// Driver Code

		/* Let us create following BST
			50
		/	 \
		30	 70
		/ \ / \
	20 40 60 80 */
		insert(50);
		insert(30);
		insert(20);
		insert(40);
		insert(70);
		insert(60);
		insert(80);

		// print inorder traversal of the BST
		inorder();

// This code is contributed by Rajput-Ji
</script>
