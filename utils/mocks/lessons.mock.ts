import type { Lesson } from '~/modules/lessons/lessons.types'

export const mockLessons: Lesson[] = [
  {
    id: 1,
    title: 'Introduction to TypeScript',
    order: 1,
    description: 'TypeScript basics: data types, interfaces and classes',
    published: true,
    video: {
      id: 1,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Advanced Types',
    order: 2,
    description: 'Generics, utility types and conditional types',
    published: true,
    video: {
      id: 2,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-11T00:00:00.000Z',
    updatedAt: '2024-01-11T00:00:00.000Z',
  },
  {
    id: 3,
    title: 'TypeScript and React',
    order: 3,
    description: 'Typing components, hooks and props',
    published: true,
    video: {
      id: 3,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-12T00:00:00.000Z',
    updatedAt: '2024-01-12T00:00:00.000Z',
  },
  {
    id: 4,
    title: 'Practical Work',
    order: 4,
    description: 'Building a typed application from scratch',
    published: true,
    video: {
      id: 4,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-13T00:00:00.000Z',
    updatedAt: '2024-01-13T00:00:00.000Z',
  },
]

export const mockVueLessons: Lesson[] = [
  {
    id: 5,
    title: 'Vue 3 Fundamentals',
    order: 1,
    description: 'Composition API, reactivity and lifecycle',
    published: true,
    video: {
      id: 5,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-14T00:00:00.000Z',
    updatedAt: '2024-01-14T00:00:00.000Z',
  },
  {
    id: 6,
    title: 'Components and Props',
    order: 2,
    description: 'Creating reusable components',
    published: true,
    video: {
      id: 6,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: 7,
    title: 'State Management',
    order: 3,
    description: 'Pinia and application state management',
    published: true,
    video: {
      id: 7,
      previewSrc: '/video-cover.png',
    },
    createdAt: '2024-01-16T00:00:00.000Z',
    updatedAt: '2024-01-16T00:00:00.000Z',
  },
]
