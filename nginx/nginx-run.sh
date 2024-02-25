NETWORK=$1

if [ $NETWORK ]
then
    docker run \
    -it -d \
    --restart=always \
    --network=$NETWORK \
    -v $PWD/conf.d:/etc/nginx/conf.d \
    -v $PWD/wwwroot:/opt/wwwroot \
    --name nginx \
    -p 80:80 \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    nginx
    echo "[$0]: network of the nginx container is now running on $NETWORK mode"
else
    docker run \
    -it -d \
    --restart=always \
    -v $PWD/conf.d:/etc/nginx/conf.d \
    -v $PWD/wwwroot:/opt/wwwroot \
    --name nginx \
    -p 80:80 \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    nginx
    echo "[$0]: network type of the nginx container can be served as 1st parameter"
fi
