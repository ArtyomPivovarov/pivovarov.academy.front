import { LearningModuleTechnology } from '~/modules/learning-modules/learning-modules.types'

export const LM_TECHNOLOGY_PRESET: Record<
  LearningModuleTechnology,
  { color: string; icon?: string }
> = {
  [LearningModuleTechnology.Html]: {
    icon: 'i-fa-brands:html5',
    color: '#f16529'
  },
  [LearningModuleTechnology.Css]: {
    icon: 'i-logos:css-3',
    color: '#2965f1'
  },
  [LearningModuleTechnology.JavaScript]: {
    icon: 'i-fa-brands:js-square',
    color: '#f0db4f'
  },
  [LearningModuleTechnology.TypeScript]: {
    icon: '#fff',
    color: '#3178c6'
  },
  [LearningModuleTechnology.Sass]: {
    icon: '#fff',
    color: '#c69'
  },
  [LearningModuleTechnology.AngularJS]: {
    icon: '#fff',
    color: '#dd0031'
  },
  [LearningModuleTechnology.ReactJs]: {
    icon: 'i-fa-brands:react',
    color: '#61dafb'
  },
  [LearningModuleTechnology.VueJs]: {
    icon: 'i-fa-brands:vuejs',
    color: '#42b883'
  },
  [LearningModuleTechnology.NextJS]: {
    icon: 'fa-brands:node-js',
    color: '#000'
  },
  [LearningModuleTechnology.NuxtJS]: {
    icon: 'i-fa-brands:node-js',
    color: '#00c58e'
  },
  [LearningModuleTechnology.NodeJS]: {
    icon: 'i-fa-brands:node-js',
    color: '#68a063'
  },
  [LearningModuleTechnology.NestJS]: {
    icon: '#fff',
    color: '#e0234e'
  },
  [LearningModuleTechnology.Express]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.MongoDB]: {
    icon: '#fff',
    color: '#4db33d'
  },
  [LearningModuleTechnology.MySQL]: {
    icon: '#fff',
    color: '#00758f'
  },
  [LearningModuleTechnology.PostgreSQL]: {
    icon: '#fff',
    color: '#336791'
  },
  [LearningModuleTechnology.Redis]: {
    icon: '#fff',
    color: '#d82c20'
  },
  [LearningModuleTechnology.Docker]: {
    icon: '#fff',
    color: '#2496ed'
  },
  [LearningModuleTechnology.AWS]: {
    icon: '#fff',
    color: '#ff9900'
  },
  [LearningModuleTechnology.Firebase]: {
    icon: '#fff',
    color: '#ffca28'
  },
  [LearningModuleTechnology.Flutter]: {
    icon: '#fff',
    color: '#02569b'
  },
  [LearningModuleTechnology.ReactNative]: {
    icon: '#fff',
    color: '#61dafb'
  },
  [LearningModuleTechnology.Electron]: {
    icon: '#fff',
    color: '#47848f'
  },
  [LearningModuleTechnology.GraphQL]: {
    icon: '#fff',
    color: '#e535ab'
  },
  [LearningModuleTechnology.Apollo]: {
    icon: '#fff',
    color: '#3c1e39'
  },
  [LearningModuleTechnology.REST]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.WebSockets]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.WebRTC]: {
    icon: '#fff',
    color: '#333'
  },
  [LearningModuleTechnology.PWA]: {
    icon: '#fff',
    color: '#5a5a5a'
  },
  [LearningModuleTechnology.Monolith]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.Testing]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.CI_CD]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.DevOps]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.Git]: {
    icon: 'fa-brands:git-square',
    color: '#f34f29'
  },
  [LearningModuleTechnology.GitHub]: {
    icon: 'fa-brands:git-square',
    color: '#333'
  },
  [LearningModuleTechnology.GitLab]: {
    icon: 'fa-brands:git-square',
    color: '#fca326'
  },
  [LearningModuleTechnology.VSCode]: {
    icon: '#fff',
    color: '#007acc'
  },
  [LearningModuleTechnology.WebStorm]: {
    icon: '#fff',
    color: '#000'
  },
  [LearningModuleTechnology.IntelliJIDEA]: {
    icon: '#fff',
    color: '#000'
  }
}
