import * as net from 'net'
// isPortAvailable 查询端口是否可用
import { app } from 'electron'
function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer()

    server.once('error', () => {
      // 端口被占用
      resolve(false)
    })

    server.once('listening', () => {
      // 端口可用
      server.close()
      resolve(true)
    })

    server.listen(port)
  })
}

async function findAvailablePort(startPort: number, endPort: number): Promise<number | null> {
  for (let port = startPort; port <= endPort; port++) {
    const isAvailable = await isPortAvailable(port)
    if (isAvailable) {
      return port
    }
  }
  return null
}

// 查询 3000-4000 之间的空闲端口

export function GenPort() {
  const port = Math.floor(Math.random() * 5000 + 5000)
  let IDLPort: number | any = null
  return async function () {
    if (IDLPort) return IDLPort
    IDLPort = await findAvailablePort(port, 10001)
    return IDLPort
  }
}
export const SiGenPort = GenPort()
// GenANoDuplicateSearchName 获取一个不会重复的名字
export function GenANoDuplicateSearchName(name: string, namesList: Array<string>): string {
  let newName = name
  let counter = 1

  while (namesList.includes(newName)) {
    newName = name + counter
    counter++
  }

  return newName
}

export const userDataPath = app.getPath('userData')
