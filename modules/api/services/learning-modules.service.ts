import type { NitroFetchOptions } from 'nitropack'
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'

export class LearningModulesService {
  public static baseUrl = '/backend-api/learning-module/'

  public static get (request?: NitroFetchOptions<'get'>) {
    return $fetch<LearningModule[]>(this.baseUrl, request)
  }

  public static getById (id: number, request?: NitroFetchOptions<'get'>) {
    return $fetch<LearningModule>(this.baseUrl + id, request)
  }
}