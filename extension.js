var fs = require('fs'),
    pjson = require('./package.json'),
    Extension = require('openframe-extension');

/**
 * Extension initialization method.
 *
 * Called when the extension (and its dependencies) have been installed.
 *
 * @param  {object} OF An interface provided to extensions giving limited access to the frame environment
 */

module.exports = new Extension({
    format: {
        // the name should be the same as the package name
        'name': pjson.name,
        // this is what might get displayed to users
        'display_name': 'openFrameworks',
        // does this type of artwork need to be downloaded to the frame?
        'download': true,
        // how do start this type of artwork? currently two token replacements, $filepath and $url
        'start_command': function(args, tokens) {
            // make sure the file is executable
            fs.chmodSync(tokens.$filepath, 755);
            // start command just executes the file ($filepath is absolute, includes leading slash)
            return '.$filepath';
        },
        // how do we stop this type of artwork?
        'end_command': 'sudo pkill -f $filename'
    }
});
