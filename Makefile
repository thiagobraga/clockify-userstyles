PWD := $(shell pwd)
PATH := ${PWD}/node_modules/.bin:$(PATH)
.SILENT: clean install build release watch
all: install build watch

clean:
	/bin/rm -rf node_modules

install:
	[ ! -f yarn.lock ] || [ -d node_modules ] && yarn && exit
	[ -f yarn.lock ] && [ -d node_modules ] && echo 'Already installed' && exit

build:
	stylus src/styles -o theme.css
	css2userstyle --no-userscript theme.css
	rm -f theme.css

release:
	stylus src/styles -o theme.css && \
		postcss theme.css --use autoprefixer --replace --no-map && \
		css2userstyle --no-userscript theme.css && \
		rm -f theme.css

watch:
	chokidar src/styles -c 'make -s build'
