/*Queue Data Structure Constructor Function*/
function myQueue() {
    this.data = [];
    
}
myQueue.prototype.add = function (record) {
    this.data.unshift(record);
}
/*Remove element  method */
myQueue.prototype.remove = function () {
    this.data.pop();
}
/*Method to Return the first  element*/
myQueue.prototype.first = function () {
    return this.data[0];
}
/*Method to Returns the first  element*/
myQueue.prototype.last = function () {
    return this.data[this.data.length - 1];
}
/*Method to Returns the size of  the Queue*/
myQueue.prototype.size = function () {
    return this.data.length;
}