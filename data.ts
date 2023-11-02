export interface User {
  id: number
  name: string
  role: string
  profileUrl: string
}

export interface Comment {
  userId: number
  content: string
  publishedAt: Date
  likes: number
}

export interface Post {
  id: number
  userId: number
  content: string
  hashtags: string[]
  publishedAt: Date
  comments: Comment[]
}

export interface Data {
  users: User[]
  posts: Post[]
}

export const data: Data = {
  users: [
    {
      id: 0,
      name: 'Darth Vader',
      role: 'Sith',
      profileUrl:
        'https://media.licdn.com/dms/image/C5603AQEH8jGbdqYaTw/profile-displayphoto-shrink_800_800/0/1635557656020?e=2147483647&v=beta&t=mFcbftOwDmqjV2sXKowvG4HPOS2hUtRlMW1jYAxKZ8E',
    },
    {
      id: 1,
      name: 'Luke Skywalker',
      role: 'Jedi',
      profileUrl:
        'https://i.pinimg.com/736x/58/c4/8b/58c48b3f41ef5ee3c88678fea5a0dfe0.jpg',
    },
    {
      id: 2,
      name: 'Leia Organa',
      role: 'Rebel',
      profileUrl:
        'https://pbs.twimg.com/profile_images/1131990281413365760/eVXBPmA__400x400.jpg',
    },
  ],
  posts: [
    {
      id: 0,
      userId: 0,
      content: 'Às vezes, é bom usar o lado negro da Força.',
      hashtags: ['DarkSide', 'SithLife'],
      publishedAt: new Date('2023-10-15T13:00:00Z'),
      comments: [],
    },
    {
      id: 1,
      userId: 0,
      content: 'Às vezes, é bom usar o lado negro da Força.',
      hashtags: ['DarkSide', 'SithLife'],
      publishedAt: new Date('2023-10-15T13:00:00Z'),
      comments: [
        {
          userId: 1,
          content: 'Darth Vader, você está perdendo a sua humanidade.',
          publishedAt: new Date('2023-10-15T13:00:00Z'),
          likes: 0,
        },
        {
          userId: 2,
          content: 'É hora de se redimir, Vader.',
          publishedAt: new Date('2023-10-15T13:00:00Z'),
          likes: 0,
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      content: 'A Força está conosco!',
      hashtags: ['JediMaster', 'MayTheForceBeWithYou'],
      publishedAt: new Date('2023-10-15T13:00:00Z'),
      comments: [
        {
          userId: 0,
          content:
            'Luke, um dia você vai entender o equilíbrio entre a luz e a escuridão.',
          publishedAt: new Date('2023-10-15T13:00:00Z'),
          likes: 0,
        },
      ],
    },
    {
      id: 3,
      userId: 2,
      content: 'Rebeldes, unam-se!',
      hashtags: ['RebelAlliance', 'FreedomFighters'],
      publishedAt: new Date('2023-10-15T13:00:00Z'),
      comments: [
        {
          userId: 1,
          content: 'Estamos com você, Leia.',
          publishedAt: new Date('2023-10-15T13:00:00Z'),
          likes: 0,
        },
      ],
    },
  ],
}
