pipeline {
    agent {
        docker {
            image 'node:18.17.1-alpine3.18'
            args '-p 3000:3000'
        }
    }
    stages {

        stage('Cloning Git') {
            steps {
              git 'https://github.com/OEMromanca/book_store.git'
            }   
        }

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
    }
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
