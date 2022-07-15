---
sidebar_position: 1
---

# Cycle Websockets API

## Overview

The Cycle Websockets API offers real-time data updates. WebSockets is a bidirectional protocol offering fastest real-time data, helping users build real-time applications. All channels offered require authentication supported through our REST API and the authentication endpoints will match the endpoint of the websocket the user desires.

## General Points

- All messages are JSON encoded.
- Token's required to be passed as a query parameter can be obtained by using the corresponding REST endpoint.
- Timestamps should not be considered unique and not be considered as aliases for transaction IDs. Also, the granularity of timestamps is not representative of transaction rates.

## Authentication

The API client must request an authentication "token" via the associated REST endpoint. The token should be used within 15 minutes of creation. The token does not expire once a connection is made but a new token will need to be obtained if the connection is dropped and the current token has expired.

** Authentication Return Struct Example **

```json
{
  "data": {
    "token": "OG4BTTP3V_nBh92ETm9qGOAbcCvPTS-M9DE_0UWs2-oCd7WnGuhNxVq2jsEbc7dWP9YXnBsXkabno4OlarGxRbfhumpOlllYr6wTu8TLaml1OWCoOzhk30x4U7Jnp3zm1hhiKEKNZFbDBbkbnk65EHUdPAPdskXlGmBccCGBjMCxnA_gbY9BdDRNiM9WSN_v"
  }
}
```

:::info Authentication Response Structs
Some endpoints will return more than just the token, be sure the check the REST API documentation for the full struct for each endpoint.
:::
