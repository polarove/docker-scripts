#!/bin/bash

uid=$1
groupid=$2
if [ $uid ]
then
	echo "uid: $uid"
else
	echo "[jenkins-create]: id of user who runs the jenkins container is required"
	exit 0
fi

if [ $groupid ]
then
	echo "groupid: $groupid"
else
	echo "[jenkins-create]: id of user group that manages the jenkins container is required"
	exit 0
fi

if [ ! -d ./jenkins_home ]
then
    echo "[jenkins-run]: makign a folder to bind /var/jenkins_home, default: $PWD/jenkins_home"
    mkdir $PWD/jenkins_home
    chown -R $uid:$groupid $PWD/jenkins_home
    echo "[jenkins-run]: privilege for user jenkins has been settled"
    echo "[jenkins-run]: removed the old jenkins container and create a new one with $PWD/jenkins_home bind with /var/jenkins_home inside container"

    docker stop jenkins

    docker run -it -d -u jenkins --restart=always --name jenkins -v $PWD/jenkins_home:/var/jenkins_home -p 6565:8080 jenkins/jenkins
    echo "[jenkins-run]: jenkins container is now listening on port 6565"
fi
