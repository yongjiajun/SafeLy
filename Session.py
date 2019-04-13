from Buddy import *
verified = False

class Session:
    
    def __init__(self, student1, student2, sessionID, date, guardRequested):
        self.receiver = student1
        self.sender = student2
        self.sessionID = sessionID
        self.date = date
        self.guardRequested = guardRequested
        
    def switchStatus(self):
        if self.verified == True:
            self.verified = False
        else:
            self.verified = True
    
    

    def getSessionStatus(self):
        return self.verified