const{Node, LinkedList} = require('./linkedList')

test('Node has properties data and next', () => {
    const node = new Node('apple');
    expect(node).toHaveProperty('data', 'apple');
    expect(node).toHaveProperty('next', null);
  });

  test('Inserts correctly', () => {
    const ll = new LinkedList();
    ll.insertFirst('apple');
    expect(ll.head).toHaveProperty('data', 'apple');
  });

  test('Can get first', () => {
    const ll = new LinkedList();
    ll.insertFirst('apple');
    ll.insertFirst('banana');
    expect(ll.getFirst()).toHaveProperty('data', 'banana');
  });

  test('Size is updated', () => {
    const ll = new LinkedList();
    expect(ll.getSize()).toEqual(0);
    ll.insertFirst('apple');
    expect(ll.getSize()).toEqual(1);
  });

  test('Can remove first',() => {
    const ll = new LinkedList();
    ll.insertFirst('apple');
    ll.insertFirst('banana');
    expect(ll.getSize()).toEqual(2);
    removedNode = ll.removeFirst()
    expect(removedNode.data).toEqual('banana')
    expect(ll.getSize()).toEqual(1);
  })


  test('Can reverse list',() => {
    const ll = new LinkedList();
    ll.insertFirst('apple');
    ll.insertFirst('banana');
    ll.insertFirst('lemon');
    ll.insertFirst('peach');
    ll.insertFirst('plum');
    console.log(ll);
    expect(ll.head.data).toEqual('plum');
    ll.reverse();
    console.log(ll);
    expect(ll.head.data).toEqual('apple');
  })