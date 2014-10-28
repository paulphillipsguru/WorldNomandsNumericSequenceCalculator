
class OddNumber  implements IAlgorithm
{
    Calculate(currentList: Array<number>) {
        return currentList.filter(a=>a % 2==1);
    }
} 