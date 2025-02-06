import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import {
  LearningModuleLevel,
  LearningModuleTechnology
} from '~/modules/learning-modules/learning-modules.types'

// export enum LearningModuleTechnology {
//   Html = 'html',
//   Css = 'css',
//   JavaScript = 'javascript',
//   TypeScript = 'typescript',
//   Sass = 'sass',
//   AngularJS = 'angular-js',
//   ReactJs = 'react-js',
//   VueJs = 'vue-js',
//   NextJS = 'next-js',
//   NuxtJS = 'nuxt-js',
//   NodeJS = 'node-js',
//   NestJS = 'nest-js',
//   Express = 'express',
//   MongoDB = 'mongodb',
//   MySQL = 'mysql',
//   PostgreSQL = 'postgresql',
//   Redis = 'redis',
//   Docker = 'docker',
//   AWS = 'aws',
//   Firebase = 'firebase',
//   Flutter = 'flutter',
//   ReactNative = 'react-native',
//   Electron = 'electron',
//   GraphQL = 'graphql',
//   Apollo = 'apollo',
//   REST = 'rest',
//   WebSockets = 'websockets',
//   WebRTC = 'webrtc',
//   PWA = 'pwa',
//   Monolith = 'monolith',
//   Testing = 'testing',
//   CI_CD = 'ci-cd',
//   DevOps = 'devops',
//   Git = 'git',
//   GitHub = 'github',
//   GitLab = 'gitlab',
//   VSCode = 'vscode',
//   WebStorm = 'webstorm',
//   IntelliJIDEA = 'intellij-idea'
// }
//
// export enum LearningModuleLevel {
//   Trainee = 'trainee',
//   Junior = 'junior',
//   Middle = 'middle',
//   Senior = 'senior'
// }
//
// export interface LearningModule {
//   id: number
//   type: 'course' | 'intensive'
//   level: LearningModuleLevel | null
//   technologies: LearningModuleTechnology[] | null
//   title: string
//   description: string | null
//   published: boolean | null
//   private: boolean | null
//   lessons: Lesson[]
//   createdAt: string
//   updatedAt: string
// }

// const mockLearningModules: LearningModule[] = [
//   {
//     id: 1,
//     type: 'course',
//     level: LearningModuleLevel.Trainee,
//     technologies: [LearningModuleTechnology.Html, LearningModuleTechnology.Css],
//     title: 'Разработка: начало',
//     description: '',
//     published: true,
//     private: false,
//     lessons: [],
//     createdAt: '2021-01-01T00:00:00Z',
//     updatedAt: '2021-01-01T00:00:00Z'
//   },
//   {
//     id: 2,
//     type: 'course',
//     level: LearningModuleLevel.Junior,
//     technologies: [LearningModuleTechnology.JavaScript],
//     title: 'JavaScript: основы',
//     description: '',
//     published: true,
//     private: false,
//     lessons: [],
//     createdAt: '2021-01-01T00:00:00Z',
//     updatedAt: '2021-01-01T00:00:00Z'
//   },
//   {
//     id: 3,
//     type: 'course',
//     level: LearningModuleLevel.Junior,
//     technologies: [LearningModuleTechnology.ReactJs],
//     title: 'React.js: основы',
//     description: '',
//     published: true,
//     private: false,
//     lessons: [],
//     createdAt: '2021-01-01T00:00:00Z',
//     updatedAt: '2021-01-01T00:00:00Z'
//   },
//   {
//     id: 4,
//     type: 'intensive',
//     level: LearningModuleLevel.Junior,
//     technologies: [LearningModuleTechnology.SoftSkills],
//     title: 'Первое собеседование',
//     description: '',
//     published: true,
//     private: false,
//     lessons: [],
//     createdAt: '2021-01-01T00:00:00Z',
//     updatedAt: '2021-01-01T00:00:00Z'
//   }
// ]

export function useLearningModules(
  type?: Ref<LearningModule['type'] | undefined>
) {
  return useFetch<LearningModule[]>('/backend-api/learning-module', {
    query: { type: type?.value }
  })

  // return {
  //   data: mockLearningModules
  // }
}
