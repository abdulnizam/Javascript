def bubblesort(arr):
    length = len(arr)

    swap = True
    while swap:
        swap = False
        for x in range(length-1):
            if arr[x] > arr[x+1]:
                [arr[x], arr[x+1]] = [arr[x+1], arr[x]]
                swap = True

    return arr


    return arr;


arr = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 1];
print(bubblesort(arr));
