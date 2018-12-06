function ListNode(val){
    this.val = val;
    this.next = null;
}

function append(head,val){
    var node = new ListNode(val);
        var q;
        if(head === null){
            head = node;
        } else{
            q = head;
            while(q.next !== null){
                q = q.next;
            }
            q.next = node;
        }
}
function toString (head){
    var q;
    if (head === null){
        console.log('null');
    } else{
        q = head;
        while(q !== null){
            console.log(q.val);
            q = q.next;
        }
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var q = head;
    var p;
    var result = null;
    while(q !== null){
        p = new ListNode(q.val);
        if(result === null){
            result = new ListNode(p.val);
        }else{
            p.next = result;
            result = p;
        }
        q = q.next;
    }
    return result;
};
var head = new ListNode(1);
append(head,2);
toString(head);
toString(reverseList(head));