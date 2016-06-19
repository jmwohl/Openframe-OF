# Openframe Video

[![Build Status](https://travis-ci.org/OpenframeProject/Openframe-Video.svg?branch=master)](https://travis-ci.org/OpenframeProject/Openframe-Video) [![Coverage Status](https://coveralls.io/repos/github/OpenframeProject/Openframe-Video/badge.svg?branch=master)](https://coveralls.io/github/OpenframeProject/Openframe-Video?branch=master)

An Openframe format extension which enables display of downloadable videos via omxplayer.

For info on developing your own extensions, see the [Openframe-Extension](https://github.com/OpenframeProject/Openframe-Extension) repo.

### Video settings

Videos are played using [omxplayer](http://elinux.org/Omxplayer). **By default, videos will fill the screen (cropping may occur) and will loop.**

Artworks can pass arguments to omxplayer using the Artwork object's `config` property. Probably the most useful config argument is `--aspect-mode`, which allows an artwork to specify how it should size itself within the display.

```javascript
// an example Artwork object with config
{
    "title": "Test Video",
    "is_public": false,
    "url": "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_2mb.mp4",
    "thumb_url": "",
    "author_name": "Test",
    "plugins": {},
    "format": "openframe-video",
    "liked": false,
    "id": "571b91b8507bfb8922c89aad",
    "ownerId": "56c4802c30eda27c7a0de423",
    "created": "2016-04-23T15:16:08.870Z",
    "modified": "2016-04-23T15:16:08.870Z",
    "config": {
        // available options for --aspect-mode are:
        // fill: (default) cover entire screen, cropping video
        // fit: contain entire video within the screen, no cropping but black boxes
        // stretch: warp the video to fill the screen
        "--aspect-mode": "fit"
    }
}
```