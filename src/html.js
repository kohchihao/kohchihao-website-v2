import React, {Component} from "react"
import favicon from '../img/android.ico';

export default class HTML extends Component {
  render() {
    
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name='theme-color' content='#212936'/>
          {this.props.headComponents}
          
          
	        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
          
          <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
          <link rel="icon" href={favicon}/>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          
	          <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        </body>
      </html>
    )
  }
}
