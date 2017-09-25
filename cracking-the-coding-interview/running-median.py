#!/bin/python

import sys
from heapq import heappush as push, heappop as pop

class Median:
    firstHalf = []
    secondHalf = []
    
    
    def add(self, val):
        push(self.secondHalf, val)
        if (len(self.secondHalf) > len(self.firstHalf) + 1):
            push(self.firstHalf, -pop(self.secondHalf))
        
        if (len(self.firstHalf) and self.secondHalf[0] < -self.firstHalf[0]):
            push(self.firstHalf, -pop(self.secondHalf))
            
        if (len(self.secondHalf) + 1 < len(self.firstHalf)):
            push(self.secondHalf, -pop(self.firstHalf))
            
        return self.getMedian()
    
    def getMedian(self):
        #print("~~~~~~~~~~~~~~~~~~~")
        #print("firstHalf:" + ','.join([str(-i) for i in self.firstHalf]))
        #print("secondHalf:" + ','.join([str(i) for i in self.secondHalf]))
        if(len(self.secondHalf) > len(self.firstHalf)):
            return self.secondHalf[0];
        elif(len(self.secondHalf) < len(self.firstHalf)):
            return -self.firstHalf[0]
        else:
            return (self.secondHalf[0] + -self.firstHalf[0]) / 2.0

n = int(raw_input().strip())
a = []
a_i = 0

median = Median()

for a_i in xrange(n):
    a_t = int(raw_input().strip())
    a.append(a_t)
    median.add(a_t)
    print('%.1f'%median.getMedian())

    

    
