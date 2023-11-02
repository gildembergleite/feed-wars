export class DateServices {
  dateFormatter(date: Date): string {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)

    return formattedDate
  }
}
