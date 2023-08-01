import { FetchNearByGymsUseCase } from '../fetch-nearby-gyms'
import { PrismaGymRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymsUseCase() {
  const gymRepository = new PrismaGymRepository()
  const fetchNearByGymsUseCase = new FetchNearByGymsUseCase(gymRepository)
  return fetchNearByGymsUseCase
}
