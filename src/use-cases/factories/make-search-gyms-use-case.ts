import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymRepository = new PrismaGymRepository()
  const searchGymsUseCase = new SearchGymsUseCase(gymRepository)
  return searchGymsUseCase
}
