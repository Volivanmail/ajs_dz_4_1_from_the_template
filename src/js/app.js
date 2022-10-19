export default function healthLevel(data) {
  let level;
  if (data.health >= 50) {
    level = 'healthy';
  } else if (data.health < 15) {
    level = 'critical';
  } else {
    level = 'wounded';
  }
  return level;
}
