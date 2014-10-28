var OddNumber = (function () {
    function OddNumber() {
    }
    OddNumber.prototype.Calculate = function (currentList) {
        return currentList.filter(function (a) {
            return a % 2 == 1;
        });
    };
    return OddNumber;
})();
//# sourceMappingURL=OddNumber.js.map
