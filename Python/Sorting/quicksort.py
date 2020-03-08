def quickSort(arr):
    length = len(arr)
    if length < 2:
        return arr

    lastValue = arr[-1]
    leftArray = []
    rightArray = []
    for i in range(0, length-1):
        if(arr[i] < lastValue):
             leftArray.append(arr[i])
        else:
            rightArray.append(arr[i])

    return quickSort(leftArray)+[lastValue]+quickSort(rightArray)


arr = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 1];
print(quickSort(arr));
