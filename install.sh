#!/bin/bash
#
# Be VERY Careful. This script may be executed with admin privileges.

echo "Openframe openFrameworks -- install.sh"

if ! [ -z "$TRAVIS" ]; then
    echo "TRAVIS env, don't install"
    exit 0
fi

# Some limited platform detection might be in order... though at present we're targeting the Pi
os=$(uname)
arq=$(uname -m)

if [ $os == "Linux" ]; then

    # on Debian Linux distributions
    # same for any debian disto

    # Do we want to lock this to a specific OF release rather than pulling from master?
    sudo bash -c "$(curl https://raw.githubusercontent.com/openframeworks/openFrameworks/master/scripts/linux/debian/install_dependencies.sh)"

    if [ $arq == "armv7l" ]; then
        # on RaspberryPi 2 or higher
        echo "armv7l"

        # ####
        #
        # FOR NOW, CODE GOES HERE since we're shooting for RPi support
        #
        # ####

    elif [ $arq == "armv6l" ]; then
        # on RaspberryPi 1 (A+, B+)
        echo "armv6l"

        # ####
        #
        # FOR NOW, CODE GOES HERE since we're shooting for RPi support
        #
        # ####

    else
        # Non-arm7 Debian...
        echo "non armv7l"
    fi

elif [ $os == "Darwin" ]; then
    # OSX
    echo "osx"
fi
