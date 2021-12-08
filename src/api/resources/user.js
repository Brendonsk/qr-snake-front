import ApiService from '../api.service';

const userResource = {
  get: async (params) => ApiService.get(`/user/${params.id}`),
  post: async (params) => ApiService.post('/user', params),
  put: async (params) => ApiService.put(`/user/${params.id}`, params),
  delete: async (params) => ApiService.delete(`/user/${params.id}`)
};

export default userResource;
