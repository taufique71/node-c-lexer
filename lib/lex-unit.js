var token_rules = require("./token-rules").token_rules;
var Lexer = require("lex");
var lexer = new Lexer;

var row = 1, col = 1;

var count = function(lexeme){
    for(var i = 0; i<lexeme.length; i++){
        if(lexeme[i] == '\n'){
            row = row + 1;
            col = 1;
        }
        else if(lexeme[i] == '\t'){
            col = col + (4 - (col % 4));
        }
        else{
            col = col + 1;
        }
    }
}

var tokenize = function(stream_of_text){
    row = 1; col = 1;
    var stream_of_tokens = [];
    lexer.addRule(token_rules["singleLineComment"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "COMMENT";
        token["keyword"] = false;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["multiLineComment"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "COMMENT";
        token["keyword"] = false;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["while"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "WHILE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });

    lexer.addRule(token_rules["while"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "WHILE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["volatile"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "VOLATILE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["void"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "VOID";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["unsigned"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNSIGNED";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["union"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNION";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["typedef"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "TYPEDEF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["switch"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SWITCH";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["struct"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STRUCT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["static"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STATIC";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["sizeof"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SIZEOF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["signed"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SIGNED";
        token["parent"] = null;
        token["keyword"] = true;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["short"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SHORT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["return"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RETURN";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["register"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "REGISTER";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["long"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LONG";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["int"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "INT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["if"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "IF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["goto"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "GOTO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["for"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "FOR";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["float"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "FLOAT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["extern"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "EXTERN";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["enum"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ENUM";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["else"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ELSE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["double"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DOUBLE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["do"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["default"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DEFAULT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["continue"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONTINUE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["const"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONST";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["char"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CHAR";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["case"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CASE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["break"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "BREAK";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["auto"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AUTO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["bool"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "BOOL";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["complex"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "COMPLEX";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["imaginary"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "IMAGINARY";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["inline"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "INLINE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["restrict"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RESTRICT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["identifier"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "IDENTIFIER";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["hexadecimal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["octal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["decimal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["char_literal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["floatWithoutPoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["floatWithNothingBeforePoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["floatWithNothingAfterPoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["string_literal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STRING_LITERAL";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["ellipsis"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ELLIPSIS";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["right_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RIGHT_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["left_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LEFT_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["add_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ADD_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["sub_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SUB_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["mul_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "MUL_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["div_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DIV_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["mod_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "MOD_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["and_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AND_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["xor_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "XOR_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["or_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "OR_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["right_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RIGHT_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["left_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LEFT_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["inc_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "INC_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["dec_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DEC_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["ptr_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "PTR_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["and_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AND_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["or_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "OR_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["le_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["ge_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "GE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["eq_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "EQ_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["ne_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "NE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules[";"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ";";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["{"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "{";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["}"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "}";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules[","], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ",";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules[":"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ":";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["="], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "=";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["("], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "(";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules[")"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ")";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["["], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "[";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["]"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "]";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["."], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ".";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["&"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "&";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["!"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "!";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["~"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "~";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["-"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "-";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["+"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "+";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["*"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "*";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["/"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "/";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["%"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "%";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["<"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "<";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules[">"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ">";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["^"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "^";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["|"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "|";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["?"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "?";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["whitespace"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "WHITESPACE";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(token_rules["unmatched"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNMATCHED";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });

    lexer.setInput(stream_of_text);
    var x = lexer.lex();
    while(x != undefined){
        if((x.tokenClass != "UNMATCHED") && (x.tokenClass != "WHITESPACE") && (x.tokenClass != "COMMENT")){
            stream_of_tokens.push(x);
        }
        x = lexer.lex();
    };
    return stream_of_tokens;
}
module.exports.tokenize = tokenize;
