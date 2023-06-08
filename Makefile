all: install package
.PHONY: all

install:
	npm install

package:
	vsce package

clean:
	rm -r ./gpt-code-enhance-*.vsix
