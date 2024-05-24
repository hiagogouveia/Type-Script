#!/bin/bash

# The URL of the site you want to fetch data from
url="https://www.jenkins.io/download/"
 
# Use curl to fetch the page content, then sed to extract the version number
JENKINS_VERSION=$(curl -s "$url" | sed -n 's|.*/war-stable/\([^/]*\)/.*|\1|p')

JENKINS_OLD_VERSION=$(date +"%Y-%m-%d_%H:%M:%S")

echo $JENKINS_VERSION

echo "========================Baixando jenkins LTS $JENKINS_VERSION=============================="
wget https://updates.jenkins.io/download/war/$JENKINS_VERSION/jenkins.war

echo "========================Parando Jenkins=============================="
sudo service jenkins stop
sudo killall java

echo "========================alterando nome do .war atual do jenkins========================"
sudo mv /usr/lib/jenkins/jenkins.war /usr/lib/jenkins/jenkins.war.$JENKINS_OLD_VERSION

echo "========================movendo nova versão do Jenkins para pasta de execução========================"
sudo mv jenkins.war /usr/lib/jenkins/

echo "========================iniciar Jenkins========================"
sudo service jenkins start &

echo "========================Checar logs========================"
sudo tail -f /var/log/jenkins/jenkins.log



#!/bin/bash

# URL do site de onde deseja obter os dados
url="https://www.jenkins.io/download/"

# Obtendo a versão LTS do Jenkins
JENKINS_VERSION=$(curl -s "$url" | sed -n 's|.*/war-stable/\([^/]*\)/.*|\1|p')
echo $JENKINS_VERSION

# Pasta onde estão os arquivos war
pasta="/usr/lib/jenkins/"

# Verificando se a versão foi obtida com sucesso
if [ -z "$JENKINS_VERSION" ]; then
    echo "Erro: Não foi possível obter a versão LTS do Jenkins."
    exit 1
fi

# Gerando timestamp para o nome do arquivo do Jenkins antigo
JENKINS_OLD_VERSION=$(date +"%Y%m%d%H%M%S")

# Baixando o arquivo do Jenkins
echo "Baixando Jenkins LTS $JENKINS_VERSION..."
wget -q "https://updates.jenkins.io/download/war/$JENKINS_VERSION/jenkins.war" || {
    echo "Erro: Falha ao baixar o arquivo do Jenkins."
    exit 1
}

# Parando o serviço Jenkins
echo "Parando Jenkins..."
sudo service jenkins stop
sudo killall java

# Fazendo backup do arquivo Jenkins atual
echo "Fazendo backup do arquivo Jenkins atual..."
sudo mv /usr/lib/jenkins/jenkins.war "/usr/lib/jenkins/jenkins.war.$JENKINS_OLD_VERSION"

# Movendo a nova versão do Jenkins para a pasta de execução
echo "Movendo nova versão do Jenkins para a pasta de execução..."
sudo mv jenkins.war /usr/lib/jenkins/

# Iniciando o serviço Jenkins
echo "Iniciando Jenkins..."
sudo service jenkins start &

# Entrando na pasta do war do jenkins
cd "$pasta" || exit

# Encontrando e removendo os arquivos com mais de 60 dias 
find . -maxdepth 1 -type f -mtime +60 -exec rm {} \;

# Verificando os logs do Jenkins
echo "Verificando logs do Jenkins..."
sudo tail -f /var/log/jenkins/jenkins.log
