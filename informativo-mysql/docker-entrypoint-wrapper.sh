#!/bin/sh

if [ -f /run/secrets/MYSQL_ROOT_PASSWORD ];
    export MYSQL_ROOT_PASSWORD=$(cat /run/secrets/MYSQL_ROOT_PASSWORD)
fi

if [ -f /run/secrets/MYSQL_PASSWORD ];
    export MYSQL_PASSWORD=$(cat /run/secrets/MYSQL_PASSWORD)
fi

exec /entrypoint.sh "$@"
