from Student import *

class Session:
    totalVerified = 0
    guardVerified =  False
    verified = False
    studentArray = []
    def __init__(self, sessionID, date, guardRequested):
        self.sessionID = sessionID
        self.date = date
        self.guardRequested = guardRequested
        
    def switchStatus(self):
        if self.verified == True:
            self.verified = False
        else:
            self.verified = True
    
    def getStudent(self,student):
        for i in range(len(self.studentArray)):
            if self.studentArray[i] == student:
                return student
            
    def addStudent(self,student):
        self.studentArray.append(student)
        
    def getSessionStatus(self):
        
        
        return self.verified
    
    def verifyStudent(self, studentID):
        
        if self.studentArray[studentID].getVerifiedStatus() == False:
            self.studentArray[studentID].switchStatus
            self.totalVerified +=1 
            self.verifySession()
     
        
    def verifyGuard (self):
        self.guardVerified = True
        self.verifySession()
       
    def verifySession(self):
        if self.guardRequested == True:
            if self.guardVerified == False:
                return
        
        if self.totalVerified == len(self.studentArray):
            self.verified = True       