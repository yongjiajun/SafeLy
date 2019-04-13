from Session import *
from Student import *

'''
Created on 13 Apr. 2019

@author: dvshp

'''

def createSession(sessionID, date, guardRequested):
    session = Session(sessionID, date, guardRequested)
    
    sessionDict[sessionID] = session
    return

def addMember(studentID, name, request, sessionID):
    student = Student(studentID, name, request)
    #print(student.verify)
    sessionDict[sessionID].addStudent(student)
    return

if __name__ == "__main__":
    sessionDict = {}
    studentDict = {}
    guardDict = {}
    
    #sample input
    data = [
        {
            'sessionID': 1,
            'studentName':"Dave",
            'studentID':'a',
            'requester': True,
            'checkedIn': False,
            'verify': False, 
            'datetime': '00:50:00'
         },
         {
            'sessionID': 1,
             'studentName':"Leon",
            'studentID':'b',
            'requester': True,
            'checkedIn': False,
            'verify': False, 
            'datetime': '00:00:00'
         },
         {
            'sessionID': 1,
             'studentName':"Leon",
            'studentID':'c',
            'requester': True,
            'checkedIn': False,
            'verify': False, 
            'datetime': '00:00:00'
         }
        
        ]
    
    for i in range (len(data)):
        if data[i]['sessionID'] not in sessionDict:
            createSession(data[i]['sessionID'],data[i]['datetime'], data[i]['verify'])
        
        addMember(data[i]['studentID'], data[i]['studentName'], data[i]['requester'], data[i]['sessionID'] )
        
        createSession(3,data[i]['datetime'], data[i]['verify'])
        
        
    print(sessionDict[1].studentArray[2].id)
        
        #for key,value in data[i].items():
         #   print(key)
          #  print(value)
    
    #test area


    
    #test area
