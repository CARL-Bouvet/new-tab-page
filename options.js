import { addWallpaper, getAllWallpapers, deleteWallpaper, clearAllWallpapers } from './lib/db.js'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.bmp']

const gallery = document.getElementById('gallery')
const countEl = document.getElementById('count')
const clearBtn = document.getElementById('clear-all')

function isImage(name) {
  const lower = name.toLowerCase()
  return IMAGE_EXTENSIONS.some(ext => lower.endsWith(ext))
}

function updateCount(n) {
  countEl.textContent = `${n} wallpaper(s)`
  clearBtn.disabled = n === 0
}

function createThumb(wp) {
  const div = document.createElement('div')
  div.className = 'thumb'

  const img = document.createElement('img')
  img.src = URL.createObjectURL(wp.blob)
  img.alt = wp.name

  const name = document.createElement('div')
  name.className = 'name'
  name.textContent = wp.name

  const del = document.createElement('button')
  del.className = 'delete'
  del.textContent = '×'
  del.addEventListener('click', async () => {
    await deleteWallpaper(wp.id)
    div.remove()
    const remaining = gallery.querySelectorAll('.thumb').length
    updateCount(remaining)
  })

  div.append(img, name, del)
  return div
}

async function renderGallery() {
  gallery.innerHTML = ''
  const wallpapers = await getAllWallpapers()
  updateCount(wallpapers.length)
  for (const wp of wallpapers) {
    gallery.appendChild(createThumb(wp))
  }
}

async function importFromFiles(files) {
  let added = 0
  for (const file of files) {
    if (!isImage(file.name)) continue
    await addWallpaper(file.name, file)
    added++
  }
  if (added > 0) await renderGallery()
}

document.getElementById('folder-input').addEventListener('change', (e) => {
  importFromFiles(e.target.files)
})

clearBtn.addEventListener('click', async () => {
  if (!confirm('Supprimer tous les wallpapers ?')) return
  await clearAllWallpapers()
  await renderGallery()
})

renderGallery()

// --- Météo ---

const cityInput = document.getElementById('weather-city')
const apiKeyInput = document.getElementById('weather-apikey')
const weatherStatus = document.getElementById('weather-status')

cityInput.value = localStorage.getItem('weather-city') || ''
apiKeyInput.value = localStorage.getItem('weather-apikey') || ''

document.getElementById('save-weather').addEventListener('click', () => {
  localStorage.setItem('weather-city', cityInput.value.trim())
  localStorage.setItem('weather-apikey', apiKeyInput.value.trim())
  weatherStatus.textContent = 'Enregistré'
  setTimeout(() => { weatherStatus.textContent = '' }, 2000)
})
