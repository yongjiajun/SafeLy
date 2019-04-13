#!/usr/bin/env python3
from flask import Flask, render_template
from flask_socketio import SocketIO
from flask import abort
from qrgenerator import qrgenerator
import json

app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

@app.route('/')
def sessions():
    return render_template('session.html')

def messageReceived(methods=['GET']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(jsonPassed, methods=['POST']):
    print('received my event: ' + str(jsonPassed))
    string = str(jsonPassed)
    
    if ("message" in string):
        message = jsonPassed['message']
        print(message)
        qrgenerator(message)
    else:
        print(string)
    
    socketio.emit('my response', jsonPassed, callback=messageReceived)


# @app.route('/safely/api/v1.0/pairRequests/<int:pairRequest_id>', methods=['GET'])
# def get_pairRequest(pairRequest_id):
#     pairRequest = [pairRequest for pairRequest in pairRequests if pairRequest['id'] == pairRequest_id]
#     if len(pairRequest) == 0:
#         abort(404)
#     # return jsonify({'pairRequest': pairRequest[0]})

if __name__ == '__main__':
    
    socketio.run(app, host='0.0.0.0')