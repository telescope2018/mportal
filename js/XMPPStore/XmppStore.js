import XMPP from 'react-native-xmpp';

class XmppStore {
    constructor() {
        XMPP.on('loginError', this.onLoginError);
        XMPP.on('error', this.onError);
        XMPP.on('disconnect', this.onDisconnect);
        XMPP.on('login', this.onLogin);
        XMPP.on('message', this.onReceiveMessage);
    }

    onLoginError(){
        alert("onLoginError!");
    }

    onError(message){
        alert("onError!"+message);
    }

    onDisconnect(message){
        alert("onDisconnect!"+message);
    }

    onLogin(){
        alert("LOGGED!");
    }

    onReceiveMessage({from, body}){
        alert("onReceiveMessage")
        // extract username from XMPP UID
        if (!from || !body){
            return;
        }
        var name = from.match(/^([^@]*)@/)[1];
    }

    login(username,password,hostname){
        XMPP.trustHosts([hostname]);
       XMPP.connect(username,password,XMPP.SCRAM,hostname,5222);
    }

    disconnect() {
        XMPP.disconnect();
    }
}

export default new XmppStore();