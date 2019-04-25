#!/usr/bin/env python3
from flask import Flask, render_template, send_from_directory, request, Response, abort
from flask_socketio import SocketIO
from flask_cors import CORS, cross_origin
from qrgenerator import qrgenerator
import json
import re
import base64
import time
import os
from Student import *
from Session import *


studentArray = []
sessionDict = {}
app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)
cors = CORS(app, support_credentials=True, resources={r"/api/*": {"origins": "*"}})


def createSession(sessionID, date, guardRequested):
    session = Session(sessionID, date, guardRequested)
    
    sessionDict[sessionID] = session
    return
    
def addMember(studentID, name, request, sessionID):
    student = Student(studentID, name, request)
    #print(student.verify)
    studentArray.append(student)
    sessionDict[sessionID].addStudent(student)
    
    return

def messageReceived(methods=['GET']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(jsonPassed, methods=['POST']):
    print('received my event: ' + str(jsonPassed))
    string = str(jsonPassed)
    print("$$$$$$$$$$")
    print(string)
    
    if ("message" in string):
        message = jsonPassed['message']
        print("#######")
        print(message)
        qrgenerator(message)
    else:
        print(string)
    
    socketio.emit('my response', jsonPassed, callback=messageReceived)

@socketio.on('add user')
def handle_add_event(jsonPassed, methods=['POST']):
    student = jsonPassed
    
    if student['sessionID'] not in sessionDict:
        createSession(student['sessionID'],student['datetime'], student['verify'])
        
    addMember(student['studentID'], student['studentName'], student['requester'], student['sessionID'])
    
    
    socketio.emit('refresh', jsonPassed)


def changeUser(jsonPassed, methods=['POST']):
    
    studentid = jsonPassed['studentId']
    # array = studentArray

    for s in studentArray:
        if student == s.id:
            if(s.verified == False):
                s.switchStatus()

    socketio.emit('refresh', studentArray) #send back all users.


    
@socketio.on('connect')
def handle_connect_event():
    for key in sessionDict:
        print(sessionDict[key].verified)
    socketio.emit('Start')
    
    
# @app.route('/safely/api/v1.0/pairRequests/<int:pairRequest_id>', methods=['GET'])
# def get_pairRequest(pairRequest_id):
#     pairRequest = [pairRequest for pairRequest in pairRequests if pairRequest['id'] == pairRequest_id]
#     if len(pairRequest) == 0:
#         abort(404)
#     # return jsonify({'pairRequest': pairRequest[0]})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0',port=5000)