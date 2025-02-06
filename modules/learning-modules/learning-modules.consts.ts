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
    icon: 'i-fa-brands:css3',
    color: '#2965f1'
  },
  [LearningModuleTechnology.JavaScript]: {
    icon: 'i-fa-brands:js-square',
    color: '#f0db4f'
  },
  [LearningModuleTechnology.TypeScript]: {
    color: '#3178c6'
  },
  [LearningModuleTechnology.Sass]: {
    color: '#c69'
  },
  [LearningModuleTechnology.AngularJS]: {
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
    color: '#FFF'
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
    color: '#e0234e'
  },
  [LearningModuleTechnology.Express]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.MongoDB]: {
    color: '#4db33d'
  },
  [LearningModuleTechnology.MySQL]: {
    color: '#00758f'
  },
  [LearningModuleTechnology.PostgreSQL]: {
    color: '#336791'
  },
  [LearningModuleTechnology.Redis]: {
    color: '#d82c20'
  },
  [LearningModuleTechnology.Docker]: {
    color: '#2496ed'
  },
  [LearningModuleTechnology.AWS]: {
    color: '#ff9900'
  },
  [LearningModuleTechnology.Firebase]: {
    color: '#ffca28'
  },
  [LearningModuleTechnology.Flutter]: {
    color: '#02569b'
  },
  [LearningModuleTechnology.ReactNative]: {
    color: '#61dafb'
  },
  [LearningModuleTechnology.Electron]: {
    color: '#47848f'
  },
  [LearningModuleTechnology.GraphQL]: {
    color: '#e535ab'
  },
  [LearningModuleTechnology.Apollo]: {
    color: '#3c1e39'
  },
  [LearningModuleTechnology.REST]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.WebSockets]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.WebRTC]: {
    color: '#333'
  },
  [LearningModuleTechnology.PWA]: {
    color: '#5a5a5a'
  },
  [LearningModuleTechnology.Monolith]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.Testing]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.CI_CD]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.DevOps]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.Git]: {
    icon: 'i-fa-brands:git-square',
    color: '#f34f29'
  },
  [LearningModuleTechnology.GitHub]: {
    icon: 'i-fa-brands:git-square',
    color: '#333'
  },
  [LearningModuleTechnology.GitLab]: {
    icon: 'i-fa-brands:git-square',
    color: '#fca326'
  },
  [LearningModuleTechnology.VSCode]: {
    color: '#007acc'
  },
  [LearningModuleTechnology.WebStorm]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.IntelliJIDEA]: {
    color: '#FFF'
  },
  [LearningModuleTechnology.SoftSkills]: {
    color: '#fca326'
  }
}
