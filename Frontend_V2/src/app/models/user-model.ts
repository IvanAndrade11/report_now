export class User {
  id?: number
  user?: string
  name?: string
  email?: string
  phone?: string
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

export class UserUpdate {
  user?: string
  name?: string
  email?: string
  phone?: string
  password?: string

  constructor(user: string, name: string, email: string, phone: string) {
    this.user = user
    this.name = name
    this.email = email
    this.phone = phone
  }
}

export interface DataValidate {
  msj: string
  valid: boolean
  user: UserValidate
}

export interface UserValidate {
  _id: number
  name: string
  user: string
  email: string
  phone: string
  password: string
  admin: boolean
}
