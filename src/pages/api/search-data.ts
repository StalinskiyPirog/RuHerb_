// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient();



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  if (Object.keys(req.body).length > 0){
    let data = prisma.product.findMany({
      where: req.body
        // {
        //   category1: value.category1,
        //   category2: value.category2,
        //   category3: value.category3,
        //   category4: value.category4,
        //   articul:   value.articul,
        //   title:     value.title,
        //   price:     value?.price,
        // }
    })
    res.status(200).json(JSON.parse(JSON.stringify(data)));
  } else {
    let data = prisma.product.findMany()
    res.status(200).json(JSON.parse(JSON.stringify(data)));
  }
 

  // setTimeout(()=>res.status(200).json(JSON.parse(JSON.stringify({ name: 'John Doe' }))), 2000);
}
