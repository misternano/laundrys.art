// UPDATE AVATAR
const setAvatar = () => {
    fetch("https://api.lanyard.rest/v1/users/344973971638321162")
        .then((response) => response.json())
        .then((json) => {
            const avatarHash = json.data.discord_user.avatar;
            const url = `https://cdn.discordapp.com/avatars/344973971638321162/${avatarHash}.png`;
            $('#avatar').attr("src", url);
        });
}

$(document).ready(() => {
    setAvatar();
});