# Enter your code here. Read input from STDIN. Print output to STDOUT
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score
        
    def __repr__(self):
        print(self.name + ' ' + self.score)
        
    def comparator(a, b):
        # if A's score is greater than b's score keep A on left
        if a.score > b.score:
            return -1
        # if A's score is less than b's score move A to right
        elif a.score < b.score:
            return 1
        else:
            # if A's name is before b's then keep A on left
            if a.name < b.name:
                return -1
            # if A's name is after b's then move A's name to right
            elif a.name > b.name:
                return 1
        return 0