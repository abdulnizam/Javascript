def fibo1(num):
    a = 0
    b = 1
    arr = [b]
    for x in range(num-2):
        c = a+b
        a = b
        b = c
        arr.append(b)
    return arr

def fibo2(num):
    a = 0
    b = 1
    arr = [b, a+b]
    for x in range(num-2):
        arr.append(arr[x]+arr[x+1]);
    return arr

print(fibo1(10));
