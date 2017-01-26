var fs = require("fs");
var diff = require("diff");
var async = require("async");
var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();

describe("Tests for lexing unit", function(){
    it("Should be able to require tokenize as function", function(){
        var tokenize = require("../../lib/lex-unit.js").tokenize;
        assert(tokenize);
        assert(typeof(tokenize), "function");
    });
    it("case_1 should have 9 tokens", function(done){
        var input_file = __dirname + "/cases/case_1.c.pp";
        var tokenize = require("../../lib/lex-unit.js").tokenize;
        fs.readFile(input_file, "utf-8", function(err, code_text){
            if(err) done(err);
            else{
                var tokens = tokenize(code_text);
                assert.equal(tokens.length, 9);
                done();
            }
        });
    });
    it("case_2 should have 15 tokens", function(done){
        var input_file = __dirname + "/cases/case_2.c.pp";
        var tokenize = require("../../lib/lex-unit.js").tokenize;
        fs.readFile(input_file, "utf-8", function(err, code_text){
            if(err) done(err);
            else{
                var tokens = tokenize(code_text);
                assert.equal(tokens.length, 15);
                done();
            }
        });
    });
    it("case_3 should have 63 tokens", function(done){
        var input_file = __dirname + "/cases/case_3.c.pp";
        var tokenize = require("../../lib/lex-unit.js").tokenize;
        fs.readFile(input_file, "utf-8", function(err, code_text){
            if(err) done(err);
            else{
                var tokens = tokenize(code_text);
                assert.equal(tokens.length, 63);
                done();
            }
        });
    });
    it("case_4 should have 63 tokens", function(done){
        var input_file = __dirname + "/cases/case_4.c.pp";
        var tokenize = require("../../lib/lex-unit.js").tokenize;
        fs.readFile(input_file, "utf-8", function(err, code_text){
            if(err) done(err);
            else{
                var tokens = tokenize(code_text);
                assert.equal(tokens.length, 63);
                done();
            }
        });
    });
});
