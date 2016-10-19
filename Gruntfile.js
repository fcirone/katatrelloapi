module.exports = function (grunt) {

    grunt.initConfig({
        
        lambda_invoke: {
            default: {
                options: {
                    handler: "handler",
                    file_name: "index.js",
                    event: "event/processKinesisStream.json"
                }
            }
        },
        lambda_deploy: {
            default: {
                options: {
                    enableVersioning: false,
                    accessKeyId: "AKIAJM3ONFBAB44WHESQ",
                    secretAccessKey: "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",
                    region: "us-west-2"
                },
                arn: 'arn:aws:lambda:us-west-2:211437258968:function:EisenbahnPale'
            }
        },
        lambda_package: {
            default: {
            }
        }
    });

    grunt.loadNpmTasks('grunt-aws-lambda');
    grunt.registerTask('default', ['lambda_package', 'lambda_deploy']);
    grunt.registerTask('test', ['lambda_invoke']);
    //grunt.registerTask('default', ['lambda_invoke']);
};
