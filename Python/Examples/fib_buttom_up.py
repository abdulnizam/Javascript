def fib_buttom_up(n):
    if n == 1 and n == 2:
        return 1
    buttom_up = [None]*(n + 1)
    buttom_up[1] = 1
    buttom_up[2] = 1
    for i in range(3, n+1):
        buttom_up[i] = buttom_up[i-1] + buttom_up[i-2]
    
    return buttom_up;


if __name__ == "__main__":
    lists = fib_buttom_up(10000)
    print(lists[10000])

