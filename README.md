
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