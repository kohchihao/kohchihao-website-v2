
## Deploy

- Initialize Git page 
- Add gh-pages package
`
npm install gh-pages --save-dev
`

- Then add deploy script to `package.json`


```
"scripts": {
	"deploy": "gatsby build --prefix-paths && gh-pages -d public",
}
```
- In gatsby-config.js edit the `pathPrefix`

```
module.exports = {
  pathPrefix: '/project-name',
}
```
- Now run `yarn deploy` or `npm run deploy`

## CI/CD with Netlify 

- Added Netlify to this `repo` 
- Every PR will now have its own Netlify url. 
- https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/