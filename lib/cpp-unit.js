var exec = require("child_process").exec;
var uuid = require("uuid");
var fs = require("fs");

/**
 * Extracts preprocessor directives from a file
 * with the 'cpp' command that's in your PATH.
 * @param {string} fileName - Absolute path to the input file.
 * @param {outputCallback} cb - function called with the output (codeText)
 * @param {string} outFile - An optional paramater that is assummed
 *  To be the corresponding preprocessed file, when provided
 *  Automatic preprocessing with 'cpp' is omitted.
 */
var clearPreprocessors = function(fileName, cb, outFile){
    var cppFileName = uuid.v1();
    var commandToExecute = "cpp" + " " + fileName + " " + cppFileName;
    if (outFile != null){
        clear_pp_portion(fileName, outFile, cb, false);
    }
    else{
        exec(commandToExecute, function(err, stdout, stderr){
            if(!err){
                clear_pp_portion(fileName, cppFileName, cb, true);
            }
            else{
                cb(err);
            }
        });
    }

    /**
     * Extracts preprocessor directives from an already
     * preprocessed file
     * @param {string} original - Absolute path to the unpreprocessed file.
     * @param {string} preprocessed - Absolute path the the coresseponding preprocessed file.
     * @param {outputCallback} cb - function called with the output (codeText)
     * @param {bool} delPreprocessed - delete (preprocessed) if true
     */
    function clear_pp_portion(original, preprocessed, cb, delPreprocessed){
        var line_reader = require('readline').createInterface({
            input: require('fs').createReadStream(preprocessed)
        });

        var on_off_flag = false;
        var list_of_lines = [];
        var code_text = "";
        var prev_line = "";
        var target_line_no = 0;
        var file_name_to_match = '"' + original + '"';

        line_reader.on('line', function (line) {
            var tokens = line.split(" ");
            if(tokens[0] === "#"){
                var line_no = parseInt(tokens[1]);
                var file_name = tokens[2];
                if(file_name === file_name_to_match){
                    on_off_flag = true;
                    target_line_no = line_no;
                }
                else{
                    if(on_off_flag === true){
                        list_of_lines.push("");
                    }
                    on_off_flag = false;
                }
            }
            else{
                if(on_off_flag === true){
                    if(target_line_no <= list_of_lines.length){
                        line = line.trim();
                        list_of_lines[target_line_no - 1] = list_of_lines[target_line_no - 1] + line;
                        target_line_no++;
                    }
                    else{
                        list_of_lines.push(line);
                        target_line_no++;
                    }
                }
            }

        });

        line_reader.on('close', function() {
            if (delPreprocessed){
                commandToExecute = "rm " + cppFileName;
                exec(commandToExecute, function(err, stdout, stderr){
                    cb(null, list_of_lines.join("\n")+"\n");
                });
            }
            else{
                cb(null, list_of_lines.join("\n")+"\n");
            }
        });
    }
}
module.exports.clearPreprocessors = clearPreprocessors;
