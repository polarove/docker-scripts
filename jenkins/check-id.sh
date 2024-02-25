echo "[jenkins-check-id]: trying to get uid and groupid for user jenkins of jenkins container"
docker run -it -d -u jenkins --name jenkins -p 6565:8080 --rm jenkins/jenkins

docker exec -i jenkins sh -c 'id -u'
docker exec -i jenkins sh -c 'id -G'
