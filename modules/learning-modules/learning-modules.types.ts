export enum LearningModuleLevel {
  Trainee = 'trainee',
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior'
}

export interface LearningModule {
  id: number
  level: LearningModuleLevel | null
  type: 'course' | 'intensive'
  title: string
  description: string | null
  published: boolean | null
  private: boolean | null
  createdAt: string
  updatedAt: string
}
