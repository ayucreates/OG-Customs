import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const existing = await prisma.admin.findUnique({ where: { username: 'admin' } })
  if (!existing) {
    const hashed = await bcrypt.hash('admin123', 10)
    await prisma.admin.create({ data: { username: 'admin', password: hashed } })
    console.log('Admin user created: admin / admin123')
  } else {
    console.log('Admin user already exists')
  }

  const keys = ['phone', 'email', 'address', 'hours', 'instagram', 'facebook', 'youtube']
  for (const key of keys) {
    await prisma.setting.upsert({
      where: { key },
      update: {},
      create: { key, value: '' },
    })
  }
  console.log('Default settings created')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
