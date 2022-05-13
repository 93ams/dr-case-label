export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export const NODE_ENV = process.env.NODE_ENV

const getPort = (args: string[]) => {
  const i = args.findIndex((a) => a === '-p')
  if (args.length > i + 1) return args[i + 1]
}
export const PORT = getPort(process.argv) || process.env.PORT || 3000
