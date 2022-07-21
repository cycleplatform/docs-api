#!/bin/bash

docker build -t cycleplatform/api-docs:latest .

docker push cycleplatform/api-docs:latest
