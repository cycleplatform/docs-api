---
sidebar_position: 4
title: Instance Telemetry
---

# Instance Telemetry Stream Websocket

The instance telemetry stream is a websocket connection that broadcasts instance telemetry data points in the exact same schema as returned by the [Instance Telemetery Report REST call](/api#tag/Containers/operation/getInstanceResourcesTelemetryReport).

## Authentication

Use this [REST API Call](/api#tag/Containers/operation/getInstanceResourcesTelemetryReport) to get authentication resources for this call.

### Example with Auth Call

```bash

#!/bin/bash
websocketAuth() {
  echo $(curl  https://api.cycle.io/v1/containers/$containerId/instances/$instanceId/telemetry/resources/stream \
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
      --header "Host: api.cycle.io" \
      --header "Origin: https://api.cycle.io" \
      --header "Sec-WebSocket-Key: $APIKEY" \
      --header "Sec-WebSocket-Version: 13" \
      -H "x-cycle-token: $token" \
      -H "Authorization: Bearer $APIKEY" \
      -H "X-Hub-Id: $CYCLEHUBID" \
      https://api.cycle.io/v1/containers/$containerId/instances/$instanceId/telemetry/resources/stream?token=$token

```
