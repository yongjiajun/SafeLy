
from flask import Flask
from flask import jsonify
from flask import abort
from flask import make_response
from flask import request
from flask import Flask, render_template
from flask_socketio import SocketIO


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

pairRequests = [
    {
        'id': 1,
        'sender': u'Jia Jun',
        'receiver': u'Austin', 
        'checkedIn': False,
        'verify': False,
        'datetime': "00:00:00"
    },
    {
        'id': 2,
        'sender': u'Linh',
        'receiver': u'Deevesh', 
        'checkedIn': False,
        'verify': False,
        'datetime': "00:00:00"
    }
]

@app.route('/')
def sessions():
    return render_template('session.html')

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: '+ str(json))
    socketio.emit('my response', json, callback=messageReceived)


@app.route('/safely/api/v1.0/pairRequests/<int:pairRequest_id>', methods=['GET'])
def get_pairRequest(pairRequest_id):
    pairRequest = [pairRequest for pairRequest in pairRequests if pairRequest['id'] == pairRequest_id]
    if len(pairRequest) == 0:
        abort(404)
    return jsonify({'pairRequest': pairRequest[0]})
    
   # return jsonify({'pairRequests': pairRequests})

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.route('/safely/api/v1.0/pairRequests', methods=['POST'])
def create_pairRequest():
    if not request.json or not 'sender' in request.json:
        abort(400)
    pairRequest = {
        'id': pairRequests[-1]['id'] + 1,
        'sender': request.json['sender'],
        'receiver': 'receiver',
        'checkedIn': False,
        'verify': False,
        'datetime': request.json.get('datetime', "")
    }   
    pairRequests.append(pairRequest)
    return jsonify({'pairRequest' : pairRequest}), 201

if __name__ == '__main__':
    socketio.run(app, debug=True)
