
pipeline {
    agent any
    stages {
        stage('Run Playwright Tests') {
            steps {
                // Use 'bat' if you are on Windows, or 'sh' if you are on Linux/Mac
                bat 'npx playwright test'
            }
        }
    }
}
