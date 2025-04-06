pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/vaishnav1906/APD-Project-Duolingo'
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run with Docker') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
