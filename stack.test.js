const Stack = require('./stack');

describe('Stack', () => {
    let stack;
    beforeEach(()=>{
        stack = new Stack();
    })

    it('add new items to stack',()=>{
        stack.push('apple');
        expect(stack.peek()).toBe('apple');
    })

    it('notifies on trying to pop from an empty stack', () => {
        expect(stack.pop()).toBe('Underflow Error');
    });

    it('pops the last added item', () => {
        stack.push('apple');
        stack.push('banana');
        expect(stack.pop()).toBe('banana');
    });

    it('checks if stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push('Item4');
        expect(stack.isEmpty()).toBe(false);
    });
});