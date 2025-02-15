import type { Lesson } from '~/modules/lessons/lessons.types'

export enum LearningModuleLevel {
  Trainee = 'trainee',
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior'
}

export enum LearningModuleTechnology {
  Html = 'html',
  Css = 'css',
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  Sass = 'sass',
  AngularJS = 'angular-js',
  ReactJs = 'React.js',
  VueJs = 'vue-js',
  NextJS = 'next-js',
  NuxtJS = 'nuxt-js',
  NodeJS = 'node-js',
  NestJS = 'nest-js',
  Express = 'express',
  MongoDB = 'mongodb',
  MySQL = 'mysql',
  PostgreSQL = 'postgresql',
  Redis = 'redis',
  Docker = 'docker',
  AWS = 'aws',
  Firebase = 'firebase',
  Flutter = 'flutter',
  ReactNative = 'react-native',
  Electron = 'electron',
  GraphQL = 'graphql',
  Apollo = 'apollo',
  REST = 'rest',
  WebSockets = 'websockets',
  WebRTC = 'webrtc',
  PWA = 'pwa',
  Monolith = 'monolith',
  Testing = 'testing',
  CI_CD = 'ci-cd',
  DevOps = 'devops',
  Git = 'git',
  GitHub = 'github',
  GitLab = 'gitlab',
  VSCode = 'vscode',
  WebStorm = 'webstorm',
  IntelliJIDEA = 'intellij-idea',
  SoftSkills = 'Soft skills'
}

export interface LearningModule {
  id: number
  type: 'course' | 'intensive' | string
  level: LearningModuleLevel | null
  technologies: LearningModuleTechnology[] | null
  title: string
  description: string | null
  published: boolean | null
  private: boolean | null
  lessons: Lesson[]
  createdAt: string
  updatedAt: string
}
