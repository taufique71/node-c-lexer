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
        clearPPportion(fileName, outFile, cb, false);
    }
    else{
        exec(commandToExecute, function(err, stdout, stderr){
            if(!err){
                clearPPportion(fileName, cppFileName, cb, true);
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
    function clearPPportion(original, preprocessed, cb, delPreprocessed){
        var cppFileName = preprocessed;
        var fileName = original;
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(cppFileName)
        });

        var onOffFlag = false;
        var listOfLines = [];
        var codeText = "";
        var prevLine = "";
        var currentMainFileLine = 0;
        var currentlyReadLine = 0;
        var currentlyWrittenLine = 0;

        lineReader.on('line', function (line) {
            currentlyReadLine += 1;
            var tokens = line.split(" ");
            if(tokens[0] == "#"){
                var fileNameToMatch = '"' + fileName + '"';
                if((tokens[2] == fileNameToMatch)){
                    onOffFlag = true;
                    currentMainFileLine = parseInt(tokens[1]);
                    if((currentMainFileLine - currentlyWrittenLine) >= 2){
                        listOfLines.push("");
                        currentlyWrittenLine += 1;
                    }
                    else if(currentMainFileLine <= currentlyWrittenLine){
                        listOfLines.pop();
                        currentlyWrittenLine -= 1;
                    }
                }
                else{
                    onOffFlag = false;
                }
            }
            else if(onOffFlag){
                listOfLines.push(line);
                currentlyWrittenLine += 1;
            }
            prevLine = line;
        });

        lineReader.on('close', function() {
            if (delPreprocessed){
                commandToExecute = "rm " + cppFileName;
                exec(commandToExecute, function(err, stdout, stderr){
                    cb(null, listOfLines.join("\n"));
                });
            }
            else{
                cb(null, listOfLines.join("\n"));
            }
        });
    }
}
module.exports.clearPreprocessors = clearPreprocessors;
