var mergeKLists = function(lists) {
    let allValues = [];
    for(let i=0; i<lists.length;i++){
        let cur = lists[i];
        while(cur){
            allValues.push(cur);
            cur = cur.next;
        }
    }
    allValues.sort((a,b) => a-b);
    let result = new ListNode();
    let current = result;
    allValues.forEach(val => {
        current.next = ListNode(val);
        current = current.next;
    })
    return result.next;
};