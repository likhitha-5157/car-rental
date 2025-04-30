pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/likhitha-5157/car-rental.git'
            }
        }

        stage('Clean node_modules') {
            steps {
                bat 'npx rimraf node_modules package-lock.json'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t likki777/car-rental .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                    docker rm -f car-rental-container || exit 0
                    docker run -d --name car-rental-container -p 4000:3000 likki777/car-rental
                '''
            }
        }
    }

    post {
        success {
            echo '🚀 Car Rental App is now running on http://localhost:4000'
        }
        failure {
            echo '❌ Build or deployment failed.'
        }
    }
}
