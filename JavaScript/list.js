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
 * 翻转链表 头插法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var p;
    var result = null;
    while(head !== null){
        p = new ListNode(head.val);
        if(result === null){
            result = new ListNode(p.val);
        }else{
            p.next = result;
            result = p;
        }
        head = head.next;
    }
    return result;
};
/**
 * 翻转链表 原地翻转
 * @param {ListNode} head 
 * @returns {ListNode}
 * 
 */
var reverseList2 = function (head) {
    var result = null;
    while(head !== null){
        var temp = head.next; //保留除头结点以外的原来的链表
        head.next = result;   //头结点下一个指向新的链表
        result = head;        //新链表指向头结点，实现头插法
        head = temp;          //head指向下一个结点
    }
    return result;
}
/**
 * 从链表末尾删除n位
 * @param  {ListNode} head
 * @param  {number} n
 */
var removeNthFromEnd = function(head,n) {
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
/**
 * 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null){
        return null;
    }
    var q = head,p = head;
    while(p !== null && p.next!== null){ // 找出中间节点
        q = q.next;
        p = p.next.next; 
    }
    q = reverseList2(q); // 后一半翻转链表
    while(q !== null && head !== null){
        if(q.val !== head.val){
            return false;
        }
        q = q.next;
        head = head.next;
    }
    return true;
};
/**
 * 判断是否有环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null){
        return false;
    }
    var p = head;
    var q = head;
    //两个指针 分别跑一个快一个慢，如果有环总会相遇的
    while(p.next !== null && p.next.next !== null){
        p = p.next.next;
        q = q.next;
        if(p === q){
            return true;
        } 
    }
    return false;
};
/**
 * 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var list = null;
    if(l1 === null || l2 === null){
        return l1 === null?l2:l1;
    }
    if(l1.val < l2.val){
        list = new ListNode(l1.val);
        l1 = l1.next;
        list.next = mergeTwoLists(l1,l2);
    }else{
        list = new ListNode(l2.val);
        l2 = l2.next;
        list.next = mergeTwoLists(l1,l2);
    }
    return list;
};
var head = new ListNode(1);
append(head,2);
append(head,1);
head.next = head;
// removeNthFromEnd(head,2);
// toString(head);
// // toString(reverseList(head));
// var merge = mergeTwoLists(head,head);
// toString(merge);
console.log(hasCycle(head));