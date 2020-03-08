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
                else:
                    break

def findRoot(root):
    print(root.info);
    print(root.left);
    print(root.right);

if __name__ == '__main__':
    arr = [8,2,3,10,23,45]
    tree = BinarySearchTree()
    for x in arr:
        tree.create(x)

    findRoot(tree.root)
