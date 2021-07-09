# Create a Python class called MathDojo that has one attribute, result, and 2 methods: add and subtract. The 2 methods each must take at least 1 parameter, but could take many more.
class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for x in nums:
            self.result += x
        return self

    def subtract(self, num, *nums):
        self.result -= num
        for x in nums:
            self.result -= x
        return self

# create an instance:


md = MathDojo()
# to test:
x = md.add(2).add(2, 5, 1).subtract(3, 2).result
print(x)  # should print 5
# run each of the methods a few more times and check the result!
