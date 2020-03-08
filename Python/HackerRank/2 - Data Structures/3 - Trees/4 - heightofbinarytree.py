class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root

            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info):
          self.info = info
          self.left = None
          self.right = None


       // this is a node of the tree , which contains info as data, left , right
'''
def height(root):
    return findHeight(root) - 1


def findHeight(root):
    if root is None:
        return 0 ;
    else :
        # Compute the depth of each subtree
        lDepth = findHeight(root.left)
        rDepth = findHeight(root.right)

        # Use the larger one
        if (lDepth > rDepth):
            return lDepth+1
        else:
            return rDepth+1

if __name__ == '__main__':
    tree = BinarySearchTree()

    # input
    # 7
    # 3 5 2 1 4 6 7


    arr = [3, 5, 2, 1, 4, 6, 7]
    t = len(arr);

    for i in range(t):
        tree.create(arr[i])

    print(height(tree.root))
