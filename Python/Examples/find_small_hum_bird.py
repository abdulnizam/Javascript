

def migratoryBirds(arr):
    dist = {}
    for i in arr:
        if i in dist:
            dist[i] += 1
        else: 
            dist[i] = 1
    inverse = [(value, key) for key, value in dist.items()]
    print(inverse)
    return max(inverse)[1]

if __name__ == "__main__":
    # result = migratoryBirds([1, 4, 4, 4, 5, 3])
    result = migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])
    print(result);
