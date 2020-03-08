def isPangram(str):
    len_alp = 26
    length = len(str)
    dict = {}
    if length < len_alp:
        return False
    for i in range(length):
        dict[str[i]] = i

    if len(dict) == len_alp:
        return True
    else:
        return False

str = 'abcdefghijklmnopqrstuvxwzzz'
if isPangram(str):
    print('pangram')
else:
    print('not pangram')
