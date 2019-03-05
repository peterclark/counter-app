export function paginate(items, pageNumber, pageSize) {
  pageNumber = pageNumber - 1;
  const index = pageNumber * pageSize;
  return items.slice(index, index + pageSize);
}
