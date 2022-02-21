import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Cache-Control', 'public, max-age=300');
}
