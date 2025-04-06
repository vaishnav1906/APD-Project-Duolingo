pipeline {
    agent any

    tools {
        nodejs 'Node 18' // Replace with the name you used in Global Tool Configuration
    }

    environment {
        // Add Node manually to PATH in case it's needed by shell directly
        PATH = "/opt/homebrew/bin:$PATH"
    }

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
