import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/avif']

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED.includes(file.type)) {
      return NextResponse.json({ error: 'Only jpg, png, webp, and avif files are allowed' }, { status: 400 })
    }

    const ext = path.extname(file.name)
    const filename = `${Date.now()}${ext}`
    const buffer = Buffer.from(await file.arrayBuffer())
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename)

    await writeFile(filepath, buffer)

    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
