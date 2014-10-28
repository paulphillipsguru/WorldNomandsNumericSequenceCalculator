
class EvenNumber implements IAlgorithm {
    Calculate(currentList: Array<number>) {
        return currentList.filter(a=> a % 2 == 0);
    }
}  