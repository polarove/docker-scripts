#!/bin/bash
FILENAME=$1
DATABASES=$2

if [ $2 ]
then
    if [ $FILENAME ] 
    then
        DUMP_FILE=$FILENAME.sql
    else DUMP_FILE=multi-dump.sql
    fi
    if [ -f "dumps/$DUMP_FILE" ]
    then
        rm dumps/$DUMP_FILE
    fi
    touch dumps/$DUMP_FILE
    docker exec mysql sh -c 'exec mysqldump --databases '$DATABASES' -uroot -p"$MYSQL_ROOT_PASSWORD"'  > dumps/$DUMP_FILE
    if [ $CAT_RESULT ]
    then
        cat dumps/$DUMP_FILE
    fi
else
    echo "[$0]: the name of target databases are required"
fi
