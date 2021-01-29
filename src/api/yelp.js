import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer XCQGgc7G2PC7u0XCZo0crenfYI4mbJzyfW8YCsxg0jzbmMUN-Sz-qdOBZgGePwlnT9bLdHxuOPR2lypQhSYCA2YEK3HAAkn7DKp4snhPSLaOc6YpfCr8sgwLLDHuX3Yx'
    }
});