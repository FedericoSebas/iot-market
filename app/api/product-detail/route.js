import { readFile, readFileSync } from "fs";
import path from "path";


export async function GET (req) {
    const slug = req.nextUrl.searchParams.get("slug")

    const filePath = path.join(process.cwd(), "data", "product-detail.json");
    const fileContet = readFileSync(filePath);
    const productDetail = JSON.parse(fileContet);
    const {[slug]: content} = productDetail.find((obj)=>obj.hasOwnProperty(slug))
    return Response.json({content},{status: 200});
  

}
