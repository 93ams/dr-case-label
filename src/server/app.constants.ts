export const cwd = __dirname
export const jwtSecret = process.env.JWT_SECRET || '53(237'
export const isServer = typeof window === 'undefined'
export const isClient = !isServer
export const MONGO_URL = process.env.MONGO_URL || 'localhost'
export const NODE_ENV = process.env.NODE_ENV || 'production'
const portFlag = (args: string[]) => {
  try {
    const i = args.findIndex((a) => a === '-p')
    if (args.length > i + 1) return parseInt(args[i + 1])
  } catch (e) {
    console.error(e)
  }
}
export const PORT = portFlag(process.argv) || process.env.PORT || 3000
