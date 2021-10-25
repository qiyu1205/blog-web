import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <>
      <span>发布于</span>
      <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>
    </>
  )
}