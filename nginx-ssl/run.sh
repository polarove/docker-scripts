mv conf.d/* ./
mv startup.conf conf.d/
docker run \
    -it -d \
    --rm \
    --name nginx-ssl \
    -v $PWD/wwwroot:/opt/wwwroot \
    -v $PWD/conf.d:/etc/nginx/conf.d \
    -p 443:443 \
    nginx
docker cp certs/ nginx-ssl:/etc/nginx/
mv conf.d/* ./
mv default.conf conf.d/

docker exec -i nginx-ssl sh -c 'nginx -t'
