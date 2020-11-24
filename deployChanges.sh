#!/bin/bash
APP_HOST=langexchange.centralus.cloudapp.azure.com
CODE_TAR=east_us_code.tar.gz
SSH="ssh -i ~/.ssh/bb_key.pem azureuser@$APP_HOST"
echo "Compressing files for upload"
tar --exclude='./src/language-site/node_modules' --exclude='./src/language-site/dist' -cf $CODE_TAR ./src ./package.json
echo "Sending file to $APP_HOST"
scp  -i ~/.ssh/bb_key.pem $CODE_TAR azureuser@$APP_HOST:~

echo "Extracting file in Host"
$SSH tar -xf $CODE_TAR
echo "Installing node server dependencies"
$SSH npm install
echo "Installing angular dependencies"
$SSH "cd src/language-site && npm install"
echo "Building angular app"
$SSH "cd src/language-site && ng build --prod"


