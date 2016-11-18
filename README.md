# node-c-lexer
Lexical analyzer library for C programming language in NodeJS

### Usage
There are two units in the library - preprocessing unit and lexical analyzing
unit. These two units can be used independently. Purpose of including
preprocessing unit within the library is so that user can remove the
preprocessor with it and then feed it to scanning unit to get token stream.

##### Preprocessing Unit
To use preprocessing unit C code needs to be resided in a file.
```js
var lexer = require("node-c-lexer");
lexer.cppUnit.clearPreprocessors("./a.c", function(err, codeText){
    if(err){
        /* Some error occured */
    }
    else{
        /* Do what you want to do with preprocessor free code text */
    }
});
```
The clearPreprocessors method by default invokes `cpp` on the first arguement,
producing an intermediate preprocessed file. It then finalizes the output by stripping
the output of the preprocessor from the intermediate file and passing it to your callback
as codeText.

If you already have preprocessed files (.ii) at hand, you can skip the preprocessing step
by passing the path to your preprocessed file as your last arguement.

A reason why would want to do something like this is if you, for instance, have a
separate environment on which your .ii(s) are generated(e.g preprocessed files are produced
within your windows bash environment). Or if your preprocessing pass diverges from
the execution of a simple 'cpp' command in general.
```js
var lexer = require("node-c-lexer");
lexer.cppUnit.clearPreprocessors("./a.c", function(err, codeText){
    if(err){
        /* Some error occured */
    }
    else{
        /* Do what you want to do with preprocessor free code text */
    }
}, "./a.ii");
```

##### Scanning Unit
```js
var lexer = require("node-c-lexer");
var tokenStream = lexer.lexUnit.tokenize(codeText);
/* Now do what you want with token stream */
```
Token stream is actually an array of tokens. Single token is a single javascript
object. Format of a single token is following
```js
{
    "lexeme": "func",
    "row": 5,
    "col": 3,
    "tokenClass": "IDENTIFIER",
    "keyword": False,
    "parent": null,
    "child": null
}
```
```parent``` and ```child```
these two are kept so that parse tree can be built using the tokens as nodes.
