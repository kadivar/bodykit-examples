module.exports = {

    port: process.env.PORT || 3000,
    bodyKitApiBase: 'https://api.bodylabs.com',
    devAccessKey: '',
    devSecret:'',
    defaultPolicy: {instant: ['measurements', 'mesh']},
    defaultPolicyExpireInSeconds: 120,
};