// import {
//   getAccessToken,
//   getCurrentTrack,
//   getLastPlayedTrack,
//   getTrack,
//   getTopTracks,
//   getPlaylist,
//   getAlbumDetails,
// } from "@/app/lib/spotify";

// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// export async function GET() {
//   const accessToken = await getAccessToken();
//   const track = await getCurrentTrack(accessToken);
//   const lastTrack = await getLastPlayedTrack(accessToken);
//   // const topTracks = await getTopTracks(accessToken);

//   const id = track ? track.item.id : null;
//   const trackId = await getTrack(accessToken, id);

//   const playlist_id = track
//     ? track.context.href
//     : lastTrack.items[0].context.href;
//   const playlist = await getPlaylist(accessToken, playlist_id);

//   const album_id = track
//     ? track.item.album.href
//     : lastTrack.items[0].track.album.href;
//   const album = await getAlbumDetails(accessToken, album_id);

//   const result = playlist ? playlist : album;

//   if (!accessToken)
//     return NextResponse.json(
//       {
//         error: "Error fetching access_token from Spotify",
//       },
//       { status: 500 }
//     );

//   if (track)
//     if (trackId)
//       return NextResponse.json({
//         id: track.item.id,
//         name: track.item.name,
//         artists: track.item.artists.map((artist) => {
//           return { name: artist.name, href: artist.external_urls.spotify };
//         }),
//         href: track.item.external_urls.spotify,
//         albumArt: track.item.album.images[0],
//         playlistName: result.name,
//         playlistHref: result.external_urls.spotify,
//         currentlyPlaying: true,
//       });

//   if (lastTrack)
//     return NextResponse.json({
//       name: lastTrack.items[0].track.name,
//       artists: lastTrack.items[0].track.artists.map((artist) => {
//         return {
//           name: artist.name,
//           href: artist.external_urls.spotify,
//         };
//       }),
//       href: lastTrack.items[0].track.external_urls.spotify,
//       albumArt: lastTrack.items[0].track.album.images[0],
//       playlistName: result.name,
//       playlistHref: lastTrack.items[0].track.album.external_urls.spotify,
//       currentlyPlaying: false,
//     });

//   return NextResponse.json(
//     {
//       error: "Error fetching data from Spotify",
//     },
//     { status: 500 }
//   );
// }


// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'post',
    headers: {
      Authorization: 'Basic NWIwMDYzZTdhNmY2NDI2Y2EyNDZkMzM3NGViNDIwYTY6NTgzZDgwOTI0MDA0NGJkYjhmZTBjZjhjZTVhNjllZWI=',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: 'AQDYcw4s_MCRSJ286nVrPqIpc5SJ9fJKZ8eo-aJqh5KDo1DVGA0vLVwULuFXIY-AKEJOAVuKK5gDI3x7qi_nSlu1_6g-xWrNv0zcdyyvziGwVx5cHTe_1-zo6z6C-hTP64g',
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    method: "get",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  const response = await getNowPlaying();

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.data.currently_playing_type !== 'track'
  ) {
    return res.status(200).json({ isPlaying: false });
  }

  const data = {
    isPlaying: response.data.is_playing,
    title: response.data.item.name,
    album: response.data.item.album.name,
    artist: response.data.item.album.artists
      .map((artist) => artist.name)
      .join(', '),
    albumImageUrl: response.data.item.album.images[0].url,
    songUrl: response.data.item.external_urls.spotify,
  };

  res.status(200).json(data);
};