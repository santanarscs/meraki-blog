import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if(request.method !== 'POST') return
  const { name, email, phone, message } = request.body
  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID || '',
    },
    properties: {
      name: {
        type: "title",
        title: [
          {
            type: 'text',
            text: {
              content: name
            }
          }
        ]
      },
      email: {
        type: 'email',
        email: email
      },
      phone: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: phone
            }
          }
        ]
      },
      message: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: message
            }
          }
        ]
      }
    }
  }).then(() => {
    response.status(201).json({ message: 'Sucesso!' })
  }).catch((error) => {
    console.log(error)
    response.status(500).json({ message: 'Ops, algo deu errado!' })
  })
}