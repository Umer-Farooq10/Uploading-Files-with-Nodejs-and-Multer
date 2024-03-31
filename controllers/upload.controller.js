const homePage = (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error.message)
    }
}

const uploadFile = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }
        console.log(req.file)
        res.redirect('/')
        // res.json({ message: "Successfully uploaded files" });
    } catch (error) {
        res.status(400).send("Error uploading file. Please check the file type and size.");
    }
}

module.exports = {
    homePage,
    uploadFile
}
