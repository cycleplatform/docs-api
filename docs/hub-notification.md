---
sidebar_position: 2
title: Hub Notification
---

# Hub Notification Pipeline Websocket Connection

The hub notification pipeline is a major part of building event driven architectures on top of the Cycle platform. All hub events are pushed down through this pipeline.

## Authentication

Use this [REST API Call](/api#tag/WebsocketAuth/paths/~1v1~1hubs~1current~1notifications/get) to get authentication resources for this call.

### Example With Auth Call

```bash
#!/bin/bash


websocketAuth() {
  echo $(curl  https://api.cycle.io/v1/hubs/current/notifications \
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
      https://api.cycle.io/v1/hubs/current/notifications?token=$token
```

## Hub Notification Schema

The notifications that come down the hub notification pipeline all adhere to the following shape:

```
{
  topic: Generic
  object: {
    id: string
    state: string (optional)
    error: string (optional)
  }
  context: {
    hub_id: string | null
    account_id: string | null
    environments: array of strings | null
    dns_zones: array of strings | null
    containers: array of strings | null
  }
  flags: [
    {
      string: boolean
    },
    {
      string: boolean
    }
  ]
}
```

## Hub Notification Topics

```typescript
export type HubTopic =
  // billing credits
  | "billing.credit.created"
  | "billing.credit.state.changed"
  | "billing.credit.error"

  // billing discount
  | "billing.discount.state.changed"
  | "billing.discount.error"

  // billing invoice
  | "billing.invoice.created"
  | "billing.invoice.updated"
  | "billing.invoice.state.changed"
  | "billing.invoice.error"

  //billing method
  | "billing.method.created"
  | "billing.method.state.changed"
  | "billing.method.updated"
  | "billing.method.error"

  // billing order
  | "billing.order.created"
  | "billing.order.state.changed"
  | "billing.order.error"
  | "billing.order.updated"

  // billing service
  | "billing.service.state.changed"
  | "billing.service.error"

  // container
  | "container.created"
  | "container.updated"
  | "container.reconfigured"
  | "container.state.changed"
  | "container.desired_state.changed"
  | "container.error"
  | "container.backup.created"
  | "container.backup.error"
  | "container.backup.state.changed"

  // container instance
  | "container.instance.state.changed"
  | "container.instance.error"
  | "container.instances.reconfigured"
  | "container.instance.migration.update"
  | "container.instance.health.status.changed"

  // dns certificate
  | "dns.certificate.state.changed"
  | "dns.certificate.error"

  // dns zone
  | "dns.zone.state.changed"
  | "dns.zone.error"
  | "dns.zone.created"
  | "dns.zone.verified"
  | "dns.zone.reconfigured"
  | "dns.zone.certificate.ready"

  // dns zone record
  | "dns.zone.record.state.changed"
  | "dns.zone.records.reconfigured"

  // environments
  | "environment.started"
  | "environment.stopped"
  | "environment.created"
  | "environment.updated"
  | "environment.error"
  | "environment.state.changed"

  // environment services
  | "environment.services.reconfigured"
  | "environment.services.vpn.users.updated"
  | "environment.services.lb.ips.modified"

  // environment scoped variables
  | "environment.scoped-variable.created"
  | "environment.scoped-variable.updated"
  | "environment.scoped-variable.state.changed"

  // hub
  | "hub.activity.new"
  | "hub.state.changed"
  | "hub.error"
  | "hub.updated"

  // hub api keys
  | "hub.api_key.created"
  | "hub.api_key.updated"
  | "hub.api_key.state.changed"
  | "hub.api_key.error"

  // hub memberships
  | "hub.membership.state.changed"
  | "hub.membership.error"
  | "hub.membership.updated"
  | "hub.membership.new"

  // images
  | "image.created"
  | "image.state.changed"
  | "image.updated"
  | "image.error"

  // image-sources
  | "image.source.state.changed"
  | "image.source.error"
  | "image.source.updated"
  | "image.source.created"

  // infrastructure ips assignment
  | "infrastructure.ips.assignment.state.changed"
  | "infrastructure.ips.assignment.error"

  // infrastructure ips pool
  | "ips_pool.state.changed"
  | "ips_pool.error"

  // infrastructure provider
  | "infrastructure.provider.*"
  | "infrastructure.provider.state.changed"
  | "infrastructure.provider.error"
  | "infrastructure.provider.created"
  | "infrastructure.provider.updated"

  // infrastructure server
  | "infrastructure.server.state.changed"
  | "infrastructure.server.error"
  | "infrastructure.server.new"
  | "infrastructure.server.reconfigured"
  | "infrastructure.server.restart"
  | "infrastructure.server.compute.restart"

  // jobs
  | "job.created"
  | "job.state.changed"

  // pipeline
  | "pipeline.state.changed"
  | "pipeline.error"
  | "pipeline.updated"
  | "pipeline.created"

  // pipeline key
  | "pipeline.key.state.changed"
  | "pipeline.key.error"
  | "pipeline.key.updated"
  | "pipeline.key.created"

  // pipeline run
  | "pipeline.run.state.changed"
  | "pipeline.run.error"
  | "pipeline.run.created"

  // sdn
  | "sdn.network.created"
  | "sdn.network.error"
  | "sdn.network.reconfigured"
  | "sdn.network.state.changed"
  | "sdn.network.updated"

  // secret
  | "secret.state.changed"
  | "secret.error"

  // stack
  | "stack.state.changed"
  | "stack.error"
  | "stack.created"
  | "stack.updated"

  // stack builds
  | "stack.build.created"
  | "stack.build.state.changed"
  | "stack.build.error"
  | "stack.build.deployed";
```
