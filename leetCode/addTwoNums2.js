// https://leetcode.com/problems/add-two-numbers/
// Linked List

// given two non-empty linked lists representing two non-negative integers
// digits are stored in reverse order and each of their nodes contain a single digit
// add the two numbers and return it as a linked list


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;            
        }

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        return this;
    }
    reverseAdd() {
        let node = this.head;
        this.head = this.tail
        this.tail = node;
    
        let next;
        let sum = '';
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            sum = sum.concat(node.val.toString());
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return Number(sum);
    }
}

const addTwoNums = (l1, l2) => {
    const sum = l1.reverseAdd() + l2.reverseAdd();

    const sumDigitCount = Math.floor(Math.log10(sum)) + 1;
    const newList = new SinglyLinkedList();

    for(let i = 0; i < sumDigitCount; i++) {
        let digit = Math.floor(sum / Math.pow(10, i)) % 10; // in case we get a num like 0.7 , we floor it to 0 and store that
        newList.push(digit);
    }

    return newList;
}


const l1 = new SinglyLinkedList();
l1.push(2)
l1.push(4)
l1.push(3)

const l2 = new SinglyLinkedList();
l2.push(5)
l2.push(6)
l2.push(4)

console.log(addTwoNums(l1, l2));