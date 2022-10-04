export const titleToSeoString = (title: string) => {
    return title.split(' ').join('-').toLowerCase();
}