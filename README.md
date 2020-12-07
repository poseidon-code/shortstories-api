# shortstories-api
An API that sends a random short story. This is an public API, no api key is required.

Response Structure :
```json
{
  "_id": "ObjectId",
  "title": "...String",
  "author": "...String",
  "story": "...String",
  "moral": "...String",
}
```

**Request URL :** https://shortstories-api.herokuapp.com

## Endpoints
### GET `/`
Returns a random short story from the database.

**Request :**
```js
axios.get('https://shortstories-api.herokuapp.com/').then(result => console.log(result))
```
**Response :**
```bash
{
  "_id": "ObjectId",
  "title": "...String",
  "author": "...String",
  "story": "...String",
  "moral": "...String",
}
```

### GET `/stories`
Returns an array containing all the short stories from the database.

**Request :**
```js
axios.get('https://shortstories-api.herokuapp.com/stories').then(result => console.log(result))
```
**Response :**
```bash
[
  {
    "_id": "ObjectId",
    "title": "...String",
    "author": "...String",
    "story": "...String",
    "moral": "...String",
  },
  {
    "_id": "ObjectId",
    "title": "...String",
    "author": "...String",
    "story": "...String",
    "moral": "...String",
  },
  ...
]
```
