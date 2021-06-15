export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (longUrl, title) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify({
      long_url: longUrl,
      title: title
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
}
