export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://hype-week.web.app/";
const clientId = "b777c816ddfe4771a32d19dda18d10b2";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming", 
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;