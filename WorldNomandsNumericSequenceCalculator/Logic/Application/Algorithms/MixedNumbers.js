var MixedNumbers = (function () {
    function MixedNumbers() {
    }
    MixedNumbers.prototype.Calculate = function (currentList, ruleList) {
        for (var count = 0; count <= ruleList.length - 1; count++) {
            var ruleItem;
            ruleItem = ruleList[count];

            MathHelper.ReplaceArrayWithLetteEveryX(currentList, ruleItem.Index, ruleItem.Letter);
        }

        return currentList;
    };
    return MixedNumbers;
})();
//# sourceMappingURL=MixedNumbers.js.map
