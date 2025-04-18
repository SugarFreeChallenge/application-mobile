.DEFAULT_GOAL := help
.SILENT:
.PHONY: check
check:
	@which npm > /dev/null || (echo "npm is not installed" && exit 1)
.env:
	if [ ! -f .env ]; then cp .env.example .env; fi

-include .env

## Colors
COLOR_RESET   = \033[0m
COLOR_INFO    = \033[32m
COLOR_COMMENT = \033[33m

## Display all available commands
help:
	printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	printf " make [command]\n\n"
	printf "${COLOR_COMMENT}Available commands:${COLOR_RESET}\n"
	awk '/^[a-zA-Z\-\_0-9\.@]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf " ${COLOR_INFO}%-16s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

## Initialize project (create .env file, build base image and local image)
init: .env build

## Pull translation files from tolgee
pull-translation:
	npx tolgee pull --api-url ${VITE_APP_TOLGEE_API_URL} --api-key ${VITE_APP_TOLGEE_API_KEY} --empty-dir --path ./i18n\