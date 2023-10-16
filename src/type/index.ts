export interface IUser {
  _id: string,
  balance: number
}

export interface ITransaction {
  // _id: string,
  senderId: string,
  recieverId: string,
  amount: number
}
