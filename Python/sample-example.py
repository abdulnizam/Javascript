#
#
#
# str = 'abc'
# # arr = [v for v in str]
# # rev = []
# # # for x in range(len(str)):
# # #     rev.append(arr.pop())
# # arr.reverse()
# # print(''.join(arr))
#
# # a = [1, 2]
# # [a[0], a[1]] = [a[1], a[0]]
# #
# # print(a)
# # print(str[1::])
# # print(len(str))
#
# # str2 = str.rstrip()
# # print(str.rstrip())
#
# # print(len(str2))
#
# class Graph:
#     def __init__(self):
#         self.adjList = {}
#
#     def addVertex(self, v):
#         self.adjList[v] = []
#
#     def addEdge(self, v, w):
#         self.adjList[v].append(w)
#         self.adjList[w].append(v)
#
#     def printGraph(self):
#         for x in self.adjList:
#             print(x+'=>')
#             print(self.adjList[x])
#
#
#     def bfs(self, v):
#         q = [v]
#         visited = {}
#         for x in self.adjList:
#             visited[x] = False
#
#         while len(q) > 0:
#             elem = q.pop(0)
#             visited[elem] = True
#             print(elem)
#             els = self.adjList[elem]
#             for el in els:
#                 if visited[el] == False:
#                     visited[el] = True
#                     q.append(el)
#
#     def dfs(self, v):
#         visited = {}
#         for x in self.adjList:
#             visited[x] = False
#
#         self.recursive(v, visited)
#
#     def recursive(self, v, visited):
#         visited[v] = True;
#         print(v)
#         elem = self.adjList[v]
#         for el in elem:
#             if visited[el] == False:
#                 visited[el] = True
#                 self.recursive(el, visited)
#
#
# if __name__ == '__main__':
#     graph = Graph()
#     graph.addVertex('A')
#     graph.addVertex('B')
#     graph.addVertex('C')
#     graph.addVertex('D')
#
#     graph.addEdge('A', 'B')
#     graph.addEdge('B', 'C')
#     graph.addEdge('C', 'D')
#     graph.addEdge('D', 'A')
#
#     # graph.printGraph()
#     # graph.bfs('A')
#     graph.dfs('B')

# a = (1,3,4,5)
# print(sum(a))

# x = 'smith'
# y = 'jones'
# sort = [x, y]
# sort.sort()
#
# print(sort)
# import statistics
#
# exp = [2,3,4,2,3,6,8,4,5]
# length = 5
#
# notification = 0
# exp_len = len(exp)
# selected_value = exp[-2]
# i = 0
# if exp_len > length:
#     while i < (exp_len-length):
#         expt = exp[slice(i,length+i)]
#         medians = statistics.median(expt)
#         print(medians, exp[length+i])
#         if exp[length+i] >= 2*medians:
#             notification += 1
#         print(notification)
#         i += 1
#
# else:
#     print(notification)

#
# n, d = 5, 3
# arr = [10,20,30,40,50]
#
# dic = {}
#
# def find(idx):
#     s = 0
#     for i in range(0, 200):
#         freq = 0
#         if i in dic:
#             freq = dic[i]
#         s = s + freq
#         if s>=idx:
#             return i
#
# ans = 0
# for i in range(0, n):
#     val = arr[i]
#
#     if i>=d:
#         med=find(d/2 + d%2)
#
#         if d%2==0:
#             ret = find(d/2+1)
#             if val >=med + ret:
#                 ans = ans+1
#         else:
#             if val>=med*2:
#                 ans = ans + 1
#
#     if val not in dic: dic[val] = 0
#     dic[val] = dic[val] + 1
#
#     #print i,dic
#     if i>=d:
#         prev = arr[i-d]
#         dic[prev] = dic[prev]-1
#
# print(ans)

#
# def bruteforce(numbers, neededSum):
#     l = len(numbers)
#     for i in range(l-1):
#         for j in range(i+1,l):
#             if numbers[i]+numbers[j] == neededSum:
#                 return True
#     return False
#
# def checkSumPair(numbers, neededSum):
#     knownNumbers = set()
#     for number in numbers:
#         print(neededSum-number)
#         if (neededSum-number) in knownNumbers:
#             return True
#         else:
#             knownNumbers.add(number)
#     return False
#
# if __name__ == "__main__":
#     numbers = [10, 15, 3, 7];
#     neededSum = 17;
#     print(bruteforce(numbers, neededSum))
#     print(checkSumPair(numbers, neededSum))

#
# def cons(a, b):
#     def pair(f):
#         return f(a, b)
#     return pair
#
# def car(fun):
#     def first(a, b):
#         return a;
#     return fun(first);
#
# def cdr(fun):
#     def second(a, b):
#         return b;
#     return fun(second);
#
#
# print(car(cons(3, 4)));
# print(cdr(cons(3, 4)));

import os
import time

#You can change the width of the display according to your wish.
WIDTH = 250

# Written below currently is GeeksForGeeks. If you wish to get more
# written, you have to add each alphabet manually.
message = "geeksforgeeks".upper()

#The message will get printed here.
printedMessage = [ "","","","","","","","","","","","","","", ]

"""
What we have done here is a dictionary mapping the letters to their line.
These mapped indexes identify itself to each letter in the dictionary and
also for each line in the display.
"""
characters = { " " : [ " ",
                       " ",
                       " ",
                       " ",
                       " ",
                       " ",
                       " " ],

               "E" : [ "*****",
                       "*    ",
                       "*    ",
                       "*****",
                       "*    ",
                       "*    ",
                       "*****" ],

               "O" : [ "*****",
                       "*   *",
                       "*   *",
                       "*   *",
                       "*   *",
                       "*   *",
                       "*****" ],

               "K" : [ " *   *",
                       " *  * ",
                       " * *  ",
                       " **   ",
                       " * *  ",
                       " *  * ",
                       " *   *" ],

               "S" : ["  **** ",
                       " *     ",
                       " *     ",
                       "  ***  ",
                       "     * ",
                       "     * ",
                       " ****  " ],


               "G" : [" ***  ",
                       "*   * ",
                       "*     ",
                       "* *** ",
                       "*   * ",
                       "*   * ",
                       " ***  " ],


               "F" : ["***** ",
                       "*     ",
                       "*     ",
                       "****  ",
                       "*     ",
                       "*     ",
                       "*     " ],

               "R" : [" ****  ",
                      " *   * ",
                      " *   * ",
                      " ****  ",
                      " * *   ",
                      " *  *  ",
                      " *   * " ]


               }


for row in range(7):
    for char in message:
        printedMessage[row] += (str(characters[char][row]) + "  ")
        print(printedMessage[row])

# offset = WIDTH
# while True:
#     os.system("cls")
#
#     for row in range(7):
#         print(" " * offset + printedMessage[row][max(0,offset*-1):WIDTH - offset])
#
#     offset -=1
#
#     if offset <= ((len(message)+2)*6) * -1:
#         offset = WIDTH
#
#     #Use this to change the speed of the animation that you wish to keep.
#     time.sleep(0.10)
