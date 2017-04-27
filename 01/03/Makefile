all: src/hello.js
	node src/hello.js

src/hello.js:
	tsc --rootDir ts --outDir src ts/hello.ts

clean:
	rm -rf src/fn
	rm src/*.js
