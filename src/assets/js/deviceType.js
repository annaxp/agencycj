export const deviceType = () => {
  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  return isMobileDevice || document.body.clientWidth < 1200
    ? 'mobile'
    : 'desktop'
}
