
const endpoint = axios.create({baseURL: 'https://restaurant-api-1215.herokuapp.com'});

    endpoint.interceptors.request.use(config => {
        NProgress.start()
        return config
    })
  
    endpoint.interceptors.response.use(response => {
        NProgress.done()
        return response
    })
