import qrcode
import datetime


class qrgenerator:

        def __init__(self, sender):
                qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_H,
                box_size=10,
                border=4,
                )

                currentDT = datetime.datetime.now()
                print(str(currentDT))
                data = "{ 'id': 1, 'sender':" + sender + "'receiver': '' ,'checkedIn': False,'verify': False, 'datetime': str(currentDT) } "

                qr.add_data(data)
                qr.make(fit=True)

                img = qr.make_image()

                img.save("./static/"+ sender +"QRcode.jpg")
