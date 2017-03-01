var fs = require("fs");
var diff = require("diff");
var async = require("async");
var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();

describe("Tests for preprocessor removal unit", function(){
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
                var d = diff.diffChars(results[0], results[1]);
                assert.equal(d.length, 1);
                done(null);
            }
        });
    });
    it("Should successfully remove preprocessor from case_2.c file", function(done){
        var input_file = __dirname + "/cases/case_2.c";
        var output_file = __dirname + "/cases/case_2.c.pp";
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
                var d = diff.diffChars(results[0], results[1]);
                assert.equal(d.length, 1);
                done(null);
            }
        });
    });
    it("Should successfully remove preprocessor from case_3.c file", function(done){
        var input_file = __dirname + "/cases/case_3.c";
        var output_file = __dirname + "/cases/case_3.c.pp";
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
                var d = diff.diffChars(results[0], results[1]);
                assert.equal(d.length, 1);
                done(null);
            }
        });
    });
    it("Should successfully remove preprocessor from case_4.c file", function(done){
        var input_file = __dirname + "/cases/case_4.c";
        var output_file = __dirname + "/cases/case_4.c.pp";
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
                var d = diff.diffChars(results[0], results[1]);
                assert.equal(d.length, 1);
                done(null);
            }
        });
    });
});
