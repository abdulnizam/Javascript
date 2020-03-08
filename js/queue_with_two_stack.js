
function Stack() {
  let list = [];

  this.push = function(v) {
    list.push(v);
  }

  this.pop = function() {
    return list.pop();
  }

  this.peek = function() {
    return list;
  }

  this.size = function() {
    return list.length;
  }

  this.unshift = function(v) {
    return list.unshift(v);
  }

}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
console.log('st-before', st.peek());
st.pop();
console.log('st-after', st.peek());

function Queue() {
  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = function(v) {
    if(outbox.size() === 0) {
      inbox.push(v);
    } else {
      outbox.unshift(v);
    }

  }

  this.dequeue = function() {
    if(outbox.size() === 0) {
      while(inbox.size()) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  }

  this.peek = function() {
    if(inbox.size() > 0)
    {
      return inbox.peek();
    }
    return outbox.peek();
  }

  this.size = function() {
    return outbox.size() + inbox.size();
  }
}

let qu = new Queue();
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
console.log('qu-before', qu.peek());
qu.dequeue();
console.log('qu-after',qu.peek());
qu.dequeue();
console.log('qu-after',qu.peek());
qu.enqueue(4);
console.log('qu-after',qu.peek());
qu.dequeue();
console.log('qu-after',qu.peek());
