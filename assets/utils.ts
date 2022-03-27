import moment from "moment"

export function getReadableDate(date: Date): string {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff === 1) return "Yesterday"
  else if (diff <= 30) return `${diff} days ago`
  else if (diff >= 30 && diff < 365) return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? "s": ""} ago`
  else return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? "s": ""} ago`
}

export function splitDate(date: Date): string {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff >= 1 && diff < 7) return "This weeek"
  else if (diff >= 7 && diff < 30) return "This month"
  else if (diff >= 30 && diff < 365) return "This year"
  else return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? "s": ""} ago`
}