pipeline {
     agent any
     tools {nodejs "nodejs"}
     stages {
         stage("Unit Tests") {
            steps {
                sh "node -v"
                sh "npm install -g yarn"
                sh "yarn install"
                sh "npm run test"
            }
        }
        // stage("End2End Tests") {
        //     steps {
        //         sh "unset DISPLAY && npm install"
        //         sh "unset DISPLAY && DEBUG=cypress:* npm run e2e:ci"
        //     }
        // }
        stage("Build") {
            steps {
                sh "yarn install"
                sh "yarn run build"
            }
        }
        stage("Deploy") {
            steps {
                sh " rm -rf /home/www-myapp | mkdir /home/www-myapp"
                sh " cp -r ${WORKSPACE}/build/ /home/www-myapp"
            }
        }
    }
}
