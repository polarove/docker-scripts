PASSWORD=$1

if [ $PASSWORD ]
then  
    docker run \
    --name mysql \
    -p 3306:3306 \
    -v $PWD/config:/etc/mysql/conf.d \
    -e MYSQL_ROOT_PASSWORD=$PASSWORD \
    -d mysql:8.0.25
else
    docker run \
    --name mysql \
    -p 3306:3306 \
    -v $PWD/config:/etc/mysql/conf.d \
    -e MYSQL_ROOT_PASSWORD=liuqi6602 \
    -d mysql:8.0.25
fi
