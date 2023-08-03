// creating home controller and export 
module.exports.home = (req, res)=>{
    return res.render('home', {
        title: 'Home'
    });
};