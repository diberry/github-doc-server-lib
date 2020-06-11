export const getTimeout = () =>{
    let DEFAULT_TIMEOUT = 1000
    if (process.env.HTTP_TIMEOUT && process.env.HTTP_TIMEOUT.length>0){
      DEFAULT_TIMEOUT = parseInt(process.env.HTTP_TIMEOUT)
    }
    return DEFAULT_TIMEOUT
}