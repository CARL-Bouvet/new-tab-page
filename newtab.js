import { getRandomWallpaper } from './lib/db.js'

const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const weatherEl = document.getElementById('weather')
const weatherTemp = document.getElementById('weather-temp')
const weatherDesc = document.getElementById('weather-desc')
const weatherCity = document.getElementById('weather-city')

function updateClock() {
  const now = new Date()
  timeEl.textContent = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  dateEl.textContent = now.toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
}

async function fetchWeather() {
  const city = localStorage.getItem('weather-city')
  const apiKey = localStorage.getItem('weather-apikey')
  if (!city || !apiKey) return

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=fr`
    )
    if (!res.ok) return
    const data = await res.json()

    weatherTemp.textContent = `${Math.round(data.main.temp)}°C`
    weatherDesc.textContent = data.weather[0].description
    weatherCity.textContent = data.name
    weatherEl.hidden = false
  } catch {
    // silencieux si pas de réseau
  }
}

async function init() {
  updateClock()
  setInterval(updateClock, 1000)

  fetchWeather()
  setInterval(fetchWeather, 15 * 60 * 1000)

  const wp = await getRandomWallpaper()

  if (!wp) {
    document.getElementById('empty').classList.add('visible')
    document.getElementById('open-settings').addEventListener('click', () => {
      if (chrome?.runtime?.openOptionsPage) chrome.runtime.openOptionsPage()
    })
    return
  }

  const url = URL.createObjectURL(wp.blob)
  document.getElementById('wallpaper').style.backgroundImage = `url(${url})`
}

init()
