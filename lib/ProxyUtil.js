
class ProxyUtil {
    constructor(url) {
        this.url = url;
        this.parts = url.split(':')
    }
    get port() {
        const tmp = this.parts[2];
        if (!tmp) return '80';
        if (tmp.indexOf('/') > -1) 
            return tmp.split('/').slice(0, 1)[0];
        
        return this.parts[2];
    }

    get protocal() {
        return this.url.startsWith('https') ? 'https' : 'http'
    }

    get host() {
        const tmp = this.url.split('//')[1];
        if (tmp.indexOf(':') > -1)
            return tmp.split(':')[0];

        return tmp.replace('/', '');
    }

    get hostname() {
        const tmp = this.url.split('//')[1];
        return tmp.replace('/', '');
    }

    get secureProxy() { 
        return this.url.startsWith('https')
    }

    get agent() { 
        const agent = {
            "options": {
				"protocol": this.protocal,
				"slashes": true,
				"auth": null,
				"host": this.host,
				"port": this.port,
				"hostname": this.hostname,
				"hash": null,
				"search": null,
				"query": null,
				"pathname": "/",
				"path": "/",
				"href": this.url
			},
			"secureProxy": this.secureProxy,
			"proxy": {
				"protocol": this.protocal,
				"slashes": true,
				"auth": null,
				"host": this.host,
				"port": 8080,
				"hostname": this.hostname,
				"hash": null,
				"search": null,
				"query": null,
				"href": this.url
			},
			"defaultPort": 443
        }
        if (agent.secureProxy)
            agent['ALPNProtocols'] = ["http 1.1"];
        return agent;
    }
}

module.exports = ProxyUtil;