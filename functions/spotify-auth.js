// functions/spotify-auth.js

exports.handler = async (event, context) => {
    const spotifyCode = event.queryStringParameters.code;
    const state = event.queryStringParameters.state;

    if (!spotifyCode) {
        return {
            statusCode: 400,
            body: "Faltó el código de autorización de Spotify."
        };
    }

    const localRedirectUri = `http://localhost:8888/callback?code=${spotifyCode}`; 

    return {
        statusCode: 302,
        headers: {
            Location: localRedirectUri,
        },
        body: ''
    };
};
