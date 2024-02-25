#!/bin/bash
DATABASE=$1
CAT_RESULT=$2

DIRECTORY="dumps/$(date +%F)"
if [ ! -d $DIRECTORY ]
then
    mkdir $DIRECTORY
fi

if [ $DATABASE ]
then
    DUMP_FILE=$DATABASE.sql
    if [ -f "$DIRECTORY/$DUMP_FILE" ]
    then
        rm $DIRECTORY/$DUMP_FILE
    fi
    touch $DIRECTORY/$DUMP_FILE
    docker exec mysql sh -c 'exec mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" '$DATABASE''  > $DIRECTORY/$DUMP_FILE
    if [ $CAT_RESULT ]
    then
        cat $DIRECTORY/$DUMP_FILE
    fi
else
    echo "[$0]: the name of target database is required"     
fi
