//This test file requires Jest to run
//npm i -g jest
//jest
const ProxyUtil = require('./ProxyUtil');
 
const setups = [
    { url: 'http://10.123.4.10:8080/', port: '8080', protocal: 'http', host: '10.123.4.10', hostname: '10.123.4.10:8080' },
    { url: 'http://10.123.4.10/', port: '80', protocal: 'http', host: '10.123.4.10', hostname: '10.123.4.10' },
    { url: 'http://10.123.4.10:8080', port: '8080', protocal: 'http', host: '10.123.4.10', hostname: '10.123.4.10:8080' },
    { url: 'http://10.123.4.10', port: '80', protocal: 'http', host: '10.123.4.10', hostname: '10.123.4.10' },
    { url: 'https://10.123.4.10:8080/', port: '8080', protocal: 'https', host: '10.123.4.10', hostname: '10.123.4.10:8080' },
    { url: 'https://10.123.4.10/', port: '80', protocal: 'https', host: '10.123.4.10', hostname: '10.123.4.10' },
    { url: 'https://10.123.4.10:8080', port: '8080', protocal: 'https', host: '10.123.4.10', hostname: '10.123.4.10:8080' },
    { url: 'https://10.123.4.10', port: '80', protocal: 'https', host: '10.123.4.10', hostname: '10.123.4.10' },
]

setups.forEach(({ url, port, protocal, host, hostname }) => {
    let proxyUtil;
    beforeEach(() => {
        proxyUtil = new ProxyUtil(url);
    })

    it(`should get port for ${url}`, () => {
        expect(proxyUtil.port).toBe(port)
    })
    it(`should get protocal for ${url}`, () => {
        expect(proxyUtil.protocal).toBe(protocal);
    })
    it(`should get host for ${url}`, () => {
        expect(proxyUtil.host).toBe(host);
    })
    it(`should get hostname for ${url}`, () => {
        expect(proxyUtil.hostname).toBe(hostname);
    })
})
 