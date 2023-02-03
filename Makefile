.PHONY: help sync watch_sync init

help:
	@echo ''
	@echo 'Usage:'
	@echo '	make <target>'
	@echo ''
	@echo 'Targets:'
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
#	@$(SHELL) sync.sh $(i) $(o)

ide:  	## run ide container
	@cd dev; bash ide.sh; cd ..
