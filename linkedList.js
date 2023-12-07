class Node {
    // node is an element of a linked list
    // it stores data and points to the next node in the list
    constructor(data,next=null){
        this.data = data;
        this.next = next;    
    }
}

class LinkedList {
    // linked lists have a head property (the first node in the list)
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    // add new node at beginning of list
    insertFirst(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else {
            //link this node to the previous head through next property
            newNode.next = this.head;
            //then set this node as the new head
            this.head = newNode;
        }
        this.size+=1;
    }

    // remove the first node from the begnning of the list
    removeFirst(){
        if(this.head){
            //set the second node as the new head
            //remove the first node from the list
            let oldHead = this.head;
            let newHead = oldHead.next;
            this.head = newHead;
            this.size--;
            return oldHead;
        }
    }

    // return the first element of the linked this
    getFirst(){
        return this.head;
    }

    getSize(){
        return this.size;
    }

    reverse(){
        let node = this.head;
        let previous = null;
        let temp = null;

        while(node){
            // store next pointer before I overwrite it
            temp = node.next;
            //reverse pointer
            node.next = previous;

            //step forward
            previous = node;
            node = temp;
        }
        //set the final node to be the new head
        this.head = previous
    }


}

module.exports = {Node,LinkedList}