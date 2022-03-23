var array_list = new Array;
function insertion() {
    var A = document.getElementById('in');
    var ele1 = array_list.push(parseInt(A.value));
    console.log(array_list.toString());
    alert("The added element is : " + (A.value));
}
function deletion() {
    var ele2 = array_list.pop();
    alert("The deleted element is : " + ele2);
}
function traversal() {
    var out1 = document.getElementById('output');
    out1.innerHTML = array_list.toString();
}
