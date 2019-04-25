from flask import Flask, request, Response, send_from_directory, jsonify
from flask_cors import CORS, cross_origin
import time
import os
import json
import re
import base64

app = Flask(__name__, static_url_path='/static')
cors = CORS(app, support_credentials=True, resources={r"/api/*": {"origins": "*"}})

# @app.route('/')
# @cross_origin(supports_credentials=True)
# def index():
#     return Response(open('getImage.html').read(), mimetype="text/html")

# save the image as a picture
@app.route('/studentIDSub', methods=['POST'])
@cross_origin(supports_credentials=True)
def image():
    image = request.form['data']  # get the image
    image = image.replace('data:image/jpeg;base64,', '')
    print(image)
    image_string = base64.b64decode(image)
    open('studentCard.jpg', 'wb').write(image_string)
    os.system("chmod u+x cloudVisionexe.sh")
    os.system("./cloudVisionexe.sh")
    input = open('results.json')
    datastore = json.load(input)
    jsonToSend = {}
    try:
        text = datastore['responses'][0]["fullTextAnnotation"]["text"]
    except:
        print('No text detected!')
        jsonToSend['studentUni'] = 'null'
        jsonToSend['studentID'] = 'null'
        return jsonify(jsonToSend)
    uniMelb = "THE UNIVERSITY OF" in text and "MELBOURNE" in text
    rmit = "RMIT" in text and "UNIVERSITY" in text
    trinity = "TRINITY COLLEGE" in text
    if (uniMelb == True and trinity == False) :
        r = re.findall(r'\n(\d{6})\n', text)
        r = str(r)
        r = r.replace('[\'', '')
        r = r.replace('\']', '')
        if (r == "[]"):
            print('Student is from UniMelb but student ID not detected!')
            jsonToSend['studentUni'] = 0
            jsonToSend['studentID'] = 'null'
            return jsonify(jsonToSend)
        print("Student ID is verified! Student Uni: UniMelb, ID Number: " + r)
        jsonToSend['studentUni'] = 0
        jsonToSend['studentID'] = r
        return jsonify(jsonToSend)
    elif (rmit == True and trinity == False):
        r = re.findall(r'(\d{7})\n', text)
        r = str(r)
        r = r.replace('[\'', '')
        r = r.replace('\']', '')
        
        if (r == "[]"):
            print('Student is from RMIT but student ID not detected!')
            jsonToSend['studentUni'] = 1
            jsonToSend['studentID'] = 'null'
            return jsonify(jsonToSend)
        r = r[0] + r[1] + r[2] + r[3]+ r[4] + r[5]+ r[6]
        print("Student ID is verified! Student Uni: RMIT, ID Number: " + r)
        jsonToSend['studentUni'] = 1
        jsonToSend['studentID'] = r
        return jsonify(jsonToSend)
    else:
        print('Not a valid student ID!')
        jsonToSend['studentUni'] = 'null'
        jsonToSend['studentID'] = 'null'
        return jsonify(jsonToSend)
    
@app.route('/getUsers', methods=['GET'])
@cross_origin(supports_credentials=True)
def getUsers():
    data = [
            {
                'sessionID': 1,
                'studentName':"Dave",
                'studentID':'483726',
                'studentUni' : 0,
                'requester': True,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:50:00'
            },
            {
                'sessionID': 1,
                'studentName':"Leon",
                'studentID':'4832726',
                'studentUni' : 1,
                'requester': True,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:00:00'
            },
            {
                'sessionID': 1,
                'studentName':"Leon",
                'studentID':'4833726',
                'studentUni' : 1,
                'requester': True,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:00:00'
            },
             {
                'sessionID': 1,
                'studentName':"Lol",
                'studentID':'483426',
                'studentUni' : 0,
                'requester': True,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:50:00'
            },
            {
                'sessionID': 1,
                'studentName':"Wow",
                'studentID':'824746',
                'studentUni' : 0,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:00:00'
            },
            {
                'sessionID': 1,
                'studentName':"Phillip",
                'studentID':'284716',
                'studentUni' : 0,
                'requester': True,
                'checkedIn': False,
                'verify': False, 
                'datetime': '00:00:00'
            }
            ]

    return jsonify(data)



if __name__ == '__main__':
    ## REPLACE KEY PATHS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    app.run(debug=True, host='0.0.0.0', ssl_context=('keys/server.crt', 'keys/server.key'))