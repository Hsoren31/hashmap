class linkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(key, value){
        let node = new Node(key, value);
        if (this.head === null){
            this.length++;
            this.head = node;
            return
        }

        let current = this.head;
        while (current.next != null){
            current = current.next;
        }

        current.next = node;
        this.length++;
    }

    find(key){
        let current = this.head;

        if (this.head === null){
            return 'This list is empty'
        }

        for(let i = 0; i < this.length; i++){
            if(current.key === key){
                return current;
            }

            current = current.next;
        }

        return 'Key not Found';
    }

    get(key){
        let current = this.head;

        if (this.head === null){
            return 'This list is empty'
        }

        for(let i = 0; i < this.length; i++){
            if(current.key === key){
                return current.value;
            }

            current = current.next;
        }

        return 'Key not Found';
    }

    has(key){
        let current = this.head;

        if (this.head === null){
            return false
        }

        for(let i = 0; i < this.length; i++){
            if (current.key === key){
                return true;
            }

            current = current.next;
        }

        return false;
    }

    remove(key){
        let current = this.head;
        let previous = null;

        if (this.head === null){
            return false;
        }

        for(let i = 0; i < this.length; i++){
            if (current.key === key){
                if (previous === null){
                    this.head = current.next;
                    this.length--;
                    return true;
                }
                previous.next = current.next;
                this.length--;
                return true;
            }
            previous = current;
            current = current.next;
        }

        return false
    }

    keys(){
        let current = this.head;
        let keysArray = [];

        if (this.head === null){
            return;
        }

        for(let i = 0; i < this.length; i++){
            keysArray.push(current.key);
            current = current.next;
        }

        return keysArray;
    }

    values(){
        let current = this.head;
        let valuesArray = [];

        if (this.head === null){
            return;
        }
        
        for(let i = 0; i < this.length; i++){
            valuesArray.push(current.value);
            current = current.next;
        }

        return valuesArray;
    }

    entries(){
        let current = this.head;
        let entries = [];

        if (this.head === null){
            return;
        }
        
        for(let i = 0; i < this.length; i++){
            entries.push([current.key, current.value]);
            current = current.next;
        }

        return entries;
    }
}

class Node {
    constructor(key, value){
        this.key = key || null
        this.value = value || null
        this.next = null;
    }
}

export{ linkedList }