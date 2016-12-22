var app = angular.module('app.Constant', []);

app.constant('CONST', {
    APP_NAME: 'SO Tool',
    APP_NAME_SHORT: 'SOT',
    // AD_CONFIG: {
    //     TENANT_ID: 'microsoft.onmicrosoft.com',
    //     CLIENT_ID: '482514c8-43d4-4421-a58e-73771b9e9e4c'
    // },
    SERVICE_INFO: {
        ENDPOINT: 'http://10.168.176.27:8091/WebServices/S3PDataService/',
        WS:'ws://10.168.176.27:8091/api/Notify/',
        // WS: 'ws://localhost:8889/',
        LOCAL_TEST_DATA: '/data/'
    },
    WS_STATUS:{
        0 : 'connecting',
        1 : 'online',
        2 : 'closing',
        3 : 'offline'
    },
    ERRORS:{
        "1" : 'No Data Available',
        "2" : 'Null',
        "3" : 'N/A',
    }
})

module.exports = 'app.Constant';