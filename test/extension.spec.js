var assert = require('assert'),
    Extension = require('openframe-extension'),
    VideoExtension = require('../extension');

describe('instantiation', function() {
    it('should be an instance of type Extension', function() {
        assert(VideoExtension instanceof Extension);
    });
});

describe('properties', function() {
    it('should include all required format properties', function() {
        var format = VideoExtension.props.format;

        assert(format.name);
        assert(typeof format.name === 'string');

        assert(format.display_name);
        assert(typeof format.display_name === 'string');

        assert(format.download !== undefined);
        assert(typeof format.download === 'boolean');

        assert(format.start_command);
        assert(typeof format.start_command === 'string' || typeof format.start_command === 'function');

        if (typeof format.start_command === 'function') {
            assert(typeof format.start_command() === 'string');
        }

        assert(format.end_command);
        assert(typeof format.end_command === 'string');
    });

    it('should pass arguments to start_command', function() {
        var format = VideoExtension.props.format,
            config = {
                '--aspect-mode': 'fit'
            },
            command = format.start_command(config),
            expected = 'omxplayer --loop --aspect-mode fit -b $filepath';

        assert(typeof command === 'string');
        assert.equal(command, expected);
    });

    it('should override default arguments in start_command', function() {
        var format = VideoExtension.props.format,
            config = {
                '--loop': false
            },
            command = format.start_command(config),
            expected = 'omxplayer --aspect-mode fill -b $filepath';

        assert(typeof command === 'string');
        assert.equal(command, expected);
    });

});
