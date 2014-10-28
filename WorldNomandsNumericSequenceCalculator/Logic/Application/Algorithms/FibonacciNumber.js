var FibonacciNumber = (function () {
    function FibonacciNumber() {
    }
    FibonacciNumber.prototype.Calculate = function (currentList) {
        for (var count = 2; count < currentList.length; count++) {
            var newNumber = currentList[count - 1] + currentList[count - 2];
            currentList[count] = newNumber;
        }

        return currentList;
    };
    return FibonacciNumber;
})();
//# sourceMappingURL=FibonacciNumber.js.map
