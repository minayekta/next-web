import http from './httpService';


export const GetReviewWithProductId = (body) => {
  return http.post(`${process.env.serverSideApiUrl}/Product/GetReviewWithProductId`, JSON.stringify(body)
  )
}


export const InsertReviewLike = (body) => {
  return http.post(`${process.env.apiurl}/Product/InsertReviewLike`, JSON.stringify(body)
  )
}
export const UpdateReviewLike = (body) => {
  return http.put(`${process.env.apiurl}/Product/UpdateReviewLike`, JSON.stringify(body)

  )
}