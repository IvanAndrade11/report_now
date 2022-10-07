export class User {
  id?: number
  user: string
  name: string
  email: string
  phone: string
  password?: string
  admin?: boolean

  constructor(
    user: string,
    name: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.user = user
    this.name = name
    this.email = email
    this.phone = phone
    this.password = password
  }
}
