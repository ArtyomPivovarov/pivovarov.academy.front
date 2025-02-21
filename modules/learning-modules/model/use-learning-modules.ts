import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import { LearningModulesService } from '~/modules/api/services/learning-modules.service'
import { LearningModulesQuery } from '~/modules/learning-modules/learning-modules.query'

export function useLearningModules(
  type?: Ref<LearningModule['type'] | undefined>
) {
  return useQuery({
    queryKey: [LearningModulesQuery.LearningModules, type],
    queryFn: () => LearningModulesService.get({
      query: { type: type?.value }
    })
  })
}
