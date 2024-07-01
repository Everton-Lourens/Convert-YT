const formatUrlToDownload = (data) => {
  if (data?.hasOwnProperty('link')) {
    return data;
  }
  else if (data?.formats[0]?.hasOwnProperty('url')) {
    data.link = data.formats[0].url;
    return data;
  } else {
    return null;
  }
};

export async function getUrlYoutubeMusicDownloadWithId(urlInput) {
  const newUrl = new URL(urlInput);
  const videoId = newUrl.searchParams.get('v');
  if (!videoId) return null;
  const apiUrl = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY_RAPIDAPI, // API KEY HERE
      'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(apiUrl, options);
    return formatUrlToDownload(await response.json());
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUrlYoutubeVideoDownloadWithId(urlInput) {
  const newUrl = new URL(urlInput);
  const videoId = newUrl.searchParams.get('v');
  if (!videoId) return null;
  const apiUrl = `https://yt-api.p.rapidapi.com/dl?id=${videoId}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY_RAPIDAPI, // API KEY HERE
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(apiUrl, options);
    return formatUrlToDownload(await response.json());
  } catch (error) {
    console.error(error);
    return null;
  }
}
