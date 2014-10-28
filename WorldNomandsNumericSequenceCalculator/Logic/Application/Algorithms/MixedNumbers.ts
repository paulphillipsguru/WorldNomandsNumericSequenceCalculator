
class MixedNumbers implements IAlgorithmExtended {
    Calculate(currentList: Array<any>, ruleList: Array<RuleModel>) {
        
        for (var count=0;count<=ruleList.length-1;count++) {
            
            var ruleItem: RuleModel;
            ruleItem = ruleList[count];
            
            MathHelper.ReplaceArrayWithLetteEveryX(currentList, ruleItem.Index, ruleItem.Letter);

        }


        return currentList;
    }
}   