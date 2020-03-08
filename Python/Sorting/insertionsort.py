def insertionSort(arr):
    length = len(arr)

    for x in range(length):
        for y in range(x):
            if arr[y] > arr[x]:
                val = arr.pop(x);
                arr.insert(y, val);

    return arr;


arr = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 1];
print(insertionSort(arr));
