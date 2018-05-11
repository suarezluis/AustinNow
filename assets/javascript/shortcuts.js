function shortcutOn() {
  $(document).keyup(function(event) {
    console.log(event.which);
    if (event.which === 89) {
      window.location = href = "https://www.youtube.com";
      console.log("Youtube");
    }
    if (event.which === 71) {
      window.location = href = "https://www.google.com";
      console.log("Google");
    }
    if (event.which === 82) {
      window.location = href = "https://www.reddit.com";
      console.log("Reddit");
    }
    if (event.which === 65) {
      window.location = href = "https://amzn.to/2rvgZOq";
      console.log("Amazon");
    }
    if (event.which === 70) {
      window.location = href = "https://www.facebook.com";
      console.log("Facebook");
    }
    if (event.which === 77) {
      window.location = href = "https://mail.google.com/mail";
      console.log("Gmail");
    }
    if (event.which === 73) {
      window.location = href = "https://www.instagram.com";
      console.log("Instagram");
    }
    if (event.which === 78) {
      window.location = href = "https://www.netflix.com";
      console.log("Netflix");
    }
    if (event.which === 87) {
      window.location = href = "https://www.wikipedia.org";
      console.log("Wikipedia");
    }
    if (event.which === 84) {
      window.location = href = "https://www.twitter.com";
      console.log("Twitter");
    }
    if (event.which === 83) {
      window.location = href = "https://www.spotify.com";
      console.log("Spotify");
    }
    if (event.which === 76) {
      window.location = href = "https://www.linkedin.com";
      console.log("LinkedIn");
    }
  });
}
