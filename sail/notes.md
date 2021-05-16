# S A I L
## Application Notes

## npm
Libraries
<!-- uses the same syntax as standard client-side fetch -->
```  
npm
```
<!--  -->
```  
npm
```
<!--  -->
```  
npm
```
<!-- allows js server and client side fetch operations -->
<!-- uses the same syntax as standard client-side fetch -->
Isomorphic Fetch
```  
npm install isomorphic-unfetch
```

## Next.js
  - [Traversy Media Tutorial](https://www.youtube.com/watch?v=IkOVe40Sy0U)
  - Minimalistic framework for rendering React applications on the server

#### Core Features
- Server-rendered React applications
- Automatic code splitting and lazy-loading
  - Prevents unnecessary loading of code bundles and improves performance
- Simple page based routing
  - Simply create an about.js file and add it to the pages folder and you can hit it right away
- Built in CSS Support
- Hot Reloading
  - Webpack based code environment - reloads code in browser on save
- Deployment
  - 'next build' generates all static code files for production-ready deployment

#### Installation & Setup
```js
npm init
npm install next react react-dom
```

```json
/* add to package.json */
{
  "scripts": {
    "dev":"next",
    "build":"next build",
    "start":"next start",
  }
}
```

```js
// pages/index.js
export default () => <div>Hello World</div>
```

#### Link Module
```js
Import Link from 'next/link'

// can wrap around any tag / element to create links
<Link href="/"><a>Home</a></Link>
<Link href="/"><button>About</button></Link>
```

## React JS

###### Example of Index.js from Traversy Media
```js
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;
```
