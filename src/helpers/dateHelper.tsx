const dateHelper = (strdate: string) => {
  if (!strdate) return ''
  const date = new Date(strdate)
  const formatter = new Intl.DateTimeFormat('fr', { year: 'numeric', month: 'long', day: 'numeric' })
  return formatter.format(date)
}

export default dateHelper
