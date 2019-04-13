import qrcode

qr = qrcode.QRCode(
        version = 1,
        error_correction = qrcode.constants.ERROR_CORRECT_H,
        box_size = 10,
        border = 4,
)

data = "The data we need store baby in ze QR Code" 

qr.add_data(data)
qr.make(fit=True)

img = qr.make_image()

img.save("image.jpg")

