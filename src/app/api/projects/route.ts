import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const published = searchParams.get('published')

    const where = published !== null ? { published: published === 'true' } : {}

    const projects = await prisma.project.findMany({
      where,
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, category, description, image, order, published } = body

    if (!title || !category || !image) {
      return NextResponse.json({ error: 'Title, category, and image are required' }, { status: 400 })
    }

    const project = await prisma.project.create({
      data: {
        title,
        category,
        description: description || '',
        image,
        order: order ?? 0,
        published: published ?? true,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
