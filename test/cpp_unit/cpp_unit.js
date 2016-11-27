var fs = require("fs");
var async = require("async");
var assert = require("assert");
var expect = require("chai").expect;

describe("Tests for clearing preprocessors", function(){
    it("Should be able to require clearPreprocessors as function", function(){
        var clearPreprocessors = require("../../lib/cpp-unit.js").clearPreprocessors;
        assert(clearPreprocessors);
        assert(typeof(clearPreprocessors), "function");
    });
    it("Should successfully remove preprocessor from case_1.c file", function(done){
        var input_file = __dirname + "/cases/case_1.c";
        var output_file = __dirname + "/cases/case_1.c.pp";
        var clearPreprocessors = require("../../lib/cpp-unit.js").clearPreprocessors;
        async.parallel([
            function(read_output_file){
                fs.readFile(output_file, "utf-8", function(err, data){
                    if(err) read_output_file(err);
                    else read_output_file(null, data);
                });
            },
            function(perform_operation){
                clearPreprocessors(input_file, function(err, data){
                    if(err) perform_operation(err);
                    else perform_operation(null, data);
                });
            }
        ], function(err, results){
            if(err) done(err);
            else{
                console.log(results);
                var diff = require("diff");
                var d = diff.diffChars(results[0], results[1]);
                console.log(d);
                done(null);
            }
        });
        //assert(clearPreprocessors);
        //assert(typeof(clearPreprocessors), "function");
    });
});
