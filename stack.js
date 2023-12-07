// Stack last, first out data structure

class Stack {
    constructor(){
        this.items =[];
    }
    // add new elements to the end of the list
    push(element){
        this.items.push(element);
    }
    //check the element at the end of the list, without removing
    peek(){
        if(this.isEmpty()){
            return "Empty Stack";
        }
        return this.items.slice(-1)[0];
    }
    pop(){
        if(this.isEmpty()){
            return "Underflow Error"
        }
        return this.items.pop()
    }
    isEmpty(){
        return !this.items.length
    }
}

module.exports = Stack;