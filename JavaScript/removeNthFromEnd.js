
function LinkList(){
    function ListNode(val){
        this.val = val;
        this.next = null;
    }
    var head = null;
    this.append = function (val){
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
    this.toString = function (){
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
     * @param {ListNode} node
     * @return {void} Do not return anything, modify node in-place instead.
     */
    this.removeNthFromEnd = function(n) {
        var q1;
        var q2;
        q1 = head;
        q2 = head;
        for (;n>0;n--){
            q1 = q1.next;
        }
        if(q1 === null){
            head = q2.next;
            return;
        }
        while(q1.next !== null){
            q1 = q1.next;
            q2 = q2.next;
        }
        q2.next = q2.next.next;
    };
}
var obj = new LinkList;
obj.append(1);
obj.append(2);
obj.append(3);
obj.toString();
obj.removeNthFromEnd(3);
obj.toString();




