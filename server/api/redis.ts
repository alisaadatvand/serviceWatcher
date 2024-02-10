import { createClient } from 'redis';
import { parse } from 'yaml'
import * as path from 'node:path'
import * as fs from 'node:fs'

async function config() {
    const filePath = path.join(process.cwd(), 'public', 'config.yaml')
    const data = await fs.promises.readFile(filePath, 'utf-8')
    return parse(data)
}

export default defineEventHandler(async (event) => {
    const cfg = await config();
    const client = createClient({ url: cfg["redis-uri"] });
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    const resp: { [key: string]: any } = {}
    for (var i in cfg.streams) {
        const res = await client.xInfoGroups(i)
        resp[i] = res
    }

    return resp;
})
