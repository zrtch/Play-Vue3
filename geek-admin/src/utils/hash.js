/*
 * @Descripttion: 
 * @Date: 2022-08-19 15:46:14
 */
async calculateHashWorker(chunks){
    return new Promise(resolve => {
        this.worker = new Worker('/hash.js')
        this.worker.postMessage({ chunks })
        this.worker.onmessage = e => {
            const { progress, hash } = e.data
            this.hashPRogress = Number(progress.toFixed(2))
            if (hash) {
                resolve(hash)
            }
        }
    })
}