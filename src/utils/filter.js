export function filter(items, filters, currentFilter) {
  if (currentFilter === "All") {
    return items;
  }
  const filteredItems = items.filter(item => item.genre === currentFilter);
  return filteredItems;
}
