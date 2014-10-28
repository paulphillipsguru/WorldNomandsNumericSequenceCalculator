var EvenNumber = (function () {
    function EvenNumber() {
    }
    EvenNumber.prototype.Calculate = function (currentList) {
        return currentList.filter(function (a) {
            return a % 2 == 0;
        });
    };
    return EvenNumber;
})();
//# sourceMappingURL=EvenNumber.js.map
