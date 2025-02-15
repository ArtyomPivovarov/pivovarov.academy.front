import { LearningModulesService } from '~/modules/api/services/learning-modules.service'
import { LearningModulesQuery } from '~/modules/learning-modules/learning-modules.query'

export function useLearningModule(id: Ref<number>) {
  return useQuery({
    queryKey: [LearningModulesQuery.LearningModule, id],
    queryFn: () => LearningModulesService.getById(id.value)
  })
}
