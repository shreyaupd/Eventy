import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as {
    prisma: ReturnType<typeof createExtendedClient>
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

function createExtendedClient() {
  const baseClient = new PrismaClient({ adapter })

  return baseClient.$extends({
    query: {
      booking: {
        async create({ args, query }) {
          const eventId = args.data.eventId ?? args.data.event?.connect?.id 

          if (!eventId) {
            throw new Error('Event ID is required to create a booking')
          }

          const event = await baseClient.event.findUnique({
            where: { id: eventId },
          })

          if (!event) {
            throw new Error(`Event with ID "${eventId}" does not exist`)
          }

          return query(args)
        },
      },
    },
  })
}

const prisma = globalForPrisma.prisma || createExtendedClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
