var mergeTwoLists = function(l1, l2) {
    let current = new ListNode();
    let head = current;
    let headPtr1 = l1, headPtr2 = l2;
   //two head pointer
    while(headPtr1 && headPtr2){
    if(headPtr1.val > headPtr2.val){
        current.next = headPtr2;
        headPtr2 = headPtr2.next;
        current = current.next;
    }else{
       current.next = headPtr1;
        headPtr1 = headPtr1.next;
        current = current.next; 
    }
    }
    if(headPtr1)
        current.next = headPtr1;
    if(headPtr2)
        current.next = headPtr2;
    return head.next;
};