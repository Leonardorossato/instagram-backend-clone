const multer = require('multer')
const path = require('path')

const storageUplodas = () =>{
    new multer.diskStorage({
        destination: path.resolve(__dirname, '.', 'uploads'),
        filename : function(req, file, cd){
            cd(null,file.originalname)
        }
    })
}

module.exports = storageUplodas