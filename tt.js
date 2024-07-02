const newUrl = new URL('https://www.youtube.com/watch?v=bIMk6iaPOBE');
let videoId;

if (newUrl?.host.includes('youtube.com')) {
    videoId = newUrl.searchParams.get('v');
} else if (newUrl?.host.includes('youtu.be')) {
    videoId = newUrl.pathname.replace('/', '');
}