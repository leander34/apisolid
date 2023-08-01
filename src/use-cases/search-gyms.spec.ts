import { expect, describe, it, beforeEach } from 'vitest'

import { SearchGymsUseCase } from './search-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase
describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'JavaScript gym',
      description: null,
      phone: null,
      latitude: -20.711724,
      longitude: -46.6029821,
    })

    await gymsRepository.create({
      title: 'TypeScript gym',
      description: null,
      phone: null,
      latitude: -20.711724,
      longitude: -46.6029821,
    })

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript gym',
      }),
    ])
  })

  it('should be able to fetch gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript gym ${i}`,
        description: null,
        phone: null,
        latitude: -20.711724,
        longitude: -46.6029821,
      })
    }

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript gym 21',
      }),
      expect.objectContaining({
        title: 'JavaScript gym 22',
      }),
    ])
  })
})
