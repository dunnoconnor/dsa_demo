class Node {
    constructor(value) {
      // store data and point to a left and right child node
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
class BinarySearchTree {
    constructor() {
      //the root is the top node, all searches start here
      this.root = null;
    }

    insert(value){
      let newNode = new Node(value);
      // first value inserted becomes the root node
      if(!this.root){
        this.root = newNode;
      } else {
        let current = this.root;
        while(true){
          // if the value is already in the bst, don't add it again
          if (value === current.value){
            return undefined;
          }
          // if the value added is less than the current node being examined
          if (value< current.value){
            // and the current node has no left child, add this as the left child
            if (current.left == null){
              current.left = newNode;
              return this;
            }
            // if the current node has a left child, examine that node
            current = current.left;
          } else {
            //if the value is greater than the current node being examined
            //and the current node has no right child, add this as the right child
            if (current.right==null){
              current.right = newNode;
              return this;
            }
            // if the current node has a right child, examine that node
            current = current.right
          }

        }
      }

    }

    find(value){
      if(!this.root) return null;
      // always begin search at the root
      let current = this.root;
      let found = false;

      while(current && !found){
        // if the value we are searching for is less than the value of the current node check the left child node
        if (value<current.value){
          current = current.left;
        } else if (value> current.value){
        // if the value we are searching for is greater than the value of the current node check the right child node
          current = current.right;
        } else {
          found = true;  
        }
      }
      // if found return that node, or null if no node present
      return current;

    }
  
}
  
module.exports = BinarySearchTree;