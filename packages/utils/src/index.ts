function removeDuplicities<T = any>(arr: T[]): T[] {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export { removeDuplicities };
