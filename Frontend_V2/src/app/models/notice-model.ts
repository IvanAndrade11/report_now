export class notice {
  createdAt?: string
  description?: string
  id_user?: string
  likes?: string
  title?: string
  updatedAt?: string
  _id?: string

  constructor(
    title: string,
    description: string,
    likes: string,
    id_user: string
  ) {
    this.title = title
    this.description = description
    this.likes = likes
    this.id_user = id_user
  }
}
