import axios from 'axios';

let ChunkyClient = (endPoint, accessKey, secretKey) => ({

    async makeBucket(bucketName) {
        try {
            await axios.post(`${endPoint}/bucket/${bucketName}`)
        } catch (err) {
            console.error(err);
        }
    },

    async fPutObject(bucketName, file) {
        try {
            const chunkyURL = `${endPoint}/file/upload/${bucketName}`;

            let fileFormData = new FormData();
            fileFormData.append("uploadedFile", file);

            const headers = { 'filename': file.name }

            await axios.post(chunkyURL, fileFormData, headers);

        } catch (error) {
            console.error(error);
        }
    },

    async getPartialObject(bucketName, fileName) {
        try {
            return axios.get(`${endPoint}/file/${bucketName}/${fileName}`)
         } catch (err) { 
            console.log(err); 
        }
    },

    saySomething() {
        console.log("something")
    }
})

export default ChunkyClient