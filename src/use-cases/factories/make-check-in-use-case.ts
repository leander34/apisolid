import { PrismaGymRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckInUseCase } from '../check-in'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymRepository = new PrismaGymRepository()
  const checkInUseCase = new CheckInUseCase(checkInsRepository, gymRepository)
  return checkInUseCase
}
