//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
// "original"

export default function ImgCrc(path, size = "original") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
