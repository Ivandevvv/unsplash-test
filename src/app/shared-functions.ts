
export function parseSearchQuery(query: string): string {
    return query
        .replace(/[^а-яА-ЯёЁ0-9a-zA-Z ]/g, '') //Удаляем все символы кроме букв и пробелов
        .replace(/ /g, '+'); // заменяем пробелы на '+'
}