var assert = require('assert'),
    fs = require('fs'),
    Extension = require('openframe-extension'),
    OpenFrameworksExtension = require('../extension');

describe('instantiation', function() {
    it('should be an instance of type Extension', function() {
        assert(OpenFrameworksExtension instanceof Extension);
    });
});

describe('properties', function() {
    it('should include all required format properties', function() {
        var format = OpenFrameworksExtension.props.format;

        assert(format.name);
        assert(typeof format.name === 'string');

        assert(format.display_name);
        assert(typeof format.display_name === 'string');

        assert(format.download !== undefined);
        assert(typeof format.download === 'boolean');

        assert(format.start_command);
        assert(typeof format.start_command === 'string' || typeof format.start_command === 'function');

        assert(format.end_command);
        assert(typeof format.end_command === 'string');
    });
});

describe('start_command', function() {
    var tokens = {
        $filepath: __dirname + '/test.sh'
    };

    before(function() {
        fs.chmodSync(tokens.$filepath, 777);
    });

    it('should return a string', function() {
        var format = OpenFrameworksExtension.props.format,
            command = format.start_command(null, tokens),
            expected = '.$filepath';

        assert(typeof command === 'string');
        assert.equal(command, expected);
    });

    it('should make the file specified by tokens.$filepath executable', function() {
        var format = OpenFrameworksExtension.props.format,
            expected = 100755,
            stats;

        // execute start command
        format.start_command(null, tokens);
        stats = fs.statSync(tokens.$filepath);

        console.log(stats.mode);

        assert.equal(parseInt(stats.mode.toString(8), 10), expected);
    });

});
