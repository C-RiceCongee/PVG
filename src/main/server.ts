import * as fs from 'fs'
import express from 'express'
import cors from 'cors'
import { SiGenPort, userDataPath } from './common'

const initCacheDir = () => {
  return new Promise((resolve) => {
    try {
      const existCacheDir = fs.existsSync(userDataPath)
      if (!existCacheDir) {
        fs.mkdirSync(userDataPath)
      }
      resolve(true)
    } catch (e) {
      resolve(false)
    }
  })
}
export default async function createServer() {
  if (!(await initCacheDir())) process.exit(0)
  // 启动服务器
  // 启动 Express 服务器
  const server = express()
  // 使用cors中间件
  server.use(cors())
  server.post('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const userAgent = req.headers['user-agent']
    res.send(`Client IP: ${clientIp}<br>User-Agent: ${userAgent}`)
  })
  server.use(express.static(userDataPath))
  server.listen(await SiGenPort(), async () => {
    console.log(`服务器已启动，监听端口http://localhost:${await SiGenPort()}`)
  })
}
