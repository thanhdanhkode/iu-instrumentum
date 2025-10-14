type OS = "Windows" | "MacOS" | "Linux" | "iOS" | "Android" | "Unknown"

export const detectOS = (): OS => {
  if (typeof navigator === "undefined") return "Unknown"

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const platform = (navigator as any).userAgentData.platform || navigator.platform || navigator.userAgent || ""

  if (/Win/i.test(platform)) return "Windows"
  if (/Mac/i.test(platform)) return "MacOS"
  if (/Linux/i.test(platform)) return "Linux"
  if (/iPhone|iPad|iPod|iOS/i.test(platform)) return "iOS"
  if (/Android/i.test(platform)) return "Android"

  return "Unknown"
}
