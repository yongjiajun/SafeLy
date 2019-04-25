#!/bin/bash

gsutil cp studentCard.jpg gs://ocr-image-safely
gcloud ml vision detect-text "gs://ocr-image-safely/studentCard.jpg" > results.json