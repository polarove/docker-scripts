PASSWORD=$1

if [ $PASSWORD ]
then  
    docker run -itd \
    --name redis \
    --restart=always \
    -v $PWD/data:/data \
    -p 6379:6379 \
    redis:latest \
    --requirepass "$PASSWORD"
else
    docker run -itd \
    --name redis \
    --restart=always \
    -v $PWD/data:/data \
    -p 6379:6379 \
    redis:latest \
    --requirepass "liuqi6602"
fi
