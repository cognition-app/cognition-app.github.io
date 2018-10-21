import '@babel/polyfill'
import registry from './registry'

const root = document.getElementById('root')

async function start(location) {
  let context_location =
    registry[location] || location
  const ctx = await fetch(
    context_location
  )
  const app = await fetch(
    ctx.entrypoint
  )
  vm.runInThisContext(app)(root)
}

window.addEventListener("hashchange", () => {
  start(window.location.hash.slice(1))
}, false)

start(window.location.hash.slice(1))
