pipeline {
    agent any

    tools {
        nodejs 'Node 18' // Make sure this matches your Global Tool Configuration
    }

    environment {
        PATH = "/opt/homebrew/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vaishnav1906/APD-Project-Duolingo.git'
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
