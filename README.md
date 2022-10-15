# Random Image From Zerochan.Net

![](https://randomimg.4relial.repl.co)

Simple API wrapped around z in order to be able to get random anime images for my markdown profile

## API

Here are different keyword for API requests. keyword can be updated by the author, so, please, check [ZEROCHAN](https://www.zerochan.net/).

```javascript
{
keyword :  [
  "genshin",
  "honkai",
  "megumi"
]
}
```
```javascript
{
genshin: {
  key : "genshin+impact",
  pg : 99
},
honkai: {
  key : "houkai+3rd",
  pg : 99
},
megumi: {
  key : "katou+megumi",
  pg : 15
}
}
```

Live:  
![](https://randomimg.4relial.repl.co/megumi)

## How to get an image

| URL                                  | Request Type |
| ------------------------------------ | ------------ |
| `https://randomimg.4relial.repl.co/keyword` | **GET**      |

![](hhttps://randomimg.4relial.repl.co/megumi)

## How to use an image in Markdown

Just put the above url in typical Markdown syntax

```markdown
![](https://randomimg.4relial.repl.co/keyword)
```
