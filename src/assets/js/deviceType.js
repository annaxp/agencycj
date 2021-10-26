export const deviceType = (document) => {
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  return isMobileDevice || document.body.clientWidth < 1025
    ? 'mobile'
    : 'desktop'
}
