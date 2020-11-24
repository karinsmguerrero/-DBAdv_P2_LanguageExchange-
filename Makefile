WEST_HOST=langexchange.westus.cloudapp.azure.com
EAST_HOST=langexchange.eastus.cloudapp.azure.com
CENTRAL_HOST=langexchange.centralus.cloudapp.azure.com
W_SSH=ssh -i ~/.ssh/bb_key.pem azureuser@$(WEST_HOST)
E_SSH=ssh -i ~/.ssh/bb_key.pem azureuser@$(EAST_HOST)
C_SSH=ssh -i ~/.ssh/bb_key.pem azureuser@$(CENTRAL_HOST)
CODE_TAR=app.tar.gz


# .PHONY all

# all: east west central
default:
	echo "to install dependencies on the hosts run:"
	echo "make install_dependecies_<east/west/central>"
	echo "to deploy changes to a server use"
	echo "make <east/west/central>"


east:
	echo "Compressing files for upload"
	tar --exclude='./src/language-site/node_modules' --exclude='./src/language-site/dist' -cf $(CODE_TAR) ./src ./package.json
	echo "Sending file to $APP_HOST"
	scp  -i ~/.ssh/bb_key.pem $(CODE_TAR) azureuser@$(EAST_HOST):~
	rm $(CODE_TAR)
	echo "Extracting file in Host"
	$(E_SSH) tar -xf $(CODE_TAR)
	echo "Installing node server dependencies"
	$(E_SSH) npm install
	echo "Installing angular dependencies"
	$(E_SSH) "cd src/language-site && npm install"
	# echo "Building angular app"
	# $(E_SSH) "cd src/language-site && ng build --prod"

west:
	echo "Compressing files for upload"
	tar --exclude='./src/language-site/node_modules' --exclude='./src/language-site/dist' -cf $(CODE_TAR) ./src ./package.json
	echo "Sending file to $(WEST_HOST)"
	scp  -i ~/.ssh/bb_key.pem $(CODE_TAR) azureuser@$(WEST_HOST):~
	rm $(CODE_TAR)
	echo "Extracting file in Host"
	$(W_SSH) tar -xf $(CODE_TAR)
	echo "Installing node server dependencies"
	$(W_SSH) npm install
	echo "Installing angular dependencies"
	$(W_SSH) "cd src/language-site && npm install"
	# echo "Building angular app"
	# $(W_SSH) "cd src/language-site && ng build --prod"
central:
	echo "Compressing files for upload"
	tar --exclude='./src/language-site/node_modules' --exclude='./src/language-site/dist' -cf $(CODE_TAR) ./src ./package.json
	echo "Sending file to $(CENTRAL_HOST)"
	scp  -i ~/.ssh/bb_key.pem $(CODE_TAR) azureuser@$(CENTRAL_HOST):~
	rm $(CODE_TAR)
	echo "Extracting file in Host"
	$(C_SSH) tar -xf $(CODE_TAR)
	echo "Installing node server dependencies"
	$(C_SSH) npm install
	echo "Installing angular dependencies"
	$(C_SSH) "cd src/language-site && npm install"
	# echo "Building angular app"
	# $(C_SSH) "cd src/language-site && ng build --prod"


install_dependecies_west:
	$(W_SSH) sudo apt-get install -y npm
	$(W_SSH) sudo snap install node --classic --channel=14
	$(W_SSH) sudo npm install -g n
	$(W_SSH) sudo n stable
	$(W_SSH) sudo npm install -g @angular/cli

install_dependecies_east:
	$(E_SSH) sudo apt-get install -y npm
	$(E_SSH) sudo snap install node --classic --channel=14
	$(E_SSH) sudo npm install -g n
	$(E_SSH) sudo n stable
	$(E_SSH) sudo npm install -g @angular/cli

install_dependecies_central:
	$(C_SSH) sudo apt-get install -y npm
	$(C_SSH) sudo snap install node --classic --channel=14
	$(C_SSH) sudo npm install -g n
	$(C_SSH) sudo n stable
	$(C_SSH) sudo npm install -g @angular/cli
