import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const edge =
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const outDir = 'E:\\Aclaw文件\\kord-field-gear\\verify'
await mkdir(outDir, { recursive: true })

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(edge, args, { windowsHide: true })
    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Edge exited ${code}: ${args.join(' ')}`))
    })
  })
}

const shots = [
  ['desktop.png', 1440, 1100],
  ['desktop-tall.png', 1440, 3600],
  ['tablet.png', 834, 1400],
  ['mobile.png', 390, 1600],
]

for (const [name, w, h] of shots) {
  const dest = path.join(outDir, name)
  await run([
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=6000',
    `--window-size=${w},${h}`,
    `--screenshot=${dest}`,
    'http://127.0.0.1:4173/',
  ])
  console.log('wrote', dest)
}
