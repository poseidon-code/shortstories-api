<div align="center">

![shortstories-api](./ss-api.jpg)

[`https://shortstories-api.onrender.com`](https://shortstories-api.onrender.com)

An API that sends a random short story. This is a public API and no API key is required. \
Checkout the cool & minimal frontend of this API - [stories.io](https://storiesio.netlify.app)

| ENDPOINT                   | METHOD  | DESCRIPTION                                                    |
| -------------------------- | ------- | -------------------------------------------------------------- |
| [`/`](#get-)               | **GET** | Returns a random short story from the database                 |
| [`/stories`](#get-stories) | **GET** | Returns a list, containing all short stories from the database |

</div>

<!-- prettier-ignore -->
```ts
{
    _id     : ObjectId;     // ID of the story
    title   : String;       // Title of the story
    author  : String;       // Author of the story
    story   : String;       // Entire story (plain text)
    moral   : String;       // Moral of the story
}
```

---

### GET `/`

Returns a random short story from the database.

**Request :**

```bash
curl https://shortstories-api.onrender.com/
```

**Response :**

```bash
{
    "_id"     : "5ff6fb389f24d116ce28d716",
    "title"   : "Jupiter and the Monkey",
    "author"  : "Aesop's Fables",
    "story"   : "There was once a baby show among the Animals in the forest. Jupiter provided the prize. Of course all the proud mammas from far and near brought their babies. But none got there earlier than Mother Monkey. Proudly she presented her baby among the other contestants. As you can imagine, there was quite a laugh when the Animals saw the ugly flat-nosed, hairless, pop-eyed little creature. \"Laugh if you will,\" said the Mother Monkey. \"Though Jupiter may not give him the prize, I know that he is the prettiest, the sweetest, the dearest darling in the world.\"",
    "moral"   : "Mother love is blind."
}
```

### GET `/stories`

Returns a list, containing all short stories from the database.

**Request :**

```bash
curl https://shortstories-api.onrender.com/stories
```

**Response :**

```bash
[
    {
        "_id"     : "5ff6fb389f24d116ce28d69f",
        "title"   : "The Wolf in Sheep's Clothing",
        "author"  : "Aesop's Fables",
        "story"   : "A certain Wolf could not get enough to eat because of the watchfulness of the Shepherds. But one night he found a sheep skin that had been cast aside and forgotten. The next day, dressed in the skin, the Wolf strolled into the pasture with the Sheep. Soon a little Lamb was following him about and was quickly led away to slaughter. That evening the Wolf entered the fold with the flock. But it happened that the Shepherd took a fancy for mutton broth that very evening, and, picking up a knife, went to the fold. There the first he laid hands on and killed was the Wolf.",
        "moral"   : "The evil doer often comes to harm through his own deceit."
    }
    ... 140 more
]
```
