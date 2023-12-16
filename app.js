const videoId = "dQw4w9WgXcQ"; // Replace with your actual video ID

function displayVideo() {
  const url = `https://www.youtube.com/embed/${videoId}&key=AIzaSyDXvphxAMVuOqXUlhwmA7I656sFcjSOQq4`;
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.width = "640"; // Adjust width as desired
  iframe.height = "360"; // Adjust height as desired
  iframe.frameBorder = 0;
  iframe.allowfullscreen = true;
  const playerElement = document.getElementById("player");
  playerElement.appendChild(iframe);
}

window.onload = displayVideo;
