import axios from "axios";

// Get the Strapi API key from environment variables
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

// Create an Axios instance with default configuration
const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/', // Base URL of the Strapi API
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}` // Authorization header with API key
  }
});

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail = (id, data) => axiosClient.put(`/user-resumes/${id}`, data);

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}