// UPDATE AVATAR
const setAvatar = () => {
	fetch("https://api.lanyard.rest/v1/users/344973971638321162").then((response) => response.json()).then((json) => {
		const avatarHash = json.data.discord_user.avatar;
		const spotify = json.data.listening_to_spotify;
		const url = `https://cdn.discordapp.com/avatars/344973971638321162/${avatarHash}.png`;
		$("#avatar").attr("src", url);
		if (spotify) {
			$("#avatar").css("border-color", "#1fdf64");
		}
	});
}

$(document).ready(setAvatar());
