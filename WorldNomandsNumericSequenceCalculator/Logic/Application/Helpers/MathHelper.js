var MathHelper = (function () {
    function MathHelper() {
    }
    MathHelper.GenerateNumberList = function (maxNo) {
        if (maxNo < 0) {
            LoggingHelper.LogError("GenerateNumberList expects maxNo to be greater than.");
            return null;
        }

        var resultList = new Array();
        for (var count = 1; count <= maxNo; count++) {
            resultList.push(count);
        }

        return resultList;
    };

    MathHelper.ReplaceArrayWithLetteEveryX = function (numberList, every, letter) {
        var count = 0;
        while (count <= numberList.length) {
            count += every;

            if (count <= numberList.length) {
                numberList[count - 1] = letter;
            }
            if (count > numberList.length)
                return;
        }

        return numberList;
    };
    return MathHelper;
})();
//# sourceMappingURL=MathHelper.js.map
