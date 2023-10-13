import { makeInstance } from "./apiInstance/api.instance";

export const mainApiInstance = makeInstance(
  process.env.REACT_APP_SERVER_API || 'http://localhost:8000'
)