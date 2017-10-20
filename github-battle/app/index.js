// var USER_DATA = {
//   name: "Kuba",
//   username: "jfedoruk",
//   image: "https://avatars0.githubusercontent.com/u/22891874?v=3&s=64"
// }

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js');

// Get your keys by signing up for Sentry at sentry.reactjsprogram.com
var sentryKey = '9aecd99a79b24bd79dcf4c72730173bc'
var sentryApp = '113950'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

// var HelloWorld = React.createClass({
//   render: function () {
//     return (
//       <div> Hello {this.props.name} </div>
//     )
//   }
// });
//
// var ProfilePic = React.createClass({
//   render: function () {
//     return <img src={this.props.image} style={{height:100, width:100}} />
//   }
// });
//
// var Link = React.createClass({
//   changeURL: function() {
//     window.location.replace(this.props.href)
//   },
//   render :function () {
//     return (
//       <span
//         style={{color: 'blue', cursor: 'pointer'}}
//         onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })
//
// var ProfileLink = React.createClass({
//   render: function () {
//     return  (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   }
// });
//
// var ProfileName = React.createClass({
//   render: function () {
//     return  (
//       <div> {this.props.name} </div>
//     )
//   }
// });
//
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ProfilePic image={this.props.user.image}/>
//         <ProfileName name={this.props.user.name}/>
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     )
//   }
// });

ReactDOM.render(
  // <Avatar user={USER_DATA}/>,
  routes,
document.getElementById('app')
);
