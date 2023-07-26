class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
console.log(myStack.size()); // Output: 2
