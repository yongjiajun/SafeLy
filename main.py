from Session import *
from Buddy import *
import time
'''
Created on 13 Apr. 2019

@author: dvshp

'''
def verify(request):
    num_verified = 0
    if request.guardRequested == False:
        verifyThresh = 2
    else:
        verifyThresh = 3
    
    if request.receiver.getSessionStatus() == True:
        num_verified += 1
    if request.sender.getSessionStatus() == True:
        num_verified += 1
    num_verified += verifyGuard(1234)
    
    print(request.sender.id)
    
def verifyGuard(guardID):
    if guardID in guardDict:
        return 1
    else:
        return 0

def removeStudent(ID1, ID2):
    studentDict.pop(ID1)
    studentDict.pop(ID2)
    return

def createSession(receiver, sender, sessionID, date, guardRequested):
    request = Session(receiver, sender, sessionID, date, guardRequested)
    sessionDict[sessionID] = request
    return


def addStudent(studentID, name):
    student = Buddy(studentID, name)
    studentDict[studentID] = student
    return

if __name__ == "__main__":
    sessionDict = {}
    studentDict = {}
    guardDict = {}
    
    #sample input
    #note need to find ID for date way to hash date
    data = [
        {
            'sessionId': 1,
            'studentid':'a',
            'requester': True
            'checkedIn': False,
            'verify': False, 
            'datetime': '00:00:00'
         },
         {
            'sessionId': 1,
            'studentId' : 'b',
            'checkedIn': False,
            'verify': False, 
            'datetime': '00:00:00'
         }
        
        ]
    for i in range (len(data)):
        addStudent(32242,data[i]['sender'])
        addStudent(32242,data[i]['receiver'])
        createSession(data[i]['receiver'], data[i]['sender'], data[i]['id'], data[i]['datetime'], data[i]['verify'])
        
        
        
        #for key,value in data[i].items():
         #   print(key)
          #  print(value)
    
    #test area
    guardRequested = False
    addStudent(123, "Judy")
    addStudent(456, "Chris")
    addStudent(789, "jack")
    createSession(studentDict[123], studentDict[456], "ID: 343434343", "12/02/19: 3:45:44", guardRequested)
    
    
    removeStudent(123,456)
    verify(sessionDict["ID: 343434343"])
    
    print(sessionDict)
    print(studentDict)
    #test area
