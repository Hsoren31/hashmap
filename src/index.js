import _ from 'lodash';
import { linkedList } from './linked';
import './style.css';

function createTable(size = 16){
  let table = new Array(size);

  for(let i = 0; i < table.length; i++){
    table[i] = new linkedList();
  }

  return table;
}

class HashMap{
  table = createTable();
  loadfactor = 0.75;
  size = 0;

  hash(key, table) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % table.length;
    }
 
    return hashCode;
  } 
 
  set(key, value){
    if(this.has(key) === true){
      let index = this.hash(key, this.table);
      let object = this.table[index].find(key);
      object.value = value;
      return;
    }
    let index = this.hash(key, this.table);
    this.table[index].append(key, value);
    this.size++;
    let capacity = this.size / this.table.length;
    if (capacity > this.loadfactor){
      this.resize();
    }
  }

  get(key){
    let index = this.hash(key, this.table);
    return this.table[index].get(key);
  }

  has(key){
    let index = this.hash(key, this.table);
    return this.table[index].has(key);
  }

  remove(key){
    let index = this.hash(key, this.table);
    if (this.table[index].remove(key) === true){
      this.size--;
    };
  }

  length(){
    return this.size;
  }

  clear(){
    this.table = null;
    this.table = createTable(16);
    this.size = 0;
  }

  keys(){
    let keys = [];

    for(let i = 0; i < this.table.length; i++){
      if (this.table[i].keys()){
        keys.push(this.table[i].keys());
      }
    }

    return keys.flat();
  }

  values(){
    let values = [];

    for(let i = 0; i < this.table.length; i++){
      if (this.table[i].values()){
        values.push(this.table[i].values());
      }
    }

    return values.flat()
  }

  entries(){
    let entries = [];

    for(let i = 0; i < this.table.length; i++){
      if (this.table[i].entries()){
        entries.push(this.table[i].entries());
      }
    }

    return entries.flat()
  }

  resize(){
    let currentTableSize = this.table.length;
    let newTable = createTable(currentTableSize*2);
    let currentEntries = this.entries();
    currentEntries.forEach((entry) => {
      let index = this.hash(entry[0], newTable);
      newTable[index].append(entry[0], entry[1]);
    })

    return this.table = newTable;
  } 
}

let test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('stella', 'tan');
test.set('grump', 'orange')

console.log(test.table);
console.log(test.get('ice cream'));