# Farmers Markets location information

Simple API to a small database containing information about farmer markets location in the US

## You'll need

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] clone this repository.
- [ ] **CD into the folder** where you cloned the repo.
- [ ] type `npm i` to download dependencies.

### Base URL
The current one is `http://localhost:4000`

### Endpoints included: 

| REST endpoint |
|:-------------:|
| GET /markets  |

Hitting this endpoint will return an array of objects that look like this: 

```
{
        "listing_id": "300002",
        "update_time": "2020-08-03 13:44:04",
        "listing_name": "Colorado Farm and Art Market",
        "location_address": "7350 Pine Creek Road, Colorado Springs, Colorado 80919",
        "location_x": "-104.81468",
        "location_y": "38.9377160"
    },
```
The `location_x` & `location_y` properties relate to the coordinates





