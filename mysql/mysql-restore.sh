#!/bin/bash
PATH=$1
DATABASE=$2

if [ $PATH ]
then
    if [ $DATABASE ]
    then
        docker exec -i mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD" '$DATABASE''  < $PATH
    else
        echo "[$0]: database name is required as the 2nd parameter"
    fi
else
    echo "[$0]: path to a sql file is required as the 1st parameter"
fi
