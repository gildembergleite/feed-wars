import { Data, Post, User, data } from '../../data'

export class DataService {
  private userData: Data

  constructor() {
    this.userData = data
  }

  getUsers(): User[] {
    return this.userData.users
  }

  getPosts(): Post[] {
    return this.userData.posts
  }

  getUserById(userId: number): User | undefined {
    return this.userData.users.find((user) => user.id === userId)
  }
}
