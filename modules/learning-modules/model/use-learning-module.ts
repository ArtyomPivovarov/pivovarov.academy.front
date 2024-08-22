import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'

export function useLearningModule(id: Ref<number>) {
  return useFetch<LearningModule>(`/backend-api/learning-module/${id.value}`)
}
