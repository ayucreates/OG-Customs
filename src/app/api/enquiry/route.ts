import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(enquiries)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service, message } = await req.json()
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }
    const enquiry = await prisma.enquiry.create({
      data: { name, phone, service: service || 'General', message: message || '' },
    })
    return NextResponse.json(enquiry)
  } catch {
    return NextResponse.json({ error: 'Failed to create enquiry' }, { status: 500 })
  }
}
