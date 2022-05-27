const app = require('./app');

const PORT = process.env.PORT || 8083;
app.listen(PORT, ()=>{ 
    console.log(`Server is listening on port ${PORT}`);
})