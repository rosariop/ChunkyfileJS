import axios from 'axios';

let ChunkyClient = (endpoint, accessKey, secretKey) => ({

    async makeBucket(bucketName) {
        try {
            await axios.post(endpoint + "/bucket/" + bucketName)
        } catch (err) {
            console.error(err);
        }
    },

    saySomething() {
        console.log("something")
    }
})

export default ChunkyClient