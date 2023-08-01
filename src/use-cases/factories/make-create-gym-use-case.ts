import { CreateGymUseCase } from '../create-gym'
import { PrismaGymRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGymsUseCase() {
  const gymRepository = new PrismaGymRepository()
  const greateGymUseCase = new CreateGymUseCase(gymRepository)
  return greateGymUseCase
}
