export default function getCookieExpires() {
  const today = new Date();
  const todayTime = today.getTime();
  const expiresTime = 1000 * 60 * 60 * 24 * 365; // 1년;

  return new Date(todayTime + expiresTime);
}

export function getCookieOption() {
  const expiresTime = getCookieExpires();

  return {
    expires: expiresTime,
    // domain: '.blockai.kr',
    // httpOnly: true,
    // secure: true,
    path: '/',
  };
}
