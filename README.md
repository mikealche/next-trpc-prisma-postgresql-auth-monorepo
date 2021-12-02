# Next Node Auth Monorepo Starter

https://user-images.githubusercontent.com/8585011/144510344-ce9285aa-4d0e-4ba4-8e73-dc2f9fba8012.mov

This is a starter template for a project with:
 + [Next.js](https://nextjs.org/)
 + Tailwind CSS 
 + TRPC.io  



 + Prisma ORM 
 + PostgreSQL.

It includes as well Authentication and the Authorization logic already set up for you so you can already start working on features

What may differentiate this repo from other starter templates is that this repo doesn't incentivize the use of Next.js serverless lambda functions: instead it has it's own separate and classic Node.js server. 

## There are several reasons for this: 
* You may not want to use a serverless environment
* You don't need to deal with the connection pooling problem that serverless brings to PostgreSQL
* You may not want to use the custom server that Next.js provides because you lose [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization).

## Benefits: 
* End to end typing
* Authentication and Authorization baked in
* SSR, SSG and ASO thanks to Next.js
* Capability of having cronjobs in the separate Node.js server
* Deploy your frontend to Vercel (plays along very well with Next.js) and your backend to Heroku/Render/AWS/etc...
* Super simple migrations with Prisma

## How to run
0. Run `yarn` to install everything
1. Replace the DATABASE_URL in `packages/backend/.env.development`
2. `cd packages/backend` and run `yarn migrate:dev` to create the DB schema in your dev database
3. cd back into the root of the project and run `yarn server` to lift the server and `yarn web` to lift the Next.js frontend

