let apiUrl
const apiUrls = {
  production: 'https://api.openweathermap.org/data/2.5/weather',
  development: 'https://api.openweathermap.org/data/2.5/weather'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
