#!/usr/bin/env python3

import qrcode

LANDING_PAGE_URL = "https://linkhub.tcsch.com"

qr = qrcode.QRCode(

    version=1,

    error_correction=qrcode.constants.ERROR_CORRECT_L,

    box_size=10,

    border=2,

)

qr.add_data(LANDING_PAGE_URL)

qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

img.save("tcs_qr_code.png")

print(f"✓ QR code saved: tcs_qr_code.png")

print(f"✓ Points to: {LANDING_PAGE_URL}")
