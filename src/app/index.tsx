import * as React from 'react';
import { PlayerConfiguration, THEOplayer, THEOplayerView } from 'react-native-theoplayer';

export default ({ style, source }) => {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsVisible(false)
        }, 3000);
    }, [])



    const onPlayerReady = (player: THEOplayer) => {
        player.source = {
            sources: [
                {
                    src: "https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8",
                    type: "application/x-mpegurl"
                },
            ],
        };
        player.autoplay = true;
    }

    const config: PlayerConfiguration = {
        chromeless: true,
        startsAutomatically: true,
        libraryLocation: 'theoplayer',
        mediaControl: {
            mediaSessionEnabled: true,
        },
    };

    const playerStyles = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
        width: 500,
        height: 500,
    };

    if (!isVisible) return null;

    return <THEOplayerView config={config} onPlayerReady={onPlayerReady} style={playerStyles} />;
};