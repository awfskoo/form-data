async function readStreamWithAsyncIterator(fd) {
  const contents = []

  for await (const chunk of fd) {
    contents.push(chunk)
  }

  return Buffer.concat(contents)
}

export default readStreamWithAsyncIterator
