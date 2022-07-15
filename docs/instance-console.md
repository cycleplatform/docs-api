---
sidebar_position: 3
title: Instance Console
---

# Instnace Console Websocket

The instance console pipeline is a websocket connection that broadcasts the events of an instance's PID 1 as a raw data stream.

## Authentication

Use this [REST API Call](/api#tag/WebsocketAuth/paths/~1v1~1containers~1%7BcontainerId%7D~1instances~1%7BinstanceId%7D~1console/get) to get authentication resources for this call.

### Example With Auth Call

```bash

websocketAuth() {
  echo $(curl  https://api.cycle.io/v1/containers/$containerId/instances/$instanceId/console \
      -H "Authorization: Bearer $APIKEY" \
      -H "X-Hub-Id: $CYCLEHUBID")
  echo "done"
}

value=$(websocketAuth)
token=$(echo $value | jq '.data' | jq -r '.token')
address=$(echo $value |jq '.data' |  jq -r '.address' )


curl  -o - --http1.1 --include \
      --no-buffer \
      --header "Connection: Upgrade" \
      --header "Upgrade: websocket" \
      --header "Host: api.dev.cycle.io" \
      --header "Origin: https://api.dev.cycle.io" \
      --header "Sec-WebSocket-Key: $APIKEY" \
      --header "Sec-WebSocket-Version: 13" \
      -H "x-cycle-token: $token" \
      -H "Authorization: Bearer $APIKEY" \
      -H "X-Hub-Id: $CYCLEHUBID" \
      https://console.cycle.io:8920/v1/console?token=$token
```

## Receivables

This websocket streams information written to `stdout` by the containers main process.

### Example from MySQL Container on Startup

```txt
[Jul 14 23:36:21.991][  CYCLE COMPUTE]  Instance 6260eb9aabe0af5a0b7b1680 started
2022-07-14 23:36:22+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.0.28-1.el8 started.
2022-07-14 23:36:22+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2022-07-14 23:36:22+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.0.28-1.el8 started.
'/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
2022-07-14T23:36:23.081414Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.28) starting as process 1
2022-07-14T23:36:23.101566Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2022-07-14T23:36:23.585816Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2022-07-14T23:36:23.802423Z 1 [ERROR] [MY-012226] [InnoDB] Encryption information in datafile: ./test/users.ibd can't be decrypted, please confirm that keyring is loaded.
2022-07-14T23:36:23.985316Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2022-07-14T23:36:23.985968Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2022-07-14T23:36:24.052065Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2022-07-14T23:36:24.053825Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.28'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.��
```
