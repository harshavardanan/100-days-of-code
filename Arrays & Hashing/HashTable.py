class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTable:
    def __init__(self, capacity):
        self.size = 0
        self.capacity = capacity
        self.table = [None] * capacity

    def _hash(self, key):
        return hash(key) % self.capacity

    def insert(self, key, value):
        index = self._hash(key)
        current = self.table[index]

        # If bucket is empty, directly insert
        if current is None:
            self.table[index] = Node(key, value)
            self.size += 1
            return

        while current:
            if current.key == key:
                current.value = value
                return
            if current.next is None:
                break
            current = current.next

        current.next = Node(key, value)
        self.size += 1

    def search(self, key):
        index = self._hash(key)
        current = self.table[index]
        while current:
            if current.key == key:
                return current.value
            current = current.next
        raise KeyError(key)

    def remove(self, key):
        index = self._hash(key)
        current = self.table[index]
        prev = None

        while current:
            if current.key == key:
                if prev is None:
                    self.table[index] = current.next
                else:
                    prev.next = current.next
                self.size -= 1
                return  
            prev = current
            current = current.next

        raise KeyError(key)

    def __len__(self):
        return self.size

    def __contains__(self, key):
        try:
            self.search(key)
            return True
        except KeyError:
            return False

# Testing
if __name__ == '__main__':
    ht = HashTable(5)

    ht.insert("apple", 3)
    ht.insert("banana", 2)
    ht.insert("cherry", 5)

    print("apple" in ht)   # True
    print("durian" in ht)  # False

    print(ht.search("banana"))  # 2
    ht.insert("banana", 4)
    print(ht.search("banana"))  # 4

    ht.remove("apple")  
    print(len(ht)) 
