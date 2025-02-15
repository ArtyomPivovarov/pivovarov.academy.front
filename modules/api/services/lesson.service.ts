import type { NitroFetchOptions } from 'nitropack'
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import type { Lesson } from '~/modules/lessons/lessons.types'

export class LessonService {
  private static baseUrl = '/backend-api/lesson/'

  public static getById (id: number, request?: NitroFetchOptions<'get'>) {
    return $fetch<Lesson>(this.baseUrl + id, request)
  }
}