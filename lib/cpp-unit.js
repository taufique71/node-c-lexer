var exec = require("child_process").exec;
var uuid = require("uuid");
var fs = require("fs");

/**
 * Extracts preprocessor directives from a file
 * with the 'cpp' command that's in your PATH.
 * @param {string} file_name - Absolute path to the input file.
 * @param {object} options - JSON object containing options for preprocessor
 *  removal.
 * @param {outputCallback} cb - function called with the output (codeText)
 */
var clear_preprocessors = function(file_name, options, cb){
    // Setting up preprocessor removal options from user given options.
    if(options){
        if(options.expand === null) options.expand = true;
        else if(options.expand === false){
            if(options.original_file_name === null){
                options.original_file_name = file_name;
            }
        }
    }
    else{
        options = {};
        options.expand = true;
    }

    if(options.expand){
        var cpp_file_name = uuid.v1();
        var command_to_execute = "cpp" + " " + file_name + " " + cpp_file_name;
        exec(command_to_execute, function(err, stdout, stderr){
            if(!err){
                clear_pp_portion(file_name, cpp_file_name, cb, true);
            }
            else{
                cb(err);
            }
        });
    }
    else{
        clear_pp_portion(file_name, options.original_file_name, cb, false);
    }

    /**
     * Extracts preprocessor directives from an already
     * preprocessed file
     * @param {string} original - Absolute path to the unpreprocessed file.
     * @param {string} preprocessed - Absolute path the the coresseponding preprocessed file.
     * @param {outputCallback} cb - function called with the output (codeText)
     * @param {bool} del_preprocessed - delete (preprocessed) if true
     */
    function clear_pp_portion(original, preprocessed, cb, del_preprocessed){
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
            if (del_preprocessed){
                command_to_execute = "rm " + cpp_file_name;
                exec(command_to_execute, function(err, stdout, stderr){
                    cb(null, list_of_lines.join("\n")+"\n");
                });
            }
            else{
                cb(null, list_of_lines.join("\n")+"\n");
            }
        });
    }
}
module.exports.clear_preprocessors = clear_preprocessors;
