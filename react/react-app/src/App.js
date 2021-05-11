import logo from './logo.svg';
import './App.css';
import branch from 'branch-sdk';

    //If the web SDK is loaded from an in-app webview - init the SDK with the no_journeys flag with the following logic:
    //Check if current browser session is an iOS In-App Webview:
    var isiOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent);
    //Check if current browser session is an Android In-App Webview: Per Chrome Android docs - https://developer.chrome.com/docs/multidevice/user-agent/
    var isAndroidWebView = /; wv\)/.test(navigator.userAgent);
    //Declare Boolean result
    var isWebView = isiOSWebView || isAndroidWebView;
    console.log(isWebView);

branch.init('key_live_ccQ8piFdCMPVysh8TLmEhghmuCk162Rr', {no_journeys: isWebView});
function getUserAgent() {
  var userAgent = navigator.userAgent.toString();
  document.getElementById("title").innerHTML = userAgent;
  document.getElementById("isiOSWebView").innerHTML = isiOSWebView;
  document.getElementById("isAndroidWebView").innerHTML = isAndroidWebView;
}

function App() {
  getUserAgent()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <h1 id="title"></h1>
            <h1>isiOSWebView</h1>
            <h1 id="isiOSWebView"></h1>
            <h1>isAndroidWebView</h1>
            <h1 id="isAndroidWebView"></h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
