
class FibonacciNumber implements IAlgorithm {
    Calculate(currentList: Array<number>) {
        for (var count = 2; count < currentList.length; count++) {

            var newNumber = currentList[count - 1] + currentList[count - 2];
            currentList[count] = newNumber;
        }

        return currentList;

    }
}   