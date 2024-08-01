import { useQuery } from '@tanstack/vue-query'
import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'

export function useLearningModules(
  type?: Ref<LearningModule['type'] | undefined>
) {
  return useFetch<LearningModule[]>('/backend-api/learning-module', {
    query: { type: type?.value }
  })
}
