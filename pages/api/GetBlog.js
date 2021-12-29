import { GetArticle } from "../../src/components/Services/ArticleService"

export  default async (req, res) => {
  var result=await GetArticle(req.query.param);
  var response=result.data.map(item=> {return {id:item.id,link:item.link,["_embedded"]:item["_embedded"],title:item.title.rendered}})
  res.statusCode = 200;
  res.json({ response})
}
