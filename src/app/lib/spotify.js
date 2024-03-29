"use server";

export const getAccessToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "5b0063e7a6f6426ca246d3374eb420a6");
  urlencoded.append(
    "client_secret", "957c4387b7df40e9b95268dc03eb1c03"
  );
  // urlencoded.append(
  //   "refresh_token",
  //   "BQD0xuMHUHMQO0qs9Yit5iQxMRXvFfLXtqcPCWc0-DbZFAjwHvCqIcFtjgXEbzuP2cNHiM686z347AZKTtZ_Uj8f_rJhCubykhDJdCVWZ50OlFGn9To"
  // );

  const requestOptions = {
    method: "POST",
    headers: {
      "Authorization": "Basic NWIwMDYzZTdhNmY2NDI2Y2EyNDZkMzM3NGViNDIwYTY6NTgzZDgwOTI0MDA0NGJkYjhmZTBjZjhjZTVhNjllZWI=",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: {
      "grant_type": "refresh_token",
      "refresh_token": "AQDYcw4s_MCRSJ286nVrPqIpc5SJ9fJKZ8eo-aJqh5KDo1DVGA0vLVwULuFXIY-AKEJOAVuKK5gDI3x7qi_nSlu1_6g-xWrNv0zcdyyvziGwVx5cHTe_1-zo6z6C-hTP64g"
    },
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token", {
      method: "POST",
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: "AQDYcw4s_MCRSJ286nVrPqIpc5SJ9fJKZ8eo-aJqh5KDo1DVGA0vLVwULuFXIY-AKEJOAVuKK5gDI3x7qi_nSlu1_6g-xWrNv0zcdyyvziGwVx5cHTe_1-zo6z6C-hTP64g"
      }),
      headers: {
        "Authorization": "Basic NWIwMDYzZTdhNmY2NDI2Y2EyNDZkMzM3NGViNDIwYTY6NTgzZDgwOTI0MDA0NGJkYjhmZTBjZjhjZTVhNjllZWI=",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    );
    const data = await response.json();
    console.log(data)
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export async function getCurrentTrack(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 0 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getLastPlayedTrack(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getTrack(accessToken, id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${id}`,
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getTopTracks(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getPlaylist(accessToken, playlist_id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(`${playlist_id}`, requestOptions);

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getAlbumDetails(accessToken, album_id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(`${album_id}`, requestOptions);

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}
