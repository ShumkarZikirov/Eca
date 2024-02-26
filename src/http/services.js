import instance from "./setting";
// category
const getServiceCategory = () => {
    return instance.get('/services/list/')
}

const getServiceFilter = (id) => {
    return instance.get(`/services/filter_by_service/${id}/`)
}

// resume
const uploadResume = (form) => {
    return instance.post('/forms/resume/', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
// post contact 
const postContact = (body) => {
    return instance.post('/forms/contact/', body)
}
// news 
const getNewsList = (page = 1) => {
    return instance.get(`/news/list/?page=${page}`)
}
const getNewsLatest = () => {
    return instance.get('/news/latest/')
}
const getNewsImagesId = (id) => {
    return instance.get(`/news/images/${id}`)
}
const getNewsDetail = (id) => {
    return instance.get(`/news/retreive/${id}`)
}

const getNewsFilterYear = (year) => {
    return instance.get(`/news/news_by_year/${year}/`)
}

// projects
const getProject = (page = 1) => {
    return instance.get(`/projects/list?page=${page}`)
}
const getFilterProjectYear = (year) =>{
    return instance.get(`/projects/filter_by_year/${year}/`)
}

const getFilterProjectSector = (sector) =>{
    return instance.get(`/projects/filter_by_sector/${sector}/`)
}

const getFilterProjectSearch = (name) => {
    return instance.get(`/projects/search/${name}/`)
}
const getFilterProjectId = (id) => {
    return instance.get(`/projects/filter_by_client/${id}`)
}

// clients 
const getClientCategoryList = () => {
    return instance.get('/clients/category_list/')
}

const getClientCategoryId = (id) => {
    return instance.get(`/clients/retrieve/${id}/`)
}

const getMembers=()=>{
    return instance.get(`/members/list/`)
}

const getMembersId=(id)=>{
    return instance.get(`/members/role/${id}/`)
}

// video get
const getVideo = () => {
    return instance.get('/video/list')
}


export const services = {
    getServiceCategory,
    getServiceFilter,
    uploadResume,
    getProject,
    getFilterProjectYear,
    getFilterProjectSearch,
    getNewsList,
    postContact,
    getNewsLatest,
    getNewsImagesId,
    getNewsDetail,
    getClientCategoryList,
    getClientCategoryId,
    getFilterProjectId,
    getMembers,
    getVideo,
    getMembersId,
    getFilterProjectSector,
    getNewsFilterYear
}