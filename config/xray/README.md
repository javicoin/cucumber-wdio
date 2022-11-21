# Curl command to upload cucumber test results to XRay
curl -H "Content-Type: multipart/form-data" -X POST -F info=@multipart.config.json -F results=@results.json -H "Authorization: Bearer AUTH_TOKEN_VALUE" https://xray.cloud.getxray.app/api/v2/import/execution/cucumber/multipart


# Curl command to export (download) cucumber test features from XRay
#!/bin/bash

BASE_URL=https://xray.cloud.getxray.app
KEYS="XT-41"
token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" $BASE_URL/api/v1/authenticate| tr -d '"')
curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer $token" "$BASE_URL/api/v1/export/cucumber?keys=$KEYS" -o features.zip

rm -rf features/*.feature
unzip -o features.zip -d features

curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiI1NTViNzk5Yi1hOTU5LTMwZmEtYWNkYi0zMzUyNGYxNDhjMDgiLCJhY2NvdW50SWQiOiI2MzQ0MTY5OTNmNDIyNGE0NmRiMWY4YmMiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTY2NTQ4NjQ0OCwiZXhwIjoxNjY1NTcyODQ4LCJhdWQiOiJBNDFFMzJFMjk1MUE0NDlFODcwOUMwMTJCRjJBNkZGNyIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IkE0MUUzMkUyOTUxQTQ0OUU4NzA5QzAxMkJGMkE2RkY3In0.W9UtyQYm1WtEUVoTe0Dw70vl1IU0rwpwvC29Uk6skMM" "https://xray.cloud.getxray.app/api/v2/export/cucumber?filter=11413" -o features.zip


# Curl command to import (upload) cucumber test features to XRay
#!/bin/bash

BASE_URL=https://xray.cloud.getxray.app
PROJECT=XT

zip -r features.zip features/ -i \*.feature

token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" "$BASE_URL/api/v1/authenticate"| tr -d '"')
curl -H "Content-Type: multipart/form-data" -H "Authorization: Bearer $token"  -F "file=@features.zip" "$BASE_URL/api/v1/import/feature?projectKey=$PROJECT"

