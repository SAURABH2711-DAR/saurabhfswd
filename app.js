// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const videoId = 'dQw4w9WgXcQ';
//         const YOUR_API_KEY = 'AIzaSyDXvphxAMVuOqXUlhwmA7I656sFcjSOQq4'; 
//         // const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUR_API_KEY}&part=snippet`;
//         const apiUrl = `https://www.youtube.com/watch?v=${videoId}&t=15s`   

//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         const videoTitle = data.items[0].snippet.title;
//         document.title = videoTitle; 

//         const videoContainer = document.getElementById('video-container');
//         videoContainer.innerHTML = `<iframe width="100%" height="100%" src="    " frameborder="0" allowfullscreen></iframe>`;
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('video-container').innerHTML = '<h2>Error loading the video</h2>';
//     }
// });

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
