
const endpoint = axios.create({baseURL: 'http://localhost:3000'});

    endpoint.interceptors.request.use(config => {
        NProgress.start()
        return config
    })
  
    endpoint.interceptors.response.use(response => {
        NProgress.done()
        return response
    })
