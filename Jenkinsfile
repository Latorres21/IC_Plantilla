pipeline{
    agent any
    
    options{
        ansiColor('xterm')
    }
    
    stages{
            stage('Build'){
                steps{
                    echo "Build app"
                }
            }
            // Stage para instalar el proyecto cy y ejecutar el reporte
            stage('Testing'){
                steps{
                    bat "npm i"
                    bat "npx cypress run cypress/e2e/features/**.features --browser chrome"
                }
            }
                 
            stage('Deploy'){
                steps{
                    echo "Deploying App..."
                }
            }
        }
        post {
        always {
            bat "node cucumber-html-report.js"
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports/cucumber', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])        }
    }
}
