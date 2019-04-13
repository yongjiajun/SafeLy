class Student:
    verify = False
    def __init__(self, id, name, requester):
        self.id = id
        self.name = name
        self.requester = requester
        
    def switchStatus(self):
         if self.verify == True:
            self.verify = False
        else:
            self.verify = True
       
    
    def getSessionStatus(self):
        return self.verify
        




