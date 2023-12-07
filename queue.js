//first in, first out data structure

class Queue {
    constructor(){
        this.items = [];
    }
    //add items to the back of the queue
    enqueue(item){
        this.items.push(item);
    }
    //remove items from the front of the queue
    dequeue(){
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    //peek at element in front of queue
    front(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items[0];
    }
    //return size of queue
    size(){
        return this.items.length;
    }
    // returns true when no items in queue
    isEmpty(){
        return this.items.length==0;
    }

}

module.exports = Queue;