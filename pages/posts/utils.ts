export const removeEmbededTag = (content: string) =>
  content.replace(/```embeded\s(.*)\s```/gi, '$1')