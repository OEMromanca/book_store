pipeline {
    agent {
        docker {
            image 'node:18.17.1-alpine3.18'
            args '-p 3000:3000'
        }
    }
    stages {

        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/OEMromanca/book_store.git']]])
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

      stage('Test') {
    steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh "ls -l ${env.WORKSPACE}"  // Zobrazí obsah priečinka workspace
        sh "sudo ./jenkins/test.sh"
    }
}

}


        // stage('Deliver') { 
        //     steps {
        //         sh './jenkins/deliver.sh' 
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)' 
        //         sh './jenkins/kill.sh' 
        //     }
        // }
         
    }



// pipeline {
//     agent any
    
//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/OEMromanca/book_store.git']]])
//             }
//         }
        
         
//     }
// }
