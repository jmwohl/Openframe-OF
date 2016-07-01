# Openframe-OF

[![Build Status](https://travis-ci.org/jmwohl/Openframe-OF.svg?branch=master)](https://travis-ci.org/jmwohl/Openframe-OF) [![Coverage Status](https://coveralls.io/repos/github/jmwohl/Openframe-OF/badge.svg?branch=master)](https://coveralls.io/github/jmwohl/Openframe-OF?branch=master)

An Openframe format extension which runs openFrameworks executables built for the RPi (arm).

### Installing

To install, log into the Pi where you have Openframe installed, and run:

```
$ openframe -i openframe-of
```

This will install the extension on your current frame.

> NOTE: The installation takes a super long time, on the order of an hour. This is because it is installing all of the dependencies for openFrameworks. Be patient... it only needs to happen once.

### Usage

The extension expects the file available at the artwork URL to be an openFrameworks executable compiled for the Raspberry Pi. For more info about developing openFrameworks projects for the Raspberry Pi, see the [great documentation on the openFrameworks site](http://openframeworks.cc/setup/raspberrypi/).

Once you have a compiled openFrameworks executable, add an Artwork to your [openframe.io](http://openframe.io) account, selecting the 'Other' Artwork format and entering 'openframe-of' in the field.

Any artwork listed with the format 'OF' should work (assuming the poster of the work tested it!).

### How it works

It's really simple. Since openFrameworks compiles to an executable, we just need to download the file, make sure it's executable, and run it. The important thing that this extension does is install the openFrameworks dependencies.

### Potential issues?

I'm not totally sure how OFX addons will work. I think some addons include dependencies, while others might require additional dependencies to be installed on the Pi. This will take some testing and some input from someone more familiar with openFrameworks than myself.

--

For info on developing your own extensions, see the [Openframe-Extension](https://github.com/jmwohl/Openframe-Extension) repo.
