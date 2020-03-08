def mergesort(arr):
    length = len(arr)
    if length < 2:
        return arr

    mid = length // 2;
    one = [arr[v] for v in range(mid)]
    two = [arr[v] for v in range(mid, length)]

    return conqurer(mergesort(one), mergesort(two))

def conqurer(one, two):
    arr = []
    while len(one) and len(two):
        if one[0] > two[0]:
            arr.append(two.pop(0))
        else:
            arr.append(one.pop(0))

    return arr+one+two





arr = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 1];
print(mergesort(arr));
