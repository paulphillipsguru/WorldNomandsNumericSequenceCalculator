class MathHelper {
    static GenerateNumberList(maxNo: number): Array<number> {

        if (maxNo < 0) {
            LoggingHelper.LogError("GenerateNumberList expects maxNo to be greater than.");
            return null;
        }

        var resultList = new Array<any>();
        for (var count = 1; count <= maxNo ; count++) {
            resultList.push(count);
        }

        return resultList;
    }

    static ReplaceArrayWithLetteEveryX(numberList: Array<any>,every:number,letter:string) {
        var count = 0;
        while (count <= numberList.length) {
            count += every;
            
            if (count<=numberList.length) {
                
                numberList[count-1] = letter;
            }
            if (count > numberList.length) return;
        }

        return numberList;
    }
} 