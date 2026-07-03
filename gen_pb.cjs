const lat = 37.608287;
const lng = -0.781225;

function toDMS(deg, isLat) {
  const d = Math.floor(Math.abs(deg));
  const minFloat = (Math.abs(deg) - d) * 60;
  const m = Math.floor(minFloat);
  const s = ((minFloat - m) * 60).toFixed(1);
  const dir = isLat ? (deg >= 0 ? 'N' : 'S') : (deg >= 0 ? 'E' : 'W');
  return `${d}°${m}'${s}"${dir}`;
}

const dms = toDMS(lat, true) + ' ' + toDMS(lng, false);
const b64 = Buffer.from(dms).toString('base64');
console.log('DMS:', dms);
console.log('B64:', b64);

const pb = `!1m18!1m12!1m3!1d3150.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${b64}!5e0!3m2!1ses!2ses!4v1`;
console.log('PB:', pb);
