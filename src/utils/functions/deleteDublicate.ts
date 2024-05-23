export function deleteDublicate(array ,key: string) {
    const uniqueElements = [];
  const seenKeys = new Set();

  for (const element of array) {
    if (!seenKeys.has(element[key])) {
      seenKeys.add(element[key]);
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

