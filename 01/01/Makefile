all: hello.js hello-err.js

hello.js:
	tsc hello.ts --noEmitOnError

hello-err.js:
	tsc hello-err.ts --noEmitOnError
clean:
	rm -f *.js

