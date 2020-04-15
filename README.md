# Pipedrive-Bling
A dockerized Node.js project that integrates Pipedrive with Bling. If a deal has status "won" in Pipedrive, it will create an "order" on Bling platform.

## Get started

1. Open `docker-compose.yml` and edit lines 31, 32 and 33 with your Pipedrive and Blig API keys and domain.

2. then build the docker:

```$ docker-compose build```

3. and then run the project:

```$ docker-compose up```

4. The base URL shall be: https://127.0.0.1:8099


## Available endpoints

`GET /v1/deals`: will bring the deals won in Pipedrive that reflect an order in Bling.

`GET /v1/consolidate`: will run the integration, looking for won deals in Pipedrive and creating orders in Bling.

## Notice
As this is a simple demonstration of an integration, all data stored is deleted when the docker is stopped.

## TODO
- API authentication
- Persist data after docker is stopped
