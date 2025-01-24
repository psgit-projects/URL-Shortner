import { nanoid } from 'nanoid';
import { Url } from './url.js';


export const shorturl = async (req, res) => {
    const longUrl = req.body.longUrl;
    const shortCode = nanoid(); // Generates a unique ID

    const shorturl = `http://localhost:8000/${shortCode}`;

    const newurl = new Url({ shortCode, longUrl });
    await newurl.save();
    // console.log(newurl);
    res.render("index.ejs", { shorturl });
};

export const getOrignalurl = async (req,res)=>{
   const shortCode = req.params.shortCode

   //find
   const orignalUrl = await Url.findOne({shortCode})
   if(orignalUrl){
    res.redirect(orignalUrl.longUrl)
   } else{
    res.json({msg:"ERROR"})
   }
}
